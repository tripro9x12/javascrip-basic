//Bài 7: Giải phương trình bậc 2. ax^2 + bx + c = 0
let a = parseFloat(prompt("Nhập a: "));
let b = parseFloat(prompt("Nhập b: "));
let c = parseFloat(prompt("Nhập c: "));
let x1,x2,x,delta;
if(a==0){
    if(b==0){
        if(c==0){
            console.log('PT vô số nghiệm');
        }else{
            console.log('PT vô nghiệm');
        }
    }else{
        if(c==0){
            console.log('PT vô nghiệm');
        }else{
            x = -c/b;
            console.log(`PT có nghiệm x = ${x}`);
        }
    }
}else{
    delta = b*b - 4*a*c;
    if(delta<0){
        console.log('PT vô nghiệm');
    }else if(delta == 0){
        x = -b/(2*a);
        console.log(`PT có nghiêm kép: x = ${x}`);
    }else{
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
        console.log(`PT có 2 nghiêm pb: x1 = ${x1}, x2 = ${x2}`);
    }
}
