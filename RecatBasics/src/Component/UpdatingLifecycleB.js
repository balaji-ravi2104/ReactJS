import React, { Component } from 'react'

class UpdatingLifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : 'balaji'
    }
    console.log("Updating LifecycleB constructor");
  }

  // 1.
  static getDerivedStateFromProps(){
    console.log("Updating LifecycleB getDerivedStateFromProps");
    return null
  }

  // 2.
  shouldComponentUpdate(){
    console.log("Updating LifecycleB shouldComponentUpdate");
    return true
  }

    // 4.
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Updating LifecycleB getSnapshotBeforeUpdate");
    return null
  }

  // 5.
  componentDidUpdate(){
    console.log("Updating LifecycleB componentDidUpdate");
  }
  
  // 3.
  render() {
    console.log("Updating LifecycleB Render");
    return (
      <div>
        <div>LifecycleB</div>
      </div>
    )
  }
}

export default UpdatingLifecycleB
