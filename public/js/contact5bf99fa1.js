(()=>{"use strict";var o={d:(e,t)=>{for(var c in t)o.o(t,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},o:(o,e)=>Object.prototype.hasOwnProperty.call(o,e),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},e={};o.r(e),o.d(e,{Hd:()=>c,Mobile:()=>n,Tablet:()=>a});const t=(o,e)=>`<svg class="${o}"><use xlink:href="./svg/sprite.svg#${e}"></use></svg>`,c=()=>'<div class="contact-block"><a class="contact-block__link" href="#">Best credit offers</a><a class="contact-block__link" href="#">Contact Us</a>'+t("contact-block__icon1","arrow")+t("contact-block__icon1","arrow")+'<h1 class="contact-block__h1">CONTACT US</h1>'+t("contact-block__icon2","bracket")+'<p class="contact-block__p">We welcome your comments, questions, or any request you may have! If you would like to contact our staff, please complete the form below. <br><br> We will respond to your inquiries ASAP!</p></div>',a=()=>'<div class="contact-block"><h1 class="contact-block__h1">CONTACT US</h1>'+t("contact-block__icon","bracket")+'<p class="contact-block__p">We welcome your comments, questions, or any request you may have! If you would like to contact our staff, please complete the form below. <br><br> We will respond to your inquiries ASAP!</p></div>',n=()=>'<div class="contact-block"><h1 class="contact-block__h1">CONTACT US</h1>'+t("contact-block__icon","bracket")+'<p class="contact-block__p">We welcome your comments, questions, or any request you may have! If you would like to contact our staff, please complete the form below.</p><p class="contact-block__p">We will respond to your inquiries ASAP!</p></div>',l=()=>{document.getElementById("contact").innerHTML=e[(()=>{const o=window.innerWidth;return o<=767?"Mobile":o>=768&&o<=1439?"Tablet":o>=1440?"Hd":void 0})()]()};window.addEventListener("resize",l),document.addEventListener("DOMContentLoaded",l)})();