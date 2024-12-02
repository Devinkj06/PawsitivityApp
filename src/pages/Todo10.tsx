import React from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import coin from '../assets/images/coin.png';
import textbox from '../assets/images/textbox.png';
import done10 from '../assets/images/done10.png';
import Exit from '../assets/images/Exit.png';
import taskbox from '../assets/images/taskbox.png';

const Todo10: React.FC = () => {
  const history = useHistory();

  const handleClick = (path: string) => {
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
    ></div>

    {/* Done +10 */}
    <div
      style={{
        backgroundImage: `url(${done10})`,
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '400px', 
        height: '117px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
        onClick={() => handleClick('/TaskCompletion10')}
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
    ></div>
  </div>
  );
};
export default Todo10;