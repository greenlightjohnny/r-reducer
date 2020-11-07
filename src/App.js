import logo from "./logo.svg"
import "./App.css"
import React, { useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  )
}

export default App
