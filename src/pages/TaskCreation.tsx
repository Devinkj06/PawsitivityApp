import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import taskbox from '../assets/images/taskbox.png';
import time from '../assets/images/time.png';
import urgency from '../assets/images/urgency.png';
import urg1 from '../assets/images/urg1.png';
import urg2 from '../assets/images/urg2.png';
import urg3 from '../assets/images/urg3.png';
import left from '../assets/images/left.png';
import createtask from '../assets/images/createtask.png';
import SunnySpells from '../assets/fonts/SunnySpells.ttf';
import Calendar, {CalendarProps} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface TaskData {
  task_name: string;
  date: string;
  time: string;
  urgency: string;
  completed: boolean;
}


const TaskCreation: React.FC = () => {
  const history = useHistory();
  
  const handleClick =(path: string) => {
    history.push(path);
  };

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

  const [isHourDropdownVisible, setIsHourDropdownVisible] = useState(false);
  const [isMinuteDropdownVisible, setIsMinuteDropdownVisible] = useState(false);


  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value) {
      if (Array.isArray(value)) {
        setSelectedDate(value[0]); // Set to the first date in case of range selection
      } else {
        setSelectedDate(value as Date); // Cast value as Date
      }
    } else {
      setSelectedDate(null); // Handle 'null' case
    }
  };

  // States for task data
  const [task, setTask] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string>('Select Hour');
  const [selectedMinute, setSelectedMinute] = useState<string>('Select Minute');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('');
  const [taskCreated, setTaskCreated] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const handleUrgencySelect = (urgency: string) => {
    setSelectedUrgency(urgency);
  };

  const handleCreateTaskClick = async () => {
    if (task && selectedDate && selectedHour && selectedMinute && selectedUrgency) {
      // Prepare task data
      const taskData: TaskData = {
        task_name: task,
        date: selectedDate.toDateString(),
        time: `${selectedHour}:${selectedMinute}`,
        urgency: selectedUrgency,
        completed: false,
      };
      // Simulate saving the task (e.g., make an API call or store it in local state)
      console.log('Task created:', taskData);

      // Set taskCreated to true, triggering the popup
      setTaskCreated(true);

      // Redirect to main menu
      history.push('/Main-Menu');

      // Show the popup
      setShowPopup(true);

      // Close popup after a delay (2 seconds in this case)
      setTimeout(() => setShowPopup(false), 2000);
    }
  };
  
  const isCreateTaskEnabled = task && selectedDate && selectedHour && selectedMinute && selectedUrgency;

  const getUrgencyButtonStyle = (urgency: string) => {
    const isSelected = urgency === selectedUrgency;
    return {
      border: isSelected ? '3px solid #000000' : 'none', // Highlight the selected urgency with a green border
      backgroundImage: `url(${urgency === 'Low' ? urg1 : urgency === 'Medium' ? urg2 : urg3})`,
      backgroundSize: 'contain', // Ensure image fits the button without zooming
      backgroundPosition: 'center', // Center the image within the button
      backgroundRepeat: 'no-repeat', // Prevent repeating the image
    };
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

       <style>
        {`
          @font-face {
            font-family: 'SunnySpells';
            src: url(${SunnySpells}) format('truetype');
          }
        `}
      </style>

    {/* Popup for Task Completion */}
    {showPopup && (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 30,
          visibility: 'visible',
          opacity: 1,
        }}
      >
        <h3>Task Completed!</h3>
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

{ /*Taskbox */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${taskbox})`,
          position: 'absolute',
          top: '45%',
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
          onChange={(e) => setTask(e.target.value)} // Update task state as user types
          placeholder="Enter task"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            fontSize: '25px',
            paddingLeft: '10px', // Optional padding for better readability
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

      { /*Go Back */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${left})`,
          position: 'absolute',
          top: '4%',
          left: '9%',
          transform: 'translate(-50%, -50%)', 
          width: '50px', 
          height: '50px', 
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

{ /* Hour Option Button */ }
      <div
        className="shape rect"
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
          backgroundColor: '#ddd', // Added for better visibility
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
          fontSize: '22px',
        }}
        onClick={toggleHourDropdown}
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
        className="shape rect"
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
          backgroundColor: '#ddd', // Added for better visibility
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
          fontSize: '22px',
        }}
        onClick={toggleMinuteDropdown}
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
{ /*Urgency container */}
    <div
      className= "shape rect exit-41769914ba01"
      style={{
        backgroundImage: `url(${urgency})`,
        position: 'absolute',
        top: '68%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '350px', 
        height: '158px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
      
    ></div>

{ /*Urgency 1 */}
    <div
        className="shape rect exit-41769914ba01"
        style={{ ...getUrgencyButtonStyle('Low'),
          backgroundImage: `url(${urg1})`,
          position: 'absolute',
          top: '70%',
          left: '20%',
          transform: 'translate(-50%, -50%)', 
          width: '67px', 
          height: '100px', 
          zIndex: 15, 
          visibility: 'visible',
          opacity: 1,
        }}
          onClick={() => handleUrgencySelect('Low')}
      ></div>

{ /*Urgency 2*/}
    <div
        className="shape rect exit-41769914ba01"
        style={{ ...getUrgencyButtonStyle('Medium'),
          backgroundImage: `url(${urg2})`,
          position: 'absolute',
          top: '70%',
          left: '43.5%',
          transform: 'translate(-50%, -50%)', 
          width: '98px', 
          height: '100px', 
          zIndex: 15,
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleUrgencySelect('Medium')}
      ></div>

{ /*Urgency 3 */}
    <div
        className="shape rect exit-41769914ba01"
        style={{ ...getUrgencyButtonStyle('High'),
          backgroundImage: `url(${urg3})`,
          position: 'absolute',
          top: '70%',
          left: '72%',
          transform: 'translate(-50%, -50%)', 
          width: '129px', 
          height: '100px', 
          zIndex: 15,
          visibility: 'visible',
          opacity: 1,
        }}
        onClick={() => handleUrgencySelect('High')}
      ></div>

{ /*Create Task */}
    <div
        className="shape rect exit-41769914ba01"
        style={{
          backgroundImage: `url(${createtask})`,
          position: 'absolute',
          top: '83%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
          width: '400px',
          height: '64px', 
          zIndex: 10, 
          opacity: isCreateTaskEnabled ? 1 : 0.5, 
           
        }} 
          onClick={isCreateTaskEnabled ? handleCreateTaskClick : undefined}
      ></div>
      
{ /*Calendar */}
      <div style={{ 
        position: 'absolute',
          top: '14%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
          width: '300px', 
          height: '150px', 
          zIndex: 10, 
          visibility: 'visible',
          opacity: 1, }}>
      {/* Calendar component */}
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        next2Label={null}  // Hide "next month" arrow
        prev2Label={null}  // Hide "previous month" arrow
        view="month"
        tileClassName="custom-tile"
        formatDay={(locale, date) => date.getDate().toString()}  // Only show the day number
        
        />
      <style>
        {`
         .react-calendar {
            background: transparent !important; /* Set calendar container to transparent */
            border: none !important; /* Remove the calendar border */
          }

          .react-calendar__tile {
            background: transparent !important; /* Remove the fill color */
            border: 5px solid black; /* Remove default borders */
            box-sizing: border-box;
          }
          
          .react-calendar__month-view__weekdays {
            display: none; /* Hide the days of the week */
          }
          
          .react-calendar__navigation button {
            background: none;
            border: none;
            color: #333; /* Customize the button color if needed */
          }

          .react-calendar__tile:enabled:hover {
            background-color: #e6e6e6; /* Optional: Change hover color */
          }

          .react-calendar__tile--now {
            background: none !important; /* Remove background for the current day */
            color: #333 !important; /* Optional: Change text color */
          }

          .react-calendar__tile--active {
            background: #007bff !important; /* Customize the active day color */
            color: #fff !important; /* Change text color for active day */
          }
        `}
      </style>

      
    </div>
      
</div>
);
};
export default TaskCreation;