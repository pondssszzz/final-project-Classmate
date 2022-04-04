import "./DialogPopUp.css";
import {Stack, TextField} from "@mui/material"
export default function NameBestMatePage(){

    return (
        <div className="form_container">
        <form>
          <Stack>
            <TextField label="Enter the name of your best mate here" />
          </Stack>
        </form>
      </div>
    )
}