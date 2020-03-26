import React from 'react'
import Typography from '@material-ui/core/Typography';

const Title = props => {
    return(
    <div>
    <Typography variant='h4'>
        <h4>{props.children}</h4>
    </Typography>

    <style jsx>{`

      h4 {
        margin: 40px 0 !important;
        font-weight: 700;
        position: relative;
        padding-bottom: 15px;
        text-transform: uppercase;
      }
      h4::before,h4::after {
        content:'';
        position:absolute;
        left:0;
        bottom:0;
        height:5px;
        border-radius: 100px;
      }
      h4::before {
        width: 100px;
        background: rgba(3,127,255,.3);
      }
      h4::after{
        width: 35px;
        background: #037fff;
      }
    `}</style>
    </div>
    )
}

export default Title;