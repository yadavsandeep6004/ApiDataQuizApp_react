import "./style.css";
import { useState, useEffect } from "react";
import Button from "../Button";

const Quiz = (props) => {
  const [check, setCheck] = useState(null);

  const onsubmit = () => {
    if (check) {
      let currect = props.quiz.correct === check;
      props.onIndex(currect);
    }
  };

  const inputHandler = (e) => {
    let value = e.target.value;
    setCheck(value);
  };

  useEffect(() => {
    setCheck(null);
  }, [props.quiz.question]);

  return (
    <>
      <div className="quize">
        {/* <h2>{props.quiz.question}</h2> */}
        <h2 dangerouslySetInnerHTML={{ __html: `${props.quiz.question}` }}></h2>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="a"
                readOnly
                checked={check === "a"}
                onClick={inputHandler}
              />
              <span>{props.quiz.a}</span>
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="b"
                readOnly
                checked={check === "b"}
                onClick={inputHandler}
              />
              <span>{props.quiz.b}</span>
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="c"
                readOnly
                checked={check === "c"}
                onClick={inputHandler}
              />
              <span>{props.quiz.c}</span>
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                name="ans"
                value="d"
                readOnly
                checked={check === "d"}
                onClick={inputHandler}
              />
              <span>{props.quiz.d}</span>
            </label>
          </li>
        </ul>
      </div>
      <Button onClick={onsubmit} />
    </>
  );
};

export default Quiz;
