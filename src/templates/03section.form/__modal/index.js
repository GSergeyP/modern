import Icons from '../../../components/icons';

const Modal = () => {
  const mountModal = document.getElementById('form'),
        content = 
        `<div class="form-block__modal">`+
          `<div class="form-block__modal-body">`+
            Icons('form-block__modal-body__icon', 'cross')+
            `<h2 class="form-block__modal-body__h2">Thanks for your question!</h2>`+
            `<p class="form-block__modal-body__p">Our experts will reply you by email as soon as possible.</p>`+
          `</div>`+
        `</div>`;

  mountModal.insertAdjacentHTML('beforeEnd', content);

  setTimeout(() =>  {
    const removeModal = document.querySelector(".form-block__modal");
    if (removeModal) removeModal.remove();
  }, 3000);
  
  const handleClick = document.querySelector(".form-block__modal-body__icon");

  handleClick.addEventListener('click', ()=> {
    document.querySelector(".form-block__modal").remove();
  });
}

export default Modal;

