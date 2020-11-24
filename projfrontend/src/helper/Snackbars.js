import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import propTypes from 'prop-types'
// function Alert() {
//   return <MuiAlert elevation={6} variant="filled" />;
// }

const useStyles = makeStyles((theme) => ({
 
}));
const handleClose = () => {
  // setOpen(false);
};
const Snackbars=({alerts})=> 
//   const [open, setOpen] = useState(false);
  // useEffect(()=>{
  //   setOpen(alert.open)
  // },[alert.open])
  alerts.map(alert=>(
 <div>
         <Snackbar key={alert.id} style={{bottom:'100px'}} onClose={handleClose}  open={alert.open}  autoHideDuration={2000} >
          <Alert  key={alert.id}   severity={alert.alertType}>
            {alert.msg}
          </Alert>
        </Snackbar>
     </div>
  )
  );
Snackbars.propTypes={
  alerts:propTypes.array.isRequired
}
const mapStateToProps=state=>({
  alerts:state.alert
})
export default connect(mapStateToProps)(Snackbars)