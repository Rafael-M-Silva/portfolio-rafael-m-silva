const dropDown = (event) => {
  const btn = event.target;
  btn.classList.toggle("btn-rotate");
};

const allBtn = document.querySelectorAll(".btn-slide-down");
allBtn.forEach((btn) => {
  btn.addEventListener("click", dropDown);
});
