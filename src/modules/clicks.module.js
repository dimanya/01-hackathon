import { Module } from "../core/module";
import { ContextMenu } from "../menu";
//дочерний класс от модуля
export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.clickCount = 0;
    this.displayElement = null;
    this.isTriggered = false;
    this.bodyElement = null;
    this.eventListener = null;
  }
//старт функции класса
  trigger(bodyElement) {
    if (!this.isTriggered) {
      this.bodyElement = bodyElement;
      this.isTriggered = true;
      let self = this; //так как вск проходит асинхронно сохраняем this в локальную переменную 
      self.periodicCounterReset(self, 0);
      this.eventListener = function () {
        console.log("CLICK");
        self.clickCount++;
      };
      bodyElement.addEventListener("click", this.eventListener);
    }
  }
//вывод сообщения по проверке
  periodicCounterReset(self, phase) {
    console.log(`Количество кликов: ${self.clickCount}`);
    if (self.displayElement != null) {//1проверка 
      if (self.clickCount > 0) {//2 проверка
        self.displayElement.textContent =
          "Вы кликнули " + self.clickCount + " раз за три секунды";
        self.displayElement.hidden = false;//если все ок, отображаем сообщение в div елементе
      } else {
        self.displayElement.textContent = "";
        self.displayElement.hidden = true;// иначе скрываем
      }
    }
    //счетчик
    self.clickCount = 0;

    let delayInMs = 0;
    if (phase === 0) {
      delayInMs = 5000;
    } else {
      delayInMs = 2000;
    }

    console.log("delay " + delayInMs);
    if (phase < 2) {
      
      setTimeout(function () {
        self.periodicCounterReset(self, phase + 1);
      }, delayInMs);
    } else {
      self.bodyElement.removeEventListener("click", self.eventListener);
      self.displayElement.hidden = true;
    }
  }
}
