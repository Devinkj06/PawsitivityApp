import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';
import done5 from '../assets/images/done5.png';
import Exit from '../assets/images/Exit.png';
import taskbox from '../assets/images/taskbox.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import Swiss from '../assets/images/swiss.png';

const Todo5: React.FC = () => {
  const history =useHistory();

  const [coinCount, setCoinCount] = useState(25);

  const handleClick =(path: string) => {
    history.push(path);
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

    {/* Done +5 */}
    <div
      style={{
        backgroundImage: `url(${done5})`,
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px', 
        height: '119px', 
        zIndex: 10,
        visibility: 'visible',
        opacity: 1,
      }}
        onClick={() => handleClick('/TaskCompletion5')}
      ></div>

    { /*Exit */}
    <div
      style={{
        backgroundImage: `url(${Exit})`,
        position: 'absolute',
        top: '90%',
        left: '51%',
        transform: 'translate(-50%, -50%)', 
        width: '200px', 
        height: '78px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
        onClick={() => handleClick('/Main-Menu')}
    ></div>

      <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>

    { /*Taskbox */}
    <div
      style={{
        backgroundImage: `url(${taskbox})`,
        position: 'absolute',
        top: '57%',
        left: '51%',
        transform: 'translate(-50%, -50%)',
        width: '250px', 
        height: '98px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
      >
    {/* Input field with placeholder */}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '90%', 
        padding: '10px',
        fontSize: '28px',
        border: 'none',
        textAlign: 'left',
        outline: 'none',
        backgroundColor: 'transparent', // Transparent background to blend with div
        color: '#000', 
        pointerEvents: 'none', // Prevent interaction
        fontFamily: 'SunnySpells',
      }}
    >
      <p>• Go Grocery Shopping</p>
    </div>

    {/* Input field */}
    </div>

    {/* Pet */}
    <div
      style={{
        backgroundImage: `url(${Swiss})`,
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '175px', 
        height: '176px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
    ></div>
  </div>
  );
};
export default Todo5;