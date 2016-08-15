$(document).ready(function() {
    $('.card-list-element').on('click', function() {
        var hidden = $(this).find('.card-hidden');
        var text = $(this).find('.card-list-text');
        if ($(hidden).is(":visible")) {
            $(text).animate({opacity: "0"},100,function(){
                    $(hidden).slideUp(200);
                }
            );
        } else {
            $(hidden).slideDown(200, function(){
                $(text).animate({opacity: "1"},100);
            });
        }
    });
});
