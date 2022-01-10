import React from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';


function App() { 
  const classes = useStyles();

  return (
    <Container className={classes.conatiner}>
          <Card>
              <h2 className={classes.title}>Generate Download & Scan QR Code with React js</h2>
              <CardContent>
                  <Grid container spacing={2}>
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                          <TextField label="Enter Text Here" />
                          <Button className={classes.btn} variant="contained" 
                            color="primary">Generate</Button>
                            {/* <br/>
                            <br/>
                            <br/> */}
                      </Grid>
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <Button className={classes.btn} variant="contained" color="secondary" >Scan Qr Code</Button>
                        <h3>Scanned Code: </h3>
                      </Grid>
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h3>Qr Code Scan by Web Cam</h3>
                         <h3>Scanned By WebCam Code:</h3>
                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
export default App;

