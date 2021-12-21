$(function () {
  //上へ戻る
  $(".c-pagetop").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".c-pagetop").fadeIn(500);
    } else {
      $(".c-pagetop").fadeOut();
    }
  });
  $(".c-pagetop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  //hamburger
  $(".l-hamburger__toggle").on("click", function () {
    $("body").toggleClass("open");
  });
  $(".l-hamburger__link").on("click", function () {
    $("body").removeClass("open");
  });
});
$('.l-hamburger__link').on('click', function () {
  $('body').removeClass('open');
});

//hover無効
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
