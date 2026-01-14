import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toDo/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>What do you need to do today?</div>;
}
