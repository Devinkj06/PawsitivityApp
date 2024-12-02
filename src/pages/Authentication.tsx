import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import egg from '../assets/images/egg.png';
import Register from '../assets/images/Register.png';
import Signin from '../assets/images/Signin.png'

const Authentication: React.FC = () => {
  const history =useHistory();

  const handleClick =(path: string) => {
    history.push(path);
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
          width: '206px', 
          height: '140px', 
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
      ></div>

        {/* Register*/}
        <div
        style={{
          position: 'absolute',
          top: '60%', // Positioned below the egg
          left: '50%',
          transform: 'translateX(-50%)',
          width: '350px',
          height: '100px',
          backgroundImage: `url(${Register})`,
          backgroundSize: 'contain',
          zIndex: 10, // Layer above the background
        }}
        onClick={() => handleClick('/Register')}
        ></div>

         {/* Signin*/}
         <div
        style={{
          position: 'absolute',
          top: '73%', // Positioned below the register button
          left: '50%',
          transform: 'translateX(-50%)',
          width: '350px',
          height: '100px',
          backgroundImage: `url(${Signin})`,
          backgroundSize: 'contain',
          zIndex: 10, // Layer above the background
        }}
        onClick={() => handleClick('/Login')}
        ></div>
 </div>
  );
};
export default Authentication;

