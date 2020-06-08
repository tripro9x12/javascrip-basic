//Bài 1: In dãy Fibonacci
function Fibonacci() {
    let n = parseInt(prompt('Nhập phần tử thứ n trong dãy fanonaci'));
    let a = 0, b = 1, temp;
    let i = 1;
    console.log(`dãy fibonacci từ 1 đến ${n}`);
    for (i; i <= n; i++) {
        temp = a;
        a = a + b;
        b = temp;
        console.log(`lần ${i} = ${a} `);
    }
}
// Fibonacci();


//Bài 2: Tính giai thừa của một số nguyên dương
function giai_Thua() {
    let n = parseInt(prompt('nhập 1 số nguyên dương n'));
    let i = 1;
    let giaiThua = 1;
    for (i; i <= n; i++) {
        giaiThua = giaiThua * i;
    }
    console.log(`${n}! = ${giaiThua}`);

}
// giai_Thua();


//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
function tam_giac_one() {
    let m = 5;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(" * ");
        }
        document.write('<br>');
    }
    document.write('<br>');
}
tam_giac_one();

function tam_giac_two() {
    let m = 5;
    for (var i = m; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            document.write(' * ');
        }
        document.write('<br>');
    }
    document.write('<br>');
}
tam_giac_two();

function tam_giac_three() {
    let m = 5;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= m; j++) {
            if (j <= m - i) {
                document.write('   ');
            } else {
                document.write(' * ');
            }
        }
        document.write('<br>');
    }
    document.write('<br>');
}
tam_giac_three();

function tam_giac_four() {
    let m = 5;
    for (var i = m; i >= 1; i--) {
        for (var j = 1; j <= m; j++) {
            if (j <= m - i) {
                document.write('   ');
            } else {
                document.write(' * ');
            }
        }
        document.write('<br>');
    }
    document.write('<br>');
}
tam_giac_four();

//Bài 4: In hình chữ nhật
function hinh_CN() {
    let n = 21;
    let m = 7;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (i == 1 || i == m || j == 1 || j == n) {
                document.write(' * ');
            } else {
                document.write('   '); // để space nó không nhận;
            }
        }
        document.write('<br>');

    }
}
// hinh_CN();


/*Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con)
 khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng là 0.3%.
 */
function main() {
    let money_first = parseFloat(prompt("Nhập số tiền ban đầu"));
    let number_month = parseFloat(prompt("nhập số tháng cho vay"));
    let lai_xuat;
    let i = 1;
    for (i; i <= number_month; i++) {
        lai_xuat = money_first * 0.3 / 100;
        money_first = money_first + lai_xuat;
        console.log(`tháng ${i}: lãi xuất: ${lai_xuat} `);
        console.log(`Tổng số tiền nhận được là: ${money_first} \n `);
    }
}
// main();

//Bài 6: In hình trái tim
function traitim() {
    document.writeln('   **   **   ');
    document.writeln(' *    *    * ');
    document.writeln('  *       *  ');
    document.writeln('    *   *    ');
    document.writeln('      *      ');
}
/*document.write nó không nhận space tạo khoảng chắn, còn dùng &nbsp thì khó 
căn chỉnh khoảng chắn.
*/
traitim();
