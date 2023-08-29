import Icons from '../../../components/icons';

const Hd = () => {
  return (
    `<div class="contact-block">`+
      `<a class="contact-block__link" href="#">Best credit offers</a>`+
      `<a class="contact-block__link" href="#">Contact Us</a>`+
      Icons('contact-block__icon1', 'arrow')+
      Icons('contact-block__icon1', 'arrow')+
      `<h1 class="contact-block__h1">CONTACT US</h1>`+
      Icons('contact-block__icon2', 'bracket')+
      `<p class="contact-block__p">We welcome your comments, questions, or any request you may have! If you would like to contact our staff, please complete the form below. <br><br> We will respond to your inquiries ASAP!</p>`+
    `</div>`
  )
}

export { Hd };