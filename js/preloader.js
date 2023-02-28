setTimeout(function () {
  $('#preloader').velocity(
    {
      opacity: 0.1,
      translateY: '-80px',
      filter: 'grayscale(100%)',
    },

    {
      duration: 400,
      complete: function () {
        $('#hola').velocity(
          {
            translateY: '-100%',
          },
          {
            duration: 1000,
            easing: [0.7, 0, 0.3, 1],
            complete: function () {
              $('.home').addClass('animate-border divide');
              $('.header_anima_start').addClass('header_anima');
              $('.pic_intercome_start').addClass('pic_intercome');
              $('.wrapper_h1_start').addClass('wrapper_h1');
              $('.intercome_text_start').addClass('intercome_text');
            },
          },
        );
      },
    },
  );
}, 2000);
