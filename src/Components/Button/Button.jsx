import React from 'react'
import './Button.sass'

const Button = (props) => {

    return (
        <div id={props.id} className={props.isFrame ? 'frame frame_button': 'button-' + props.element + props.mod}>
            <button id={props.id}>
                {props.symb}
            </button>
        </div>
    );
};

export default Button;