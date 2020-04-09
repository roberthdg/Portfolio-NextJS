import React from 'react'
import Title from '../layout/Title';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormGrid from './Form';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Content = () => {
  return(
    <>
    <Title>Contact Me</Title>
    <Grid container>
      {/* Contact form grid */}
      <FormGrid />
      <Grid item xs={12} md={12} lg={6} >
        <Grid item xs={10} > 
          <div className='info'> 
            <Grid container>
              <Grid item xs={3} lg={2}  style={{marginRight:'8%'}}>
                <div className='iconGrid'>
                  <PhoneIcon style={{fontSize:'45px'}}/>
                </div>
              </Grid>
              <Grid item xs={7} >
                <Typography variant='h6' style={{color:'white'}}>Phone</Typography>
                <Typography>
                  +58 424 832 12 69 <br/>
                </Typography>
              </Grid>
            </Grid>
          </div> 
        </Grid >  

        <Grid item xs={10}> 
          <div className='info'> 
            <Grid container>
              <Grid item xs={3}  lg={2} style={{marginRight:'8%'}}>
                <div className='iconGrid'>
                 <MailIcon style={{fontSize:'45px'}}/>
                </div>
              </Grid>
              <Grid item xs={7} >
                <Typography variant='h6' style={{color:'white'}}>Email</Typography>
                <Typography>
                  roberthdgg@gmail.com  <br/>
                </Typography>
              </Grid>
            </Grid>
          </div> 
        </Grid >  
      </Grid>
    </Grid>

    <style jsx>{`
      .info {
        background-color: rgb(25,29,43);
        padding: 3vh;
        color: rgb(144,150,173);
        width: 40vh;
        margin-left: 50px;
        margin-bottom: 20px;
        margin-right: 150px;
      }

      .iconGrid {
        border:1px solid rgb(46,52,78);
        padding: 5px;
        padding-right: 50px;
      }

      @media screen and (max-width: 1142px) {
        .info{
          margin-top: 35px;
          padding: 5vw;
          margin-left: 0px;
          width: 95%;
        }

        .iconGrid {
          padding: 7px;
        }
      }
    `}</style>
    </>
  )
}

export default Content;