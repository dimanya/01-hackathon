export class Menu {
	constructor(selector) {
	 this.el = document.querySelector(selector)
 
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
	  document.body.addEventListener('click', event => {
		  if (event.target.offsetParent !== this.el) {
			this.close();
		 }
	  })
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
 