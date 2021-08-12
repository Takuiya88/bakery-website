$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    })
});

/**
 * * toggle is switching to add and remove
 */

/**
 * Toggle syntax the Another one 
 */
// $(document).ready(function() {
//     $('.hamburger-menu').click(function () {
//         $('.toggle').toggleClass('open');
//     })
// })

/**
 * Animation
 */

AOS.init ({
    easing: 'ease',
    duration: 1000,
})
