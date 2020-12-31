const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('mouseenter', () => {
    removeActiveClasses(panels);
    panel.classList.add('active');
  });
});

function removeActiveClasses(element) {
  element.forEach((panel) => {
    panel.classList.remove('active');
  });
}
