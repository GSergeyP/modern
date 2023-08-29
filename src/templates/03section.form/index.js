import DevicesDefine from '../../assist/devices.Define';
import * as DevicesMount from './devices.Mount';
import { mask, setCursorPosition} from './__support.Function/phone.Number.Input.Field';
import { dropList } from './__support.Function/drop.List.Theme.Selection';
import { formValidation } from './__support.Function/form.Validation';
import { modal } from './__modal';


let subject;

const mount = () => {
  document.getElementById('form').innerHTML = DevicesMount[ DevicesDefine() ]();
}

window.addEventListener('resize', mount(subject));
document.addEventListener('DOMContentLoaded', () => {
  const formBlockSpan = document.querySelector(".form-block__span"),
        phoneNumber = document.querySelector('input[name="phoneNumber"]'), 
        formBlockButton= document.querySelector(".form-block__button");

  mount;
  dropList(formBlockSpan, subject);
  formValidation(formBlockButton);

  phoneNumber.addEventListener("input", mask, false);
  setCursorPosition(0, phoneNumber);

  //modal(formBlockSpan);
});