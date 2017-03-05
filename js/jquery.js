/**
 * Created by Kamil on 05-Mar-17.
 */

$(document).ready(function () {
    $(".rects img").hover(function () {
        $(this).fadeOut();
    }, function () {
        $(this).fadeIn();
    })
});