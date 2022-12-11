import { Module } from "../core/module";

export class TimerModule extends Module {
  trigger() {
    const timerItem = document.querySelector('[data-type="timer"]');
    timerItem.addEventListener("click", () => {
      console.log("StartTimer");
      // начало модуля
      const timerHTML = document.querySelector(".timer");

      const createTimer = function (parent) {
        const timerHeader = document.createElement("span");
        timerHeader.className = "timer-header";
        timerHeader.innerText = "Таймер обратного отсчета";

        const inputTimer = document.createElement("input");
        inputTimer.type = "text";
        inputTimer.id = "input";
        inputTimer.placeholder = "время в секундах";

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

        parent.append(timerHeader, timerBox);
      };

      createTimer(timerHTML);

      const inputTime = document.querySelector("#input");
      let interval;

      inputTime.value = 0;

      document.querySelector("#start").addEventListener("click", () => {
        if (inputTime.value < 0) {
          inputTime.value = 0;
        }

        clearInterval(interval);
        interval = setInterval(calculateTime, 1000);
      });

      function calculateTime() {
        if (inputTime.value > 0) {
          inputTime.value--;
          if (inputTime.value < 0 || !Number(inputTime.value)) {
            inputTime.value = 0;
          }
        } else {
          // clearInterval(interval);
          timerHTML.remove();
        }
      }

      document.querySelector("#stop").addEventListener("click", () => {
        clearInterval(interval);
      });
      // конец модуля
    });

    throw new Error(
      `Trigger method should be implemented in module "${this.type}"`
    );
  }
}
