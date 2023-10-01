import logo from './logo.svg';
import './App.css';
import HookCounterOne from './Components/HookCounterOne';
import ClassCounterOne from './Components/ClassCounterOne';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import MoudeContainer from './Components/MoudeContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import HookIntervalCounter from './Components/HookIntervalCounter';
import DataFetching from './Components/DataFetching';

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <HookIntervalCounter />
      <IntervalClassCounter /> */}
      {/* <MoudeContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
    </div>
  )
}

export default App;
