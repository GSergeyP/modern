import Icons from '../../../components/icons';

const Mobile = () => {
  return (
    `<div class="contact-block">`+
      `<h1 class="contact-block__h1">CONTACT US</h1>`+
      Icons('contact-block__icon', 'bracket')+
      `<p class="contact-block__p">We welcome your comments, questions, or any request you may have! If you would like to contact our staff, please complete the form below.</p>`+
      `<p class="contact-block__p">We will respond to your inquiries ASAP!</p>`+
    `</div>`
  )
}

export { Mobile };