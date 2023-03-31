import React from 'react'
import './Line.sass'

const Line = (props) => {

    return (
        <div className='line'>
            <div className='line-rect'></div>
            <hr className='line-line'/>
            <div className='line-rect'></div>
        </div>
    );
};

export default Line;