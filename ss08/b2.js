"use strict";
function validatePerson(person) {
    if (typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "object" &&
        person.address !== null) {
        return true;
    }
    return false;
}
