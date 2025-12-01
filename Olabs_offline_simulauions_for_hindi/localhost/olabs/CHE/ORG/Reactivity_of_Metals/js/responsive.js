// Responsive Design Positioning For Toggled Screen
//25/02/2017
//@author-RESPONSIVE


function checkWidth(){


	$(window).resize(function(){
		if(percent=="0"|| winWidth<768){
		
			$("#metalPieceC1,#metalPieceC2,#metalPieceB1,#metalPieceB2,#metalPieceA1,#metalPieceA2").css({"top":"84%"})
		
		}
		else{
	
			$("#metalPieceC1,#metalPieceC2,#metalPieceB1,#metalPieceB2,#metalPieceA1,#metalPieceA2").css({"top":"74%"})
	
		}
	
	});

	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	var winWidth=$(window).width();	
	if(percent=="0"|| winWidth<768)
		{
		
			$("#waterC").css({"left": "52.3%","top":"69%","height": "20%"})
			$("#waterB").css({"left": "%","top":"69%","height": "20%"})
			$("#waterA").css({"left": "","top":"69%","height": "20%"})
			
			$("#AlSulphateC,#ZnSulphateC,#FeSulphateC,#AlSulphateA,#ZnSulphateA,#FeSulphateA,#AlSulphateB,#ZnSulphateB,#FeSulphateB").css({"left": "","top":"69%","height": "20%"})
			
			//
			
			$("#coppersulphate_AluminiumA,#zincsulphate_AluminiumB,#Ferroussulphate_AluminiumC,#coppersulphate_AluminiumB,#coppersulphate_AluminiumC,#zincsulphate_AluminiumA,#zincsulphate_AluminiumC,#Ferroussulphate_AluminiumA,#Ferroussulphate_AluminiumB,#coppersulphate_zincA,#coppersulphate_zincB,#coppersulphate_zincC,#Ferroussulphate_zincA,#Ferroussulphate_zincB,#Ferroussulphate_zincC,#coppersulphate_IronA,#coppersulphate_IronB,#coppersulphate_IronC").css({"top":"85%"})
			
			$("#AlSulphateC").css({"left": "52.4%"})
			$("#AlSulphateB").css({"left": "27%"})
			
			$("#beakers").css({"width": "96%"})
			$("#needle").css({"width": "1%"})
			$("#cheLab").css({"font-size": "3vw","left": "37%"})
			$("#bgCanvas").css({"background-position-x": "none"})
			$("#clockBody").css({"top":"2%"})
			$("#onehour").css({"top":"30%"})
			$("#imgMetal").css({"left": "0%","top":"12%","width":"90%"})
			$("#imgDrag").css({"left": "83%","top":"80%"})
			$("#imgMetalCont").css({"top":"82%","left": "74%"})
					
		}
	else	
		{
			
			$("#waterC").css({"left": "53.3%","top":"66%","height": "12%"})
			$("#waterB").css({"left": "27.5%","top":"66%","height": "12%"})
			$("#waterA").css({"left": "1.5%","top":"66%","height": "12%"})
			
			$("#AlSulphateC,#ZnSulphateC,#FeSulphateC,#AlSulphateA,#ZnSulphateA,#FeSulphateA,#AlSulphateB,#ZnSulphateB,#FeSulphateB").css({"left": "","top":"66%","height": "12%"})
			
			//$("#metalPieceC1,#metalPieceC2,#metalPieceB1,#metalPieceB2,#metalPieceA1,#metalPieceA2").css({"top":"74%"})
			
			$("#AlSulphateC").css({"left": "53.3%"})
			$("#AlSulphateB").css({"left": "27.5%"})
			
			$("#coppersulphate_AluminiumA,#zincsulphate_AluminiumB,#Ferroussulphate_AluminiumC,#coppersulphate_AluminiumB,#coppersulphate_AluminiumC,#zincsulphate_AluminiumA,#zincsulphate_AluminiumC,#Ferroussulphate_AluminiumA,#Ferroussulphate_AluminiumB,#coppersulphate_zincA,#coppersulphate_zincB,#coppersulphate_zincC,#Ferroussulphate_zincA,#Ferroussulphate_zincB,#Ferroussulphate_zincC,#coppersulphate_IronA,#coppersulphate_IronB,#coppersulphate_IronC").css({"top":"74%"})
			
			$("#beakers").css({"width": "98%"})
			$("#cheLab").css({"font-size": "200%","left": "32%"})
			$("#bgCanvas").css({"background-position-x": "56%"})
			
			$("#imgMetal").css({"left": "0%","top":"12%","width":"100%"})
			$("#imgDrag").css({"left": "84%","top":"73%"})
			$("#needle").css({"width": "none"})
			$("#imgMetalCont").css({"top":"73%"})
			
		}
	


}



	