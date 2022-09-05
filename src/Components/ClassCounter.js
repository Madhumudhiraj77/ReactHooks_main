import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment=()=>{
    this.setState(prevState=>{
        return{
            count:prevState.count+1
        }
    })
  }

  Reset=()=>{
    this.setState(prevState=>{
        return{
            count:0
        }
    })
  }

  Decrement=()=>{
    this.setState(prevState=>{
        return{
            count:prevState.count-1
        }
    })
  }

  Incrementfive=()=>{
    this.setState(prevState=>{
        return{
            count:prevState.count+5
        }
    })
  }

  render() {
    return (
      <div>
        <h1>class Count {this.state.count}</h1>
        <button onClick={this.Increment}>class Increment</button>
        <button onClick={this.Reset}>class Reset</button>
        <button onClick={this.Decrement}>class Decrement</button>
        <button onClick={this.Incrementfive}>class Increment by 5</button>
      </div>
    );
  }
}

export default ClassCounter;
