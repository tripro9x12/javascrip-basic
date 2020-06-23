function Hero(image, top, right, bottom, left, size, speed) {
  this.image = image;
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 20;
    console.log(this.left);
  }
  this.moveLeft = function () {
    this.right += 20;
    console.log(this.right);
  }
  this.moveUp = function () {
    this.bottom += 20;
    console.log(this.bottom)
  }
  this.moveBottom = function () {
    this.top += 20;
    console.log(this.top);
  }

}

var hero = new Hero('./lugia.png', 20, 30, 20, 30, 200, 20);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size) {
    hero.moveBottom();
  }
  // } else if (hero.right <= window.innerWidth) {
  //   hero.moveLeft();
  //   window.innerWidth -= hero.right;
  // } else {
  //   hero.moveUp();
  // }

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}
//   document.getElementById('game').addEventListener('keydown', start);

start();