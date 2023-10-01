import React,{useEffect,useRef} from 'react'

function FocuseInput() {

    const inputRef = useRef(null)

    useEffect(()=>{
        // Focuse the input element
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} type='input'></input>
    </div>
  )
}

export default FocuseInput