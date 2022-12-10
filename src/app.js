import "./styles.css";

import { Menu } from "./core/menu";
import { Module } from "./core/module";
import { FirugeModule } from "./modules/figure.module";

import { async } from "regenerator-runtime";

const contextMenu = new Menu(".menu");

// let module = new Module("clicks", "Считать клики за 3 секунды");
// contextMenu.add(module.toHTML());

let moduleFigure = new FirugeModule("figure", "Создать фигуру");
contextMenu.add(moduleFigure.toHTML());
moduleFigure.trigger();

// module = new Module("color", "Поменять цвет");
// contextMenu.add(module.toHTML());

// module = new Module("message", "Вызвать сообщение");
// contextMenu.add(module.toHTML());

// module = new Module("timer", "Таймер");
// contextMenu.add(module.toHTML());
