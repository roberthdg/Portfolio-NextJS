import React from 'react'
import Typography from '@material-ui/core/Typography';

const Title = props => {
    return(
    <div>
    <Typography component={'span'} variant='h4'>
        <h3> <span>{props.children}</span> {props.children}</h3>
    </Typography>

    <style jsx>{`
      h3 {
        font-family: 'Nunito', sans-serif; !important;
        margin: 0 0 40px 0 !important;
        position: relative;
        padding-bottom: 15px;
        text-transform: uppercase;
      }

      h3::before, h3::after {
        content:'';
        position:absolute;
        left:0;
        bottom:0;
        height:5px;
        border-radius: 100px;
      }

      h3::before {
        width: 100px;
        background: rgba(3,127,255,.3);
      }

      h3::after{
        width: 35px;
        background: #037fff;
      }

      span {
        color: rgb(20,23,34);
        position: absolute;
        font-size: 58px;
        font-weight: 800;
        margin-top: 30px;
        z-index: -12;
      }
    `}</style>
    </div>
    )
}

export default Title;