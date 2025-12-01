// Responsive Design Positioning For Toggled Screen
//25/02/2017
//@author-RESPONSIVE


function checkWidth(){

	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	var winWidth=$(window).width();	
	if(percent=="0"|| winWidth<768)
		{
		
			$("#thermometerbeakerImg").css({"left": "66%","top":"8%","width": "44%"})
			$("#readingMask").css({"left": "77.5%","top":"51%"})
			$("#quicklimeImg").css({"left": "73%","top":"81%"})
			$("#watchglassImg").css({"left": "5%","width": "22%"})
			$("#bubbles").css({"left": "67%","top": "60%"})
			$("#SpatullaDiv").css({"width": "16%"})
			//$(".Drops").css({"left": "75%"})
			$("#redmarkDiv").css({"left": "79%"})
			$("#thermometerLabel").css({"left": "80%"})
			$("#BeakerSlaked").css({"width": "25%"})
			$("#dropperImg").css({"width": "17%"})
			$("#thermometerReadingImg").css({"top": "-185%"})
			$("#boyblowingSln").css({"top": "50%"})
			$("#mouthblowImg").css({"top": "-5%"})
			
			$("#SlakedlimestillImg").css({"left": "10%","width": "24%"})
			$("#dropperstandImg").css({"left": "46%","top":"51%","width": "16%"})
			//$("#corkTube").css({"left": "80%","top":"34%","width": "10%"})
			$("#testtubeImgDiv").css({"left": "76%","top":"39%","height": "40%"})
			$("#testtubestandImg").css({"width": "24%"})
		}
	else	
		{
			$("#thermometerbeakerImg").css({"left": "68%","top":"12%","width": "51%"})
			$("#watchglassImg").css({"left": "1%","width": "30%"})
			$("#readingMask").css({"left": "81.5%","top":"48%"})
			$("#quicklimeImg").css({"left": "77%","top":"78%"})
			$("#SpatullaDiv").css({"width": "21%"})
			$("#BeakerSlaked").css({"width": "31%"})
			$("#thermometerLabel").css({"left": "85%"})
			//$(".Drops").css({"left": "78%"})
			$("#bubbles").css({"left": "70%","top": "58%"})
			$("#redmarkDiv").css({"left": "83%"})
			$("#thermometerReadingImg").css({"top": "-123%"})
			$("#dropperImg").css({"width": "19%"})
			
			$("#SlakedlimestillImg").css({"left": "8%","width": "31%"})
			$("#dropperstandImg").css({"left": "45%","top":"50%","width": "19%"})
			$("#testtubestandImg").css({"width": "28%"})
			$("#testtubeImgDiv").css({"left": "77%","top":"46%","height": "30%"})
			//$("#corkTube").css({"left": "81%","top":"34%","width": "12%"})
			
			$("#boyblowingSln").css({"top": "58%"})
			$("#mouthblowImg").css({"top": "-3%"})
			
		}
	


}



	