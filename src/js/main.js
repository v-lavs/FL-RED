/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../../node_modules/jquery-zoom/jquery.zoom.min.js ;
//= include ../../node_modules/waypoints/lib/jquery.waypoints.min.js ;
//= include ../../node_modules/baguettebox.js/dist/baguetteBox.min.js ;


// CUSTOM SCRIPTS

$(document).ready(function () {

    $.fn.positionOn = function (element, align) {
        const target = $(this);
        const circleDiameter = $(element).parents('.svg-wrap').width() / 12;
        const position = element.position();

        let x = position.left;
        let y = position.top + circleDiameter;

        if (align === 'right') {
            x -= (target.outerWidth() - circleDiameter);
        } else if (align === 'center') {
            x -= target.outerWidth() / 2 - circleDiameter / 2;
        }

        target.css({
            position: 'absolute',
            top: y,
            left: x
        });
    };

    const $popover = $('.plan-popover');
    const anim_time = 200;

    $('.apartment-circle').hover(function (e) {
        const dataID = $(this).data('modal');
        const content = $('[data-id="' + dataID + '"]').html();
        $popover.html(content).positionOn($(this), 'center');
        $popover.fadeIn(anim_time);
    }, function (e) {
        $popover.fadeOut(anim_time);
        $popover.html('');
    });

    //MOBILE MENU
    const nav = $('.header__nav');

    $('.btn_burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn_close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    // SMOOTH SCROLL TO ANCHOR
    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            let anchor = $.attr(this, 'href')

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 1000);
                nav.removeClass('open');
                jQuery('.backdrop').fadeOut();
                $('body').removeClass('modal_open');
            }
        })

    }

    smoothScrollToAnchor('.btn_scroll');
    smoothScrollToAnchor('.menu__link');
    smoothScrollToAnchor('.register');

    // Custom input

    $('.custom-input__field').on('change input', function (e) {
        if (e.target.value === '') {
            $(this).parents('.custom-input').removeClass('has-value');
        } else {
            $(this).parents('.custom-input').addClass('has-value');
        }
    });

    //HEADER RIGHT BAR
    $('#openBar').click(function (e) {
        $('.right-bar').toggleClass('open-bar');
    });

    // MODAL

    $('.scheme-tabs__link').on('click', function (e) {
        $('.scheme-tabs__link').removeClass('active');
        $(this).addClass('active');

    });

    $('.fl-modal-toggle').on('click', function (e) {
        e.preventDefault();
        const modalID = $(this).data('modal');
        const modal = $(modalID).addClass('active');
        jQuery('.backdrop').fadeIn();
        $("body").addClass("modal-open");
    });

    $('.fl-modal__close, .backdrop').on('click', function (e) {
        e.preventDefault();
        $('.fl-modal').removeClass('active');
        $('.right-bar').removeClass('open-bar');
        jQuery('.backdrop').fadeOut();
        $("body").removeClass("modal-open");
    })
    $('.fl-modal__back').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.fl-modal').removeClass('active');
    });

    //GALLERY
    const gallery = baguetteBox.run('.gallery', {animation: 'fadeIn'});

    //MAP ZOOM
    function initZoom() {
        if ($(window).width() <= 768) {
            $('.map').zoom({
                url: 'assets/img/map-loc9.jpg',
                touch: true,
            });
        } else {
            $('#map').trigger('zoom.destroy');
        }
    }

    initZoom();
    $(window).resize(function () {
        initZoom();
    });


    //    ANIMATION
    let fadeInBlocks = $('.facade-residence').waypoint(function (direction) {
        $(this.element).addClass('active')
    }, {
        offset: '100%'
    });


    let animHeader = $('.header').waypoint(function (direction) {
        $(this.element).addClass('active')
    });
    let animBanner = $('.section-banner').waypoint(function (direction) {
        $(this.element).addClass('active')
    });


    //TABS

    $(".scheme-tab").each(function () {
        var $this = $(this),
            child = $this.children(":first");
        $this.css("minHeight", function () {
            return child[0].getBoundingClientRect().height;
        });
    });
    const tabLink = $('.scheme-tabs__link');
    const tabContentItem = $('.scheme-tab');
    tabLink.click(function (e) {
        e.preventDefault();
        tabLink.removeClass('active');
        tabContentItem.removeClass('active');
        $(e.target).addClass('active');
        $($(e.currentTarget).attr('href')).addClass('active');
    });

    // MAP ANIMATION VIDEO
    const video = document.getElementsByClassName("video");

    $('.map').waypoint(function() {
        video[0].play();
    }, {
        offset: '90%',
        triggerOnce: true ,
    });
});



