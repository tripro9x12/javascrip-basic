/*Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
 Ví dụ, nếu một mảng chứa các ký tự  {'c', 's', 'c', '2', '6', '1'}
  sau khi thực hiện đảo ngược sẽ là "162csc"
 */
function show_kytu() {
    let arr = ['c', 's', 'c', '2', '6', '1'];
    let first = 0;
    let last = arr.length - 1;
    while(first<last){
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
    arr = arr.join('');
    console.log(arr);
}
show_kytu();