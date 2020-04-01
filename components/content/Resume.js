import React from 'react'
import Title from '../layout/Title';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';

const subtitleStyle = {fontWeight:'700', fontFamily: "'Nunito', sans-serif", margin: '0 0 40px 30px'}
const iconStyle = {color: 'rgb(164,172,185)', fontSize: '30', position:'absolute', marginLeft: '-10px'}

const workExperience = [
  {year: '2019 - 2020', title: 'Full-Stack Developer', name: 'Fletes Ya!', description: 'Santiago Province, Chile (Remote)'},
  {year: '2017 - 2019', title: 'Full-Stack Developer', name: 'Global Solution - Outsourcing Group', description: 'Quito, Ecuador (Remote)'},
  {year: '2016 - 2017', title: 'IT Regional Coordinator', name: 'Productora y Distribuidora Venezolana de Alimentos S.A.', description: 'Nueva Esparta, Venezuela'},
  {year: '2014 - 2016', title: 'IT Analyst', name: 'Productora y Distribuidora Venezolana de Alimentos S.A.', description: 'Nueva Esparta, Venezuela'}

];
const studies = [
  {year: '2010 - 2015', title: 'Systems Engineer', name: 'Universidad Nacional Experimental de la Fuerza Armada', description: 'Achieved honorable mention (Cum Laude)'},
  {year: '2003 - 2008', title: "Bachelor's Degree in Secondary Education", name: 'U.E. Nuestra Señora de la Asunción', description: ''},
 ];

const Content = () => {
  return(
    <div className='content'>
      <Title>Resume</Title> 
      <BusinessCenterOutlinedIcon style={iconStyle} /> 
      <Typography variant='h5' style={subtitleStyle}> Work Experience</Typography> 
      <div className='wrapper'>
        {workExperience.map((item,i) => (
          <Grid container spacing={1} key={i}>
            <Grid container item xs={11} lg={2}>
              <div className='summary' />  
              <div className='year'>
                <Typography variant='h6' style={{fontWeight: '400'}}> {item.year} </Typography>
              </div>
            </Grid>
            <Grid container item xs={11} lg={7} style={{marginLeft:'30px'}}>
              <Typography variant='h6' style={{color:'rgb(3,127,255)'}}> 
                {item.title} 
                <Typography variant='h6' style={{color:'white', fontWeight: '400'}}>{item.name}</Typography>
                <Typography variant='h6' style={{color:'rgb(164,172,185)', fontWeight: '300', marginBottom:'40px'}}>{item.description}</Typography> 
              </Typography> 
            </Grid>
          </Grid>
        ))}
      </div>

      <br/><br/>

      <CollectionsBookmarkOutlinedIcon style={iconStyle} /> 
      <Typography variant='h5' style={subtitleStyle}>Educational Qualifications</Typography> 
      <div className='wrapper'>
        {studies.map((item,i) => (
          <Grid container spacing={1} key={i}>
            <Grid container item xs={11} lg={2}>
              <div className='summary' />  
              <div className='year'>
                <Typography variant='h6' style={{fontWeight: '400'}}> {item.year} </Typography>
              </div>
            </Grid>
            <Grid container item xs={11} lg={7} style={{marginLeft:'30px'}}>
              <Typography variant='h6' style={{color:'rgb(3,127,255)'}}> 
                {item.title} 
                <Typography variant='h6' style={{color:'white', fontWeight: '400'}}>{item.name}</Typography>
                <Typography variant='h6' style={{color:'rgb(164,172,185)', fontWeight: '300', marginBottom:'40px'}}>{item.description}</Typography> 
              </Typography> 
            </Grid>
          </Grid>
        ))}
      </div>
  
    <style jsx>{`

      .content {
        font-family: 'Nunito', sans-serif !important;
      }

      .wrapper {
        border-left: 4px solid rgb(46,52,78);
      }

      .summary::before {
        content: '';
        background-color: rgb(16,18,27);
        height: 10px;
        width: 10px;
        position: absolute;
        border-radius: 100px;
        border: 4px solid rgb(46,52,78);
        margin: 8px 0 0 -11px;
      }

      .summary::before {
        content: '';
        background-color: rgb(16,18,27);
        height: 10px;
        width: 10px;
        position: absolute;
        border-radius: 100px;
        border: 4px solid rgb(46,52,78);
        margin: 8px 0 0 -11px;
      }

      .year {
        margin: 0 0 0 30px;
        color: rgb(164,172,185);
      }

    `}</style>
  </div>
  )
}

export default Content;