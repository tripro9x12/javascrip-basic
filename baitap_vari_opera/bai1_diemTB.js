function diemTB(){
    let diemHoa = prompt("Nhập điểm Hóa");
    let diemLy = prompt("Nhập điểm Lý");
    let diemSinh = prompt("Nhập điểm Sinh");
    let hoa = parseInt(diemHoa);
    let ly = parseInt(diemLy);
    let sinh = parseInt(diemSinh);

    let sum = hoa + ly + sinh;
    let diemTB = parseFloat(sum/3);

    document.write(`Tổng = ${sum} <br> Điểm TB = ${diemTB}`);
}
diemTB();