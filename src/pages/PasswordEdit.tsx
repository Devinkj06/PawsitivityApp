import React, { useState } from 'react';
import { useHistory } from 'react-router';
import shopbackground from '../assets/images/shopbackground.png';
import submit from '../assets/images/submit.png';
import Password from '../assets/images/Password.png';
import newpassword from '../assets/images/newpassword.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import left from '../assets/images/left.png';


const PasswordEdit: React.FC = () => {
  const history = useHistory();
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handleClick = (path: string) => {
    history.push(path);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = newPassword !== '' && password !== '';

  

  const handleSubmitClick =() => {
    history.push('/UserAccount', {PasswordChanged: true});
  
    setTimeout(() => {
      setPasswordUpdated(true);
      
      // Hide the message after 3 seconds
      setTimeout(() => {
        setPasswordUpdated(false);
      }, 3000);
    }, 500); // Short delay before showing message
  };


  return (
    <div
      style={{
        position: 'relative',
        width: '412px',
        height: '917px',
        margin: '0 auto',
        overflow: 'visible',
      }}
    >
      {/* Background */}
      <div
        style={{
          backgroundImage: `url(${shopbackground})`,
          position: 'absolute',
          top: 0,
          left: -5,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 1,
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

      {/* New Password */}
      <div
        style={{
          position: 'absolute',
          top: '47%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '34px',
          backgroundImage: `url(${newpassword})`,
          backgroundSize: 'contain',
          zIndex: 10,
        }}
      >
        <input
          type="text"
          value={newPassword}
          onChange={handleNewPasswordChange}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: '#000',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center', // Centers the input vertically
            justifyContent: 'flex-start', // Aligns input to the left
            paddingLeft: '90px', // Adds left padding for positioning
            textAlign: 'left',
            outline: 'none',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
          }}
        />
      </div>

      {/* Password */}
      <div
        style={{
          position: 'absolute',
          top: '57%',
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
            padding: '5px 16px 5px 75px',
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

      {/* Submit Button */}
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
          opacity: isFormValid ? 1 : 0.5,
        }}
        onClick={handleSubmitClick}
      ></div>

      {/* Go Back */}
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
        }}
        onClick={() => handleClick('/UserAccount')}
      ></div>
    </div>
  );
};

export default PasswordEdit;
