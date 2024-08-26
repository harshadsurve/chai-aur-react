import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-500"
      style={{backgroundColor: color}}
      ></div>
      <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
          <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>
          <button 
           onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>blue</button>
          <button 
          onClick={()=>setColor("hotPink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"hotPink"}}>HotPink</button>
          <button 
           onClick={()=>setColor("Tomato	")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Tomato	"}}>Tomato	</button>
          <button 
          onClick={()=>setColor("Gold")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Gold"}}>Gold</button>
          <button 
          onClick={()=>setColor("Violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Violet"}}>Violet</button>
          <button 
           onClick={()=>setColor("MediumPurple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"MediumPurple"}}>MediumPurple</button>
          <button 
         onClick={()=>setColor("Lime")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Lime"}}>Lime</button>
          <button 
         onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>
    </>
  )
}

export default App
