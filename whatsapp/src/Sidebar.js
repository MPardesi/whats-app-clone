//css
import './Sidebar.css';

//inbuild module
import React, { useEffect, useState} from 'react';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

//custom import
import SidebarChat from './SidebarChat';
import {db} from "./firebaselocal";
import { collection, getDocs } from "firebase/firestore";



function Sidebar() {

    const dbref=collection(db,'rooms');
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const getData=async()=>{
            const data=await getDocs(dbref);
            setRooms(data.docs.map((doc) => ({data:doc.data(),id:doc.id})));

            console.log(data.docs.map((doc)=> ({...doc.data(),id:doc.id})));
        }
    getData();
     }, []);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat name={room.data.name} />
                ))}
            </div>

        </div>

    );
}

export default Sidebar;
