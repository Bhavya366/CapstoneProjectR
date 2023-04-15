import { React, useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import title from '../images/Title.png'
import Action from '../images/Action.png'
import Drama from '../images/Drama.png'
import Fantasy from '../images/Fantasy.png'
import Fiction from '../images/Fiction.png'
import Horror from '../images/Horror.png'
import Music from '../images/Music.png'
import Romance from '../images/Romance.png'
import Thriller from '../images/Thriller.png'
import Western from '../images/Western.png'

const Entertainment = () => {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const cards = [{
        bgcolor: "#FF5209", text: "Action", image: Action, bordercolor: "#11B800",
    }, {
        bgcolor: "#D7A4FF", text: "Drama", image: Drama, bordercolor: "#D7A4FF",
    }, {
        bgcolor: "#148A08", text: "Romance", image: Romance, bordercolor: "#11B800",
    }, {
        bgcolor: "#84C2FF", text: "Thriller", image: Thriller, bordercolor: "#84C2FF",
    }, {
        bgcolor: "#902500", text: "Western", image: Western, bordercolor: "#902500",
    }, {
        bgcolor: "#7358FF", text: "Horror", image: Horror, bordercolor: "#7358FF",
    }, {
        bgcolor: "#FF4ADE", text: "Fantasy", image: Fantasy, bordercolor: "#FF4ADE",
    }, {
        bgcolor: "#E61E32", text: "Music", image: Music, bordercolor: "#11B800",
    }, {
        bgcolor: "#6CD061", text: "Fiction", image: Fiction, bordercolor: "#6CD061",
    },]

    const add = (filteredCategory) => {
        if (!category.includes(filteredCategory))
            setCategory([...category, filteredCategory])
    }
    const handleRemoveCategory = (CategorytoRemove) => {
        setCategory((prevCategory) =>
            prevCategory.filter((category) => category !== CategorytoRemove)
        );
    };
    localStorage.setItem("categories",JSON.stringify(category))
    const  validCategory=()=>{
        if(category.length>=3)
            navigate('/homepage')
        else
            alert("Please select atleast three categories...")
    }
    console.log(category)
    return (
        <div style={{backgroundColor:"black",}}>
        <div className='page' style={{alignItems: "center" }}>
            <div className='first-part'>
                <img src={title} alt="" style={{marginBottom: "20%" }} className='img' />
                <h1 style={{lineHeight: "1.5" }}>Choose your entertainment category</h1><br></br>
                <div>
                    {category.map((category, index) => {
                        return (
                            
                                <span key={index} className='feature'>
                                    {category} &nbsp;
                                    <button onClick={() => handleRemoveCategory(category)} style={{backgroundColor:"#148A08",padding:"0px"}}>x</button>
                                </span>
                        );
                    })}
                </div>

            </div>
            <div className='inner-component2' id="page2">
                {cards.map((item, index) => {
                    return (
                        <div key={index} style={{ backgroundColor: item.bgcolor, border: `3px solid ${item.bordercolor}`, }}
                            className='card' onClick={() => { add(item.text) }} >
                            <h3>{item.text}</h3><br></br>
                            <img src={item.image} alt="alternate" className='img' />
                        </div>
                    )
                })}
            </div>
        </div>
          <p style={{textAlign:"right"}}>  <button onClick={()=>{validCategory()}} style={{textAlign:"end"}}>Next</button> </p>
        </div>
    );
};

export default Entertainment;