import { Module } from "../core/module";

// функция для счета количества кликов пользователя
let clickCount = 0;
export class ClicksModule extends Module {
  trigger() {
    resetTimer();
    document.addEventListener("click", function () {
      // счетчик кликов
      clickCount++;
    });
  }
}
function resetTimer() {
  console.log(`Количество кликов: ${clickCount}`);
  clickCount = 0;
  setTimeout(resetTimer, 3000);
}
