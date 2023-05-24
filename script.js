function getWords() {
  var phrases = [
    ['Hello', 'I\'m', 'Array', 'Visualizer'],
    ['Text', 'will be', 'deisplayed', 'inside', 'this box'],
    ['It', 'will show', 'the', 'contents', 'of the', 'array', 'in', 'script.js']
  ];
  return phrases.flat();
}

var array = getWords();
var container = document.getElementById('rectangle');
var i = 0;

function displayNextElement() {
  if (i < array.length) {
    container.innerHTML = array[i];
    i++;
    setTimeout(displayNextElement, 400);
  }
}

displayNextElement();
