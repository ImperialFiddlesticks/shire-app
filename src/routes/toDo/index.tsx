import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/FooterComponent";
export const Route = createFileRoute("/toDo/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="plannerContainer">
        <div className="toDoForm">
          <form className="toDoInput">
            <h3 className="toDoTitle">New Task</h3>
          </form>
        </div>
        <div className="toDoBox">
          <h3 className="toDoTitle">To Do</h3>
        </div>
        <div className="doneBox">
          <h3 className="toDoTitle">Done!</h3>
        </div>
      </div>
      What do you need to do today?
      <Footer />
    </div>
  );
}
