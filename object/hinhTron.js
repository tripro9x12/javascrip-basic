function circle(radius){
    this.radius = radius;

    this.getRadius = ()=>{
        return radius;
    }
    this.getArea = ()=>{
        return Math.PI * Math.pow(radius,2);
    }
};
let circle_1 = new circle(2);
alert(`bán kính = ${circle_1.getRadius()}, diện tích = ${circle_1.getArea()} `);
let circle_2 = new circle(3);
alert(`bán kính = ${circle_2.getRadius()}, diện tích = ${circle_2.getArea()} `);
