import React, { useState }  from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    multilineColor:{
      color:'white'
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "rgb(159,167,191) !important"
    },
    floatingLabelFocusStyle: {
      color: 'white !important'
    }
})
  
const Content = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [displayAlert, setDisplayAlert] = useState(0);
    const [displayLoader, setDisplayLoader] = useState(false);
    const [disableField, setDisableField] = useState(false);
    const classes = useStyles();

    function sendMessage() {
        if(email=='' || message=='') setDisplayAlert(2)
        else {
            setDisplayLoader(true);
            setDisableField(true);
            fetch(`https://fletesya.cl/api/mail`, {
                headers:{
                    'Content-Type': 'application/json'
                  },
                method:'POST',
                body: JSON.stringify({mail: email, message: message})
            })
            .then(res => {
                setEmail('');
                setMessage('');
                setDisplayAlert(1);
                setDisplayLoader(false);
                setDisableField(false);
            })
            .catch(error => {
                setDisplayLoader(false);
                setDisableField(false);
                setDisplayAlert(3)})
        }
    }

    return(
        <>
        <Grid container item xs={"auto"} md={6} lg={6} spacing={4}>
            <Grid item xs={12}>
                {displayLoader? <div className='loader'> <CircularProgress size='80px' style={{color:'rgb(3,127,255)'}} /> </div> : null}
                <TextField required fullWidth={true} variant="outlined"
                    label="Enter your email"
                    value={email}
                    disabled={disableField}
                    onChange={e => setEmail(e.target.value)}
                    InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                    }}
                    InputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline
                    },
                    className: classes.multilineColor
                    }}
                /> 
            </Grid>
            <Grid item xs={12} >
                <TextField required fullWidth={true} multiline={true} rows="9" variant="outlined"
                    label="Enter your message"
                    value={message}
                    disabled={disableField}
                    onChange={e => setMessage(e.target.value)}
                    InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                    }}
                    InputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline
                    },
                    className: classes.multilineColor
                    }}
                />
            </Grid>
            <Grid item xs={12} ><Typography><a onClick={() => displayLoader? null: sendMessage()}> Send message </a></Typography></Grid>
            
            {displayAlert===1
            ? <Grid item xs={12} ><Alert onClose={() => setDisplayAlert(false)} severity="success">Message sent </Alert></Grid> 
            : null }

            {displayAlert===2
            ? <Grid item xs={12} ><Alert onClose={() => setDisplayAlert(false)} severity="warning">Fill all required fields </Alert></Grid> 
            : null }

            {displayAlert===3
            ? <Grid item xs={12} ><Alert onClose={() => setDisplayAlert(false)} severity="error"> Error: could not send</Alert></Grid> 
            : null }
        </Grid>

        <style jsx>{`
            a {
                left:1;
                text-align:center;
                text-transform: uppercase;
                padding: 15px;
                text-decoration: none;
                color:rgb(255,255,255);
                background-color: rgb(3,127,255) !important;
                cursor:pointer;
            }

            a:active {
                padding: 13px;
            }

            .loader {
                position: absolute;
                z-index: 2;
                margin:150px 0 0 28vh;
            }

            @media screen and (max-width: 1142px) {
                .loader{ 
                    margin:160px 0 0 28vw;
                }
            }

        `}</style>
    </>
    )
}

export default Content;