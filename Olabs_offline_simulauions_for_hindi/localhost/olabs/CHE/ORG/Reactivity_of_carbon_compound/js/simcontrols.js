// JavaScript Document 
//Controls variables 
var sceneFlag;
var FirstFlg=false;
var SecondFlag=false;
var FifthFlag=false;
var sixthFlag=false;
var seventhFlag=false;
var EightFlag=false;
var inferenceMsg;
var infMsgArray;
var HelpMsgOne;
var HelpMsgTwo;
var HelpMsgThree;
var HelpMsgFour;
var HelpMsgFive;
var HelpArray;
var FlagInfrnc=false;
var FlagInfrncTwo=false;
var FlagInfrncThree=false;
var FlagInfrncFour=false;

var width=$("#sidebar-wrapper").width();
var parentWidth=$("#sidebar-wrapper").offsetParent().width();
var percent=100*width/parentWidth;
var winWidth=$(window).width();


function init(){
	//function for Inference One
	function runThisTHree(){									
				$('#inference_Div').css({"visibility":"visible"});
				$('#inference_Div').click(function(){
				$('.trip-block').css({"visibility":"visible"});
						});
					inferenceMsg=infMsgArray[0];
						}				
FlagInfrncThree=false;
sceneFlag=1;
$("#ExprmntShk,#Water_TestTube,#Acid_TestTube").stop();

if(sceneFlag==1){
$(".trip-block").css({"visibility":"visible"});
}
StringArray=[gt.gettext("Select the test"),gt.gettext("Solubility </br>&nbsp;in water"),gt.gettext("Odour"),gt.gettext("Effect on </br> &nbsp;&nbsp;litmus"),gt.gettext("&nbsp; &nbsp;&nbsp;Reaction  <br />with NaHCO<sub>3</sub>"),gt.gettext("Acetic acid"),gt.gettext("Litmus paper"),gt.gettext("Water"),gt.gettext("Reset"),gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"),gt.gettext("Properties of Acetic Acid (Ethanoic Acid)"),gt.gettext("NaHCO<sub>3</sub> solution"),gt.gettext("Lime water")];

HelpArray=[gt.gettext("Drag the test tube to pour acetic acid into<br/> the test tube containing water."),gt.gettext("Click on the test tube to shake it."),gt.gettext("Drag and dip the dropper into <br/>the acetic acid,<br/> then drag and drop the solution over<br/> the litmus paper."),gt.gettext("Drag the conical flask  <br/>over the thistle funnel <br /> to pour the acetic acid into it.")];

infMsgArray=[gt.gettext("A homogeneous solution is formed."),gt.gettext("A pungent smell is produced."),gt.gettext("Blue litmus turns red."),gt.gettext("Acetic acid reacts with sodium bicarbonate <br/> to produce CO<sub>2</sub> gas that turns lime water milky.")];


$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));

//=====================
$('#ExprmntShk').show();
$("#FirstExpmntContainer").show();
$('#FourthExpmntContainer').hide();
$("#FirstExpmntContainer").css({"visibility":"visible"});
$("#SecondExprmt").css({"opacity":"1"});
$("#ThirdExprmnt").css({"opacity":"1"});
$("#FourthExprmnt").css({"opacity":"1"});
$("#FirstExpmntContainer").css({"z-index":"500"})
$("#SecondExpmntContainer").css({"visibility":"hidden"});
$("#BackgroundImgOne").css({"visibility":"visible"});
$("#inference_Div").css({"visibility":"hidden"});
$('#ExprmntShk').removeClass('hanging-div');
$("#Acid_TestTube").css({"visibility":"visible"});
$("#ExprmntShk").hide();
$("#Acid_TestTube").show();
$("#WaterDropOne").show();
$("#Water_TestTube").css({"top":"25%"});
$("#SolutionOne").css({"height":"44%","top":"55%","left":"0px","opacity":"1"});
$("#SolutionOne_Ring").css({"top":"55%","left":"0px","opacity":"1"});
$("#SolutionOne_Ring").removeClass('box_rotateRing box_transitionRing');
$("#Water_TestTube").css({cursor:"default"});
$("#SolutionTwo").css({"top":"55%"});
$("#Acid_TestTube").removeClass('box_rotate box_transition');
$("#Acid_TestTube").removeClass('box_rotateTwo box_transitionTwo');
$("#SolutionTwo_Ring").css({"top":"55%"});
$("#Acid_TestTube").css({"width":"4.5%","height":"56%","left":"18%","top":"25%","overflow":"hidden"});
$( "#Acid_TestTube").draggable({disabled:false});
$("#BackgroundImgTwo").css({"visibility":"hidden"});
$("#ThirdExpmntContainer").css({"visibility":"hidden"});
$("#BackgroundImgTree").css({"visibility":"hidden"});
FirstFlg=false;
FlagInfrnc=false;
FlagInfrncTwo=false;
 FlagInfrncFour=false
$("#ExprmntShk").css({"position":"absolute","top":"20%","left":"45%","visibility":"hidden"});
$("#DropsOne,#DropsTwo,#DropsThree,#DropsFour").hide();
//=====================
$('#CntrolHead').html(StringArray[0]);
$('#FirstExprmntText').html(StringArray[1]);
$('#ThirdExprmntText').html(StringArray[3]);
$('#FourthExprmntText').html(StringArray[4]);
$('#FirstLabel_Acid_text').html(StringArray[5]);
$('#FirstLabel_Water_text').html(StringArray[7]);
$('#SecondExprmntText').html(StringArray[2]);
$('#ResetBtn').val(StringArray[8]);
//$('.labName').html(StringArray[9]);
$('#expName').html(StringArray[10]);
$("#Fourth_exp_label_text_two").html(StringArray[11]);
$("#Fourth_exp_label_text_tree").html(StringArray[12]);
HelpMsgOne=HelpArray[0];
HelpMsgTwo=HelpArray[1];

$(function() {//drag fuction 
    $( "#Acid_TestTube").draggable({ revert:true,containment: "#FirstExpmntContainer",revertDuration:0,
	drag: function(){
		$('#inference_Div').css({"visibility":"hidden"});
			}
	
	});
	
$( "#DropArea" ).droppable({ //Drop Function
		drop: function( event, ui ) {
			$('#Acid_TestTube').draggable({disabled:true});
			$( "#Acid_TestTube").draggable({ revert:false});//revert false when the drop function done.
			$('#Acid_TestTube').addClass('box_rotate box_transition');//Acid test tube first Rotate.
			$('#Acid_TestTube').css({"left": "47%", "top": "-7%"});//Acid test tube first position fixing.
			$('#WaterDropOne').animate({height:"74px" },400);//pouring of acid into the test tube.
			$( "#SolutionOne" ).animate({//acid solution Disappear from the first test tube.
    			'marginTop': '0px',
   				'marginLeft': '30px',
   				 height: "1px",
				 opacity:0,
 					 },400);
					 
   			$( "#SolutionOne_Ring" ).animate({// Disappear of Acid ring
    			'marginTop': '12px',
				'marginLeft':'17px',
     			opacity: 0,
  					}, 400,function(){//when the Acid ring  Disappear this function take place.
						$('#WaterDropOne').css({"visibility": "visible"});//Drop solution visibility (Visible).
	  					$('#SolutionOne_Ring').addClass('box_rotateRing box_transitionRing');//Rotation of First Water ring
	   					$( "#SolutionTwo_Ring" ).animate({//animation of First Water ring
    						'top': '25%',
								}, 400);
	
  			$( "#SolutionTwo" ).animate({// animation of  water
    			'top': '25%',
				'height':'73%',
      				}, 400, function() {
						
						$('#Acid_TestTube').addClass('box_rotateTwo box_transitionTwo');
						$('#WaterDropOne').css({"visibility": "hidden"});//Drop visibility (Visible)
	   					$( "#Acid_TestTube" ).animate({
   							 left: '18%',
     
 					}, 400, function() {
						
	   		$( "#Acid_TestTube" ).animate({
    			top: '25%',
     				}, 400,function (){
	  			$('#Acid_TestTube').draggable({disabled:true});
				$('#Water_TestTube').css({"cursor":"pointer"});//Drop visibility (Visible)
				FirstFlg=true;
	 			 });
				 					});
				       });
			});
				 }
			 });
				 });
				  $( "#Water_TestTube" ).click(function(){
					  FlagInfrncThree=true;
					   if (FirstFlg){
					 
					 $( "#Water_TestTube" ).animate({//acid solution Disappear from the first test tube.
    					'top': '23%',
   				
 					 },300,function(){//first Experiment stage 2
						 $('#FirstExpmntContainer').css({"visibility":"hidden"});
						$('#ExprmntShk').show();
						  for(i=0;i<2;i++) {
							$('#ShkRing').fadeTo(10, 0.3).fadeTo('slow', 1.0);	//ring fade 
										  }
						  $('#Acid_TestTube').hide();
						 $('#BackgroundImgOne').css({"visibility": "hidden"});
						 $('#BackgroundImgTwo').css({"visibility": "visible","z-index":"10"});
						 $('#ExprmntShk').css({"visibility": "visible","z-index":"11"});
						 $('#ExprmntShk').addClass('hanging-div');
						 setTimeout(function(){ 
						if (FlagInfrncThree){
						runThisTHree();
						}
						
						else{
						$('#inference_Div').css({"visibility":"hidden"});
						}
						},2300);
						 });
						}
					  });
					  
					$('#FirstExprmnt').css({"opacity":"0.4"});
						}
		
//===(Jquery Started).
$(document).ready(function(){
	init();
var collisionVal=false//Collision Detection between two Divs
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
$('#FirstExprmnt').click(function(){
					init();
					});	
					//End first Experiment.
						//function for Inference Two
					function runThis(){									
				$('#inference_Div').css({"visibility":"visible"});
					$('#inference_Div').click(function(){
						$('.trip-block').css({"visibility":"visible"});
						});
					inferenceMsg=infMsgArray[1];
				}
	
					//Second Experiment Start.
$('#SecondExprmt').click(function(){
	FlagInfrncThree=false
	 FlagInfrncFour=false
	FlagInfrnc=true;
	FlagInfrncTwo=false;
	sceneFlag=null;
			seventhFlag=true;
			sixthFlag=false;
			$('#inference_Div').css({"visibility":"hidden"});
			$(".trip-block").css({"visibility":"hidden"});
			$("#Acid_TestTube").hide();
			$("#WaterDropOne").hide();
			$("#smoke").stop();
			$('#FourthExpmntContainer,#MovingSolution,#Acid_solution_four,#Acid_solution_ring').css({"visibility":"hidden"});
			$('#smoke').css({"width":"35px","height":"88px","left":"43%","top":"-2%","opacity":"0"});
			$('#StainDropDiv').css({"visibility":"hidden"});
			$('#DropsOne').hide();
			$('#DropsTwo').hide();
			$('#DropsThree').hide();
			$('#DropsFour').hide();
			$('#FourthExpmntContainer').hide();
			$('#ExprmntShk').hide();
			FifthFlag=true;
			$('#FirstExprmnt,#ThirdExprmnt').prop('disabled', false);
			$('#smoke').css({"width":"35px","heigh":"88px","left":"43%","top":"2%","opacity":"0"});
			$('#FirstExpmntContainer').css({"visibility":"hidden"});
			$('#BackgroundImgTwo,#BackgroundImgTree,#ThirdExpmntContainer').css({"visibility":"hidden"});
			$('#Acid_TestTube').css({"visibility": "hidden"});
			$('#FirstExpmntContainer','#BackgroundImgTree','#ThirdExpmntContainer').css({"visibility":"hidden"});
			$('#FirstExprmnt,#ThirdExprmnt,#FourthExprmnt').css({"opacity":"1"});
			$('#SecondExprmt').css({"opacity":"0.4"});
			$('#SecondExpmntContainer').css({"visibility":"visible"});
			$('#BackgroundImgOne').css({"visibility":"hidden"});
			$('#Second_exp_label_text').html(StringArray[5]);
			if(FifthFlag){
				if(percent=="0"|| winWidth<768){console.log('in');
					$( "#smoke" ).animate({//acid solution Disappear from the first test tube.
						'opacity':'1',
						'width':'414px',
						'left':'44%',
						'top':'12%'
						},3900,function(){
							if (FlagInfrnc){
								runThis();
								}
								
								else{
								$('#inference_Div').css({"visibility":"hidden"});
								}
						});
					}
					else{
					console.log('out');
						$( "#smoke" ).animate({//acid solution Disappear from the first test tube.
						'opacity':'1',
						'width':'414px',
						'left':'43%',
						'top':'2%'
						},3900,function(){
							if (FlagInfrnc){
								runThis();
								}
								
								else{
								$('#inference_Div').css({"visibility":"hidden"});
								}
						});
						
					}
				}
});
													//End second Experiment.
				
				
				
					//function for Inference Three		
				function runThisFour(){									
				$('#inference_Div').css({"visibility":"visible"});
				$('#inference_Div').click(function(){
				$('.trip-block').css({"visibility":"visible"});
								});
					inferenceMsg=infMsgArray[2];
				}				
													
													//Third Experiment Start.
$('#ThirdExprmnt').click(function(){
	FlagInfrncTwo=false;
	FlagInfrnc=false;
	 FlagInfrncFour=true
	 FlagInfrncThree=false
	HelpMsgThree=HelpArray[2];
				//initializing.
				sceneFlag=2;
				sixthFlag=true;
				seventhFlag=false;
				EightFlag=false;
				$(".trip-block").css({"visibility":"visible"});
				$('#Dropper_Dragger').draggable({ revert:true});
				$('#FourthExpmntContainer').hide();
				$("#StainDropDiv").show();
				$('#ExprmntShk').hide();
				$('#FourthExpmntContainer,#MovingSolution,#Acid_solution_four,#Acid_solution_ring').css({"visibility":"hidden"});
				$("#Dropper_Dragger").css({"left":"33%","top":"43%"});
				//$('#Dropper').css({"top":"30%"});
				$('#Stain').css({"opacity":"0"});
				$('#AcidSolutiionThree').css({"top":"14%"});
				$('#AcidRingTree').css({"top":"14%"});
				$('#DippInAcid').css({"left":"22%","top":"48%"});
				$('#DropperSolution').css({"top":"90%","width":"8px","left":"32%"});
				$('#DropsOne').css({"top":"128px"});
				$('#DropsTwo').css({"top":"128px"});
				$('#DropsThree').css({"top":"128px"});
				$('#DropsFour').css({"top":"128px"});
				$('#DropsOne').show();
				$('#DropsTwo').show();
				$('#DropsThree').show();
				$('#DropsFour').show();
				$('#DippInAcid').show();
				//initializing complete.
			$('#inference_Div').css({"visibility":"hidden"});
			$('#SecondExpmntContainer,#ExprmntShk,#BackgroundImgOne,#BackgroundImgTwo').css({"visibility":"hidden"});//Removing the BG
			$('#FirstExpmntContainer').hide();
			$('#BackgroundImgTree,#ThirdExpmntContainer').css({"visibility":"visible"});//Setting BG and Exprmnt.
			$('#FirstExprmnt,#SecondExprmt,#FourthExprmnt').css({"opacity":"1"});//changing opacity of Control area.
			$('#ThirdExprmnt').css({"opacity":"0.4"});//current exprmnt controls opacity chaning.
			$('#Third_exp_label_text_One').html(StringArray[5]);//Text to the label
			$('#Third_exp_label_text_Two').html(StringArray[6]);//Text to the label
			});
			
$( "#Dropper_Dragger").draggable({revert:true,revertDuration:0,
			drag: function(){
			collision($('#coldiv'), $('#DippInAcid')); //Collision Detection between two Divs
			
				if(collisionVal==true){
					SecondFlag=true;
					$('#DippInAcid').hide();
					$('#Dropper').css('background-image','url(../CHE/ORG/Reactivity_of_carbon_compound/images/DropperTwo.png)');
					$("#AcidSolutiionThree").animate({'top':'25%'},300);
					$('#AcidRingTree').animate({'top':'25%'},300);
					$('#DropperSolution').animate({
						'top':'60%'
						},300,function(){	
								
					$('#Dropper').css('background-image','url(../CHE/ORG/Reactivity_of_carbon_compound/images/Dropper.png)');
					
					$( "#Dropper_Dragger").draggable({
						
						revert:function(){
							$( "#Dropper_Dragger").css({"left":"161px","top":"-15px"})
							}
						});
							});
				}
        }
});

$( "#StainDropDiv" ).droppable({//adding drop property to the div.
				drop: function( event, ui ) {
					if(SecondFlag){//flag
					$('#Dropper').css('background-image','url(../CHE/ORG/Reactivity_of_carbon_compound/images/DropperTwo.png)');
					$( "#Dropper_Dragger").draggable({revert:false});
					$('#Dropper_Dragger').animate({"left":"62%","top":"26%"},300,function(){
					$('#DropperSolution').animate({"top":"29%","left":"42%","width":"2px"},300,function(){
					$('#DropsOne').css({"visibility":"visible"});
					$('#DropsOne').animate({'top':'100%'},100,function(){
					$('#Stain').animate({'opacity':'1'},50,function(){
					/*$('#inference_Div').css({"visibility":"visible"});*/	
					if (FlagInfrncFour){
						runThisFour();
						}
						
						else{
						$('#inference_Div').css({"visibility":"hidden"});
						}
					$('#DropsOne').css({"visibility":"hidden"});
					$('#DropsTwo').css({"visibility":"visible"});
					$('#DropsTwo').animate({'top':'100%'},200,function(){
					$('#DropsTwo').css({"visibility":"hidden"});
					$('#DropsThree').css({"visibility":"visible"});
					$('#DropsThree').animate({'top':'100%'},200,function(){
					$('#DropsThree').css({"visibility":"hidden"});
					$('#DropsFour').css({"visibility":"visible"});
					$('#DropsFour').animate({'top':'100%',},200,function(){
					$('#DropsFour').css({"visibility":"hidden"});
					$('#Dropper').css('background-image','url(../CHE/ORG/Reactivity_of_carbon_compound/images/Dropper.png)');
					
					$('#inference_Div').click(function(){
						$('.trip-block').css({"visibility":"visible"});
						});
					$('#inference_Div').css({"z-index":"150"});
						
						if (seventhFlag &&!EightFlag){
					$('#inference_Div').css({"visibility":"hidden"});
					}
					});});});});});});});
					}
					else{
						$( "#Dropper_Dragger").draggable({ revert:true});
						}}
				});
								//Third Experiment END.
								function runThisTwo(){									
								$('#inference_Div').css({"visibility":"visible"});
								$('#inference_Div').click(function(){
								$('.trip-block').css({"visibility":"visible"});
													});
					inferenceMsg=infMsgArray[3];
				}
								
								//Fourth Experiment Starts 	
$('#FourthExprmnt').click(function(){
	//initializing.
	FlagInfrnc=false;
	FlagInfrncTwo=true;
	FlagInfrncThree=false
	 FlagInfrncFour=false
	sceneFlag=3;
	HelpMsgFive=HelpArray[3];
	$('#FourthExpmntContainer').show();
	$("#FirstExpmntContainer").hide();
	$("#StainDropDiv").hide();
	EightFlag=true;
	$('#SlopSolution').css({"visibility":"hidden","opacity":"1","margin-top":"17px","margin-left":"-34px"});
	$("#Acid_solution_ring").css({"visibility":"visible"});
	$("#Acid_solution_ring").removeClass('Flask_transitionRing Flask_rotateRing');
	$("#Acid_solution_four").css({"visibility":"visible"});
	$('#DropArea_four').css({"left":"26%"});
	$('#SlopOne').css({"visibility":"hidden","width":"66","opacity":"1"});
	$('#TubeWater').css({"visibility":"hidden","opacity":"1"});
	$('#Flask_drop').css({"visibility":"hidden","opacity":"1","top":"10%"});
	$('#Left_solution_ring').css({"top":"64%"});
	$('#MovingSolution').css({"visibility":"hidden","opacity":"0"});
	$('#BubbleSeven_right').css({"top":"85%"});
	$('#BubbleFive_right').css({"top":"85%"});
	$('#BubbleThree_right').css({"top":"85%"});
	$('#BubbleFour_right').css({"top":"85%"});
	$('#BubbleThree_right').css({"top":"85%"});
	$('#BubbleFour_left').css({"top":"85%"});
	$('#BubbleOne_left').css({"top":"85%"});
	$('#BubbleSix_right').css({"top":"90%"});
	$('#BubbleTwo_right').css({"top":"90%"});
	$('#BubbleOne_right').css({"top":"90%"});
	$('#BubbleSeven_left').css({"top":"90%"});
	$('#BubbleSix_left').css({"top":"90%"});
	$('#BubbleFive_left').css({"top":"90%"});
	$('#BubbleThree_left').css({"top":"90%"});
	$('#BubbleTwo_left').css({"top":"90%"});
	$('#Change_solution_one,#Change_solution_two,#Change_solution_three,#Change_solution_four').css({"opacity":"0"});
	
		//initializing.
	$('#inference_Div').css({"visibility":"hidden"});
	$('#SlopSolution').addClass('Drop_rotateRing Drop_transitionRing');
	$('#FirstExprmnt,#SecondExprmt,#ThirdExprmnt').css({"opacity":"1"});
	$('#FourthExprmnt').css({"opacity":"0.4"});
	$('#FourthExpmntContainer').css({"visibility":"visible"});
	$('#Fourth_exp_label_text').html(StringArray[5]);
	//===============================================Drag start	
	$("#Acid_Flask").draggable({revertDuration:0,//drag function.
            revert: function(is_valid_drop){
              
				$('#Acid_Flask_shadow').css({"opacity":"1"});
                if(!is_valid_drop){
                   return true;
				   
                } else {
                  console.log('ok'); //Flask shadow.
                }
            },
            drag: function(){
			   $('#Acid_Flask_shadow').css({"opacity":"0"});
			   $('#inference_Div').css({"visibility":"hidden"});
            }
        });	
		
		//===============================================Drag Stop================	
			
		//===============================================Dropp Start================	
		$('#DropArea_four').droppable({//drop function.
			drop: function( event, ui ) {
				$('#Acid_solution_ring').css({"visibility":"hidden"});
				$("#Acid_Flask").addClass('Flask_rotate Flask_transition');
				$('#Acid_solution_ring').addClass('Flask_rotateRing Flask_transitionRing' );
				$('#Acid_Flask').addClass('test')
				$('#Acid_Flask').css({"left": "32%", "top": "0%"});
				$('#Glass_rod').css({"visibility":"visible"});
				$('#Acid_solution_four').css({"visibility":"hidden"});
			    $('#SlopOne').css({"visibility":"visible"});
				$('#SlopOne').animate({
					 'width':'57px'
					 },200,function(){
						 $('#SlopOne').css({"opacity":"0"});
						 $('#SlopSolution').css({"visibility":"visible"});
						 $('#SlopSolution').animate({
							'opacity':'0',	 
					  		'margin-top':'-45px',
					  		'margin-left':'-25px'},500,function(){
						 $('#Flask_drop').css({"visibility":"visible"});
						 $('#TubeWater').css({"visibility":"visible"});
						 $('#Flask_drop').animate({
							  'top':'15%',
							  'opacity':'0'
							},500,function(){
								  
						 $('#Left_solution_ring').animate({
								'top':'62%',
							},100);
						$('#MovingSolution').css({"visibility":"visible"});
						$('#MovingSolution').animate({
								'opacity':'1'
							},500);
						$('#TubeWater').animate({
							'opacity':'0'
							},500,function(){
						$("#Acid_Flask").animate({
							'top':'65%',
							'left':'47%'
							},300);
						$("#Acid_Flask").draggable({revert:true});
						$("#Acid_Flask").draggable('disable');
						$('#DropArea_four').css({"left":"26%"});
						$("#Acid_Flask").removeClass('Flask_rotate Flask_transition');
						$('#Glass_rod').css({"visibility":"hidden"});
									//bubble movement.		
						$('#BubbleOne_left').css({"visibility":"visible"});
						$('#BubbleOne_left').animate({
							'top':'-5px'
							},800,'swing',function(){
						$('#BubbleOne_left').css({"visibility":"hidden"});
						$('#BubbleFive_left').css({"visibility":"visible"});
						$('#BubbleFive_left').animate({
							'top':'-5px'},800,'swing',function(){
						$('#BubbleFive_left').css({"visibility":"hidden"});
						$('#BubbleSix_left').css({"visibility":"visible"});
						$('#BubbleSix_left').animate({
							'top':'-5px'},800,'swing',function(){
						$('#BubbleSix_left').css({"visibility":"hidden"});
						$('#BubbleSeven_left').css({"visibility":"visible"});
						$('#BubbleSeven_left').animate({
							'top':'-5px'},600,'swing',function(){
						$('#BubbleSeven_left').css({"visibility":"hidden"});
						$('#BubbleTwo_right').css({"visibility":"visible"});
													
						$('#BubbleTwo_right').animate({
								'top':'-5px'},600,'swing',function(){
						$('#BubbleTwo_right').css({"visibility":"hidden"});
						$('#BubbleThree_right').css({"visibility":"visible"});
						$('#BubbleThree_right').animate({
								'top':'-5px'},600,'swing',function(){
						$('#Change_solution_one,#Change_solution_two,#Change_solution_three,#Change_solution_four').animate({
								'opacity':'1'
								},600);
						$('#BubbleThree_right').css({"visibility":"hidden"});
						$('#BubbleTwo_left').css({"visibility":"visible"});
						$('#BubbleTwo_left').animate({
								'top':'-5px'
								},600,'swing',function(){
						$('#BubbleTwo_left').css({"visibility":"hidden"});
						$('#BubbleThree_left,#BubbleFour_right').css({"visibility":"visible"});
						$('#BubbleThree_left,#BubbleFour_right').animate({
								'top':'-5px'
								},600,'swing',function(){
						$('#BubbleThree_left,#BubbleFour_right').css({"visibility":"hidden"});
						$('#BubbleFour_left,#BubbleOne_right,#BubbleFive_right,#BubbleSix_right,#BubbleSeven_right').css({"visibility":"visible"});
						$('#BubbleFour_left,#BubbleOne_right,#BubbleFive_right,#BubbleSix_right,#BubbleSeven_right').animate({'top':'-5px'
								},600,'swing',function(){
							$('#BubbleFour_left,#BubbleOne_right,#BubbleFive_right,#BubbleSix_right,#BubbleSeven_right').css({				"visibility":"hidden"});
															
							if (FlagInfrncTwo){
								runThisTwo();
							}
						
							else{
								$('#inference_Div').css({"visibility":"visibile"});
								}
							$("#Acid_Flask").draggable('enable');
								if(EightFlag){
									$('#inference_Div,.trip-block').css({"z-index":"152"});
									$('#inference_Div').click(function(){
													$('.trip-block').css({"visibility":"visible"});
												});
											}	
												
													});});});});});});});});}); });});});});
				}
			});
		//===============================================Dropp Stop================	
		});				// End Fourth Experiment 	
								
	$('#ResetBtn').click(function(){//( Reset Button)
	window.location.reload(true);
	});	
	
});
