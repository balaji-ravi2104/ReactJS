import React, {useState , useMemo} from 'react'

function Counter() {

    const[countone,setcountOne] = useState(0);
    const[counttwo,setcountTwo] = useState(0);

    const onClickone = () =>{
        setcountOne(countone+1)
    }

    const onClickTwo = () =>{
        setcountTwo(counttwo+1)
    }

    // When countone value is changes the isEven will be called and loop will
    // executed, if counttwo's value changes isEven will not be invoked.. it will improve the spped of the execution
    const isEven = useMemo(() =>{
        let i=0;
        while(i<2000000000) i++;
        return countone%2 === 0;
    },[countone])


  return (
    <div>
        <div>
            <button onClick={onClickone}>Count One -  {countone}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={onClickTwo}>Count Two - {counttwo}</button>
        </div>
    </div>
  )
}

export default Counter