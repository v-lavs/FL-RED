/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../../node_modules/waypoints/lib/jquery.waypoints.min.js ;
//= include ../../node_modules/jquery-nice-select/js/jquery.nice-select.js
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


    // MODAL

    $('.scheme-tabs__link').on('click', function (e) {
        $('.scheme-tabs__link').removeClass('active');
        $(this).addClass('active');
    });

    $('.fl-modal-toggle').on('click', function (e) {
        e.preventDefault();
        const modalID = $(this).data('modal');
        const modal = $(modalID).addClass('active');
    });

    $('.fl-modal__close, .fl-modal__back').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.fl-modal').removeClass('active');
    })

    //    ANIMATION

    // setTimeout(function () {
    //     $('.section-banner').addClass('anim_started');
    // }, 500);
});


