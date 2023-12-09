import React from 'react';
import ChatHerader from './ChatHerader'
import ChatDisplay from './ChatDisplay'
import MatchesDisplay from './MatchesDisplay'
const ChatContainer = () => {
    return (
        <div className='chatContainer'>
            <ChatHerader/>
            <div>
                <button className='option'>matches</button>
                <button className='option'>chat</button>
            </div>
            <MatchesDisplay/>
            
            <ChatDisplay/>
        </div>
    );
};

export default ChatContainer;