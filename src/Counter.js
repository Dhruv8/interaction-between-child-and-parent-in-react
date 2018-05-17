import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {counter: props.value};
        console.log(this.state.counter);
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)

    }

    handleIncrement(){
        // this handles increment when increment button is clicked
        this.setState({counter: this.state.counter + 10})
    }

    handleDecrement(){
        // this handles increment when increment button is clicked
        this.setState({counter: this.state.counter - 10})
    }

    render(){
        return(
            <div>
                <CounterDisplay incrementCounter = {this.handleIncrement}
                decrementCounter = {this.handleDecrement}
                counterValue = {this.state.counter} />
            </div>
        )
    }

}

export default Counter;