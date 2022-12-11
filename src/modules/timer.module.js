import { Module } from "../core/module";

const createTimer = function (parent) {
  const divTimer = document.createElement("div");
  divTimer.className = "timer";

  const timerHeader = document.createElement("span");
  timerHeader.className = "timer-header";
  timerHeader.innerHTML = `Таймер обратного отсчета`;

  const inputTimer = document.createElement("input");
  inputTimer.type = "text";
  inputTimer.id = "input";
  inputTimer.placeholder = "число";

  const startButton = document.createElement("button");
  startButton.innerText = "Старт";
  startButton.id = "start";
  startButton.className = "button";

  const stopButton = document.createElement("button");
  stopButton.innerText = "Стоп";
  stopButton.id = "stop";
  stopButton.className = "button";

  const timerButtons = document.createElement("div");
  timerButtons.className = "buttons";

  const timerBox = document.createElement("div");
  timerBox.className = "timer-box";

  timerButtons.append(startButton, stopButton);
  timerBox.append(inputTimer, timerButtons);
  divTimer.append(timerHeader, timerBox);

  parent.append(divTimer);
};

function validation(num) {
  if (num < 0 || !Number(num)) {
    console.log("err");
    return false;
  }
  return true;
}

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
	 this.type = type;

  }
  trigger(item) {
	let parametr = this.type;

	createTimer(item);

    const inputTime = document.querySelector("#input");
    const removeTimer = document.querySelector(".timer");
    let interval;

    inputTime.value = 0;

    function calculateTime() {
      if (inputTime.value > 0) {
        inputTime.value--;
      } else {
        clearInterval(interval);
        removeTimer.remove();
		  document.querySelector(`[data-type="${parametr}"]`).classList.remove('active');
      }
    }
    const timerButtons = document.querySelector(".buttons");

    timerButtons.addEventListener("click", (event) => {
      const isButton = event.target.closest("button");

      if (isButton) {
        if (event.target.id === "stop") {
          clearInterval(interval);
        } else if (event.target.id === "start") {
          if (validation(inputTime.value)) {
            clearInterval(interval);
            interval = setInterval(calculateTime, 1000);
          }
        }
      }
    });
  }
}