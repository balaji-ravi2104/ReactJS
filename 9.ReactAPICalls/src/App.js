import React, {Component} from 'react';
import './App.css';
import List from './Components/PostList';
import PostForm from './Components/PostForm';

class App extends Component {
  render(){
  return (
    <div className="App">
      <PostForm />
      {/* <List /> */}
    </div>
  );
}
}

export default App;
