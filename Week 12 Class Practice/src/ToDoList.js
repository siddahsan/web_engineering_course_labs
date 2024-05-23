import React from 'react'

const ToDoList = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>ToDoList - Task</h1>
            </div>
            <div style={{display:'flex', gap:'10px', justifyContent:'center', height:'50px', fontSize:50}}>
                <input type='text' placeholder='Enter Task'/>
                <button>Add Task</button>
            </div>
        </>
    )
}

export default ToDoList