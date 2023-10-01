import React, { Component } from 'react'
import UpdatingLifecycleB from './UpdatingLifecycleB';

class UpdatingLifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'balaji'
    }
    console.log("Updating LifecycleA constructor");
  }

  // 1.
  static getDerivedStateFromProps(){
    console.log("Updating LifecycleA getDerivedStateFromProps");
    return null
  }

  // 2.
  shouldComponentUpdate(){
    console.log("Updating LifecycleA shouldComponentUpdate");
    return true
  }

    // 4.
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Updating LifecycleA getSnapshotBeforeUpdate");
    return null
  }

  // 5.
  componentDidUpdate(){
    console.log("Updating LifecycleA componentDidUpdate");
  }

  changeState = ()=>{
    this.setState({
      name : 'ravi'
    })
  }
  
  // 3.
  render() {
    console.log("Updating LifecycleA Render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change</button>
        <UpdatingLifecycleB />
      </div>
    )
  }
}

export default UpdatingLifecycleA
