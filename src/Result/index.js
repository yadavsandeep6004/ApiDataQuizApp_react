import "./style.css";
import Button from "../Button";
const Result = (props) => {
  return (
    <div>
      <h1 className="ans">Correct Answer : {props.answer}</h1>
      <Button onClick={props.onClick}>Reset</Button>
    </div>
  );
};
export default Result;
