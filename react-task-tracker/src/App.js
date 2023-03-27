import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {

  const[showAddTask, setShowAddTask] = useState(false)
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


// add task 
const addTask = (task)=>{
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
// delete function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id===id ? 
  {...task, reminder:!task.reminder}: task))
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length>0 ?
      (<Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/>) : (
        'No Tasks to Show'
        )}
    </div>
  );
}

export default App;
