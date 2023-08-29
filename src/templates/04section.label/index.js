import DevicesDefine from '../../assist/devices.Define';
import * as DevicesMount from './devices.Mount';

const mount = () => {
  document.getElementById('label').innerHTML = DevicesMount[ DevicesDefine() ]();
}

window.addEventListener('resize', mount);
document.addEventListener('DOMContentLoaded', mount);

