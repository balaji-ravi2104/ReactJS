import React from "react";

const Hello = () =>{
    // This is Example for React with JSX
    return(
        <div id="hello" className="dummyClass">
            <h1>This is h1 Tag</h1>
        </div>
    )

    // This is Example for React without JSX
    
    // return React.createElement(
    //     'div',
    //     {id:'hello', className: 'dummyClass'},
    //     React.createElement('h1',null,'This is h1 Tag')
    // );
}

export default Hello;