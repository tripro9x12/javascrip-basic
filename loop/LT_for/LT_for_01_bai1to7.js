/*Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100.
Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
*/ function dem() {
    for (var i = 1; i < 100; i++) {
        console.log(i);
    }
    alert("Đã hoàn thành");
}
// dem();



/*Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
 Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
  Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
*/
function check_nhietDo() {
    let nhiet_Do = parseFloat(prompt("Nhập nhiệt độ: "));
    while (nhiet_Do) {
        if (nhiet_Do < 20) {
            alert(`hãy tăng nhiệt độ, nhiệt độ hiện tại là: ${nhiet_Do} `);
            nhiet_Do = parseFloat(prompt("Nhập lại nhiệt độ: "));
        } else if (nhiet_Do > 100) {
            alert(`hãy giảm nhiệt độ, nhiệt độ hiện tại là: ${nhiet_Do} `);
            nhiet_Do = parseFloat(prompt("Nhập lại nhiệt độ: "));
        }
        
        if (nhiet_Do >= 20 && nhiet_Do <= 100) {
            console.log(nhiet_Do);
            break;
        }
    }
}
// check_nhietDo();



//Bài 3: Hiển thị ra 20 số đầu tiên trong dãy fibonacci

function show_20so(n) {
    var a = 0, b = 1, temp;
    var i = 1;
    while (n > 0) {
        temp = a;
        a = a + b;
        b = temp;
        console.log(`20 số fibonacci đầu tiên ${i}: ${a}`);
        i++;
        n--;
    }

}
// show_20so(20);



//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
function first_5() {
    let n = parseInt(prompt("Nhập n bất kỳ lớn hơn 5"));
    let a = 0, b = 1, temp;
    let i = 1;
    for (i; i < n; i++) {
        temp = a;
        a += b;
        b = temp;
        if (a % 5 == 0) {
            console.log(`số đầu tiên trong dãy fibonacci chia hết cho 5 là: ${a}`);
            break;
        }
    }
}
// first_5();



//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
function sum_fibonacci() {
    let m = 20;
    let c = 0, d = 1, tempp, sum = 0;
    let j = 1;
    for (j; j <= m; j++) {
        tempp = c;
        c = c + d;
        d = tempp;
        sum += c;
        console.log(`20 số fibonacci đầu tiên ${j}: ${c}`);
    }
    console.log(`Tổng là: ${sum}`);
}
sum_fibonacci();




//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
function sum_soTuNhien() {
    let number = 30, count = 0, sum = 0;
    let n = 1;
    while (count != number) {
        if (n % 7 == 0) {
            count++;
            sum += n;
            console.log(`số thứ ${count}: ${n}`);
        }
        n++;
    }
    console.log(`Tổng 30 số đầu tiên chia hết cho 7: ${sum} `);

}
// sum_soTuNhien();



/*Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. 
Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
 Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
*/
function show_1_to_100() {
    let i = 1;
    for (i; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('số = ' + i + ' FizzBuzz');
        } else {
            if (i % 3 == 0) {
                console.log('số = ' + i + ' Fizz');
            } else if (i % 5 == 0) {
                console.log('số = ' + i + ' Buzz');
            }
        }
    }
}
// show_1_to_100();
