const toggleBtns = document.querySelectorAll('.header__sun, .mobile__sun');


let theme = localStorage.getItem('theme');

theme && document.body.classList.add('light_mode')

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light_mode');
    if (document.body.classList.contains('light_mode')) {
      localStorage.setItem('theme','light_mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  });
});
