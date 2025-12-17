// Responsive Design Positioning For Toggled Screen
//16/12/2016
//@author-RESPONSIVE

function checkWidth()
	{
		//console.log("CheckWidth Called");
		var width=$("#sidebar-wrapper").width();
		var parentWidth=$("#sidebar-wrapper").offsetParent().width();
		var percent=100*width/parentWidth;
		//console.log(percent);
		var winWidth=$(window).width();
		var canvasOffset=$("#wireCanvas").offset();
		//console.log(winWidth);
		if(percent=="0" || winWidth<768)
			{
			
				//$("#proceedBtn").css({ "left": "-49%","top":"8%"})
				//$("#procTxt").css({ "left": "-28%","top":"24%"})
			    $("#needle").css({ "left": "88.3%","top":"9%","width":"1%"}) 
		        $("#clockBody").css({ "left": "82%","top":"4%","width":"14%"}) 
				$("#clockBGImg").css({ "left": "80%","top":"2%","width":"17%"}) 
				
			}
		else	
			{
				//$("#proceedBtn").css({ "left": "-36%","top":"40%"})
				//$("#procTxt").css({ "left": "-15%","top":"50%"})
				$("#needle").css({ "left": "88.4%","top":"8%","width":"1%"}) 
				$("#clockBody").css({ "left": "81%","top":"3%","width":"16%"}) 
				$("#clockBGImg").css({ "left": "80%","top":"2%","width":"18%"}) 
			}
	}