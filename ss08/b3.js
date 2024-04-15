"use strict";
function calculateArea(shape) {
    if (shape.shape === "square") {
        return shape.sideLength * shape.sideLength;
    }
    else if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        throw new Error("Invalid shape");
    }
}
