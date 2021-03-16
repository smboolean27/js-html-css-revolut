$(function() {
  // Modo 1 - all'hover usando i metodi jquery
  // $('.main-menu-list > li').mouseenter(
  //   function() {
  //     $(this).children('.main-menu-dropdown-container').slideDown();
  //   }
  // );
  //
  // $('.main-menu-list > li').mouseleave(
  //   function() {
  //     $(this).children('.main-menu-dropdown-container').slideUp();
  //   }
  // );

  // Modo 2 - all'hover aggiugendo la classe
  $('.main-menu-list > li').mouseenter(
    function() {
      //$(this).siblings('li').children('.main-menu-dropdown-container').removeClass('active');
      $('.main-menu-dropdown-container').removeClass('active');
      $(this).children('.main-menu-dropdown-container').addClass('active');
    }
  );

  // $('.main-menu-list > li').mouseleave(
  //   function() {
  //     $(this).children('.main-menu-dropdown-container').removeClass('active');
  //   }
  // );

  // Modo 3 - col click e il toggle sulla classe
  $('.main-menu-list > li').click(
    function() {
      $(this).children('.main-menu-dropdown-container').toggleClass('active');
    }
  );


});
