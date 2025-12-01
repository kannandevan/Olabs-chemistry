// Responsive Design Positioning For Toggled Screen
//22/04/2017
//@author-RESPONSIVE

function checkWidth(){
	//console.log("CheckWidth Called");
	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	//console.log(percent);
	var winWidth=$(window).width();
	if(percent=="0"|| winWidth<768)
		{
			$(".voltmeter").css({"width": "90%"})
			$("#solution_water_an").css({"width": "18%"})
			$("#anode_sollabel").css({"width": "18.5%"})
			$("#cathode_sollabel").css({"width": "18.5%"})
			$("#solution_water_cd").css({"width": "18.5%","top":"37%"})
			$("#anodebeaker").css({"width": "20%","top":"20%"})
			$("#appartus_beaker").css({"top":"10%"})
			$("#volt_reading").css({"font-size":"180%"})
			$("#cathoderod,#Anoderod").css({"top":"14%"})
			$("#cathodebeaker").css({"width": "20%","top":"18.5%"})
			$("#voltmeter").css({"width": "73%","top":"7%","left": "12%","height":"96%"})
		
		}
	else	
		{
			$(".voltmeter").css({"width": "110%"})
			$("#solution_water_an").css({"width": "20%"})
			$("#anode_sollabel").css({"width": "20%"})
			$("#cathode_sollabel").css({"width": "20%"})
			$("#solution_water_cd").css({"width": "20%","top":"37.7%"})
			$("#anodebeaker").css({"width": "21.6%","top":"27%"})
			$("#cathodebeaker").css({"width": "21.6%","top":"26.5%"})
			$("#appartus_beaker").css({"top":"14%"})
			$("#cathoderod,#Anoderod").css({"top":"17%"})
			$("#volt_reading").css({"font-size":"200%"})
			$("#voltmeter").css({"width": "72%","top":"11%","left": "13%","height":"90%"})
			
		}
	


}
