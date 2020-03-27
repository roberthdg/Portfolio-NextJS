import React, {useEffect} from 'react';
import { loadCSS } from 'fg-loadcss';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Particles from 'react-particles-js';

const particlesParams={
  particles: {
    number: {
      value:120,
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

    <a><Icon className="fa fa-2x fa-envelope"/></a>
    <a><Icon className="fab fa-2x fa-github"/></a>
    <a><Icon className="fab fa-2x fa-linkedin"/></a>

    <style jsx>{`
    .home {
      width:90vw;
      height:70vh;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      overflowX:'hidden';
      overflowY:'hidden';
    }

    a{
      color: rgb(142,149,171);
      padding: 10px;
    }

    a:hover{
      color: rgb(3,127,255);
      cursor: pointer;
    }

    .particles {
      position: absolute;
      width: 93vw;
      margin-left: -260px;
      margin-top: -220px;
      z-index: -1;
    }

    @media screen and (max-width: 1142px) {
      .particles {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);

        width: 203vw;
        margin-left: -60vw;
        margin-top: 0vw;
      }
   }
    `}</style>
  </div>
  )
}

export default Content;