import { Module } from "../core/module";
import { random } from "../utils";

// размер экрана (без рабочих полей) пользователя
const customScreenWidth = window.innerWidth;
const customScreenHeight = window.innerHeight;

const typesOfFigure = ["circle", "square", "rectangle"];

// создать фигуру
function createRandomFigure() {
  const getRandomIndex = random(0, typesOfFigure.length - 1);
  const randomFigure = typesOfFigure[getRandomIndex];
  const newFigure = document.createElement("div");
  newFigure.className = "figure";
  const randomValue = random(50, 300);
  const randomWidth = random(50, 300);
  const randomHeight = random(50, 300);
  const randomTop = random(1, customScreenHeight - randomHeight);
  const randomLeft = random(1, customScreenWidth - randomWidth);
  if (randomFigure === "circle") {
    newFigure.style.width = `${randomValue}px`;
    newFigure.style.height = `${randomValue}px`;
    newFigure.style.borderRadius = "300px";
  } else if (randomFigure === "square") {
    newFigure.style.width = `${randomValue}px`;
    newFigure.style.height = `${randomValue}px`;
  } else if (randomFigure === "rectangle") {
    newFigure.style.width = `${randomWidth}px`;
    newFigure.style.height = `${randomHeight}px`;
  }
  newFigure.style.background = `rgb(${random(0, 250)}, ${random(
    0,
    250
  )}, ${random(0, 250)})`;
  newFigure.style.top = `${randomTop}px`;
  newFigure.style.left = `${randomLeft}px`;
  document.body.append(newFigure);
}

export class FigureModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const figure = document.querySelector(".figure");
    if (figure) {
      figure.remove();
    }
    createRandomFigure();
  }
}