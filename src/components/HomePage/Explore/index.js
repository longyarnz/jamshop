/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import HomepageSlideshow from "../Slideshow"

function HomepageExplore() {
  return (
    <section sx={styles.wrapper}>
      <Styled.h2 sx={styles.heading}>
        Explore community choices
      </Styled.h2>

      <Styled.p sx={styles.subText}>
        Updated daily based on most popular choices among dev community
      </Styled.p>

      <HomepageSlideshow />
    </section>
  )
}

export default HomepageExplore

const styles = {
  wrapper: {
    mt: "170px"
  },
  heading: {
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "28px",
    color: "#eeeeee",
    pl: "20px"
  },
  subText: {
    fontWeight: "300",
    fontSize: "16px",
    maxWidth: 400,
    color: "#c4c4c4",
    pl: "20px"
  }
}