import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import { HYDRATE } from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isAddArticled: false
}

const ADDTODO_REQUEST = 'todo/ADDTODO_REQUEST';
const ADDTODO_SUCCESS = 'todo/ADDTODO_SUCCESS';
const ADDTODO_FAILURE = 'todo/ADDTODO_FAILURE';


export const addTodoRequest = createAction(ADDTODO_REQUEST, data => data)

export function* addTodoSaga() {
    yield takeLatest(ADDTODO_REQUEST, addTodoList);
}
function* addTodoList(action) {
    try {
        const response = yield call(addTodoAPI, action.payload)
        yield put({type: ADDTODO_SUCCESS, payload: response.data})
        yield put(window.location.href= "/todo/getTodo")
    } catch (error) {
        yield put({type: ADDTODO_FAILURE, payload: error.message})
    }
}
const addTodoAPI = payload => axios.post(
    `${SERVER}/todo/addTodoList`,
    payload,
    {headers}
    )

const addTodo = handleActions({
    [HYDRATE] : (state, action) => ({
        ...state, ...action.payload
    })
}, initialState)

export default addTodo