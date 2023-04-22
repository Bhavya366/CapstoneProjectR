import React, { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useForm} from 'react-hook-form';

const Timer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const [intervals,setIntervals] = useState("00:00:00");
  const [percentage,setPercentage] = useState(100)

  const start = (data)=>{
    const hr=Number(data.hrs);
    const min=Number(data.mins);
    const sec=Number(data.secs);
    var total = hr*3600 + min*60 + sec;
    var finaltotal = total;
    setPercentage(sec/total * 100)
    let interval = setInterval(()=>{
        const leftHr=Math.floor(total/3600);
        const leftMin=Math.floor((total%3600)/60)
        const leftSec=total%60;
        let time=`${leftHr.toString()}:${leftMin.toString()}:${leftSec.toString()}`;
        if(total<0 ){
            clearInterval(interval)
        }
        setPercentage((leftSec / finaltotal)*100)
        setIntervals(time)
        total--
        
    },1000)
  }
    return (
        <div className='timer'>
            <div style={{ width: 100, margin:"10px" }}>
                <CircularProgressbar value={percentage} text={intervals} />
            </div>
            <div style={{ margin:"10px" }}>
                <form action="" onSubmit={handleSubmit(start)}>
                    <div className='timer-set'>
                        <div><p style={{color:"#949494"}}>Hours</p>
                        <input type="number" name="hour" min={0} max={12} style={{color:"black"}} {...register("hrs")}/></div>  &nbsp;
                        <div><p style={{color:"#949494"}}>Minutes</p><input type="number" name="minutes" min={0} max={60} style={{color:"black"}} {...register("mins")}/></div>&nbsp;
                        <div><p style={{color:"#949494"}}>Seconds</p><input type="number" name="sec" min={0} max={60} style={{color:"black"}} {...register("secs")}/></div>
                    </div>
                    <button onClick={start} type='submit' style={{ backgroundColor: "#FF6A6A", borderRadius: "50px", padding: "5px 40%" }}>Start</button>
                </form>
            </div>
        </div>
    );
}

export default Timer;