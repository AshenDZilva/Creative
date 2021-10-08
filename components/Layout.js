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
  Tabs,
  Tab,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';

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
                <Typography className={classes.brand} item xs={4}>
                  CreatiVe
                </Typography>
              </Link>
            </NextLink>
            <Box item xs={4}>
              <Tabs
                onClick={handleChange}
                textColor="#ffffff"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab
                  label="Resume Examples"
                  onClick={(e) => handleChange(e, '/example')}
                />
                <Tab
                  label="Resume Templates"
                  onClick={(e) => handleChange(e, '/product')}
                />
              </Tabs>
            </Box>
            <div className={classes.grow}></div>
            <div item xs={4}>
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
          <Typography>All Rights Resived.CreatiVe</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
