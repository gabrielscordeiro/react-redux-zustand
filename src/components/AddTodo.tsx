import { FormEvent, useState } from 'react'

export function AddTodo() {
    const [newTodo, setNewTodo] = useState('')

    function handleNewTodo(e: FormEvent){
        e.preventDefault()

        console.log(newTodo)
    }

    return (
        <form onSubmit={handleNewTodo}>
            <input
                type="text"
                placeholder="New to-do"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}