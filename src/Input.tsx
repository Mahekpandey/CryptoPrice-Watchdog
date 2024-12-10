import { ChangeEventHandler } from "react";

type InputProps = {
    value:string;
    onChange : ChangeEventHandler<HTMLInputElement>;
    classname?:string;
};
export default function Input(props:InputProps){
     return(
        <input type='text' 
        className={"border border-white/10 bg-blue-950 p-2"+ props.classname} 
         value={props.value} onChange={props.onChange}/>
     );
}