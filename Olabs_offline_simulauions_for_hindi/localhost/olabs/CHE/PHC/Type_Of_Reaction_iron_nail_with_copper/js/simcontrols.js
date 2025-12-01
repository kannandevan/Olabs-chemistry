////variable declaration
window.onload=initialFunction;"initEvent";

var degree=0;
var int;
var bgTop;
var bgLeft;
var deg=90;
var leftFlag=0;
var rightFlag=0;
var id;
var instrcn1;
var minTxt;

var path0=simPath+'images/nailStraightImg.png';
var path1=simPath+'images/nailInTesttubeWhite.png';
var path2=simPath+'images/nail1.png';
var path3=simPath+'images/nailStraightBrownImg.png';
var path4=simPath+'images/nailBrownImg.png';
var inst1,inst2,inst3;


var contentArray;
////ready function
$(document).ready(function(){
	
	bgTop=document.getElementById("bgCanvas").offsetTop;
	bgLeft=document.getElementById("bgCanvas").offsetLeft;
	
	
});
//Initial function....
function initialFunction(){
	$('#TesttubegreenSolnImg').fadeOut(1);
	$("#nailInTesttube").fadeOut(1);
	
	document.getElementById("expName").innerHTML=gt.gettext("Single Displacement Reaction");
	inst1=gt.gettext("Click and drag any of the iron nail to immerse it in one of the test tubes.");
	inst2=gt.gettext("Click on the thread to remove the iron nail from the test tube and compare it with the other iron nail.");
	inst3=gt.gettext("Click on the information icon to see the inference.");
	
	instrcn1="<li>"+inst1+"</li><br />"+"<li>"+inst2+"</li><br />"+"<li>"+inst3+"</li><br />";
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));		
	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	minTxt=gt.gettext("15 Mins");
	instructhead=gt.gettext("Instructions");
	$('.varTitle_1').html(instructhead);
	$('#reset').attr('value',gt.gettext("Reset"));
	document.getElementById("instructions").innerHTML=instrcn1;
	
	
	contentArray=[gt.gettext('Less reactive Cu<sup>2+</sup> ions are displaced</br>from CuSO<sub>4</sub> solution by the more reactive Fe<sup>2+</sup> ions.'),gt.gettext('The color of the solution changes to green</br>due to  the presence of FeSO<sub>4</sub> solution.'),gt.gettext('Brown coating of copper on the iron nail is because of the displaced Cu<sup>2+</sup> ions.')];
}
//function for clock rotate...
function clockRotate(){
	if(degree<=deg){
		degree++;
	}
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degree+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degree +'deg)'});
	if(degree==deg){
		$("#tooltipLabelforClock").css({
					display:'block'			
			});
		$("#tooltipLabelforClock").html(minTxt);
		if(leftFlag==1){
			$("#ThreadDiv").css({
					display:'block'			
			});
		}else{
			$("#ThreadDiv").css({
					left:'452px',	
					display:'block'	
			})
		}
		
	}
}
//function for drag the nail to move into the test tube...
function dragNail(nailId){//1,nailId2
id="#"+nailId;
	$(id).draggable({
			drag: function(event,ui){
			}
	 	});
}
//function for image change while drag  the iron nail
function changeImg(nailId){
	
	if(id=="#nail1Img"){
			$("#nail2Img").css({
						 zIndex:'3'  
			})
			
	}else{
			$("#nail1Img").css({
						 zIndex:'3'  
			})
			
	}
	id="#"+nailId;
	$(id).css({
			 height:'400px',
			 top:'-75px',
			'background-image':'url('+path0+')'		   
			  });
	
	$(id).draggable({
			stop: function(event,ui) {
				//alert(id)
					 if (((this.offsetTop>=bgTop+(-385))&&(this.offsetLeft>=bgLeft+45)) && ((this.offsetTop<=bgTop+(-100))&&(this.offsetLeft<=bgLeft+135))){//to put the nail in to the testube left
						 leftFlag=1;
						// alert("amma");
						//alert(this.offsetLeft+"---left"+this.offsetTop+"---top");
						this.style.left=bgLeft+85+"px";
						this.style.top=bgTop+(-340)+"px";
						this.style.zIndex=4;
						dragDisable();
						$(id).animate({
			 					top:'-76px'
							},1000,function(){
								$(id).css({
									'left':'90px',
									top:'10px',
									height:'320px',
									'background-image':'url('+path1+')'
			  					});
							
								/*$("#clockBody,#needle").css({
										display:'block'
								})
								int=setInterval(clockRotate,60);
								$("#nailInTesttube").fadeIn(7000);*/
								$('#TesttubeBlueSolnImg').fadeOut(7000);
								//$('#TesttubegreenSolnImg').fadeIn(7000);
								commonLeftAndRight()
						});
					}else if(((this.offsetTop>=bgTop+(-385))&&((this.offsetLeft>=bgLeft+320)))&& ((this.offsetTop<=bgTop+(-100))&&(this.offsetLeft<=bgLeft+415))){//to put the nail in to the testube right
						rightFlag=1;
						this.style.left=bgLeft+360+"px";
						this.style.top=bgTop+(-340)+"px";
						this.style.zIndex=4;
						dragDisable();
						$(id).animate({
			 					top:'-76px'
							},1000,function(){
								$(id).css({
									'left':'367px',
									top:'10px',
									height:'320px',
									'background-image':'url('+path1+')'
			 					 });
								
								
								$("#nailInTesttube").css({
										  left:'412px'
										  })
								//$("#clockBody,#needle").css({
										//display:'block'
								//})
								//int=setInterval(clockRotate,60);
								//$("#nailInTesttube").fadeIn(7000);
								$('#TesttubeBlueSolnImgRight').fadeOut(7000);
								$('#TesttubegreenSolnImg').css({
												left:'397px'			   
											 })
								commonLeftAndRight()
								//$('#TesttubegreenSolnImg').fadeIn(7000);
						});
					}
					else{
						position();
							$(id).css({
									 'background-image':'url('+path2+')'		   
							});
							$("#nail2Img,#nail1Img").css({
								 zIndex:'8'  
							})
				}
			}
		});
}
//function commonForleft and right testTube
function commonLeftAndRight(){
	$("#clockBody,#needle").css({
					display:'block'
	})
	int=setInterval(clockRotate,60);
	$("#nailInTesttube").fadeIn(7000);
	$('#TesttubegreenSolnImg').fadeIn(7000);
	
}
//function for drag disable
function dragDisable(){
	$("#helpDiv").css({
				 display:'block' ///click on the help buton,which shows"reset the simualtion to enable help"
	})
	if(id=="#nail1Img"){
		
			$("#nail2Img").css({
						 zIndex:'3'  
			})
			$("#resultdiv").css({
								top:'312px'
						
			})
	}else{
			$("#nail1Img").css({
						 zIndex:'3'  
			})
			$("#resultdiv").css({
								top:'290px'
						
			})
	}
}
//fnctn to click on the thread to moveinto the orignl postn(change in color of nail)
function clickThread(){
	$("#ThreadDiv,#clockBody,#needle,#nailInTesttube,#tooltipLabelforClock").css({
				display:'none'			
		});
	if(leftFlag==1){
		$(id).css({
				   top:'-76px',
				   left:'85px',
				   zIndex:'4'
			})
	}else{
		$(id).css({
			   left:'360px',
			   top:'-76px',
			   zIndex:'4'
		})
	}
	$(id).css({
				'background-image':'url('+path3+')'		   
			  });
	$(id).animate({
			 	top:'-280px',
			},1000);
	$(id).animate({
			 	left:'232px',
			},1000);
	$(id).animate({
			 	top:'-10px',
			},1000,function(){
				position();
					$(id).css({
							 'background-image':'url('+path4+')'		   
			  			});
					$('#inferenceImg').css({
						display:'block'
					})
				});
}
//function for the image position while dropping...
function position(){
	if(id=="#nail1Img"){
		$(id).css({
				 top:'302px',
				 left:'225px',
				 height:'30px',
		});
	}else{
		$(id).css({
				top:'280px',
				left:'225px',
				height:'30px',
		});
	}
}

