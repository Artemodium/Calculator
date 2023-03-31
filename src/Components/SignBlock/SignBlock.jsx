import React from 'react'
import './SignBlock.sass'
import Button from "../Button/Button";
import {useDrag} from "react-dnd";

const SignBlock = (props) => {
    const [{isDragging}, dragRef] = useDrag({
        type: props.typeForDrag,
        item: props.dragItem,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const symbols = props.symbols.map(symbol =>
        <Button id={props.id} element={props.element} mod={symbol==="0" ? "_large" : props.mod} symb={symbol} isFrame={false} key={symbol}></Button>)

    return (
        <div id={props.id} className={props.isFrame ? 'frame  frame' + props.frame : 'simple simple' + props.frame} ref={dragRef}>
            <div id={props.id} className={props.element + " " + props.element + "-block-container"} >
                {symbols}
            </div>
        </div>
    );
};

export default SignBlock