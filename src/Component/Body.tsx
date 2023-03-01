import { Component, ReactNode } from "react";
import Button from "./UI-Component/Button"; 
import Form from "./UI-Component/Form";
import Todolist from "./Todolist";
import DoneList from "./DoneList";
import { AiOutlinePlus } from "react-icons/ai";

type mainTodoType = {
  title?: string;
  status?: boolean;
};

type BodyState = {
  form: boolean;
  todoList: mainTodoType[];
};

type BodyProp = {};

class Body extends Component<BodyProp, BodyState> {
  oldData: mainTodoType[] = JSON.parse(localStorage.getItem("todo") || "[]");

  constructor(props: BodyProp) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.Addtodo = this.Addtodo.bind(this);
    this.SetDoneTodo = this.SetDoneTodo.bind(this);
    this.Remove = this.Remove.bind(this);

    this.state = {
      form: false,
      todoList: this.oldData,
    };
  }

  handleButton() {
    this.setState({ form: !this.state.form });
  }

  Addtodo(NewArr: mainTodoType[]) {
    this.setState({ todoList: NewArr });
  }

  SetDoneTodo(index: number) {
    let arr = [...this.state.todoList];
    arr[index].status = !arr[index].status;
    this.setState({ todoList: arr });
  }

  Remove(index: number) {
    let arr = [...this.state.todoList];
    arr.splice(index, 1);
    this.setState({ todoList: arr });
    localStorage.setItem("todo", JSON.stringify(this.state.todoList));
  }

  render(): ReactNode {
    localStorage.setItem("todo", JSON.stringify(this.state.todoList));

    return (
      <div className="px-16 mt-12 ">
        <h1 className="text-3xl font-bold ">Things to get done</h1>
        <div className="mt-8 text-md ">
          <h1 className="text-xl font-bold ">Things to do</h1>
          <Todolist
            Remove={this.Remove}
            todoList={this.state.todoList}
            SetDoneTodo={this.SetDoneTodo}
          />

          {this.state.form ? (
            <Form
              handleButton={this.handleButton}
              todoList={this.state.todoList}
              Addtodo={this.Addtodo}
            />
          ) : (
            <div className="flex items-center relative text-white">
              <div className="text-white absolute left-1" >
                <AiOutlinePlus />
              </div>
              <Button
                onClick={this.handleButton}
                extraclass="px-5 py-1 text-md"
              >
                Add a todo
              </Button>
            </div>
          )}
          <h1 className="text-xl font-bold ">Things done</h1>
          <DoneList
            Remove={this.Remove}
            todoList={this.state.todoList}
            SetDoneTodo={this.SetDoneTodo}
          />
        </div>
      </div>
    );
  }
}

export default Body;
