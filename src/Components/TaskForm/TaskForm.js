import React, { useState } from 'react';
import "./TaskForm.css"

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date().toISOString().split('T')[0]);
    const [priority, setPriority] = useState('normal');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '') return; 
        addTask({ title, description, dueDate, priority });
        setTitle('');
        setDescription('');
        setDueDate(new Date().toISOString().split('T')[0]);
        setPriority('normal');
    };

    return (
        <div className="task-form">
            <h2 style={{textAlign: "center"}}>New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input style={{width: "510px", borderRadius: "5px", borderWidth: "0.5px"}} type="text" placeholder='Add new task...' value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                </label>
        
                <label style={{fontWeight: "bolder"}}>
                Description
                </label>  
                <textarea style={{width: "515px", height: "100px", border: "solid", borderRadius: "5px"}} value={description} onChange={(e) => setDescription(e.target.value)} required/>

                <div style={{ display: "flex"}}>
                    <div className='dueDate' style={{ display: "flex", flexDirection: "column"}}>
                        <label style={{fontWeight: "bolder"}}>
                        Due Date
                        </label>
                        <input style={{width: "222px", border: "solid", borderRadius: "5px"}} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
                    </div>
                    
                    <div className='priority' style={{ display: "flex", flexDirection: "column", marginLeft: "13%"}}>
                        <label style={{fontWeight: "bolder"}}>
                        Priority
                        </label>
                        <select style={{width: "222px", border: "solid", borderRadius: "5px"}} value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                        </select>
                        
                    </div>
                </div>
                    
                
                <button className= 'add-button' type="submit" style={{marginTop: "5%", width: "520px", backgroundColor: "green", borderRadius: "5px"}}>Add</button>
            </form>
        </div>
    );
};

export default TaskForm;

