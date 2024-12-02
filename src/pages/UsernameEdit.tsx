import React, { useState } from 'react';
import { useHistory } from 'react-router';
import shopbackground from '../assets/images/shopbackground.png';
import submit from '../assets/images/submit.png';
import newusername from '../assets/images/newusername.png';
import Password from '../assets/images/Password.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import usernam from '../assets/images/usernam.png';
import left from '../assets/images/left.png';

const UsernameEdit: React.FC = () => {
  const history = useHistory();
  const [UsernameChanged, setUsernameChanged] = useState(false);
  const handleClick =(path: string) => {
      history.push(path);
  }
  const handleSubmitClick =() => {
    history.push('/UserAccount', {UsernameChanged: true});
    setTimeout(() => {
      setUsernameChanged(true);
      // Hide the message after 3 seconds
      setTimeout(() => {
        setUsernameChanged(false);
      }, 3000);
    }, 500); // Short delay before showing message
  };

  // Mock user data (replace this with actual data fetching logic)
  const [userData, setUserData] = useState({
    username: 'User123',
    email: 'user@yahoo.com',
    password: 'mySecurePassword',
  });

  const [NewUsername, setNewUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNewUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
  };
  const isFormValid = password !== '' && NewUsername !== '';
  const handleSubmit = () => {
    if (isFormValid) {
      history.push('/UserAccount'); // Navigate back to the main user account page
    }
  };
 const togglePasswordVisibility = () => {
   setShowPassword(!showPassword);
 };

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

    {/* Username*/}
    <div
      style={{
        position: 'absolute',
        top: '40%',
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

    {/* New Username*/}
    <div
      style={{
        position: 'absolute',
        top: '49%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '33px',
        backgroundImage: `url(${newusername})`,
        backgroundSize: 'contain',
        paddingLeft: '10px',
        paddingTop: '0px',
        zIndex: 10, 
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'SunnySpells, sans-serif',
        letterSpacing: '.5px',
        textTransform: 'uppercase',
      }}
    >
      <input
        type="text"
        value={NewUsername}
        onChange={handleNewUsernameChange}
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
        top: '58%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '33px',
        backgroundImage: `url(${Password})`,
        backgroundSize: 'contain',
        zIndex: 10, 
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
        top: '70%', 
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '132px',
        backgroundImage: `url(${submit})`,
        backgroundSize: 'contain',
        zIndex: 10, 
        opacity: isFormValid ? 1 : 0.5, // Disable button if form is invalid
      }}
      onClick={handleSubmitClick} // Navigate back to the main user account page
    ></div>

    { /*Go Back */}
    <div
      style={{
        backgroundImage: `url(${left})`,
        position: 'absolute',
        top: '4%',
        left: '10%',
        transform: 'translate(-50%, -50%)', 
        width: '50px',
        height: '50px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
      onClick={() => handleClick('/UserAccount')} // Navigate back to the main user account page
    ></div>
    </div>
  );
};

export default UsernameEdit;