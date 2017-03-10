/**
 * Created by Kamil on 05-Mar-17.
 */

const fadeThreshold = 0.25;
$(document).ready(function () {
    const siblingTagName = 'span';

    $(".rects img").mouseover(function (e) {
        if (!e) var e = window.event;
        var relTarg = e.relatedTarget || e.fromElement;

        /*TODO: can I make it more flexible somehow (if I change span tag name sometime)?*/
        if (null != relTarg && relTarg.tagName.toLowerCase() != siblingTagName) {
            $(this).fadeTo('def', fadeThreshold);
            $(this).siblings().show();
        }
    })
        .mouseout(function (e) {
            if (!e) var e = window.event;
            var relTarg = e.relatedTarget || e.toElement;

            /*TODO: can I make it more flexible somehow?*/
            if (null != relTarg && relTarg.tagName.toLowerCase() != siblingTagName) {
                $(this).fadeTo('def', 1.0);
                $(this).siblings().hide();
            }
        });
});