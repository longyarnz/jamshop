/** @jsx jsx */
import { jsx } from "theme-ui"
import src from "../../../images/products/dumy.svg"

function BoxItem() {
  return (
    <div sx={styles.wrapper}>
      <img src={src} alt="product"/>
      <span>Great Product #1</span>
      <span>$13.99</span>
    </div>
  )
}

export default BoxItem

const styles = {
  wrapper: {
    width: "100%",
    mb: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > img": {
      width: "28px",
      mr: "15px"
    },
    "& > span": {
      fontWeight: "bold",
      fontSize: "12px",
      color: "#EEEEEE",
      "&:first-of-type": {
        mr: "auto"
      }
    },
    "&:last-of-type": {
      mb: "auto"
    }
  }
}