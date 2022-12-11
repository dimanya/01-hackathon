import { Menu } from './core/menu';
import { Module } from './core/module';
import { closeContextMenu } from './utils';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { Message } from './modules/message.module';
import { TimerModule } from './modules/timer.module';
import { SoundModule } from './modules/sound.module';
import { FigureModule } from './modules/figure.module';

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

const clickHeader = document.createElement("div");
clickHeader.className = 'click__header';
clickHeader.hidden = true;
document.body.append(clickHeader);

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

module = new Module('sound', 'Случайный звук');
newMenu.add(module.toHTML());

const bodyElement = document.body;
bodyElement.addEventListener('click', event => {
	if (event.target.classList.contains('menu-item')) {

		let callModule;
		let eventType = event.target.dataset.type;
		let eventText = event.target.textContent;

		if (eventType === 'background') {
			closeContextMenu();
			callModule = new BackgroundModule(eventType, eventText);
			callModule.trigger(bodyElement);
		} else if (eventType === 'clicks') {
			closeContextMenu();
			callModule = new ClicksModule(eventType, eventText);
			callModule.trigger(bodyElement);
			callModule.displayElement = clickHeader;
		} else if (eventType === 'message') {
			if (!event.target.classList.contains('active')) {
				event.target.classList.add('active');
				closeContextMenu();
				callModule = new Message(eventType, eventText);
				callModule.trigger(bodyElement);
			}
		} else if (eventType === 'timer') {
			if (!event.target.classList.contains('active')) {
				event.target.classList.add('active');
				closeContextMenu();
				callModule = new TimerModule(eventType, eventText);
				callModule.trigger(bodyElement);
			}
		} else if (eventType === 'sound') {
			closeContextMenu();
			callModule = new SoundModule(eventType, eventText);
			callModule.trigger(bodyElement);
		} else if (eventType === 'figure') {
			closeContextMenu();
			callModule = new FigureModule(eventType, eventText);
			callModule.trigger(bodyElement);
		}
	}
});