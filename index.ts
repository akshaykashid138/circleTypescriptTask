
interface config{
    circleRadius:number
    circleColor:string
}

//class declaration
class Circle{
    radius:number;
    color:string

    //constructor
    constructor(obj:config){
        this.radius=obj.circleRadius
        this.color=obj.circleColor
    }

  
    //function for getting radius
    getRadius(rad:config){
            console.log("Radius of circle is:",rad.circleRadius)
    }

    //set radius of circle
    setRadius(radius:number){
        this.radius=radius
        console.log("Radius after set:",radius)
    }

    //function for getting color
    getColor(col:config):string{
        console.log("Color of circle:",col.circleColor)
        return this.color;
    }

    //function for set color
    setColor(setCol:string){
        this.color=setCol
        console.log("Color after set:",setCol)
    }

    //function for get area
    getArea(area:config){
        let areaOfCircle=Math.PI*area.circleRadius*area.circleRadius;
        console.log("Area of circle is:",areaOfCircle)
    }

    //get Perimeter of the circle
    getperimeter(peri:config){
        let perimeter=2*Math.PI*peri.circleRadius;
        console.log("Perimeter of circle:",perimeter)
    }
}

let obj={
    circleRadius:5,
    circleColor:'red'
}

//object creation
let cc=new Circle(obj)

//method calling
cc.getRadius(obj)
cc.setRadius(6)
cc.getColor(obj)
cc.setColor("black")
cc.getArea(obj)
cc.getperimeter(obj)


