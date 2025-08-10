import { useEffect, useState,useRef} from "react";
import Box from "./Box";
import Update from "./Update";
import {Routes,Route,  useNavigate} from 'react-router-dom';

function App() {
  const [data,setData] = useState([]);
  const [task,setTask] = useState("");
  const [update,setUpdate] = useState("");
  const navigate = useNavigate();
  const refs = useRef();
  const URL = "http://localhost:8080/";
  const postData = async(obj) =>{
        try{
          const post = await fetch(`${URL}activity/post`,{
            method : "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(obj)
          })
  
          const res = await post.text();
           alert(res);
          await fetchData();
          
        }
        catch(err){
            console.log(err);
        }
  }
  const deleteTask = async(id) =>{
    try{
      const deletes = await fetch(`${URL}activity/delete/${id}`,{
        method : "DELETE",
      });
      const res = await deletes.text();
      await fetchData();
      alert(res);

    }
    catch(err){
       console.log(err);
    }
  }
  const deleteAll = async() => {
    try{
      const deletes = await fetch(`${URL}activity/delete/all`,{
        method : "DELETE",
      });
      const res = await deletes.text();
      await fetchData();
      alert(res);

    }
    catch(err){
       console.log(err);
    }
  }
  const updateTask = async(obj)=>{
    try{
      const updates = await fetch(`${URL}activity/update/${obj.id}`,
        {
          method : "PUT",
          headers:{
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(obj)
        })
      const res = await updates.text();
      await fetchData();
      alert(res);
      navigate("/")
    }
    catch(err){
        console.log(err);
    }
  }

  const submitTask = (e) =>{
    e.preventDefault();
    if(!task || task.trim()==="")
      { 
        alert("the task should not be empty") ;
      }
      else
      {
    const id = data.length -1 >= 0 ? data[data.length-1].id + 1 : 1;
    const routine = task;
    const completed = false;
    const obj = {
      id,routine,completed
    }
    postData(obj);
      }
      setTask("");
      refs.current.focus();
  }
  const fetchData = async()=>{
      try{
        const result = await fetch(`${URL}activity`);
        const data = await result.json();
        setData(data);
        console.log(data);
      }
      catch(err){
        console.log("error occured");
      }
    }
  useEffect(() => {
    
  (async()=>fetchData())();
    
  }, [])
  
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Box data={data} task={task} setTask={setTask} submitTask = {submitTask} deleteTask = {deleteTask} refs={refs} deleteAll={deleteAll} updateTask={updateTask} />}></Route>
        <Route path="/activity/update/:id" element={<Update update={update} setUpdate={setUpdate} updateTask={updateTask} data={data}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
