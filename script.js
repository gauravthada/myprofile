document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('toggleIcon');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
      body.classList.add('light');
  }

  toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light');
      
      if (body.classList.contains('light')) {
          localStorage.setItem('theme', 'light');
          toggleIcon.classList.replace('fa-sun','fa-moon');
      } else {
          localStorage.setItem('theme', 'dark');
          toggleIcon.classList.replace('fa-moon','fa-sun');
      }
  });

  //AOS

  AOS.init({
    once: false,
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic',
    disable: 'mobile',
    startEvent: 'DOMContentLoaded'
  });

  //HOBBIES

  const hobbyToggles = document.querySelectorAll('.hobby-toggle');

  hobbyToggles.forEach(toggle => {
      toggle.addEventListener('change', function() {
          if (this.checked) {
              hobbyToggles.forEach(other => {
                  if (other !== this) other.checked = false;
              });
          }
      });
  });

  //JQUERY NAVBAR

  $('.js-scroll-trigger, body').click(function () {
      $('.navbar-collapse').collapse('hide');
  });
});
