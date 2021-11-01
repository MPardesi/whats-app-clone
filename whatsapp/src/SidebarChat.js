import React, { useEffect, useState} from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import { db } from './firebaselocal';

import { collection, getDocs, addDoc } from "firebase/firestore";

function SidebarChat({addNewChat, id, name}) 
{


    const dbref=collection(db,'rooms');
    const [rooms, setRooms] = useState([]);


    
    console.log(addNewChat);
    const [seed, setSeed] = useState("");
    useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));

    const getData=async()=>{
        const data=await getDocs(dbref);
        setRooms(data.docs.map((doc) => ({data:doc.data(),id:doc.id})));

    }
getData();


    }, []);

    const createChat = () => {
        const roomName=prompt("Please enter name for chat room");
        
        if(roomName){


            const createIT=async()=>{
                await addDoc(dbref,{name:roomName});
            };
            createIT();

            const getData=async()=>{
                const data=await getDocs(dbref);
                setRooms(data.docs.map((doc) => ({data:doc.data(),id:doc.id})));
        
            }
        getData();


                       }
        }
 

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message..</p>
            </div>
        </div>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
};


export default SidebarChat;
 