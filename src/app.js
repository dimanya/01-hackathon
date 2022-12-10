import './styles.css'

import { Menu } from './core/menu'
import { Module } from './core/module'
import { BackgroundModule } from './modules/background.module'

const contextMenu = new Menu('.menu');

let module = new Module('clicks', 'Считать клики за 3 секунды');
contextMenu.add(module.toHTML());

module = new Module('figure', 'Создать фигуру');
contextMenu.add(module.toHTML());

module = new Module('background', 'Поменять цвет');
contextMenu.add(module.toHTML());

module = new Module('message', 'Вызвать сообщение');
contextMenu.add(module.toHTML());

module = new Module('timer', 'Таймер');
contextMenu.add(module.toHTML());

const bodyElement = document.body;
bodyElement.addEventListener('click', event => {
  if (event.target.classList.contains('menu-item')) {
	 if (event.target.dataset.type === 'background') {
		 let callModule = new BackgroundModule(event.target.dataset.type, event.target.textContent);
		 callModule.trigger(bodyElement);
	 }
 }
});


