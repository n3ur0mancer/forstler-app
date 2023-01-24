import './button.css';


function Button(props) {
    return (
            <div>
                <button className='button'>{props.button_text}</button>
            </div>
    );
}

export default Button;