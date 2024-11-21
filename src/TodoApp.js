import { Component } from "react";
import Counter from "./Counter";
import { isVisible } from "@testing-library/user-event/dist/utils";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todos: ["Học HTML"],
      isVisible: true,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // Initialization: Đây là vòng đời đầu tiên lúc Component được khởi tạo
    console.log(
      "Initialization: Đây là vòng đời đầu tiên lúc Component được khởi tạo"
    );
  }

  /////// Mouting /////
  UNSAFE_componentWillMount() {
    console.log("Được gọi trước khi được mount vào DOM");
  }

  componentDidMount() {
    // Hàm này được gọi side effect...
    console.log("Được gọi sau khi đã được mount vào DOM");
  }
  //// End Mouting ////

  /////// Updating /////
  UNSAFE_componentWillReceiveProps() {
    console.log("Được gọi khi props được cập nhật");
  }

  shouldComponentUpdate() {
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate được gọi trước hàm render()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate được gọi sau hàm render()");
  }
  //// End Updating ////

  // () => {statement;}
  // (parameter) => {}
  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this);
    event.preventDefault();
    console.log("Submited");
    // spread operator
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: "",
    });
  };

  handleClickHere = (message) => {
    console.log("clicked: " + message);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {/* cách 1: dùng arrow function () => this.func('data') */}
        {/* <button onClick={() => this.handleClickHere('Hello')}>Click here</button> */}
        {/* cách 2: ràng buộc this */}
        {/* <button onClick={this.handleClickHere.bind(this, "Hello")}>
          Click here
        </button> */}

        <button onClick={() => this.setState({ isVisible: !this.state.isVisible })}>
          Ẩn/hiện Counter
        </button>
        {this.state.isVisible && <Counter />}
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name=""
            id=""
            value={this.state.todo}
          />
          <button>Add</button>
        </form>
        <ol>
          {this.state.todos.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default TodoApp;
