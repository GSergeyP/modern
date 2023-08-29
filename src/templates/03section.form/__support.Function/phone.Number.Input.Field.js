// Поле ввода номера телефона

const setCursorPosition = (pos, e) => {
  e.setSelectionRange(pos, pos);
}

function mask() {
  let matrix = this.placeholder,
      i = 0,
      val = this.value.replace(/\D/g, "");
 
  matrix = matrix.replace(/[X\d]/g, (a) => {
    return val.charAt(i++) || "X"
  });

  this.value = matrix;

  i = matrix.split('X')[0].length-1

  if (i < matrix.length && matrix != this.placeholder) i++ 
  else i = matrix.indexOf("X");

  setCursorPosition(i, this)
}

export { mask, setCursorPosition }