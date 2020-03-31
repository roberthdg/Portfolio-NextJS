import React, { useState } from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import DrawerMenu from './DrawerMenu'
import Appbar from './Appbar';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      width: '0',
    }, width: '55px',
    left: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  drawerPaper: {
    backgroundColor: 'rgb(25,29,43)',
    color: 'rgb(164,172,196)',
    width: drawerWidth,
    border: '1px solid rgb(46,52,78)'
  },
}));

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800&display=swap" rel="stylesheet"></link>
    </Head>

    <div className={classes.root}>
      <DrawerMenu classes={classes} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      <Appbar classes={classes} handleDrawerToggle={handleDrawerToggle}/>
      <main> {props.children} </main>
    </div>

    <style jsx>{`
      :global(body){ 
        background-color: rgb(16,18,27); 
      }
      main {
        color: white;
        flex-grow: 1;
        margin: 3em 4em 3em 4em;
      }

      @media screen and (max-width: 1142px) {
        main {
          max-width:90%;
          margin: 4em 5% 5em 2em;
        }
      }
      `}
    </style>
  </>
);
}



export default Layout;