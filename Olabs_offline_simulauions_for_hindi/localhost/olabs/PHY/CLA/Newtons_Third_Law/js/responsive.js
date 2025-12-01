// Responsive Design Positioning For Toggled Screen
//24/01/2016
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

			$("#handCanvas").css({ "position": "absolute","top": "35%","left": "75%","width": "41%"})
	
		}
	else	
		{
			
			
			
		}
}