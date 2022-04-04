import Grid from "@mui/material/Grid";
import Logo from "../imgs/full-logo.png";
import Box from "@mui/material/Box";

import * as React from 'react';
import "./LoginPage.css";
import theme from "../ui/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';
import {useHistory} from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate();
    const [chats,setChats] = useState([])
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const handleRouteSignUp = () =>{ 
      
      navigate("/signup");
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleRouteHome = async() =>{ 
        setLoading(true)
        if (!email || !password){
          console.log("please fill in")
          setLoading(false)
          return
        }
        try{
          const config = {
            headers: {
              "Content-type": "application/json"
            }
          }
          const {data} = await axios.post("/api/user/login",{email,password},config)
          localStorage.setItem("userinfo",JSON.stringify(data))
          setLoading(false)
          navigate("/main");
        } catch{
          console.log("error")

        }
      }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setOpen(false)
    }
    const fetchChats = async() =>{
        const {data} = await axios.get("api/chats")
        console.log(data)
        setChats(data)
    }
    useEffect(() =>{
      fetchChats();
    },[])


  return (
    <ThemeProvider theme={theme}>
      <Box class="background-login">
        <Grid container>
          <Grid xs={4}>
          </Grid>
          <Grid container xs={4}>
            <Typography variant="h4">
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "5rem",
                  backgroundColor: "secondary.main",
                  padding: "20px",
                }}
              >
                <img class="logo" src={Logo} alt="brand logo" />
                <div>
                  <input
                    class="login-text"
                    value={email}
                    type="text"
                    placeholder="Email or username"
                    onChange={(e) =>{
                      setEmail(e.target.value)
                    }}
                  />
                  <input
                    class="login-text"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  <button class="login-btn" onClick={handleRouteHome}>Log in</button>
                  <input type="file"></input>
                </div>
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "0.5rem",
                  backgroundColor: "secondary.main",
                  padding: "20px"
                }}
              >
                <Typography variant="h3" fontSize="1rem">
                  Dont' have an account ?{" "}
                </Typography>
                <div className="sign_up_button" onClick={handleRouteSignUp}>
                <Typography variant="h3" fontSize="1rem" color="primary.main" >
                  Sign Up
                </Typography>
                {/* <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login succesfully
        </Alert>
                  </Snackbar> */}
                </div>
                {/* <div>
                {chats.map((chat) => (
                  <div>{chat.chatName}</div>
                ))}</div> */}
              </Box>
            </Typography>
          </Grid>
          <Grid xs={4}>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>

  );
}

export default LoginPage;
