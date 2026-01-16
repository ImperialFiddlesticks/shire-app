import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { adventureScenes } from "@/data/adventure";

export const Route = createFileRoute("/game/")({
  component: AdventureGame,
});

function AdventureGame() {
  const [currentScene, setCurrentScene] = useState("start");

  const scene = adventureScenes[currentScene];

  return (
    <div className="gameContainer">
      <div className="gameBox">
        <h2>The road goes ever on and on...</h2>
        <div className="sceneInfo">
          <img className="sceneImage" alt={scene.imageAlt} src={scene.image} />
          <h3>{scene.text}</h3>
        </div>
        <div className="choices">
          {scene.choices.map((choice, index) => (
            <button
              className="gameButton"
              key={index}
              onClick={() => setCurrentScene(choice.next)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
