import { Module } from '../core/module';
import { ContextMenu } from '../menu';
//import {random} from '../utils'

//export class ClicksModule extends Module {
//	constructor(type, text) {
//		super(type, text);
//	}
//	trigger(body) {
//		//let clickModlue = new ContextMenu();
//		//clickModlue.close();
//		let counter = 0;
//		const counterNumber = document.createElement('div');
//		counterNumber.textContent = counter;
//		counterNumber.style = `
//		position: absolute;
//		left: 35%;
//		top: 35%;
//		font-size: 40px;
//		color: #000;
//		text-shadow: 1px 1px 5px #fff;`;

//		let timeLeft = 5;
//		const timer = document.createElement('div');
//		timer.style = `
//		position: absolute;
//		left: 10%;
//		top: 10%;
//		font-size: 25px;
//		color: #000;
//		text-shadow: 1px 1px 5px #fff;`;

//		body.append(counterNumber, timer);

//		let timerId = setInterval(countdown, 1000);
//		function increaseCounter() {
//			counterNumber.textContent = ++counter;
//		}

//		function countdown() {
//			if (timeLeft == 0) {
//				timer.innerHTML = timeLeft + ' seconds remaining';
//				timeLeft--;
//				clearTimeout(timerId);
//				body.removeEventListener('click', increaseCounter);
//			} else {
//				timer.innerHTML = timeLeft + ' seconds remaining';
//				timeLeft--;
//				body.addEventListener('click', event => { increaseCounter() });
//			}
//		}


//	}
//}

export class ClicksModule extends Module {
	constructor(type, text) {
	  super(type, text);
	  this.clickCount = 0;
	  this.displayElement = null;
	}
	//	constructor(type, text) {
	//	super(type, text);
	//}
	trigger() {
	  let self = this;
	  self.periodicCounterReset(self);
	  document.addEventListener("click", function () {
		 self.clickCount++;
	  });
	}
 
	periodicCounterReset(self) {
	  console.log(`Количество кликов: ${self.clickCount}`);
	  if (self.displayElement != null) {
		 self.displayElement.textContent = self.clickCount;
	  }
	  self.clickCount = 0;
	  setTimeout(function () {
		 self.periodicCounterReset(self);
	  }, 3000);
	}
 }