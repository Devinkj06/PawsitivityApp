
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


type Pet = {
    id: number;
    name: string;
    imageUrl: string;
};

type Hat = {
    id: number;
    name: string;
    imageUrl: string;
    price: number
};

type Task = {
  id: number;
  task_name: string;
  date: string;
  time: string;
  urgency: string;
  completed: boolean;
};

type UserContextType = {
  username: string;
  email: string;
  password: string;
  pet: Pet | null;
  hats: Hat[];
  coinCount: number;
  tasks: Task[]; // Add tasks array
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  completeTask: (taskId: number) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPet: (pet: Pet) => void;
  addHat: (hat: Hat) => void;
  removeHat: (hatId: number) => void;
  spendCoins: (amount: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pet, setPet] = useState<Pet | null>(null);
  const [hats, setHats] = useState<Hat[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addHat = (hat: Hat) => {
    setHats([...hats, hat]);
  };

  const removeHat = (hatId: number) => {
    setHats(hats.filter(hat => hat.id !== hatId));
  };

  const [coinCount, setCoinCount] = useState(25); // Initial coin count of 20

  const spendCoins = (amount: number) => {
    if (coinCount >= amount) {
        setCoinCount(coinCount - amount);
    } else {
        alert("Not enough coins!");
    }
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/tasks/", {
          method: "GET",
          credentials: "include", // For session authentication
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          const data = await response.json();
          setTasks(data.tasks);
        } else {
          console.error("Failed to fetch tasks:", response.status);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
  
    fetchTasks();
  }, []);
  

  return (
    <UserContext.Provider value={{ username, setUsername, email, setEmail, password, setPassword, pet,
        setPet,
        hats,
        coinCount,
        addHat,
        removeHat,
        spendCoins,
        tasks,
        addTask,
        removeTask,
        completeTask, }}>
      {children}
    </UserContext.Provider>
  );

  
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

