const isMobile = window.matchMedia('(max-width: 500px)');
const isTablet = window.matchMedia('(min-width:500px) and (max-width: 1024px)');
const isDesktop = window.matchMedia('(min-width:1024px)');

if (isMobile.matches) {
  $('.pyramid_info').attr('src', './img/page_eco/slide2/info-mob.png');
  $('.pyramid').remove();
}

const cookieEl = document.querySelector('.cookie-block');
const okEl = document.querySelector('.ok');

okEl.addEventListener('click', () => {
  cookieEl.style.display = 'none';
});

let cookies = () => {
  if (!Cookies.get('hide-cookie')) {
    setTimeout(() => {
      cookieEl.style.display = 'block';
    }, 1000);
  }

  Cookies.set('hide-cookie', 'true', {
    expires: 30,
  });
};

cookies();

var toggled = 0;
$('.artclose').click(function () {
  if (toggled == 0) {
    $('.burgx3').stop().transition({ rotate: '45', 'margin-top': '11px', left: '0px' });
    $('.burgx2').stop().transition({ opacity: '0' }, 'fast');
    $('.burgx').stop().transition({ rotate: '-45', 'margin-top': '11px', left: '0px' });
    toggled++;
  } else {
    $('.burgx3').stop().transition({ rotate: '+=135', 'margin-top': '3px', left: '0px' });
    $('.burgx2').transition({ opacity: '1' }, 'fast');
    $('.burgx').stop().transition({ rotate: '-=135', 'margin-top': '19px', left: '0px' });
    toggled--;
  }
});
var line = document.getElementById('kemalson_evitaled');
window.addEventListener('scroll', progressBar);

function progressBar(e) {
  var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var width_progress_line = (windowScroll / windowHeight) * 100;
  line.style.width = width_progress_line + '%';
}
$(document).ready(function () {
  $('.form_modal').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize(),
    }).done(function () {
      smoke.alert('Спасибо, Ваша заявка принята! мы свяжемся  с Вами в ближайшее время');
      setTimeout(function () {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});

$(document).ready(function () {
  $('.form_skud').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize(),
    }).done(function () {
      smoke.alert('Спасибо, Ваша заявка принята! мы свяжемся  с Вами в ближайшее время');
      setTimeout(function () {
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});

function consoleUp() {
  if ($(window).scrollTop() <= 900) {
    $('#up_the_site_btn').removeClass('up_the_site_shrink');
  } else {
    $('#up_the_site_btn').addClass('up_the_site_shrink');
  }
}
consoleUp();
$(window).scroll(function () {
  consoleUp();
});
let lastScroll = 0;
const defaultOffset = 0;
const header = document.querySelector('#header');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_top_shrink');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide()) {
    header.classList.add('header_top_shrink');
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('header_top_shrink');
  }
  lastScroll = scrollPosition();
});
var menuIcon = document.querySelector('.menu-icon-box');
var navigation = document.querySelector('nav');
var submenu = document.querySelector('.submenu');
menuIcon.onclick = function (e) {
  e.preventDefault();

  submenu.classList.toggle('open');
};
$('.smart_come').on('click', function (e) {
  e.preventDefault();
  $('.submenu').toggleClass('open');
  $('.burgx3').stop().transition({ rotate: '+=135', 'margin-top': '3px', left: '0px' });
  $('.burgx2').transition({ opacity: '1' }, 'fast');
  $('.burgx').stop().transition({ rotate: '-=135', 'margin-top': '19px', left: '0px' });
  toggled--;
});
$('.politics_right, .check_text').on('click', function (e) {
  e.preventDefault();
  $('.modal_politics_body').addClass('modal_politics_body_open');
  $('.modal_politics').addClass('modal_politics_open');
  $('#body').toggleClass('body_hidden');
  $('.up_the_site').fadeOut();
  $('#header').addClass('header_top_shrink_mobile');
});

$('.cross_politics').on('click', function (e) {
  e.preventDefault();
  $('.modal_politics_body').removeClass('modal_politics_body_open');
  $('.modal_politics').removeClass('modal_politics_open');
  $('#body').toggleClass('body_hidden');
  $('.up_the_site').fadeIn();
  $('#header').removeClass('header_top_shrink_mobile');
});

$('.switch').on('click', function (e) {
  e.preventDefault();
  $('.sw').toggleClass('sw_active');
  $('.switchs').toggleClass('switchs_active');

  $('.intercome_slide2_img').toggleClass('intercome_slide2_img_none');
  $('.intercome_slide2_img2').toggleClass('intercome_slide2_img2_active');

  $('.intercome_slide2_name').toggleClass('intercome_slide2_name_opacity');
  $('.intercome_slide2_img').toggleClass('intercome_slide2_img_opacity');

  $('.intercome_slide2_name2_opacity').toggleClass('intercome_slide2_name2');
  $('.intercome_slide2_img2_opacity').toggleClass('intercome_slide2_img2');
});

$('.say_yes').on('click', function (e) {
  e.preventDefault();
  $('.user_deal_body').addClass('user_deal_body_open');
  $('.modal_user_deal').addClass('modal_user_deal_open');
  $('#body').toggleClass('body_hidden');
  $('.up_the_site').fadeOut();
  $('#header').addClass('header_top_shrink_mobile');
});

$('.cross_user_deal').on('click', function (e) {
  e.preventDefault();
  $('.user_deal_body').removeClass('user_deal_body_open');
  $('.modal_user_deal').removeClass('modal_user_deal_open');
  $('#body').toggleClass('body_hidden');
  $('.up_the_site').fadeIn();
  $('#header').removeClass('header_top_shrink_mobile');
});

$('.ripple-effect').on('mouseenter', function (e) {
  var presentOfset = $(this).offset(),
    relX = e.pageX - presentOfset.left,
    relY = e.pageY - presentOfset.top;
  $(this).find('span').css({
    top: relY,
    left: relX,
  });
});
$('.ripple-effect').on('mouseout', function (e) {
  var presentOfset = $(this).offset(),
    relX = e.pageX - presentOfset.left,
    relY = e.pageY - presentOfset.top;

  $(this).find('span').css({
    top: relY,
    left: relX,
  });
});

/* const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let = animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);

 
} */
/* const skud_animItems = document.querySelectorAll('._skud-items2');
if (skud_animItems.length > 0) {
  window.addEventListener('scroll', skud_animOnScroll);
  function skud_animOnScroll(params) {
    for (let index = 0; index < skud_animItems.length; index++) {
      const skud_animItem = skud_animItems[index];
      const skud_animItemHeight = skud_animItem.offsetHeight;
      const skud_animItemOffset = offset(skud_animItem).top;
      const skud_animStart = 2;

      let = skud_animItemPoint = window.innerHeight - skud_animItemHeight / skud_animStart;
      if (skud_animItemHeight > window.innerHeight) {
        skud_animItemPoint = window.innerHeight - window.innerHeight / skud_animStart;
      }

      if (
        pageYOffset > skud_animItemOffset - skud_animItemPoint &&
        pageYOffset < skud_animItemOffset + skud_animItemHeight
      ) {
        $('.mini_h1').fadeOut(0);
        $('.mini_h2').fadeIn(0);
        $('.spec_order_wrapper').fadeOut(0);
        $('.spec_order_wrapper2').fadeIn(0);
      } else {
        if (!skud_animItem.classList.contains('_skud_anim-no-hide')) {
          $('.mini_h1').fadeIn(0);
          $('.mini_h2').fadeOut(0);
          $('.spec_order_wrapper').fadeIn(0);
          $('.spec_order_wrapper2').fadeOut(0);
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    skud_animOnScroll();
  }, 300);
} */

/* const img_animItems = document.querySelectorAll('._img-items');
if (img_animItems.length > 0) {
  window.addEventListener('scroll', img_animOnScroll);
  function img_animOnScroll(params) {
    for (let index = 0; index < img_animItems.length; index++) {
      const img_animItem = img_animItems[index];
      const img_animItemHeight = img_animItem.offsetHeight;
      const img_animItemOffset = offset(img_animItem).top;
      const img_animStart = 4;

      let = img_animItemPoint = window.innerHeight - img_animItemHeight / img_animStart;
      if (img_animItemHeight > window.innerHeight) {
        img_animItemPoint = window.innerHeight - window.innerHeight / img_animStart;
      }

      if (
        pageYOffset > img_animItemOffset - img_animItemPoint &&
        pageYOffset < img_animItemOffset + img_animItemHeight
      ) {
        $('.sl8_anim_img').addClass('sl8_anim_img_active');
      } else {
        if (!img_animItem.classList.contains('_img_anim-no-hide')) {
          $('.sl8_anim_img').removeClass('sl8_anim_img_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    img_animOnScroll();
  }, 300);
} */
/* const app_btn_animItems = document.querySelectorAll('._app_btn-items');
if (app_btn_animItems.length > 0) {
  window.addEventListener('scroll', app_btn_animOnScroll);
  function app_btn_animOnScroll(params) {
    for (let index = 0; index < app_btn_animItems.length; index++) {
      const app_btn_animItem = app_btn_animItems[index];
      const app_btn_animItemHeight = app_btn_animItem.offsetHeight;
      const app_btn_animItemOffset = offset(app_btn_animItem).top;
      const app_btn_animStart = 4;

      let = app_btn_animItemPoint = window.innerHeight - app_btn_animItemHeight / app_btn_animStart;
      if (app_btn_animItemHeight > window.innerHeight) {
        app_btn_animItemPoint = window.innerHeight - window.innerHeight / app_btn_animStart;
      }

      if (
        pageYOffset > app_btn_animItemOffset - app_btn_animItemPoint &&
        pageYOffset < app_btn_animItemOffset + app_btn_animItemHeight
      ) {
        $('.sld_1_app_button_img_shadow_start').addClass('sld_1_app_button_img_shadow');
        $('.sld_1_app_button_img_start').addClass('sld_1_app_button_img');
      } else {
        if (!app_btn_animItem.classList.contains('_sld_1_app-no-hide')) {
          $('.sld_1_app_button_img_shadow_start').removeClass('sld_1_app_button_img_shadow');
          $('.sld_1_app_button_img_start').removeClass('sld_1_app_button_img');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    app_btn_animOnScroll();
  }, 300);
} */

/* const biometric_animItems = document.querySelectorAll('._biometric-items');
if (biometric_animItems.length > 0) {
  window.addEventListener('scroll', biometric_animOnScroll);
  function biometric_animOnScroll(params) {
    for (let index = 0; index < biometric_animItems.length; index++) {
      const biometric_animItem = biometric_animItems[index];
      const biometric_animItemHeight = biometric_animItem.offsetHeight;
      const biometric_animItemOffset = offset(biometric_animItem).top;
      const biometric_animStart = 8;

      let = biometric_animItemPoint = window.innerHeight - biometric_animItemHeight / biometric_animStart;
      if (biometric_animItemHeight > window.innerHeight) {
        biometric_animItemPoint = window.innerHeight - window.innerHeight / biometric_animStart;
      }

      if (
        pageYOffset > biometric_animItemOffset - biometric_animItemPoint &&
        pageYOffset < biometric_animItemOffset + biometric_animItemHeight
      ) {
        $('.sld_5_left_app').addClass('sld_5_left_app_start');
      } else {
        if (!biometric_animItem.classList.contains('_biometric-items-no-hide')) {
          $('.sld_5_left_app').removeClass('sld_5_left_app_start');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    biometric_animOnScroll();
  }, 300);
} */

const animFunc = (className, doFunc, elseFunc) => {
  const animItems = document.querySelectorAll(className);
  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 8;

        let = animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          doFunc(animItem);
        } else {
          elseFunc(animItem);
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
};

animFunc(
  '._anim-items',
  (animItem) => {
    animItem.classList.add('_active');
  },
  (animItem) => {
    if (!animItem.classList.contains('_anim-no-hide')) {
      animItem.classList.remove('_active');
    }
  },
);

if (isDesktop.matches) {
  animFunc(
    '.pyramid0',
    () => {
      $('.pyramid1').addClass('_active');
      $('.pyramid2').addClass('_active');
      $('.pyramid3').addClass('_active');
      $('.pyramid4').addClass('_active');
      $('.pyramid5').addClass('_active');
      $('.pyramid_info').addClass('_active');
    },
    () => {},
  );
}

if (isMobile.matches) {
  animFunc(
    '.pyramid-mob-start',
    () => {
      $('.pyramid_info').addClass('_active');
    },
    () => {},
  );
}

animFunc(
  '.slide13-5-start',
  () => {
    $('.sld13-5_right').addClass('_active');
  },
  () => {},
);

animFunc(
  '.tap_block',
  () => {
    $('.slide3').addClass('_active');
    setTimeout(() => $('.slide3_img').addClass('_active'), 500);
    $('.blue-block').addClass('_active');
  },
  () => {},
);

animFunc(
  '._skud-items2',
  () => {
    $('.mini_h1').fadeOut(0);
    $('.mini_h2').fadeIn(0);
    $('.spec_order_wrapper').fadeOut(0);
    $('.spec_order_wrapper2').fadeIn(0);
  },
  (animItem) => {
    if (!animItem.classList.contains('_skud_anim-no-hide')) {
      $('.mini_h1').fadeIn(0);
      $('.mini_h2').fadeOut(0);
      $('.spec_order_wrapper').fadeIn(0);
      $('.spec_order_wrapper2').fadeOut(0);
    }
  },
);

animFunc(
  '._img-items',
  () => {
    $('.sl8_anim_img').addClass('sl8_anim_img_active');
  },
  (animItem) => {
    if (!animItem.classList.contains('_img_anim-no-hide')) {
      $('.sl8_anim_img').removeClass('sl8_anim_img_active');
    }
  },
);

animFunc(
  '._app_btn-items',
  () => {
    $('.sld_1_app_button_img_shadow_start').addClass('sld_1_app_button_img_shadow');
    $('.sld_1_app_button_img_start').addClass('sld_1_app_button_img');
  },
  (animItem) => {
    if (!animItem.classList.contains('_sld_1_app-no-hide')) {
      $('.sld_1_app_button_img_shadow_start').removeClass('sld_1_app_button_img_shadow');
      $('.sld_1_app_button_img_start').removeClass('sld_1_app_button_img');
    }
  },
);

animFunc(
  '._biometric-items',
  () => {
    $('.sld_5_left_app').addClass('sld_5_left_app_start');
  },
  (animItem) => {
    if (!animItem.classList.contains('_biometric-items-no-hide')) {
      $('.sld_5_left_app').removeClass('sld_5_left_app_start');
    }
  },
);

animFunc(
  '._plan-items',
  () => {
    $('.target_plan_img').addClass('target_plan_img_active');
    $('.sld7_text_wrapper').addClass('sld7_text_wrapper_active');
  },
  (animItem) => {
    if (!animItem.classList.contains('_plan-no-hide')) {
      $('.target_plan_img').removeClass('target_plan_img_active');
      $('.sld7_text_wrapper').removeClass('sld7_text_wrapper_active');
    }
  },
);

/* const plan_animItems = document.querySelectorAll('._plan-items');
if (plan_animItems.length > 0) {
  window.addEventListener('scroll', plan_animOnScroll);
  function plan_animOnScroll(params) {
    for (let index = 0; index < plan_animItems.length; index++) {
      const plan_animItem = plan_animItems[index];
      const plan_animItemHeight = plan_animItem.offsetHeight;
      const plan_animItemOffset = offset(plan_animItem).top;
      const plan_animStart = 1;

      let = plan_animItemPoint = window.innerHeight - plan_animItemHeight / plan_animStart;
      if (plan_animItemHeight > window.innerHeight) {
        plan_animItemPoint = window.innerHeight - window.innerHeight / plan_animStart;
      }

      if (
        pageYOffset > plan_animItemOffset - plan_animItemPoint &&
        pageYOffset < plan_animItemOffset + plan_animItemHeight
      ) {
        $('.target_plan_img').addClass('target_plan_img_active');
        $('.sld7_text_wrapper').addClass('sld7_text_wrapper_active');
      } else {
        if (!plan_animItem.classList.contains('_plan-no-hide')) {
          $('.target_plan_img').removeClass('target_plan_img_active');
          $('.sld7_text_wrapper').removeClass('sld7_text_wrapper_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    plan_animOnScroll();
  }, 300);
} */

document.querySelectorAll('.scene').forEach((elem) => {
  const modifier = elem.getAttribute('data-section');
  basicScroll
    .create({
      elem: elem,
      from: '0',
      to: 'bottom-top',
      direct: true,
      props: {
        '--translateY': {
          from: '0',
          to: `${10 * modifier}px`,
        },
      },
    })
    .start();
});

if ($('.slide_comp').length > 0) {
  const comp = basicScroll.create({
    elem: document.querySelector('.slide_comp'),
    from: 'top-bottom',
    to: 'middle-middle',
    direct: true,
    props: {
      '--tx': {
        from: '200px',
        to: '0px',
        timing: 'linear',
      },
      '--scale': {
        from: '0.5',
        to: '1',
        timing: 'linear',
      },
    },
  });

  comp.start();
  window.onresize = function () {
    comp.calculate();
    comp.update();
  };
}

if ($('.slide4__img').length > 0) {
  const slide4_paralaxx_domofon = basicScroll.create({
    elem: document.querySelector('.slide4__img'),
    from: 'top-bottom',
    to: '3125',
    direct: true,
    props: {
      '--tx': {
        from: '900px',
        to: '300px',
        timing: 'linear',
      },
    },
  });

  slide4_paralaxx_domofon.start();
  window.onresize = function () {
    slide4_paralaxx_domofon.calculate();
    slide4_paralaxx_domofon.update();
  };
}

if ($('.slide4__img_block_mobile').length > 0) {
  const slide4_povorot_domofon_mobile = basicScroll.create({
    elem: document.querySelector('.slide4__img_block_mobile'),
    from: 'top-bottom',
    to: 'middle-bottom',
    direct: true,
    props: {
      '--rx': {
        from: '0px',
        to: '230px',
        timing: 'linear',
      },
      '--tx': {
        from: '0px',
        to: '-330px',
        timing: 'linear',
      },
      '--scale': {
        from: '1',
        to: '0.3',
        timing: 'linear',
      },
      '--rotate': {
        from: '45deg',
        to: '90deg',
        timing: 'linear',
      },
    },
  });
  slide4_povorot_domofon_mobile.start();
  window.onresize = function () {
    slide4_povorot_domofon_mobile.calculate();
    slide4_povorot_domofon_mobile.update();
  };
}

if ($('.slide4__img_block').length > 0) {
  const slide4_povorot_domofon = basicScroll.create({
    elem: document.querySelector('.slide4__img_block'),
    from: '3359px',
    to: '4226px',
    direct: true,
    props: {
      '--rx': {
        from: '0px',
        to: '-50px',
        timing: 'linear',
      },
      '--tx': {
        from: '0px',
        to: '150px',
        timing: 'linear',
      },
      '--scale': {
        from: '1',
        to: '0.3',
        timing: 'linear',
      },
      '--rotate': {
        from: '45deg',
        to: '90deg',
        timing: 'linear',
      },
    },
  });

  slide4_povorot_domofon.start();
  window.onresize = function () {
    slide4_povorot_domofon.calculate();
    slide4_povorot_domofon.update();
  };
}

if ($('.domofon_img_slide6').length > 0) {
  const domofon__slide6 = basicScroll.create({
    elem: document.querySelector('.domofon_img_slide6'),
    from: '4498',
    to: '5200',
    direct: true,
    props: {
      '--tx': {
        from: '300px',
        to: '0px',
        timing: 'linear',
      },
      '--scale': {
        from: '1',
        to: '1',
        timing: 'linear',
      },
    },
  });

  domofon__slide6.start();
  window.onresize = function () {
    domofon__slide6.calculate();
    domofon__slide6.update();
  };
}

if ($('.sl13_pad1_img').length > 0) {
  const pad_1 = basicScroll.create({
    elem: document.querySelector('.sl13_pad1_img'),
    from: 'top-bottom',
    to: 'top-middle',
    direct: true,
    props: {
      '--tx': {
        from: '500px',
        to: '0px',
        timing: 'linear',
      },
    },
  });

  pad_1.start();
  window.onresize = function () {
    pad_1.calculate();
    pad_1.update();
  };
}

if ($('.sl13_pad2_img').length > 0) {
  const pad_2 = basicScroll.create({
    elem: document.querySelector('.sl13_pad2_img'),
    from: 'top-bottom',
    to: 'top-middle',
    direct: true,
    props: {
      '--tx': {
        from: '500px',
        to: '0px',
        timing: 'linear',
      },
    },
  });
  pad_2.start();
  window.onresize = function () {
    pad_2.calculate();
    pad_2.update();
  };
}
