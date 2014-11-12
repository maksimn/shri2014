(function ($) {
    $.setEqualizer = function (selector, timeout, colWidth) {
        if (!colWidth) {
            colWidth = 1;
        }
        $(selector).css({
            verticalAlign: 'bottom',
            lineHeight: $(selector).height() + 'px'
        });

        // Кол-во столбиков
        var colQuantity = Math.ceil($(selector).width() / colWidth);
        var cols = new Array(colQuantity);
        for (var i = 0; i < cols.length; i++) {
            var span = $('<span/>').appendTo(selector);
            span.css({
                verticalAlign: 'bottom',
                display: 'inline-block',

                fontSize: 0,
                lineHeight: 0,

                width: colWidth,
                background: 'pink',
                borderTop: '2px solid red'
            });
        }

        var spans = $(selector + ' span');
        for (var i = 0; i < colQuantity; i++) {
            runSpanAnimation(spans[i], timeout, $(selector).height());
        }
    }

    function runSpanAnimation(span, timeout, equalizerHeight) {
        var colHeight = Math.round(equalizerHeight * Math.random());
        $(span).height(equalizerHeight / 2);
        $(span).animate(
                { height: colHeight },
                timeout,
                'linear'
        ).animate(
                { height: equalizerHeight / 2 },
                timeout,
                'linear',
                function () { runSpanAnimation(span, timeout, equalizerHeight); }
        );
    }
}(jQuery));