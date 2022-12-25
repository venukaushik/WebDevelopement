var preloaderProgress = $('#preloader--progress'),
    preloaderProgressBtn = $('#preloader--progress--btn'),
    preloaderProgressStatus = $('#preloader--progress__status'),
    preloaderProgressBall = $('#preloader--progress__ball');

function animate() {
    preloaderProgress.addClass('active');

    preloaderProgress.on('webkitTtransitionEnd otransitionend msTransitionEnd transitionend', function () {
        preloaderProgressBall.addClass('active');
        preloaderProgress.addClass('loading');
    });

    preloaderProgressBall.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        preloaderProgress.removeClass('active');
        preloaderProgressBall.removeClass('active');
        preloaderProgressBall.addClass('explode');
        preloaderProgressStatus.addClass('active');
        setTimeout(function () {
            preloaderProgress.unbind();
            preloaderProgressBall.unbind();
            preloaderProgressBall.removeClass('explode');
            preloaderProgressBall.removeClass('active');
            preloaderProgress.removeClass('loading');
        }, 900);
    });
    preloaderProgressStatus.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        preloaderProgressStatus.addClass('hide');
        setTimeout(function () {
            preloaderProgressStatus.removeClass('active hide');
            preloaderProgressBtn.removeClass('active');
            preloaderProgressStatus.unbind();
        }, 3500);
    });
}

preloaderProgressBtn.click(function () {
    animate();
    preloaderProgressBtn.addClass('active');
}); 
