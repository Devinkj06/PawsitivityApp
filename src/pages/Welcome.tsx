import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import welcome from '../assets/images/welcome.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';
import Swiss from '../assets/images/swiss.png';



const Welcome: React.FC = () => {
  const history = useHistory();

  const handleClick =(path: string) => {
    history.push(path);
  };

  // Set initial coin count to 25
  const [coinCount, setCoinCount] = useState(25);
  

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

    {/* Welcome */}
    <div
      style={{
        backgroundImage: `url(${welcome})`,
        position: 'absolute',
        top: '63%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the button both horizontally and vertically
        width: '300px', //set to dimensions of png
        height: '86px', 
        zIndex: 10, // Ensure the button is above the background
        visibility: 'visible',
        opacity: 1,
      }}
        onClick={() => handleClick('/Main-Menu')} //goes to main menu page
    ></div>

    {/* Coin */}
    <div
      style={{
        backgroundImage: `url(${coin})`,
        position: 'absolute',
        top: '5%',
        left: '8%',
        transform: 'translate(-50%, -50%)', 
        width: '35px', //set to dimensions of png
        height: '52px', 
        zIndex: 10, // Ensure the coin is above the background
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
        width: '100px', //set to dimensions of png
        height: '39px', 
        zIndex: 10, // Ensure the balance is above the background
        visibility: 'visible',
        opacity: 1,
      }}
    >
      {/* Display the Coin Count */}
      <div
      style={{
        position: 'absolute',
        top: '50%', //adjusted to fit centered in the textbox
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

    {/* Pet */}
    <div
      style={{
        backgroundImage: `url(${Swiss})`,
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the pet both horizontally and vertically
        width: '175px', //set to dimensions of png
        height: '176px',
        zIndex: 10, // Ensure the pet is above the background
        visibility: 'visible',
        opacity: 1,
      }}
    ></div>
 </div>
  );
};
export default Welcome;