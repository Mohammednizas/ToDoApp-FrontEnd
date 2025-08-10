import React from 'react'
import { useParams } from 'react-router-dom';

const Update = ({update,setUpdate ,updateTask,data}) => {
    const {id} = useParams();
    const findCompleted = ()=>{
        console.log(typeof id)
        const fi = data.find((item)=>item.id === parseInt(id));
        return fi;
    }
  return (
    <div className='form-container'>
        <form  onSubmit={(e)=>{
            e.preventDefault();
            const sdata = {
                id,routine:update,completed:findCompleted()?.completed ?? false

            }
            if(!update || update.trim()==="") {
                alert("value should not be empty") 
            }
            else{
                updateTask(sdata);
            }
            setUpdate("");
        }}>
            <input type="text" placeholder='update routine' value={update} onChange={(e)=>setUpdate(e.target.value)}/>
            <button type="submit">save</button>
        </form>
    </div>
  )
}

export default Update;