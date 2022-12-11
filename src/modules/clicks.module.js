import { Module } from "../core/module";

// функция для счета количества кликов пользователя
export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clickCount = 0;
    this.displayElement = null;
  }
  trigger() {
    let self = this;
    self.periodicCounterReset(self);
    document.addEventListener("click", function () {
      self.clickCount++;
    });
  }

  periodicCounterReset(self) {
    console.log(`Количество кликов: ${self.clickCount}`);
    if (self.displayElement != null) {
      self.displayElement.textContent = self.clickCount;
    }
    self.clickCount = 0;
    setTimeout(function () {
      self.periodicCounterReset(self);
    }, 3000);
  }
}
