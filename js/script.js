let [hrs, mins, secs, millisecs] = [0, 0, 0, 0];
let time = null;
let appendHrs = document.getElementById("hours");
let appendMins = document.getElementById("mins");
let appendSecs = document.getElementById("secs");
let appendMilliSecs = document.getElementById("millisecs");

const startButton = () => {
  if (time !== null) {
    clearInterval(time);
  }
  time = setInterval(run, 27);
};

const stopButton = () => {
  clearInterval(time);
};

const resetButton = () => {
  clearInterval(time);
  [hrs, mins, secs, millisecs] = [0, 0, 0, 0];
  appendHrs.innerHTML = "00";
  appendMins.innerHTML = "00";
  appendSecs.innerHTML = "00";
  appendMilliSecs.innerHTML = "000";
};

const run = () => {
  millisecs += 27;
  if (millisecs >= 1000) {
    millisecs = 0;
    secs++;
    if (secs >= 60) {
      secs = 0;
      mins++;
      if (mins >= 60) {
        mins = 0;
        hrs++;
      }
    }
  }
  appendHrs.innerHTML = hrs > 9 ? hrs : `0${hrs}`;
  appendMins.innerHTML = mins > 9 ? mins : `0${mins}`;
  appendSecs.innerHTML = secs > 9 ? secs : `0${secs}`;
  appendMilliSecs.innerHTML = millisecs < 10 ? `00${millisecs}` : (millisecs < 100 ? `0${millisecs}` : millisecs);
};
