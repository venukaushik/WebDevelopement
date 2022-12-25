$(document).ready(function () {

    let progress = $('.progress'),
        pie = progress.children('.pie'),
        slider = $('input[name="percent"]');

    slider.on('change input', e => {
        setPercent(pie, slider.val());
    }).trigger('change');

    function setPercent(pie, value) {
        let total = 2 * Math.PI * 8;
        if (!progress.hasClass('complete')) {
            pie.css('strokeDasharray', (value * total / 100) + ' ' + total);
            if (value == 100) {
                progress.addClass('complete');
            }
        }
    }

});

for (let i = 0, element; element = document.querySelectorAll('input[type="range"]')[i++];) {
    rangeSlider.create(element, {
        polyfill: true
    });
}