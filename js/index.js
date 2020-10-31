


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
    document.querySelector('.nav').style.top = "-20px";
  } else {
    document.querySelector('.nav').style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}



window.addEventListener('scroll', function(e) {
 var elem = document.querySelector('.container_hire')
  var x = elem.scrollLeft;
  var y = window.scrollY;
  console.log(y)

  if (y > 500) {
    console.log('passed point')
    document.querySelector('.speed_hire').classList.add('leftr')
    document.querySelector('.why_hire').classList.add('fadein')
    document.querySelector('.book_learn').classList.add('rightl')
  }

  if (y > 1500) {
    document.querySelector('.skill_img').classList.add('skillani')
    document.querySelector('.skills_text').classList.add('skillbio')
    document.querySelector('.skills_title').classList.add('skilltitle')
  }
});
