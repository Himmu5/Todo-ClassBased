import { Component, ReactNode } from "react";
import { AiOutlineDelete } from "react-icons/ai";

type dummy = {
  title?: string;
  status?: boolean;
};

type Prop = {
  data: dummy[];
  todoList: dummy[];
  SetDoneTodo: (xyz: number, str: string) => void;
  Remove:(id:number , str:string)=>void;
};

class DoneList extends Component<Prop> {
  render(): ReactNode {
    return (
      <div className="text-sm my-4">
        {this.props.data.map((item, index) => {
          console.log("Item :", item.status);
          return (
            item.status === true && (
              <div key={index} className="flex items-center my-2 gap-2">
                <input
                  type="checkbox"
                  onClick={() => this.props.SetDoneTodo(index, "Dummy")}
                  checked
                  className="accent-yellow-500 bg-white"
                />
                <p>{item.title}</p>
                <div className=" cursor-pointer" onClick={()=>this.props.Remove(index , "Dummy")}>
                  <AiOutlineDelete />
                </div>
              </div>
            )
          );
        })}

        {this.props.todoList.map((item, index) => {
          console.log("Item :", item.status);
          return (
            item.status === true && (
              <div key={index} className="flex items-center my-1 gap-2">
                <input
                  type="checkbox"
                  checked
                  onClick={() => this.props.SetDoneTodo(index, "mainTodo")}
                  className="accent-yellow-500 bg-white"
                />
                <p>{item.title}</p>
                <div className=" cursor-pointer" onClick={()=>this.props.Remove(index , "mainTodo")} >
                  <AiOutlineDelete />
                </div>
              </div>
            )
          );
        })}
      </div>
    );
  }
}
export default DoneList;
