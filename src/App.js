import logo from "./logo.svg"
import "./App.css"
import React, { useReducer, useState } from "react"
import Todo from "./Todo"
export const ACTIONS = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload.name)]

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos

    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({
      type: ACTIONS.ADD,
      payload: {
        name: name,
      },
    })
    setName("")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  )
}

export default App
