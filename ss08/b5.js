"use strict";
function printData(data) {
    console.log(data);
}
printData(10); // Kết quả: 10
printData("Hello"); // Kết quả: Hello
printData(true); // Lỗi biên dịch: Argument of type 'boolean' is not assignable to parameter of type 'NumberOrString'.
class ConsoleLogger {
    print() {
        console.log("Printing...");
    }
    log() {
        console.log("Logging...");
    }
}
const logger = new ConsoleLogger();
logger.print(); // Kết quả: Printing...
logger.log(); // Kết quả: Logging...
