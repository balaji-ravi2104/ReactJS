import React,{Component} from "react";

class Welcome extends Component{
    render(){
        // const {name,lastName} = this.props
        // const {state1,state2} = this.state
        return(
            <div>
                {/* <h1>Welcome {name} {lastName}</h1> */}
                <h1>Welcome {this.props.name} {this.props.lastName}</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Welcome;