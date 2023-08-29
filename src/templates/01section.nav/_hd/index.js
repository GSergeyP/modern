import { navIcon1440Data, navButtonData } from '../nav.Const';
import Icons from '../../../components/icons';

const Hd = () => {
  return (
    `<div class="nav-block">`+
      navIcon1440Data.map((item) => (
        Icons(item.class, item.title)
      )).join("")+
      navButtonData.map((item) => (
        `<button class="${item.class}">`+
          item.title+
          Icons(item.classIcon, item.titleIcon)+
        `</button>`
      )).join("")+
      `<div class="nav-block__input" >`+
        `<input type="text" class="nav-block__input-input" />`+
        Icons('nav-block__item8', 'loupe')+
      `</div>`+
    `</div>`
  )
}

export { Hd };