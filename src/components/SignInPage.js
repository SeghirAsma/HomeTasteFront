import React, { useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8084/api/auth/authenticate', {
        email,
        password,
      });

      const accessToken = response.data.token;
      localStorage.setItem('token', accessToken);

      const userDetailsResponse = await axios.get('http://localhost:8084/api/users/currentUser', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const currentUserDetails = userDetailsResponse.data;
      console.log("Current User Details:", currentUserDetails); 
      localStorage.setItem('currentUser', currentUserDetails.userEntity.id);


        if (currentUserDetails.authorities[0].authority === 'admin') {
          navigate('/');
        } else if (currentUserDetails.authorities[0].authority === 'consumer') {
          navigate('/');
        } else {
          navigate('/');
        }
      

    } catch (error) {
      console.error('Authentication Failed', error);
      setErrorMessage(error.response?.data || 'Erreur d\'authentification.');
      setTimeout(() => {
        setErrorMessage(false);
      }, 4500);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          backgroundImage: 'url("https://img.freepik.com/free-vector/character-time-management-concept_23-2148822089.jpg")',
         // backgroundImage: 'url("https://media.gettyimages.com/id/1500397411/fr/vid%C3%A9o/4k-video-abstract-clean-blurred-background.jpg?s=640x640&k=20&c=HE3hez5TZ19ZM4ikKjWUwKpvWBc7_EsLDfd1tZm5dyI=")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            m: 2,
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(1px)",
            borderRadius: 2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1, width: '100%' }} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Email Address"
              label="Email Address"
              name="Email Address"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           { errorMessage && (
          <Alert severity="error">
            <AlertTitle>Erreur</AlertTitle>
            {errorMessage}
          </Alert>
        ) }

            <Grid container>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
