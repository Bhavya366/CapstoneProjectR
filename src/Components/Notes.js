import React,{useState} from 'react';

const Notes = () => {
    const [message, setMessage] = useState('');
    const store = (event)=>{
        console.log(event.target.value)
        setMessage(event.target.value)
        localStorage.setItem("notes", JSON.stringify(message))
    }
    return (
        <div className='notes'>
           <label style={{color:"black"}}>
                All notes:<br></br>
                <textarea rows={11} cols={30} style={{backgroundColor:"#F1C75B",color:"black",lineHeight:"2"}} id="message" name="message" value={message} onChange={store} />
            </label>
        </div>
    );
};

export default Notes;