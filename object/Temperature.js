function Temperature(doC){
    this.doC = doC;

    this.doF = ()=>{
        return ( doC * 1.8 ) +  32;
    }
    this.doK = () =>{
        return doC + 273.15;
    }
}
let doC = parseFloat(prompt('Nhập độ C: '));
let temperature = new Temperature(doC);
alert(`${doC} độ C = ${temperature.doF()} độ F, ${temperature.doK()} độ K `);