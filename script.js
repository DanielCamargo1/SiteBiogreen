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