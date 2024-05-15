import React, { useState } from 'react'
import './TaskToDo.css'

const TaskToDo = () => {

    const [input, setInput] = useState()
    const [tasks, setTasks] = useState({
        Backlog: [],
        InProgress: [],
        Completed: []
    })
    const [category, setCategory] = useState('Backlog')

    const listofTasks = () => {
        setTasks({
            ...tasks,
            [category]: [...tasks[category], input]
        });
        setInput('')
    }

    const chooseCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleDeleteTask = (category, index) => {
        const updatedTasks = { ...tasks };
        updatedTasks[category].splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>ToDoList - Task</h1>
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <input type='text' placeholder='Enter Task' value={input} onChange={(e) => setInput(e.target.value)} />
                <select value={category} onChange={chooseCategory}>
                    <option value='Backlog'>Backlog</option>
                    <option value='InProgress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                </select>
                <button onClick={listofTasks} className='btn-add'>Add Task</button>
            </div>
            <div>
                {Object.entries(tasks).map(([category, categoryTasks]) => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <hr />
                        {categoryTasks.map((task, index) => (
                            <div key={index}>
                                <p>{task}</p>
                                <button style={{backgroundColor:'red'}} onClick={() => handleDeleteTask(category, index)}>Delete</button>
                                <button>Backlog</button>
                                <button>In Progress</button>
                                <button>Completed</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TaskToDo