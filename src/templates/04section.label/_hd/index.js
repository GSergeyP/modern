import { imgData } from '../label.Const';
import Icons from '../../../components/icons';

const Hd = () => {
  return (
    `<div class="label-block">`+
      `<div class="label-block__top">`+
        Icons('label-block__top-icon', 'bigMail')+
      `</div>`+
      `<div class="label-block__bottom">`+
        `<h2 class="label-block__bottom-h2">CONTACT INFORMATION OF BANKS:</h2>`+
        `<div class="label-block__bottom-container">`+
          imgData.map((item) => (
            `<img src="${require(`../../../../src/static/img/general/04section.label/${item.title}`)}" class="${item.class}"/>`
          )).join("")+
       `</div>`+
      `</div>`+
    `</div>`
  )
}

export { Hd };