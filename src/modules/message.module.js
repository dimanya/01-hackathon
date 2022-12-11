import {Module} from '../core/module'

export class Message extends Module {
	constructor(type, text) {
		super(type, text);
		this.type = type;
	}
	trigger(item) {
		const popup = document.createElement('div');
		popup.className = 'popup';
		const popupBody = document.createElement('div');
		popupBody.className = 'popup__body'
		const popupContent = document.createElement('div');
		popupContent.className = 'popup__content';
		popupContent.textContent = 'Message text will be deleted after 3 seconds';
		popupBody.append(popupContent);
		popup.append(popupBody)
		item.append(popup);
		setTimeout(() => {
			popup.remove();
			document.querySelector(`[data-type="${this.type}"]`).classList.remove('active');
		}, "3000")
	}
}