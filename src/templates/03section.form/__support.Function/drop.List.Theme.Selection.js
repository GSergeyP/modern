const dropList = (formBlockSpan, subject) => {

  // Выподающий список///////////////////////////////////////////////////////////////
  formBlockSpan.addEventListener('click', (e)=> {
    const formBlockUl = document.querySelector(".form-block__ul"),
          formBlockIcon = document.querySelector(".form-block__icon");

    formBlockUl.classList.toggle('show');
    formBlockIcon.classList.toggle('show');
  });
  
  window.addEventListener("click", (event) => {// Закрываем выподающий список, если пользователь щелкнет за его пределами.
    const formBlockUl = document.querySelector(".form-block__ul"),
          formBlockIcon = document.querySelector(".form-block__icon");

    if (!event.target.matches(".form-block__span")) {
      formBlockUl.classList.remove("show");
      formBlockIcon.classList.remove("show");
    }
  });
  
  // Окрашивание звездочки///////////////////////////////////////////////////////////////
  const formSlockLabel = document.querySelectorAll(".form-block__label");
  for (let item of formSlockLabel) {
    item.innerHTML = item.innerHTML.replace('*', '<span style="color: red;">*</span>');
  };

  // Выбор пункта. Выподающий список///////////////////////////////////////////////////////////////
  window.goDoSomething = (data) => {

    formBlockSpan.innerHTML='';
    formBlockSpan.prepend(data);
    subject = data;
  }
  if(!subject) goDoSomething('Select Subject');
}

export { dropList };