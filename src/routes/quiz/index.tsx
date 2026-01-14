import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import type { IQuiz } from "../../data/lotrQuiz";
import { lotrQuiz } from "../../data/lotrQuiz";
export const Route = createFileRoute("/quiz/")({
  component: Quiz,
});
import "./quiz.css";
import { Footer } from "../../components/FooterComponent";

function Quiz() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState<IQuiz | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  type ButtonState = "idle" | "correct" | "incorrect" | "idle-round-over";

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);

    if (answer === question?.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const fetchQuestion = () => {
    const randomIndex = Math.floor(Math.random() * lotrQuiz.length);
    const q = lotrQuiz[randomIndex];
    setSelectedAnswer(null);

    setQuestion({
      id: q.id,
      question: q.question,
      correctAnswer: q.correctAnswer,
      allAnswers: [...(q.wrongAnswers ?? []), q.correctAnswer].sort(
        () => Math.random() - 0.5
      ),
    });
  };
  useEffect(() => {
    fetchQuestion();
  }, []);
  const handleNextStep = () => {
    fetchQuestion();
  };

  return (
    <div>
      <div className="quizContainer">
        <div className="quizQuestion">
          <h3>{question?.question}</h3>
        </div>
        <div className="quizAnswers">
          {question?.allAnswers?.map((answer) => {
            let buttonState: ButtonState = "idle";

            if (selectedAnswer) {
              if (
                selectedAnswer === question.correctAnswer &&
                answer === question.correctAnswer
              ) {
                buttonState = "correct";
              } else if (answer === selectedAnswer) {
                buttonState = "incorrect";
              }
            }
            return (
              <button
                key={answer}
                className={`answerButton ${buttonState}`}
                onClick={() => handleAnswerClick(answer)}
                disabled={!!selectedAnswer}
              >
                {answer}
              </button>
            );
          })}
          {selectedAnswer && (
            <button onClick={handleNextStep} className="nextButton">
              Next{" "}
              <img alt="Dragon Icon" src="/dragon.png" className="buttonIcon" />
            </button>
          )}
        </div>
        <div className="scoreBox">
          <p>Gold earned: {score} </p>
          <img
            src="/coin-sack.png"
            alt="Sack of gold coins"
            className="goldIcon"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
