var objectScaleVal=0,objectDistance = 50,screenDistance= 150,fLength=15,h=2,u=45,screenScaleVal=150,helpcount=0,infercount=0;
$(document).ready(function(){
	gt = new Gettext({ 'domain' : 'messages' });
	// $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#expName').html(gt.gettext("Convex Lens-Image formation and Magnification"));
	// $(".labName").html(gt.gettext("Developed by Amrita University Under research grant from <br> Department of Electronics & Information Technology"));	
	$(".varBox > p:nth-child(1)").html(gt.gettext('Select the focal length f:'));
	$("#objectLensDiv > p:nth-child(1)").html(gt.gettext('Distance between <br> object and lens u:'));
	$("#objectLensDiv > p:nth-child(3)").html(gt.gettext('cm'));
	$("#lensScreenDiv > p:nth-child(1)").html(gt.gettext('Distance between <br> lens and screen v:'));
	$("#lensScreenDiv > p:nth-child(3)").html(gt.gettext('cm'));
	$(".varTitle > label").html(gt.gettext('Show Result'));
	$("#resultMagnificationDiv > p:nth-child(1)").html(gt.gettext('Magnification M:'));
	$("#resultHeightDiv > p:nth-child(1)").html(gt.gettext('Height H:'));
	$("#resultHeightDiv > p:nth-child(3)").html(gt.gettext('cm'));
	helpMsg=[gt.gettext('Select the focal length of convex lens.'),gt.gettext('Select the distance between object and lens.'),gt.gettext('Select the distance between lens and screen.'),gt.gettext('Note the values in the worksheet.<br> And click on the inference buttton'),gt.gettext('Choose the correct answer')]	
	
	inferenceMsg = [gt.gettext('When object is placed beyond 2f the image will <br>be formed between f and 2f. Size of the image is diminished,<br> Image is real and inverted.'),gt.gettext('When object is placed at 2f the image will be<br> formed at 2f in the opposite side of lens.<br> Size of the image and object is same.<br> Image is real and inverted.'),gt.gettext('When object is placed between f and   2f the image will be<br> formed beyond 2f in the opposite side of lens.<br> Size of the image is enlarged.<br> Image is real and inverted.'),
	gt.gettext('When object is placed at f the image will<br> be formed at infinity.<br> Size of the image and object is highly enlarged.<br> Image is real and inverted.'),gt.gettext('When object is placed between f and optical centre<br> the image will be formed on same side of object. <br>Size of the image and object is enlarged.<br> Image is virtual and erect.')]
	document.addEventListener("dragstart", function( event ) {
	event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);}, false);
	focalLength=[15,16,17,18,19,20];
	dropbox = [gt.gettext('15 cm'),gt.gettext('16 cm'),gt.gettext('17 cm'),gt.gettext('18 cm'),gt.gettext('19 cm'),gt.gettext('20 cm')];
	// Add values into dropdown list
	for (var i=0;i<dropbox.length;i++){
		$('<option/>').val(focalLength[i]).html(dropbox[i]).appendTo('#DropboxTest');
	}
	fLength=$('#DropboxTest option:selected').val();
	$("#objectF1popupText,#objectF2popupText").html(fLength+gt.gettext(' cm'))  //popup label of F1
	$("#object2F1popupText,#object2F2popupText").html(fLength*2+gt.gettext(' cm')) //popup label of F2
	//dropdownbox change function------
	$("#DropboxTest").change(function(){
		helpcount=1;
		removeTrip();
		ShowPopup();
		fLength=$('#DropboxTest option:selected').val();
		$("#screenImg").css({'display':'none'});
		$("#objectF1popupText,#objectF2popupText").html(fLength+gt.gettext(' cm'))  //popup label of F1
		$("#object2F1popupText,#object2F2popupText").html(fLength*2+gt.gettext(' cm')) //popup label of F2
		$("#objectF1Div").css({'left':78+(15-fLength)*2.4+ 'px'});// F1 position 
		$("#object2F1Div").css({'left':78+(15-fLength)*4.4+ 'px'});// 2F1 position
		$("#objectF2Div").css({'left':198-(15-fLength)*2+ 'px'}); // F2 position
		$("#object2F2Div").css({'left':238-(15-fLength)*4.4+ 'px'}); // 2F2 position
	});
	$("#candlepopupText").html(objectScaleVal+gt.gettext(' cm'));
	$("#screenPopupText").html(screenScaleVal+gt.gettext(' cm'));
	$("#objectDis").html(objectDistance)
	$("#screenDis").html(screenDistance);
	$("#textHeight").html(gt.gettext("Height of the candle flame : 2cm"));
	$("#lenspopupText").html(gt.gettext("50 cm"));
	$("#objectF1,#objectF2").html(gt.gettext("F"));
	$("#object2F1,#object2F2").html(gt.gettext("2F"));
	$("#reset").attr('value',gt.gettext('Reset'));
});

//-------Function to hide F and 2F
function HidePopup()
{
	$("#objectF1Popup,#objectF1popupText,#object2F1Popup,#object2F1popupText,#objectF2Popup,#objectF2popupText,#object2F2Popup,#object2F2popupText").hide();
}
//-------Function to show F and 2F
function ShowPopup()
{
	$("#objectF1Popup,#objectF1popupText,#object2F1Popup,#object2F1popupText,#objectF2Popup,#objectF2popupText,#object2F2Popup,#object2F2popupText").show();
}

//-------Function to change slider value
function ChangeObjectDistance(objectDistance){
	HidePopup();
	helpcount=2;
	removeTrip();
	$("#screenImg").css({'display':'none'});
	u = $('#ObjectLensDis').val()
	$("#objectDis").html(objectDistance)
	$("#candleDiv").css({'left':(50-objectDistance)*2.5+ 'px'});// candle position
	objectScaleVal= 50-objectDistance;
	$("#candlepopupText").html(objectScaleVal+gt.gettext(' cm'));
	ChangeScreenDistance($('#LensScreenDis').val())
} 

function ChangeScreenDistance(screenDistance) {
	removeTrip(); 
	$("#resultBox").attr("checked",false);   //checkbox unchecked
	let isChecked = $('#resultBox').prop('checked'); 
	if(!isChecked) // Check the checkbox
		$("#resultBox").removeAttr("disabled");
	$("#resultHeightDiv,#resultMagnificationDiv").css({'display':'none'});
	HidePopup();
	$("#screenDis").html(screenDistance);
	$("#screenDiv").css({'left':164+(screenDistance-20)*2.45+ 'px'});// screen position
	screenScaleVal = 70+(screenDistance-20);
	$("#screenPopupText").html(screenScaleVal+gt.gettext(' cm'));
	v = ((-(fLength*u))/(fLength-u));
	height = (h*-(v/u));
	m = height/h;
	if(screenDistance == Math.round(v)){
		$("#inference").css({'display':'block','pointer-events':'auto'});
		if(u == v){
			infercount = 1;
		}
		else if((fLength==15)&&(u>30)||(fLength==16)&&(u>32)||(fLength==17)&&(u>34)||(fLength==18)&&(u>36)||(fLength==19)&&(u>38)||(fLength==20)&&(u>40)){
			infercount = 0;
		}
		else{
			infercount = 2;
		}
		helpcount=3;
		// $("#resultBox").removeAttr("disabled");
		$("#screenImg").css({'-webkit-filter':'blur(0px)'});//blur image
		$("#screenImg").css({'display':'block'});
		$("#resultHeightDiv > p:nth-child(3)").css({'display':'inline-block'});
		// showResult(u,height,m,fLength)
	}
	else if((screenDistance == (Math.round(v))-1)||(screenDistance == (Math.round(v))+1)){
		$("#inference").css('display','none');
		$("#screenImg").css({'-webkit-filter':'blur(2px)'});//blur image
		$("#screenImg").css({'display':'block'});
		helpcount=2;
		// $("#resultBox").attr("disabled", true);
		// $("#resultHeightDiv,#resultMagnificationDiv").css({'display':'none'});
	}
	else if((screenDistance == (Math.round(v))-2)||(screenDistance == (Math.round(v))+2)){
		$("#inference").css('display','none');
		$("#screenImg").css({'-webkit-filter':'blur(3px)'});//blur image
		$("#screenImg").css({'display':'block'});
		// $("#resultBox").attr("disabled", true);
		// $("#resultHeightDiv,#resultMagnificationDiv").css({'display':'none'});
		helpcount=2;
	}
	else if((screenDistance == (Math.round(v))-3)||(screenDistance == (Math.round(v))+3)){
		$("#inference").css('display','none');
		$("#screenImg").css({'-webkit-filter':'blur(4px)'});//blur image
		$("#screenImg").css({'display':'block'});
		// $("#resultBox").attr("disabled", true);
		// $("#resultHeightDiv,#resultMagnificationDiv").css({'display':'none'});
		helpcount=2;
	}
	else if((screenDistance == (Math.round(v))-4)||(screenDistance == (Math.round(v))+4)){
		$("#inference").css('display','none');
		$("#screenImg").css({'-webkit-filter':'blur(5px)'});//blur image
		$("#screenImg").css({'display':'block'});
		helpcount=2;
		// $("#resultBox").attr("disabled", true);
		// $("#resultHeightDiv,#resultMagnificationDiv").css({'display':'none'});
	}
	else if(fLength == u){ // Image formed at infinity
		helpcount=3;
		$("#inference").css({'display':'block','pointer-events':'auto'});
		infercount = 3;
		showResult(u,height,m,fLength)
		$("#rightArrowDiv").css({'display':'block'});
		$("#rightArrowDiv p").text(gt.gettext("Image at infinity"));
		$("#leftArrowDiv").css({'display':'none'});
		// $("#resultHeightDiv > p:nth-child(3)").css({'display':'none'});
	}
	else if((Math.round(v)) > 100){ // Image formed at long distance
		helpcount=3;
		$("#inference").css({'display':'block','pointer-events':'auto'});
		infercount = 2;
		showResult(u,height,m,fLength);console.log(height)
		$("#rightArrowDiv").css({'display':'block'});
		$("#rightArrowDiv p").text(gt.gettext("Image at large distance"))
		$("#leftArrowDiv").css({'display':'none'});
		// $("#resultHeightDiv > p:nth-child(3)").css({'display':'inline-block'});
	}
	else if(((Math.round(v)) < 0)){ // Virtual image formed
		helpcount=3;
		$("#inference").css({'display':'block','pointer-events':'auto'});
		infercount = 4
		showResult(u,height,m,fLength)
		$("#leftArrowDiv p").html(gt.gettext("Virtual image <br/> is formed"))
		$("#leftArrowDiv").css({'display':'block'});
		$("#rightArrowDiv").css({'display':'none'});
		// $("#resultHeightDiv > p:nth-child(3)").css({'display':'inline-block'});
	}
	else{
		helpcount=2;
		$("#inference").css('display','none');
		$("#screenImg").css({'display':'none'});
		$("#rightArrowDiv").css({'display':'none'});
		$("#leftArrowDiv").css({'display':'none'});
		// $("#resultBox").attr("disabled", true);
		// $("#resultHeightDiv,#resultMagnificationDiv").css({'display':'none'});
	}
	$("#screenImg").css({'height':(33+(-2-height)*7.375)+ 'px'});// screen position
}

function resetFN(){
	window.location.reload();
}	

function showResult(u,height,m,fLength){
	$("#resultBox").removeAttr("disabled");
	$('input[type="checkbox"]').click(function(){
		helpcount=4;
		removeTrip();
		$("#resultBox").attr("disabled", true);
			if(fLength == u){
				$("#resultMagnification").html(gt.gettext("Highly enlarged"));
				$("#resultHeight").html(gt.gettext("Highly enlarged"));
			}
			else{
				$("#resultMagnification").html(m.toFixed(2))
				$("#resultHeight").html(height.toFixed(2));
			}
			$("#resultMagnificationDiv").css({'display':'inline-block'});
			$("#resultHeightDiv").css({'display':'inline-block'});
			if(height == 'Infinity'){
				$("#resultText").text(gt.gettext("Real and inverted image"));
			}
			else if(height < 0)
			{
				$("#resultText").text(gt.gettext("Real and inverted image"));
			}
			else if(height > 0){
				$("#resultText").text(gt.gettext("Virtual and erect image"));
			}
		});
}

function removeTrip(){
	if(tripClickFlag==true){
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag=false;
	}
} 
