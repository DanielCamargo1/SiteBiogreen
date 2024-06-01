const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');
const text = 'Floreando espaços. Cultivando sonhos!';
let textIndex = 0;

function type() {
  if (textIndex < text.length) {
    textElement.innerHTML += text.charAt(textIndex);
    textIndex++;
    setTimeout(type, 100); 
  }
}

type();

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)
