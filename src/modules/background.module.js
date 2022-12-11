import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.type = type;
	}
	trigger(item) {
		item.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
		setTimeout(() => {
			item.style.background = 'transparent';
			document.querySelector(`[data-type="${this.type}"]`).classList.remove('active');
		}, "3000");
		
	}
}