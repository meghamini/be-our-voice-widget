import BaseLayout from "./BaseLayout";

import imgWhite from "/src/assets/images/mahsa-topbanner-black.png";
import imgBlack from "/src/assets/images/mahsa-topbanner-white.png";

export default class LayoutOne extends BaseLayout {
  name = "layout2";

  get template() {
    return `<div class="widget ${this.name}">
            <div class="widget-text">
                <div class="widget-title">
                    <span>Woman, Life, Freedom</span>
                    <span> | </span>
                    <span>Stand with #MahsaAmini</span>
                    <img src="${imgWhite}" alt="Mahsa Amini" title="We Are Mahsa Amini" class="layout2-img-white" />
                    <img src="${imgBlack}" alt="Mahsa Amini" title="We Are Mahsa Amini" class="layout2-img-black" />
                </div>

                <a role="button" class="widget-action">
                    <span class="action-long-text">See what you can do</span>
                    <span class="action-short-text">More</span>
                    <span class="action-arrow">></span>
                </a>
            </div>
        </div>`;
  }
}
