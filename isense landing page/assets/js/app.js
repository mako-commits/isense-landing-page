//Modal images

// Lets submit the subscribe form
$("#subscriber-form").on("submit", function(e) {
    e.preventDefault();

    $.post("subscribe.php", $("#subscriber-form").serialize(), function(data) {
        const res = JSON.parse(data);

        if (res.signal === "ok") {
            toastr.success(res.msg);
            $("#msg").hide();
            $("#subscriber-form input").val(function() {
                return "";
            });
        } else {
            toastr.error(res.msg);
        }
    });
});

////////////////////////////////////////////
$(".carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".carousel-iframe").magnificPopup({
    type: "iframe",
});

$(".carousel").magnificPopup({
    delegate: ".carousel-link",
    gallery: {
        enabled: true,
    },
    type: "image",
    callbacks: {
        elementParse: function(item) {
            if (item.el[0].classList.contains("video-link")) {
                item.type = "iframe";
            } else {
                item.type = "image";
            }
        },
    },
});

////////////////////////////////////////////
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

///////////////////////////////////

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}