import React, { useState } from 'react'
import "./Prtasktakeinput"
import Prtasktakeinput from './Prtasktakeinput'
const Prtask = () => {


    const [input, setInput] = useState('')
    const [task, setTask] = useState([])

    function textFieldInput(event) {
        setInput(event.target.value)
    }

    function handleInput(){
        setTask(prevtask => [...prevtask, input])
        setInput('')
    }
    return (
        <>
            <div>
                <input type='text' placeholder='Write Something' value={input} onChange={textFieldInput} />
                <button onClick={handleInput}>Submit</button>
                <div>{
                    <Prtasktakeinput value={task}/>
                }</div>
            </div>
        </>
    )
}

export default Prtask