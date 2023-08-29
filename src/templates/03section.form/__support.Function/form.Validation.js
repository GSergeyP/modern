import Modal from "../__modal";

const formValidation = (formBlockButton) => { //Валидация выполнена только на заполненные поля

    const subjectForm = document.querySelector(".form-block__span"),
        emailForm = document.querySelector('input[name="email"]'),
        nameForm = document.querySelector('input[name="name"]'),
        phoneNumberForm = document.querySelector('input[name="phoneNumber"]'),
        questionForm = document.querySelector('textarea[name="question"]');

  formBlockButton.addEventListener('click', () => {

    let subjectErr,//Определяем переменные ошибок со значением по умолчанию
        emailErr,
        nameErr,
        questionErr,
        subject = subjectForm.innerHTML,
        email = emailForm.value,
        name = nameForm.value,
        phoneNumber = phoneNumberForm.value,
        question = questionForm.value;

    if(subject == 'Select Subject') subjectErr = true
    else subjectErr = false;
    if(!email.trim()) emailErr = true
    else emailErr = false;
    if(!name.trim()) nameErr = true
    else nameErr = false;
    if(!question.trim()) questionErr = true
    else questionErr = false;

    if( subjectErr || emailErr || nameErr || questionErr) {
    if(subjectErr) subjectForm.classList.add('err')
    else subjectForm.classList.remove('err');
    if(emailErr) emailForm.classList.add('err')
    else emailForm.classList.remove('err');
    if(nameErr) nameForm.classList.add('err')
    else nameForm.classList.remove('err');
    if(questionErr) questionForm.classList.add('err')
    else questionForm.classList.remove('err');
    }
    else { 
      

      /*let dataPreview = 'Вы ввели следующие данные: \n' +
      'subject: ' + subject + '\n' +
      'email: ' + email + '\n' +
      'name: ' + name + '\n' +
      'phoneNumber: ' + phoneNumber + '\n' +
      'question: ' + question + '\n';
      alert(dataPreview);*/

      subjectForm.classList.remove('err');
      emailForm.classList.remove('err');
      nameForm.classList.remove('err');
      questionForm.classList.remove('err');

      subjectForm.innerHTML = 'Select Subject';
      emailForm.value = '';
      nameForm.value = '';
      phoneNumberForm.value = '';
      questionForm.value = '';

      Modal(); 
    }
  })
}

export { formValidation }