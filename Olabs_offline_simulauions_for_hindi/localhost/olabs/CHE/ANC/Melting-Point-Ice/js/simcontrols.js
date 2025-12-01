// JavaScript Document

var interval;
var text;
var flaming;
var initialTemp=0;
var stoptime
var cleartime;
var temppixarr =[-586,-588,-589,-590,-591,-592,-593,-594]; //pixel values of thermo meter
var tem=temppixarr[0]; 
var index=0;
var temp = [0,-0.06,-0.17,-0.35,-0.45,-0.55,-0.62,-0.7]; //temperature
var gt=$;
var displayTemp = temp[index];
				$(document).ready(function()
						{
							
							$('#expName').html(gt.gettext("Melting Point of Ice"));
							var dropbox = [gt.gettext('At different Pressures'),gt.gettext('In presence of impurities')]
							var  HelpArray=[gt.gettext("Drag the watch glass to drop<br>the ice cubes into the beaker."),gt.gettext("Click here to turn on the burner"),gt.gettext("Click here to stir the ice cubes."),gt.gettext("Write the correct answer.")];
							sceneFlag=1;
							HelpMSG_One=HelpArray[0];
							HelpMSG_Two=HelpArray[1];
							HelpMSG_Three=HelpArray[2];
							HelpMSG_Four=HelpArray[3];
							$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
						//	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
						//	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
						//	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));	
							$('#text5').html(gt.gettext("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temperature:&nbsp;"));
							$('#temp').html(gt.gettext("27 &deg;C"));
							document.getElementsByClassName("varTitle")[1].innerHTML = gt.gettext("Melting point of ice:");
							$('#pressure').html(dropbox[0]);
						//	$('#impurities').html(dropbox[1]);
							document.getElementsByClassName("varTitle")[2].innerHTML = gt.gettext("Select the pressure (In Bars):");
							document.getElementsByClassName("varTitle")[3].innerHTML = gt.gettext("Temperature when the ice;");
							$('#text1').html(gt.gettext("starts melting, t1 (&deg;C):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"));
							$('#text2').html(gt.gettext("completely melted, t2 (&deg;C):"));		
							$('.resltStyle').html(gt.gettext("Result"));		
							$('#text3').html(gt.gettext("Melting point of ice, (t1+t2)/2 (&deg;C):"));		
							$('#reset').val(gt.gettext("Reset"));		
							
							
							$('#water').css({top: '212px',height: '7px'})                
							$(function() {                                 //drag fuction 
    							$( "#watchGlass").draggable({cursor: 'move', containment: "#canvasBox",revertDuration:0,
									revert: function(is_valid_drop){
              
									$('#shadow').css({"opacity":"1"});//watchGlass shadow.
									if(!is_valid_drop){
									   return true;
									   
									} else {
									}
								},
								drag: function(){
								   $('#shadow').css({"opacity":"0"});
								}						
															});
									   });
							
						$( "#dropArea" ).droppable({        //Drop Function
								drop: function( event, ui ) {
										$("#watchGlass").draggable({ revert:false});
										$("#watchGlass").addClass('glassRotation');   //rotate watchglass
										$("#watchGlass").css({top:'110px',left:'258px'})//put icecubes into beaker 
										$("#iceCube").animate({top:'-10px',left:'-60px'},1000,function(){
																									   		$("#iceCube").hide(); 
																									   }); 
										$("#icecubeBeaker").show(1000);        
										$('#reset').removeAttr('disabled');
										$("#icecubeBeaker").show(function(){
															$("#thermo").css({top:-586+'px'});   //show temperature in thremo meter
															$("#redline").css({top:'69px'})
															$("#redline1").css({top:'150px',height:'45px'})
															$("#temp").html(0+'&nbsp;&deg;'+'C')       //display temperature as text
															$("#watchGlass").removeClass('glassRotation');     //replacement of watch glass
															$("#watchGlass").animate({top:'290px',left:'403px'},function(){
																										$('#shadow').css({"opacity":"1"}); 
																									})		
															$("#icecubeBeaker").css({height: '38px',width: '73px'})
															$("#watchGlass").draggable({disabled:true});
															burner();	// calling burner function
													});
												}
										});
							});
				
function combo()
{
	
}

//select pressure
function combo1()
{
	index = $('#theinput1')[0].selectedIndex;  
	tem = temppixarr[index];
	displayTemp = temp[index];
	
}
// burner on.........
function burner()
{
	$('#burnerContainer').css({cursor:'pointer'});
	$("#watchGlass").css({cursor:'auto'});
	$('#burnerContainer').click(function(){
				$(".dropBox").prop("disabled", true);	   
				 $('#burnerOff').hide();
				$('#burnerOn').show();
				$('.flame1').show(); 											
				flaming = setInterval(flames, 1);	//calling flame function					
				$("#burnerContainer").unbind( "click" );		
				$('#dropArea').hide();						
				$("#thermo").css({top:tem+'px'});						
				stoptime = setInterval(displaytemp,10)	 //display temperature
				$('#t1').val(displayTemp);
				cleartime = setTimeout(stir,2000)// calling stir function after a delay
				
				$('#stir1').css({cursor:'pointer'})	
				$('#stir1').click(function()	// start stirring the icecubes					
				{
					clearTimeout(cleartime)
					stir();							
				});									  			
				 });						  			   
}

//display temperature
function displaytemp() {
	if(initialTemp<=displayTemp)
	clearInterval(stoptime);
	$("#temp").html((Math.round(initialTemp*100)/ 100) + '&nbsp;&deg;'+'C')      
	initialTemp  = initialTemp-0.01;
}

//stir the icecubes....
function stir()    
{
	$('#burnerContainer').css({cursor:'auto'});
	$('#stir1').css({cursor:'auto'});
	$('#stir1').unbind( "click" );
	stirInterval= setInterval(stirInter,800)	//movement				
	$('#water').delay(1000).show(500)
	$('#water').delay(100).animate({top:175+'px',height:'44px'},{duration: 20000});//melting ice
	$('#icecubeBeaker').delay(100).animate({top:'207px',height:'15px'},20000,function(){
																	$('#icecubeBeaker').delay(1000).hide(100)			
																	clearInterval(stirInterval);			
																	$("#burnerOff").delay(1000).show(function(){	// burner off		
																								$("#burnerOn").hide();															
																								clearInterval(flaming)									
																								$("#flame").hide();	
																								result();   //calling result function
																							});										
																			});						  
}

//stir movement function
function stirInter(){
		 $('#stir').animate({top:'100px'});
		 $('#stir').animate({top:'110px'});
	}
		
//flame
function flames(){
		if($('.flame1').css('display') == "block"){          
			$('.flame1,.flame3,.flame4').hide();
			$('.flame2').show();         
		}else if($('.flame2').css('display') == "block"){          
			$('.flame1,.flame2,.flame4').hide();
			$('.flame3').show();         
		}else if($('.flame3').css('display') == "block"){          
			$('.flame1,.flame3,.flame2').hide();
			$('.flame4').show();         
		}else{
			$('.flame2,.flame3,.flame4').hide();
			$('.flame1').show();
		}
	} 
	
//resetting	
function resetFN(){
	window.location.reload();
}

//checking result
function result()
{
		$('#t2').val(displayTemp);
		$('#result').keyup(function()  {
							text = $('#result').val();			
							if(text == displayTemp)			
							{
								$('#wrong').hide();
								$('#right').show();
							}
							else
							{
								$('#right').hide();
								$('#wrong').show();
							}
						});		
}