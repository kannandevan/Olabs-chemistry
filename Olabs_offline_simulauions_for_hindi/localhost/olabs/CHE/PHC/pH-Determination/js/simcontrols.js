// JavaScript Document
var labelArray;
var liquidLabl;
var imgs;
var compoundArray;
var msgs;
window.onload = function init(){
		document.getElementById("expName").innerHTML=gt.gettext("Determination of pH");
		//$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));		
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
		
		labelArray=[gt.gettext("ACIDIC"),gt.gettext('NEUTRAL'),gt.gettext('BASIC'),gt.gettext('Universal Indicator')];
		liquidLabl=[gt.gettext("Lemon juice"),gt.gettext("Tomato juice"),gt.gettext( "Orange juice"), gt.gettext("Pineapple juice"), gt.gettext("Amla juice"),gt.gettext(" Mango juice"), gt.gettext("Common salt"), gt.gettext("Sugar"),gt.gettext(" Baking soda"),gt.gettext(" Milk"),gt.gettext( "Vinegar"), gt.gettext("Butter milk"), gt.gettext("Bleaching powder"),gt.gettext("Washing soda"),gt.gettext("Milk of magnesia")," 0.1M HCl","0.25M HCN","0.001M NaOH","0.1M CH<sub>3</sub>COOH","0.1M NH<sub>4</sub>OH","KCl", "CuSO<sub>4</sub>5H<sub>2</sub>O","NaHCO<sub>3</sub>","NH<sub>4</sub>Cl","FeSO<sub>4</sub>","Na<sub>2</sub>SO<sub>3</sub>","CH<sub>3</sub>COONa"];
		imgs=["Lemon_juice.png", "Tomato_Juice.png", "Orange_Juice.png", "Pineapple_Juice.png", "Amla_juice.png", "Mango_Juice.png","Common_Salt.png", "Sugar.png", "Baking_Soda.png","Milk.png","Vinegar.png", "Butter_milk.png","Bleaching_Powder.png", "Washing_Soda.png", "Milk_Magnesia.png","0.1MHcl.png", "0.25M_HCN.png", "0.001M_NaOH.png","0.1M_CH3COOH.png","0.1M_NH4OH.png","KCl.png","CuSO45H2O.png", "NaHCO3.png", "NH4Cl.png","FeSO4.png", "Na2SO3.png", "CH3COONa.png"];
		
		 compoundArray=['com1','com2','com3','com4','com5','com6','com7','com8','com9','com10','com11'];	
		 msgs=[gt.gettext('Drag the dropper and dip into the solution to suck it and drop it over the strip to pour the solution.'),gt.gettext('Drag the dropper to the sample solution to add universal indicator.'),gt.gettext('This dropper cannot be used now, as the universal indicator has already been poured.'),gt.gettext('Click any one of the beaker to start the experiment.'),gt.gettext('Drag the dropper and dip into the sample solution to suck it. Or drag the universal indicator dropper to drop it into the sample solution.'),gt.gettext('Click on the strips to select.'),gt.gettext( 'Drag the colour strip to the sample solution or indicator strip to identify the pH.'),gt.gettext('Click on the information icon to see the inference.'),gt.gettext('Litmus paper')];


		$('#c1').html(gt.gettext("Vegetable & fruit juice"));
		$('#c2').html(gt.gettext("House hold items"));
		$('#c3').html(gt.gettext("Acids & bases in the lab"));
		$('#c4').html(gt.gettext("Salts in water"));
		$('#asoln').html(gt.gettext("Select the aqueous solution:" ));
		$('#ssoln').html(gt.gettext("Click on any one of the sample solution to start the experiment "));
		$('#stripslabelTxt1').html(labelArray[0]);
		$('#stripslabelTxt2').html(labelArray[1]);
		$('#stripslabelTxt3').html(labelArray[2]);
		$('#labelTxt').html(labelArray[3]);
		$('#reset').attr('value',gt.gettext("Reset"));
		
		for(var i=1;i<28;i++){
		
		$('#labelTxt'+i).html(liquidLabl[i-1]);
		}
		$('#solnDiv1').css({
			display:'block'	,
		})
		
		 $('#solnDiv1,#solnDiv2,#solnDiv3,#solnDiv4').qtip({	 
				 content: msgs[3],
				 style: { textAlign: 'center','font-size': 14,color:'#593E1A',width: 165, border: {width: 1,radius: 3 },tip: true,name: 'cream',},
				 position: {adjust: { x: -150, y: -90 } ,corner: {target: 'bottomRight',tooltip: 'topLeft'},},
				 show: false,hide:false,
		});
		
		  for(var i=1;i<7;++i){
				$('#beaker'+i).css({
				display:'block'	,
				});	
		  }
		  loadStrip_Tooltip();
		
 }	  
	
//var stripPos=[[],[]];
var stripPosTop = [];
var stripPosLeft = [];

var selection=1;
var beakerselection=0;
var pick=0;

/// canvas for bg image
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 569;
BGCanvas.height = 440;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
bgCtx.drawImage(bgImg,0,0);
};
bgImg.src=simPath+'images/BG2.png';


$(document).ready(function() 
{
		
		
});

/// initializing tooltip for information icon...
function loadTooltip(){
	
	     $('#whiteBoard').qtip({
			 content:msgs[8] ,style: { textAlign: 'center','font-size': 14,color:'#593E1A',width: 100,border: {width: 1,radius: 3 },tip: true,name: 'cream'},
			 position: {adjust: { x: 85, y: 3 } ,corner: {target: 'topLeft',tooltip: 'bottomRight'} },
		 }); 
	
	     $('#indicatorBottle').qtip({
			 content:msgs[4] ,style: { textAlign: 'center','font-size': 14,color:'#593E1A',width: 230,border: {width: 1,radius: 3 },tip: true,name: 'cream'},
			 position: {corner: {target: 'topLeft',tooltip: 'bottomRight'} },
			 show: false,hide:false,
		 }); 
		 if(test!=1){
			 $('#dropper1').qtip({	 
					 content:msgs[0] ,style: { textAlign: 'center','font-size': 14,
					 color:'#593E1A',width: 216,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
					 position: {adjust: { x: 13, y: 2 } ,corner: {target: 'topLeft',tooltip: 'bottomRight'},}, 
			 });
		 }
	
		 
		 $('#dropper2').qtip({	 
				 content:msgs[1] ,style: { textAlign: 'center','font-size': 14,
				 color:'#593E1A',width: 210,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {adjust: { x: 13, y: 2 } ,corner: {target: 'topLeft',tooltip: 'bottomRight'}, },
		 });
		
}

function loadStrip_Tooltip(){
	
	     $('#stripsDiv').qtip({	 
				 content:msgs[6] ,style: { textAlign: 'center','font-size': 14,
				 color:'#593E1A',width: 182,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 show: false,hide:false,
				 position: {adjust: { x: 68, y: 80 } ,corner: {target: 'bottomLeft',tooltip: 'topRight'}, },
		 }); 
		
}


//combo change......
function compoundChange(){
	
	$('#solnDiv1,#solnDiv2,#solnDiv3,#solnDiv4').qtip('hide');
	if(document.getElementById("theinput").selectedIndex==0){
		selection=1;
	}else if(document.getElementById("theinput").selectedIndex==1){
		selection=2;
	}else if(document.getElementById("theinput").selectedIndex==2){
		selection=3;
	}else if(document.getElementById("theinput").selectedIndex==3){
		selection=4;
	}
	showBeaker();
}

///showing the selection...
function showBeaker(){
	
	for(var i=1;i<5;++i){
		$('#solnDiv'+i).css({
		display:'none'	,
	    })
	}
	$('#solnDiv'+selection).css({
		display:'block'	,
		})
}

var numb=0;
///enabling all beaker click functions
function beakerClickFN(ID){
	   $('#dropper1,#dropper2,#indicatorBottle,#beaker_selection,#tubeStand,#whiteBoard,#juiceNbeaker,#tubeStandUnder,#beakerTop,#juiceTop').css({
		display:'block'	,
		})
		if(beakerselection==1){
			//$('#imgInfrm').qtip("destroy")#imgInfrm,
			$('#indicatorBottle').qtip("destroy")
			
		}
		loadTooltip();
		loadStrip_Tooltip();
		dragEnable();
		$('#indicatorBottle').qtip("show")
		 $('#dropper1,#dropper2').mouseover(function(){
			 
			 $('#indicatorBottle').qtip("hide");
		 });
		  $('#dropper1,#dropper2').mouseout(function(){
			 
			 $('#indicatorBottle').qtip("show");
		 });
		//$('#imgInfrm').qtip('show');
	    beakerselection=1;
		var idStr=ID;;
		numb = idStr.match(/\d/g);
		numb = numb.join("");
		document.getElementById('lablTxt').innerHTML=liquidLabl[numb-1];
		var txtlength=liquidLabl[numb-1];
	
		if(txtlength.length<9){
			document.getElementById('lablTxt').style.top='55px';
		}else{
			document.getElementById('lablTxt').style.top='53px';
		}
		enableFN();
		$('#icon'+numb).css({
			opacity:0.4,
		});
		document.getElementById("dropper1").innerHTML="<img id=\"solnIndropper\" src=\"\"/>";
				
	if(numb==1)	{
	   document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Lemon_dropper.png');
	   document.getElementById("drops").setAttribute('src', simPath+'images/Lemon_drop.png');
	   document.getElementById("drops2").setAttribute('src', simPath+'images/Lemon_drop.png');
	   
	}else if(numb==2){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Tomato_dropper.png');
		 document.getElementById("drops").setAttribute('src', simPath+'images/tomatojuice_drop.png');
	   document.getElementById("drops2").setAttribute('src', simPath+'images/tomatojuice_drop.png');
	   
	}else if(numb==3){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Mango_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/orangejuice_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/orangejuice_drop.png');
	   
	}else if(numb==4){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Pineapple_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/pineapple_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/pineapple_drop.png');
	   
	}else if(numb==5){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Amla_dropper.png');
		 document.getElementById("drops").setAttribute('src', simPath+'images/Amla_drop.png');
	   document.getElementById("drops2").setAttribute('src', simPath+'images/Amla_drop.png');
	   
	}else if(numb==6){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Mango_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/Mango_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/Mango_drop.png');
	   
	}else if((numb>=7)&&(numb<=9)){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Vinegar_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/Vinegar_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/Vinegar_drop.png');
	   
	}else if(numb==10){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Milk_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/Milk_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/Milk_drop.png');
	   
	}else if((numb>=11)&&(numb<=14)){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Vinegar_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/Vinegar_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/Vinegar_drop.png');
	   
	}else if(numb==15){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Milkofmagnesia_dropper.png');
		document.getElementById("drops").setAttribute('src', simPath+'images/Milkofmagnesia_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/Milkofmagnesia_drop.png');
	   
	}else if((numb>=16)&&(numb<=21)){
		document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Vinegar_dropper.png');
	    document.getElementById("drops").setAttribute('src', simPath+'images/Vinegar_drop.png');
	    document.getElementById("drops2").setAttribute('src', simPath+'images/Vinegar_drop.png');
	   
	}else if(numb==22){
		 document.getElementById("solnIndropper").setAttribute('src', simPath+'images/CuSO45H2O_dropper.png');
		 document.getElementById("drops").setAttribute('src', simPath+'images/CuSO45H2O_drop.png');
	     document.getElementById("drops2").setAttribute('src', simPath+'images/CuSO45H2O_drop.png');
	   
	}else if((numb==23)||(numb==24)){
		 document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Vinegar_dropper.png');
		 document.getElementById("drops").setAttribute('src', simPath+'images/Vinegar_drop.png');
	     document.getElementById("drops2").setAttribute('src', simPath+'images/Vinegar_drop.png');
	   
	}else if(numb==25){
		 document.getElementById("solnIndropper").setAttribute('src', simPath+'images/FeSO4_dropper.png');
		 document.getElementById("drops").setAttribute('src', simPath+'images/FeSO4_drop.png');
	     document.getElementById("drops2").setAttribute('src', simPath+'images/FeSO4_drop.png');
	   
	}else if((numb>25)){
		 document.getElementById("solnIndropper").setAttribute('src', simPath+'images/Vinegar_dropper.png');
		 document.getElementById("drops").setAttribute('src', simPath+'images/Vinegar_drop.png');
	     document.getElementById("drops2").setAttribute('src', simPath+'images/Vinegar_drop.png');
	}
	
	document.getElementById("reset").disabled=false;
	document.getElementById("theinput").disabled=true;
	document.getElementById("juiceNbeaker").innerHTML="<img id=\"juice\" src=\"\"/>";
	document.getElementById("juice").setAttribute('src', simPath+'images/'+imgs[numb-1]);
	
	
	 
}

///enabling all icons....
function enableFN(){
	for(var i=1; i<28;i++){
	    $('#icon'+i).css({
			opacity:1.0,
		});
	}
}
// 

//Fn for clicking all strips..
function stripClick(stripId){
        if(colourchange>0){
		var stripIdStr=stripId;;
		var stripNum = stripIdStr.match(/\d/g);
		stripNum = stripNum.join("");
	    var dragDivPosTop=$('#strip'+stripNum).position().top;
	    var dragDivPosLeft=$('#strip'+stripNum).position().left;
	   
		$('#strip'+stripNum).draggable({
				drag: function(event,ui){
					$('#stripsDiv').qtip('hide');
				},
				containment: "#canvasBox",
				stop: function() {
					if(beakerselection>0){
						$('#stripsDiv').qtip('destroy');
						loadStrip_Tooltip();
					 	$('#stripsDiv').qtip('show');
					}
					if(stripNum==1){
						stripPos(stripNum,10,22)
					}else if(stripNum==2){
						stripPos(stripNum,41,22)
					}else if(stripNum==3){
						stripPos(stripNum,72,22)
					}else if(stripNum==4){
						stripPos(stripNum,103,22)
					}else if(stripNum==5){
						stripPos(stripNum,134,22)
					}else if(stripNum==6){
						stripPos(stripNum,165,22)
					}else if(stripNum==7){
						stripPos(stripNum,196,22)
					}else if(stripNum==8){
						stripPos(stripNum,227,22)
					}else if(stripNum==9){
						stripPos(stripNum,258,22)
					}else if(stripNum==10){
						stripPos(stripNum,289,22)
					}else if(stripNum==11){
						stripPos(stripNum,320,22)
					}else if(stripNum==12){
						stripPos(stripNum,351,22)
					}else if(stripNum==13){
						stripPos(stripNum,382,22)
					}else if(stripNum==14){
						stripPos(stripNum,413,22)
					}
				}
			});
		}
}

///arranging strip position.......
function stripPos(stripNum,leftVal,topVal){
	$('#strip'+stripNum).css({
		left:leftVal+'px',
		top:topVal+'px'
	});
}

 var test=0;
///hand dragging event....
function dragEnable(){
	   
		
	$("#dropper1").draggable({
	
		drag: function(event,ui){
			removeClick();
			$('#indicatorBottle').qtip("hide");
			collision($('#dropper1'), $('#juiceTop'));   //#imgInfrm,...............collision detection.....
			$('#stripsDiv,#dropper1,').qtip('hide');
			$('#imgInfrm').css({ display:'none',})
			
	        if(($("#dropper1").position().top>133)&&($("#dropper1").position().top<150)&&(($("#dropper1").position().left>24)&&($("#dropper1").position().left<102))){
				 if(pick==0){
					$('#solnIndropper').css({
		  			  display:'block'	,
					})
					
					$("#solnIndropper").animate({height:'32px',top:'48px',left:'4px'});
					document.getElementById("dropper1").style.left="58px";
				    document.getElementById("dropper1").style.top="150px";
					pick=1;	
		        }
		   }
		   if(collisionVal==true){
			   document.getElementById("dropper1").style.zIndex=9;
		   }
		   else{
			    document.getElementById("dropper1").style.zIndex=2;
		   }
		},
			containment: "#canvasBox",
			stop: function() {
			  if(($("#dropper1").position().top>0)&&($("#dropper1").position().top<202)&&(($("#dropper1").position().left>195)&&($("#dropper1").position().left<254))){
			
				 if(pick==1){
					
					document.getElementById("dropper1").style.left="220px";
				    document.getElementById("dropper1").style.top="169px";
					$("#solnIndropper").animate({left:'6px',height:'0px',top:'78px'});
					$('#drops').css({
					    display:'block',
					    top:'240px'
				    });
					$('#drops2').css({
						display:'block',
						top:'250px'
					});
					$('#drops2').animate({		
						top:'280px'
					});					
					
					$('#drops').animate({		
						top:'280px',														
					},1000,function(){	
						
						$('#drops,#drops').css({
					    display:'none',
				        });
					  $("#solnIndropper").css({left:'7px',height:'0px',top:'90px'});
					  stripColourChangeFN();////......litmus colour change......
					  $('#stripsDiv').qtip('destroy'); 
					  loadStrip_Tooltip();
					  $('#stripsDiv').qtip('show');
					  $('#dropper1').draggable( "disable" );
					 document.getElementById("dropper1").style.left="385px";
				     document.getElementById("dropper1").style.top="202px";
					
					});
					pick=0;
					test=1;
					
				}
				else{
					 if(test==0){
						  $('#indicatorBottle,#dropper2,#dropper1,#whiteBoard').qtip("destroy");
						  loadTooltip();
						  $('#indicatorBottle').qtip("show");
					 }else{
						  $('#stripsDiv').qtip('destroy');
						  loadStrip_Tooltip();
					 	  $('#stripsDiv').qtip('show');	
					 }
				document.getElementById("dropper1").style.left="385px";
				document.getElementById("dropper1").style.top="202px";
				$("#solnIndropper").css({left:'7px',height:'0px',top:'90px'});
			  }
			}else{
					  $('#solnIndropper').css({ display:'none',})
				  if(test==0){
				$('#indicatorBottle,#dropper2,#dropper1,#whiteBoard').qtip("destroy");
					  loadTooltip();
					  $('#indicatorBottle').qtip("show");
 				  }else{
					  $('#stripsDiv').qtip('destroy');
					  loadStrip_Tooltip();
					  $('#stripsDiv').qtip('show');	
				  }
				    document.getElementById("dropper1").style.zIndex=2;
					pick=0;
				    $("#solnIndropper").css({left:'7px',height:'0px',top:'90px'});
				    document.getElementById("dropper1").style.left="385px";
				    document.getElementById("dropper1").style.top="202px";
				}
			}
			
		});

	$("#dropper2").draggable({
		
			drag: function(event,ui){ 
		    	removeClick();
				$('#indicatorBottle').qtip("hide");
				$('#imgInfrm').css({ display:'none',}) //,#imgInfrm
				$('#stripsDiv,#dropper2').qtip('hide');
				document.getElementById("dropper2").style.zIndex=9;
			},
			containment: "#canvasBox",
			stop: function() {
				  if(($("#dropper2").position().top>0)&&($("#dropper2").position().top<153)&&(($("#dropper2").position().left>30)&&($("#dropper2").position().left<100))){
					document.getElementById("dropper2").style.left="61px";
					document.getElementById("dropper2").style.top="100px";	
					
					$('#indicatordrop').css({
					    display:'block',
					    top:'185px'
				    });
					$('#indicatordrop2').css({
						display:'block',
						top:'195px'
					});
				
					$('#indicatordrop2').animate({		
						top:'225px'
					});					
					$('#solnIndropper2').delay(200).animate({
							top:'127px',
							height:'0px',
							left:'6px'
						});
					$('#indicatordrop').animate({		
						top:'225px',														
					},1000,function(){	
						
						$('#indicatordrop2,#indicatordrop').css({
					    display:'none',
				        });
					
					   $('#solnIndropper2').css({
					    top:'47px',
					    height:'32px',
						left:'4px'
				        });
					//$('#dropper2').qtip('destroy');
				    solnColourChangeFN();
					$('#stripsDiv').qtip('destroy');
					loadStrip_Tooltip();
					$('#stripsDiv').qtip('show');	
					test=2;
					document.getElementById("dropper2").style.left="489px";
				    document.getElementById("dropper2").style.top="158px";
				 });
					document.getElementById("dropper2").style.zIndex=2;
			  }else{
					if(test!=2){
						 $('#indicatorBottle,#dropper2,#whiteBoard').qtip('destroy');
						 loadTooltip();
						 $('#indicatorBottle').qtip("show");
					}else{
					     $('#stripsDiv').qtip('destroy');
						 loadStrip_Tooltip();
					 	 $('#stripsDiv').qtip('show');	
					}
					document.getElementById("dropper2").style.zIndex=2;
					document.getElementById("dropper2").style.left="489px";
					document.getElementById("dropper2").style.top="158px";
				}
			}
		
		});
				
}

/////solution color change.....
var colourchange=0;
function stripColourChangeFN(){
	$('#resultImg').css({
			display:'block',
	   });
	 $('#dropper1').draggable( "disable" );
	   colourchange=1;
	  if((numb==1)||(numb==5)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result2.png');
	  }else  if((numb==2)||(numb==25)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result4.png');
	  } else  if((numb==3)||(numb==4)||(numb==22)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result3.png');
	  } else  if((numb==6)||(numb==10)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result6.png');
	  }else if((numb==7)||(numb==8)||(numb==21)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result7.png');
	  }else  if((numb==9)||(numb==13)||(numb==23)||(numb==27)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result9.png');
	  }else  if((numb==11)||(numb==19)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result3.png');
	  }else  if((numb==12)||(numb==17)||(numb==24)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result5.png');
	  }else  if((numb==14)||(numb==18)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result11.png');
	  } else  if((numb==15)||(numb==20)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result10.png');
	  }else  if(numb==16){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result1.png');
	  }else  if((numb==26)){
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result8.png');
	  }
}

function solnColourChangeFN(){
	 
	 $('#dropper1').draggable( "disable" );
	 $('#dropper1').qtip('destroy');
	 $('#dropper2').qtip('destroy');
	 $('#dropper2').draggable( "disable" );
     $('#dropper1').qtip({	 
				 content:msgs[2] ,style: { textAlign: 'center','font-size': 14,
				 color:'#593E1A',width: 216,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {adjust: { x: 13, y: 2 } ,corner: {target: 'topLeft',tooltip: 'bottomRight'},}, 
		 });
    colourchange=1;
	document.getElementById("juiceNbeaker").innerHTML="<img id=\"juice\" src=\"\"/>";
	
	  if((numb==1)||(numb==5)){
 	  document.getElementById("juice").setAttribute('src', simPath+'images/2-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result2.png');
	  }else  if((numb==2)||(numb==25)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/4-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result4.png');
	  } else  if((numb==3)||(numb==4)||(numb==22)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/3-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result3.png');
	  } else  if((numb==6)||(numb==10)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/6-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result6.png');
	  }else if((numb==7)||(numb==8)||(numb==21)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/7-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result7.png');
	  }else  if((numb==9)||(numb==13)||(numb==23)||(numb==27)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/9-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result9.png');
	  }else  if((numb==11)||(numb==19)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/3-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result3.png');
	  }else  if((numb==12)||(numb==17)||(numb==24)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/5-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result5.png');
	  }else  if((numb==14)||(numb==18)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/11-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result11.png');
	  } else  if((numb==15)||(numb==20)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/10-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result10.png');
	  }else  if(numb==16){
	   document.getElementById("juice").setAttribute('src', simPath+'images/1-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result1.png');
	  }else  if((numb==26)){
	   document.getElementById("juice").setAttribute('src', simPath+'images/8-solution.png');
	   document.getElementById("resultImg").setAttribute('src', simPath+'images/result8.png');
	  } 
}

var collisionVal=false
function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
	 if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return collisionVal=false;
      return collisionVal=true;
}

//Function for remove the food icon click...
function removeClick(){
	//alert("12121212")
	for(var i=1;i<28;i++){
	   $('#icon'+i).removeAttr('onclick').click(function(){});
	}
}
