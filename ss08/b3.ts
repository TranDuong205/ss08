interface Square {
    shape: "square";
    sideLength: number;
}
  
    interface Circle {
    shape: "circle";
    radius: number;
  }
  
    type Geometry = Square | Circle;
  
    function calculateArea(shape: Geometry): number {
        if (shape.shape === "square") {
            return shape.sideLength * shape.sideLength;
        }else if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }else {
        throw new Error("Invalid shape");
        }
    }