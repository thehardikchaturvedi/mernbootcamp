import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
 
}));

export default function Snackbars({openStatus,type,msg}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  useEffect(()=>{
    setOpen(openStatus)
  },[openStatus])
    const handleClose = () => {
    setOpen(false);
  };

  return (
     <div className={classes.root}>
         <Snackbar style={{bottom:'100px'}} open={open} onClose={handleClose} autoHideDuration={2000} >
        <Alert onClose={handleClose} severity={type}>
          {msg}
        </Alert>
      </Snackbar>
     </div>
  );
}
