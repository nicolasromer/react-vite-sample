import { useState } from 'react'
import ToDoList from './todolist/ToDoList'
import Button from './todolist/Button'
import ThemeContext from './ThemeContext'
import './App.css'



function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App theme-${theme}`}>
          
          <Button handleClick={toggleTheme} type="primary" text="Toggle Theme" />

          <h1 className="font-sans text-3xl py-3">Nick's To-Dos</h1>
          
          <ToDoList/>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
