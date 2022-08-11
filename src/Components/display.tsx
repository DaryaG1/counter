import React from "react";
type PropsType={
    num:number
}
const Display =(props:PropsType)=>{

    return(
        <div className="display">
            {props.num}
        </div>
    )
}
export default Display