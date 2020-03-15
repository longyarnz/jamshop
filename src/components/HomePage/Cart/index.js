/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Box from './Box'
import src from "../../../images/elements/cart.svg"

function Cart() {
  return (
    <div sx={styles.wrapper}>
      <button sx={styles.cartButton}>
        <img src={src} alt="cart" />
        <span>88</span>
      </button>
      <Box />
    </div>
  )
}

export default Cart

const styles = {
  wrapper: {
    position: "relative",
  },
  cartButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    position: "relative",
    zIndex: 3,
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