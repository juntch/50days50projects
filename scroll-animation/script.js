const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // on page request: display the boxes that are already in the viewport.

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4; // => 80% height of viewport

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('box-visible');
    } else {
      box.classList.remove('box-visible');
    }
  });
}
