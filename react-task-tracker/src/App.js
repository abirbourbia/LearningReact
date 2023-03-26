import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30ppm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'March 1st at 3pm',
            reminder: false,
        }
    ]
)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header/>
      {tasks.length>0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}/> : 'No Tasksto show'}
    </div>
  );
}

export default App;
