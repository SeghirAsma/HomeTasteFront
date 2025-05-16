import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { CssVarsProvider, extendTheme, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import GoogleIconImg from '../icons/google-logo.png';

function ColorSchemeToggle(props) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onClick?.(event);
      }}
      {...other}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

const customTheme = extendTheme({ defaultColorScheme: 'dark' });

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Remember Me:', rememberMe);
    setError('');
    try {
      const response = await axios.post('http://localhost:8084/api/auth/authenticate', {
        email,
        password,
        rememberMe,
      });


  if (response.data && response.data.token) {
    const accessToken = response.data.token;
   // localStorage.setItem('token', accessToken);
   if (rememberMe) {
      localStorage.setItem('token', accessToken); // persistant
    } else {
      sessionStorage.setItem('token', accessToken); // temporaire
    }

    const userDetailsResponse = await axios.get('http://localhost:8084/api/users/currentUser', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log("User Details Response:", userDetailsResponse.data);

    if (userDetailsResponse.data && userDetailsResponse.data.userEntity) {
      const currentUserDetails = userDetailsResponse.data;
      localStorage.setItem('currentUser', currentUserDetails.userEntity.id);
      const userRole = currentUserDetails.userEntity.role;
        if (userRole === 'SELLER' && !currentUserDetails.userEntity.submitted && !currentUserDetails.userEntity.approved) {
          navigate('/CompleteProfile');  
        } else if (userRole === 'CONSUMER') {
          navigate('/SignUp');  
        } else {
          navigate('/');  
        }
    }
  }
} catch (error) {
        if (error.response && error.response.status === 401) {
            setError("UserName or password is incorrect");
            setTimeout(() => {
            setError('');
            }, 4500);
        } else {
            setError("Erreur inattendue, veuillez réessayer plus tard.");
        }
        console.error('Erreur d’authentification:', error);
        }

  };


  return (
    <CssVarsProvider theme={customTheme} disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s',
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level="title-lg">Made Home</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack sx={{ gap: 4, mb: 2 }}>
              <Stack sx={{ gap: 1 }}>
                <Typography component="h1" level="h3">
                  Sign in
                </Typography>
                <Typography level="body-sm">
                  Don't have an account?{' '}
                  <Link href="SignUp" level="title-sm">
                    Sign up!
                  </Link>
                </Typography>
              </Stack>
              <Button
                variant="soft"
                color="neutral"
                fullWidth
                 startDecorator={
                    <img
                    src={GoogleIconImg}
                    alt="Google"
                    style={{ width: 20, height: 20 }}
                    />
                }
              >
                Continue with Google
              </Button>
            </Stack>
            <Divider
              sx={(theme) => ({
                [theme.getColorSchemeSelector('light')]: {
                  color: { xs: '#FFF', md: 'text.tertiary' },
                },
              })}
            >
              or
            </Divider>
            <Stack sx={{ gap: 4, mt: 2 }}>
              <form onSubmit={handleSubmit}  >
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Stack sx={{ gap: 4, mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)} />
                    <Link level="title-sm" href="#replace-with-a-link">
                      Forgot your password?
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                    Sign in
                  </Button>
                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>} 
                </Stack>
                
              </form>
             
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" sx={{ textAlign: 'center' }}>
             {'Copyright'} © Made Home {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
              'url(https://img.freepik.com/free-vector/flat-small-business-saturday-illustration_23-2150992883.jpg?semt=ais_hybrid&w=740)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
            'url(https://thumbs.dreamstime.com/b/gai-propri%C3%A9taire-de-petite-entreprise-debout-accueil-avec-nous-sommes-ouvert-%C3%A9crit-sur-un-conseil-illustration-vectorielle-plate-338878019.jpg)',
          },
        })}
      />
    </CssVarsProvider>
  );
}
