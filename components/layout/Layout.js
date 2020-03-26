import React from 'react';
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
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: 'rgb(25,29,43)',
    color: 'rgb(164,172,196)',
    width: drawerWidth,
    border: '1px solid rgb(46,52,78)'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
  <>
    <Head>
      <title> Roberth Gomez - Portfolio </title>
      <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800&display=swap" rel="stylesheet"></link>
    </Head>

    <div className={classes.root}>
      <DrawerMenu classes={classes} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      <Appbar classes={classes} handleDrawerToggle={handleDrawerToggle}/>
 
      <main className={classes.content} style={{color:'white'}}>
        {props.children}
        <style jsx>{`
        :global(body){ background-color: rgb(16,18,27); !important }
        `}</style>
      </main>
    </div>
  </>
);
}



export default Layout;