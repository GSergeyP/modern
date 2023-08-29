import { logoIconData, linkData, iconData, pData } from '../footer.Const';
import Icons from '../../../components/icons';

const Tablet = () => {
  return (
    `<div class="footer-block">`+
      `<div class="footer-block__top">`+
        logoIconData.map((item) => (
          Icons(item.class, item.title)
        )).join("")+
        `<div id="footer-block__link">`+
          linkData.map((item) => (
            `<a class="${item.class}" href="#">${item.title}</a>`
          )).join("")+
        `</div>`+
        `<p class="footer-block__top-p">Copyright © 2015 DreamCreditMaker.com. </p>`+
        `<p class="footer-block__top-p">All Rights Reserved.</p>`+
        `<h2 class="footer-block__top-h2">FOLLOW US:</h2>`+
        iconData.map((item) => (
          Icons(item.class, item.title)
        )).join("")+
      `</div>`+
      `<div class="footer-block__bottom">`+
        pData.map((item) => (
          `<p class="${item.class}">${item.title}</p>`
        )).join("")+
      `</div>`+
    `</div>`
  )
}

export { Tablet };