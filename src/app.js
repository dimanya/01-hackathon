import './styles.css'
import { Menu } from './core/menu'
import { SoundModule } from './modules/sound.module'

const contextMenu = new Menu('.menu')

const soundModule = new SoundModule('sounds', 'Случайные звуки')
contextMenu.add(soundModule.toHTML())
soundModule.trigger()



