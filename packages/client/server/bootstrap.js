const next = require("next")
const path = require("path")

exports.getNextApp = (init) =>
  next({
    dev: process.env.NODE_ENV !== "production",
    dir: path.resolve(__dirname, "../../client"),
    hostname: init.hostname,
    port: init.port,
  })
