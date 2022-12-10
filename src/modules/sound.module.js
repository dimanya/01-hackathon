import {Module} from '../core/module'
import { random } from '../utils';
import AUDIO1 from '../assets/1.mp3'
import AUDIO2 from '../assets/2.mp3'
import AUDIO3 from '../assets/3.mp3'
import AUDIO4 from '../assets/4.mp3'
import AUDIO5 from '../assets/5.mp3'

export class SoundModule extends Module {
    trigger() {
        const soundItem = document.querySelector('[data-type="sounds"]')
        soundItem.addEventListener('click', () => {

            const audioArr = [AUDIO1, AUDIO2, AUDIO3, AUDIO4, AUDIO5]
            
            const randomSoundNumber = random(0, 4)
            
            const audio = new Audio(audioArr[randomSoundNumber])
            audio.play()

        })

        throw new Error(`Trigger method should be implemented in module "${this.type}"`)
      }
}