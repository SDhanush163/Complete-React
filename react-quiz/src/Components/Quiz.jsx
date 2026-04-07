import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIdx = userAnswers.length;
  const isQuizComplete = activeQuestionIdx === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => setUserAnswers((prev) => [...prev, selectedAnswer]),
    [],
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (isQuizComplete)
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIdx}
        index={activeQuestionIdx}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
