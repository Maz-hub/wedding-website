// Countdown to wedding start time (Italy/Switzerland summer time is usually UTC+02:00)
const TARGET_DATE = new Date("2026-07-04T16:30:00+02:00");

const daysEl = document.getElementById("cd-days");
const hoursEl = document.getElementById("cd-hours");
const minutesEl = document.getElementById("cd-minutes");

function pad2(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  let diff = TARGET_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    return;
  }

  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  daysEl.textContent = String(days);
  hoursEl.textContent = pad2(hours);
  minutesEl.textContent = pad2(minutes);
}

updateCountdown();
setInterval(updateCountdown, 1000);
