document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  });

  document.querySelectorAll('.working__button').forEach(function (tabsButton) {
    tabsButton.addEventListener('click', function (event) {
      document.querySelectorAll('.working__button').forEach(function (btnClr) {
        btnClr.classList.remove('working__button--active')
      });
      event.currentTarget.classList.add('working__button--active');

      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.working__description').forEach(function (tabDescr) {
        tabDescr.classList.remove('working__description--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('working__description--active')
    });
  });

  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: 'content',
  });

  document.querySelector('#header__burger').addEventListener('click', function (event) {
    document.querySelector('#header__nav').classList.toggle('header__nav-list--active');
    event.currentTarget.classList.toggle('header__burger--close');
  })
});
