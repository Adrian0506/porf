


setTimeout(function () {
document.querySelector('.loader').classList.add('dissapear');
},1500);


setTimeout(function () {
    document.querySelector('.loader').style.display = "none";
},4500);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navi').style.opacity = "1";
  } else {
    document.querySelector('.navi').style.opacity = "0.6";
  }
  prevScrollpos = currentScrollPos;
}