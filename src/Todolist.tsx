import { Component, ReactNode } from "react";
import NoTodo from "./NoTodo";
import { AiOutlineDelete } from 'react-icons/ai'

type dummy = {
  title?: string;
  status?: boolean;
};

type Prop = {
  Remove: (index: number) => void;
  todoList: dummy[];
  SetDoneTodo: (id: number) => void;
};

class Todolist extends Component<Prop> {
  render(): ReactNode {
    let FilterArray = this.props.todoList.filter((Item) => {
      return Item.status === false;
    });

    if (FilterArray.length == 0) {
      return <NoTodo />;
    }

    return (
      <div className="text-sm my-4">
        <div>
          {this.props.todoList.map((item, index) => {
            return (
              item.status == false && (
                <div key={index} className="flex items-center my-1 gap-2">
                  <input
                    type="checkbox"
                    checked
                    onClick={() => this.props.SetDoneTodo(index)}
                    className="accent-yellow-500 bg-white"
                  />
                  <p>{item.title}</p>
                  <div
                    className=" cursor-pointer"
                    onClick={() => this.props.Remove(index)}
                  >
                    <AiOutlineDelete />
                  </div>
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
