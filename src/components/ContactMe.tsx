import { Alert, Button, Divider, FormControl, FormHelperText, Snackbar, TextField, styled } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../styles/contact-me.scss';
import Links from "./Links";

const GoldTextField = styled(TextField)`
  & label.Mui-focused {
    color: #fba92c;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #fba92c;
    }
  }
`;

export default function ContactMe() {
    const emailForm = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [reqSent, setReqSent] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(true);

    const sendEmail = (event: any) => {
      event.preventDefault();
      setIsLoading(true);
      setReqSent(true);

      if (emailForm.current == null) return;

      emailjs.sendForm('service_xm5zrn9', 'template_92xe7s6', emailForm.current, 'Xa865FmHNr_8TnBqh')
      .then((result) => {
          // Email sent
          console.log(result.text);
          setIsLoading(false);
          setIsSuccessful(true);
      }, (error) => {
          // Email not sent
          console.log(error.text);
          setIsLoading(false);
          setIsSuccessful(false);
      });

      event.target.reset();
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setReqSent(false);
    };

    return (
      <div className='page-wrapper'>
        <div className='fade-in'>
          <h1>✉️ Send Me an Email To Get in Touch!</h1>
          {/* Email Form */}
          <form
          ref={emailForm}
          onSubmit={sendEmail}
          >
            <FormControl 
            sx={{width: '75%'}}
            >
              
              <GoldTextField
              name='user_name'
              required
              id="outlined-required"
              label="Full Name"
              placeholder="Enter Name"
              size='small'
              margin="dense"
              />
              <GoldTextField
              name='user_email'
              required
              id="outlined-required"
              label="Email Address"
              placeholder="Enter Email"
              size='small'
              margin="dense"
              type='email'
              />
              <GoldTextField
              name='subject'
              required
              id="outlined-required"
              label="Subject"
              placeholder="Enter Subject"
              size='small'
              margin="dense"
              />
              <GoldTextField
              name='message'
              required
              id="outlined-textarea"
              label="Message"
              placeholder="Enter Message"
              size='small'
              multiline
              rows={10}
              margin="dense"
              />
              <FormHelperText id="my-helper-text">* indicates required field</FormHelperText>
              <Button 
              variant="contained" 
              sx={{
                margin: '1rem', 
                backgroundColor: '#fba92c',
                ':hover': {
                  backgroundColor: '#c97b04'
                } 
              }}
              type='submit'
              disabled={isLoading}
              >
                Send Email
              </Button>
            </FormControl>
          </form>

          {/* Other links */}
          <Divider variant="middle" />
          <Links />
          
          {/* Toast Notification */}
          {isSuccessful && 
          <Snackbar open={reqSent} autoHideDuration={6000} onClose={handleClose}>
            <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ 
              backgroundColor: '#565656',
              color: '#fba92c',
              'svg': {
                color: '#fba92c'
              }
            }}
            >
                Email Sent!
            </Alert>
          </Snackbar>
          }

          {!isSuccessful && 
          <Snackbar open={reqSent} autoHideDuration={6000} onClose={handleClose}>
            <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ 
              backgroundColor: '#565656',
              color: 'rgb(211, 47, 47)',
              'svg': {
                color: 'rgb(211, 47, 47)'
              }
            }}
            >
                Something Went Wrong! Could Not Send Email.
            </Alert>
          </Snackbar>
          }
        </div>
      </div>
    );
}