let readMore_btn1 = document.getElementById('readMore_btn1');
let hideText1 = document.getElementById('hideText1');

readMore_btn1.addEventListener('click', toggleText);

function toggleText() {
  hideText1.classList.toggle('showText1');

  if(hideText1.classList.contains('showText1')) {
    readMore_btn1.innerHTML = 'Leer menos'
  }
  else {
    readMore_btn1.innerHTML = 'Leer mas'
  }
}