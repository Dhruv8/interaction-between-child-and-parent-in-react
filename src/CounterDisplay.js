import React, {Component} from 'react';

class CounterDisplay extends Component{
    render(){
        return(
            <div>
                <div>{this.props.counterValue}</div>
                <div onClick={this.props.incrementCounter}>+</div>
                <div onClick={this.props.decrementCounter}>-</div>
            </div>    
        )
    }
}

export default CounterDisplay;