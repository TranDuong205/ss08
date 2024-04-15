"use strict";
function parseInput(input) {
    switch (input) {
        case "number":
            return 42;
        case "boolean":
            return true;
        case "string":
            return "Hello, world!";
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            throw new Error("Invalid input");
    }
}
