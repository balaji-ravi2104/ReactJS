import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comment : '',
         topic : 'Java'
      }

      this.handleUserNameChange = this.handleUserNameChange.bind(this);
    }

    handleUserNameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handleCommentChange = (event) =>{
        this.setState({
            comment : event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" 
                value = {this.state.username}
                onChange={this.handleUserNameChange}>
            </input>
        </div>
        <div>
            <lable>TextArea</lable>
            <textarea 
                value = {this.state.comment}
                onChange={this.handleCommentChange}
            ></textarea>
        </div>
        <div>
            <lable>Topic</lable>
            <select value={this.state.topic} onChange = {this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='Java'>Java</option>
                <option value='C++'>C++</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
