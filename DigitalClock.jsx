import React, { useState } from 'react'
import "./digitalClock.css";




function DigitalClock() {
    let gettime = new Date().toLocaleTimeString();
    const [currTime , updateTime] = useState(gettime);
    setInterval(() => {
        gettime = new Date().toLocaleTimeString();
        updateTime(gettime)
    }, 1000);
    return (
        <>
            <div className="clock">
                <h1>{currTime}</h1>
            </div>            
        </>
    )
}

export default DigitalClock;
