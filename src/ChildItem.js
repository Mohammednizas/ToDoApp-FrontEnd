import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ChildItem = ({val,deleteTask,updateTask}) => {
  const [textdecor,setTextdecor] = useState(!val.completed ? "normal" : "overthrough");
  return (
    
      <tr>
        <td>{val.id}</td>
        <td className={textdecor}>{val.routine}</td>
        <td><input className="check" type="checkbox" checked={val.completed} onChange={()=>{const dt = {id:val.id,routine:val.routine,completed : !val.completed}
                                                                                       textdecor === "normal" ? setTextdecor("overthrough") : setTextdecor("normal")
                                                                                       updateTask(dt)}}/></td>
          <td><button onClick={()=>deleteTask(val.id)}>delete</button></td> 
          <td ><button className='blue'><Link className="link" to={`activity/update/${val.id}`}>update</Link></button></td>
      </tr>
  )
}

export default ChildItem;