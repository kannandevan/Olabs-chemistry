var labArray;
var clickVar=0;
var bobWeightArray=[53.670,72.640,58.55,64.17,81.410];
var woodWeightArray=[8.720,11.310,13.650,15.770,6.890];
var weightArray=[100,50,20,20,10,5,2,2,1,500,200,100,20,20,10,200,50];
var objectWeight=0;
var sceneFlag;
var imgSelect=false;  //bob or wood added
var openFlag=false;
var doorFlag=true; //check door is closed;
var weightid=0;
var lastdigit;
var count=0//count the number of objects selected
var weight =0; 
var weightSum=0
var clickVar2=0;
var openinterval1;
var leftMax=false;
var rightMax=false;
var leftMaxValue;
var rightMaxValue;
var needlePx=0;
var stopValue=0;
var openinterval;
var gt=$;

window.onload = function init()
{
	document.getElementById("expName").innerHTML=gt.gettext("Beam Balance");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	labArray=[gt.gettext("Open Door"),gt.gettext("Select an object:"),gt.gettext("Bob"),gt.gettext("Wooden block"),gt.gettext("Select weight:"),gt.gettext("Close Door"),gt.gettext("Reset"),gt.gettext("Weights added."),gt.gettext("Result"),gt.gettext("Check "),gt.gettext("Weight of the object =&nbsp;"),gt.gettext("Show result"),gt.gettext("Arrest the balance, then open the door")];		
	$("#label1").val(labArray[0]);
	$("#label2").html(labArray[1]);
	$("#label3").html(labArray[2]);
	$("#label4").html(labArray[3]);
	$("#label5").html(labArray[4]);
	$("#label7").val(labArray[6]);
	$("#label8").html(labArray[7]);
	$("#label9").html(labArray[8]);	
	$("#CheckButton").val(labArray[9]);
	$("#resultLabel").html(labArray[10])
	$("#showR").html(labArray[11])
		sceneFlag=1;
	var HelpArray=[gt.gettext("Click here to open the door."),gt.gettext("Click here to select the object."),gt.gettext("Click here to select the weights."),gt.gettext("Click here to close the door ."),gt.gettext("Click here to arrest the balance.")];
	HelpMSG_One=HelpArray[0];
	HelpMSG_Two=HelpArray[1];
	HelpMSG_Three=HelpArray[2];
	HelpMSG_Four=HelpArray[3];
	HelpMSG_Five=HelpArray[4];		  			
}
//function for open or close the door
function doorOpenButton(){
 	if((openFlag==false)&&(clickVar2==0)){   //if door closed and turner is not clicked
		openFlag=true;
		$("#label1").val(labArray[5]);
		openinterval = setInterval(doorOpenStages, 400);//fn call for opening
	}
	else if(openFlag==true){
		openFlag=false
		$("#label1").val(labArray[0]);
		openinterval = setInterval(doorCloseStages, 400);//fn call for closing
	}
	else{
		var arrestTrip = new Trip([{
				sel : $('#turner'),
				position : 'n',
				content : labArray[12],
				expose : false,
				delay : 3000
			}]);
			arrestTrip.start(); 
			window.arrestTrip = arrestTrip;	
	}
}
//function for choosing steel ball 
function functionImage1(){
 		if(openFlag==true){
			imgSelect=true;
			$("#leftW2").css("visibility","hidden");
			$("#objectImg2").css({opacity:'1'});
			$("#objectImg1").css({opacity:'0.5'});
			$("#obImg1").unbind("click")
			$("#obImg2").unbind("click")
			objectWeight = bobWeightArray[ (Math.floor((Math.random() * 5)+1))-1];
			$("#handLHolder").animate({left:'99px'},1000,function(){
				$("#leftW1").css("visibility","visible");
				$("#handLHolder").animate({left:'-154px'},1000,function()
				{
					$("#obImg2").bind("click",functionImage2)
				});
			});	
		}
}
//function for choosing wooden block
function functionImage2(){
 		if(openFlag==true){
			imgSelect=true;
			$("#leftW1").css("visibility","hidden");
			$("#objectImg2").css({opacity:'0.5'});
			$("#obImg2").unbind("click")
			$("#objectImg1").css({opacity:'1'});
			$("#obImg1").unbind("click");
			objectWeight = woodWeightArray[ (Math.floor((Math.random() * 5)+1))-1];
			$("#handLHolder").animate({left:'99px'},1000,function(){
				$("#leftW2").css("visibility","visible");
				$("#handLHolder").animate({left:'-154px'},1000,function(){
					$("#obImg1").bind("click",functionImage1)	
				});
			});	
		}
}
//function for open the door
function doorOpenStages(){
	if(openFlag==true){                          //opening
		if($('#rightDoor').css('display') == "block"){ 
		      doorFlag =false;   
			 $('#rightDoor').hide();
			 $('#rightDoor1').show();
			 $('#leftDoor').hide();
			 $('#leftDoor1').show();	
		}
		else if($('#rightDoor1').css('display') == "block"){          
			 $('#rightDoor1').hide();
			 $('#rightDoor2').show();
			 $('#leftDoor1').hide();
			 $('#leftDoor2').show();	
		}
		else if($('#rightDoor2').css('display') == "block"){          
			 $('#rightDoor2').hide();
			 $('#rightDoor3').show();
			 $('#leftDoor2').hide();
			 $('#leftDoor3').show();
		}
		else if($('#rightDoor3').css('display') == "block"){          
			 $('#rightDoor3').hide();
			 $('#rightDoor4').show();
			 $('#leftDoor3').hide();
			 $('#leftDoor4').show();	
		}
		else if($('#rightDoor4').css('display') == "block"){          
			 $('#rightDoor4').hide();
			 $('#rightDoor5').show();
			 $('#leftDoor4').hide();
			 $('#leftDoor5').show();
			 clearInterval(openinterval)
		}
	}
} 
//function for close the door
function doorCloseStages(){
 		if(openFlag==false){      
				if($('#rightDoor5').css('display') == "block"){          
			 			$('#rightDoor5').hide();
			 			$('#rightDoor4').show();
						$('#leftDoor5').hide();
			 			$('#leftDoor4').show();
				}
				else if($('#rightDoor4').css('display') == "block"){          
			 			$('#rightDoor4').hide();
					 	$('#rightDoor3').show();
			 			$('#leftDoor4').hide();
			 			$('#leftDoor3').show();
				}
				else if($('#rightDoor3').css('display') == "block"){          
			 			$('#rightDoor3').hide();
			 			$('#rightDoor2').show();
			 			$('#leftDoor3').hide();
			 			$('#leftDoor2').show();
				}
				else if($('#rightDoor2').css('display') == "block"){          
			 			$('#rightDoor2').hide();
			 			$('#rightDoor1').show();
						$('#leftDoor2').hide();
			 			$('#leftDoor1').show();
				}
				else if($('#rightDoor1').css('display') == "block"){        
						doorFlag=true;  
			 			$('#rightDoor1').hide();
			 			$('#rightDoor').show();
			 			$('#leftDoor1').hide();
			 			$('#leftDoor').show();
						clearInterval(openinterval)
				}
		}
}
//function for select right side object to the beam balance
function addweight(ID){
		if(openFlag==true){
				var myString = ID;
				lastdigit = myString.replace( /^\D+/g, '');
				weight = weightArray[lastdigit-1];
				$(".smallImage1").off("click");
				$(".smallImage2").off("click");
				$(".smallImage3").off("click");
				if($("#weight"+lastdigit).css('visibility')== "hidden"){    // add object to beam balance
					$("#w"+lastdigit).animate({right:'225px'},1000)
					$("#handRHolder").animate({right:'84px'},1000,function(){
						$("#weight"+lastdigit).css({visibility:"visible"});	
						$("#w"+lastdigit).css({visibility:"hidden"});
						$("#labelEight").css("visibility","visible");
						$("#dot"+lastdigit).css({visibility:"visible"});
						$("#handRHolder").animate({right:'-145px'},1000,function(){
							selectObject();
						})
					});	
					if(lastdigit<=9){                             //check weights in gram
						weightSum=weightSum+weight;  //sum of total weight
					}
					else{                                         // check weights in mg
						weight=weight/1000;                     ///convert mg into gram
						weightSum=weightSum+weight;  
					}
					count++;
				}
				else{         											//remove object from beam balance
					$("#handRHolder").animate({right:'84px'},1000,function(){
						$(".smallImage1").off("click");
						$(".smallImage2").off("click");
						$(".smallImage3").off("click");
						$("#weight"+lastdigit).css({visibility:"hidden"});	
						$("#w"+lastdigit).css({visibility:"visible"});
						$("#w"+lastdigit).animate({right:'-1px'},1000)
						$("#handRHolder").animate({right:'-145px'},1000,function(){
							selectObject();
						})
					});
					$("#dot"+lastdigit).css({visibility:"hidden"});
					if(lastdigit<=9){
						weightSum=weightSum-weight;
					}
					else{
						weight=weight/1000;                     ///convert mg into gram
						weightSum=weightSum-weight;                      
					}	
					count--;
				}
				if(count==0){  											//if no weights added into the beam balance
					$("#labelEight").css("visibility","hidden");
				}
		}
}
//function for turner
function functionTurner(){
		if((openFlag==false)&&(doorFlag)){
				if(clickVar2==0){ //1st click of turner
						//$("#textResult").attr("disabled",false);
						//$("#CheckButton").attr("disabled",false);
						$("#showResult").attr("disabled",false); //enable checkbox
						$("#res").html(objectWeight+"g")  // result
						clickVar2=1
	 					functionNeedle();
						var angle = 180;
						turnerRotate(angle);
				}
				else{  //2nd click of turner														
						clickVar2=0
						var angle = 360;
						turnerRotate(angle);
						clearInterval(openinterval1)
						needlePx=0
						needleRotate(needlePx);
						$('#upperPart2').css("-webkit-transform","rotate(0deg)");
						$('#upperPart2').css("-moz-transform","rotate(0deg)");
						$('#upperPart2').css("-ms-transform","rotate(0deg)");
	   					$('#upperPart2').css("-o-transform","rotate(0deg)");
						$('#upperPart2').css("transform","rotate(0deg)");	
						leftMax=false;
						rightMax=false;
				}
		}
}
//showing result
function check(){
	if($("#show").is(':visible')){
		$("#show").hide();	
	}
	else{
		$("#show").show();	
	}	
}
//function for rotation of turner
function turnerRotate(angle){  
		$('#turner').css("-webkit-transform","rotate("+angle+"deg)");
		$('#turner').css("-moz-transform","rotate("+angle+"deg)");
		$('#turner').css("-ms-transform","rotate("+angle+"deg)");
		$('#turner').css("-o-transform","rotate("+angle+"deg)");
		$('#turner').css("transform","rotate("+angle+"deg)");
}
//function for the movement of beam balance initial click of the knob
function functionNeedle(){
		if((weight == 0)&&(!imgSelect)){      //   if no bob or wood added
			leftMaxValue=16;
			rightMaxValue=11;
			stopValue=0;
			needleMovement(leftMaxValue,rightMaxValue,stopValue)	
			}
		else if((weight == 0.01)&&(!imgSelect)){  //if 10mg weight added
			leftMaxValue=15;
			rightMaxValue=3;
			stopValue=-5;
			needleMovement(leftMaxValue,rightMaxValue,stopValue)
		}
		else if((Number(weightSum).toFixed(2)==(Number(objectWeight).toFixed(2)))||(Number(weightSum).toFixed(2)==(Number(objectWeight-0.01).toFixed(2)))||(Number(weightSum).toFixed(2)==(Number(objectWeight-0.02).toFixed(2)))||(Number(weightSum).toFixed(2)==(Number(objectWeight+0.01).toFixed(2)))||(Number(weightSum).toFixed(2)==(Number(objectWeight+0.02).toFixed(2)))){  //proportional movements ie weight of the bob and weight of the objects are equal
			leftMaxValue=16;
			rightMaxValue=14;
			stopValue=0;
			needleMovement(leftMaxValue,rightMaxValue,stopValue)
			
		}
		else if(weightSum>(objectWeight+0.75)){  //if weight of the bob less than total weight  ...........needle position to left side
			needlePx = 15
			needleRotate(needlePx)
			var floatNeedlePx = needlePx/12;
			upperpartRotate(floatNeedlePx)
		}
		else if(weightSum<(objectWeight-0.75)){  //if weight of the bob greater than total weight ...... needle position to right side
			needlePx = -15
			needleRotate(needlePx)
			var floatNeedlePx = needlePx/12;
			upperpartRotate(floatNeedlePx)
		}
		else{  //improportional movement
			if((weightSum<(objectWeight+0.75))&&(weightSum>objectWeight))  //if object weight greater than bob or wood
			{
				leftMaxValue=16;
				rightMaxValue=6;
				stopValue=-4;
				needleMovement(leftMaxValue,rightMaxValue,stopValue)
			}
			else  
			{
				leftMaxValue=5;
				rightMaxValue=12;
				stopValue=4;
				needleMovement(leftMaxValue,rightMaxValue,stopValue)
			}
		}
};
//function for needle rotation
function needleRotate(needlePx){
	$('#needle').css("-webkit-transform","rotate("+(needlePx)+"deg)");
	$('#needle').css("-moz-transform","rotate("+(needlePx)+"deg)");
	$('#needle').css("-ms-transform","rotate("+(needlePx)+"deg)");
	$('#needle').css("-o-transform","rotate("+(needlePx)+"deg)");
	$('#needle').css("transform","rotate("+(needlePx)+"deg)");
}
//function for upperpart needle rotation
function upperpartRotate(floatNeedlePx){
	$('#upperPart2').css("-webkit-transform","rotate("+(floatNeedlePx)+"deg)");
	$('#upperPart2').css("-moz-transform","rotate("+(floatNeedlePx)+"deg)");
	$('#upperPart2').css("-ms-transform","rotate("+(floatNeedlePx)+"deg)");
	$('#upperPart2').css("-o-transform","rotate("+(floatNeedlePx)+"deg)");
	$('#upperPart2').css("transform","rotate("+(floatNeedlePx)+"deg)");
	$('#leftWeight').css("top",(floatNeedlePx * -1) + "px");
	$('#rightWeight').css("top",(floatNeedlePx * 1) + "px");	
}
//function for needle movement
function needleMovement(leftMaxValue,rightMaxValue,stopValue){
		openinterval1 = setInterval(function(){
				if (needlePx<leftMaxValue&&leftMax==false) {
						needlePx++;
						if(needlePx==(leftMaxValue-1)){
								leftMaxValue-=1;  	
							}
				} 
				else if (needlePx>-rightMaxValue && rightMax==false) {
						needlePx--;
						if(needlePx==-(rightMaxValue-1)){
								rightMaxValue-=1;  
						}	
				}
				if (needlePx==leftMaxValue) {
						leftMax=true;
						rightMax=false;       
				} 
				else if (needlePx==-rightMaxValue) {
						leftMax=false;
						rightMax=true;      
				}
				if(rightMaxValue==stopValue){
						clearInterval(openinterval1)
				}
				needleRotate(needlePx)
				var floatNeedlePx = needlePx/12;
				upperpartRotate(floatNeedlePx)
		},100);
}
function reloadPage(){//reload the page   ie reset
	location.reload();
}
function selectObject(){   //function for select object
	$(".smallImage1").click(function(){
		var ID = this.id;
		addweight(ID);})
	$(".smallImage2").click(function(){
		var ID = this.id;
		addweight(ID);})
	$(".smallImage3").click(function(){
		var ID = this.id;
		addweight(ID);})
}
//function for check the result 
function checkResult(){
		text = $("#textResult").val();	
		if((text == (Number(objectWeight).toFixed(2)))||(text == (Number(objectWeight-0.01).toFixed(2)))||(text == (Number(objectWeight-0.02).toFixed(2)))||(text == (Number(objectWeight+0.01).toFixed(2)))||(text == (Number(objectWeight+0.02).toFixed(2)))){	
			$('#wrong').hide();
			$('#right').show();
		}
		else{
			$('#right').hide();
			$('#wrong').show();
		}
}
$(document).ready(function(){
		$("#label1").bind("click",doorOpenButton);   //open door
		$("#turner").bind("click",functionTurner);
		$("#obImg1").bind("click",functionImage1)  //select bob
		$("#obImg2").bind("click",functionImage2)  //select wood
		selectObject();
});