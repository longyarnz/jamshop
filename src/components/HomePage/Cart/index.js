/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import ShouldRender from "@bit/lekanmedia.shared-ui.internal.should-render";
import Box from './Box'
import src from "../../../images/elements/cart.svg"

function Cart(props) {
  const [open, setOpen] = useState(false);

  const toggleBox = e => {
    setOpen(!open);
    props.blurScreen(!open);
    document.body.style.overflow = !open ? "hidden" : "auto";

    document.body.addEventListener("click", function revert(e) {
      if (e.target.nodeName !== 'HEADER') return;
      setOpen(false);
      props.blurScreen(false);
      document.body.style.overflow = "auto";
      document.body.removeEventListener("click", revert);
    })
  }

  return (
    <div sx={styles.wrapper}>
      <button sx={styles.cartButton} onClick={toggleBox}>
        <img src={src} alt="cart" />
        <span>88</span>
      </button>
      <ShouldRender if={open}>
        <Box />
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
      p: '5px',
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