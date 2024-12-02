import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import egg from '../assets/images/egg.png';
import usernam from '../assets/images/usernam.png';
import Email from '../assets/images/Email.png';
import Password from '../assets/images/Password.png';
import Enter from '../assets/images/Enter.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import { useUserContext } from '../context/UserContext';

const Register: React.FC = () => {
  
const history =useHistory();
const { email, setEmail, username, setUsername, password, setPassword } = useUserContext();

  // Dummy existing usernames for validation (replace with actual logic for checking a database)
const existingUsernames = ['user1', 'testUser', 'johnDoe'];

 // State for the inputs
 const [localUsername, setLocalUsername] = useState('');
 const [localEmail, setLocalEmail] = useState('');
 const [localPassword, setLocalPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const [errorMessage, setErrorMessage] = useState('');

 // Handle input changes
 const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setLocalUsername(e.target.value);
 };
 
 const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setLocalEmail(e.target.value);
 };

 const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setLocalPassword(e.target.value);
 };

 // Check if all fields are filled
 const isFormValid = localUsername !== '' && localEmail !== '' && localPassword !== '';

 // Handle form submission
 const handleSubmit = () => {
   if (validateForm()) {
     history.push('/Welcome'); // Navigate to the welcome page
   }
 };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localEmail)) {
      setErrorMessage('Invalid email format.');
      return false;
    }

    // Check if the username is unique
    if (existingUsernames.includes(localUsername)) {
      setErrorMessage('Username is already taken.');
      return false;
    }

    // Check if the password meets the criteria
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!passwordRegex.test(localPassword)) {
      setErrorMessage(
        'Password must have at least 8 characters and one number.'
      );
      return false;
    }

    setErrorMessage(''); // Clear any existing error messages
    return true;
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
        {/* Username*/}
        <div
        style={{
          position: 'absolute',
          top: '50%', // Positioned below the egg
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '36px',
          backgroundImage: `url(${usernam})`,
          backgroundSize: 'contain',
          zIndex: 10, // Start button layer above the egg
        }}
        >
        
        <input
          type="text"
          value={localUsername}
          onChange={handleUsernameChange}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: '#000', // Change to desired text color
            fontSize: '16px',           
            padding: '5px 10px 5px 80px',
            textAlign: 'left',
            outline: 'none',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
          }}
        />
      </div>

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
          type="text"
          value={localEmail}
          onChange={handleEmailChange}
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

        <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>
        {/* Password*/}
        <div
        style={{
          position: 'absolute',
          top: '64%', // Positioned below the egg
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '33px',
          backgroundImage: `url(${Password})`,
          backgroundSize: 'contain',
          zIndex: 10, // Start button layer above the egg
        }}
        >
        <input
          type={showPassword ? 'text' : 'password'}
          value={localPassword}
          onChange={handlePasswordChange}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: '#000', // Change to desired text color
            fontSize: '16px',
            padding: '5px 10px 5px 75px',
            textAlign: 'left',
            outline: 'none',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
          }}
        />
        <button
          onClick={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 11,
          }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

         {/* Error Message */}
      {errorMessage && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '400px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '5px',
            padding: '20px',
            zIndex: 100,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <button
            onClick={() => setErrorMessage('')}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              color: '#721c24',
            }}
          >
            &#10005; {/* This is the "X" character */}
          </button>
          <p>{errorMessage}</p>

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
 </div>
  );
};
export default Register;
