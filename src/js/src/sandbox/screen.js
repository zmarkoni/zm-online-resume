var $ = require('jquery');

var screen = function() {};

screen.prototype = {

    smallWidth: 768,

    mediumWith: 992,

    isLarge: function() {
        return $(window).width() >= this.mediumWith;
    },

    isMedium: function() {
        return this.smallWidth <= $(window).width() &&
            $(window).width() < this.mediumWith;
    },

    isSmall: function() {
        return $(window).width() < this.smallWidth;
    },

    isLandscape: function() {
        return $(window).width() > $(window).height();
    },

    getContentHeight: function() {
        return $(window).height() - $("header").outerHeight();
    },

    getBodyContainerHeight: function() {
        return this.getWindowHeight() - $("#js_body_container").offset().top;
    },

    getPageContentHeight: function() {
        return $(window).height() - $("header").outerHeight() - $(".mobile_header").outerHeight();
    },

    getWindowHeight: function() {
        return $(window).height();
    },

    getProfilePictureHeight: function() {
        return this.getWindowHeight() - $("#profile_picture").offset().top - $("#responsive_profile_buttons a.button").outerHeight();
    }
};

//return new screen();

module.exports = screen;