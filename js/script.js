$(document).ready(function() {
    $('.card-list-element').on('click', function() {
        $(this).find('.card-list-text').fadeIn(300);
    });
});
