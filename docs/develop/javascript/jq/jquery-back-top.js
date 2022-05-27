/**
 * 返回顶部
 * 
 * @date 2017-06-01
 * @desc 点击返回顶部
 * @depend jquery
 */

function setBackTop(selector) {
  var $backTop = $(selector);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $backTop.removeClass('hide');
    }
    else {
      $backTop.addClass('hide');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 140) {
      $(".mobile_title").removeClass('hide');
    }
    else {
      $(".mobile_title").addClass('hide');
    }
  });

  $backTop.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 600);

    return false;
  });
}
