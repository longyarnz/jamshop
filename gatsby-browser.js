const React = require("react")
const Store = require("./src/store").default

exports.wrapRootElement = ({ element }) => {
  return (
    <Store>
      {element}
    </Store>
  )
}