import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        addTask(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}
        >
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #555',
                    backgroundColor: '#222',
                    color: '#fff',
                    width: '200px',
                    fontSize: '14px',
                }}
            />
            <input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #555',
                    backgroundColor: '#222',
                    color: '#fff',
                    width: '200px',
                    fontSize: '14px',
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#00b894',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#019875'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#00b894'}
            >
                Add Task
            </button>
        </form>
    );
}

export default AddTaskForm;
