import img1 from '/src/assets/images/mahsa-1.jpg'

export default class BaseLayout {
    name = 'base'
    imageId = 0;
    el!: HTMLDivElement | null;
    wrapperEl!:  HTMLDivElement | null

    get template() {
        return `<div class="widget">
            <div class="widget-image">
                <img src="${img1}" alt="Mahsa Amini" title="We Are Mahsa Amini" />
            </div>
            <div class="widget-text">
                <div class="widget-title">
                    <span>Woman, </span>
                    <span>Life, </span>
                    <span>Freedom</span>
                </div>

                <a role="button" class="widget-action">
                    Stand with #MahsaAmini 
                    <span>></span>
                </a>
            </div>
        </div>`
    }

    switchToMobile() {
        this.el?.classList.add('closed')
        this.wrapperEl?.parentElement?.classList.add('mobile-mode')

        const handleSwitchToMobile = () => {
            this.switchToDesktop()
            this.el?.removeEventListener('click', handleSwitchToMobile)
        }
        this.el?.addEventListener('click', handleSwitchToMobile)
    }

    switchToDesktop() {        
        this.el?.classList.remove('closed')
        this.wrapperEl?.parentElement?.classList.remove('mobile-mode')
    }


    render(parent: HTMLElement, options?: { imageId?: number }) {
        if(options?.imageId) {
            this.imageId = options?.imageId
        }
        const widgetTemplate = document.createElement('template')
        const wrapperEl = document.createElement('div')

        wrapperEl.id = this.name
        widgetTemplate.innerHTML = this.template

        if(widgetTemplate.content.firstChild) {
            wrapperEl.appendChild(widgetTemplate.content.firstChild)

            parent.appendChild(wrapperEl)

            parent?.addEventListener('closeClick', () => {
                this.switchToMobile()
            })
        }

        this.el = <HTMLDivElement>parent?.querySelector('.widget')
        this.wrapperEl = wrapperEl

        return wrapperEl;
    }


}