const withLESS = require("@zeit/next-less");
// const withSASS = require('@zeit/next-sass');

//prevent node give error when read less files in server side
if (require !== undefined) {
  require.extensions[".less"] = () => {};
}

//future work:
// add support for sass

module.exports = withLESS({
  distDir: "dist"
});
