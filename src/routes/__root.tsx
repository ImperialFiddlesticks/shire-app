import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import "../index.css";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <header>Welcome</header>
        <nav>
          {" "}
          <Link className="navButton" to="/">
            Home
          </Link>
          <Link className="navButton" to="/toDo">
            Planner
          </Link>
          <Link className="navButton" to="/shop">
            Shop
          </Link>
          <Link className="navButton" to="/quizStart">
            Quiz
          </Link>
          <Link className="navButton" to="/game">
            Adventure
          </Link>
          <Link className="navButton" to="/gallery">
            Gallery
          </Link>
        </nav>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
