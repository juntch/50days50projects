const NUMBER_OF_CARDS = 17;
const imageData = {
  title: 'Image ',
  desc:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};

const container = document.querySelector('.container');

for (let x = 0; x < NUMBER_OF_CARDS; x++) {
  const card = document.createElement('div');
  card.style.backgroundImage = `url('https://source.unsplash.com/collection/${Math.ceil(
    Math.random() * 100
  )}/${Math.ceil(Math.random() * 10)}')`;
  card.classList.add('panel');
  if (x == 7) {
    card.classList.add('active');
  }
  container.appendChild(card);
}

const panels = document.querySelectorAll('.panel');
const activePanel = document.querySelector('.panel.active');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    activePanel.style.backgroundImage = panel.style.backgroundImage;
  });
});

const imageCaption = document.createElement('div');
imageCaption.classList.add('panel-caption');
imageCaption.innerHTML = `<h1>${imageData.title}</h1><p>${imageData.desc}</p>`;
activePanel.appendChild(imageCaption);
