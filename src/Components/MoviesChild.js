import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MoviesChild = (props) => {
    const [data, setData] = useState([])

    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: {
            titleType: 'movie',
            genre: props.genre,
            list: 'most_pop_movies',
            sort: 'year.decr',
            limit: '4'
        },
        headers: {
            'X-RapidAPI-Key': 'f70621928cmsh4e3821d3eb7b24bp1b3ebbjsna550d44b5b79',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setData(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    function Images() {

        return (<>
            {data.length > 0 ?
                data.map((item, index) => {
                    if (item.primaryImage !== null) {
                        return (
                            <div className='card-movies' key={index}>
                                <img src={item.primaryImage.url} alt="alternate" />
                            </div>
                        )
                    }
                }) : <div></div>}
        </>)
    }
    return (
        <div>
            <h2 style={{color:"grey",marginLeft:"30px"}}>{props.genre}</h2><br></br>
            <div className='container'>            
                <Images />
            </div>
        </div>
    )
}
export default MoviesChild;