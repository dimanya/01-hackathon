import {Module} from '../core/module'

export class ClicksModule extends Module {
  trigger() {
    
  }
}
// функция для счета количества кликов пользователя
function startClickTracking() {
  // счетчик кликов
  let clickCount = 0;

  // начинаем считать клики
  document.addEventListener('click', function() {
    clickCount++;
  });

  // ждем 5 секунд
  setTimeout(function() {
    // выводим статистику о количестве кликов
    console.log(`Количество кликов: ${clickCount}`);
  }, 5000);
}