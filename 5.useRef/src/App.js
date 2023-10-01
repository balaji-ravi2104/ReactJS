import logo from './logo.svg';
import './App.css';
import FocuseInput from './components/FocuseInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      {/* <FocuseInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
