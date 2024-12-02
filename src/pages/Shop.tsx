import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import shopbackground from '../assets/images/shopbackground.png';
import hats from '../assets/images/hats.png';
import stage from '../assets/images/stage.png';
import backgroundprizes from '../assets/images/backgroundprizes.png'
import Exit from '../assets/images/Exit.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';

const Shop: React.FC = () => {
    const history =useHistory();
  
    const handleClick =(path: string) => {
      history.push(path);
    };
  
    const [coinCount, setCoinCount] = useState(25);
  
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

    { /*Hats */}
    <div
        className="shape rect Daily-41769914ba01"
        style={{
          backgroundImage: `url(${hats})`,
          position: 'absolute',
          top: '60%',
          left: '71%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '150px', // Set the width to 44px
          height: '59px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/Hats')}
      ></div>

{ /*Stage */}
    <div
        className="shape rect stage-41769914ba01"
        style={{
          backgroundImage: `url(${stage})`,
          position: 'absolute',
          top: '60%',
          left: '32%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '150px', // Set the width to 44px
          height: '59px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
       
      ></div>

{ /*Backgrounds */}
    <div
        className="shape rect stage-41769914ba01"
        style={{
          backgroundImage: `url(${backgroundprizes})`,
          position: 'absolute',
          top: '70%',
          left: '51%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '300px', // Set the width to 44px
          height: '86px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
       
      ></div>

{ /*Exit */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${Exit})`,
          position: 'absolute',
          top: '85%',
          left: '51%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '200px', // Set the width to 44px
          height: '78px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/Main-Menu')}
      ></div>

    

     {/* Coin */}
     <div
     className="shape rect welcome-41769914ba01"
     style={{
       backgroundImage: `url(${coin})`,
       position: 'absolute',
       top: '5%',
       left: '8%',
       transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
       width: '35px', // Set the width to 44px
       height: '52px', // Set the height to 250px
       zIndex: 10, // Ensure the egg is above the background
       visibility: 'visible',
       opacity: 1,
     }}
   ></div>

   {/* Coin Balance */}
   <div
     className="shape rect welcome-41769914ba01"
     style={{
       backgroundImage: `url(${textbox})`,
       position: 'absolute',
       top: '5%',
       left: '26%',
       transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
       width: '100px', // Set the width to 44px
       height: '39px', // Set the height to 250px
       zIndex: 10, // Ensure the egg is above the background
       visibility: 'visible',
       opacity: 1,
     }}
   >
    {/* Display the Coin Count */}
    <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '18px',
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          {coinCount}
          </div>
   </div>
   </div>
    );
};

export default Shop;