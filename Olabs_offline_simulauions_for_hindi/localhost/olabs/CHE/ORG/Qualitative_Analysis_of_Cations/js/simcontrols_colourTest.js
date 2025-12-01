//Color test

function colourTest(){
	$('#colourTestWrap').show();
	$('#expHeading').html(Preliminary_Array[0]);
	function colourTestReset(){
		$("#Inference").hide();
	}
	colourTestReset();
	$("#color_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#smell_saltDra").attr('src',simPath+"images/"+random_salt[result]);
	inferenceMsg=infMsgPrefix+color_infMsg[result]+infMsgSufix;
	setTimeout(function(){
		$("#Inference").show();
	},1000);
}