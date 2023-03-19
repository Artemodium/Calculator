import React from 'react'
import Button from "./Components/Button/Button"
import DisplayCalc from "./Components/DicplayCalc/DisplayCalc"
import './styles.sass'
import Frame from "./Components/Frame/Frame";
import SingBlock from "./Components/SignBlock/SingBlock";

function App() {

  return (
      <div className='app'>
        <div className='app-wrapper'>
          <div className='app-content'>
            <div className="app-content-constructor">
              <DisplayCalc defaultValue='0'></DisplayCalc>
              <SingBlock symbols={["/", "x", "-", "+"]} element="sign" mod='_normal' isFrame={true} frame="_row"></SingBlock>
              <SingBlock symbols={["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","]} element="digit" mod='_normal' isFrame={true} frame="_block"></SingBlock>
              <Button element = 'sign' mod = '_large' symb = '=' isFrame={true}></Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
