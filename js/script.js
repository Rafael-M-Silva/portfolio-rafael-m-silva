const dropDown = (event) => {
  const btn = event.target;
  const faq = btn.closest('.faq'); // Encontrar o elemento .faq pai do botão clicado
  const description = faq.querySelector('p'); // Selecionar o <p> dentro do .faq
  description.classList.toggle('slide-down');
  btn.classList.toggle('btn-rotate')
}

const allBtn = document.querySelectorAll('.btn-slide-down')
allBtn.forEach(btn => {
  btn.addEventListener('click', dropDown)
});