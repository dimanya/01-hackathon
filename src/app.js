import './styles.css'

import { Menu } from './core/menu'
//import { Module } from './core/module'
import { TimerModule } from './modules/timer.modules'

const contextMenu = new Menu('.menu');

const timerModule = new TimerModule('timer', 'Таймер');
contextMenu.add(timerModule.toHTML());
timerModule.trigger();

/* let module = new Module('clicks', 'Считать клики за 3 секунды');
contextMenu.add(module.toHTML());

module = new Module('figure', 'Создать фигуру');
contextMenu.add(module.toHTML());

module = new Module('color', 'Поменять цвет');
contextMenu.add(module.toHTML());

module = new Module('message', 'Вызвать сообщение');
contextMenu.add(module.toHTML()); */

/* module = new Module('timer', 'Таймер');
contextMenu.add(module.toHTML()); */



