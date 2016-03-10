;
define([

], function(

) {

    var bottomSectionSelector = '.bottom_section';
    var elPositionSelector = '.js_get_el_position';

    var FixElPosition = function(sectionParam, referenceElParam) {
        var referenceEl = $(referenceElParam).offset().top;
        var windowScroll = $(window).scrollTop();
        var getSectionHeight = $(document).height() - (referenceEl - 36);

        $(sectionParam).css({
            'position': 'fixed',
            'top': (referenceEl - 20) - windowScroll,
            'bottom': 'auto',
            'height': getSectionHeight
        });
    };


    return function() {

        FixElPosition(bottomSectionSelector,elPositionSelector);

        $(window).scroll(function() {
            FixElPosition(bottomSectionSelector, elPositionSelector);
        });
        $(window).resize(function() {
            FixElPosition(bottomSectionSelector, elPositionSelector);
        });
    };

    //////////////////////////////////////////////////////////////////////////
    /////////////////////// Ili moze i ovako preko prototypa ////////////////////////////////

    new FixElPosition().fixPosition(bottomSectionSelector, elPositionSelector);

    var FixElPosition = function(bottomSectionSelector, elPositionSelector) {
        this.bottomSectionSelector = bottomSectionSelector;
        this.elPositionSelector = elPositionSelector;
    };

    FixElPosition.prototype = {

        fixPosition : function() {
            var referenceEl = $(this.elPositionSelector).offset().top;
            var windowScroll = $(window).scrollTop();
            var getSectionHeight = $(document).height() - (referenceEl - 36);

            $(this.bottomSectionSelector).css({
                'position': 'fixed',
                'top': (referenceEl - 20) - windowScroll,
                'bottom': 'auto',
                'height': getSectionHeight
            });
        }
    }



});