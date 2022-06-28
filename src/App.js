import React, { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Estudar React',
      completed: true
    },
    {
      id: '3',
      title: 'Fazer exercícios',
      completed: true
    }
  ])

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
