import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function GetTodo(todos){
    return(<div>
        {todos.map((todo, idx) => {
            return <p key={idx}>{todo}<IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton></p>
        })}
        </div>)
}