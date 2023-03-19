import React from 'react'
import './Button.sass'


const Button = (props) => {
    return (
        <div className={props.isFrame ? 'frame frame_button': "simple-button"}>
            <button className={'button-' + props.element + props.mod}>
                {props.symb}
            </button>
        </div>
    );
};

export default Button;