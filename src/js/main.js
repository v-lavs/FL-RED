/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../../node_modules/jquery-zoom/jquery.zoom.min.js ;
//= include ../../node_modules/waypoints/lib/jquery.waypoints.min.js ;
//= include ../../node_modules/baguettebox.js/dist/baguetteBox.min.js ;


// CUSTOM SCRIPTS

$(document).ready(function () {

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
                }, 2000);
                nav.removeClass('open');
                jQuery('.backdrop').fadeOut();
                $('body').removeClass('modal_open');
            }
        })

    }

    smoothScrollToAnchor('.btn_scroll');
    smoothScrollToAnchor('.menu__link');

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
        $(".right-bar__content").fadeToggle(500);
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

    $('.fl-modal__close').on('click', function (e) {
        e.preventDefault();
        $('.fl-modal').removeClass('active');
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
                url: 'assets/img/map-loc7.png',
                touch:	true,
            });
        } else{
            $('#map').trigger('zoom.destroy');
        }
    }
    initZoom();
    $(window).resize(function() {
        initZoom();
    });


    //    ANIMATION

   let fadeInBlocks = $('.fade-in').waypoint(function (direction) {
        $(this.element).addClass('active')
    }, {
        offset: '98%'
    });
    let fadeBlocks = $('.fade').waypoint(function (direction) {
        $(this.element).addClass('active')
    }, {
        offset: '98%'
    });

});


