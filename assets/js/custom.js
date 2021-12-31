//slick carousel-1
$(document).ready(function () {
    $(".slider-1").slick({
        dots : false,
        arrows : false,
        slidesToShow : 2,
        slidesToScroll : 1,
        draggable : true,
        responsive : [
            {
                breakpoint : 768,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint : 580,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint : 320,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".carousel-topNav-prev").click(function () {
        $(".slider-1").slick('slickPrev')
    });
    $(".carousel-topNav-next").click(function () {
        $(".slider-1").slick('slickNext')
    })
});

//canvas toggle
const canvasArea = document.getElementById('canvas')
const closeBtn = document.getElementById('close')
const menuBar = document.getElementById('menuBar')
const overlay = document.getElementById('overlay')
const searchBar = document.getElementById('searchBar')
const searchPopUp = document.getElementById('searchPopUp')
const searchPopUpClose = document.getElementById('closeSearchPopUp')

//sidebar show
menuBar.addEventListener('click', function () {
    canvasArea.classList.add('show')
    overlay.classList.add('active')
})
//sidebar remove
closeBtn.addEventListener('click', function () {
    canvasArea.classList.remove('show')
    overlay.classList.remove('active')
})
//search area show
searchBar.addEventListener('click', function () {
    searchPopUp.classList.add('searchPopUp')
})
//search area remove
searchPopUpClose.addEventListener('click', function () {
    searchPopUp.classList.remove('searchPopUp')
})

//sub menu toggle
$(document).ready(function () {
    $('#canvasSubMenuToggler').click(function () {
        $('#subMenu').slideToggle('slow')
    })
})

//tab pane loader
$(document).ready(function () {
    $('button[data-bs-toggle="tab"]').on('click', function () {
        $('.ids-dual-ring').addClass('loading');
        $('.tab-pane').addClass('loading');
        setTimeout(function () {
            $('.ids-dual-ring').removeClass('loading');
            $('.tab-pane').removeClass('loading');
        }, 500)
    })
})
//Spacer
var spacer = document.getElementsByClassName('spacer');
for(var i=0;i<spacer.length;i++){
    var size = spacer[i].getAttribute('data-height')
    spacer[i].style.height = "" + size + "px";
}
// social share
$(document).ready(function () {
    $('.post button.toggle-button').each(function () {
        $(this).on('click', function () {
            $(this).next('.post.post-list .post-bottom  .social-share').toggleClass('active');
        })
    })
    $('.post button.toggle-button i').each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('bx-x')
        })
    })
})

// scroll top
$(document).ready(function(){
    $("#returnTop").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

