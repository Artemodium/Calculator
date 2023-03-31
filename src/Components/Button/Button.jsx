import React from 'react'
import './Button.sass'
import {useDrag} from "react-dnd";

const Button = (props) => {

    const [{isDragging}, dragRef] = useDrag({
        type: "props.typeForDrag",
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div id={props.id} className={props.isFrame ? 'frame frame_button': 'button-' + props.element + props.mod}>
            <button>
                {props.symb}
            </button>
        </div>
    );
};

export default Button;