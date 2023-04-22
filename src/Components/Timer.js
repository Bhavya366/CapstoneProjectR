import React from 'react';


const Timer = () => {
    const start = () => {
        
    }
    return (
        <div className='timer'>
            <div>
                circular
            </div>
            <div >
                <form action="" >
                    <div className='timer-set'>
                        <div><p style={{color:"#949494"}}>Hours</p>
                        <input type="number" name="hour" min={0} max={12} style={{color:"black"}}/></div>  &nbsp;
                        <div><p style={{color:"#949494"}}>Minutes</p><input type="number" name="minutes" min={0} max={60} style={{color:"black"}}/></div>&nbsp;
                        <div><p style={{color:"#949494"}}>Seconds</p><input type="number" name="sec" min={0} max={60} style={{color:"black"}}/></div>
                    </div>
                    <button onClick={start} type='submit' style={{ backgroundColor: "#FF6A6A", borderRadius: "50px", padding: "5px 40%" }}>Start</button>
                </form>
            </div>
        </div>
    );
}

export default Timer;