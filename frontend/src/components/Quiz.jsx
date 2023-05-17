import React, { useState } from "react";
import "./Quiz.css";
export const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the output of the following code? ___ const x = [1, 2, 3]; console.log(x.length);",
      options: ["3", "4", "2", "1"],
      answer: "3",
      selected: ""
    },
    {
      id: 2,
      question: "What is the output of the following code? ___ const x = 3; const y = x++; console.log(y);",
      options: ["3", "4", "2", "1"],
      answer: "4",
      selected: "hib"
    },
    {
      id: 3,
      question: "What is the output of the following code? ___ const x = [1, 2, 3]; const y = x[2]; console.log(y);",
      options: ["3", "4", "2", "1"],
      answer: "3",
      selected: "hib"
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selected = answer;
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const incorrectAnswers = questions.filter(
        (question) => question.selected !== question.answer
      );
      setShowScore(true);
      setScore(
        Math.floor((questions.length - incorrectAnswers.length) / questions.length * 100)
      );
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score}% out of {questions.length} questions!</h2>
          <div className="answer-section">
            <h3>Here are the questions you missed:</h3>
            {questions.map((question) =>
              question.selected !== question.answer ? (
                <div key={question.id}>
                  <p>Question {question.id}:</p>
                  <p>Your Answer: {question.selected}</p>
                  <p>Correct Answer: {question.answer}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className={
                    questions[currentQuestion].selected === option
                      ? "selected"
                      : ""
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {questions[currentQuestion].selected !== "" && (
            <button className="next-button" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
};


