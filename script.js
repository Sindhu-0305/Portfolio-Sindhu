//toogle read more
function toggleContent() {
    var mainContent = document.getElementById("main-content");
    var additionalContent = document.getElementById("additional-content");
    var showMoreBtn = document.getElementById("show-more-btn");
    var showLessBtn = document.getElementById("show-less-btn");

    if (additionalContent.style.display === "none") {
        mainContent.style.display = "none";
        additionalContent.style.display = "block";
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline-block";
    } else {
        mainContent.style.display = "block";
        additionalContent.style.display = "none";
        showMoreBtn.style.display = "inline-block";
        showLessBtn.style.display = "none";
    }
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz58_60FRvxQplVkgJJDMsUKnwhCCMEYsqqVbWFeTfEaUzx7LLQ9acE2UQRNlxxC4IgrQ/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfully!";
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top< offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });


let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

ScrollReveal({ reset: true,
distance:'80px' ,
duration:2000,
delay:200

});
ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form,.education-content,.skills-content', { origin:'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });

const typed=new Typed('.multiple-text',{
    strings:['JAVA Development','FrontEnd Development','FullStack Development'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});