import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useEffect} from 'react';
import background from '../assets/images/background.png';
import egg from '../assets/images/egg.png';
import start from '../assets/images/start.png';
import { useHistory } from 'react-router';



const Start: React.FC = () => {
  const history =useHistory();

  const handleClick =(path: string) => {
    history.replace('/authentication');
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

      {/* Start Button - Below the Egg */}
      <div
        style={{
          position: 'absolute',
          top: '60%', // Positioned below the egg
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '196px',
          backgroundImage: `url(${start})`,
          backgroundSize: 'contain',
          zIndex: 10, // Start button layer above the egg
        }}
        onClick={() => handleClick('/authentication')}
        ></div>
    </div>
  );
};

export default Start;


    


