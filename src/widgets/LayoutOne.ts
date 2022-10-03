import img1 from '/public/mahsa-2.jpg'
import img2 from '/public/mahsa-3.jpg'
import img3 from '/public/mahsa-4.jpg'

import BaseLayout from './BaseLayout'

export default class LayoutOne extends BaseLayout {
    name = 'layout1'

    images = [
        img1,
        img2,
        img3
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