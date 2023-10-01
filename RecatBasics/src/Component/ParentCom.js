import React, { Component ,PureComponent} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'balaji'
      }
    }

    componentDidMount(){
        setInterval(()=>{
           this.setState({
            name : 'balaji'
           })
        },2000)
    }
    
  render() {
    console.log("Parent Component render");
    return (
      <div>
        Parent Compoment
        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentCom
