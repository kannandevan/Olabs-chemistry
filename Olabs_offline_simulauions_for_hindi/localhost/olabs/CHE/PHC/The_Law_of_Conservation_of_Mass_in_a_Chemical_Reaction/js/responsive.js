// Responsive Design Positioning For Toggled Screen
//03/03/2017
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
			$("#bgCanvas").css({"background-position-y": "69%"})
			$("#stillSetUp").css({"width": "95%","height": "146%","top": "-28%","left": "4%"})
			$("#anim3Still").css({"width": "95%","height": "146%","top": "-28%","left": "4%"})
			$("#animLoad").css({"width": "103%","height": "146%","top": "-28%","left": "0%"})
			$("#label_two").css({"width": "12%","height": "8.5%","top": "87%","left": "25.5%"})
			$("#label_one").css({"width": "12.5%","height": "7%","top": "88.4%","left": "8.8%"})
			$("#sodiumSulpht_Text").css({"width": "10.5%","left": "26.3%"})
			$("#label_three").css({"width": "11.5%","left": "55.8%"})
			$("#clickObjAnim4").css({"top": "44%","left": "82%"})
			$("#clockLabel").css({"top": "30%","left": "14%","height": "9%"})
			$("#timeText").css({"top": "30%","left": "23%"})
			$("#bariumChlrd_text").css({"width": "12%"})
			$("#inference").css({"width": "7%"})
			$("#thread_text").css({"left": "13%"})
			$("#clickObjAnim1").css({"left": "29%"})
			
		}
	else	
		{
			$("#bgCanvas").css({"background-position-y": "40%"})
			$("#stillSetUp").css({"width": "108%","height": "130%","top": "-15%","left": "-3%"})
			$("#anim3Still").css({"width": "108%","height": "130%","top": "-15%","left": "-3%"})
			$("#animLoad").css({"width": "108%","height": "130%","top": "-15%","left": "-3%"})
			$("#label_two").css({"width": "14%","height": "8%","top": "87.3%","left": "21.5%"})
			$("#sodiumSulpht_Text").css({"width": "14.5%","left": "21.3%"})
			$("#label_three").css({"width": "13.5%","left": "55.5%"})
			$("#bariumChlrd_text").css({"width": "14%"})
			$("#label_one").css({"width": "14%","height": "6%","top": "88.6%","left": "2.5%"})
			$("#thread_text").css({"left": "5%"})
			$("#clickObjAnim4").css({"top": "48%","left": "85%"})
			$("#clickObjAnim1").css({"left": "26%"})
			$("#clockLabel").css({"top": "35%","left": "16%","height": "8%"})
			$("#timeText").css({"top": "37%","left": "16%"})
			$("#inference").css({"width": "9%"})
		}
	


}
