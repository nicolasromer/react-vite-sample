import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ToDoList from './todolist/ToDoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex justify-left mb-5">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="font-sans text-3xl">Nick's To-Dos</h1>
      
      <ToDoList/>

    </div>
  )
}

export default App
