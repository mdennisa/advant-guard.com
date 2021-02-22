jQuery(function($) {
    // initiate scrollmagic controller
    var controller = new ScrollMagic.Controller()

    // explode letters here
    lettering('.tagline')

    // #slide-1
    var tl = anime.timeline({})
    Pace.once('done', function() {
        tl.add({
            targets: '.logo',
            duration: 1200,
            easing: 'easeOutExpo',
            translateY: [-100, 10],
            opacity: [0, 1],
            delay: 400
        })
        .add({
            targets: '.tagline span.letter',
            duration: 800,
            easing: 'easeInOutExpo',
            translateY: [6, 0],
            opacity: [0, 1],
            delay: anime.stagger(60),
        }, '-=800')
        .add({
            targets: '#car-1',
            duration: 4000,
            easing: 'easeOutSine',
            opacity: [0, 1]
        })
    })

    // #slide-2
    var anime_story = anime({
        targets: '#story',
        duration: 800,
        easing: 'easeOutSine',
        translateY: [120, 0],
        opacity: [0, 1]
    })
    var scene_2 = new ScrollMagic.Scene({
        triggerElement: '#story',
        duration: 400,
    })
    .setAnime(anime_story)
    .addTo(controller)

    // #slide-3
    var tl_s3 = anime.timeline()
    tl_s3.add({
        targets: '#tint-specs div',
        duration: 1200,
        easing: 'easeOutExpo',
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
    })

    var scene_3 = new ScrollMagic.Scene({
        triggerElement: '#slide-3',
        duration: '80%'
    })
    .setAnime(tl_s3)
    .addTo(controller)

    $('a[data-fancybox]').fancybox({
        hideScrollbar: false
    })
})

function lettering(element) {
    var textWrapper = document.querySelector(element);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}