import React from 'react';
import {useState} from 'react'
const ChatInput = () => {
    const [textarea, setTextarea] = useState(null)
    return (
        <div className='chatInput'>
            <textarea value={'textarea'} onChange={(e)=>setTextarea(e.target.value)}/>
            <button className='submit-btn'>Submit</button>
        </div>
    );
};

export default ChatInput;