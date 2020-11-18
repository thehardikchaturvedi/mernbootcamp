import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar'
const Base = ({
  title = 'My Title',
  description = 'Description',
  className = 'Bg-dark',
  children,
}) => (
  <React.Fragment>
    <section   style={{
    height: "100%",
    overflowX: "hidden",
  }}>
    <Navbar/>
    <Container maxWidth='xl'>
      {children}
    </Container>
    </section>
  </React.Fragment>
);
export default Base;
