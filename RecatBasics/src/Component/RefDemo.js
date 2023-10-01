import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()

      // Example for call back refs
      // this.cbref = null
      // this.setcbref = (element) => {
      //   this.cbref = element
      // }
    }

    componentDidMount(){
      // call back refs
      // if(this.cbref){
      //    this.cbref.focus()
      // }
      
      this.inputRef.current.focus()
      console.log(this.inputRef);
    }

    clickhandler = () =>{
        alert(this.inputRef.current.value);
    }
    
  render() {
    return (
      <div>
        <input text='text' ref = {this.inputRef}/>
        {/* call back refs */}
        {/* <input text='text' ref = {this.setcbref}/> */}
        <button onClick = {this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo
