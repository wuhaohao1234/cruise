const presets = [["@babel/preset-env", { "corejs": "2", "useBuiltIns": "usage" }],"@babel/preset-react"];
const plugins = ["@babel/plugin-transform-runtime"];

module.exports = { presets, plugins };