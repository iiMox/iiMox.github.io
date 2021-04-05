$("body").niceScroll({
    cursorcolor: "#999",
    cursorwidth: "13px",
    cursorborder: "1px solid #fff",
});

let myHeaderHeight = $(".slider .header").innerHeight();

$(".slider .slider-content").height($(window).height() - (myHeaderHeight + $(".slider hr").outerHeight()));
let mySliderHeight = $(".slider .slider-content").height();

$(".slider .slider-content .container").css({
    'padding-top': (mySliderHeight - $(".slider .slider-content .container").innerHeight()) / 2
});



let ulHover = $(".slider ul .ul-hover");


ulHover.height($(".slider .header .links ul li").innerHeight());


$(".links ul li").hover(function () {
    ulHover.stop();
    ulHover.width($(this).innerWidth());
    ulHover.offset({ left: $(this).offset().left });
    ulHover.animate({
        bottom: 0,
    }, 200);
    $(this).css("color", "#fff")
});

$(".links ul li").click(function () {
    let myUl = $(this);
    $("html").animate({
        scrollTop: $("." + myUl.data("scroll")).offset().top
    }, 500)
})

$(".links ul li").mouseout(function () {
    ulHover.stop();
    let myUl = $(this);
    ulHover.animate({
        bottom: "-47px",
    }, 200);
    myUl.css("color", "#af4eff")

});

let imgHover = $(".gallery .works .img-overflow");

imgHover.height($(".gallery .works .work").height());

imgHover.width($(".gallery .works .work").width());



$(".gallery .works .work img").each(function () {
    let myWork = $(this);
    myWork.mouseenter(function () {
        imgHover.offset({
            top: myWork.offset().top,
            left: myWork.offset().left,
        });
        imgHover.show(500, function () {
            imgHover.mouseleave(function () {
                imgHover.stop();
                imgHover.hide();
            });
        });
    });
});


$("footer .arrow-up").click(function () {
    $("html").animate({
        scrollTop: 0,
    }, 500)
});





