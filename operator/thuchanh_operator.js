function area_HCN(){
    let inputWidth = prompt("Enter the width");
    let inputHeight = prompt("Enter the height");

    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);

    let area = width * height;
    document.write(`diện tích hình chữ nhật: ${width} * ${height} = ${area}`);
}
area_HCN();