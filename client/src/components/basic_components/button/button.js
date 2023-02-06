import "./button.css";

function Button(props) {
  return (
    <div>
      <button className={props.button_style}>{props.button_text}</button>
    </div>
  );
}

export default Button;
