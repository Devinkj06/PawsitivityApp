import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';
import newtask from '../assets/images/newtask.png';
import Exit from '../assets/images/Exit.png';
import reward15 from '../assets/images/reward15.png';

const TaskCompletion15: React.FC = () => {
  const history =useHistory();

  const [coinBalance, setCoinBalance] = useState<number>(0); // Initialize coin balance


  const handleClick =(path: string) => {
    history.push(path);
  };

  const handleNewTaskClick = () => {
    // Increase coin balance by 5 when the "New Task" button is clicked
    setCoinBalance((prevBalance) => prevBalance + 15);
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
          display: 'flex', // Enable flexbox for centering
          alignItems: 'center', // Center content vertically
          justifyContent: 'center', // Center content horizontally
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        {coinBalance} {/* Display current coin balance */}
    
      </div>

{ /*Exit */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${Exit})`,
          position: 'absolute',
          top: '90%',
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

{ /* New Task */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${newtask})`,
          position: 'absolute',
          top: '70%',
          left: '51%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '350px', // Set the width to 44px
          height: '100px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => {
          handleNewTaskClick(); // Award 5 coins when clicked
          //handleClick('/Task-Creation');
        }}
      ></div>

{ /* Reward +15 */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${reward15})`,
          position: 'absolute',
          top: '58%',
          left: '51%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '250px', // Set the width to 44px
          height: '98px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/TaskCompletion15')}
      ></div>

</div>
  );
};
export default TaskCompletion15;