import React, {useState} from 'react'
import './Calculator.sass'
import {useDrop} from "react-dnd";
import DisplayCalc from "../DicplayCalc/DisplayCalc";
import SignBlock from "../SignBlock/SignBlock";
import Invention from "../Invention/Invention";

const calcBlocks = {
    "Display" : <DisplayCalc defaultValue='0' typeForDrag='calc' dragItem={["Display"]}></DisplayCalc>,
    "SignBlock": <SignBlock symbols={["/", "x", "-", "+"]} element="sign" mod='_normal' isFrame={false} frame="_row" typeForDrag='calc' dragItem={["SignBlock"]}></SignBlock>,
    "DigitBlock": <SignBlock symbols={["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","]} element="digit" mod='_normal' isFrame={false} frame="_block" typeForDrag='calc' dragItem={["DigitBlock"]}></SignBlock>,
    "EqualBlock" : <SignBlock symbols={["="]} element = 'sign' mod = '_large' frame="_button" isFrame={false} typeForDrag='calc' dragItem={["EqualBlock"]}></SignBlock>
}

const Calculator = (props) => {
    const [dropAria, setDropAria] = useState([])
    console.log(dropAria)
    const [{isOver}, dropRef] = useDrop({
        accept: 'calc',
        drop: (item) => setDropAria((dropAria) =>
            !dropAria.includes(item[0]) ? [...dropAria, item[0]] : dropAria),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    const hideInvention = () => {
        return dropAria.length > 0
    }

    const dropDisplay = () => {
        let Display = dropAria.filter((el) => el === "Display")
        return calcBlocks[Display]
    }

    const dropOther = () => {
        return dropAria.filter((el) => el !== "Display")
    }

    const removeElement = (index, item) => {
        console.log(index)
        console.log(item)
    }

    return (
        <div className='app-calculator'>
            <div className={!hideInvention() ? 'app-calculator-aria' : 'app-calculator-aria app-calculator-aria_changed'} ref={dropRef} onDoubleClick={removeElement}>
                {!hideInvention() ? <Invention></Invention> : null}
                {dropDisplay()}
                {dropOther().map((el, i = 0) => calcBlocks[el])}
            </div>
        </div>
    )
}
export default Calculator;