import {
  Component,
  FormEvent,
  ReactNode,
} from "react";
import Button from "./Button";
import Input from "./Input";

type todoType = {
  title?: string;
  status?: boolean;
};

type FP = {
  handleButton: () => void;
  todoList: todoType[];
  Addtodo: (xyx: todoType[]) => void;
};

type STY = {
  textInpt: string;
};

class Form extends Component<FP, STY> {


  constructor(props: FP) {
    super(props);
    this.state = {
      textInpt: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let arr: todoType[] = [
      ...this.props.todoList,
      { title: this.state.textInpt, status: false },
    ];
    this.state.textInpt.length > 0 && this.props.Addtodo(arr);
    this.setState({ textInpt: "" });
  }

  handleChange(e: FormEvent<HTMLInputElement>) {
    this.setState({ textInpt: e.currentTarget.value });
  }

  render(): ReactNode {
    
    return (
      <form
        onSubmit={this.handleSubmit}
        className="border rounded-md p-5 my-5 shadow-md"
      >
        <h1 className="text-2xl text-gray-800 my-4">Create a Todo</h1>
        <Input
          placeholder="Write an article about XState"
          value={this.state.textInpt}
          onChange={this.handleChange}
        />
        <div className="space-x-4">
          <Button>Save</Button>
          <Button
            extraclass=" rounded-md bg-white hover:bg-gray-200 border text-black "
            onClick={this.props.handleButton}
          >
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}
export default Form;
