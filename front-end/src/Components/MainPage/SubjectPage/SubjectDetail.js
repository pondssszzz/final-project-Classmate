import { Typography, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

import "./SubjectPage.css";

const weekSubject = [
  {
    number: 1,
    date: "12/12/21",
  },
  {
    number: 2,
    date: "24/12/21",
  },
];

export default function SubjectDetail() {
  const [tab, setTab] = useState(1);

  const changeTab = (index) => {
    setTab(index);
  };
  return (
    <div>
      <Typography variant="h2">Python</Typography>
      <Typography variant="subtitle2">Professor : Alex</Typography>
      <Typography variant="subtitle2">
        Class time : 13:00 PM - 15.00 PM
      </Typography>
      <Typography variant="subtitle2">
        Mid-term examination : 30 Feb 2035, 13.00 AM - 15.00 PM
      </Typography>
      <Typography variant="subtitle2">
        Final examination : 30 April 2035, 13.00 AM - 15.00 PM
      </Typography>
      <br></br>
      <div className="block_tab">
        <div
          onClick={() => changeTab(1)}
          className={tab === 1 ? "tabs active-tabs" : "tabs"}
        >
          Materials
        </div>
        <div
          onClick={() => changeTab(2)}
          className={tab === 2 ? "tabs active-tabs" : "tabs"}
        >
          Assignments{" "}
        </div>
        <div
          onClick={() => changeTab(3)}
          className={tab === 3 ? "tabs active-tabs" : "tabs"}
        >
          Notes
        </div>
        <div className="drop_down" sx={{borderRadius:"10px"}}>
          <TextField select borderRadius = "29">
            {weekSubject.map((week) => (
              <MenuItem key={week.number} value={week.number}>
                {"Week " + week.number + "," + week.date}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="content_container"></div>
    </div>
  );
}
