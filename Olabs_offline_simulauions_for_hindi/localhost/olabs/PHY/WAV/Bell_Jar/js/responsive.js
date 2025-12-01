// Responsive Design Positioning For Toggled Screen
//01/02/2016
//@author-RESPONSIVE

function checkWidth(){
	//console.log("CheckWidth Called");
	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	var bellCanvas = document.getElementById('bell');
	//console.log(percent);
	var winWidth=$(window).width();
	
	if($("#wrapper").hasClass("toggled"))
		{
			$("#volimg").animate({left:'3%'})
			$("#linegraph").animate({left:'0%'})
		}
	else
		{ 
			$("#volimg").animate({left:'90%'})
			$("#linegraph").animate({left:'69%'}) 	
		}
	
	if(percent=="0" || winWidth<768)
		{

			$("#bgtotal").css({"position":"absolute","width": "80%","height": "100%","left":"11%"})
		    $("#bell").css({"width": "42%","left": "55%","top": "18%"})
			$("#bellMoveimg").css({"width": "8%","left": "56%","top": "22%","height": "21%"})
			
			$("#connector").css({"left": "80%"})
			$("#battery").css({"left": "73%","width": "15%"})
			$("#pump").css({"width": "13%","left": "20%","top": "60%","height": "16%"})
			$("#ebell").css({"width": "11%","left": "49%","top": "35%","height": "20%"})
			$("#belljartip").css({"left": "41%","width": "26%"})
			$("#cork").css({"left": "46%","width": "16%"})
			$("#bell").css({"left": "54%","width": "48%"})
			$("#cwires").css({"left": "66%","width": "6%"})
			$("#key").css({"left": "78%"})


		}
	else	
		{

			$("#bgtotal").css({"width": "100%","height": "100%","left":"0%"})
			$("#bell").css({"left": "54%","width": "57%","top": "19%"})
			

		}

	
}