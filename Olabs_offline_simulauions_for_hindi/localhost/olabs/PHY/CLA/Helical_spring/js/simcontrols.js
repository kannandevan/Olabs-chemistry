
var acceleration=[9.8,1.6,8.69,11.17,26]//acceleration due to gravity of Earth,Moon,Uranus,Saturn,Jupiter respectively 
var current_acceleration_value=acceleration[0];

//Spring constant
var springConstantOne=30;
var springConstantTwo=35;
var springConstantThree=40;
var currentSpringConstant_val=30;

var massValue=0;
var massProducing_extension=0;
var load_N;
var extensionIn_m;
var extensionIn_cm;
var changeExtensionIn_NormalScale=35;
var firstInterval;
var secondInterval;
var animationFinal=152;
var animationSpeed=300;
var zoomAdjstmnt=false;
var rangeFlag=false;
var moonScale=false;

window.onload=function (){
//Localization 

	var springArray=[gt.gettext("Spring 1"),gt.gettext("Spring 2"),gt.gettext("Spring 3")];
	var environmentArray=[gt.gettext("Earth (g=9.8 m/s&#178;)"),gt.gettext("Moon (g=1.6 m/s&#178;)"),gt.gettext("Uranus (g=8.69 m/s&#178;)"),gt.gettext("Saturn (g=11.17 m/s&#178;)"),gt.gettext("Jupiter (g=26 m/s&#178;)")];
	var selectSpring_text=gt.gettext("Select spring :");
	var chooseEnvironment_text=gt.gettext("Choose environment :");
	var changeHangingMass_text=gt.gettext("Change hanging mass :");
	var showResult_text =gt.gettext("Show result");
	var springConstant_text =gt.gettext("Spring constant, K = ");
	document.getElementById("expName").innerHTML=gt.gettext("Helical Spring");
	//$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	
	$(document).ready(function() {
	$('#ResetBtn').attr('value',gt.gettext('Reset'));
	//Inserting the string into the corresponding field.
	$("#Chr_one").html(selectSpring_text);
	$("#Chr_two").html(chooseEnvironment_text);
	$("#massLbl").html(changeHangingMass_text);
	$("#Chr_three").html(showResult_text);
	$("#answr_para").html(springConstant_text);
	$("#Result_Span").html(currentSpringConstant_val);
	$("#weightBarDiv").css({"height":"10px"});
	basicSpringAction(35,100,-46);//calling the spring action function on ready.
		//Function-changing the Spring range.
			function dropdown_function(getid,array_set){
				$.each(array_set, function(val, text) {
				getid.append(
				$('<option></option>').val(val).html(text)
					);
				});
			}
		//Function calling - Adding text into the drop down.
		dropdown_function($("#Spring_ID"),springArray);
		dropdown_function($("#Environment_ID"),environmentArray);
		
		//Changing the spring.
		$("#Spring_ID").change(function(){
			var spring_value=$("#Spring_ID").find(':selected').val();
			//Changing the spring image	
			$("#spring").attr({'src': simPath+"/images/"+"spring_"+spring_value+".png"});
				switch(spring_value){
				case "0":{
					currentSpringConstant_val=springConstantOne;//setting the value of spring constant .
				}
				break;
				case "1":{
					currentSpringConstant_val=springConstantTwo;
				}
				break;
				case "2":{
					currentSpringConstant_val=springConstantThree;
				}
				break;
				default:alert("Error");
				}
				//Result text changing 
				$("#Result_Span").html(currentSpringConstant_val);
				//The calculation function only call when the rangeFlage is true. on the change of spring drop-down menu.
				if(rangeFlag){
				Calculation();
				}
		});
		// Changing the environment 
		$("#Environment_ID").change(function(){
			var environment_Value=$("#Environment_ID").find(':selected').val();
			moonScale=false;
			//Applying the value of Acceleration due to gravity 
			switch (environment_Value){
			case "0":{
				current_acceleration_value=acceleration[0];//setting the value of environment. (Acceleration due to gravity) Earth
			}
			break;
			case "1":{
				current_acceleration_value=acceleration[1];//Moon
				moonScale=true;
			}
			break;
			case "2":{
				current_acceleration_value=acceleration[2];//Uranus
			}
			break;
			case "3":{
				current_acceleration_value=acceleration[3];//Saturn
			}
			break;
			case "4":{
				current_acceleration_value=acceleration[4];//Jupiter
			}
			break;
			default:alert("Error");
			}
			if(rangeFlag){
				Calculation();
				}
		});
		//(Chechk Box Hide/Show)
		$('#Chkbox').click(function() {
			$("#AnswerPara").toggle(this.checked);
		});
	
	});

}
	function basicSpringAction(spring_inval,Spring_ActionInval,ZoomScale_Inval){
			$("#spring,#zoom_Scale,#weight,#zoom_Arrow").stop(true);//stopping animation.
			clearInterval(firstInterval);// clearing the interval.
			//clearInterval(secondInterval);
			var animationValue=parseInt(spring_inval)
			var moveTop=animationValue+15;
			var moveBottom=animationValue-15;
			console.log("animationValue :"+animationValue);
			console.log("moveTop :"+moveTop);
			console.log("moveBottom :"+moveBottom);
			animationFinal=spring_inval*7;// The spring will move according the formula.
			animationSpeed=180;// setting the animation speed. 
		
		var	zoomArrow_animationFinl=99;
		var	zoomArrow_animationInil=-99;
		var incrmnt=3;
		var springMvmnt=parseInt("20");
		var animationSpeedIncrmnt=180;
		var zoomArrowPosition=150;
		var incrementChange=0.1;//spring position changes according to this value.
		
			firstInterval =  setInterval(function () {//Spring animation 
			$("#weight").animate({"top":moveTop+"px"},animationSpeed);//spring setting value. 
			$("#weight").animate({"top":moveBottom+"px"},animationSpeed);//initial spring position.
			//$("#weight").animate({"top":spring_inval+"px"},animationSpeed);//spring setting value. 
			
			//$("#weight").animate({"top":spring_inval+"px"},animationSpeed);//spring setting value. 
			$("#spring").animate({"height":moveTop+"px"},animationSpeed)
			$("#spring").animate({"height":moveBottom+"px"},animationSpeed);
			//$("#spring").animate({"height":spring_inval+"px"},animationSpeed);
			
			//$("#spring").animate({"height":spring_inval+"px"},animationSpeed);
			$("#zoom_Arrow").animate({"top":zoomArrow_animationFinl+"px"},animationSpeed);
			$("#zoom_Arrow").animate({"top":zoomArrow_animationInil+"px"},animationSpeed);
				moveTop-=0.5;
				moveBottom+=0.8;
				zoomArrow_animationFinl-=2;
				zoomArrow_animationInil+=2;
				animationFinal=(spring_inval)*(incrmnt-= incrementChange);//Spring motion decreasing  
				animationSpeed=animationSpeedIncrmnt+=25;//Animation speed decrease
				//zoomArrow_animationFinl=zoomArrowPosition-=5;//Zoom arrow animation 
				
		if(incrmnt<=1){
				clearInterval(firstInterval);//clearing the set interval function 
				
				if(zoomAdjstmnt){//zoom scale position when it comes zero.
				if(ZoomScale_Inval>=-94 && moonScale==false ){
				$("#zoom_Arrow").animate({"top":"4px"},animationSpeed);
				}
			else{//zoom scale position when it comes centre position. 
				var difference_one=parseInt("25");
				var difference_two=parseInt(ZoomScale_Inval)
				$("#zoom_Arrow").animate({"top":"35px"},animationSpeed);
				}
				
		}
		else if(!zoomAdjstmnt){//zoom scale position when it comes bottom position.
				$("#zoom_Arrow").animate({"top":"12px"},animationSpeed);
			}
		
		}
		},180);
		
			if(zoomAdjstmnt){//zoom scale position when it comes zero.
				if(ZoomScale_Inval>=-94 && moonScale==false ){
					$("#zoom_Scale").css({"top":"-95px"});
				}
			else{//zoom scale position when it comes centre position. 
				var difference_one=parseInt("25");
				var difference_two=parseInt(ZoomScale_Inval)
				$("#zoom_Scale").css({"top":difference_two+difference_one+"px"});
				}
			}
			else if(!zoomAdjstmnt){//zoom scale position when it comes bottom position.
				$("#zoom_Scale").css({"top":"-38px"});
			}
			else if(moonScale){
				$("#zoom_Scale").css({"top":"-56px"});
			}
		}
	 
	  
	//Equation
	function Calculation(){
	clearInterval(firstInterval);//clearing the function 
	
	//find the value of "Load(N)= Mass producing extension,m (g)* acceleration due to gravity * 0.001"
	load_N=massProducing_extension*current_acceleration_value*0.001;
	//====Find Extension in meter.
	//Extension e (m)=Lolad (N)/Spring constant K (N/m)
	extensionIn_m=load_N/currentSpringConstant_val//Extension in meter.
	//==========Convert the extension into centimetre 
	//Extension e (m)*100
	extensionIn_cm=extensionIn_m*100;
	
	//calculation for zoom scale movement
	  var extensionIn_cmTwoDgit=extensionIn_cm.toPrecision(3);
	  var convert_extensionIn_cm=extensionIn_cmTwoDgit*40;
	  var change_extensionIn_cm=-40-convert_extensionIn_cm;
	  
	  //calculation for normal scale movement.
	  var secondConvert_extensionIn_cm=extensionIn_cmTwoDgit*4;
	  var changeExtensionIn_NormalScale=secondConvert_extensionIn_cm+35;
	  //calling the spring movement function after the calculation.
	basicSpringAction(changeExtensionIn_NormalScale.toPrecision(),100+extensionIn_cm,change_extensionIn_cm.toPrecision(3));
	}
	//==============================================
	//Changing the mass of the block.
	function changeMass(val){
	var massSlider_value=$('#massslider').val();
	var massvalue=massSlider_value*50;
	massProducing_extension=massvalue-50;
	//Changing the weight of the block. 
	$("#weightBarDiv").css({"height":10*massSlider_value+"px"});//changing the height of the weight. 
	$("#massVal").html(massvalue+" g");
	//setting the flag for zoom scale position.
	if(massvalue>50){//only massSlider_value is greater then 50 the calculation function will call when the drop-down change. .
	rangeFlag=true
	zoomAdjstmnt=true;//flag for zoom scale positioning 
	}
	else if(massvalue==50){
	rangeFlag=false
	zoomAdjstmnt=false;
	}
	Calculation();//calling the calculation function.
	}
