import './styles.css'
import { Menu } from './core/menu'
import { SoundModule } from './modules/sound.module'

const contextMenu = new Menu('.menu')

const soundModule = new SoundModule('sounds', 'Случайные звуки')
contextMenu.add(soundModule.toHTML())
/* import { Module } from './core/module'

; */

/* let module = new Module('clicks', 'Считать клики за 3 секунды');
contextMenu.add(module.toHTML());

module = new Module('figure', 'Создать фигуру');
contextMenu.add(module.toHTML());

module = new Module('color', 'Поменять цвет');
contextMenu.add(module.toHTML());

module = new Module('message', 'Вызвать сообщение');
contextMenu.add(module.toHTML());

module = new Module('timer', 'Таймер');
contextMenu.add(module.toHTML()); */



