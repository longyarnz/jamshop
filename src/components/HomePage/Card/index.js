/** @jsx jsx */
import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import { jsx } from "theme-ui"
import { CartContext } from "../../../store"
import Add from "../../../images/elements/add.svg"

function HomepageCard({ name, src, excerpt, price }) {
  const [ , dispatch ] = useContext(CartContext)
  const path = `/products/${name.replace(/\s/g, "_").toLowerCase()}`
  const viewProduct = () => navigate(path);
  const addProduct = e => {
    e.stopPropagation()
    dispatch({
      type: 'ADD',
      item: { name, price }
    })
  }

  return (
    <figure sx={styles.figure} onClick={viewProduct}>
      <img src={src} alt="product" />
      <figcaption>
        <span>{name}</span>
        <p>{excerpt}</p>
        <button onClick={addProduct}>
          <img src={Add} alt="add" />
        </button>
      </figcaption>
    </figure>
  )
}

export default HomepageCard

const styles = {
  imgWrapper: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
    order: [2, 2, 1],
  },
  figure: {
    width: "1",
    height: "270px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: "32px 24px 24px",
    m: "15px 0px",
    backgroundColor: "#331F41",
    border: "3px solid #969693",
    borderRadius: "3px",
    position: "relative",
    cursor: "pointer",
    transition: 'all ease .25s',
    "& > img": {
      mb: 6
    },
    "& > figcaption": {
      "& > span": {
        color: "#fff",
        fontFamily: "body",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "18px",
        display: "inline",
        textAlign: "left"
      },
      "& > p": {
        fontWeight: "300",
        fontSize: "14px",
        mb: 0,
        display: "flex",
        alignItems: "flex-end",
        width: "180px",
        lineHeight: 1.6
      },
      "& button": {
        position: "absolute",
        backgroundColor: "accent",
        padding: "13px",
        borderRadius: "50%",
        borderColor: "transparent",
        right: "10px",
        bottom: "10px",
        cursor: "pointer",
        transition: 'all ease .25s',
        "& img": {
          transition: 'all ease .15s',
          width: "15px"
        },
        "&:hover": {
          backgroundColor: "#f8af23",
          outline: 'none',
          "& img": {
            transform: "scale(1.1)"
          }
        },
        "&:active": {
          backgroundColor: "accent",
          outline: "none"
        },
        "&:focus": {
          outline: "none"
        }
      }
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .0)",
    }
  }
}