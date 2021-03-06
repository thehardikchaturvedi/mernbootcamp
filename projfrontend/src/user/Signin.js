import React,{useState} from 'react';
import Base from '../core/Base';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MetaTags from 'react-meta-tags'
import Snackbars from '../helper/Snackbars'
import {setAlert} from '../redux/actions/alert'
import {loginUser} from '../redux/actions/auth'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
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
const Signin = ({loginUser,isAuthenticated}) => {
  const [values, setvalues] = useState({
    email: '',
    password: '',
    error: '',
    success: false,
    willRedirect: false,
  });
  const { email, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false });
    loginUser({email, password })
      // .then((data) => {
      //   if (data.errors) {
      //     setvalues({ ...values, error: data.errors, success: false });
      //     props.setAlert(data.errors,'error')
      //   } else {
      //     props.setAlert('Sign In Successfully','success')
      //     setvalues({
      //       ...values,
      //       email: '',
      //       password: '',
      //       error: '',
      //       success: true,
      //       willRedirect: true,
      //     });
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };
  const classes = useStyles();
  if(isAuthenticated){
    return <Redirect to='/dashboard'/>
  }
  return (
    <Base>
       <MetaTags>
            <title>Signin</title>
            <meta name="description" content="Signin description." />
            <meta property="og:title" content="MyApp Signin" />
            <meta property="og:image" content="path/to/signin-image.jpg" />
          </MetaTags>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
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
            >Sign In </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup'>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        <Snackbars/>
          <Copyright />
        </Box>                                                                                                                    
      </Container>
    </Base>
  );
};
Signin.propTypes={
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}                                                                                 

const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated                                                                                                                    
})
export default connect(mapStateToProps,{loginUser})(Signin);                                                     