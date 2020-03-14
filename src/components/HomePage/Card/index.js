/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Add from "../../../images/elements/add.svg"

function HomepageCard({ title, src }) {
  return (
    <figure sx={styles.figure}>
      <img src={src} alt="product" />
      <figcaption>
        <caption>{title}</caption>
        <p>Something that you truly need, but haven"t know about yet!</p>
        <button>
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
    width: ["100%", , , "calc(25% - 40px)"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    p: "32px 24px 24px",
    m: "15px 0px",
    backgroundColor: "rgba(255, 255, 255, .1)",
    border: "3px solid #969693",
    borderRadius: "3px",
    position: "relative",
    cursor: "pointer",
    transition: 'all ease .25s',
    "& > img": {
      mb: 6
    },
    "& > figcaption": {
      "& > caption": {
        color: "#fff",
        fontFamily: "body",
        fontWeight: 500,
        textTransform: "uppercase",
        fontSize: "16px",
        display: "inline",
        textAlign: "left"
      },
      "& > p": {
        fontWeight: "300",
        fontSize: "13px",
        mb: 0,
        display: "flex",
        alignItems: "flex-end",
        width: "180px",
        lineHeight: 1.6
      },
      "& button": {
        position: "absolute",
        backgroundColor: "accent",
        padding: "11px 13px",
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