/**
 * index.js - empty module
 */

(function (definition) {
    if (typeof exports === "object") {
        module.exports = definition();
    } else {
        empty = definition();
    }
})(function () {
    return function () {
        return "this is module empty";
    };
});
