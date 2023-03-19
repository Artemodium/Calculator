import React from 'react'
import './SignBlock.sass'
import Button from "../Button/Button";

const SignBlock = (props) => {

    const symbols = props.symbols.map(symbol =>  <Button element={props.element} mod={symbol==="0" ? "_large" : props.mod} symb={symbol} isFrame={false}></Button>)

    return (
        <div className={'frame  frame' + props.frame}>
            <div className={props.element + " " + props.element + "-block-container"}>
                {symbols}
            </div>
        </div>
    );
};

export default SignBlock