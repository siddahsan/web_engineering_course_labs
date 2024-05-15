import React, { useState } from 'react'

const GetTime = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000)
    return (
        <div>
            <h1>{time}</h1>
            {/* <button onClick={() => setTime(new Date().toLocaleTimeString())}>Get Time</button> */}
        </div>
    )
}

export default GetTime