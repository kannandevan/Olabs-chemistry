var lens=18,focalLength;
var screenDistance,helpMsg,helpcount=0;
$(document).ready(function(){
	gt = new Gettext({ 'domain' : 'messages' });
	$('#olabmenuBar li:first-child a').html(
		gt.gettext("HELP")
	);
	$('#expName').html(
		gt.gettext("Convex Lens Focal Length")
	);
	$(".labName").html(
		gt.gettext("Developed by Amrita University under research grant from <br> Department of Electronics & Information Technology")
	);
	helpMsg=[
		gt.gettext('Select the convex lens.'),
		gt.gettext('Select the distance between lens and <br>screen to get a clear image on the screen.'),
		gt.gettext('Find the distance from the scale.'),
		gt.gettext('Note down the focal length on the worksheet.<br>And click on the inference button'),
		gt.gettext('Choose the correct answer')
	]	
	dropbox = [
		gt.gettext('Lens 1'),
		gt.gettext('Lens 2'),
		gt.gettext('Lens 3'),
		gt.gettext('Lens 4'),
		gt.gettext('Lens 5'),
		gt.gettext('Lens 6')
	];
	inferenceMsg = [gt.gettext('Parallel rays meet at the focal point of convex lens. <br>Image is real and inverted.')]
	focalLength=[18,16,15,17,20,19];
	$(".varBox > p:nth-child(1)").html(gt.gettext('Select the convex lens:'));
	$("#Slider > p:nth-child(1)").html(gt.gettext('Distance between<br/> lens and screen V:'));
	$("#Slider > p:nth-child(3)").html(gt.gettext('cm'));
	$(".varTitle > label").html(gt.gettext('Show Result'));
//	$("#resultDiv > p:nth-child(1)").html(gt.gettext('The focal length<br/>of convex lens is:'));
//	$("#resultDiv > p:nth-child(3)").html(gt.gettext('cm'));
	$('#reset').attr('value',gt.gettext('Reset'));
	document.addEventListener("dragstart", function( event ) {
	event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);}, false);
	// Add values into dropdown list
	for (var i=0;i<dropbox.length;i++){
		$('<option/>').val(focalLength[i]).html(dropbox[i]).appendTo('#DropboxTest');
	}
	//dropdownbox change function------
	$("#DropboxTest").change(function(){
		helpcount=1;
		removeTrip();
		lens=$('#DropboxTest option:selected').val();
	//	$("#resultBox").attr("checked",false);
	////	$("#resultBox").attr("disabled", true);
    //            $("#resultDiv").hide();
		ChangeScreenDistance($('#lensScreentDis').val())
	});
	$("#DropboxTest").click(function(){
		// helpcount=1;
		removeTrip();
	})
});
//-------Function to change slider value
function ChangeScreenDistance(screenDistance){
	removeTrip();
	
	// $('#resultBox').prop('checked', false); 
	$("#screenDiv").css({'left':15+(40-screenDistance)*1.2+ '%'});// Screen position
	$("#distanceDiv").html(screenDistance);
	$("#zoomScale").css({'left':36-(40-screenDistance)*5.68+ '%'}); // Scale position
	if(((lens == 15)&&(screenDistance==15))||((lens == 16)&&(screenDistance==16))||((lens == 17)&&(screenDistance==17))||((lens == 18)&&(screenDistance==18))||((lens == 19)&&(screenDistance==19))||((lens == 20)&&(screenDistance==20))){ //show clear image
		helpcount=2;
		$("#imgOnScreen").css({'-webkit-filter':'blur(0px)'});
		$("#imgOnScreen").css({'display':'block'});
		$("#inference").css({'display':'block'});
		$('#inference').css('pointer-events','auto')
		// let isChecked = $('#resultBox').prop('checked'); 
		// if(!isChecked) // Check the checkbox
		// 	$("#resultBox").removeAttr("disabled");
		// $("#result").html(screenDistance)
		// $('input[type="checkbox"]').click(function(){
		// 	removeTrip();
		// 	helpcount++;
		// 	// $("#resultDiv").css({'display':'inline-block'});
		// 	// $("#resultBox").attr("disabled", true);
		// });		
	}
	else if(((lens == 15)&&((screenDistance==14)||(screenDistance==16)))||((lens == 16)&&((screenDistance==15)||(screenDistance==17)))||((lens == 17)&&((screenDistance==16)||(screenDistance==18)))||((lens == 18)&&((screenDistance==17)||(screenDistance==19)))||((lens == 19)&&((screenDistance==18)||(screenDistance==20)))||((lens == 20)&&((screenDistance==19)||(screenDistance==21)))){
		$("#imgOnScreen").css({'-webkit-filter':'blur(4px)'});//blur image
		$("#imgOnScreen").css({'display':'block'});
		$("#inference").css({'display':'none'});
		helpcount=1;
		

		// $("#resultDiv").css({'display':'none'});
		// $("#resultBox").attr("disabled", true);
	}
	else if(((lens == 15)&&((screenDistance==14.5)||(screenDistance==15.5)))||((lens == 16)&&((screenDistance==15.5)||(screenDistance==16.5)))||((lens == 17)&&((screenDistance==16.5)||(screenDistance==17.5)))||((lens == 18)&&((screenDistance==17.5)||(screenDistance==18.5)))||((lens == 19)&&((screenDistance==18.5)||(screenDistance==19.5)))||((lens == 20)&&((screenDistance==19.5)||(screenDistance==20.5)))){
		$("#imgOnScreen").css({'-webkit-filter':'blur(3px)'});//blur image
		$("#imgOnScreen").css({'display':'block'});
		$("#inference").css({'display':'none'});
		helpcount=1;
		// $("#resultDiv").css({'display':'none'});
		// $("#resultBox").attr("disabled", true);
	}
	else if(((lens == 15)&&((screenDistance==13.5)||(screenDistance==16.5)))||((lens == 16)&&((screenDistance==14.5)||(screenDistance==17.5)))||((lens == 17)&&((screenDistance==15.5)||(screenDistance==18.5)))||((lens == 18)&&((screenDistance==16.5)||(screenDistance==19.5)))||((lens == 19)&&((screenDistance==17.5)||(screenDistance==20.5)))||((lens == 20)&&((screenDistance==18.5)||(screenDistance==21.5)))){
		$("#imgOnScreen").css({'-webkit-filter':'blur(5px)'});//blur image
		$("#imgOnScreen").css({'display':'block'});
		$("#inference").css({'display':'none'});
		helpcount=1;
		// $("#resultDiv").css({'display':'none'});
		// $("#resultBox").attr("disabled", true);
	}
	else if(((lens == 15)&&((screenDistance==13)||(screenDistance==17)))||((lens == 16)&&((screenDistance==14)||(screenDistance==18)))||((lens == 17)&&((screenDistance==15)||(screenDistance==19)))||((lens == 18)&&((screenDistance==16)||(screenDistance==20)))||((lens == 19)&&((screenDistance==17)||(screenDistance==21)))||((lens == 20)&&((screenDistance==18)||(screenDistance==22)))){
		$("#imgOnScreen").css({'-webkit-filter':'blur(7px)'});//blur image
		$("#imgOnScreen").css({'display':'block'});
		$("#inference").css({'display':'none'});
		helpcount=1;
		// $("#resultDiv").css({'display':'none'});
		// $("#resultBox").attr("disabled", true);
	}
	else{
		$("#imgOnScreen").css({'display':'none'});
		$("#inference").css({'display':'none'});
		helpcount=1;
		// $("#resultDiv").css({'display':'none'});
		// $("#resultBox").attr("disabled", true);
	}
}

function resetFN(){
	window.location.reload();
}
function removeTrip(){
	if(tripClickFlag==true){
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag=false;
	}
} 