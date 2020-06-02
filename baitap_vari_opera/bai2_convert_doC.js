let C = parseInt(prompt("Nhập độ C"));
let F;
//   C/5 = (F-32)/9 => F = (9C)/5 +32; 
F = (9*C)/5 +32;
document.write(`${C} độ C <br> Sau khi convert sang độ F: ${F} độ F`);