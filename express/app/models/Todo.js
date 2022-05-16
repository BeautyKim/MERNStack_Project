export default function TodoModel(mongoose) {
    const todoSchema = mongoose.model({
        task: String
    }, {timestamps: true})
    return mongoose.model('Todo', todoSchema)
}

