import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import shopbackground from '../assets/images/shopbackground.png';
import Exit from '../assets/images/Exit.png';
import usernam from '../assets/images/usernam.png';
import Email from '../assets/images/Email.png';
import Password from '../assets/images/Password.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import { useLocation } from 'react-router';

interface LocationState {
  UsernameChanged?: boolean;
  EmailChanged?: boolean;
  PasswordChanged?: boolean;
}


const UserAccount: React.FC = () => {
  const history = useHistory();
  
  const handleClick = (path: string) => {
      history.push(path);
  }

  // Mock user data (replace this with actual data fetching logic)
  const [userData, setUserData] = useState({
    username: 'User123',
    email: 'user@yahoo.com',
    password: 'mySecurePassword',
  });

  // Function to mask the password as stars
  const maskPassword = (password: string) => {
    return '*'.repeat(password.length);
  };

  const location = useLocation<LocationState>();
  const [UsernameChanged, setUsernameChanged] = useState(false)
  const [EmailChanged, setEmailChanged] = useState(false);
  const [PasswordChanged, setPasswordChanged] = useState(false)

  useEffect(() => {
    // Check location state for change flags
    if (location.state?.UsernameChanged) {
      setUsernameChanged(true);
      setTimeout(() => {
        setUsernameChanged(false);
      }, 3000);
    }
    if (location.state?.EmailChanged) {
      setEmailChanged(true);
      setTimeout(() => {
        setEmailChanged(false);
      }, 3000);
    }
    if (location.state?.PasswordChanged) {
      setPasswordChanged(true);
      setTimeout(() => {
        setPasswordChanged(false);
      }, 3000);
    }
  }, [location]);
  

  return (
    <div 
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

    { /*Exit */}
      <div
        style={{
          backgroundImage: `url(${Exit})`,
          position: 'absolute',
          top: '85%',
          left: '48.5%',
          transform: 'translate(-50%, -50%)', 
          width: '200px', 
          height: '78px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/Main-Menu')} //takes user back to main menu page
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
        top: '45%', 
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '36px',
        backgroundImage: `url(${usernam})`,
        backgroundSize: 'contain',
        paddingLeft: '80px',
        paddingTop: '8px',
        zIndex: 10, 
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'SunnySpells, sans-serif',
        letterSpacing: '.5px',
        textTransform: 'uppercase',
      }}
      onClick={() => handleClick('/UsernameEdit')} //takes to username edit page
    >
      {userData.username} 
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
          top: '53%', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '33px',
          backgroundImage: `url(${Email})`,
          backgroundSize: 'contain',
          paddingLeft: '57px',
          paddingTop: '7px',
          zIndex: 10,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
        }}
        onClick={() => handleClick('/Emailedit')} //takes to email edit page
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

      {/* Password*/}
      <div
        style={{
          position: 'absolute',
          top: '61%', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '33px',
          backgroundImage: `url(${Password})`,
          backgroundSize: 'contain',
          paddingLeft: '80px',
          paddingTop: '9.5px',
          zIndex: 10, 
          overflow: 'hidden', 
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
        }}
        onClick={() => handleClick('/Passwordedit')} //takes to password edit page
      >
        {maskPassword(userData.password)}
       
      </div>

      {/* Changing Account Info */}
        {UsernameChanged && (
        <div
          style={{
            position: 'fixed',
            bottom: '87%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#F7C35D',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            zIndex: 20,
            border: '2px solid black',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
          }}
        >
          Username Changed
        </div>
        )}

        {EmailChanged && (
          <div
            style={{
              position: 'fixed',
              bottom: '87%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#F7C35D',
              color: 'black',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px',
              zIndex: 20,
              border: '2px solid black',
              fontFamily: 'SunnySpells, sans-serif',
              letterSpacing: '.5px',
              textTransform: 'uppercase',
            }}
          >
            Email Changed
          </div>
        )}
        {PasswordChanged && (
          <div
            style={{
              position: 'fixed',
              bottom: '87%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#F7C35D',
              color: 'black',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px',
              zIndex: 20,
              border: '2px solid black',
              fontFamily: 'SunnySpells, sans-serif',
              letterSpacing: '.5px',
              textTransform: 'uppercase',
            }}
          >
            Password Changed
          </div>
        )}
    </div>
  );
};

export default UserAccount;