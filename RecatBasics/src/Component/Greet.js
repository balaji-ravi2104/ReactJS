import React from "react";

// function Greet(){
//     return <h1>Hello Balaji Ravi</h1>
// }


const Greet = (props) => {
    // console.log(props);
    // const {Name,lastName} = props;
    return(
        <div>
            <h1>
                {/* Hello {Name} and {lastName} */}
                Hello {props.name} and {props.lastName}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet;