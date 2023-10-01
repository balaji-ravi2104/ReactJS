import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {
    // 4.Short Circuit method ---> It will not display nothing if the condition was false
    return this.state.isLoggedIn && <div>Welcome Balaji</div>

    // 3.Conditional Operator Apporach
    // return( 
    //     this.state.isLoggedIn ? 
    //     <div>Welcome Balaji</div> :
    //     <div>Welcome Guest</div>
    // )

    // 2.Element Variable Approach
    //  let Message
    //  if(this.state.isLoggedIn){
    //     Message = <div>Welcome Balaji</div>
    //  }else{
    //     Message = <div>Welcome Guest</div>
    //  }
    //  return(
    //     <div>
    //         {Message}
    //     </div>
    //  )



    // 1. Simple If-else method
    // if(this.state.isLoggedIn){
    //     return <div>Welcome balaji ravi</div>
    // }else{
    //     return  <div>Welcome Guest</div>
    // }


    // return (
    //   <div>
    //     <div>Welcome balaji ravi</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
