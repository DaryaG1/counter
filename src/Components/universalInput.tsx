import React, { ChangeEventHandler} from "react";
type PropsType={
    callback:(event:string)=>void
}
const Input = (props:PropsType) => {

    const onChange=(event:string)=>{
        props.callback(event)
    }

    return (<div>
            <input onChange={(event)=>onChange(event.currentTarget.value)}/>
        </div>
    )
}
export default Input