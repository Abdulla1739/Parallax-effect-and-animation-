var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);
let bg = document.getElementById("bg")
let cloud = document.getElementById("cloud")
let star = document.getElementById("star") 
let earth = document.getElementById("earth") 
let text = document.getElementById("text") 
let mid = document.getElementById("mid") 
let fore = document.getElementById("fore") 

window.addEventListener('scroll',function(){
  var value = window.scrollY;
  bg.style.top = value * 0.5 + 'px';
  cloud.style.top = value * 0.2 + 'px';
  earth.style.left = value * 0.5 + 'px';
  star.style.top = value * 0.2 + 'px';
  fore.style.top = value * 1.15 + 'px';
  text.style.top = value * 1 + 'px';
  mid.style.right = value * .20 + 'px';
})

