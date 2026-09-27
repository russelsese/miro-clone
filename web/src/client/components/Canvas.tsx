import { useRef, useEffect, useCallback, useState } from 'react';
import { Stage, Layer, Rect, Circle, Line, Text, Group, Transformer } from 'react-konva';
import Konva from 'konva';
import { useBoardStore } from '../store/board';
import { useCanvasStore } from '../store/canvas';
import { useWebSocket } from '../hooks/useWebSocket';
import { v4 as uuidv4 } from 'uuid';
import type { CanvasObject, StickyObject, ShapeObject, TextObject, LineObject, FreehandObject, FrameObject } from '../../shared/types';

export function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);

  const { objects, selectedIds, select, clearSelection, role, board } = useBoardStore();
  const {
    zoom,
    panX,
    panY,
    tool,
    setZoom,
    setPan,
    pan,
    stickyColor,
    strokeColor,
    fillColor,
    strokeWidth,
    fontSize,
    shapeType,
    isDrawing,
    setIsDrawing,
    isPanning,
    setIsPanning,
    screenToCanvas,
  } = useCanvasStore();

  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [drawingPoints, setDrawingPoints] = useState<number[]>([]);
  const [selectionRect, setSelectionRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [editingTextId, setEditingTextId] = useState<string | null>(null);

  const ws = useWebSocket(board?.id || null);
  const canEdit = role === 'owner' || role === 'editor';

  // Resize handler
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setStageSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Update transformer when selection changes
  useEffect(() => {
    if (!transformerRef.current || !stageRef.current) return;

    const nodes: Konva.Node[] = [];
    selectedIds.forEach((id) => {
      const node = stageRef.current?.findOne(`#${id}`);
      if (node) nodes.push(node);
    });

    transformerRef.current.nodes(nodes);
    transformerRef.current.getLayer()?.batchDraw();
  }, [selectedIds]);

  // Create object helper
  const createObject = useCallback(
    (type: string, data: Partial<CanvasObject>) => {
      if (!ws.current || !board) return;

      const id = uuidv4();
      const objectData = {
        id,
        type,
        ...data,
      };

      ws.current.send(
        JSON.stringify({
          type: 'op',
          boardId: board.id,
          payload: {
            op: 'create',
            objectId: id,
            data: objectData,
          },
        })
      );
    },
    [ws, board]
  );

  // Update object helper
  const updateObject = useCallback(
    (id: string, updates: Partial<CanvasObject>) => {
      if (!ws.current || !board) return;

      ws.current.send(
        JSON.stringify({
          type: 'op',
          boardId: board.id,
          payload: {
            op: 'update',
            objectId: id,
            data: updates,
          },
        })
      );
    },
    [ws, board]
  );

  // Delete object helper
  const deleteSelectedObjects = useCallback(() => {
    if (!ws.current || !board || selectedIds.size === 0) return;

    selectedIds.forEach((id) => {
      ws.current?.send(
        JSON.stringify({
          type: 'op',
          boardId: board.id,
          payload: {
            op: 'delete',
            objectId: id,
          },
        })
      );
    });

    clearSelection();
  }, [ws, board, selectedIds, clearSelection]);

  // Handle stage mouse down
  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (!stage) return;

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const canvasPos = screenToCanvas(pointer.x, pointer.y);

    // Hand tool - start panning
    if (tool === 'hand' || e.evt.altKey || e.evt.button === 1) {
      setIsPanning(true);
      return;
    }

    // Click on empty space
    if (e.target === stage) {
      clearSelection();

      // Selection box
      if (tool === 'select' && canEdit) {
        setSelectionRect({ x: canvasPos.x, y: canvasPos.y, width: 0, height: 0 });
      }

      // Create sticky
      if (tool === 'sticky' && canEdit) {
        createObject('sticky', {
          x: canvasPos.x - 75,
          y: canvasPos.y - 75,
          width: 150,
          height: 150,
          rotation: 0,
          locked: false,
          text: '',
          color: stickyColor,
          fontSize: 14,
          fontWeight: 'normal',
          fontStyle: 'normal',
          textAlign: 'left',
        });
      }

      // Create text
      if (tool === 'text' && canEdit) {
        createObject('text', {
          x: canvasPos.x,
          y: canvasPos.y,
          width: 200,
          height: 30,
          rotation: 0,
          locked: false,
          text: 'Type here...',
          color: '#1a1a1a',
          fontSize: fontSize,
          fontWeight: 'normal',
          fontStyle: 'normal',
          textDecoration: 'none',
          textAlign: 'left',
        });
      }

      // Create shape
      if (tool === 'shape' && canEdit) {
        createObject('shape', {
          x: canvasPos.x - 50,
          y: canvasPos.y - 50,
          width: 100,
          height: 100,
          rotation: 0,
          locked: false,
          shapeType: shapeType,
          text: '',
          fillColor: fillColor,
          strokeColor: strokeColor,
          strokeWidth: strokeWidth,
          fontSize: 14,
          fontWeight: 'normal',
          fontStyle: 'normal',
          textAlign: 'center',
        });
      }

      // Create frame
      if (tool === 'frame' && canEdit) {
        createObject('frame', {
          x: canvasPos.x - 150,
          y: canvasPos.y - 100,
          width: 300,
          height: 200,
          rotation: 0,
          locked: false,
          title: 'Frame',
          backgroundColor: '#ffffff',
          children: [],
        });
      }

      // Start freehand drawing
      if ((tool === 'pen' || tool === 'eraser') && canEdit) {
        setIsDrawing(true);
        setDrawingPoints([canvasPos.x, canvasPos.y]);
      }

      // Start line
      if (tool === 'line' && canEdit) {
        setIsDrawing(true);
        setDrawingPoints([canvasPos.x, canvasPos.y, canvasPos.x, canvasPos.y]);
      }
    }
  };

  // Handle mouse move
  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    if (!stage) return;

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    // Send cursor position
    if (ws.current && board) {
      const canvasPos = screenToCanvas(pointer.x, pointer.y);
      ws.current.send(
        JSON.stringify({
          type: 'cursor',
          boardId: board.id,
          payload: { x: canvasPos.x, y: canvasPos.y },
        })
      );
    }

    // Panning
    if (isPanning) {
      const dx = e.evt.movementX;
      const dy = e.evt.movementY;
      pan(dx, dy);
      return;
    }

    const canvasPos = screenToCanvas(pointer.x, pointer.y);

    // Selection box
    if (selectionRect) {
      setSelectionRect({
        ...selectionRect,
        width: canvasPos.x - selectionRect.x,
        height: canvasPos.y - selectionRect.y,
      });
    }

    // Freehand drawing
    if (isDrawing && (tool === 'pen' || tool === 'eraser')) {
      setDrawingPoints([...drawingPoints, canvasPos.x, canvasPos.y]);
    }

    // Line drawing
    if (isDrawing && tool === 'line') {
      const newPoints = [...drawingPoints];
      newPoints[2] = canvasPos.x;
      newPoints[3] = canvasPos.y;
      setDrawingPoints(newPoints);
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsPanning(false);

    // Finish selection box
    if (selectionRect) {
      const rect = {
        x: Math.min(selectionRect.x, selectionRect.x + selectionRect.width),
        y: Math.min(selectionRect.y, selectionRect.y + selectionRect.height),
        width: Math.abs(selectionRect.width),
        height: Math.abs(selectionRect.height),
      };

      if (rect.width > 5 && rect.height > 5) {
        const selected: string[] = [];
        objects.forEach((obj) => {
          if (
            obj.x >= rect.x &&
            obj.x + obj.width <= rect.x + rect.width &&
            obj.y >= rect.y &&
            obj.y + obj.height <= rect.y + rect.height
          ) {
            selected.push(obj.id);
          }
        });
        if (selected.length > 0) {
          select(selected);
        }
      }

      setSelectionRect(null);
    }

    // Finish freehand drawing
    if (isDrawing && (tool === 'pen' || tool === 'eraser') && drawingPoints.length >= 4) {
      createObject('freehand', {
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        rotation: 0,
        locked: false,
        points: drawingPoints,
        strokeColor: tool === 'eraser' ? '#f5f5f5' : strokeColor,
        strokeWidth: tool === 'eraser' ? 20 : strokeWidth,
      });
    }

    // Finish line
    if (isDrawing && tool === 'line' && drawingPoints.length >= 4) {
      createObject('line', {
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        rotation: 0,
        locked: false,
        points: drawingPoints,
        strokeColor: strokeColor,
        strokeWidth: strokeWidth,
        startArrow: false,
        endArrow: true,
        connectedStart: null,
        connectedEnd: null,
      });
    }

    setIsDrawing(false);
    setDrawingPoints([]);
  };

  // Handle wheel for zoom
  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const stage = e.target.getStage();
    if (!stage) return;

    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const scaleBy = 1.1;
    const oldZoom = zoom;
    const newZoom = e.evt.deltaY < 0 ? oldZoom * scaleBy : oldZoom / scaleBy;
    const clampedZoom = Math.max(0.1, Math.min(4, newZoom));

    // Zoom towards pointer
    const mouseX = pointer.x;
    const mouseY = pointer.y;

    const newPanX = mouseX - ((mouseX - panX) / oldZoom) * clampedZoom;
    const newPanY = mouseY - ((mouseY - panY) / oldZoom) * clampedZoom;

    setZoom(clampedZoom);
    setPan(newPanX, newPanY);
  };

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      if ((e.key === 'Delete' || e.key === 'Backspace') && canEdit) {
        deleteSelectedObjects();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deleteSelectedObjects, canEdit]);

  // Render object based on type
  const renderObject = (obj: CanvasObject) => {
    const isSelected = selectedIds.has(obj.id);
    const commonProps = {
      id: obj.id,
      x: obj.x,
      y: obj.y,
      rotation: obj.rotation,
      draggable: canEdit && !obj.locked && tool === 'select',
      onClick: (e: Konva.KonvaEventObject<MouseEvent>) => {
        e.cancelBubble = true;
        if (e.evt.shiftKey) {
          if (isSelected) {
            useBoardStore.getState().removeFromSelection(obj.id);
          } else {
            useBoardStore.getState().addToSelection(obj.id);
          }
        } else {
          select([obj.id]);
        }
      },
      onDragEnd: (e: Konva.KonvaEventObject<DragEvent>) => {
        updateObject(obj.id, { x: e.target.x(), y: e.target.y() });
      },
      onTransformEnd: (e: Konva.KonvaEventObject<Event>) => {
        const node = e.target;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        node.scaleX(1);
        node.scaleY(1);

        updateObject(obj.id, {
          x: node.x(),
          y: node.y(),
          width: Math.max(20, node.width() * scaleX),
          height: Math.max(20, node.height() * scaleY),
          rotation: node.rotation(),
        });
      },
    };

    switch (obj.type) {
      case 'sticky': {
        const sticky = obj as StickyObject;
        return (
          <Group key={obj.id} {...commonProps}>
            <Rect
              width={sticky.width}
              height={sticky.height}
              fill={sticky.color}
              cornerRadius={4}
              shadowColor="rgba(0,0,0,0.15)"
              shadowBlur={8}
              shadowOffset={{ x: 2, y: 4 }}
            />
            <Text
              text={sticky.text}
              width={sticky.width - 20}
              height={sticky.height - 20}
              x={10}
              y={10}
              fontSize={sticky.fontSize}
              fontStyle={sticky.fontStyle === 'italic' ? 'italic' : 'normal'}
              fontVariant={sticky.fontWeight === 'bold' ? 'bold' : 'normal'}
              align={sticky.textAlign}
              fill="#1a1a1a"
              wrap="word"
              onDblClick={() => setEditingTextId(obj.id)}
            />
          </Group>
        );
      }

      case 'shape': {
        const shape = obj as ShapeObject;
        return (
          <Group key={obj.id} {...commonProps}>
            {shape.shapeType === 'rectangle' && (
              <Rect
                width={shape.width}
                height={shape.height}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
                cornerRadius={8}
              />
            )}
            {shape.shapeType === 'circle' && (
              <Circle
                x={shape.width / 2}
                y={shape.height / 2}
                radius={Math.min(shape.width, shape.height) / 2}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            )}
            {shape.shapeType === 'triangle' && (
              <Line
                points={[
                  shape.width / 2, 0,
                  shape.width, shape.height,
                  0, shape.height,
                ]}
                closed
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            )}
            {shape.shapeType === 'diamond' && (
              <Line
                points={[
                  shape.width / 2, 0,
                  shape.width, shape.height / 2,
                  shape.width / 2, shape.height,
                  0, shape.height / 2,
                ]}
                closed
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            )}
            {shape.text && (
              <Text
                text={shape.text}
                width={shape.width}
                height={shape.height}
                align={shape.textAlign}
                verticalAlign="middle"
                fontSize={shape.fontSize}
                fill="#1a1a1a"
              />
            )}
          </Group>
        );
      }

      case 'text': {
        const text = obj as TextObject;
        return (
          <Text
            key={obj.id}
            {...commonProps}
            text={text.text}
            fontSize={text.fontSize}
            fontStyle={`${text.fontWeight === 'bold' ? 'bold ' : ''}${text.fontStyle === 'italic' ? 'italic' : ''}`}
            textDecoration={text.textDecoration}
            fill={text.color}
            align={text.textAlign}
            width={text.width}
            onDblClick={() => setEditingTextId(obj.id)}
          />
        );
      }

      case 'line': {
        const line = obj as LineObject;
        return (
          <Line
            key={obj.id}
            id={obj.id}
            points={line.points}
            stroke={line.strokeColor}
            strokeWidth={line.strokeWidth}
            lineCap="round"
            lineJoin="round"
            draggable={canEdit && !obj.locked && tool === 'select'}
            onClick={(e) => {
              e.cancelBubble = true;
              select([obj.id]);
            }}
          />
        );
      }

      case 'freehand': {
        const freehand = obj as FreehandObject;
        return (
          <Line
            key={obj.id}
            id={obj.id}
            points={freehand.points}
            stroke={freehand.strokeColor}
            strokeWidth={freehand.strokeWidth}
            lineCap="round"
            lineJoin="round"
            tension={0.5}
            draggable={canEdit && !obj.locked && tool === 'select'}
            onClick={(e) => {
              e.cancelBubble = true;
              select([obj.id]);
            }}
          />
        );
      }

      case 'frame': {
        const frame = obj as FrameObject;
        return (
          <Group key={obj.id} {...commonProps}>
            <Rect
              width={frame.width}
              height={frame.height}
              fill={frame.backgroundColor}
              stroke="#e0e0e0"
              strokeWidth={2}
              cornerRadius={4}
            />
            <Text
              text={frame.title}
              x={0}
              y={-24}
              fontSize={14}
              fontStyle="bold"
              fill="#444"
            />
          </Group>
        );
      }

      default:
        return null;
    }
  };

  // Sort objects by z-index
  const sortedObjects = Array.from(objects.values()).sort((a, b) => a.zIndex - b.zIndex);

  return (
    <div ref={containerRef} className="w-full h-full canvas-grid">
      <Stage
        ref={stageRef}
        width={stageSize.width}
        height={stageSize.height}
        scaleX={zoom}
        scaleY={zoom}
        x={panX}
        y={panY}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          cursor:
            tool === 'hand' || isPanning
              ? isPanning
                ? 'grabbing'
                : 'grab'
              : tool === 'pen' || tool === 'eraser'
              ? 'crosshair'
              : 'default',
        }}
      >
        <Layer>
          {/* Render all objects */}
          {sortedObjects.map(renderObject)}

          {/* Current drawing */}
          {isDrawing && drawingPoints.length >= 2 && (
            <Line
              points={drawingPoints}
              stroke={tool === 'eraser' ? '#f5f5f5' : strokeColor}
              strokeWidth={tool === 'eraser' ? 20 : strokeWidth}
              lineCap="round"
              lineJoin="round"
              tension={tool === 'line' ? 0 : 0.5}
            />
          )}

          {/* Selection rectangle */}
          {selectionRect && (
            <Rect
              x={Math.min(selectionRect.x, selectionRect.x + selectionRect.width)}
              y={Math.min(selectionRect.y, selectionRect.y + selectionRect.height)}
              width={Math.abs(selectionRect.width)}
              height={Math.abs(selectionRect.height)}
              fill="rgba(66, 98, 255, 0.1)"
              stroke="#4262ff"
              strokeWidth={1 / zoom}
            />
          )}

          {/* Transformer for selected objects */}
          <Transformer
            ref={transformerRef}
            rotateEnabled={true}
            enabledAnchors={[
              'top-left',
              'top-right',
              'bottom-left',
              'bottom-right',
              'middle-left',
              'middle-right',
              'top-center',
              'bottom-center',
            ]}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 20 || newBox.height < 20) {
                return oldBox;
              }
              return newBox;
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
}
