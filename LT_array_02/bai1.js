/*Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,
  in ra các phần tử trong mảng.
 */
function show_arr(){
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for(let i = 0; i<a.length;i++){
        console.log(`row ${i}`);
        for(let j=0;j<a[i].length; j++){
            console.log(`${a[i][j]}`);
        }
    }
}
show_arr();