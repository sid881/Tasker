import React from 'react';

function TaskList({ tasks, completeTask, deleteTask }) {
    if (tasks.length === 0) return <p>No tasks available.</p>;

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map((task) => (
                <li
                    key={task.id}
                    style={{
                        marginBottom: 10,
                        padding: 10,
                        border: '1px solid #ccc',
                        borderRadius: 5,
                        backgroundColor: task.is_completed ? '#d4edda' : '#FF746C',
                        textDecoration: task.is_completed ? 'line-through' : 'none',
                    }}
                >
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => completeTask(task._id)}>
                        {task.is_completed ? 'Completed' : 'Mark as Completed'}
                    </button>
                    <button onClick={() => deleteTask(task._id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
