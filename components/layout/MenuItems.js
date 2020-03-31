import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link'
import { useRouter } from 'next/router'

const avatarStyle = {
  width:'140px', 
  height:'140px',  
  marginLeft: '5px',
  border: '5px solid rgb(46,52,78)',
  marginTop: '25px',
  marginBottom: '18px'
}

const MenuItems = () => {
  const router = useRouter();
  return(
    <Grid   
    container
    direction="column"
    alignItems="center"
    justify="center"
    >
      <Avatar alt="profile picture" src="/brand-image.jpg" imgProps={{draggable:'false'}} style={avatarStyle} /> <hr/>
      
      {['', 'about', 'portfolio', 'contact'].map((text, index) => (
      <Link key={index} href={index==0 ? '/' : text} >
        <a className={router.pathname == `/${text}` ? "active" : "inactive"}>
            <ListItemText 
              key={text} 
              primary={index==0 ? 'home' : text}  
              style={{fontFamily: "'Nunito', sans-serif"}}
            />
        </a>
      </Link>
      ))}


      <style jsx>{`
      a {
        text-align:center;
        text-transform: uppercase;
        height: 40px;
        padding-top: 10px;
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

      hr { 
        border-top: 1px solid rgb(25,29,43);
        border-left: 0px;
        border-right: 0px;
        border-bottom: 1px solid rgb(46,52,78);
        width:100%;
        margin-bottom: 50px;
      }
    `}</style>
    <img src='logo.png' height='9%' draggable={false} style={{opacity:'0.4', position:'absolute', bottom:'60px',zIndex:'-1'}} />
    <Typography style={{bottom: '20px', position: 'absolute', fontWeight: '200', fontSize: '14px'}}> &copy; 2020 Roberth Gómez</Typography>
    </Grid>
   
  )
}

export default MenuItems;