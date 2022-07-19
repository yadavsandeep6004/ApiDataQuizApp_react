import "./style.css";

const Button = (props) => {
  return (
    <>
      <button className="btn" onClick={props.onClick}>
        {props.children ? props.children : " Submit"}
      </button>
    </>
  );
};

export default Button;
