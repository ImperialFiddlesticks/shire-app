import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DroppableProps = {
  id: string;
  children: ReactNode;
};

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style: React.CSSProperties = {
    color: isOver ? "green" : undefined,
    width: "300px",
    // border: "3px solid #7a9e7e",
    margin: "10px",
    display: "flex",
    borderRadius: "20px",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
