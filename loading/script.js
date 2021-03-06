const overlay = document.querySelector('.overlay');
const progressValue = document.querySelector('.progress-value');

const loadingInterval = setInterval(load, 30);

let percentageLoaded = 0;

function load() {
  percentageLoaded++;

  if (percentageLoaded > 99) {
    clearInterval(loadingInterval);
    overlay.style.opacity = 0;
    setTimeout(() => overlay.parentNode.removeChild(overlay), 1000);
  }
  progressValue.style.width = `${percentageLoaded}%`;
}
