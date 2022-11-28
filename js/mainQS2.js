let readMore_btn2 = document.getElementById('readMore_btn2');
let hideText2 = document.getElementById('hideText2');

readMore_btn2.addEventListener('click', toggleText);

function toggleText() {
  hideText2.classList.toggle('showText2');

  if(hideText2.classList.contains('showText2')) {
    readMore_btn2.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn2.innerHTML = 'Leer mas'
  }
}