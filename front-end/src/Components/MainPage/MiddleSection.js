import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MiddleSectionMenuDatas } from "./MiddleSectionMenuDatas";

function MiddleSection() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="middle_section">
      <Typography
        variant="h1"
        sx={{ marginBottom: "40px", fontSize: "20px" }}
        color="secondary.main"
      >
        Software Engineering10
      </Typography>
      <Stack sx={{ display: "block" }}>
        <ul>
          {MiddleSectionMenuDatas.map((item, index) => {
            return (
              <li>
                <Typography
                  variant="subtitle1"
                  component={Link}
                  to={item.path}
                  sx={{ textDecoration: "none", color: "secondary.main" }}
                >
                  <div
                    className={`middle_section_menus ${
                      inactive ? "active" : ""
                    }`}
                  >
                    <div class="item-icon">{item.icon}</div>
                    {item.title}
                  </div>
                </Typography>
              </li>
            );
          })}
        </ul>
      </Stack>
    </div>
  );
}

export default MiddleSection;
