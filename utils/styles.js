import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#006699',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  grow: {
    flexGrow: 1,
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  main: {
    minHeight: '80vh',
  },

  helps: {
    marginTop: 20,
  },

  footer: {
    marginTop: 40,
    textAlign: 'center',
    paddingTop: 20,
    backgroundColor: '#006699',
  },

  section: {
    marginTop: 10,
    marginBottom: 20,
  },

  backleft: {
    paddingTop: 50,
    fontSize: '2.5rem',
    fontFamily: 'Roboto Mono',
    textAlign: 'center',
  },

  para: {
    paddingTop: 20,
    fontSize: '1.3rem',
    fontFamily: 'Roboto Mono',
    textAlign: 'center',
  },

  button: {
    width: '100%',
    maxWidth: 200,
    margin: '0 auto',
    textAlign: 'center',
  },

  form: {
    width: '100%',
    maxWidth: 400,
    marginTop: 60,
    margin: '0 auto',
  },

  temp: {
    width: '100%',
    height: '100%',
    maxWidth: 600,
    margin: '0 auto',
  },

  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },

  ground: {
    backgroundImage: '/images/back.jpg',
  },

  land: {
    backgroundColor: '#006699',
    width: '100%',
    height: '100',

    color: '#ffffff',
  },

  cato: {
    width: '100%',
    backgroundColor: '#006699',
    color: '#ffffff',
  },
});

export default useStyles;
