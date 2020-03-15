/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import BoxItem from "./BoxItem"

function Box() {
  return (
    <div sx={styles.wrapper}>
      <BoxItem />
      <BoxItem />
      <button sx={styles.checkout}>
        Checkout
      </button>
    </div>
  )
}

export default Box

const styles = {
  wrapper: {
    width: "280px",
    minHeight: "270px",
    border: "2px solid #F5F5F5",
    backgroundColor: "#220538",
    borderRadius: "4px",
    position: "absolute",
    right: "-43px",
    top: "50px",
    zIndex: 3,
    p: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  checkout: {
    width: "90px",
    height: "25px",
    backgroundColor: "accent",
    border: "none",
    color: "#fff",
    alignSelf: "flex-end",
    borderRadius: "2px",
    cursor: "pointer",
    transition: 'all ease .25s',
    fontFamily: "body",
    "&:hover": {
      backgroundColor: "#f8af23",
      outline: 'none',
    },
    "&:active": {
      backgroundColor: "accent",
      outline: "none"
    },
    "&:focus": {
      outline: "none"
    }
  }
}