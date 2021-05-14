function areaCircle(r) {
  return 2 * 3.14 * r;
}
function areaSquare(r) {
  return r * r;
}
function areaRectangle(l, b) {
  return l * b;
}

module.exports = {
  areaCircle: areaCircle,
  areaSquare: areaSquare,
  areaRectangle: areaRectangle,
};
