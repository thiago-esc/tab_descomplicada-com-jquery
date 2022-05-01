$(document).ready(function() {

  let activeClass = 'active';

  $('.tab-menu a').first().addClass(activeClass)
  $('.item').first().addClass(activeClass)

  $('.tab-menu a').click(function(event) {
    event.preventDefault();
    let itemId = $(this).attr('href');
    $('.tab-menu a, .item').removeClass(activeClass);
    $(this).addClass(activeClass);
    $(itemId).addClass(activeClass);
  });

});