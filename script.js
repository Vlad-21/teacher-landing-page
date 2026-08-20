(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form -> FormSubmit
  var form = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');
  if (form && formSuccess) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Надсилаю…';
      btn.disabled = true;

      fetch('https://formsubmit.co/ajax/viktoriakryshchuk@gmail.com', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            form.hidden = true;
            formSuccess.hidden = false;
          } else {
            btn.textContent = 'Спробувати ще раз';
            btn.disabled = false;
          }
        })
        .catch(function () {
          btn.textContent = 'Спробувати ще раз';
          btn.disabled = false;
        });
    });
  }
})();
