/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Cart from "../../../images/elements/cart.svg"

function CartButton() {
  return (
    <button sx={styles.cartButton}>
      <img src={Cart} alt="cart" />
    </button>
  )
}

export default CartButton

const styles = {
  cartButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer"
  }
}