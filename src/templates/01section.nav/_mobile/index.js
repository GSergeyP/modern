import { navIcon320Data } from '../nav.Const';
import Icons from '../../../components/icons';

const Mobile = () => {
  return (
    `<div class="nav-block">`+
      navIcon320Data.map((item) => (
        Icons(item.class, item.title)
      )).join("")+
    `</div>`
  )
}

export { Mobile };