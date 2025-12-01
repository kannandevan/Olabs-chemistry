// Responsive Design Positioning For Toggled Screen
//20/01/2017
//@author-RESPONSIVE

function checkWidth(){
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
			
		$("#TableImage").css({ "width": "84%"})
		$("#BlockImage").css({ "height": "67%"})
		$(".rotate,.NrCn").css({ "font-size": "81%"})
		$("#hook").css({ "left": "42%"})
		$("#weightBar").css({ "left": "17%"})
		$("#weightBlock").css({ "left": "75%"})
		$("#twineTwo").css({ "right": "20%"})
		$("#twine").css({ "right": "22%","width": "35%"})

	
		}

}