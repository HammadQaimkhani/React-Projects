import React, { useState } from 'react'
import "./getTime.css"




function GetTime() {
    let currTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currTime);
    const getTime = () =>{
        currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }
    return (
        <>
            <div className="main_container">
                <h1>{time}</h1>
                <button onClick={getTime}>Get Time</button>
            </div>
        </>
    )
}

export default GetTime;
