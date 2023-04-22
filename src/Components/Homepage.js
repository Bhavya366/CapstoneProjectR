import React from 'react';
import Profile from './Profile'
import Weatherapi from './Weatherapi'
import Newsapi from './Newsapi'
import Notes from './Notes'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const navigate = useNavigate()
    return (
        <div className='page-3'>
            <div className='profile'>
           <div className='profile-timer'>
                <div style={{display:"flex"}}>
                    <div>
                        <Profile /><br></br>
                        <Weatherapi />
                    </div>
                    <div>
                        <Notes />
                    </div>
                </div>
                <div>
                       <Timer /> 
                </div>
           </div>
            <div className='newsapi'>
                <Newsapi />                
            </div>
           
        </div> <div style={{textAlign:"end",marginRight:"30px"}}><button onClick={()=>{navigate('/movies')}}>Browse</button></div></div>
    );
};

export default Homepage;