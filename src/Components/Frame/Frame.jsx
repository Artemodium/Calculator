import React from 'react'
import './Frame.sass'


const Frame = (props) => {
    return (
        <div className='frame-container'>
            <div className={'frame frame' + props.mod}></div>
        </div>
    );
};

export default Frame