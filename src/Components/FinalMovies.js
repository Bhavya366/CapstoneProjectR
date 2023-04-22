import React,{useEffect,useState} from 'react'
import icon from '../images/icon.png'
import MoviesChild from './MoviesChild';
import {useNaviagte, useNavigate} from 'react-router-dom';

const FinalMovies = () => {
    const navigate = useNavigate();
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        setCategory(JSON.parse(localStorage.getItem("categories")))  
    },[])
    return (
        <div className='movies'>
            <div className='header'>
                    <h2 style={{ color: "green",margin:"5% 20px 0px 20px" }}>Super app</h2>
                    <img src={icon} style={{ borderRadius: "50%",margin:"20px" }} onClick={() => { navigate(-1)}} />
            </div>
            <div>
            <h3 style={{ margin: '0 0  3% 2%', color: 'white' }}>Entertainment according to your choice</h3>
                {category?category.map((item,index)=>{
                    return(
                        
                        <MoviesChild genre={item} />
                    )
                }):<div></div>}
                
            </div>
        </div>
    );
};

export default FinalMovies;