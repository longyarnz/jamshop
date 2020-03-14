/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Cart from "../../../images/elements/cart.svg"

function CartButton() {
  return (
    <button sx={styles.cartButton}>
      <img src={Cart} alt="cart" />
      <span>88</span>
    </button>
  )
}

export default CartButton

const styles = {
  cartButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    position: "relative",
    "& > span": {
      position: "absolute",
      p: '5px',
      backgroundColor: "accent",
      borderRadius: "50%",
      color: "#fff",
      fontWeight: "300",
      fontSize: "10px",
      right: "-8px"
    }
  }
}