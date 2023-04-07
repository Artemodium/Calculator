import React from 'react'
import './Constructor.sass'
import DisplayCalc from "../DicplayCalc/DisplayCalc";
import SignBlock from "../SignBlock/SignBlock";

const Constructor = (props) => {

    return (
        <div className='app-constructor'>
            <DisplayCalc id="Display" defaultValue='0' typeForDrag='calc' isFrame={true} dragItem={["Display"]}></DisplayCalc>
            <SignBlock id="SignBlock" symbols={["/", "x", "-", "+"]} element="sign" mod='_normal' isFrame={true} frame="_row" typeForDrag='calc' dragItem={["SignBlock"]}></SignBlock>
            <SignBlock id="DigitBlock" symbols={["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","]} element="digit" mod='_normal' isFrame={true} frame="_block" typeForDrag='calc' dragItem={["DigitBlock"]}></SignBlock>
            <SignBlock id="EqualBlock" symbols={["="]} element = 'sign' mod = '_large' frame="_button" isFrame={true} typeForDrag='calc' dragItem={["EqualBlock"]}></SignBlock>
        </div>
    );
};

export default Constructor;