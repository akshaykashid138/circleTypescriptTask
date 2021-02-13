//class declaration
var Circle = /** @class */ (function () {
    //constructor
    function Circle(obj) {
        this.radius = obj.circleRadius;
        this.color = obj.circleColor;
    }
    //function for getting radius
    Circle.prototype.getRadius = function (rad) {
        console.log("Radius of circle is:", rad.circleRadius);
    };
    //set radius of circle
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
        console.log("Radius after set:", radius);
    };
    //function for getting color
    Circle.prototype.getColor = function (col) {
        console.log("Color of circle:", col.circleColor);
        return this.color;
    };
    //function for set color
    Circle.prototype.setColor = function (setCol) {
        this.color = setCol;
        console.log("Color after set:", setCol);
    };
    //function for get area
    Circle.prototype.getArea = function (area) {
        var areaOfCircle = Math.PI * area.circleRadius * area.circleRadius;
        console.log("Area of circle is:", areaOfCircle);
    };
    //get Perimeter of the circle
    Circle.prototype.getperimeter = function (peri) {
        var perimeter = 2 * Math.PI * peri.circleRadius;
        console.log("Perimeter of circle:", perimeter);
    };
    return Circle;
}());
var obj = {
    circleRadius: 5,
    circleColor: 'red'
};
//object creation
var cc = new Circle(obj);
//method calling
cc.getRadius(obj);
cc.setRadius(6);
cc.getColor(obj);
cc.setColor("black");
cc.getArea(obj);
cc.getperimeter(obj);
