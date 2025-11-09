document.querySelectorAll('.site-header nav a').forEach(link => {
  link.addEventListener('click', function(e){
    if(this.getAttribute('href').startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({top:target.offsetTop-80,behavior:'smooth'});
      document.querySelectorAll('.site-header nav a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});
function fadeSections() {
  document.querySelectorAll('.fade-up').forEach(sec => {
    const top = sec.getBoundingClientRect().top, winH = window.innerHeight;
    if(top < winH-60) sec.style.opacity = 1;
  });
}
window.addEventListener('scroll', fadeSections);
window.addEventListener('DOMContentLoaded', fadeSections);

document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('form-msg').innerText = "Thank you for reaching out!";
  this.reset();
});
