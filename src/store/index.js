import React, { useReducer } from "react"

const initialState = {
  items: []
}

export const CartContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const items = state.items.concat([ action.item ])
      return { items }
    default:
      return state
  }
}

function Store({ children }) {
  const state = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={state}>
      { children }
    </CartContext.Provider>
  )
}

export default Store