import React, { useState } from 'react';
import Base from '../core/Base';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signup } from '../auth/helper/index';
import MetaTags from 'react-meta-tags';
import Snackbars from '../helper/Snackbars'
import {Redirect} from 'react-router';
import SweetAlert from 'sweetalert2-react';
import LazyLoad from 'react-lazy-load';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {connect} from 'react-redux';
function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='https://material-ui.com/'>
        Hardik Chaturvedi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Signup = () => {
  const [values, setvalues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    willRedirect: false,
  });
  const { name, email, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const successMessage=()=>{
    return(
      // <SweetAlert
      //   show={success}
      //   title="Demo"
      //   type='success'
      //   text="Signup successfully"
      // />
      <Snackbars openStatus={success} type='success' msg='Sign Up Successfully' />
    )
  }
  const errorMessage=()=>{
    return(
      // <SweetAlert
      //   show={error}
      //   title="Error"
      //   type='error'
      //   text={error}
      // />
      <Snackbars openStatus={error} type='error' msg={error} />
    )
  }
  const willRedirect=()=>{
    
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false });
    console.log(email)
    signup({ name, email, password })
      .then((data) => {
        if (data.errors) {
          setvalues({ ...values, error: data.errors, success: false });
        console.log('error')
        } else {
          setvalues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true,
            willRedirect: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const classes = useStyles();
  return (
    <Base>
        <MetaTags>
            <title>Signup</title>
            <meta name="description" content="Signup description." />
            <meta property="og:title" content="MyApp Signup" />
            <meta property="og:image" content="path/to/signup-image.jpg" />
          </MetaTags>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              name='name'
              value={name}
              autoComplete='name'
              autoFocus
              onChange={handleChange('name')}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              value={email}
              autoComplete='email'
              onChange={handleChange('email')}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={password}
              autoComplete='current-password'
              onChange={handleChange('password')}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={onSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>{JSON.stringify(values)}</Grid>
              <Grid item>
                <Link to='/signin'>{'Have an account? Sign In'}</Link>
              </Grid>
              {successMessage() }
              {errorMessage() }
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        {/* <LazyLoadImage
    alt=''
    height='600px'
    width='400px'
    effect="blur"
    src={'1.png'} />
       <LazyLoadImage
    alt=''
    height='600px'
    width='400px'
    effect="blur"
    src={'2.png'} />
       <LazyLoadImage
    alt=''
    height='600px'
    width='400px'
    effect="blur"
    src={'3.png'} /> */}
    <div className="filler" />
    <LazyLoad height={200}  offsetTop={200}>
      <img src='2.png' />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad  height={200} offsetTop={50}>
      <img src='3.png' />
    </LazyLoad>
        <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
          <Copyright />
        </Box>
      </Container>
    </Base>
  );
};

export default Signup;
