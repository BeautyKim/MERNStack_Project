import React, {useState} from "react"
import styled from "@/styles/Todo.module.css"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoListPage = ({}) => {
    const [todos, setTodo] = useState([])
    const [input, setInput] = useState('')
    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        setTodo((prevState)=>{
            return([input, ...prevState])
        })
    }
    return (
    <div className={styled.body}>
        <h1>오늘 할 일📝</h1><br/>
        <form className={styled.form}>
            <input type="text" value={input} onChange={handleChange} className={styled.input}/>
        </form>
        <Button variant="contained" onClick={handleClick}>추가</Button>
        {todos.map((todo, idx) => {
            return <p key={idx}>{todo}<IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                    </p>
        })}
    </div>
    )
}
export default TodoListPage