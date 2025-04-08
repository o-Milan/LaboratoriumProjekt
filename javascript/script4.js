function toggleDarkMode() {
  const toggle = document.getElementById('toggle-icon');
  const btns = document.querySelectorAll('.btn');
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    btns.forEach(btn => {
      btn.style.color = 'white';
    });

  } else {
    document.body.classList.remove('dark-mode');
    btns.forEach(btn => {
      btn.style.color = 'black';
    });
  }
}
