import React, {useEffect, useState} from 'react'
import './Calculator.sass'
import {useDrop} from "react-dnd";
import DisplayCalc from "../DicplayCalc/DisplayCalc";
import SignBlock from "../SignBlock/SignBlock";
import Invention from "../Invention/Invention";
import Line from "../Line/Line";

const calcBlocks = {
    "Display" : <DisplayCalc id="Display" defaultValue='0' typeForDrag='calc' dragItem={["Display"]} ></DisplayCalc>,
    "SignBlock": <SignBlock id="SignBlock" symbols={["/", "x", "-", "+"]} element="sign" mod='_normal' isFrame={false} frame="_row" typeForDrag='calc' dragItem={["SignBlock"]}></SignBlock>,
    "DigitBlock": <SignBlock id="DigitBlock" symbols={["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","]} element="digit" mod='_normal' isFrame={false} frame="_block" typeForDrag='calc' dragItem={["DigitBlock"]}></SignBlock>,
    "EqualBlock" : <SignBlock id="EqualBlock" symbols={["="]} element = 'sign' mod = '_large' frame="_button" isFrame={false} typeForDrag='calc' dragItem={["EqualBlock"]}></SignBlock>
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
        }),

    })
    const [current, setCurrent] = useState('')

    const hideInvention = () => {
        return dropAria.length > 0
    }

    const dropDisplay = () => {
        return  dropAria.filter((el) => el === "Display")
    }

    const dropOther = () => {
        return dropAria.filter((el) => el !== "Display")
    }

    const removeElement = (e) => {
        setDropAria(prevState => prevState.filter(el => el !== e.target.id))
    }

    const dragStartHandler = (e, el) => {
        setCurrent(el)
        console.log(current, "current")
    }

    const swapArray = (arr, a, b) => {
        arr[a] = arr.splice(b, 1, arr[a])[0];
        return arr
    }

    const dragDropHandler = (e, el) => {
        e.preventDefault()
        setDropAria(prevState => swapArray(prevState, dropAria.indexOf(el), dropAria.indexOf(current)))
    }

    const dragOverHandler = (e, el) => {
        e.preventDefault()
    }

    const dragLeaveHandler = (e, el) => {

    }

    const dragEndHandler = (e, el) => {

    }

    return (
        <div className='app-calculator'>
            <div className={!hideInvention() ? 'app-calculator-aria' : 'app-calculator-aria app-calculator-aria_changed'} ref={dropRef} onDoubleClick={removeElement} >
                {!hideInvention() ? <Invention></Invention> : null}
                {dropDisplay().map((el) => <div className={'calc' + el}>{calcBlocks[el]}<Line></Line></div>)}
                {dropOther().map((el) =>
                    <div
                        className={'calc' + el}
                        draggable={true}
                        onDragStart={(e) => dragStartHandler(e, el)}
                        onDragLeave={(e) => dragLeaveHandler(e, el)}
                        onDragEnd={(e) => dragEndHandler(e, el)}
                        onDragOver={(e) => dragOverHandler(e, el)}
                        onDrop={(e) => dragDropHandler(e, el)}
                    >{calcBlocks[el]}<Line></Line></div>)}
            </div>
        </div>
    )
}
export default Calculator;