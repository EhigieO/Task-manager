import React from 'react'
import {useState} from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
    const [tasks, setTasks] = useState(
        [
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th at 20:30pm',
        reminder: true,
    },
     {
        id: 1,
        text: 'appointment',
        day: 'Feb 5th at 20:30pm',
        reminder: true,
    },
     {
        id: 1,
        text: 'Doctors appoint',
        day: 'Feb 5th at 20:30pm',
        reminder: false,
    }

]
    )

  return (
    <div className="container">
      <Header />
        <Tasks tasks={tasks} />
    </div>
  )
}

export default App