import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import touchgrassmode from '../assets/images/touchgrassmode.png';
import tasks from '../assets/images/tasks.png';
import todo from '../assets/images/todo.png';
import shop from '../assets/images/shop.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';
import { useLocation } from 'react-router';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import useraccount from '../assets/images/useraccount.png';
import Swiss from '../assets/images/swiss.png';

interface LocationState {
  taskCreated?: boolean;
}

const MainMenu: React.FC = () => {
  const history =useHistory();
  const location = useLocation<LocationState>();
  const [taskCreated, setTaskCreated] = useState(false);

  const [coinCount, setCoinCount] = useState(25);
  

  useEffect(() => {
    // Check if the state contains the taskCreated flag
    if (location.state?.taskCreated) {

    setTimeout(() => {
      setTaskCreated(true);

      // Hide the message after 3 seconds
      setTimeout(() => {
        setTaskCreated(false);
      }, 3000);
    }, 500);
  }
  }, [location]);

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

      {/* Coin */}
      <div
        className="shape rect welcome-41769914ba01"
        style={{
          backgroundImage: `url(${coin})`,
          position: 'absolute',
          top: '5%',
          left: '8%',
          transform: 'translate(-50%, -50%)', 
          width: '35px', 
          height: '52px', 
          zIndex: 10, 
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
          transform: 'translate(-50%, -50%)', 
          width: '100px', 
          height: '39px', 
          zIndex: 10, 
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

      {/* Touch Grass Mode */}
       <div
        className="shape rect Daily-41769914ba01"
        style={{
          backgroundImage: `url(${touchgrassmode})`,
          position: 'absolute',
          top: '80%',
          left: '26%',
          transform: 'translate(-50%, -50%)', 
          width: '200px', 
          height: '78px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/TouchGrass')}
      ></div>

      {/* Shop */}
      <div
        className="shape rect Daily-41769914ba01"
        style={{
          backgroundImage: `url(${shop})`,
          position: 'absolute',
          top: '70%',
          left: '26%',
          transform: 'translate(-50%, -50%)', 
          width: '200px', 
          height: '78px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('Shop')}
      ></div>

      {/* Tasks */}
      <div
        className="shape rect Daily-41769914ba01"
        style={{
          backgroundImage: `url(${tasks})`,
          position: 'absolute',
          top: '60%',
          left: '26%',
          transform: 'translate(-50%, -50%)', 
          width: '200px', 
          height: '78px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/Task-Creation')}
      ></div>

      {/* ToDo */}
      <div
        className="shape rect Daily-41769914ba01"
        style={{
          backgroundImage: `url(${todo})`,
          position: 'absolute',
          top: '70%',
          left: '75%',
          transform: 'translate(-50%, -50%)', 
          width: '179px', 
          height: '250px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/TaskList')}
      ></div>

<style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>


        {/* User Account Button */}
      <div
        className="shape rect welcome-41769914ba01"
        style={{
          backgroundImage: `url(${useraccount})`,
          position: 'absolute',
          top: '6%',
          left: '88%',
          transform: 'translate(-50%, -50%)', 
          width: '70px', 
          height: '77px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/UserAccount')}
      ></div>

       {/* Coin */}
       <div
        className="shape rect welcome-41769914ba01"
        style={{
          backgroundImage: `url(${Swiss})`,
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '175px', // Set the width to 44px
          height: '176px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
      ></div>
 </div>
  );
};
export default MainMenu;