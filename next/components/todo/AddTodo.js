
import Button from '@mui/material/Button';
import styled from "@/styles/Todo.module.css"


export default function AddTodo({input, handleChange, handleClick}){
    return(
    <div>
        <div className={styled.body}>
            <h1>오늘 할 일📝</h1><br/>
            <form className={styled.form}>
                <input type="text" value={input} placeholder="오늘은 무엇을 해야허나..." onChange={handleChange} className={styled.input}/>
            </form>
            <Button variant="contained" onClick={handleClick}>추가</Button>
        </div>
    </div>)
    }