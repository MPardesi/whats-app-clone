import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage= (e) => {
        e.preventDefault();
        console.log("You typed >>> ",input);
        setInput("");
    };

    return (
        <div className="chat">
            <div div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        {/* <AttachFileIcon /> */}
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">ABC</span> 
                    Hello
                    <span className="chat__timestamp">
                        10:45pm
                    </span>
                </p>
                
            </div>

            <div className="chat__footer"> 
                <InsertEmoticonIcon />
                <form>
                    <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    placeholder="Type a message " 
                    type="text" 
                    />

                    <button onClick={sendMessage} 
                    type="submit">
                        Send a message
                    </button> 
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
