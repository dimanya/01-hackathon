import { Module } from "../core/module";

// рандомное число
const getRandomNumber = function (min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
};

// размер экрана (без рабочих полей) пользователя
const customScreenWidth = window.screen.availWidth;
const customScreenHeight = window.screen.availHeight;
console.log(customScreenWidth, customScreenHeight);

// создать фигуру
function createRandomFigure() {
  const newFigure = document.createElement("div");
  newFigure.className = "figure";
  const randomWidth = getRandomNumber(0, 300);
  const randomHeight = getRandomNumber(0, 300);
  const randomMarginTop = getRandomNumber(0, customScreenHeight - randomHeight);
  const randomMarginLeft = getRandomNumber(0, customScreenWidth - randomWidth);
  newFigure.style.width = `${randomWidth}px`;
  newFigure.style.height = `${randomHeight}px`;
  newFigure.style.background = `rgb(${getRandomNumber(
    0,
    250
  )}, ${getRandomNumber(0, 250)}, ${getRandomNumber(0, 250)})`;
  newFigure.style.marginTop = `${randomMarginTop}px`;
  newFigure.style.marginLeft = `${randomMarginLeft}px`;
  document.body.append(newFigure);
}

export class FirugeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const figureItem = document.querySelector(`[data-type="${this.type}"]`);
    figureItem.addEventListener("click", () => {
      createRandomFigure();
    });
    // надо ли ещё раз throw new Error прописывать?
  }
}

// добавить счётчик на исчезновение, instanceof Module в add не забыть
