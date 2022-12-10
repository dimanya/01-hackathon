import {Menu} from './core/menu';
import { Module } from './core/module';
import { BackgroundModule } from './modules/background.module';

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		
		document.body.addEventListener('contextmenu', event => {
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
		this.el.classList.add('open');
		this.el.style = `left: ${left}px; top: ${top}px;`;
	}
	
	close() {
		this.el.classList.remove('open');
	}
	
	add(item) {
		this.el.innerHTML += item;
	}
}

let newMenu = new ContextMenu('.menu');

let module = new Module('clicks', 'Считать клики за 3 секунды');
newMenu.add(module.toHTML());

module = new Module('figure', 'Создать фигуру');
newMenu.add(module.toHTML());

module = new Module('background', 'Поменять цвет');
newMenu.add(module.toHTML());

module = new Module('message', 'Вызвать сообщение');
newMenu.add(module.toHTML());

module = new Module('timer', 'Таймер');
newMenu.add(module.toHTML());

const bodyElement = document.body;
bodyElement.addEventListener('click', event => {
	if (event.target.classList.contains('menu-item')) {
	 if (event.target.dataset.type === 'background') {
			let callModule = new BackgroundModule(event.target.dataset.type, event.target.textContent);
			callModule.trigger(bodyElement);
		}
	}
});