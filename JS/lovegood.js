/********************
		NAV BAR 
********************/

$(document).ready(function(){

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").click(function(){
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});
});


/**************************************
            PHOTO GALLERY
***************************************/

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


/**************************************
		 DATE PICKER
***************************************/

$( function() {
    $( "#datepicker" ).datepicker();
  } );



/**************************************
		COLLAPSE PARAGRAPHE
***************************************/

function toggle2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	var btnGo = document.getElementById('showOff');
	
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "Read more";
		btnGo.value = 'Show all offers';
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Close X";
		btnGo.value = 'close offers';
	}
}

function toggle3(contentDiv, controlDiv) {
        if (contentDiv.constructor == Array) {
                for(i=0; i < contentDiv.length; i++) {
                     toggle2(contentDiv[i], controlDiv[i]);		
                }
        }
        else {
               toggle2(contentDiv, controlDiv);
        }
}

/*****************************************/





