// Responsive Design Positioning For Toggled Screen
//30/01/2017
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
	if($("#wrapper").hasClass("toggled"))
	{
		$("#stopwatchfull").animate({right: '75%'});
		//$("#hook #hookWeightDiv").css({ "right": "45%"})
	}
	else
	{
		$("#stopwatchfull").animate({right: "0%"});
	}

}