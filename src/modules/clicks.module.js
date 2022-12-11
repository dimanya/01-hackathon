import { Module } from "../core/module";
import { ContextMenu } from "../menu";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clickCount = 0;
    this.displayElement = null;
    this.isTriggered = false;
  }

  trigger(bodyElement) {
    if (!this.isTriggered) {
      this.isTriggered = true;
      let self = this;
      self.periodicCounterReset(self);
      bodyElement.addEventListener("click", function () {
        self.clickCount++;
      });
    }
  }

  periodicCounterReset(self) {
    console.log(`Количество кликов: ${self.clickCount}`);
    if (self.displayElement != null) {
      if (self.clickCount > 0) {
        self.displayElement.textContent = "Вы кликнули " +self.clickCount + " раз за три секунды";
      } else {
        self.displayElement.textContent = "";
      }
    }
    self.clickCount = 0;
    setTimeout(function () {
      self.periodicCounterReset(self);
    }, 3000);
  }
}
