import React,{useState} from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from '@mui/icons-material/Clear';
import StepperPage from "./StepperPage.js";
import "./DialogPopUp.css"



export default function DialogPopUp(props){

     const {title, children, openPopUp, setOpenPopUp} = props

     const [page,setPage] = useState(0);


      const isNextPage = () => {
          return page === 1
      }
    return (
        <Dialog open={openPopUp}>
            <button className="dialog_exit_button" onClick = {() => 
                setOpenPopUp(false)
                }>
            <ClearIcon />
            </button>
           
            <DialogTitle>
                <div className="DialogTitle">Choose the Option</div>
            </DialogTitle>
            <DialogContent >
            {isNextPage() ? (
              <StepperPage setOpenPopUp={setOpenPopUp}/>
            ) :   <div className="cardContainer">
            <button className ="card" onClick= {() => setPage(page+1)} > Create a class</button>
            <span></span>
            <button className = "card" > Join a class</button>
        </div> 
                }

    
            </DialogContent>
        </Dialog>
    )
}