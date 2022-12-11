import { Menu } from './core/menu';
import { Module } from './core/module';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { SoundModule } from './modules/sound.module';

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

let module = new Module('clicks', 'Считать клики за 5 секунды');
newMenu.add(module.toHTML());

module = new Module('figure', 'Создать фигуру');
newMenu.add(module.toHTML());

module = new Module('background', 'Поменять цвет');
newMenu.add(module.toHTML());

module = new Module('message', 'Вызвать сообщение');
newMenu.add(module.toHTML());

module = new Module('timer', 'Таймер');
newMenu.add(module.toHTML());

module = new Module('sounds', 'Случайный звук');
newMenu.add(module.toHTML());

const bodyElement = document.body;
bodyElement.addEventListener('click', event => {
	if (event.target.classList.contains('menu-item')) {

		let callModule;
		let eventType = event.target.dataset.type;
		let eventText = event.target.textContent;

		if (eventType === 'background') {
			callModule = new BackgroundModule(eventType, eventText);
			callModule.trigger(bodyElement);
		} else if (eventType === 'clicks') {
			console.log('clicks');
			callModule = new ClicksModule(eventType, eventText);
			callModule.trigger(bodyElement);
		} else if (eventType === 'sounds') {
			console.log('sounds');
			callModule = new SoundModule(eventType, eventText);
			callModule.trigger();
		} //else if (eventType === 'timer') {
		//	console.log(bodyElement);
		//	callModule = new TimerModule(eventType, eventText);
		//	callModule.trigger(bodyElement);
		//}
	
	}
});