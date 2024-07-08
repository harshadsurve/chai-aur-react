import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter]= useState(15)
// let counter =15
const addvalue=()=>{
  console.log('click',counter);
  // counter = counter+1
  if (counter == 20) {
    setCounter(counter)
    return
  }
  setCounter(counter + 1)


}
const removevalue=()=>{
  if (counter == 0) {
    setCounter(counter)
    return
  }
  setCounter(counter-1)
}
  return (
    <>
     <h1>chai aur React</h1>
     <h2>Counter Value:{counter}</h2>

     <button onClick={addvalue}>Add value</button>
     <br />
     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
