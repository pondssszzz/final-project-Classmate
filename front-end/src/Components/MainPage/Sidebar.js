import "./MainPage.css";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DialogPopUp from "./RoomPopUpPage/DialogPopUp.js";
import {useState} from "react";

function Sidebar(){
     const roomItems = [
        {
          key: 1,
          room: "NW"
        },
        {
          key: 2,
        room : "I"
        },
        {
          key: 3,
          room : "SE"
        }]

    const [openPopUp, setOpenPopUp] = useState(false);

    return (
        <div>
        <Stack direction="column" spacing={2} className="sideBar_section">
        {
                roomItems.map( (room) => {
                    return (
            <Avatar variant="rounded" className="room_avatar">
                {room.room}
            </Avatar>)
                })
            }
            <button className="add_room" onClick = {() => 
                setOpenPopUp(true)
                }>
            <Avatar sx={{bgcolor:"#DBE2EF"}} variant="circular">
                <AddIcon/>
            </Avatar>
            </button>
        </Stack>
        <DialogPopUp openPopUp= {openPopUp} setOpenPopUp={setOpenPopUp}>
        </DialogPopUp>
        </div>
    )
}

export default Sidebar;