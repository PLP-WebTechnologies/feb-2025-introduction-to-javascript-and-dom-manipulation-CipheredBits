// Change text dynamically
document.getElementById('changeTextBtn').addEventListener('click', function () {
  const intro = document.getElementById('intro');
  intro.textContent = 'The text has been changed!';
  intro.style.color = 'darkgreen';
  intro.style.fontWeight = 'bold';
});

// Add/Remove an element
document.getElementById('toggleBoxBtn').addEventListener('click', function () {
  const container = document.getElementById('boxContainer');
  const existingBox = document.getElementById('dynamicBox');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'dynamicBox';
    box.textContent = 'I am a new box!';
    box.style.padding = '10px';
    box.style.marginTop = '10px';
    box.style.backgroundColor = '#ddd';
    box.style.border = '2px solid black';
    container.appendChild(box);
  }
});
