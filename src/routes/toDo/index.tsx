import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/FooterComponent";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";
export const Route = createFileRoute("/toDo/")({
  component: Planner,
});

type TodoItem = {
  id: string;
  label: string;
};

function Planner() {
  const [toDo, setToDo] = useState<TodoItem[]>([
    { id: "breakfast", label: "Breakfast" },
    { id: "second-breakfast", label: "Second Breakfast" },
    { id: "elevensies", label: "Elevensies" },
    { id: "lunch", label: "Lunch" },
    { id: "afternoon-tea", label: "Afternoon Tea" },
    { id: "dinner", label: "Dinner" },
    { id: "supper", label: "Supper" },
  ]);

  const [done, setDone] = useState<TodoItem[]>([]);
  const [newTasks, setNewTasks] = useState<TodoItem[]>([]);
  const [newItem, setNewItem] = useState("");

  function handleAddItem(e: React.FormEvent) {
    e.preventDefault();

    if (!newItem.trim()) return;

    setNewTasks((items) => [
      ...items,
      { id: crypto.randomUUID(), label: newItem.trim() },
    ]);
    setNewItem("");
  }

  function findContainer(
    id: string,
    newTasks: TodoItem[],
    todo: TodoItem[],
    done: TodoItem[]
  ): "new" | "todo" | "done" | null {
    if (newTasks.some((item) => item.id === id)) return "new";
    if (todo.some((item) => item.id === id)) return "todo";
    if (done.some((item) => item.id === id)) return "done";
    return null;
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const source = findContainer(active.id as string, newTasks, toDo, done);
    const target = over.id as string;

    if (!source) return;

    if (source === "new" && target === "toDoBox") {
      const item = newTasks.find((i) => i.id === active.id)!;
      setNewTasks((items) => items.filter((i) => i.id !== active.id));
      setToDo((items) => [...items, item]);
    }

    if (source === "todo" && target === "doneBox") {
      const item = toDo.find((i) => i.id === active.id)!;

      setToDo((items) => items.filter((i) => i.id !== active.id));
      setDone((items) => [...items, item]);
    }

    if (source === "done" && target === "toDoBox") {
      const item = done.find((i) => i.id === active.id)!;

      setDone((items) => items.filter((i) => i.id !== active.id));
      setToDo((items) => [...items, item]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <div className="plannerContainer">
          <div className="taskBox">
            <div className="toDoForm">
              <h3 className="toDoTitle">New Task</h3>
              <form className="toDoInput" onSubmit={handleAddItem}>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Add a task..."
                />
                <button className="formButton" type="submit">
                  +
                </button>
              </form>
              <Droppable id="newTaskBox">
                <div className="itemsContainer">
                  {newTasks.map((item) => (
                    <Draggable key={item.id} id={item.id}>
                      <div className="toDoItem">{item.label}</div>
                    </Draggable>
                  ))}
                </div>
              </Droppable>
            </div>
          </div>
          <div className="taskBox">
            <Droppable id="toDoBox">
              <div className="droppableContent">
                <h3 className="toDoTitle">To Do</h3>
                <div className="itemsContainer">
                  {toDo.map((item) => (
                    <Draggable key={item.id} id={item.id}>
                      <div className="toDoItem">{item.label}</div>
                    </Draggable>
                  ))}
                </div>
              </div>
            </Droppable>
          </div>
          <div className="taskBox">
            <Droppable id="doneBox">
              <div className="droppableContent">
                <h3 className="toDoTitle">Done</h3>
                <div className="itemsContainer">
                  {done.map((item) => (
                    <Draggable key={item.id} id={item.id}>
                      <div className="toDoItem">{item.label}</div>
                    </Draggable>
                  ))}
                </div>
              </div>
            </Droppable>
          </div>
        </div>

        <Footer />
      </div>
    </DndContext>
  );
}
