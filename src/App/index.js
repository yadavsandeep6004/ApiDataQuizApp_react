import "./styles.css";
import { ApiData } from "../ApiData";
import { useEffect, useState } from "react";
import Quiz from "../Quiz";
import Result from "../Result";

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(0);

  function intTochar(int) {
    let code = "a".charCodeAt(0);
    return String.fromCharCode(code + int);
  }

  const getTarnsformData = (data) => {
    return data
      .filter((quiz) => quiz.incorrect_answers.length === 3)
      .map((quiz) => {
        const quizData = {
          question: quiz.question
        };

        let correctAnswer = Math.floor(Math.random() * 3);
        const answerArray = [].concat(
          quiz.incorrect_answers.slice(0, correctAnswer),
          quiz.correct_answer,
          quiz.incorrect_answers.slice(correctAnswer)
        );

        for (let i = 0; i < 4; i++) {
          quizData[intTochar(i)] = answerArray[i];
          if (i === correctAnswer) {
            quizData.correct = intTochar(correctAnswer);
          }
        }
        return quizData;
      });
  };

  const getApiData = async () => {
    const res = await ApiData();
    let data = getTarnsformData(res);
    setQuizData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const indexHandler = (ans) => {
    if (ans) {
      setAnswer((prev) => prev + 1);
    }
    setIndex((prev) => prev + 1);
  };

  const resetHandler = () => {
    setIndex(0);
    setAnswer(0);
  };

  return (
    <div className="App">
      {index < quizData.length ? (
        <Quiz onIndex={indexHandler} quiz={quizData[index]} />
      ) : (
        <Result onClick={resetHandler} answer={answer} />
      )}
    </div>
  );
}
