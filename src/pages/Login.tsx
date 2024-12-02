import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import egg from '../assets/images/egg.png';
import Email from '../assets/images/Email.png';
import Password from '../assets/images/Password.png';
import Enter from '../assets/images/Enter.png';
import { Link } from 'react-router-dom';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';


const Login: React.FC = () => {
  
    
  const history =useHistory();

 // State for the inputs
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);

 // Handle input changes
 
 const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setEmail(e.target.value);
 };

 const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPassword(e.target.value);
 };

 // Check if all fields are filled
 const isFormValid = email !== '' && password !== '';

 // Handle form submission
 const handleSubmit = () => {
   if (isFormValid) {
     history.push('/Welcome'); // Navigate to the welcome page
   }
 };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          width: '206px', // Set the width to 44px
          height: '140px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
      ></div>

      <div>
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
          value={email}
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
          value={password}
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

         {/* Forgot Password Link */}
      <div
        style={{
          position: 'absolute',
          top: '90%', // Positioned below the password input
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '14px',
          color: '#000000', // Blue color for the link
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#000000' }}>
          Forgot Password?
        </Link>
      </div>
     
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
export default Login;
