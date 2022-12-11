import "./styles.css";

import { Menu } from "./core/menu";
import { Module } from "./core/module";
import { ClicksModule } from "./modules/clicks.module";

const contextMenu = new Menu(".menu");

let module = new ClicksModule("clicks", "Считать клики за 3 секунды");
contextMenu.add(module.toHTML());
module.displayElement = document.getElementById("ClickCount");
module.trigger();

module = new Module("figure", "Создать фигуру");
contextMenu.add(module.toHTML());

module = new Module("color", "Поменять цвет");
contextMenu.add(module.toHTML());

module = new Module("message", "Вызвать сообщение");
contextMenu.add(module.toHTML());

module = new Module("timer", "Таймер");
contextMenu.add(module.toHTML());
