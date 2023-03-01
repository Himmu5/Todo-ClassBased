import { Component, InputHTMLAttributes, ReactNode } from "react";

type P={
    
} | InputHTMLAttributes<HTMLInputElement>

class Input extends Component<P>{
    render(): ReactNode {
        return <input type= "text" className={"border border-gray-700 rounded-md py-1 px-4 w-60 " } {...this.props}  />
    }
}
export default Input;