import { Component, ReactNode } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import NoTodo from "./NoTodo";

type dummy = {
  title?: string;
  status?: boolean;
};

type Prop = {
  todoList: dummy[];
  SetDoneTodo: (xyz: number) => void;
  Remove: (id: number) => void;
};

class DoneList extends Component<Prop> {
  render(): ReactNode {
    console.log("Todo :", this.props.todoList);
    let FilterArray = this.props.todoList.filter((Item) => {
      return Item.status === true;
    });

    if (FilterArray.length == 0) {
      return <NoTodo />;
    }
    return (
      <div className="text-sm my-4">
        {this.props.todoList.map((item, index) => {
          return (
            item.status == true && (
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
    );
  }
}
export default DoneList;
