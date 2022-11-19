import { Component, ReactNode, useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Todolist from "./Todolist";
import DoneList from "./DoneList";
import { AiOutlinePlus } from "react-icons/ai";

type mainTodoType = {
  title?: string;
  status?: boolean;
};

type BodyState = {
  form: boolean;
  dummy: mainTodoType[];
  todoList: mainTodoType[];
};

type BodyProp = {};

class Body extends Component<BodyProp, BodyState> {

  
  constructor(props: BodyProp) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.Addtodo = this.Addtodo.bind(this);
    this.SetDoneTodo = this.SetDoneTodo.bind(this);
    this.Remove = this.Remove.bind(this);

    this.state = {
      form: false,
      dummy: this.defaultArray,
      todoList: [{}],
    };
  }
  defaultArray: mainTodoType[] = [
    {
      title: "Clean my computer",
      status: false,
    },
    {
      title: "Buy a keyboard",
      status: false,
    },
    {
      title: "Write an article about @xstate/test",
      status: true,
    },
  ];

  handleButton() {
    this.setState({ form: !this.state.form });
  }

  Addtodo(NewArr: mainTodoType[]) {
    this.setState({ todoList: NewArr });
  }

  SetDoneTodo(index: number, str: string) {
    if (str == "mainTodo") {
      let arr = [...this.state.todoList];
      arr[index].status = !arr[index].status;
      this.setState({ todoList: arr });
      
    } else {
      let arr = [...this.state.dummy];
      arr[index].status = !arr[index].status;
      this.setState({ dummy: arr });
    }
  }

  Remove(index: number, str: string) {
    console.log("Number and String :", index, str);
    if (str == "mainTodo") {
      let arr = [...this.state.todoList];
      arr.splice(index, 1);
      this.setState({ todoList: arr });
    } else if(str == "Dummy"){
      let arr = [...this.state.dummy];
      arr.splice(index, 1);
      this.setState({ dummy: arr });
    }
  }

  render(): ReactNode {
    return (
      <div className="px-16 mt-12 ">
        <h1 className="text-3xl font-bold ">Things to get done</h1>
        <div className="mt-8 text-md ">
          <h1 className="text-xl font-bold ">Things to do</h1>
          <Todolist
            data={this.defaultArray}
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
              <AiOutlinePlus />
              <Button onClick={this.handleButton} extraclass="px-4 text-sm">
                Add a todo
              </Button>
            </div>
          )}
          <h1 className="text-xl font-bold ">Things done</h1>
          <DoneList
            data={this.defaultArray}
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
