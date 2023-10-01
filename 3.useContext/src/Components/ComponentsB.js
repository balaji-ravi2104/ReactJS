import React,{useContext} from 'react';
import ComponentsC from './ComponentsC';
import { UserContext,SecondContext } from '../App';

// With useContext hook code loos like this
const ComponentsB = () => {

  const firstname = useContext(UserContext);
  const lastname = useContext(SecondContext);

  return (
    <div>
      {firstname}-{lastname}
      {/* <ComponentsC /> */}
    </div>
  );
}

export default ComponentsB;
