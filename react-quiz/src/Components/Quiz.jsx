import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIdx = userAnswers.length;
  const isQuizComplete = activeQuestionIdx === QUESTIONS.length;

  if (isQuizComplete)
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );

  const shuffledAnswers = [...QUESTIONS[activeQuestionIdx].answers].sort(
    () => Math.random() - 0.5,
  );

  const handleSelectAnswer = useCallback(
    (answer) => setUserAnswers((prev) => [...prev, answer]),
    [],
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIdx}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIdx].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
