import React from 'react'
import Title from '../layout/Title';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bar: {
    backgroundColor: 'rgb(3,127,255)'
  },
  root: { 
    backgroundColor:'rgb(12,51,96)',
    barColorPrimary:'black',
    margin:'10px 20px 20px 0',
    height:'10px',
    borderRadius: '100px',
  }
})

function renderRows(items) {
  const classes = useStyles();
  return (
    <>
    <Grid item xs={12} lg={6}>
      <Typography>{Object.keys(items[0])[0]} <br/>
        <LinearProgress variant="determinate" classes={classes} value={Object.values(items[0])[0]} />
      </Typography>
    </Grid>
    <Grid item xs={12} lg={6}>
      <Typography>{Object.keys(items[1])[0]} <br/>
        <LinearProgress variant="determinate" classes={classes} value={Object.values(items[1])[0]} />
      </Typography>
    </Grid>
    </>
  );
}

const Content = () => {
  return(
    <>
    <Title>My skills</Title>
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
        {renderRows([{'HTML5': 90}, {'CSS3': 80}])}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {renderRows([{'JavaScript': 85}, {'Python': 75}])}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {renderRows([{'ReactJS': 77}, {'SQL/NoSQL': 82}])}
      </Grid>
    </Grid>
    <br/><br/>

    <Title>Resume</Title>
    <Typography>
      Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
      Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    </>
  )
}

export default Content;