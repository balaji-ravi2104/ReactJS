import React, { Component } from "react";

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incerementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.children(this.state.count, this.incerementCount)}</div>
    );
  }
}

export default Counter1;
