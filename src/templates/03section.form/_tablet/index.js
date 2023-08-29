import { formData, pData } from '../form.Const';
import Icons from '../../../components/icons';

const Tablet = () => {
  return (
    `<div class="form-block">`+
      `<h2 class="form-block__h2">WRITE US</h2>`+
      `<form class="form-block__form">`+
        formData.map((items) => (
          items.choice
          ? `<span id="form-block__span" class="form-block__span"></span>`+
            Icons('form-block__icon', 'arrow')+
            `<label class="form-block__label">${items.title}</label>`+
            `<ul class="${items.class}">`+
              items.choice.map((item) => (
                `<li class="${item.class}" onclick="goDoSomething('${item.title}');">${item.title}</li>`
              )).join("")+
            `</ul>`
          : items.name !== 'question'
            ? items.name !== 'phoneNumber'
              ? `<label for="${items.name}" class="${items.classLabel}">${items.title}</label>`+
                `<input type="text" class="${items.classInput}" name="${items.name}" autocomplete="off" />`
              : `<label for="${items.name}" class="${items.classLabel}">${items.title}</label>`+
                `<input type="text" class="${items.classInput}" name="${items.name}" placeholder="X-XXX-XXX-XXXX" autocomplete="off" />`
            : `<label for="${items.name}" class="${items.classLabel}">${items.title}</label>`+
              `<textarea class="${items.classInput}" name="${items.name}"></textarea>`
        )).join("")+
        `<label class="form-block__signature">* required fields</label>`+
        `<input type="button" class="form-block__button" value="SEND" />`+
      `</form>`+
      pData.map((item) => (
        `<p class="${item.class}">${item.title}</p>`
      )).join("")+
    `</div>`
  )
}

export { Tablet };