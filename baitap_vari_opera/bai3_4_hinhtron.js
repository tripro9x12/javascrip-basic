function hinhtron(){
    let r = parseInt(prompt("Nhập bán kính: r = "));
    let PI = 3.14;
    let S = Math.pow(r, 2) * PI;
    let C = 2 * r * PI;

    document.write(`diện tích: ${S} <br> chu vi: ${C} `);
}
hinhtron();