/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Col } from "../../Grid"
import Dummy from "../../../images/products/dumy.svg"

function HomepageCard({ title, src }) {
  return (
    <figure>
      <img src={src} alt="product" sx={{ maxWidth: "1" }} />
      <figcaption>
        <caption>{title}</caption>
        <p>
          Something you truly need, but haven't know about yet!
        </p>
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
  }
}