const formData = [
  {
    title: 'Subject*:',
    name: 'subject',
    class: 'form-block__ul',
    choice: [
      {
        title: 'Choosing Credit Card',
        class: 'form-block__ul-li',
      },
      {
        title: 'Credit Card Application Problems',
        class: 'form-block__ul-li'
      },
      {
        title: 'Earning and Redeeming Rewards',
        class: 'form-block__ul-li'
      },
      {
        title: 'Building Credit with Credit Card',
        class: 'form-block__ul-li'
      },
      {
        title: 'Balance Transfer Issues',
        class: 'form-block__ul-li'
      },
      {
        title: 'Other',
        class: 'form-block__ul-li'
      },
    ]
  },
  {
    title: 'E-mail*:',
    name: 'email',
    classLabel: 'form-block__label item',
    classInput: 'form-block__input',
  },
  {
    title: 'Name*:',
    name: 'name',
    classLabel: 'form-block__label item',
    classInput: 'form-block__input',
  },
  {
    title: 'Phone number:',
    name: 'phoneNumber',
    classLabel: 'form-block__label item',
    classInput: 'form-block__input',
  },
  {
    title: 'Question*:',
    name: 'question',
    classLabel: 'form-block__label item',
    classInput: 'form-block__input item',
  },
];
const pData = [
  {
    title: 'All information submitted on this form will remain completely confidential. We <b>DO NOT sell</b> names or email addresses to third parties.',
    class: 'form-block__p',
  },
  {
    title: 'Please review our privacy policy for further information.',
    class: 'form-block__p',
  },
  {
    title: 'Please note:<br> We <b>DO NOT issue credit cards</b> or have any type of personal credit card account information. If you have questions pertaining to an existing credit card account, please contact the bank that issued the credit card directly.',
    class: 'form-block__p item',
  },
];

export { formData, pData };
