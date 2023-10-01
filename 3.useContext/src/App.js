import './App.css';
import React from 'react';
import ComponentsA from './Components/ComponentsA';

export const UserContext = React.createContext();
export const SecondContext = React.createContext();


function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Balaji'}>
        <SecondContext.Provider value={'ravi'}>
          <ComponentsA />
        </SecondContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
