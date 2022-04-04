import Grid from "@mui/material/Grid";
import SideBar from "./Sidebar";
import MiddleSection from "./MiddleSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage/ChatPage";
import SchedulePage from "./SchedulePage";
import SubjectPage from "./SubjectPage/SubjectPage.js";
import SubjectDetail from "./SubjectPage/SubjectDetail.js";

import theme from "../ui/Theme";
import { ThemeProvider } from "@mui/material/styles";
import "./MainPage.css";

function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container backgroundColor="primary.dark">
        <Grid xs={0.75}>
          <SideBar />
        </Grid>
        <Grid xs={2.5} padding="0.5% 0">
          <MiddleSection />
        </Grid>
        <Grid xs={8.75} padding="0.5% 0">
          <div className="content_page">
            <Routes>
              <Route path="chat" element={<ChatPage />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="subject" element={<SubjectPage />} />
              <Route path="subject/:id" element={<SubjectDetail />} />
            </Routes>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default MainPage;
