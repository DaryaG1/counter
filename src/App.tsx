import React, {useState} from 'react';
import Display from "./Components/display";
import './App.css';
import Buttons from "./Components/universalButton/buttons";
import Input from "./Components/universalInput";

function App() {
    const[counter,setCounter]=useState(0)
    const[maxCounter,setMaxCounter]=useState(10)
    const increase =()=>{
        setCounter(counter+1)
    }
    const set=()=>{
setCounter(0)
    }
    const onChange=(e:string)=>{
        const num = parseInt(e)
        zeroing(num)
    }
    const max = (e:string) => {
      setMaxCounter(parseInt(e))
    }
    const zeroing = (num:number) => {
      setCounter(0)
    }
    return (
        <div className="App">
            <div className="counter">
                <Display num={counter}/>
                <div>{maxCounter}</div>
                <div className="inputs">
                    <Input callback={onChange}/>
                    <Input callback={max}/>
                </div>
                <div className="btns">
                    <Buttons name={'set'} callback={set}/>
                    <Buttons name={'inc'} callback={increase}/>
                    <Buttons name={'zeroing'} callback={zeroing}/>
                </div>

            </div>
        </div>
    );
}

export default App;
