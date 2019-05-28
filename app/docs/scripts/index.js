$( document ).ready(function() {
    $('[data-toggle="popover"]').popover();
    $('#api-documentation .image-popper').on('click', function (e) {
        var $target = $(e.currentTarget);
        var els = $target.find('.popper-target');
        $(els).each(function (i, el) {
            $(el).toggle();
        });
    });
});
