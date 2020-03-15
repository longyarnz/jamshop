/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

function Box() {
  return (
    <div sx={styles.wrapper}>

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
  }
}