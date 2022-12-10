import {Module} from '../core/module'

export class SoundModule extends Module {
    trigger() {
        const soundItem = document.querySelector('[data-type="sounds"]')
        soundItem.addEventListener('click', () => {
            
        })

        throw new Error(`Trigger method should be implemented in module "${this.type}"`)
      }
}