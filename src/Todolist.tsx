import {
  ChangeEventHandler,
  Component,
  
  ReactNode,
} from "react";
import NoTodo from "./NoTodo";

type dummy = {
  title?: string;
  status?: boolean;
};

type Prop = {
  data: dummy[];
  todoList: dummy[];
  SetDoneTodo: (id: number, str: string) => void;
};

class Todolist extends Component<Prop> {
  render(): ReactNode {
    let FilterArray = this.props.todoList.filter((Item) => {
      return Item.status = false;
    });

    if(FilterArray.length == 0){
      return <NoTodo />
    }

    return (
      <div className="text-sm my-4">
        {FilterArray.map((item, index) => {
          return (
            <div key={index} className="flex items-center my-2 gap-2">
              <input
                key={index}
                type="checkbox"
                onClick={() => this.props.SetDoneTodo(index, "Dummy")}
              />
              <p className="w-40">{item.title}</p>
            </div>
          );
        })}

        <div>
          {this.props.todoList.map((item, index) => {
            return (
              item.status === false && (
                <div key={index} className="flex items-center my-1 gap-2">
                  <input
                    key={index}
                    type="checkbox"
                    onChange={() => this.props.SetDoneTodo(index, "mainTodo")}
                  />
                  <p className="w-40">{item.title}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}
export default Todolist;
