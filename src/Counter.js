import {Component, Fragment} from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            email: '',
            footer: '© Copyright 2024.'
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 2: Mounting
    UNSAFE_componentWillMount() {
        console.log('Trước khi component được render (Trước khi được gắn vào DOM)')
    }

    componentDidMount() {
        console.log('Được gọi sau khi component được render() (Sau khi được gắn vào DOM)')
    }

    // 3: Updating
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Trước khi Props và state cập nhật (sau khi render());');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Sau khi Props và state cập nhật')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    increment = () => {
        // Không nên cập nhật state trực tiếp, điều này sẽ không cập nhật lại giao diện
        // this.setState((state) => {
        //     return {count: state.count + 1}
        // });
        this.setState((state) => {
            return {count: state.count + 1}
        }); // 0 + 1
        this.setState((state) => {
            return {count: state.count + 1}
        }); // 1 + 1
        this.setState((state) => {
            return {count: state.count + 1}
        }); // 2 + 1
    }
    

    // () => {}
    // (parameter) => {}

    handleClick = (event) => {
        event.preventDefault();
        console.log('Handle clicked')
    }

    handleSubmit(event) {
        // event.preventDefault();// Không nên cập nhật state trực tiếp, điều này sẽ không cập nhật lại giao diện
        // this.setState((state) => {
        //     return {email: ''}
        // });
        // console.log(this); // undefined
        console.log('Handle submit clicked');
    }

    handleChange = (event) => {
        this.setState({email: event.target.value});
    }

    componentWillUnmount() {
        console.log('componentWillUnmount được gọi khi Counter component bị xóa khỏi DOM!');
    }

    render() {
        return (
            <Fragment>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </Fragment>
        );
    }
}

export default Counter;
