import React from 'react'
import DisplayCalc from "./Components/DicplayCalc/DisplayCalc"
import './styles.sass'
import SignBlock from "./Components/SignBlock/SignBlock";
import Control from "./Components/Controll/Control";
import Calculator from "./Components/Calculator/Calculator";

function App() {

  return (
      <div className='app'>
        <div className='app-wrapper'>
          <div className='app-content'>
            <div className="app-content-constructor">
              <DisplayCalc id="Display" defaultValue='0' typeForDrag='calc' isFrame={true} dragItem={["Display"]}></DisplayCalc>
              <SignBlock id="SignBlock" symbols={["/", "x", "-", "+"]} element="sign" mod='_normal' isFrame={true} frame="_row" typeForDrag='calc' dragItem={["SignBlock"]}></SignBlock>
              <SignBlock id="DigitBlock" symbols={["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","]} element="digit" mod='_normal' isFrame={true} frame="_block" typeForDrag='calc' dragItem={["DigitBlock"]}></SignBlock>
              <SignBlock id="EqualBlock" symbols={["="]} element = 'sign' mod = '_large' frame="_button" isFrame={true} typeForDrag='calc' dragItem={["EqualBlock"]}></SignBlock>
            </div>
            <div className="app-content-preview">
                <Control></Control>
                <Calculator></Calculator>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
