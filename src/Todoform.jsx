import React,{useState} from 'react'
import  ListItem  from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Create from '@mui/icons-material/Create'
import { InputAdornment } from '@mui/material'
import {IconButton} from '@mui/material'
export default function Todoform({addNew}) {
  const [text,setText] = useState("")
  
  const handleChange =  (e)=>{
    setText(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    addNew(text);
    setText("") 
  }
  return (
    <form onSubmit={handleSubmit}>
    <ListItem>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} value={text}  InputProps= {{ endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="create todo"
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end" type="submit"
                > </IconButton>
                <Create/>
                 </InputAdornment>
        }}/>
    </ListItem>
    </form>
  )
}
