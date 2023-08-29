import { logoIconData, linkData, iconData, pData } from '../footer.Const';
import Icons from '../../../components/icons';

const Hd = () => {
  return (
    `<div class="footer-block">`+
      `<div class="footer-block__top">`+
        logoIconData.map((item) => (
          Icons(item.class, item.title)
        )).join("")+
        linkData.map((item) => (
          `<a class="${item.class}" href="#">${item.title}</a>`
        )).join("")+
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

export { Hd };