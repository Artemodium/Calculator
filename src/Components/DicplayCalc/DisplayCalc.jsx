import React from 'react'
import './DisplayCalc.sass'
import {useDrag} from "react-dnd";

const DisplayCalc = (props) => {

    const [{isDragging}, dragRef] = useDrag({
        type: props.typeForDrag,
        item: props.dragItem,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div className={props.isFrame ? 'frame frame_display' : 'simple simple_display'} ref={dragRef}>
            <div className='frame_display-inner' >
                <input id={props.id} className={'display-input'} defaultValue={props.defaultValue}></input>
            </div>
        </div>
    )
}

export default DisplayCalc;