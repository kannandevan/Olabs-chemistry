// Responsive Design Positioning For Toggled Screen
//07/03/2017
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

			$(".item").css({"height": "18%","top": "82%","width": "12%"})
			$("#arrowimage").css({"left": "31.8%"})   
			$("#arrowimage img").css({"left": "0%","top": "20%"})   
			$(".item img").css({"width": "95%"})
			$("#Mainimage img").css({"width": "60%"})
			$("#zoomimage").css({"width": "30%","height": "79%","left": "65%"})
			$("#springimage").css({"left": "31.5%"})
			$("#tooltip2").css({"padding-bottom": "5%","top":"73%"})
			$("#copperimage,#lockimage,#stoneimage,#woodimage,#bobimage").css({"width": "6%","left": "30.5%","top": "65%"})
			

		}
	else	
		{
			$("#Mainimage img").css({"width": "80%"})
			$(".item img").css({"width": "100%"})
			$(".item").css({"height": "18%","top": "82%","width": "14%"})
			$("#springimage").css({"left": "39%"})
			$("#arrowimage").css({"left": "39%"})   
			$("#zoomimage").css({"width": "38%","height": "77%","left": "61%"})
			$("#arrowimage img").css({"left": "12%","top": "33%"})  
			$("#tooltip2").css({"padding": "1%","top":"75%"})
			$("#copperimage,#lockimage,#stoneimage,#woodimage,#bobimage").css({"width": "8%","left": "37%","top": "60%"})
		}
}