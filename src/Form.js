import React from 'react'

const Form = ({task,setTask,submitTask,refs,deleteAll}) => {
  return (
    <form onSubmit={submitTask}>
        <input placeholder="enter your task" ref={refs} type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type="submit" >add</button>
        <button type="button" onClick={()=>deleteAll()}>delete all</button>
    </form>
  )
}

export default Form;