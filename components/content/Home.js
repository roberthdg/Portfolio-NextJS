import React, {useEffect} from 'react';
import { loadCSS } from 'fg-loadcss';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Particles from 'react-particles-js';
import Link from '@material-ui/core/Link';

const particlesParams={
  particles: {
    number: {
      value:150,
      density: {
        enable:true,
        value_area: 1500
      }
    }
  }
}

const Content = () => {
  useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return(
  <div className='home'>
    <div className='particles'>
      <Particles params={particlesParams}/>
    </div> 
   
    <Typography variant='h3' style={{ fontFamily: "'Nunito', sans-serif", fontWeight: '700'}}>
      Hi, I am <span style={{color:'rgb(3,127,255)'}}>Roberth Gómez</span>
    </Typography>

    <Typography variant='h6' style={{color:'rgb(142,149,171)', fontFamily: "'Nunito', sans-serif", fontWeight: '600', marginBottom: '20px'}}>
      Full-Stack Developer <br/>  React / Node.js / MongoDB  
    </Typography>

    <Link href="/contact"><a><Icon className="fa fa-2x fa-envelope"/></a></Link>
    <Link><a target="_blank" href="https://github.com/roberthdg"><Icon className="fab fa-2x fa-github"/></a></Link>
    <Link><a target="_blank" href="https://www.linkedin.com/in/roberthdg/"><Icon className="fab fa-2x fa-linkedin"/></a></Link>
    
    
    

    <style jsx>{`
    .home {
      padding-top: 2em;
      padding-right: 1em;
      width:90vw;
      height:70vh;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }

    a{
      color: rgb(142,149,171);
      padding: 10px;
    }

    a:hover{
      color: rgb(3,127,255);
      cursor: pointer;
    }

    .console-underscore {
      display:inline-block;
     position:relative;
     top:-0.14em;
     left:10px;
   }

   .particles {
    position: absolute;
    z-index: -1;
   }

    @media screen and (min-width: 1142px) {
      .particles {
        width: 195vh;
        right:0;
        top:0;
      }
    }

    @media screen and (max-width: 1142px) {
      .particles {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);

        width: 190vw;
        margin-left: -55vw;
        margin-top: 0vw;
      }
   }
    `}</style>
  </div>
  )
}

export default Content;