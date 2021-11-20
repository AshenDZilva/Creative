import React, { useContext, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
  createTheme,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, myplan, userInfo } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.5rem',
        fontWeight: 400,
        margin: '1.4rem,1 rem',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1.4rem,0',
      },
      h3: {
        fontSize: '1.3rem',
        fontWeight: 400,
        margin: '1.4rem,0',
        color: '#208080',
        textAlign: 'center',
      },
      h4: {
        fontSize: '1.1rem',
        fontWeight: 400,
        margin: '1.4rem,1.0rem',

        textAlign: 'center',
      },

      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#0099cc',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('myplanItems');
    router.push('/');
  };

  const handleChange = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - CV-Library ` : 'CV-Library'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand} item xs={2}>
                  CreatiVe
                </Typography>
              </Link>
            </NextLink>

            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/myplan" passHref>
                <Link>
                  {myplan.myplanItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={myplan.myplanItems.length}
                    >
                      My Plan
                    </Badge>
                  ) : (
                    'My Plan'
                  )}
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem onClick={loginMenuCloseHandler}>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <div>
            <h3 align="center" className={classes.navbarButton}>
              Don’t let an outdated resume hold you back from getting the job
              you want. Try our state-of-the-art now and make get a perfect
              resume that perfectly highlights your talents and lands you more
              interviews.{' '}
            </h3>
          </div>
          <hr></hr>
          <Typography>
            <span>&copy;</span>.2021,CreatiVe.All Rights Reserved
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
