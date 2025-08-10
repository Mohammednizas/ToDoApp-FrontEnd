import React from 'react'
import ChildItem from './ChildItem';
import Form from './Form';

const Box = ({data,task,setTask,submitTask,deleteTask,refs,deleteAll,updateTask}) => {
  return (
    <div  className="whole">
        <div class="form-data">
            <Form task={task} setTask ={setTask} submitTask={submitTask} refs={refs} deleteAll={deleteAll}/>
        </div>
        <div className='tables'>
        <table className="styled-table">
            <thead>
                <tr>
                    <th>sno</th>
                    <th>Task</th>
                    <th>completed</th>
                    <th colSpan={2}>actions</th>
                </tr>
            </thead>
            <tbody>
               
                {data.map((val,index)=>{
                    return(
                    <ChildItem val ={val} deleteTask = {deleteTask} updateTask ={updateTask} key={index} />
                    );
                })}
                    
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Box;