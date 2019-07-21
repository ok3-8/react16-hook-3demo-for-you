import React, { ReactNode, useState }  from 'react';
import numberFormat from './format';

import './style.less';


type State = {
    value?: string
}


const Input: React.FC = () => {

    const inputRef = React.createRef<HTMLInputElement>();

    const [state, setState] = useState<State>({
        value: "0"
    });
   
    // "5,0.[000]" | "12" | "0.[000]" | "0,0.[000]"
    const format = "12";
    

    let isAllowInput: boolean = false;
    let inputValue: string | undefined = state.value;
    let keyCode: number;
    

    function handelChange(e: React.ChangeEvent<HTMLInputElement>) {

       // console.log("handelChange");

        //inputRef.current

        // console.log(inputRef);
        // console.log('state', state);

        // console.log(numberFormat.formatInfo("5,0.[000]"));

        isAllowInput && setState({
           value: inputValue
        });

    }
    function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {

      // console.log("handleKeydown");
        // console.log(e.currentTarget);
      //  console.log(e.key);
      // console.log(e.keyCode);
       // console.log("handleKeydown");


        keyCode = e.keyCode;

      //  isAllowInput = numberFormat.isAllowInput(e.keyCode);


       // isAllowInput = numberFormat.allowInputPipe(e.keyCode);

    }

    function handelInput(e: React.KeyboardEvent<HTMLInputElement>) {

        const { value } = inputRef.current!;

       // console.log("handelInput", value, keyCode);
        // console.log(e);
        // console.log(e.key);
        // console.log(e.keyCode);
        // console.log("handelInput");



       const rePipe = numberFormat.pipe({value, keyCode, format});
       isAllowInput = rePipe.isAllow;
       inputValue = rePipe.value;

    }

    function handleButtonClick() {
        setState({
            value: Math.random() * 10 + ''
         });
    }

    return (
        <div className="input">
            <input ref={inputRef} value={state.value} onChange={handelChange} onKeyDown={handleKeydown} onInput={handelInput} />
            <button onClick={handleButtonClick}>click to change input value!</button>
        </div>
    )
}

export default Input;