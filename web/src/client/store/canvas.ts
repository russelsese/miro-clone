import { create } from 'zustand';
import type { ShapeType } from '../../shared/types';

export type Tool =
  | 'select'
  | 'hand'
  | 'sticky'
  | 'text'
  | 'shape'
  | 'pen'
  | 'eraser'
  | 'line'
  | 'image'
  | 'frame'
  | 'comment';

interface CanvasState {
  // View
  zoom: number;
  panX: number;
  panY: number;

  // Tool
  tool: Tool;
  shapeType: ShapeType;
  stickyColor: string;
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
  fontSize: number;

  // Drawing state
  isDrawing: boolean;
  isPanning: boolean;
  isSelecting: boolean;

  // Actions
  setZoom: (zoom: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  fitToView: (contentWidth: number, contentHeight: number, containerWidth: number, containerHeight: number) => void;

  setPan: (x: number, y: number) => void;
  pan: (dx: number, dy: number) => void;

  setTool: (tool: Tool) => void;
  setShapeType: (shapeType: ShapeType) => void;
  setStickyColor: (color: string) => void;
  setStrokeColor: (color: string) => void;
  setFillColor: (color: string) => void;
  setStrokeWidth: (width: number) => void;
  setFontSize: (size: number) => void;

  setIsDrawing: (isDrawing: boolean) => void;
  setIsPanning: (isPanning: boolean) => void;
  setIsSelecting: (isSelecting: boolean) => void;

  // Convert coordinates
  screenToCanvas: (screenX: number, screenY: number) => { x: number; y: number };
  canvasToScreen: (canvasX: number, canvasY: number) => { x: number; y: number };
}

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 1.25;

export const useCanvasStore = create<CanvasState>((set, get) => ({
  zoom: 1,
  panX: 0,
  panY: 0,

  tool: 'select',
  shapeType: 'rectangle',
  stickyColor: '#ffd966',
  strokeColor: '#1a1a1a',
  fillColor: '#ffffff',
  strokeWidth: 2,
  fontSize: 14,

  isDrawing: false,
  isPanning: false,
  isSelecting: false,

  setZoom: (zoom: number) => {
    set({ zoom: Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom)) });
  },

  zoomIn: () => {
    set((state) => ({
      zoom: Math.min(MAX_ZOOM, state.zoom * ZOOM_STEP),
    }));
  },

  zoomOut: () => {
    set((state) => ({
      zoom: Math.max(MIN_ZOOM, state.zoom / ZOOM_STEP),
    }));
  },

  resetZoom: () => {
    set({ zoom: 1, panX: 0, panY: 0 });
  },

  fitToView: (contentWidth, contentHeight, containerWidth, containerHeight) => {
    const padding = 100;
    const scaleX = (containerWidth - padding) / contentWidth;
    const scaleY = (containerHeight - padding) / contentHeight;
    const zoom = Math.min(scaleX, scaleY, 1);

    const panX = (containerWidth - contentWidth * zoom) / 2;
    const panY = (containerHeight - contentHeight * zoom) / 2;

    set({ zoom, panX, panY });
  },

  setPan: (x: number, y: number) => {
    set({ panX: x, panY: y });
  },

  pan: (dx: number, dy: number) => {
    set((state) => ({
      panX: state.panX + dx,
      panY: state.panY + dy,
    }));
  },

  setTool: (tool: Tool) => {
    set({ tool, isDrawing: false, isSelecting: false });
  },

  setShapeType: (shapeType: ShapeType) => {
    set({ shapeType });
  },

  setStickyColor: (color: string) => {
    set({ stickyColor: color });
  },

  setStrokeColor: (color: string) => {
    set({ strokeColor: color });
  },

  setFillColor: (color: string) => {
    set({ fillColor: color });
  },

  setStrokeWidth: (width: number) => {
    set({ strokeWidth: width });
  },

  setFontSize: (size: number) => {
    set({ fontSize: size });
  },

  setIsDrawing: (isDrawing: boolean) => {
    set({ isDrawing });
  },

  setIsPanning: (isPanning: boolean) => {
    set({ isPanning });
  },

  setIsSelecting: (isSelecting: boolean) => {
    set({ isSelecting });
  },

  screenToCanvas: (screenX: number, screenY: number) => {
    const { zoom, panX, panY } = get();
    return {
      x: (screenX - panX) / zoom,
      y: (screenY - panY) / zoom,
    };
  },

  canvasToScreen: (canvasX: number, canvasY: number) => {
    const { zoom, panX, panY } = get();
    return {
      x: canvasX * zoom + panX,
      y: canvasY * zoom + panY,
    };
  },
}));
