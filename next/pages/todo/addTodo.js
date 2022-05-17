import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { addTodoRequest } from '@/modules/todo/addTodo';
import AddTodo from '@/components/todo/AddTodo';
import GetTodo from '@/components/todo/GetTodo';
import Head from "next/head";

const AddTodoPage = () => {
    const [todos, setTodo] = useState([])
    const [input, setInput] = useState('')
    const handleChange = e => {
        e.preventDefault()
        setInput(e.target.value)
    }
    const dispatch = useDispatch()
    const handleClick = () => {
        setTodo((prevState)=>{
            return([input, ...prevState])
        })
        dispatch(addTodoRequest(todos))
    }
    return (
    <div>
        <Head>
            <title>Todo| 할일목록</title>
        </Head>
        <AddTodo onClick={handleClick} onChange={handleChange}/>
        <GetTodo/>
    </div>
  );
};

const mapStateToProps = state => ({isAddArticled: state.addTodo.isAddTodo})
const addTodoActions = {addTodoRequest}
export default connect(mapStateToProps, addTodoActions)(AddTodoPage)