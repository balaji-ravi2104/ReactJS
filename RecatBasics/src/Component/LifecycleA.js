import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
// Shows the order of execution
// This is the Mounting lifecycle methods

class LifecycleA extends Component {
    // 1.
    constructor(props) { 
      super(props)
    
      this.state = {
         name : 'balaji'
      }
      console.log("LifecycleA constructor");
    }

    // 2.
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        // return null or any object
        return null
    }
    
    // It will execute Only Once at last
    // 4.
    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }

    // 3.
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        LifecycleA
        {/* Child Lifecycle */}
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
 