import React from 'react'
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import Link from 'next/link'
import { useRouter } from 'next/router'

const avatarStyle = {
  width:'190px', 
  height:'190px',  
  border: '8px solid rgb(46,52,78)'
}

const MenuItems = props => {
  const router = useRouter();
  return(
      <Grid   
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <div className={props.classes.toolbar} />
      <Avatar alt="profile picture" src="/brand-image.jpg" style={avatarStyle} />
      <div className={props.classes.toolbar} />
      {['', 'resume', 'portfolio', 'contact'].map((text, index) => (
      <Link key={index} href={index==0 ? '/' : text} >
        <a className={router.pathname == `/${text}` ? "active" : "inactive"}>
            <ListItemText key={text} primary={index==0 ? 'home' : text} />
        </a>
      </Link>
      ))}
      <Divider />

      <style jsx>{`
      a {
        text-align:center;
        text-transform: uppercase;
        height: 40px;
        padding-top: 5px;
        width: 95%;
        text-decoration: none;
      }

      .active {
        color:rgb(255,255,255);
        background-color: rgb(3,127,255);
      }

      .inactive {
        color: rgb(164,172,196);
        background: transparent;
        background: linear-gradient(to right, rgb(21,48,85) 50%, transparent 50%);
        background-size: 200% 100%;
        background-position:right bottom;
        transition:all 0.5s ease;
      }

      .inactive :hover {
        color: rgb(3,127,255);
        background-position:left bottom;
      }
    `}</style>

    </Grid>
  )
}

export default MenuItems;