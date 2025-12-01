var imageIconArr,alertArray,inferenceMsg,helpMsg,selectArr,controlStr;
var imgname,msgcount,selecticon;
var tripClickFlag=false;
var Droped;
var beakr1ClothIn,beakerTweezerIN,beaker2ClothIn,beakerBlackClothIn;
var helpcount = 0
$(document).ready(function(){
			gt = new Gettext({ 'domain' : 'messages' });	
			$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
			$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
			$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
			$('#expName').html(gt.gettext("Identify bleaching powder among given samples of chemicals"));
			$(".labName").html(gt.gettext("Developed by Amrita University Under research grant from <br> Department of Electronics & Information Technology"));
			inferenceMsg=[gt.gettext("Bleaching powder is calcium oxochloride(CaOCl<sub>2</sub>).<br>  On treatment with dil.H<sub>2</sub>SO<sub>4</sub>,it liberates hypochlorous acid(HOCl)<br>  which is not stable and decomposes giving nascent oxygen<br> and thus acts as an oxidising and bleaching agent.<br> Thus the solution is bleaching powder"),
			gt.gettext('No colour change in the cloth because the production <br> of nascent oxygen does not happen in the reaction')];
			helpMsg=[gt.gettext("Select the sample solution"),gt.gettext("Drag the cotton cloth towards <br> the beaker containing 50ml solution"),gt.gettext("Drag the tweezer towards the same <br> beaker to pick the cloth and <br> drop it in the beaker containing <br> diluted sulphuric acid solution"),gt.gettext("Drag the glassrod towards the beaker <br> containing Sulphuric acid")];
		//	$('#canvasBox,.varBox').mousedown(function(event){	event.preventDefault();	});
			document.addEventListener("dragstart", function( event ) {
			event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);}, false);
			imageIconArr=['Samplesol1.png','Samplesol2.png','Samplesol1.png','Samplesol1.png'];
			iconSelected=['beakersol1','beakersol2','beakersol3','beakersol4'];
			alertArray=[gt.gettext('Sample solution and sulphuric acid <br/> must not touch your skin. Handle carefully')];
			controlStr=[gt.gettext('Select the sample'),gt.gettext('Reset')];
			$('.tabletxt').eq(0).html(gt.gettext("Solution A"));
			$('.tabletxt').eq(1).html(gt.gettext("Solution B"));
			$('.tabletxt').eq(2).html(gt.gettext("Solution C"));
			$('.tabletxt').eq(3).html(gt.gettext("Solution D"));
			$('#textSoln').html(gt.gettext("50ml Solution"));
			$('#textSulphuric').html(gt.gettext("20ml Dil.Sulphuric Acid"));
			$('#textCloth').html(gt.gettext("Cotton Cloth"));
			selectArr=['none','auto'];
			mainTop=$('#mainDiv').position().top;
			mainLeft=$('#mainDiv').position().left;
			imageIconArr.sort(function (){    //random function of solution
				return 0.5 - Math.random();
			});
			$("#beakersol1").attr("src",simPath+"images/"+imageIconArr[0]);
			$("#beakersol2").attr("src",simPath+"images/"+imageIconArr[1]);
			$("#beakersol3").attr("src",simPath+"images/"+imageIconArr[2]);
			$("#beakersol4").attr("src",simPath+"images/"+imageIconArr[3]);
			String.prototype.filename=function(extension){//get the name of image
					var s= this.replace(/\\/g, '/');
					s= s.substring(s.lastIndexOf('/')+ 1);
					return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
				}
			$("#beakersol1").css('opacity','0.3');
			$("#beakersol1").css('pointer-events','none'); // disable click function
			imgname=$('#beakersol1').attr('src').filename();
			$("#AlertIcon").css('display','block');
			//helpcount =1;
			reactionFun(imgname);
			alertmsg();
			$('#sampleCombo').html(controlStr[0]);
		    $('#reset').html(controlStr[1]);
			
			 //*--Function to click reset button to reset all events---
			$("#reset").click(function(){
				window.location.reload();	   
			});
			
           	$('#beakersol1,#beakersol2,#beakersol3,#beakersol4').click(function() {
				helpcount =1;
					removeTrip();
					selecticon = this.id;
					imgname=$('#'+this.id).attr('src').filename();	
					$('#'+this.id).css('opacity','0.3');
					$('#'+this.id).css('pointer-events','none');
					if(this.id==iconSelected[0]){
						$('#beakersol2,#beakersol3,#beakersol4').css('opacity','1');
						$('#beakersol2,#beakersol3,#beakersol4').css('pointer-events','auto'); // enable click function
					}
					else if(this.id==iconSelected[1]){
						$('#beakersol1,#beakersol3,#beakersol4').css('opacity','1');
						$('#beakersol1,#beakersol3,#beakersol4').css('pointer-events','auto');
					}
					else if(this.id==iconSelected[2]){
						$('#beakersol1,#beakersol2,#beakersol4').css('opacity','1');
						$('#beakersol1,#beakersol2,#beakersol4').css('pointer-events','auto');
					}
					else if(this.id==iconSelected[3]){
						$('#beakersol1,#beakersol2,#beakersol3').css('opacity','1');
						$('#beakersol1,#beakersol2,#beakersol3').css('pointer-events','auto');
					}
					reactionFun(imgname);
			});	
});

function reactionFun(imagename){
	if(imagename=='Samplesol2'){  //Bleaching powder solution
		$('#bleachingSoln1').css('display','block');
		resetFun();
		removeTrip();
		msgcount=0;
		dragdrop('#blackCloth','#dropSoln1');
	}
	else{// other solutions
		$('#bleachingSoln1').css('display','none');
		resetFun();
		removeTrip();
		msgcount=1;
		dragdrop('#blackCloth','#dropSoln1');
	}
}

function alertmsg(){
	setTimeout(function(){
		$("#AlertIcon").css('display','none');
	}, 4000);
	trip = new Trip([{
		sel : $('#AlertIcon'),
		position : 'e',
		content : alertArray[0],
		expose : false,
		delay : 4000
	}]); 
	trip.start(); 
	window.trip = trip;	
	tripClickFlag=true;
}

function dragdrop(dragElement,dropArea){ //Drag function
	$(dragElement).draggable({containment:"#canvasBox",revertDuration:0 , 
			revert:function(){
						if(!Droped){
							if(dragElement == '#blackCloth'){
								$("#blackCloth").attr("src",simPath+"images/Cloth.png");
							}
							else if(dragElement == '#glassRodDiv'){
								$(dragElement).css({top:mainTop+108+"px",left:mainLeft+473+"px",transform:'rotate('+20+'deg)'});
								return false;
							}
							return true;
						}
					},
			drag:function(){
				removeTrip();
				iconselect(selectArr[0]);
				$(dropArea).css({'display':'block'});
				if(dragElement == '#blackCloth'){
					$("#blackCloth").attr("src",simPath+"images/ClothHanging.png");
				}
				else if(dragElement == '#glassRodDiv'){
					$("#glassRodDiv").css({transform:'rotate('+0+'deg)'});
				}
			}	 
	});	
	$(dropArea).droppable({accept:dragElement,     
				drop: function() {	
					if(dragElement == '#blackCloth'){ //drag cloth in 1st solution
						helpcount=2; 
						Droped=true;
						$(dragElement).css({top:mainTop+58+"px",left:mainLeft+64+"px"});
						$('#beaker1,#beaker2,#beakerSoln1,#beakerSoln2,#blackCloth').css({'display':'none'});
						
						$('#beaker1Cloth').css({'display':'block'});
						beakr1ClothIn = setInterval(beaker1Cloth,100);
						Droped=false;
						$('#tweezerOpen').css({'cursor':'pointer'});
						$('#tweezerOpen').draggable({disabled:false});
						dragdrop('#tweezerOpen','#dropSoln1');
					}
					else if(dragElement == '#tweezerOpen'){  //drag tweezer in 1st solution
						helpcount=3; 
						clearInterval(beakr1ClothIn);
						Droped=true;
						$(dragElement).css({top:mainTop+105+"px",left:mainLeft+50+"px",transform:'rotate('+-50+'deg)'});
						$('#beaker1Cloth,#tweezerOpen').css({'display':'none'});
						$('#beakerTweezer').css({'display':'block'});
						beakerTweezerIN = setInterval(beakerTweezer,200);
						$('#glassRodDiv').draggable({disabled:false});
						$('#glassRodDiv').css({'cursor':'default'});
						setTimeout(function()
						{
							$(dragElement).css({top:mainTop+30+"px",left:mainLeft+227+"px",transform:'rotate('+0+'deg)'});
						    $(dragElement).css({'display':'block'});
							
						    $(dragElement).animate({top:mainTop+271+'px',left:mainLeft+436+"px"},500,function(){
							$(dropArea).css('display','none');
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							$('#glassRodDiv,#dropSulphuric').css('z-index',1);
							$('#standTop').css('z-index',2);
							$('#glassRodDiv').css({'cursor':'pointer'});
							Droped=false;
							clearInterval(beakerTweezerIN);
							
							dragdrop('#glassRodDiv','#dropSulphuric');
						});},1800)
					} 
					else if(dragElement == '#glassRodDiv'){ 
						helpcount=4; 
						Droped=true;
						$(dragElement).draggable({disabled:true});
						$(dragElement).css({top:mainTop+85+"px",left:mainLeft+224+"px",transform:'rotate('+0+'deg)'});
						$('#beakerTweezer,#glassRodDiv').css({'display':'none'});
						if(imgname=='Samplesol2'){  //Bleaching powder solution
							$('#beaker2Cloth').css({'display':'block'});
							beaker2ClothIn = setInterval(beaker2Cloth,200);
						}
						else{
							$('#beakerBlackCloth').css({'display':'block'});
							beakerBlackClothIn =  setInterval(beakerBlackCloth,200); 
						}						
						setTimeout(function(){
							$(dragElement).css({'display':'block'});
							$(dragElement).animate({top:mainTop+-12+"px",left:mainLeft+224+"px"},1000);
							$(dragElement).animate({top:mainTop+-12+"px",left:mainLeft+455+"px"},1000);
							$(dragElement).animate({top:mainTop+103+"px",left:mainLeft+455+"px"},1000,function(){
								$(dragElement).css({top:mainTop+108+"px",left:mainLeft+473+"px",transform:'rotate('+20+'deg)'});
								$('#glassRodDiv').css({'cursor':'default'});
								Droped=false;
								clearInterval(beaker2ClothIn);
								clearInterval(beakerBlackClothIn);
								$("#Inference").css('display','block');
								iconselect(selectArr[1]);
							});
						},3400)
					}
				}
			});			
}

function iconselect(selectval){
	if(selecticon==iconSelected[0]){
		$('#beakersol2,#beakersol3,#beakersol4').css('opacity','1');
		$('#beakersol2,#beakersol3,#beakersol4').css('pointer-events',selectval); // enable click function
	}
	else if(selecticon==iconSelected[1]){
		$('#beakersol1,#beakersol3,#beakersol4').css('opacity','1');
		$('#beakersol1,#beakersol3,#beakersol4').css('pointer-events',selectval);
	}
	else if(selecticon==iconSelected[2]){
		$('#beakersol1,#beakersol2,#beakersol4').css('opacity','1');
		$('#beakersol1,#beakersol2,#beakersol4').css('pointer-events',selectval);
	}
	else if(selecticon==iconSelected[3]){
		$('#beakersol1,#beakersol2,#beakersol3').css('opacity','1');
		$('#beakersol1,#beakersol2,#beakersol3').css('pointer-events',selectval);
	}
}

function resetFun(){
	$("#Inference").css('display','none');
	$('#beaker1,#beaker2,#beakerSoln1,#beakerSoln2,#blackCloth').css({'display':'block'});
	$("#beaker1Cloth,#beakerTweezer,#beaker2Cloth,#beakerBlackCloth").css('display','none');
	$('.cloth1,.clothTweezer1,.clothGlassrod1,.clothBlack1').css('display','block');
	$('.cloth7,.clothTweezer10,.clothGlassrod20,.clothBlack20').css('display','none');
	clearInterval(beaker2ClothIn);
	clearInterval(beakerBlackClothIn);
	clearInterval(beakerTweezerIN);
	clearInterval(beakr1ClothIn);
	$('#tweezerOpen').draggable({disabled:true});
	$('#glassRodDiv').draggable({disabled:true});
	$('#tweezerOpen').css({'cursor':'default'});
	$('#glassRodDiv').css({'cursor':'default'});
}
function removeTrip(){
	if(tripClickFlag==true){
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag=false;
	}
} 
function beaker1Cloth(){
	if($('.cloth1').css('display') == 'block'){          
		$('.cloth1,.cloth3,.cloth4,.cloth5,.cloth6,.cloth7').hide();
		$('.cloth2').show();
	}
	else if($('.cloth2').css('display') == 'block'){          
		$('.cloth1,.cloth2,.cloth4,.cloth5,.cloth6,.cloth7').hide();
		$('.cloth3').show();	
	}
	else if($('.cloth3').css('display') == 'block'){          
		$('.cloth1,.cloth2,.cloth3,.cloth5,.cloth6,.cloth7').hide();
		$('.cloth4').show();	
	}
	else if($('.cloth4').css('display') == 'block'){          
		$('.cloth1,.cloth2,.cloth3,.cloth4,.cloth6,.cloth7').hide();
		$('.cloth5').show();	
	}
	else if($('.cloth5').css('display') == 'block'){          
		$('.cloth1,.cloth2,.cloth3,.cloth4,.cloth5,.cloth7').hide();
		$('.cloth6').show();	
	}
	else if($('.cloth6').css('display') == 'block'){          
		$('.cloth1,.cloth2,.cloth3,.cloth4,.cloth5,.cloth6').hide();
		$('.cloth7').show();	
	}
}

function beakerTweezer(){
	
	if($('.clothTweezer1').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer3,.clothTweezer4,.clothTweezer5,.clothTweezer6,.clothTweezer7,.clothTweezer8,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer2').show();
	}
	else if($('.clothTweezer2').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer4,.clothTweezer5,.clothTweezer6,.clothTweezer7,.clothTweezer8,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer3').show();
	}
	else if($('.clothTweezer3').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer5,.clothTweezer6,.clothTweezer7,.clothTweezer8,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer4').show();
	}
	else if($('.clothTweezer4').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer4,.clothTweezer6,.clothTweezer7,.clothTweezer8,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer5').show();
	}
	else if($('.clothTweezer5').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer4,.clothTweezer5,.clothTweezer7,.clothTweezer8,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer6').show();
	}
	else if($('.clothTweezer6').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer4,.clothTweezer5,.clothTweezer6,.clothTweezer8,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer7').show();
	}
	 else if($('.clothTweezer7').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer4,.clothTweezer5,.clothTweezer6,.clothTweezer7,.clothTweezer9,.clothTweezer10').hide();
		$('.clothTweezer8').show();
	}
	else if($('.clothTweezer8').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer4,.clothTweezer5,.clothTweezer6,.clothTweezer7,.clothTweezer8,.clothTweezer10').hide();
		$('.clothTweezer9').show();
	}
	else if($('.clothTweezer9').css('display') == 'block'){          
		$('.clothTweezer1,.clothTweezer2,.clothTweezer3,.clothTweezer4,.clothTweezer5,.clothTweezer6,.clothTweezer7,.clothTweezer8,.clothTweezer9').hide();
		$('.clothTweezer10').show();
	}
}

function beaker2Cloth()
{
	if($('.clothGlassrod1').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod2').show();
	}
	else if($('.clothGlassrod2').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod3').show();
	} 
	else if($('.clothGlassrod3').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod4').show();
	} 
	else if($('.clothGlassrod4').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod5').show();
	} 
	else if($('.clothGlassrod5').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod6').show();
	} 
	else if($('.clothGlassrod6').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod7').show();
	} 
	else if($('.clothGlassrod7').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod8').show();
	} 
	else if($('.clothGlassrod8').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod9').show();
	} 
	else if($('.clothGlassrod9').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod10').show();
	} 
	else if($('.clothGlassrod10').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod11').show();
	} 
	else if($('.clothGlassrod11').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod12').show();
	} 
	else if($('.clothGlassrod12').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod13').show();
	} 
	else if($('.clothGlassrod13').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod14').show();
	} 
	else if($('.clothGlassrod14').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod15').show();
	}
	else if($('.clothGlassrod15').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod16').show();
	}
	else if($('.clothGlassrod16').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod18,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod17').show();
	}
	else if($('.clothGlassrod17').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod19,.clothGlassrod20').hide();
		$('.clothGlassrod18').show();
	}
	else if($('.clothGlassrod18').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod20').hide();
		$('.clothGlassrod19').show();
	}
	else if($('.clothGlassrod19').css('display') == 'block'){          
		$('.clothGlassrod1,.clothGlassrod2,.clothGlassrod3,.clothGlassrod4,.clothGlassrod5,.clothGlassrod6,.clothGlassrod7,.clothGlassrod8,.clothGlassrod9,.clothGlassrod10,.clothGlassrod11,.clothGlassrod12,.clothGlassrod13,.clothGlassrod14,.clothGlassrod15,.clothGlassrod16,.clothGlassrod17,.clothGlassrod18,.clothGlassrod19').hide();
		$('.clothGlassrod20').show();
	}
}

function beakerBlackCloth()
{
	if($('.clothBlack1').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack2').show();
	}
	else if($('.clothBlack2').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack3').show();
	} 
	else if($('.clothBlack3').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack4').show();
	} 
	else if($('.clothBlack4').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack5').show();
	} 
	else if($('.clothBlack5').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack6').show();
	} 
	else if($('.clothBlack6').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack7').show();
	} 
	else if($('.clothBlack7').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack8').show();
	} 
	else if($('.clothBlack8').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack9').show();
	} 
	else if($('.clothBlack9').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack10').show();
	} 
	else if($('.clothBlack10').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack11').show();
	} 
	else if($('.clothBlack11').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack12').show();
	} 
	else if($('.clothBlack12').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack13').show();
	} 
	else if($('.clothBlack13').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack14').show();
	} 
	else if($('.clothBlack14').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack15').show();
	}
	else if($('.clothBlack15').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack17,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack16').show();
	}
	else if($('.clothBlack16').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack18,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack17').show();
	}
	else if($('.clothBlack17').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack19,.clothBlack20').hide();
		$('.clothBlack18').show();
	}
	else if($('.clothBlack18').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack20').hide();
		$('.clothBlack19').show();
	}
	else if($('.clothBlack19').css('display') == 'block'){          
		$('.clothBlack1,.clothBlack2,.clothBlack3,.clothBlack4,.clothBlack5,.clothBlack6,.clothBlack7,.clothBlack8,.clothBlack9,.clothBlack10,.clothBlack11,.clothBlack12,.clothBlack13,.clothBlack14,.clothBlack15,.clothBlack16,.clothBlack17,.clothBlack18,.clothBlack19').hide();
		$('.clothBlack20').show();
	}
}

