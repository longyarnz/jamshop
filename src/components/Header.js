/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container } from "../components/Grid"
import Cart from "./HomePage/Cart"

export default function Header() {
  const [blur, setBlur] = useState(false);
  styles.header["::after"] = blur ? styles.after : null;

  return (
    <header sx={styles.header}>
      <Container
        sx={{
          maxWidth: [
            "100%",
            "552px",
            "732px",
            "910px",
            "1100px",
            "1320px",
            "1480px",
          ],
          ...styles.wrapper
        }}
      >
        <Link to="/" sx={styles.mainLink}>
          JAM SHOP
        </Link>
        <Cart blurScreen={setBlur} />
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
    zIndex: 9
  },
  after: {
    content: "''",
    position: "absolute",
    background: "rgba(28, 4, 46, 0.55)",
    backdropFilter: "blur(10px)",
    width: "100%",
    height: "100vh",
    zIndex: 2,
    top: 0,
    left: 0
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    zIndex: 3
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}
