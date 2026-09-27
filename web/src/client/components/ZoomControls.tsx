import { useCanvasStore } from '../store/canvas';

export function ZoomControls() {
  const { zoom, zoomIn, zoomOut, resetZoom, fitToView } = useCanvasStore();

  const handleFitToView = () => {
    // Calculate content bounds and fit
    const container = document.querySelector('.konva-content')?.parentElement;
    if (container) {
      fitToView(2000, 1500, container.clientWidth, container.clientHeight);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-white rounded-lg shadow-toolbar p-1 flex flex-col items-center gap-0.5">
        {/* Fit to view */}
        <button
          className="btn-icon"
          onClick={handleFitToView}
          title="Fit to view (Ctrl+Shift+H)"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 6V2H6M10 2H14V6M14 10V14H10M6 14H2V10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="w-5 h-px bg-gray-200" />

        {/* Zoom in */}
        <button
          className="btn-icon"
          onClick={zoomIn}
          title="Zoom in (Ctrl++)"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <path d="M5 7H9M7 5V9M11 11L14 14" strokeLinecap="round" />
          </svg>
        </button>

        {/* Zoom level */}
        <button
          className="text-xs text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
          onClick={resetZoom}
          title="Reset zoom (Ctrl+0)"
        >
          {Math.round(zoom * 100)}%
        </button>

        {/* Zoom out */}
        <button
          className="btn-icon"
          onClick={zoomOut}
          title="Zoom out (Ctrl+-)"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <path d="M5 7H9M11 11L14 14" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
