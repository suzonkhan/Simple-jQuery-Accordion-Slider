jQuery(document).ready(function () {

    var i = 0;
    var currentItemNumber = 1;
    var accordionItem = $(".feature-accordion>li");
    var accordionLength = accordionItem.length;
    var imgSrc = $(".feature-accordion>li.feature-active").children("img").attr("src");
    var heading = $(".feature-accordion>li.feature-active").children("h4").text();
    var sumarry = $(".feature-accordion>li.feature-active").children("p").text();
    $appentTHML = "<div class='feature-accordion-image'><img src='" + imgSrc + "'/></div>";
    $appentTHML += "<div class='feature-accordion-data'> <h2> " + heading + "</h2>";
    $appentTHML += "<p> " + sumarry + "</p> </div>";
    $(".accordion-data-view").html($appentTHML);

    for (i = 1; i <= accordionLength; i++) {

        if (i === currentItemNumber) {
            $(".feature-slider-pagination").append("<div class='pagination-active'> " + i + "</div>")
        } else {
            $(".feature-slider-pagination").append("<div> " + i + "</div>")
        }
    }
    $(".feature-slider-pagination> div").on('click', function () {
        $(this).addClass("pagination-active");
        $(this).siblings().removeClass("pagination-active");
        currentItemNumber = $(this).index() + 1;

        var currentPaginationItem = $(this).index() + 1;

        $(".feature-accordion>li").each(function (index) {
            if (index + 1 === currentPaginationItem) {
                $(this).siblings().removeClass("feature-active");
                $(this).addClass("feature-active").click();
                return false;
            }
        })

    });

    /*
     * SLIDE PREV
     * */
    $(".feature-accordion>li").on("click", function () {
        $(this).addClass("feature-active");
        $(this).siblings().removeClass("feature-active");
        accordionDataTransfer($(this));

        currentItemNumber = $(this).index() + 1;
        $(".feature-slider-pagination> div").each(function (index) {
            if (index + 1 === currentItemNumber) {
                $(this).siblings().removeClass("pagination-active");
                $(this).addClass("pagination-active");
                return false;
            }
        })
        console.log(" Current Item = " + currentItemNumber);
    });

    /*
     * Slide data transfer
     * */
    function accordionDataTransfer(data) {
        var imgSrc = data.children("img").attr("src");
        var heading = data.children("h4").text();
        var sumarry = data.children("p").text();
        $appentTHML = "<div class='feature-accordion-image'><img src='" + imgSrc + "'/></div>";
        $appentTHML += "<div class='feature-accordion-data'> <h2> " + heading + "</h2>";
        $appentTHML += "<p> " + sumarry + "</p> </div>";
        $(".accordion-data-view").html($appentTHML);

    }

    /*
     * SLIDE NAV
     * */
    $(".feature-slider-nav button").on("click", function (e) {
        // console.log(e)
        if ($(this).hasClass("btn-next-feature")) {
            slideNext();
        } else if ($(this).hasClass("btn-prev-feature")) {
            slidePrev();
        }
    });

    /*
     * SLIDE NEXT
     * */
    function slideNext() {
        $(".feature-accordion>li").each(function (index) {
            if ($(this).hasClass("feature-active") && currentItemNumber <= accordionLength) {
                $(this).next().addClass("feature-active").click();
                $(this).removeClass("feature-active");
                currentItemNumber += 1;
                return false;
            }
        })
    }

    /*
     * SLIDE PREV
     * */
    function slidePrev() {
        $(".feature-accordion>li").each(function (index) {
            if ($(this).hasClass("feature-active") && currentItemNumber >= 1) {
                $(this).prev().addClass("feature-active").click();
                $(this).removeClass("feature-active");
                currentItemNumber -= 1;
                return false;
            }
        })
    }
/*
    setInterval(function () {
        slideNext()
     }, 5000)
*/


});
