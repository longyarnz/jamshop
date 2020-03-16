/** @jsx jsx */
import React, { useState, useContext, useEffect } from "react"
import { jsx } from "theme-ui"
import ShouldRender from "@bit/lekanmedia.shared-ui.internal.should-render";
import Box from "./Box"
import src from "../../../images/elements/cart.svg"
import { CartContext } from "../../../store"

function Cart(props) {
  const [open, setOpen] = useState(false);
  const [{ items }] = useContext(CartContext)

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.onclick = null
    }
  }, [])

  const revert = (e) => {
    if (e.target.nodeName !== "HEADER") return
    setOpen(false);
    props.blurScreen(false);
    document.body.style.overflow = "auto";
    document.body.onclick = null
  }

  const toggleBox = items.length > 0 ? e => {
    setOpen(!open);
    props.blurScreen(!open)
    document.body.style.overflow = !open ? "hidden" : "auto"
    document.body.onclick = !open ? revert : null
  } : null

  return (
    <div sx={styles.wrapper}>
      <button sx={styles.cartButton} onClick={toggleBox}>
        <img src={src} alt="cart" />
        <span>{items.length}</span>
      </button>
      <ShouldRender if={open}>
        <Box items={items} />
      </ShouldRender>
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
      p: "5px 7px",
      backgroundColor: "accent",
      borderRadius: "50%",
      color: "#fff",
      fontWeight: "300",
      fontSize: "10px",
      right: "-8px"
    },
    "&:active": {
      outline: "none"
    },
    "&:focus": {
      outline: "none"
    }
  }
}