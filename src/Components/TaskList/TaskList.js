import React from 'react';
import "./TaskList.css"

const TaskList = ({ tasks, removeTask, showDetails, updateTask, toggleTask, removeTasks }) => {
  const checkedCount = tasks.filter(task => task.checked).length;
  return (
    <div className="task-list">
      <h2 style={{textAlign: "center"}}>Task List</h2>
      <ul style={{marginTop: "5%", marginRight: "3%"}}>
        {tasks.map((task, index) => (
          <li key={index} style={{marginTop: "2%", border:"solid black 1px", paddingLeft: "3%", paddingRight: "3%", listStyleType: "none"}}>
            {task.showDetails ? (
              <div>
                <div style={{display: "flex"}}>
                  <input style={{marginBottom: "1%"}} value="test" type="checkbox"/> 
                  <h3 style= {{paddingLeft: "1%", marginTop: "16px", width: "1%"}}>{task.title}</h3>
                  <button className='detail-button' style={{marginLeft: "350px", marginTop: "2%", marginBottom: "2%", width: "130px", backgroundColor: "#50d1c4", borderRadius: "7px"}} onClick={() => showDetails(index)}>Details</button>
                  <button className='remove-button' style={{ marginLeft: "20px", marginTop: "2%", marginBottom: "2%", width: "130px", backgroundColor: "#ef5555", borderRadius: "7px"}} onClick={() => removeTask(index)}>Remove</button>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <input style={{width: "650px", borderRadius: "5px", borderWidth: "0.5px"}} type="text" value={task.title} onChange={(e) => updateTask(index, 'title', e.target.value)} />
                  <label style={{fontWeight: "bolder"}}>
                    Description
                  </label> 
                  <textarea style={{width: "653px", height: "100px", border: "solid", borderRadius: "5px"}} type="text" value={task.description} onChange={(e) => updateTask(index, 'description', e.target.value)} />
                  <div style={{ display: "flex"}}>
                    <div className='dueDate' style={{ display: "flex", flexDirection: "column"}}>
                        <label style={{fontWeight: "bolder"}}>
                        Due Date
                        </label>
                        <input style={{width: "222px", border: "solid", borderRadius: "5px"}} type="date" value={task.dueDate} onChange={(e) => updateTask(index, 'dueDate', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                    </div>
                    
                    <div className='priority' style={{ display: "flex", flexDirection: "column", marginLeft: "28%"}}>
                        <label style={{fontWeight: "bolder"}}>
                        Priority
                        </label>
                        <select style={{width: "238px", border: "solid", borderRadius: "5px"}} value={task.priority} onChange={(e) => updateTask(index, 'priority', e.target.value)}>
                            <option value="low">Low</option>
                            <option value="normal">Normal</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                  </div>
                  
                </div> 
                <div style={{textAlign: "center"}}>
                  <button className='update-button' style={{marginBottom: "2%", marginTop: "2%", width: "650px", backgroundColor: "green", borderRadius: "5px"}} onClick={() => showDetails(index, true)}>Update</button>
                </div>
              </div>
            ) : (
              <div style={{display: "flex"}}>
                <input style={{marginBottom: "1%"}} checked={task.checked} onChange={() => toggleTask(index)} type="checkbox"/> 
                <h3 style= {{paddingLeft: "1%", marginTop: "16px", width: "1%"}}>{task.title}</h3>
                <button className='detail-button' style={{marginLeft: "350px", marginTop: "2%", marginBottom: "2%", width: "130px", backgroundColor: "#50d1c4", borderRadius: "7px"}} onClick={() => showDetails(index)}>Details</button>
            
                <button className='remove-button' style={{ marginLeft: "20px", marginTop: "2%", marginBottom: "2%", width: "130px", backgroundColor: "#ef5555", borderRadius: "7px"}} onClick={() => removeTask(index)}>Remove</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {checkedCount > 0 && (
        <div className="bulk-actions" style={{display: "flex", marginTop: "45%", marginBottom: "0%", paddingLeft: "5%", borderTop: "solid 1px", backgroundColor: "#c2c2c2"}}>
          <p style={{marginTop: "3%", marginBottom: "2%", fontWeight: "bolder"}}>Bulk Action</p>
          <button className='remove-button' style={{marginLeft: "65%", marginTop: "2%", marginBottom: "2%", width: "130px", backgroundColor: "#ef5555", borderRadius: "7px"}} onClick={removeTasks}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;