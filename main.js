// AOS.init({
//     acnhorPlacement: 'top-bottom',
//     once: true,
//     duration: 700
// });

$(document).ready(() => {
  // Модальные окна
  var overlay = $(".overlay"),
      modal = $(".modal"),
      modalClose = $(".modal__close"),
      modalOpen = $(".modal__open");

  overlay.click(function (e) {
      if ($(e.target).closest(".modal").length == 0) {
          $("body, html").removeClass("my-body-noscroll-class");
          $(this).fadeOut();
          modal.fadeOut();
      }
  });

  modalClose.click(function () {
      $("body, html").removeClass("my-body-noscroll-class");
      overlay.fadeOut();
      modal.fadeOut();
  });

  modalOpen.each(function () {
      $(this).on("click", function (e) {
          var modalId = $(this).attr("data-modal"),
              EachModal = $('.modal[data-modal="' + modalId + '"]');
          $("body, html").addClass("my-body-noscroll-class");

        
        if (this.getAttribute("data-name")) {
            var modalUsluga = this.getAttribute("data-name");
            modalElem = document.querySelector(
            '.modal[data-modal="' + modalId + '"]'
            );
            $(modalElem)
            .find(".tariffName").val(modalUsluga)
        }

        modal.fadeOut();
          overlay.fadeIn();
          EachModal.fadeIn();
      });
  });

  /** * Replace all SVG images with inline SVG */
  $("img.img-svg").each(function () {
      var $img = $(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      $.get(
          imgURL,
          function (data) {
              var $svg = $(data).find("svg");
              if (typeof imgID !== "undefined") {
                  $svg = $svg.attr("id", imgID);
              }
              if (typeof imgClass !== "undefined") {
                  $svg = $svg.attr("class", imgClass + " replaced-svg");
              }
              $svg = $svg.removeAttr("xmlns:a");
              $img.replaceWith($svg);
          },
          "xml"
      );
  });

  $('a[href^="#"]').click(function () {
      $("#mobile__menu").removeClass("active");
      $("body, html").removeClass("my-body-noscroll-class");
      let target = $(this).attr("href");
      let targetPosition = $(target).offset().top - 30;
      $("html, body").animate({ scrollTop: targetPosition }, 500);
      return false;
  });

  // $('input[type="tel"]').inputmask("+7 (999) 999-99-99");

  // $(".report__slider").slick({
  //     infinite: true,
  //     slidesToShow: 2,
  //     arrows: true,
  //     prevArrow: ".report__arrow.left",
  //     nextArrow: ".report__arrow.right",
  //     dots: false,
  //     responsive: [
  //         {
  //             breakpoint: 991,
  //             settings: {
  //                 slidesToShow: 1,
  //             },
  //         },
  //         {
  //             breakpoint: 575,
  //             settings: {
  //                 slidesToShow: 1,
  //             },
  //         },
  //     ],
  // });

  $(".programm__box__item__trigger").click(function () {
      $(this).parent().toggleClass("active");
      $(this).siblings(".programm__box__item__content").slideToggle();
  });

  $(".faq__box__item__trigger").click(function () {
      $(this).parent().toggleClass("active");
      $(this).siblings(".faq__box__item__content").slideToggle();
  });

  // if ($(window).width() > 991) {
  // }

  // Табы - вкладки
  // $(".repairs__button").on("click", function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //     $(".repairs__tab").removeClass("active").eq($(this).index()).addClass("active");
  // });

  // // ТАЙМЕР
  // var deadline = new Date('2024-11-01T23:59:00+03:00');
  // let timerId = null;
  // function declensionNum(num, words) {
  //   return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  // }
  // function countdownTimer() {
  //   const diff = deadline - new Date();
  //   if (diff <= 0) {
  //     clearInterval(timerId);
  //   }
  //   var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  //   var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  //   var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  //   var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
  //   days = days < 10 ? '0' + days : days;
  //   hours = hours < 10 ? '0' + hours : hours;
  //   minutes = minutes < 10 ? '0' + minutes : minutes;
  //   seconds = seconds < 10 ? '0' + seconds : seconds;

  //   if(days !== 0) {
  //     hours = hours + (days * 24)
  //   } else {
  //     hours = hours < 10 ? '0' + hours : hours;
  //   }
  //   var timerValue = hours + ' : ' + minutes + ' : ' + seconds;

  //   $('.day .value').html(days)
  //   $('.hours .value').html(hours)
  //   $('.minutes .value').html(minutes)
  //   $('.seconds .value').html(seconds)
  // }
  // countdownTimer();
  // timerId = setInterval(countdownTimer, 1000);

  // E-mail Ajax Send
  $("form").submit(function (event) {
      event.preventDefault();
      var th = $(this);

      th.find("button[type=submit]").prop("disabled", true);
      setTimeout(() => {
          th.find("button[type=submit]").prop("disabled", true);
      }, 2000);

      $.ajax({
          type: "POST",
          url: "/telegram.php",
          data: th.serialize(),
      }).done(function () {
          var url = "/thanks/";
          $(location).attr("href", url);
      });
  });
});

$(document).ready(() => {
  // $(".third__box").on("init", function (event, slick) {
  //     $(".third__slider-line").addClass("active");
  // })
  $(".graduates__box").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // centerMode: true,
      // centerPadding: "140px",
      arrows: false,
      prevArrow: ".report__arrow.left",
      nextArrow: ".report__arrow.right",
      dots: false,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 3000,
      variableWidth: true,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 1,
                  variableWidth: true,
              },
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  variableWidth: true,
                  autoplaySpeed: 5000,
                  speed: 800
              },
          },
      ],
  });
  // .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  //     $(".third__slider-line").removeClass("active");
  // })
  // .on("afterChange", function (event, slick, currentSlide, nextSlide) {
  //     $(".third__slider-line").addClass("active");
  // });
});
// $(document).ready(() => {
//   $(".tariff__box__item__footer-btn").click(function () {
//       $(".modal").fadeIn();
//       $("body, html").addClass("my-body-noscroll-class");
//       return false;
//   });
//   $(".tariff__box__item__footer-btn").click(function () {
//       $(".overlay").fadeIn();
//       return false;
//   });
//   $(document).keydown(function (e) {
//       if (e.keyCode === 27) {
//           e.stopPropagation();
//           $(".modal").fadeOut();
//       }
//   });
//   $(".popup-fade").click(function (e) {
//       if ($(e.target).closest(".popup").length == 0) {
//           $(this).fadeOut();
//           $("body, html").removeClass("my-body-noscroll-class");
//       }
//   });
// });
