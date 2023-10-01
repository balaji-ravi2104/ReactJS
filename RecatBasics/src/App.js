import React, {Component} from 'react';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClickClass from './Component/ClickClass';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import StyleSheet from './Component/StyleSheet';
import Inline from './Component/Inline';
import './appStyle.css';
import styles from './appStyle.module.css';
import Form from './Component/Form';
import LifecycleA from './Component/LifecycleA';
import UpdatingLifecycleA from './Component/UpdatingLifecycleA';
import FragmentDemo from './Component/FragmentDemo';
import Table from './Component/Table';
import PureComp from './Component/PureComp';
import ParentCom from './Component/ParentCom';
import RefDemo from './Component/RefDemo';
import FocusInputRej from './Component/FocusInputRej';
import FRparentInput from './Component/FRparentInput';
import DemoPortal from './Component/DemoPortal';
import ErrorBoundary from './Component/ErrorBoundary';
import ErrorHandle from './Component/ErrorHandle';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import ClickCounter2 from './Component/ClickCounter2';
import HoverCounter2 from './Component/HoverCounter2';
import User from './Component/User';
import Counter1 from './Component/Counter1';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/userContext';
 
class App extends Component {
  render(){
  return (
    <div className="App">

    {/* This is Example for React Context API */}
    <UserProvider value="Balaji">
        <ComponentC />
    </UserProvider>

    {/* This is Example for Render props */}
    {/* <Counter1> 
       {(count,incerementCount) => (
            <ClickCounter2 count = {count} incerementCount = {incerementCount} />
        )}
    </Counter1>

    <Counter1> 
        {(count,incerementCount) => (
            <HoverCounter2 count = {count} incerementCount = {incerementCount} />
        )}
    </Counter1> */}
     
      {/* This Two Components are Example for HOC */}
      {/* <ClickCounter name='Balaji'/>
      <HoverCounter /> */}

      {/* Error Handle Methods 
      <ErrorHandle>
          <ErrorBoundary errorName= "Balaji" />
      </ErrorHandle>

      <ErrorHandle>
          <ErrorBoundary errorName="Ravi" />
          </ErrorHandle>

      <ErrorHandle>
          <ErrorBoundary errorName="joker" />
      </ErrorHandle> */}
      
      {/* <DemoPortal /> */}
      {/* <FRparentInput /> */}
      {/* <FocusInputRej /> */}
      {/* <RefDemo /> */}
      {/* <ParentCom /> */}
      {/* <Table />
      <FragmentDemo /> */}
      {/* <UpdatingLifecycleA /> */}
      {/* <LifecycleA /> */}
      {/* <Form />  */}
      {/* <h1 className='error'>Balaji ravi</h1> */}
      {/* <h1 className={styles.success}>Baby ravi</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary = {false}/> */}
      {/* <NameList /> */}
      {/* < UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClickClass /> */}
      {/* <Counter />*/}
      {/* <Message /> */}
      {/* <Greet name="Ravi" lastName="Balaji">
          <p>This is Child props</p>
      </Greet>
      <Greet name="Baby" lastName="Ravi">
          <p>This is Child props</p>
      </Greet>
      <Greet name="Nirmal" lastName="Ravi">
          <button>Click Me</button>
      </Greet>
      <Greet name="Balaji" lastName="Ravi">
          <p>This is Child props</p>
      </Greet>

      <Welcome name="Ravi" lastName="Balaji">
          <p>This is Child Class Props</p>
      </Welcome>
      <Welcome name="Baby" lastName="Ravi"/>
      <Welcome name="Nirmal" lastName="Ravi"/>
      <Welcome name="Balaji" lastName="Ravi"/>

      <Hello></Hello> */}
    </div>
  );
}
}


















//This is Example for Stateless Functional Compoment --> It is just like a JavaScript Function

// function App {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hello Balaji Ravi...!
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }


//This is Example for Stateful Class Compoment 
 
// class App extends Component {
//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Balaji Ravi...!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// }

export default App;
