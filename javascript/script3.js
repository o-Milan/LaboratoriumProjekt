function toggleDarkMode() {
  const toggle = document.getElementById('toggle-icon');
  const btns = document.querySelectorAll('.btn');
  const cards = document.querySelectorAll('.card-body')
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    btns.forEach(btn => {
      btn.style.color = 'white';
    });
    cards.forEach(card => {
      card.style.color = 'white';
      card.style.backgroundColor = "black"
    });

  } else {
    document.body.classList.remove('dark-mode');
    btns.forEach(btn => {
      btn.style.color = 'black';
    });
    cards.forEach(card => {
      card.style.color = 'black';
      card.style.backgroundColor = "white"
    });
  }
}