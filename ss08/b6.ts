function printData(data: string | string[]): void {
    if (typeof data === "string") {
        console.log(data);
    } else if (Array.isArray(data)) {
        for (const item of data) {
        console.log(item);
        }
    } else {
        throw new Error("Invalid input");
    }
}

printData("Hello");          // In ra: Hello
printData(["Apple", "Banana", "Orange"]);  // In ra từng phần tử trên một dòng:
                                        