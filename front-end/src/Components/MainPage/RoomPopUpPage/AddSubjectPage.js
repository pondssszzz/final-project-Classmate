import "./DialogPopUp.css";
import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import "./DialogPopUp.css"

const days = [
  {
    value: "0",
    label: "Sunday",
  },
  {
    value: "1",
    label: "Monday",
  },
  {
    value: "2",
    label: "Tuesday",
  },
  {
    value: "3",
    label: "Wednesday",
  },
  {
    value: "4",
    label: "Thursday",
  },
  {
    value: "5",
    label: "Friday",
  },
  {
    value: "6",
    label: "Saturday",
  },
];

const TimeClass = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={5.75}>
          <TextField select sx={{ width: "100%" }}>
            {days.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid xs={0.5}></Grid>
        <Grid xs={5.75}>
          <Grid container>
            <Grid xs={5.5}>
              <TextField
                id="time"
                label="From"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={5.5}>
              <TextField
                id="time"
                label="To"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>
      <br />
    </div>
  );
};

export default function AddSubjectPage() {
  const [numberTime, setNumberTime] = useState(1);
  
  const isEqualOne = () => {
    return numberTime === 1;
  };

  return (
    <div className="form_container">
      <form>
        <Stack>
          <TextField label="Subject" />
          <br />
          <Grid container>
            <Grid xs={5.75}>
              <TextField label="Professor" sx={{ width: "100%" }} />
            </Grid>
            <Grid xs={0.5}></Grid>
            <Grid xs={5.75}>
              <TextField label="Subject ID" sx={{ width: "100%" }} />
            </Grid>
          </Grid>
          <br />

          {/* Time Section */}
          { [...Array(numberTime)].map((_, i) => <TimeClass key={i} />) }
          <div class="add_time">
          {isEqualOne() ? (
            <span/>
          ) : (
            <button className="delete_time_button"  type="button" onClick={() => setNumberTime(numberTime - 1)}>
              Delete time
            </button>
          )}
          
            <button className="add_time_button" type="button" onClick={() => setNumberTime(numberTime + 1)}>
              Add time
            </button>
          </div>
        </Stack>
      </form>
    </div>
  );
}
