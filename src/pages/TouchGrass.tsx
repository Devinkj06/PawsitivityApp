import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import taskbox from '../assets/images/taskbox.png';
import time from '../assets/images/time.png';
import left from '../assets/images/left.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import timer from '../assets/images/timer.png';


const TouchGrass: React.FC = () => {
  const history = useHistory();
  const handleClick =(path: string) => {
    history.push(path);
  };

  //message to user
  const [task] = useState<string>('Take the time to ground yourself!')
  // State to control dropdown visibility
  const [isHourDropdownVisible, setIsHourDropdownVisible] = useState(false);
  const [isMinuteDropdownVisible, setIsMinuteDropdownVisible] = useState(false);
  const [selectedHour, setSelectedHour] = useState<string>('Select Hour');
  const [selectedMinute, setSelectedMinute] = useState<string>('Select Minute');
  
  // Generate hours from 01 to 24
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));

  // Generate minutes from 00 to 59 in 15-minute intervals
  const minutes = ['00', '15', '30', '45'];

  // Toggle hour dropdown visibility
  const toggleHourDropdown = () => {
    setIsHourDropdownVisible(!isHourDropdownVisible);
    setIsMinuteDropdownVisible(false);
  };

  const toggleMinuteDropdown = () => {
    setIsMinuteDropdownVisible(!isMinuteDropdownVisible);
    setIsHourDropdownVisible(false);
  };

  const handleHourSelect = (hour: string) => {
    setSelectedHour(`${hour}`);
    setIsHourDropdownVisible(false);
  };

  const handleMinuteSelect = (minute: string) => {
    setSelectedMinute(minute);
    setIsMinuteDropdownVisible(false);
  };

  const isTimerButtonDisabled = selectedHour === 'Select Hour' || selectedMinute === 'Select Minute';

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

    { /*Go Back */}
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
          visibility: 'visible',
          opacity: 1,
        }}
          onClick={() => handleClick('/Main-Menu')} // Navigate back to the main menu page
      ></div>
        <style>
          {`
            @font-face {
              font-family: 'SunnySpells';
              src: url(${SunnySpells}) format('truetype');
            }
          `}
        </style>

    { /*Textbox */}
      <div
        style={{
          backgroundImage: `url(${taskbox})`,
          position: 'absolute',
          top: '33%',
          left: '51%',
          transform: 'translate(-50%, -50%)', 
          width: '250px', 
          height: '98px', 
          zIndex: 10,
          visibility: 'visible',
          opacity: 1,

        }}
      >
        <textarea
          value={task} // Bind to task state
          readOnly
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            fontSize: '25px',
            paddingLeft: '10px', //padding for better readability
            textAlign: 'left',
            outline: 'none',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
            resize: 'none', // Disable resizing
            overflow: 'auto', // Ensure content scrolls within the box if it's too long
          }}
        />
      </div>

    { /*Timer */}
    <div
      style={{
        backgroundImage: `url(${timer})`,
        position: 'absolute',
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '400px', 
        height: '66px', 
        zIndex: 10, 
        opacity: isTimerButtonDisabled ? 0.5 : 1, // Dim the button when disabled
        cursor: isTimerButtonDisabled ? 'not-allowed' : 'pointer', // Show a disabled cursor
      }}
      onClick={() => !isTimerButtonDisabled && handleClick('/Main-Menu')}
    ></div>

      <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>

    { /* Hour Option Button */ }
      <div
        style={{
          backgroundImage: `url(${time})`,
          position: 'absolute',
          top: '55%',
          left: '26%',
          transform: 'translate(-50%, -50%)',
          width: '180px',
          height: '54px',
          zIndex: 10,
          visibility: 'visible',
          opacity: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: '27px',
          alignItems: 'center',
          backgroundColor: '#ddd', // Added for better visibility against background
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
          fontSize: '22px',
        }}
        onClick={toggleHourDropdown} //opens dropdown menu
      >
        {selectedHour}
      </div>

        <style>
          {`
            @font-face {
              font-family: 'SunnySpells';
              src: url(${SunnySpells}) format('truetype');
            }
          `}
        </style>

    { /* Minute Option Button */ }
    <div
      style={{
        backgroundImage: `url(${time})`,
        position: 'absolute',
        top: '55%',
        left: '74%',
        transform: 'translate(-50%, -50%)',
        width: '180px',
        height: '54px',
        zIndex: 10,
        visibility: 'visible',
        opacity: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '18px',
        alignItems: 'center',
        backgroundColor: '#ddd', // Added for better visibility against background
        fontFamily: 'SunnySpells, sans-serif',
        letterSpacing: '.5px',
        textTransform: 'uppercase',
        fontSize: '22px',
      }}
      onClick={toggleMinuteDropdown} //opens dropdown menu
    >
      {selectedMinute}
    </div>
        
      <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>

    { /* Hour Dropdown */ }
      {isHourDropdownVisible && (
        <div
          style={{
            position: 'absolute',
            top: '58%',
            left: '24%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 20,
            width: '150px',
            maxHeight: '200px',
            overflowY: 'auto',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
          }}
        >
        {hours.map((hour) => (
          <div
            key={hour}
            style={{
              padding: '10px',
              cursor: 'pointer',
              fontSize: '20px',
              textAlign: 'center',
            }}
            onClick={() => handleHourSelect(hour)}
          >
            {hour}:00
          </div>
        ))}
        </div>
      )}

        <style>
          {`
            @font-face {
              font-family: 'SunnySpells';
              src: url(${SunnySpells}) format('truetype');
            }
          `}
        </style>

    { /* Minute Dropdown */ }
      {isMinuteDropdownVisible && (
        <div
          style={{
            position: 'absolute',
            top: '58%',
            left: '72%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 20,
            width: '150px',
            maxHeight: '200px',
            overflowY: 'auto',
            fontFamily: 'SunnySpells, sans-serif',
            letterSpacing: '.5px',
            textTransform: 'uppercase',
            
          }}
        >
        {minutes.map((minute) => (
          <div
            key={minute}
            style={{
              padding: '10px',
              cursor: 'pointer',
              fontSize: '20px',
              textAlign: 'center',
            }}
            onClick={() => handleMinuteSelect(minute)}
          >
            {minute}
          </div>
        ))}
        </div>
      )}
    </div>
  )
};
export default TouchGrass;