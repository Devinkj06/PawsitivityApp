import React, { useState } from 'react';
import { useHistory } from 'react-router';
import shopbackground from '../assets/images/shopbackground.png';
import left from '../assets/images/left.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';
import { useSwipeable } from 'react-swipeable';
import luffy from '../assets/images/luffy.png';
import gojo from '../assets/images/gojo.png';
import tophat from '../assets/images/tophat.png';
import cowboy from '../assets/images/cowboy.png';
import { useUserContext } from '../context/UserContext';


const Hats: React.FC = () => {
  
  
    const history =useHistory();
  
    const handleClick =(path: string) => {
      history.push(path);
    };

    // Access user data and methods from context
  const { coinCount, spendCoins, hats, addHat } = useUserContext();

  // Available hats in the shop
  const availableHats = [
    { id: 1, name: 'Top Hat', imageUrl: tophat, price: 10 },
    { id: 2, name: 'Cowboy', imageUrl: cowboy, price: 10 },
    { id: 3, name: 'Luffy', imageUrl: luffy, price: 10 },
    { id: 4, name: 'Gojo', imageUrl: gojo, price: 10}
  ];

  // Handle hat purchase
  const handlePurchase = () => {
    const selectedHat = availableHats[currentIndex];
    if (hats.some(existingHat => existingHat.id === selectedHat.id)) {
      alert('You already own this hat!');
      return;
    }

    if (coinCount >= selectedHat.price) {
      spendCoins(selectedHat.price);
      addHat(selectedHat);
      alert(`${selectedHat.name} purchased successfully!`);
    } else {
      alert('Not enough coins to purchase this hat.');
    }
  };

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedHat = availableHats[currentIndex];
    
  const handleSwipeLeft = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % availableHats.length);
    };
    
  const handleSwipeRight = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + availableHats.length) % availableHats.length);    
    };

      const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        trackTouch: true,
        trackMouse: true,
        delta: 5,
      });
  
  
  
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

{ /*Go Back */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${left})`,
          position: 'absolute',
          top: '7%',
          left: '10%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '50px', // Set the width to 44px
          height: '50px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleClick('/Shop')}
      ></div>

    

     {/* Coin */}
     <div
     className="shape rect welcome-41769914ba01"
     style={{
       backgroundImage: `url(${coin})`,
       position: 'absolute',
       top: '7%',
       left: '66%',
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
       top: '7%',
       left: '84%',
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

<div
      {...swipeHandlers}
      style={{
        width: '100%', // Adjust to your desired size
        height: '400px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={selectedHat.imageUrl}
        alt={selectedHat.name}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center the egg both horizontally and vertically
          width: '275px', // Set the width to 44px
          height: '165px', // Set the height to 250px
          zIndex: 10, // Ensure the egg is above the background
          visibility: 'visible',
          opacity: 1,
          transition: 'transform 0.5s ease-in-out', // Smooth image transition
        }}
      />
    </div>
  
   {/* Hat Info and Purchase Button */}
   <div
        style={{
          position: 'absolute',
          top: '60%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        
        <p>Price: {selectedHat.price} coins</p>
        <button
          onClick={handlePurchase}
          disabled={hats.some(existingHat => existingHat.id === selectedHat.id)}
          style={{
            padding: '10px 20px',
            backgroundColor: hats.some(existingHat => existingHat.id === selectedHat.id)
              ? '#ccc'
              : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: hats.some(existingHat => existingHat.id === selectedHat.id) ? 'not-allowed' : 'pointer',
          }}
        >
          {hats.some(existingHat => existingHat.id === selectedHat.id) ? 'Owned' : 'Buy'}
        </button>

      </div>

   </div>
    );
};

export default Hats;

