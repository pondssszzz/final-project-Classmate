import Grid from "@mui/material/Grid";
import Logo from "../imgs/full-logo.png";
import Box from "@mui/material/Box";


import * as React from 'react';
import "./LoginPage.css";
import theme from "../ui/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, FormLabel } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import {useNavigate} from "react-router-dom";
import Alert from '@mui/material/Alert';
import {useState} from "react";
import axios from "axios"
import {useHistory} from "react-router-dom"

export default function Register() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [usrname, setUsrname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic,setPic] = useState();
    const [loading,setLoading] = useState(false)
    // const history = useHistory()

    const navigate = useNavigate();

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
  
    const handleBack = () =>{ 
      navigate("/");
    }

    const onSignUp = async () => {
      setLoading(true)
      if(!name || !email || !password || !confirmPassword){
        console.log("please fill all blanks")
        setLoading(false)
        return
      }
      if(password != confirmPassword){
        console.log("password must match")
        return
      }

      try{
        const config ={
          headers: {
            "Content-type": "application/json",
          },
        }
        const {data} = await axios.post("/api/user",{name,email,password,pic},config)
        console.log("login success")
        localStorage.setItem("userinfo", JSON.stringify(data))
        handleBack()
      }catch(err){
        setLoading(false)
        
      }

    }


    const postDetails = async (pics) =>{
      setLoading(true)
      if(pics === undefined){
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!</Alert>
          return
      }
      if(pics.type === "image/jpeg" || "image/png"){
        const data = new FormData()
        data.append("file", pics)
        data.append("upload_preset", "Classmate")
        data.append("cloud_name", "dp1xewsqt")
        fetch("http://api.cloudinary.com/v1_1/dp1xewsqt/image/upload", {
          method:"post",
          body: data,
        })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString())
          console.log(data.url.toString())
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
        })
      } else{
        <Alert variant="outlined" severity="error">
        This is an error alert — check it out!</Alert>
      }
    }

    return (
      <ThemeProvider theme={theme}>
        <Box class="background-login">
          <Grid container>
            <Grid xs={4}></Grid>
            <Grid xs={4}>
              <Typography variant="h4">
                <Box
                  sx={{
                    textAlign: "center",
                    marginTop: "5rem",
                    backgroundColor: "secondary.main",
                    padding: "20px",
                    position: "relative"
                  }}
                >
                  <img class="logo" src={Logo} alt="brand logo" />
                  <div>
                  <input
                      class="login-text"
                      type="text"
                      placeholder="Your Name"
                      onChange={ (e) => {
                        setName(e.target.value);
                      }}
                    />
                    <input
                      class="login-text"
                      type="text"
                      placeholder="Email"
                      onChange={ (e) => {
                        setEmail(e.target.value);
                      }}
                    />
    
                    <input
                      class="login-text"
                      type="password"
                      placeholder="Password"
                      onChange={ (e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <input
                      class="login-text"
                      type="password"
                      placeholder="Confirm password"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value)
                      }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={ (e) => 
                        postDetails(e.target.files[0])
                      }
                    />
                    <button class="login-btn" onClick={onSignUp} isLoading={loading}>Sign Up</button>
                  </div>

                  <div className="back_button" onClick={handleBack}><Typography color="primary.main"> &lt; Back </Typography></div>
                </Box>
              </Typography>
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    );
  }