import React from "react";
import Child from "./Child";


export default class Parent extends React.Component {
    constructor() {
        super()
        console.log('Parent Contructor called')
        /*
          - constructor gets called at loading of component
          - constructor will execute only once.
          - it is recommanded to define state in constructor.
        */
        this.state = {
            technology: 'ReactJS',
            width : "Large Page"
        }
    }
    componentWillMount() {
        console.log('Parent componentWillMount')
        /*
          - This method executes after constructor
          - This method executes only once.
          - It is recommanded to change initial state in this method.
          - It is recommanded to set global parameters here
        */
        if (window.innerWidth < 600)
            this.setState({
                width: "Small Page"
            })
    }
    render() {
        console.log('Parent render')
        /*
            - render is mandatory lifecycle method
            - it will execute after componentWillMount method.
            - we place presentation logic here
            - it will always gets called when state change
        */
        return (
            <div>
                <h1>Parent Component</h1>
                <p style={{ color: 'blue' }}>{this.state.technology} </p>
                <p style={{ color: 'red' }}>{this.state.width} </p>
                <Child key1={this.state.technology} />
                <button onClick={() => this.setState({ technology: 'MERN' })}>Change</button>
            </div>
        )
    }
    /*
   --- Execution Flow ---
   - Parent Constructor
   - Parent componentWillMount
   - Parent render
   - Child Constructor
   - Child componentWillMount
   - Child render
   - if state / props change detected
   - Parent render
   - Child reder
   */
    componentDidMount() {
        console.log('Parent componentDidMount called')
    }
    /*
    --- Execution Flow ---
    - Parent Constructor
    - Parent componentWillMount
    - Parent render
    - Child Constructor
    - Child componentWillMount
    - Child render
    - if state / props change detected
    - Parent render
    - Child reder
    - Child componentDidMount
    - Parent componentDidMount
    */
    componentWillReceiveProps() {
        /*
            - this method will execute if component receives props
        */
        console.log('Parent componentWillReceiveProps')
    }
    shouldComponentUpdate() {
        /*
            - this method controls the state change
            - return true   -> change the state
            - return false  -> dont change the state
        */
        console.log('Parent shouldComponentUpdate')
        return true
    }
    componentWillUpdate() {
        console.log("Parent componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("Parent componentDidUpdate")
    }
    /*
        - Before unmounting the components react library will execute the following methods
        - these methods are used to perform cleanup operations
        - eg    nullifying instances, empty states, empty props, cancel subscriptions, etc
    */
    componentWillUnmount() {
        console.log("Parent componentWillUnmount")
    }
}
