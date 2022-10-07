import img2 from '/src/assets/images/mahsa-2.jpg'
import img3 from '/src/assets/images/mahsa-3.jpg'
import img4 from '/src/assets/images/mahsa-4.jpg'

import BaseLayout from './BaseLayout'

export default class LayoutOne extends BaseLayout {
    name = 'layout1'

    images = [
        img2,
        img3,
        img4
    ]

    get template() {
        return `<div class="widget ${this.name}">
            <div class="widget-image">
                <img src="${this.images[this.imageId]}" alt="Mahsa Amini" title="We Are Mahsa Amini" />
            </div>
            <div class="widget-text">
                <div class="widget-title">
                    <span>Woman, </span>
                    <span>Life, </span>
                    <span>Freedom</span>
                </div>

                <p>Stand with #MahsaAminio</p>

                <a role="button" class="widget-action">
                    See what you can do 
                    <span>></span>
                </a>
            </div>
        </div>`
    }
}