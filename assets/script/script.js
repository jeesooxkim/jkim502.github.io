$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
	autoResizeDiv();
});

function autoResizeDiv()
{
    document.getElementById('header').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();


function SwapDivs(a,b) {
	var d = document.getElementById(a);
	if( d.style.display == "inline-block" ) {
	   d.style.display = "none";
	   document.getElementById(b).style.display = "inline-block";
	   }
	else {
	   d.style.display = "inline-block";
	   document.getElementById(b).style.display = "none";
	   }
}


$(document).ready(function() {

	$('#face').fadeIn('slow');
    
	$('.smooth').on('click', function() {
	    $.smoothScroll({
	        scrollElement: $('body'),
	        scrollTarget: '#' + this.id
	    });
	    
	    return false;
	});

    var $item = $('div.item'), //Cache your DOM selector
        visible = 1, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1; //End index
    
    $('div#arrowR').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=1625px'});
        }
    });
    
    $('div#arrowL').click(function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=1625px'});
        }
    });

    $(function() {
    	$('#adiv').hover(function() {
    		$('.caption',this).fadeIn('fast');
    	},
    	function() {
    		$('.caption',this).fadeOut('fast');
    	});
    });

    $('#opening').hover(function(){
       $('#homeicon').event( "bounce", {times:3}, slow );
    });


});


