function Hero(image, top,right,bottom, left, size){
    this.image = image;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.size = size;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px; position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += 20;
      console.log('ok: ' + this.left);
    }
    // this.moveLeft = function(){
    //     this.right +=20;
    //     console.log(this.right);
    // }
  
  }
  
  var hero = new Hero('./lugia.png', 20, 30,20,30, 200);
  
  function start(e){
    if(hero.left < window.innerWidth - hero.size){
      hero.moveRight();
    }
   
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
  }
//   document.getElementById('game').addEventListener('keydown', start);
  
  start();