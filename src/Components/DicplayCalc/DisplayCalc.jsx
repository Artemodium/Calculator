import React from 'react'
import './DisplayCalc.sass'

const DisplayCalc = (props) => {
    return (
        <div className='frame frame_display'>
            <div className='frame_display-inner'>
                <input className={'display-input'} defaultValue={props.defaultValue}></input>
            </div>
        </div>
    )
}

export default DisplayCalc;