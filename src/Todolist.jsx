import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import Todoform from './Todoform';
import { useEffect } from 'react';
import { Box,Typography } from '@mui/material';

const getInitialData =()=>{
  const data=JSON.parse(localStorage.getItem("todos"))
  if(!data)
  { 
    return [] 
  }
  return data ; 
}
const initialTodos = [
    {id:1,text:"walk the dog",completed:false},
    {id:3,text:"walk the cat",completed:false},
    {id:4,text:"walk the fish",completed:true},
    
]


export default function Todolist() {
   const[todos,setTodos] = useState(getInitialData)
    useEffect(()=>{
      localStorage.setItem(
        'todos',
        JSON.stringify(todos)
      )
   },[todos])
   const removeTodo = (id)=>{
   
    setTodos(prevTodos=>{
      return prevTodos.filter((t)=>t.id!==id)
    })
   }
   const toggleTodo = (id)=>{
    setTodos(prevTodos=>{
      return prevTodos.map(todo=>{
        if(todo.id==id)
        { 
          return {...todo,completed:!todo.completed}
        }
        else
        { 
          return todo ; 
        }
    })
    })
   }
   const addNew =(text)=>{
    setTodos(prevTodos=>{
    return [...prevTodos,{text:text,id:crypto.randomUUID(),completed:false}]
    })
   }
   return (
    <Box sx={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      m:3
    }}>
      <Typography variant="h3" component="h1" >TODOS</Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo=>{
        return  <TodoItem todo={todo} key={todo.id} removeTodo={()=>removeTodo(todo.id)} toggle={()=>toggleTodo(todo.id)}/>
        
        })}
        <Todoform addNew={addNew}/>
    </List>
    </Box>
  )
}



