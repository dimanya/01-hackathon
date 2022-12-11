export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function closeContextMenu() {
	document.querySelector('.menu').classList.remove('open');
}