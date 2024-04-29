


AOS.init();

// Initialize Swiper start

var swiper1 = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
});
//  Initialize Swiper end



const testimonialSlider = new Swiper("#testimonials", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: false,
    navigation: false,
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});


// quantity js start
$('.add-text').click(function () {
    var th = $(this).closest('.wrap').find('.count');
    th.val(+th.val() + 1);
});
$('.sub-text').click(function () {
    var th = $(this).closest('.wrap').find('.count');
    if (th.val() > 1) th.val(+th.val() - 1);
});
// quantity js end


// Distributor Filter 
$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('5000');
            $('.filter').filter('.' + value).show('5000');
        }

        // Remove "active" class from all filter buttons
        $(".filter-button").removeClass("active");

        // Add "active" class to the clicked filter button
        $(this).addClass("active");
    });
});



// landing page header
var remove_navbar = document.getElementById("remove-show-class");

remove_navbar = document.addEventListener("click", function () {
    remove_navbar.classList.remove("show");
});
