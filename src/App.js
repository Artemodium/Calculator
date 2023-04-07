import React from 'react'
import DisplayCalc from "./Components/DicplayCalc/DisplayCalc"
import './styles.sass'
import SignBlock from "./Components/SignBlock/SignBlock";
import Control from "./Components/Controll/Control";
import Calculator from "./Components/Calculator/Calculator";
import Constructor from "./Components/Constructor/Constructor";

function App() {

  return (
      <div className='app'>
        <div className='app-wrapper'>
          <div className='app-content'>
            <div className="app-content-constructor">
                <Constructor></Constructor>
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
