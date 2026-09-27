import { useCanvasStore, Tool } from '../store/canvas';
import { useBoardStore } from '../store/board';
import { STICKY_COLORS } from '../../shared/types';
import { useState } from 'react';

const tools: { id: Tool; icon: React.ReactNode; label: string; shortcut: string }[] = [
  {
    id: 'select',
    label: 'Select',
    shortcut: 'V',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2L4 14L7.5 11L9.5 16L11.5 15L9.5 10L13 10L4 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'hand',
    label: 'Hand',
    shortcut: 'H',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 3V10M10 3C10 2.4 9.6 2 9 2S8 2.4 8 3V10" strokeLinecap="round" />
        <path d="M12 4.5V10M12 4.5C12 3.9 12.4 3.5 13 3.5S14 3.9 14 4.5V10" strokeLinecap="round" />
        <path d="M8 5V10M8 5C8 4.4 7.6 4 7 4S6 4.4 6 5V12C6 15 8 17 11 17C13.8 17 16 14.8 16 12V10C16 9.4 15.6 9 15 9S14 9.4 14 10" strokeLinecap="round" />
      </svg>
    ),
  },
];

const drawingTools: { id: Tool; icon: React.ReactNode; label: string; shortcut: string }[] = [
  {
    id: 'sticky',
    label: 'Sticky note',
    shortcut: 'S',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 4C3 3.4 3.4 3 4 3H16C16.6 3 17 3.4 17 4V13L12 18H4C3.4 18 3 17.6 3 17V4Z" strokeLinejoin="round" />
        <path d="M12 13V18L17 13H12Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'text',
    label: 'Text',
    shortcut: 'T',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 5H17M10 5V16M7 16H13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'shape',
    label: 'Shapes',
    shortcut: 'R',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <circle cx="14" cy="6" r="3" />
        <path d="M3 14L6 10L9 14H3Z" strokeLinejoin="round" />
        <rect x="11" y="12" width="6" height="5" rx="1" />
      </svg>
    ),
  },
  {
    id: 'pen',
    label: 'Pen',
    shortcut: 'P',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 3.5L16.5 5.5L7 15L4 16L5 13L14.5 3.5Z" strokeLinejoin="round" />
        <path d="M13 5L15 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'line',
    label: 'Line',
    shortcut: 'L',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="4" cy="16" r="2" />
        <circle cx="16" cy="4" r="2" />
        <path d="M5.5 14.5L14.5 5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'frame',
    label: 'Frame',
    shortcut: 'F',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M3 7H17" />
      </svg>
    ),
  },
];

const extraTools: { id: Tool; icon: React.ReactNode; label: string; shortcut?: string }[] = [
  {
    id: 'comment',
    label: 'Comment',
    shortcut: 'C',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 4C3 3.4 3.4 3 4 3H16C16.6 3 17 3.4 17 4V13C17 13.6 16.6 14 16 14H7L3 17V4Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Toolbar() {
  const { tool, setTool, stickyColor, setStickyColor } = useCanvasStore();
  const { role } = useBoardStore();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const canEdit = role === 'owner' || role === 'editor';

  return (
    <aside className="fixed top-14 left-2 bottom-14 flex flex-col items-center gap-1 z-40">
      {/* Selection tools */}
      <div className="bg-white rounded-lg shadow-toolbar p-1 flex flex-col gap-0.5">
        {tools.map((t) => (
          <div key={t.id} className="tooltip-wrapper">
            <button
              className={`toolbar-btn ${tool === t.id ? 'active' : ''}`}
              onClick={() => setTool(t.id)}
              title={`${t.label} (${t.shortcut})`}
            >
              {t.icon}
            </button>
            <span className="tooltip">{t.label} ({t.shortcut})</span>
          </div>
        ))}
      </div>

      {/* Drawing tools - only show if can edit */}
      {canEdit && (
        <div className="bg-white rounded-lg shadow-toolbar p-1 flex flex-col gap-0.5">
          {drawingTools.map((t) => (
            <div key={t.id} className="tooltip-wrapper relative">
              <button
                className={`toolbar-btn ${tool === t.id ? 'active' : ''}`}
                onClick={() => {
                  setTool(t.id);
                  if (t.id === 'sticky') {
                    setShowColorPicker(!showColorPicker);
                  }
                }}
                title={`${t.label} (${t.shortcut})`}
              >
                {t.icon}
                {t.id === 'sticky' && (
                  <div
                    className="color-dot"
                    style={{ backgroundColor: stickyColor }}
                  />
                )}
              </button>
              <span className="tooltip">{t.label} ({t.shortcut})</span>

              {/* Color picker for sticky */}
              {t.id === 'sticky' && showColorPicker && tool === 'sticky' && (
                <div className="absolute left-full ml-2 top-0 bg-white rounded-lg shadow-lg p-2 flex flex-wrap gap-1 w-24 z-50">
                  {STICKY_COLORS.map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-md border-2 ${
                        stickyColor === color ? 'border-miro-blue' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setStickyColor(color);
                        setShowColorPicker(false);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Extra tools */}
      <div className="bg-white rounded-lg shadow-toolbar p-1 flex flex-col gap-0.5">
        {extraTools.map((t) => (
          <div key={t.id} className="tooltip-wrapper">
            <button
              className={`toolbar-btn ${tool === t.id ? 'active' : ''}`}
              onClick={() => setTool(t.id)}
              title={`${t.label}${t.shortcut ? ` (${t.shortcut})` : ''}`}
            >
              {t.icon}
            </button>
            <span className="tooltip">{t.label}{t.shortcut ? ` (${t.shortcut})` : ''}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
