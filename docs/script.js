    AOS.init();

    $title = $(".title");
    $subTitle = $(".sub-title");
    $quality = $(".quality");

    $title.hide();
    $subTitle.hide();
    $quality.hide();

    setTimeout(function() {
        $title.slideDown(1000);
        $subTitle.slideDown(1000);
        $quality.slideDown(1000);
    }, 600);

