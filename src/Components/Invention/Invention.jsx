import React from 'react'
import icon from "../../img/Group.svg";

const Invention = () => {
    return (
        <div className='calculator-aria-invention'>
            <div className='invention-img'>
                <img src={icon} alt='icon'/>
            </div>
            <div className="invention-ref">
                <span>Перетащите сюда</span>
            </div>
            <div className="invention-text">
                <span>любой элемент из левой панели</span>
            </div>
        </div>
    );
};

export default Invention