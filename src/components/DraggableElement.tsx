
import { useDragAndDrop } from '@/hooks/useDragAndDrop';

interface DraggableElementProps {
  children: React.ReactNode;
  className?: string;
}

export const DraggableElement = ({ children, className = '' }: DraggableElementProps) => {
  const { isDragging, handleMouseDown, dragStyle } = useDragAndDrop();

  return (
    <div
      className={`${className} ${isDragging ? 'select-none' : ''}`}
      style={dragStyle}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};
