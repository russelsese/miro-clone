import db from './index.js';
import { v4 as uuidv4 } from 'uuid';
import type { CanvasObject, ObjectType } from '../../shared/types.js';

interface ObjectRow {
  id: string;
  board_id: string;
  type: string;
  data: string;
  z_index: number;
  created_by: string;
  updated_by: string;
  updated_at: number;
}

function rowToObject(row: ObjectRow): CanvasObject {
  const data = JSON.parse(row.data);
  return {
    id: row.id,
    boardId: row.board_id,
    type: row.type as ObjectType,
    zIndex: row.z_index,
    createdBy: row.created_by,
    updatedBy: row.updated_by,
    updatedAt: new Date(row.updated_at * 1000).toISOString(),
    ...data,
  } as CanvasObject;
}

export function createObject(
  boardId: string,
  type: ObjectType,
  data: Partial<CanvasObject>,
  userId: string
): CanvasObject {
  const id = data.id || uuidv4();
  const now = Math.floor(Date.now() / 1000);

  // Get max z_index for the board
  const maxZStmt = db.prepare('SELECT MAX(z_index) as max_z FROM board_objects WHERE board_id = ?');
  const maxZRow = maxZStmt.get(boardId) as { max_z: number | null };
  const zIndex = (maxZRow?.max_z ?? 0) + 1;

  // Extract position and dimensions from data
  const { id: _id, boardId: _boardId, type: _type, zIndex: _zIndex, createdBy: _createdBy, updatedBy: _updatedBy, updatedAt: _updatedAt, ...objectData } = data as Record<string, unknown>;

  const stmt = db.prepare(`
    INSERT INTO board_objects (id, board_id, type, data, z_index, created_by, updated_by, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(id, boardId, type, JSON.stringify(objectData), zIndex, userId, userId, now);

  return getObjectById(id)!;
}

export function getObjectById(objectId: string): CanvasObject | null {
  const stmt = db.prepare('SELECT * FROM board_objects WHERE id = ?');
  const row = stmt.get(objectId) as ObjectRow | undefined;
  return row ? rowToObject(row) : null;
}

export function getBoardObjects(boardId: string): CanvasObject[] {
  const stmt = db.prepare(`
    SELECT * FROM board_objects
    WHERE board_id = ?
    ORDER BY z_index ASC
  `);
  const rows = stmt.all(boardId) as ObjectRow[];
  return rows.map(rowToObject);
}

export function updateObject(
  objectId: string,
  updates: Partial<CanvasObject>,
  userId: string
): CanvasObject | null {
  const existing = getObjectById(objectId);
  if (!existing) return null;

  const now = Math.floor(Date.now() / 1000);

  // Merge existing data with updates
  const { id: _id, boardId: _boardId, type: _type, zIndex, createdBy: _createdBy, updatedBy: _updatedBy, updatedAt: _updatedAt, ...existingData } = existing as Record<string, unknown>;
  const { id: __id, boardId: __boardId, type: __type, zIndex: newZIndex, createdBy: __createdBy, updatedBy: __updatedBy, updatedAt: __updatedAt, ...updateData } = updates as Record<string, unknown>;

  const mergedData = { ...existingData, ...updateData };

  const stmt = db.prepare(`
    UPDATE board_objects
    SET data = ?, z_index = ?, updated_by = ?, updated_at = ?
    WHERE id = ?
  `);
  stmt.run(
    JSON.stringify(mergedData),
    newZIndex !== undefined ? newZIndex : zIndex,
    userId,
    now,
    objectId
  );

  return getObjectById(objectId);
}

export function deleteObject(objectId: string): boolean {
  const stmt = db.prepare('DELETE FROM board_objects WHERE id = ?');
  const result = stmt.run(objectId);
  return result.changes > 0;
}

export function bringToFront(objectId: string, userId: string): CanvasObject | null {
  const obj = getObjectById(objectId);
  if (!obj) return null;

  const now = Math.floor(Date.now() / 1000);

  // Get max z_index
  const maxZStmt = db.prepare('SELECT MAX(z_index) as max_z FROM board_objects WHERE board_id = ?');
  const maxZRow = maxZStmt.get(obj.boardId) as { max_z: number };
  const newZIndex = maxZRow.max_z + 1;

  const stmt = db.prepare(`
    UPDATE board_objects SET z_index = ?, updated_by = ?, updated_at = ? WHERE id = ?
  `);
  stmt.run(newZIndex, userId, now, objectId);

  return getObjectById(objectId);
}

export function sendToBack(objectId: string, userId: string): CanvasObject | null {
  const obj = getObjectById(objectId);
  if (!obj) return null;

  const now = Math.floor(Date.now() / 1000);

  // Get min z_index
  const minZStmt = db.prepare('SELECT MIN(z_index) as min_z FROM board_objects WHERE board_id = ?');
  const minZRow = minZStmt.get(obj.boardId) as { min_z: number };
  const newZIndex = minZRow.min_z - 1;

  const stmt = db.prepare(`
    UPDATE board_objects SET z_index = ?, updated_by = ?, updated_at = ? WHERE id = ?
  `);
  stmt.run(newZIndex, userId, now, objectId);

  return getObjectById(objectId);
}

export function duplicateObject(objectId: string, userId: string, offsetX = 20, offsetY = 20): CanvasObject | null {
  const original = getObjectById(objectId);
  if (!original) return null;

  const newId = uuidv4();
  const now = Math.floor(Date.now() / 1000);

  // Get max z_index
  const maxZStmt = db.prepare('SELECT MAX(z_index) as max_z FROM board_objects WHERE board_id = ?');
  const maxZRow = maxZStmt.get(original.boardId) as { max_z: number };
  const newZIndex = maxZRow.max_z + 1;

  // Clone data with offset
  const { id: _id, boardId, type, zIndex: _zIndex, createdBy: _createdBy, updatedBy: _updatedBy, updatedAt: _updatedAt, x, y, ...restData } = original as Record<string, unknown>;
  const newData = {
    ...restData,
    x: (x as number) + offsetX,
    y: (y as number) + offsetY,
  };

  const stmt = db.prepare(`
    INSERT INTO board_objects (id, board_id, type, data, z_index, created_by, updated_by, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(newId, boardId, type, JSON.stringify(newData), newZIndex, userId, userId, now);

  return getObjectById(newId);
}

export function getMaxZIndex(boardId: string): number {
  const stmt = db.prepare('SELECT MAX(z_index) as max_z FROM board_objects WHERE board_id = ?');
  const row = stmt.get(boardId) as { max_z: number | null };
  return row?.max_z ?? 0;
}
