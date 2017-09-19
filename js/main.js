/**
 * Created by Jeesoo on 2/18/2017.
 */

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

});

function SwapDivs(a,b) {
    var d = document.getElementById(a);
    if( d.style.display == "block" ) {
        d.style.display = "none";
        document.getElementById(b).style.display = "block";
    }
    else {
        d.style.display = "block";
        document.getElementById(b).style.display = "none";
    }
}

$( document ).ready(function() {
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    $('#face').fadeIn('slow');

// Add smooth scrolling on all links inside the navbar
    $("#navigation a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });

    // //lazyload fade effect
    // $(function() {
    //     $("img.lazy").lazyload({
    //         effect : "fadeIn"
    //     });
    // });

    //project image fade filter effect
    $(".project").hover(function() {
            $(this).find('.projectimage-hover').fadeIn(100);
            $(this).find('.projectimage-hover').find('.projectimage-text').fadeIn(100);
        },
        function() {

            $(this).find('.projectimage-hover').delay(200).fadeOut(300);
            $(this).find('.projectimage-hover').delay(200).find('.projectimage-text').fadeOut(300);
        });

    $('.project').click(function() {
        $('#fullscreen-fade').fadeIn(500);
        var projectId = jQuery(this).attr("id");
        projectId = projectId + "PopUp"
        $("#" + projectId).fadeIn(500);
    });

    //return to normal when clicking anywhere on the fade screen
    $('#fullscreen-fade').click(function() {
        $(this).fadeOut(200);
        $('.popup').fadeOut(200);
    });

    $('.popup').click(function() {
        $(this).fadeOut(200);
        $('#fullscreen-fade').fadeOut(200);
    });

    $('.aboutphoto').hover(function() {
            $(this).find('.projectimage-hover').fadeIn(100);
            $(this).find('.projectimage-hover').find('.projectimage-text').fadeIn(100);
        },
        function() {

            $(this).find('.projectimage-hover').delay(200).fadeOut(300);
            $(this).find('.projectimage-hover').delay(200).find('.projectimage-text').fadeOut(300);
        });
});