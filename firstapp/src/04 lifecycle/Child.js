import React from "react";


export default class Child extends React.Component {
    constructor() {
        super()
        console.log('Child constructor')
    }
    componentWillMount() {
        console.log('Child componentWillMount called')
    }
    render() {
        console.log('Child render called')
        return (
            <div>
                <h1>Child Component</h1>
                <h4>{this.props.key1} </h4>
            </div>
        )
    }
    componentDidMount() {
        console.log('Child componentDidMount called')
    }
    componentWillReceiveProps() {
        console.log('Child componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('Child shouldComponentUpdate')
        return true
    }
    componentWillUpdate() {
        console.log("Child componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("Child componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("Child componentWillUnmount")
    }
}
