const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/luke/Sites/Playground/whitehouse/.cache/dev-404-page.js"))),
  "component---src-pages-custom-js": hot(preferDefault(require("/Users/luke/Sites/Playground/whitehouse/src/pages/custom.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/luke/Sites/Playground/whitehouse/src/pages/index.js")))
}

