import { Module } from "../core/module";
import { ContextMenu } from "../menu";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger(item) {
    item.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )})`;
    const contextMenu = new ContextMenu(".menu");
    contextMenu.close();
  }
}
