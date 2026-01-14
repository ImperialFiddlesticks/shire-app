import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { Footer } from "../../components/FooterComponent";

export const Route = createFileRoute("/quizStart/")({
  component: RouteComponent,
});
function StartQuizButton() {
  const navigate = useNavigate();
  return (
    <button
      className="quizStartButton"
      onClick={() => navigate({ to: "/quiz" })}
    >
      <p>Begin!</p>
      <img alt="Dragon Icon" src="/dragon.png" className="buttonIcon" />
    </button>
  );
}

function RouteComponent() {
  return (
    <div>
      <div className="quizContainer">
        <h2>Test your skill against the dragon Smaug,</h2>
        <h3>and win gold in the process!</h3>
        <img
          className="quizStartImage"
          alt="Smaug on his hoard"
          src="/smaug.png"
        />
        <StartQuizButton />
      </div>
      <Footer />
    </div>
  );
}
