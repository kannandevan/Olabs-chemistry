var accelerationDueT_Gravity=[9.8,1.6,8.69,10.44,24.79,3.711,8.83,3.7,11.15]//Acceleration due to gravity (g) m/s (Earth,Moon,Uranus,Saturn,Jupiter,Mars,Venus,Mercury,Neptune) respectively.
var ballDiameterValueTerm=0.1;//Ball diameter range.
var jarDiameterValueTerm=0.5;//Jar diameter range.
var jarDiameterValueTermScnd=0.9;
var time;
var terminalVelocity_SteelBall,innerDmtrOfJar_inMeter,innerRadiusJar_inMeter,equationOne,observedVelocity;
var densityOfGlassBall=2600;//Density of glass ball.
var densityGlycerine=1260;
var densityOfViscousLiquid=1260;//Density of glycerine.
var densityCastorOil=961;//Density of castor oil.
var coeficntOfViscosity_Glycerine=0.95;
var coeficntOfViscosity=0.95;//Viscosity of glycerine.
var aclratnDueTGravity=accelerationDueT_Gravity[0];//Acceleration Due to Gravity
var diameterOfBall_Meter=0.0050;//Diameter of ball in meter. 
var coeficntOfViscosity_CastorOil=0.65;//Co-efficient of viscosity of castor Oil.
var innerDmtrOfJar=3;// Inner diameter of jar.
var dstncTtrvldByBall_Centimeter=60;
var radiusOfBall=0.001;//radius of ball. 
var diameterOfBall_Millimetres=5.0; // Diameter of ball in millimetre.
var collisionDistance=165;//Collision distance initial.
var positionATop=0;//position of the arrow A initial.
var positionBTop=120;//position of the arrow B initial.
var timeT;//Time T .
var clockTimer;//Clock timer.
var Hlp_msg;//Help messages. 
var setIntervalTimer=24;
var incrmntTopZoomScale=2604;
var incrmntTopZoomBall=[-87,-96,-105];
var incrmntTopZoomTube=53;
var animationspeed=[20,30];//Animation speed for both glycerine and castor oil. 
var animationChecking=[120,160,270,2459]; //
var result_Milliscnd=0;
var comnJarvalue=1;
var gt=$;


	$(document).ready(function(){
		//======String passing into the corresponding divs.
		$("#selectTheEnvrnmtText").html(gt.gettext("Select the environment:"));
		$("#slctThevscuslqdText").html(gt.gettext("Select viscous liquid:"));
		$("#selectTheBallText").html(gt.gettext("Select ball diameter:"));
		$("#ballDiameterValue_Min").html(5);
		$("#ballDiameterValue").html("5.0");
		$("#ballDiameterValue_Max,#jarDiameterValue_Max").html(10);
		$("#ballDiameterUnit").html(gt.gettext("mm"));
		$("#slctTheJarText").html(gt.gettext("Select jar diameter:"));
		$("#jarDiameterValue_Min").html(3);
		$("#jarDiameterValue").html("3.0");
		$("#jarDiameterUnit").html(gt.gettext("cm"));
		$("#resultText").html(gt.gettext("Show result"));
		$("#coefficientText").html(gt.gettext("Coefficient of viscosity of"));
		$("#resultTestGroup").html(", &eta; =");//eta symbol. 
		$("#liquidName").html(gt.gettext("Glycerine"));
		$("#resultView").html(0.95);
		$("#UnitText").html(gt.gettext("Nm<sup>-2</sup> s"));
		$("#resetBtn").val(gt.gettext("Reset"));
		$("#start").html(gt.gettext("START"));
		$("#stop").html(gt.gettext("STOP"));
		$("#currentDensityTxt").html(gt.gettext("Density of the liquid ="));
		$("#currentDensityResult").html(densityOfViscousLiquid);
		$("#currentDensityUnit").html("(σ) Kg/m <sup>3<sup>");
		$("#currentBallDensityTxt").html(gt.gettext("Density of the glass ball = "));
		$("#currentBallDensityResult").html(densityOfGlassBall);
		$("#currentBallDensityUnit").html(gt.gettext("(ρ) Kg/m<sup>3</sup>"));
		$("#currentDistanceTxt").html(gt.gettext("Distance between point A and B = "));
		$("#currentDistanceResult").html(dstncTtrvldByBall_Centimeter);
		$("#currentDistanceUnit").html(gt.gettext("cm"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
		document.getElementById("expName").innerHTML=gt.gettext("Viscosity of a Liquid");
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		Hlp_msg=[gt.gettext("Drag the ball in the <br/> top of the jar to drop it."),gt.gettext("Drag the points to adjust the distance.")];
		var environmentArray=[gt.gettext("Earth (g=9.8 m/s&#178;)"),gt.gettext("Moon (g=1.6 m/s&#178;)"),gt.gettext("Uranus (g=8.69 m/s&#178;)"),gt.gettext("Saturn (g=10.44 m/s&#178;)"),gt.gettext("Jupiter (g=24.79 m/s&#178;)"),gt.gettext("Mars (g=3.711 m/s&#178;)"),gt.gettext("Venus (g=8.83 m/s&#178;)"),gt.gettext("Mercury (g=3.7 m/s&#178;)"),gt.gettext("Neptune (g=11.15 m/s&#178;)")] ;
		var viscousLiquidArray=[gt.gettext("Glycerine"),gt.gettext("Castor Oil")];
		$(".popup-content").html(gt.gettext("Drag and drop the<br/> ball into the jar."));
		time = document.getElementById('timer'); 

			//function for popup near the ball

			$("#normalBall").mouseover(function(){

				$("#ballPopUp").show();
			});

			$("#normalBall").mouseout(function(){

				$("#ballPopUp").hide();
			});
		//===Result toggling 
		$("#resultChechkBox").click(function(){
			$("#ResultDiv").toggle(this.checked);
		});
	
		//Function for environment drop-down.
		function environment_dropdownFN(getid,array_set){
				$.each(array_set, function(val, text) {
				getid.append(
				$('<option></option>').val(val).html(text)
					);
				});
			}
			
		environment_dropdownFN($("#environment_DropBox"),environmentArray);//passing the environment text into the drop-down menu. 
		environment_dropdownFN($("#liquid_DropBox"),viscousLiquidArray);//passing the  viscous liquid text into the second drop-down menu.
	
		//changing density of viscous liquid: Drop-down menu
		$("#liquid_DropBox").change(function(){
			var liquid_DropBoxValue=$("#liquid_DropBox").find(':selected').val();
			if(liquid_DropBoxValue==0){
			densityOfViscousLiquid=densityGlycerine;//Density of viscous liquid,σ(Kg/m 3   -  Glycerine
			coeficntOfViscosity=coeficntOfViscosity_Glycerine//Co-efficient of viscosity(η) of liquid  ( Nm-2 S)-Glycerine.
			$("#glassTubewater,#zoomWater").css({"background-color":"#FFFFFF"});
			$("#currentDensityResult").html(densityOfViscousLiquid);
			}
			else{
			densityOfViscousLiquid=densityCastorOil;//Density of viscous liquid,σ(Kg/m 3   -  Castor Oil
			coeficntOfViscosity=coeficntOfViscosity_CastorOil//Co-efficient of viscosity(η) of liquid  ( Nm-2 S)-CastorOil
			$("#glassTubewater,#zoomWater").css({"background-color":"#C7A32B"});
			$("#currentDensityResult").html(densityOfViscousLiquid);
			}
			$("#resultView").html(coeficntOfViscosity);//Result.
			calculation();//Checking the value.
	
		});
	
		//Changing of environment : Drop-down menu.
		$("#environment_DropBox").change(function(){
			var environment_DropBoxValue=$("#environment_DropBox").find(':selected').val();
			aclratnDueTGravity=accelerationDueT_Gravity[environment_DropBoxValue];//Changing the value of acceleration due to Gravity according to the drop-down menu.
			calculation(); //Checking the value.
			animationspeed[environment_DropBoxValue];//Setting the animation value according to the viscous liquid.
		});
	
		//Ball dragging function.
		$("#normalBall").draggable({ revert:true,containment: "#mainCanvas",revertDuration:0,
			drag: function(){
				$("#ballPopUp").hide();
				calculation();
			}});
		//Arrow A dragging function.
		$("#arrowSmall_A,#arrowSmall_B").draggable({ revert:false,containment: "#pointDragArea",
			drag: function(){
				var positionArrowA = $( "#arrowSmall_A" );//getting the position of the arrow A .
				var positionArrowB = $( "#arrowSmall_B" );//getting the position of the arrow B .
				var positionA = positionArrowA.position();// Getting the position of arrow A.
				var positionB = positionArrowB.position();// Getting the position of arrow B.
				positionATop=positionA.top //Getting the top position of arrow A.
				positionBTop=positionB.top //Getting the top position of arrow B.
				var distanceA=(positionA.top*0.5)+30;//Calculating the distance between  arrow A and B.
				var distanceB=(positionBTop*0.5)+30;
				var difference=distanceB-distanceA;
				collisionDistance=positionATop+165;
				dstncTtrvldByBall_Centimeter=difference;//Distance travelled by the ball in centimetre.
				$("#currentDistanceResult").html(dstncTtrvldByBall_Centimeter);
				$("#zoomArrow_A").css({"top":58+positionA.top*20+"px"});//setting the position of zoom arrow A according to the Normal arrow A.
					$("#zoomArrow_B").css({"top":animationChecking[3]-Math.abs(120-positionB.top)*20+"px"});//setting the position of zoom arrow B according to the Normal arrow B.
					
					if(positionATop>=positionBTop-1){//If "arrow A" top position is greater than or equal to  "arrow B" then it reverts it's initial  position.
					$("#arrowSmall_A,#arrowSmall_B").draggable({revert:true,
						revert:function(){
					$("#arrowSmall_A").css({"top":"0px"});//Arrow A initial position.
					$("#arrowSmall_B").css({"top":"120px"});//Arrow B initial position.
					$("#zoomArrow_A").css({"top":"40px"});//Zoom Arrow A initial position.
					$("#zoomArrow_B").css({"top":"2439px"});//Zoom Arrow B initial position.
					
					positionATop=0
					positionBTop=120
					collisionDistance=165;
					dstncTtrvldByBall_Centimeter=60;
					$("#currentDistanceResult").html(dstncTtrvldByBall_Centimeter);
						}
					});
					$("#zoomScaleImage").css({"top":"-1138px"});
					}
					else{
					$("#arrowSmall_A,#arrowSmall_B").draggable({revert:false});// else the revert function set false.
					}
			}
		});
		//function for seting final time into the stopwatch.
		function addTimeTostopwtch(timeValue){
		var second= Math.floor(timeValue);
		var millisecondInil=(timeValue - Math.floor(timeValue)).toFixed(3);
		var millisecond=millisecondInil*1000;
		if(second>=60){
			var minuteIni=second/60;
			var secondFinal=(minuteIni - Math.floor(minuteIni)).toFixed(2)*100;
		 	var secondFinal_PointMinut=(secondFinal/100)*60;
		 	var result_Second=Math.floor(secondFinal_PointMinut);
		 	var secondFinal_milliscnd=(secondFinal_PointMinut - Math.floor(secondFinal_PointMinut)).toFixed(2);
		 	var catchMints=Math.floor(minuteIni);
		 	var second_Final=result_Second;
				result_Milliscnd=millisecond+secondFinal_milliscnd*1000;
					if(result_Milliscnd>=1000){
						result_Milliscnd=result_Milliscnd-1000;
						second_Final++
					}
				}
		 else{
		 	catchMints=0
		 	second_Final=second;
		 	result_Milliscnd=millisecond;
		 	}
			$("#timer").html(pad(catchMints,2)+":"+pad(Math.floor(second_Final),2)+":"+pad(result_Milliscnd,3));
	}

		//Ball dropping function.		
		$("#ballDropArea").droppable({ //Drop Function
			drop: function( event, ui ) {
			calculation();
			$("#arrowSmall_A,#arrowSmall_B").draggable({disabled:true});
			$('#ballDiameterSlider,#JarDiameterSlider,#environment_DropBox,#liquid_DropBox').attr("disabled", "disabled"); 
			$("#normalBall").draggable({revert:false});//Preventing  dragging functionality of ball after drop. 
			$("#normalBall").draggable({disabled:true});		
			var widthOftheDropDIV =$("#ballDropArea").width();
		  	var half_DivWidh=widthOftheDropDIV/2;
		    var leftMove= $("#ballDropArea").position().left 
			var centerPosition=leftMove+half_DivWidh/2;	
			$("#normalBall").css({"left":centerPosition-5+"px"});//positioning the ball after drop.
			//Ball and zoom scale animation- using setInterval.
			var incrmntZoomscale=incrmntTopZoomScale;
			var inmnt=setIntervalTimer;
			if(comnJarvalue>=25 && comnJarvalue<=53 ){
				var incrmntZoomBall=incrmntTopZoomBall[1];
			}
			else if(comnJarvalue>=53){
				var incrmntZoomBall=incrmntTopZoomBall[2];
			}
			else{
			var incrmntZoomBall=incrmntTopZoomBall[0];
			}
			var incrmntTube=incrmntTopZoomTube;
			intervelOne=setInterval(function () {
				$("#normalBall").css({"top":inmnt+"px"});
				inmnt++
				incrmntZoomscale-=20;
				incrmntZoomBall++;
				incrmntTube--
				$("#ZoomScaleMainDiv").css({"top":incrmntZoomscale+"px"});
				$("#zoomBall").css({"top":incrmntZoomBall+"px"});
				$("#zoomTube").css({"top":incrmntTube+"px"})
				if(inmnt==animationChecking[0]){
					$("#zoomCircle").fadeIn( "slow" );
				}
				if(inmnt==animationChecking[1]+positionATop){
					//First section-Ball Collision. point "A".
					stop();	//stop the stopwatch if it start for the top. 
					start();
					}
				if(inmnt==animationChecking[1]+positionBTop){
					stop();
					addTimeTostopwtch(timeT);//Second section-Ball Collision. point "B".
				}
				if(inmnt>=animationChecking[2]){
					clearInterval(intervelOne);
					stop();	
					addTimeTostopwtch(timeT);// Clear Interval.
					
				}
				},animationspeed[0]);
			
			}
		});

});



	//Function for changing the ball diameter slider.
	function changeballDiameterSlider(val){
		var ballDiameterValue = $('#ballDiameterSlider').val();
		diameterOfBall_Millimetres=(5+ballDiameterValue*ballDiameterValueTerm).toPrecision(2);
		$("#ballDiameterValue").html((5+ballDiameterValue*ballDiameterValueTerm).toPrecision(2));//Passing the value of ball diameter.
		$("#normalBall").css({"width":24+ballDiameterValue*0.15+"px","top":156-ballDiameterValue*ballDiameterValueTerm+"px"})//ball diameter changing. "35" - current ball width size, "146" - ball current top position.
		calculation();
$("#zoomBall").css({"width":36+ballDiameterValue*0.30+"px"})
comnJarvalue=ballDiameterValue;
		}
	//Function for changing the jar diameter slider.
	function changeJarDiameterSlider(val){
		var jarDiameterValue = $('#JarDiameterSlider').val();
		innerDmtrOfJar=3+jarDiameterValue*jarDiameterValueTerm;
		$("#jarDiameterValue").html(innerDmtrOfJar.toPrecision(2));//Passing the diameter value of jar  into the div.
		$("#glassTube").css({"width":53+jarDiameterValue*jarDiameterValueTermScnd+"px"});//Glass jar diameter changing.
		$("#glassTubewater").css({"width":44+jarDiameterValue*jarDiameterValueTermScnd+"px"});//Changing the width of the water inside the jar.
		$("#normalScaleContainer").css({"left":-8+jarDiameterValue*jarDiameterValueTermScnd+"px"})//Changing the position of scale and dragging points according to the diameter of glass jar.
		$("#ballDropArea").css({"width":46+jarDiameterValue*jarDiameterValueTermScnd+"px"})//Changing the position of drop area according to the jar diameter. 
		calculation();
		$("#zoomSet").css({"left":-8+jarDiameterValue*0.8+"px"});

	}
	
	var clsStopwatch = function() {//StopWatch
        var startAt= 0;    
        var lapTime= 0;    
        var now = function() {
        return (new Date()).getTime(); 
            	   						}; 
		this.start = function(){ 
		startAt = startAt ? startAt : now();
		};
		this.reset = function(){ 
		lapTime = startAt = 0;
		}; 
		this.stop = function(){   // Stop 
		lapTime    = startAt ? lapTime + now() - startAt : lapTime;  
		startAt    = 0; 
		};
		this.time = function(){   
		return lapTime + (startAt ? now() - startAt : 0); 
		};
    };
					
		var obj = new clsStopwatch(); 
		function pad(num, size) {
        var s = "0000" + num;
        return s.substr(s.length - size);
	}
	//StopWatch time formate.
	function formatTime(time) {
        var m = s = ms = 0;
        var newTime = '';
        m = Math.floor( time / (60 * 1000) );
        time = time % (60 * 1000);
        s = Math.floor( time / 1000 );
        ms = time % 1000;
        newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
        return newTime;
	}

	function update() {
        time.innerHTML = formatTime(obj.time());
	}
	//Start the stopwatch.
	function start() {
		obj.reset();
        clockTimer = setInterval("update()", -9);
        obj.start();
		$('#start').hide();
	    $('#stop').show();
		//StopWatch light - Green.
		$("#stopwatchGreenLight").css({"opacity":"1"});
		$("#stopwatchRedLight").css({"opacity":"0.5"});
	}
	//Function for stopping the stopwatch.
	function stop() {
        obj.stop();
        clearInterval(clockTimer);
		$('#stop').hide();
	    $('#start').show();
		//StopWatch light - Red.
		$("#stopwatchGreenLight").css({"opacity":"0.5"});
		$("#stopwatchRedLight").css({"opacity":"1"});
		
	}

	function calculation(){
		//Diameter of the ball Millimetres to Meters (mm to m).
		diameterOfBall_Meter=(diameterOfBall_Millimetres/1000).toPrecision(2);
		//Radius of the ball,a (m)
		radiusOfBall=diameterOfBall_Meter/2;
		//Density of glass ball (ρ) K g/m3
		densityOfGlassBall
		//Density of viscous liquid,σ(Kg/m 3 )
		densityOfViscousLiquid;
		//Acceleration due to gravity (g) m/s.
		aclratnDueTGravity;
		//co-efficient of viscossity(η) of liquid  ( Nm-2 S).
		coeficntOfViscosity
		//Terminal velocity of steel ball,v= 2r2(ρ-σ)g/9η (m/s).==> (v)
		terminalVelocity_SteelBall=(2*(radiusOfBall*radiusOfBall)*(densityOfGlassBall-densityOfViscousLiquid)*aclratnDueTGravity/(9*coeficntOfViscosity)).toPrecision(7);
		//Inner diameter of the jar in cm
		innerDmtrOfJar
		//Inner diameter of the jar(m)
		innerDmtrOfJar_inMeter=innerDmtrOfJar/100;
		//Inner radius of the jar in m
		innerRadiusJar_inMeter=innerDmtrOfJar_inMeter/2;
		//Observed velocity,v1=v/1+(2.4a/R).
		//1+2.4*a/R - a= radius of the ball,a (m) and R=Inner radius of the jar in m - equationOne
		equationOne=(1+(2.4*radiusOfBall)/innerRadiusJar_inMeter);
		observedVelocity= terminalVelocity_SteelBall/equationOne //Observed velocity,v1=v/1+(2.4a/R).
		//Distance travelled by the ball ( cm )
		dstncTtrvldByBall_Centimeter  
		//distance travelled by the ball in m 
		dstncTtrvldByBall_meter=dstncTtrvldByBall_Centimeter/100;
		//time t  (s) =Distance travelled by the ball in m / Observed velocity,v1=v/1+(2.4a/R).
		timeT=dstncTtrvldByBall_meter/observedVelocity;
	}

	
	