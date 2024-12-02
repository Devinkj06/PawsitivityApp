import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import shopbackground from '../assets/images/shopbackground.png';
import submit from '../assets/images/submit.png';
import newemail from '../assets/images/newemail.png';
import Password from '../assets/images/Password.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import Email from '../assets/images/Email.png';
import left from '../assets/images/left.png';

const EmailEdit: React.FC = () => {
    const history =useHistory();

    

    
    const handleClick =(path: string) => {
        history.push(path);
    }

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };


 // Mock user data (replace this with actual data fetching logic)
  const [userData, setUserData] = useState({
    username: 'User123',
    email: 'user@yahoo.com',
    password: 'mySecurePassword',
  });

  const [newEmailAddress, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [EmailUpdated, setEmailUpdated] = useState(false);

  const handleNewEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
};

const isFormValid = password !== '' && newemail !== '' && isValidEmail(newEmailAddress);

const handleSubmitClick =() => {
  history.push('/UserAccount', {EmailChanged: true});

  setTimeout(() => {
    setEmailUpdated(true);
    
    // Hide the message after 3 seconds
    setTimeout(() => {
      setEmailUpdated(false);
    }, 3000);
  }, 500); // Short delay before showing message
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
      className="shape rect shopbackground-41756f2471ad"
      style={{
        backgroundImage: `url(${shopbackground})`,
        position: 'absolute',
        top: 0,
        left: -5,
        width: '100%', // Full width of the container
        height: '100%', // Full height of the container
        backgroundSize: 'cover', // Ensure it covers the container proportionally
        backgroundPosition: 'center center', // Center the background image
        zIndex: 1, // Ensure the background is behind the other elements
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
          top: '40%', // Positioned around middle of page
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '33px',
          backgroundImage: `url(${Email})`,
          backgroundSize: 'contain',
          paddingLeft: '80px',
          paddingTop: '8px',
          zIndex: 10, // Layer above the background
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
        }}
        >
           {userData.email} 
      </div>

      <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>
        {/* New Email*/}
        <div
        style={{
          position: 'absolute',
          top: '49%', // Positioned below the old email
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '34px',
          backgroundImage: `url(${newemail})`,
          backgroundSize: 'contain',
          paddingLeft: '0px',
          paddingTop: '0px',
          zIndex: 10, // Layer above the background
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
        }}
        >
        <input
          type="text"
          value={newEmailAddress}
          onChange={handleNewEmailChange}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: '#000', 
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
        {/* Password*/}
        <div
        style={{
          position: 'absolute',
          top: '58%', // Positioned below the new email
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '33px',
          backgroundImage: `url(${Password})`,
          backgroundSize: 'contain',
          zIndex: 10, // Layer above the background
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
            color: '#000', 
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

        
  {/* Enter*/}
 <div
        style={{
          position: 'absolute',
          top: '70%', // Positioned around bottom of the page
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '132px',
          backgroundImage: `url(${submit})`,
          backgroundSize: 'contain',
          zIndex: 10, // Layer above the background
          opacity: isFormValid ? 1 : 0.5, // Disable button if form is invalid (i.e., one or more of the fields doesn't have proper information)
        }}
        onClick={handleSubmitClick}
        ></div>

{ /*Go Back */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${left})`,
          position: 'absolute',
          top: '4%', // positioned at the top left corner of the page
          left: '10%',
          transform: 'translate(-50%, -50%)', 
          width: '50px', 
          height: '50px', 
          zIndex: 10, // Ensure it's above the background
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/UserAccount')}
      ></div>

        </div>

);
};

export default EmailEdit;