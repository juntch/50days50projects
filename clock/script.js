const updateInterval = 1000;
const handleHour = document.querySelector('.hand-hour');
const handleMinute = document.querySelector('.hand-minute');
const handleSecond = document.querySelector('.hand-second');

function getTime() {
  const dateNow = new Date();
  const hours = ((dateNow.getHours() + 11) % 12) + 1;
  const minutes = dateNow.getMinutes();
  const seconds = dateNow.getSeconds();

  // calc rotation deg
  const rotationHour = hours * 30; // 1/12 x 360deg / 60min => 30deg/h
  const rotationMinute = minutes * 6; // 360deg / 60 min => 6deg/min
  const rotationSecond = seconds * 6; // 360deg / 60 sec => 6deg/min

  updateClock(rotationHour, rotationMinute, rotationSecond);

  console.log(`hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`);
}

function updateClock(rotationHours, rotationMinutes, rotationSeconds) {
  handleHour.style.transform = `rotate(${rotationHours}deg)`;
  handleMinute.style.transform = `rotate(${rotationMinutes}deg)`;
  handleSecond.style.transform = `rotate(${rotationSeconds}deg)`;
}

setInterval(getTime, updateInterval);
