import db from '../models/index.js'

export default function TodoService() {
    const Todo = db.Todo
    return {
        addTodo(req, res) {
            console.log('넘어온 일정 JSON 값' + JSON.stringify(req.body))
            new Todo(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('일정 등록 실패' + err)
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})
                    console.log('일정 등록 성공')
                }
            })
        },
        getTodo(_req, res) {
            Todo.find()
                .exec((err, todos)=>{
                    if(err) return res.status(400).send(err)
                    res.status(200).json({success: true, todos })
                })
          }
      }
  }