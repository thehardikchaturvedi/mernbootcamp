import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
const PrivateRoute = ({component:Component,auth, ...rest}) => {
console.log(auth)
    return (
        <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
    )
}

PrivateRoute.propTypes={
    auth:PropTypes.object.isRequired
}
const mapToPropTypes=state=>({
    auth:state.auth
})
export default connect(mapToPropTypes)(PrivateRoute)
