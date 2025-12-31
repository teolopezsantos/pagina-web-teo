```javascript

function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje');
  if (mensaje.style.display === 'none' || mensaje.style.display === '') {
    mensaje.style.display = 'block';
  } else {
    mensaje.style.display = 'none';
  }
}

const skills = document.querySelectorAll('.skill');
skills.forEach((skill, index) => {
  skill.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
});



profileImg.addEventListener('click', function() {
  emojiIndex = (emojiIndex + 1) % emojis.length;
  this.textContent = emojis[emojiIndex];
});


console.log('¡Bienvenido a mi sitio web!');
console.log('Desarrollado con HTML, CSS y JavaScript');
```

---
