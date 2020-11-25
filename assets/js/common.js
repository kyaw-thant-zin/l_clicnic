// menu
$('.menu-trigger').on('click', function() {
    $('.menu-trigger').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.nav-list').toggleClass('toggle');
});
$('.nav-list li a').on('click', function() {
    $('.menu-trigger').toggleClass('active');
    $('.nav-list').toggleClass('toggle');
    $('body').removeClass('noscroll');
});