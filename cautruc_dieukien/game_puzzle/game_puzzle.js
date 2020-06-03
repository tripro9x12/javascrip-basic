let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let main = document.getElementById('main')


let obj = {
    'image1': ['./image/cat_1.jpg', './image/monkey_1.jpg', './image/panda_1.jpg'],
    'image2': ['./image/cat_2.jpg', './image/monkey_2.jpg', './image/panda_2.jpg'],
    'image3': ['./image/cat_3.jpg', './image/monkey_3.jpg', './image/panda_3.jpg'],
    'image4': ['./image/cat_4.jpg', './image/monkey_4.jpg', './image/panda_4.jpg'],
    'image5': ['./image/cat_5.jpg', './image/monkey_5.jpg', './image/panda_5.jpg'],
};
img1.onclick = function () {
    img1.src = obj['image1'][Math.floor(Math.random() * obj['image1'].length)];
    checkDone()
}
img2.onclick = function () {
    img2.src = obj['image2'][Math.floor(Math.random() * obj['image2'].length)];
    checkDone()
}
img3.onclick = function () {
    img3.src = obj['image3'][Math.floor(Math.random() * obj['image3'].length)];
    checkDone()
}
img4.onclick = function () {
    img4.src = obj['image4'][Math.floor(Math.random() * obj['image4'].length)];
    checkDone()
}
img5.onclick = function () {
    img5.src = obj['image5'][Math.floor(Math.random() * obj['image5'].length)];
    checkDone()
}

const obj_2 = {
    'images1': ["http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/cat_1.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/monkey_1.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/panda_1.jpg"
    ],
    'images2': ["http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/cat_2.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/monkey_2.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/panda_2.jpg"
    ],
    'images3': ["http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/cat_3.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/monkey_3.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/panda_3.jpg"
    ],
    'images4': ["http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/cat_4.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/monkey_4.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/panda_4.jpg"
    ],
    'images5': ["http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/cat_5.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/monkey_5.jpg",
        "http://127.0.0.1:5500/cautruc_dieukien/game_puzzle/image/panda_5.jpg"
    ],
}


function checkDone() {
    if (img1.src == obj_2['images1'][0] && img2.src == obj_2['images2'][0] && img3.src == obj_2['images3'][0]
        && img4.src == obj_2['images4'][0] && img5.src == obj_2['images5'][0]) {
        main.className = "done";
    } else {
        main.className = "";
    }
    if (img1.src == obj_2['images1'][1] && img2.src == obj_2['images2'][1] && img3.src == obj_2['images3'][1]
        && img4.src == obj_2['images4'][1] && img5.src == obj_2['images5'][1]) {
        main.className = "done";
    } else {
        main.className = "";
    }
    if (img1.src == obj_2['images1'][2] && img2.src == obj_2['images2'][2] && img3.src == obj_2['images3'][2]
        && img4.src == obj_2['images4'][2] && img5.src == obj_2['images5'][2]) {
        main.className = "done";
    } else {
        main.className = "";
    }

}

