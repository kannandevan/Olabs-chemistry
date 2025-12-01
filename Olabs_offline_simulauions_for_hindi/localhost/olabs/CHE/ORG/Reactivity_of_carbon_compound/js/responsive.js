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
			$("#FirstExpmntContainer").css({"width": "82%","height": "91%","left": "15%"})
			$("#SecondExpmntContainer").css({"width": "110%","height": "130%","top": "-20%"})
			$("#TesttubeStand_Labels").css({"width": "90%","height": "46%","top": "52%","left": "3%"})
			$("#Second_exp_testube").css({"width": "6%","height": "52%","top": "29%"})
			$("#Acid_TestTube_Three").css({"width": "4.5%","height": "50%","top": "35%","left": "22.5%"})
			$("#BackSide_testtube_hand").css({"width": "100%","height": "7%","top": "67%","left": "10%","background-size": "82% 100%"})
			$("#Fourth_Testtube_set").css({"width": "100%","height": "76%","top": "14%","left": "0%","background-size": "104% 100%"})
			$("#Dropper").css({"top": "9%","height": "126%"})
			$("#Acid_Flask").css({"width": "7.5%","height": "21%"})
			$("#Right_solution").css({"top": "65%","left": "70.8%","width":"5%"})
			$("#Left_solution").css({"top": "65%","left": "26%"})
			$("#DippInAcid").css({"top": "42%"})
			$("#Flask_drop").css({"left": "29%"})
			$("#Left_solution_ring").css({"left": "26%"})
			$("#TubeWater").css({"left": "25%"})
			$("#Exp_four_label_two,#Fourth_exp_label_text_two").css({"width": "19%"})
			$("#Exp_four_label,#Fourth_exp_label_text").css({"width": "15%"})
			$("#Stain").css({"top": "87%"})
			$("#MovingSolution").css({"top": "62.5%","left": "26%"})
			$("#Third_exp_label_text_Two").css({"left": "74%","font-size":"110%"})
			$("#Third_exp_label_text_One").css({"left": "2%","font-size":"110%"})
			$("#BackgroundImgTree").css({"background-position-y": "80%"})
			$("#BackgroundImgFour").css({"background-position-y": "75%"})
		
		}
	else	
		{
			$("#FirstExpmntContainer").css({"width": "108%","height": "91%","left": "4%"})
			$("#SecondExpmntContainer").css({"width": "100%","height": "100%","top": "0%"})
			$("#Second_exp_testube").css({"width": "7%","height": "55%","top": "22%"})
			$("#TesttubeStand_Labels").css({"width": "98%","height": "38%","top": "57%","left": "1%"})
			$("#BackgroundImgTree").css({"background-position-y": "0%"})
			$("#BackgroundImgFour").css({"background-position-y": "0%"})
			$("#Dropper").css({"top": "31%","height": "100%"})
			$("#Acid_TestTube_Three").css({"width": "5.5%","height": "43%","top": "41.5%","left": "21.5%"})
			$("#DippInAcid").css({"top": "48%"})
			$("#Stain").css({"top": "86%"})
			$("#Third_exp_label_text_Two").css({"left": "78%"})
			$("#Third_exp_label_text_One").css({"left": "2%"})
			$("#Right_solution").css({"top": "65%","left": "74%","width":"6%"})
			$("#Fourth_Testtube_set").css({"width": "100%","height": "73%","top": "15%","left": "0%","background-size": "cover"})
			$("#BackSide_testtube_hand").css({"width": "85%","height": "7%","top": "66%","left": "11%","background-size": "cover"})
			$("#Left_solution").css({"top": "64%","left": "27.5%"})
			$("#Acid_Flask").css({"width": "9.5%","height": "20%"})
			$("#MovingSolution").css({"left": "27.5%"})
			$("#Flask_drop").css({"left": "30%"})
			$("#TubeWater").css({"left": "26.5%"})
			$("#Left_solution_ring").css({"left": "27.5%"})
			$("#Exp_four_label_two,#Fourth_exp_label_text_two").css({"width": "24%"})
			$("#Exp_four_label,#Fourth_exp_label_text").css({"width": "18%"})
		}

}
