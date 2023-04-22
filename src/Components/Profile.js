import React,{useState,useEffect} from 'react';
import profilehomepage from '../images/profilehomepage.png'
const Profile = () => {
    const [category,setCategory] = useState([]);
    const [details,setDetails] = useState([]);

    const handleRemoveCategory = (CategorytoRemove) => {
        setCategory((prevCategory) =>
            prevCategory.filter((category) => category !== CategorytoRemove)
        );
    };

    useEffect(()=>{
        setCategory(JSON.parse(localStorage.getItem("categories")))
        setDetails(JSON.parse(localStorage.getItem("details")))
    },[])
    
    return (
        <div className='profile-homepage'>
            <div style={{width:"40%"}}>
                <img src={profilehomepage} alt="oy" width={"50%"} height={"100%"}/>
            </div>
            <div style={{width:"60%"}}>
                {details?<div style={{lineHeight:"1.5"}}><p>{details[0]}</p>
                {console.log("details:",details[0])}
                <p>{details[1]}</p>
                <h5>{details[2]}</h5></div>:<div></div>}<br></br>
                <div className='homepage-features'>
                {category.map((category, index) => {
                            return (
                                <span key={index} className='features'>
                                    {category} &nbsp;
                                    <button onClick={() => handleRemoveCategory(category)} style={{ backgroundColor: "#148A08", padding: "0px" }}>x</button>
                                </span>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Profile;