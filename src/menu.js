import { Menu } from "./core/menu";
import { Module } from "./core/module";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);

    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      let x = event.offsetX;
      let y = event.offsetY;

      let windowWidth = window.innerWidth;
      let menuWidth = this.el.offsetWidth;
      let windowHeight = window.innerHeight;
      let menuHeight = this.el.offsetHeight;

      x = x > windowWidth - menuWidth ? windowWidth - menuWidth : x;
      y = y > windowHeight - menuHeight ? windowHeight - menuHeight : y;

      this.open(x, y);
    });
  }

  open(left, top) {
    this.el.classList.add("open");
    this.el.style = `left: ${left}px; top: ${top}px;`;
  }

  close() {
    this.el.classList.remove("open");
  }

  add(item) {
    this.el.innerHTML += item;
  }
}

let newMenu = new ContextMenu(".menu");

const myClicksModule = new ClicksModule("clicks", "Считать клики за 3 секунды");
newMenu.add(myClicksModule.toHTML());
const clickHeader = document.createElement("div");
document.body.append(clickHeader);
myClicksModule.displayElement = clickHeader;

//myClicksModule.displayElement=document.querySelector(".clickfick");

module = new Module("figure", "Создать фигуру");
newMenu.add(module.toHTML());

module = new Module("background", "Поменять цвет");
newMenu.add(module.toHTML());

module = new Module("message", "Вызвать сообщение");
newMenu.add(module.toHTML());

module = new Module("timer", "Таймер");
newMenu.add(module.toHTML());

const bodyElement = document.body;
bodyElement.addEventListener("click", (event) => {
	newMenu.close();
  if (event.target.classList.contains("menu-item")) {
    let callModule;
    let eventType = event.target.dataset.type;
    let eventText = event.target.textContent;

    if (eventType === "background") {
      callModule = new BackgroundModule(eventType, eventText);
      callModule.trigger(bodyElement);
    } else if (eventType === "clicks") {
      console.log("clicks");
      myClicksModule.trigger(bodyElement);
    } //else if (eventType === 'timer') {
    //	console.log(bodyElement);
    //	callModule = new TimerModule(eventType, eventText);
    //	callModule.trigger(bodyElement);
    //}
  }
});

