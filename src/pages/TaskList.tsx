import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import background from '../assets/images/background.png';
import tasklist from '../assets/images/tasklist.png';
import edit from '../assets/images/edit.png';
import dele from '../assets/images/dele.png';
import comptask from '../assets/images/comptask.png';
import left from '../assets/images/left.png'
import SunnySpells from '../assets/fonts/SunnySpells.ttf'
import { useLocation } from 'react-router';

interface TaskData {
    task_name: string;
    date?: string;
    time?: string;
    urgency?: string;
    completed?: boolean;
}

interface LocationState {
  taskData?: TaskData;
}

const TaskList: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const handleClick = (path: string) => {
    history.push(path);
  };

  const [taskData, setTaskData] = useState<TaskData | null>(null);
  const [taskCreated, setTaskCreated] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<TaskData[]>([]);
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Location State:', location.state);
    // Check if the state contains the taskCreated flag
    if (location.state?.taskData) {
      setTaskData(location.state.taskData);
      setTaskCreated(true);
      setTimeout(() => {
      // Hide the message after 3 seconds
        setTimeout(() => {
          setTaskCreated(false);
        }, 3000);
      }, 500);
    }
  }, [location]); // Fetch tasks when taskCreated flag changes

  const handleClickTaskList = () => {
    setInputVisible(true); // Show the input when the task list is clicked
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      history.push('/next-page', { task: inputValue }); // Navigate to another page with the task value
    } else {
      alert('Please enter a task before submitting.');
    }
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
    {/* Task list */}
    <div
      style={{
        backgroundImage: `url(${tasklist})`,
        position: 'absolute',
        top: '38%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '328px',
        height: '460px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'none', // Prevent interaction
      }}//make scrollable list that allows user to select their tasks one at a time to either edit or delete the task
    >
    {/* Input field with placeholder */}
    <div
      style={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center inside the div
        width: '90%', 
        padding: '10px',
        fontSize: '25px',
        border: 'none',
        textAlign: 'left',
        outline: 'none',
        backgroundColor: 'transparent', // Transparent background to blend with div
        color: '#000', 
        pointerEvents: 'none', // Prevent interaction
        fontFamily: 'SunnySpells',
        
      }}
      >
        <p>• Study for stats exam</p>
        <p>• Go grocery shopping</p>
        <p>• Clean room</p>
        <p>• Walk dog</p>
        <p>• Doctor appointment</p>
      </div>

    {/* Input field */}
    <input
      type="text"
      style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '90%',
        height: '85%', // Ensure it spans the placeholder area
        padding: '10px',
        fontSize: '16px',
        backgroundColor: 'transparent',
        color: '#000',
        border: 'none',
        outline: 'none',
        zIndex: 5, // Place input above the placeholder
      }}

      onBlur={(e) => {
        // Show the placeholder again if input is empty
        const placeholder = e.target.previousElementSibling as HTMLElement;
        if (placeholder && !e.target.value) {
          placeholder.style.visibility = 'visible';
        }
      }}
    />
    </div>

    {/* Edit task*/}
    <div
      style={{
        backgroundImage: `url(${edit})`,
        position: 'absolute',
        top: '70%',
        left: '27%',
        transform: 'translate(-50%, -50%)', 
        width: '175px', 
        height: '68px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
    ></div>

    {/* Delete task */}
    <div
      style={{
        backgroundImage: `url(${dele})`,
        position: 'absolute',
        top: '70%',
        left: '73%',
        transform: 'translate(-50%, -50%)', 
        width: '175px', 
        height: '68px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
    ></div>

    {/* Complete task */}
    <div
      style={{
        backgroundImage: `url(${comptask})`,
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '400px', 
        height: '67px', 
        zIndex: 10, 
        visibility: 'visible',
        opacity: 1,
      }}
      onClick={() => handleClick('/Todo5')}
    ></div>

    { /*Go Back */}
    <div
      style={{
        backgroundImage: `url(${left})`,
        position: 'absolute',
        top: '5%',
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

    {/* Task Created Message */}
    {taskCreated && (
      <div
        style={{
          position: 'fixed',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#F7C35D',
          color: 'black',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px',
          zIndex: 20,
          border: '2px solid black',
          fontFamily: 'SunnySpells, sans-serif',
          letterSpacing: '.5px',
          textTransform: 'uppercase',
        }}
      >
        Task Created
      </div>
    )}
 </div>
  );
};
export default TaskList;