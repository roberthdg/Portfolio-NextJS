import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Title from '../layout/Title';
import CircularProgress from '@material-ui/core/CircularProgress';

const projectsData = [
    {
        id:'fletesya',
        name:'Fletes Ya',
        description:`All-in-one platform for shipment services. Calculate costs using Google Maps API 
        or create an auction, which allows you to get offers from dozens of carriers near your location and choose the option that best suits your needs.`,
        tools:['nodejs', 'express', 'jquery','bootstrap']
    },
    {
        id:'futdraft',
        name: 'FIFA Ultimate Team Draft',
        description:`Single-page application designed with React, connected to a custom-built RESTful API. Create the best possible football squad, select and swap players on the field to get the highest score.`,
        tools:['nodejs', 'express', 'jquery','bootstrap']
    },
    {
        id:'coinhub',
        name:'Coinhub',
        description:`Web-app built using Material-UI components. Monitor cryptocurrency prices and calculate costs in your local currency using up-to-date exchange rates.`,
        tools:['nodejs', 'express', 'jquery','bootstrap']
    }
]

const Content = () => {

    const [currentItem, setCurrentItem] = useState(0);

    return(
        <>
        <Title> projects</Title>
        <div className='wrapper'>
            <div className="arrow left" onClick={() => currentItem==0 ? setCurrentItem(2) : setCurrentItem((currentItem-1))}/>
            <div className="arrow right" onClick={() => currentItem==2 ? setCurrentItem(0) : setCurrentItem((currentItem+1))}/>
            <div className='loader'>
                <CircularProgress  size='80px' style={{color:'rgb(3,127,255)'}} />
            </div>

            
            <img src="laptop.png" className='laptop'/>
            <img src={`${projectsData[currentItem].id}-desktop.jpg`} className='screen'/>


            <div className='details'>
                <Typography variant='h6'>
                    <Typography variant='h2' style={{color:'rgb(3,127,255)', fontWeight:'500'}}> {projectsData[currentItem].name} </Typography>
                    {projectsData[currentItem].description}
                </Typography>
            </div>

            <style jsx>{`
                .logo {
                    height: 60px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .logo:hover {
                    transform: 
                }

                .wrapper {
                    text-align: center;
                }

                .details {
                    align-self: center;
                    margin-top: 640px;
                    width:700px;
                }

                .laptop {
                    position:absolute;
                    margin: -600px 0 0 -27em;
                }

                .screen {
                    position:absolute;
                    height: 420px;
                    margin: -570px 0 0 -21em;
                    z-index:-1;
                }

                .loader {
                    position: absolute;
                    margin-top: 20em;
                    margin-left: 35vw;
                    z-index: 2;
                }

                .arrow {
                    position: absolute;
                    margin-top: -410px;
                    border-top: 40px solid transparent;
                    border-bottom: 40px solid transparent; 
                    cursor: pointer;
                }

                .left {
                    border-right: 30px solid rgb(164,172,185); 
                }

                .left:hover {
                    border-right: 30px solid rgb(3,127,255); 
                }

                .left:active, .right:active {
                    transform: scale(0.9);
                }

                .right {
                    right: 5%;
                    border-left: 30px solid rgb(164,172,185); 
                }

                .right:hover {
                    border-left: 30px solid rgb(3,127,255); 
                }

                @media screen and (max-width: 1142px) {
                    .loader {
                    margin: 4em 5% 5em 2em;
                    }
                }
            `}
            </style>
        </div>
        </>
    )
}

export default Content;