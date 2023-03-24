import React from 'react'
import './Control.sass'
import eye from '../../img/eye.svg'
import selector from '../../img/selector.svg'

const Control = (props) => {
    return (
        <div className='app-control-block'>
            <div className='control-block'>
                <div className='control-block-runtime'>
                    <div className='runtime_active'>
                        <img src={eye} alt='eye'/>
                        <span className='run'>Runtime</span>
                    </div>
                </div>
                <div className='constructor_disabled'>
                    <img src={selector} alt='selector'/>
                    <span>Constructor</span>
                </div>
            </div>
        </div>
    );
};

export default Control;