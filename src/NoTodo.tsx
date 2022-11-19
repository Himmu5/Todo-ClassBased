import { Component, ReactNode } from "react";

class NoTodo extends Component{
    render(): ReactNode {
        return <p className="text-sm text-gray-700 my-4">No todos here!</p>
    }
}
export default NoTodo;