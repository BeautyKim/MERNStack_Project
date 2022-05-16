import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import TodoService from "../services/todo"

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.post('/addTodoList', cors(corsOptions), (req, res) => {
    console.log(" TODO 들어옴 ")
    TodoService().addTodo(req, res)
})
app.get('/getTodoList', cors(corsOptions), (req, res) => {
    TodoService().addTodo(req, res)
})
export default app

