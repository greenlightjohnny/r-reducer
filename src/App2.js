import logo from "./logo.svg"
import "./App.css"
import React, { useReducer, useState } from "react"

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DEC: "DEC",
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DEC:
      return { count: state.count - 1 }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }
  function DEC() {
    dispatch({ type: ACTIONS.DEC })
  }

  return (
    <div className="App">
      <button onClick={DEC}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>-</button>
    </div>
  )
}

export default App
