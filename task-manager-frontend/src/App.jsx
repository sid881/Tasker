import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://localhost:5000/tasks';

function App() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await axios.get(API_URL);
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (title, description) => {
        const res = await axios.post(API_URL, { title, description });
        setTasks([res.data, ...tasks]);
    };

    const completeTask = async (id) => {
        await axios.put(`${API_URL}/${id}/complete`);
        setTasks(tasks.map(task => (task._id === id ? { ...task, is_completed: 1 } : task)));
    };
    
    const deleteTask = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    };
    

    return (
        <div className="container" style={{ padding: 20 }}>
            <div  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '',
    }}>
            <h1>Task Manager</h1>
            </div>
            <div>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default App;
