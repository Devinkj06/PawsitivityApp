import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import egg from '../assets/images/egg.png';
import Email from '../assets/images/Email.png';
import Enter from '../assets/images/Enter.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import { useUserContext } from '../context/UserContext';


const ForgotPassword: React.FC = () => {


const history =useHistory();
const { email } = useUserContext();

// State for the inputs
const [localEmail, setLocalEmail] = useState<string>(email);
const [errorMessage, setErrorMessage] = useState<string>('');
const [isLoading, setIsLoading] = useState(false);
  

// Handle input changes
const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLocalEmail(e.target.value);
};

// Check if all fields are filled
const isFormValid = localEmail !== '' && /\S+@\S+\.\S+/.test(email);

// Handle form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const requestBody = {
    email: localEmail,
  };

//if (isFormValid) {
  setIsLoading(true);
    //setError('');
    // Here you would call your backend API to send the reset password link.
    // This is a mockup of that process:
    try {
      const response = await fetch('http://localhost:8000/api/forgot-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();

    if (response.ok) {
      setErrorMessage('');
      setTimeout(() => {
        setIsLoading(false);
        history.push('/Login'); // Redirect to the login page after email is sent
        }, 2000); // Simulate delay
      } else {
        setErrorMessage(data.error || 'Something went wrong, please try again.');
      }
    } catch (err) {
        setIsLoading(false);
        setErrorMessage('Failed to send reset email. Please try again later.');
    }
 };
  return (
   
    <div 
      className="frame start-4174e55971b3"
      style={{
        position: 'relative',
        width: '412px', // Fixed width of 412px
        height: '917px', // Fixed height of 917px
        margin: '0 auto', // Center the container horizontally
        overflow: 'visible', // Hide any overflow outside the container
        zIndex: 1, // Ensure the background is behind the other elements
    }}
    >
      {/* Background */}
      <div
        className="shape rect background-41756f2471ad"
        style={{
          backgroundImage: `url(${background})`,
          position: 'absolute',
          top: -5,
          left: 0,
          width: '100%', // Full width of the container
          height: '100%', // Full height of the container
          backgroundSize: 'cover', // Ensure it covers the container proportionally
          backgroundPosition: 'center center', // Center the background image
          zIndex: 1, // Ensure the background is behind the other elements
          visibility: 'visible',
          opacity: 1,
        }}
      ></div>

      {/* Egg */}
      <div
        className="shape rect egg-41769914ba01"
        style={{
          backgroundImage: `url(${egg})`,
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '200px', // Set the width to 44px
          height: '142px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
      ></div>

   <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>

      {/* Email*/}
      <div
        style={{
          position: 'absolute',
          top: '57%', // Positioned below the egg
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '33px',
          backgroundImage: `url(${Email})`,
          backgroundSize: 'contain',
          zIndex: 10, // Start button layer above the egg
        }}
        >
      <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          //onKeyDown={handleKeyDown}
        style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: '#000', // Change to desired text color
            fontSize: '16px',
            padding: '5px 10px 5px 55px',
            textAlign: 'left',
            outline: 'none',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
          }}
        />
        </div>

      {/* Error message */}
      {errorMessage && (
      <div
        style={{
            color: 'red',
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '14px',
          }}
      >
        {errorMessage}
      </div>
      )}

      {/* Enter*/}
      <div
        style={{
          position: 'absolute',
          top: '70%', // Positioned below the egg
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '132px',
          backgroundImage: `url(${Enter})`,
          backgroundSize: 'contain',
          zIndex: 10, // Start button layer above the egg
          opacity: isFormValid ? 1 : 0.5, // Disable button if form is invalid
        }}
      onClick={isFormValid ? handleSubmit : undefined}
      ></div>

      {/* Loading Spinner */}
      {isLoading && (
      <div
          style={{
            position: 'absolute',
            top: '80%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '18px',
            color: 'blue',
          }}
      >
        Sending reset link...
      </div>
          )}
</div>
  );
};


export default ForgotPassword;
