// SECTION HISTORIA animation

// Remover la clase de transicion
const square = document.querySelector('.historiaLineMobile');
square.classList.remove('historiaLineMobileTransition');

const square2 = document.querySelector('.lineOne');
square2.classList.remove('lineTransition');

const square3 = document.querySelector('.lineTwo');
square3.classList.remove('lineTransition');

const square4 = document.querySelector('.lineThree');
square4.classList.remove('lineTransition');

const square5 = document.querySelector('.lineFour');
square5.classList.remove('lineTransition');

const square6 = document.querySelector('.lineFive');
square6.classList.remove('lineTransition');

const square7 = document.querySelector('.lineSix');
square7.classList.remove('lineTransition');

// Crear un observador
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('historiaLineMobileTransition');
      return;
    }

    square.classList.remove('historiaLineMobileTransition');
  });
});

// Crear un observador
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square2.classList.add('lineTransition');
      return;
    }

    square2.classList.remove('lineTransition');
  });
});

// Crear un observador
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square3.classList.add('lineTransition');
      return;
    }

    square3.classList.remove('lineTransition');
  });
});

// Crear un observador
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square4.classList.add('lineTransition');
      return;
    }

    square4.classList.remove('lineTransition');
  });
});

// Crear un observador
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square5.classList.add('lineTransition');
      return;
    }

    square5.classList.remove('lineTransition');
  });
});

// Crear un observador
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square6.classList.add('lineTransition');
      return;
    }

    square6.classList.remove('lineTransition');
  });
});

// Crear un observador
const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square7.classList.add('lineTransition');
      return;
    }

    square7.classList.remove('lineTransition');
  });
});

observer.observe(document.querySelector('.historiaBoxOne'));
observer1.observe(document.querySelector('.lineOne'));
observer2.observe(document.querySelector('.lineTwo'));
observer3.observe(document.querySelector('.lineThree'));
observer4.observe(document.querySelector('.lineFour'));
observer5.observe(document.querySelector('.lineFive'));
observer6.observe(document.querySelector('.lineSix'));




