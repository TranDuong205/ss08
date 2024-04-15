"use strict";
function squareNumber(input) {
    if (typeof input === "number") {
        return input * input;
    }
    return input.map((num) => num * num);
}
