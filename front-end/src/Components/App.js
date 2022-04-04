import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import Register from "./LoginPage/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/main/*" element={<MainPage/>}/>
      </Routes>

    </Router>
  )
}

export default App;
