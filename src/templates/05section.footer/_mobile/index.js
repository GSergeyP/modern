import { logoIconData, linkData, iconData, pData } from '../footer.Const';
import Icons from '../../../components/icons';

const Mobile = () => {
  return (
    `<div class="footer-block">`+
      `<div class="footer-block__top">`+
        logoIconData.map((item) => (
          Icons(item.class, item.title)
        )).join("")+
        Icons('footer-block__top-icon7', 'logoLine')+
        Icons('footer-block__top-icon8', 'logoText3')+
      `</div>`+
      `<div class="footer-block__center">`+
        `<div id="footer-block__link">`+
          linkData.map((item) => (
            `<a class="${item.class}" href="#">${item.title}</a>`
          )).join("")+
        `</div>`+
        `<h2 class="footer-block__center-h2">FOLLOW US:</h2>`+
        iconData.map((item) => (
          Icons(item.class, item.title)
        )).join("")+
        `<p class="footer-block__top-p">Copyright © 2015 DreamCreditMaker.com. </p>`+
        `<p class="footer-block__top-p">All Rights Reserved.</p>`+
      `</div>`+
      `<div class="footer-block__bottom">`+
        pData.map((item) => (
          `<p class="${item.class}">${item.title}</p>`
        )).join("")+
      `</div>`+
    `</div>`
  )
}

export { Mobile };