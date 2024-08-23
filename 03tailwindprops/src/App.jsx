import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobje={
    username:"harshad",
    age:21
  }
  let newarr=[1,2,3,4,5,6]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <div className="flex gap-10">
      <Card  username="chai aur code" someobject={newarr} btntext="click me" />
      <Card username="Tea aur code" btntext="visit me"/>
      </div>
    </>
  )
}

export default App
