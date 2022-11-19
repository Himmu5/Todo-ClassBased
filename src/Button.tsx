import { ButtonHTMLAttributes, Component, ReactNode } from "react";

type Prop = {
    children:string,
    extraclass?:string 
} & ButtonHTMLAttributes<HTMLButtonElement>

class Button extends Component<Prop> {
    
    render(): ReactNode {
        let {children , extraclass} = this.props;
        
        return <button className={"bg-yellow-500 hover:bg-yellow-600 text-white rounded-full my-3 px-2 py-1 "+extraclass} {...this.props} > {children}</button>
    }
}
export default Button;