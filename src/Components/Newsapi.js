import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Newsapi = () => {

    const [headlines, setHeadlines] = useState([])
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=078d01ec49c940b3b208172eff7a1846')
            .then((response) => { setHeadlines(response.data.articles) })
            .catch((error) => { console.log(error) })

    }, [])

    return (
        <div className='latest-news'>
            {headlines.length > 0 ? headlines.filter((item, index) => index < 1).map((item, index) => {
                const myStyle={
                    backgroundImage: `url(${item.urlToImage})`,
                    height:'40vh',
                    borderTopLeftRadius:"10px",
                    borderTopRightRadius:"10px",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                };
                return (
                    <div key="0">
                    <div className="card" style={myStyle} >
                            <div className='bottom'>
                                <p>{item.title}</p>
                                <p style={{fontSize:"12px"}}>{(item.publishedAt).slice(5,8)+(item.publishedAt).slice(8,10)+'-'+(item.publishedAt).slice(0,4)+'|'+(item.publishedAt).slice(11,19)}</p>
                            </div>                         
                    </div>
                    <div className="content">
                    <p>{item.content}</p>
                    <p>{item.description}</p>
                    </div>
                    </div>
                )
            }) : <div></div>}
        </div>
    );
};

export default Newsapi;


