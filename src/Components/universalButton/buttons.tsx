import React from "react";
type PropsType={
    name:string
    callback:()=>void
}
const Buttons = (props:PropsType) => {

    return (<div>
            <button onClick={props.callback}>{props.name}</button>
        </div>
    )
}
export default Buttons