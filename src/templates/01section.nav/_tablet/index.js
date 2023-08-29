import { navIcon768Data, navButtonData } from '../nav.Const';
import Icons from '../../../components/icons';

const Tablet = () => {
  return (
    `<div class="nav-block">`+
      navIcon768Data.map((item) => (
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

export { Tablet };