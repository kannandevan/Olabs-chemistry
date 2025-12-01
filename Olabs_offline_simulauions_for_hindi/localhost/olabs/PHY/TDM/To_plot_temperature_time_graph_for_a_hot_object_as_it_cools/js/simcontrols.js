var Droped = false,animCount=0;
var helpcount=0; 
var flamePath = "../PHY/TDM/To_plot_temperature_time_graph_for_a_hot_object_as_it_cools/images/FlameAnimation/" ;
var inferenceMsg=[],helpMsg=[];
var dropValue=0;
var startCount=0;
var temperature=20;
var flameAnimationArr=[]
var termomov;
var tempVal =[];
let final,finalP;
var canvasHtml;
var x = [];
var sliderCount=0;
var sliderStatus=[0,0,0,0,0]
var linechart,globalstat = 0;

// Room temperature 20
var graph20=[72,68,65,63,60,57,55,53,51,49,47,46,44,42,41,40,39,37,36,35,34,33,33,32,31,30,30,29,28,28,27,27,26,26,26,25,25,25,24,24,24,23,23,23,23,23,22,22,22,22,22,22,22,21,21,21];
var graphP20=[0,8,8,0,4,9,6,4,4,5,7,0,4,9,5,2,0,8,7,7,7,8,0,2,4,7,1,5,9,4,8,4,9,4,1,7,4,0,7,4,2,9,7,5,2,0,9,7,5,3,2,1,0,9,7,6];

//Room temperature 22
var graph22 =[72,68,66,63,60,58,56,54,52,50,48,47,45,44,42,41,40,39,38,37,36,35,34,33,33,32,31,31,30,30,29,29,28,28,27,27,27,26,26,26,26,25,25,25,25,24,24,24,24,24,24,24,23,23,23,23,23,23,23,23,23,23,23,22,22,22];
var graphP22 =[0,9,1,4,9,5,2,2,2,3,6,7,5,4,8,4,2,1,1,1,2,1,5,7,0,3,7,0,6,0,5,1,6,2,9,5,2,8,6,3,0,8,5,3,1,9,7,6,4,3,1,0,9,8,7,6,5,4,3,2,1,1,0,9,9,8];

//Room temperature 24
var graph24 =[72,69,66,63,61,59,56,54,53,51,49,48,46,45,43,42,41,40,39,38,37,36,36,35,34,34,33,32,32,31,31,30,30,30,29,29,28,28,28,28,27,27,27,27,27,26,26,26,26,26,26,25,25,25,25,25,25,25,25,25,25,25,25,24,24,24,24,24,24,24]
var graphP24= [0,1,3,7,3,0,9,9,0,2,5,0,5,1,9,6,5,2,4,5,6,8,0,3,6,0,3,7,2,7,2,8,4,0,6,0,8,6,4,1,9,6,4,2,0,8,6,5,3,2,1,9,8,7,6,5,4,3,2,2,1,0,0,9,8,8,7,7,7,6] 

//Room temperature 26
var graph26=[72,69,66,63,61,59,57,55,53,52,50,49,47,46,45,43,42,41,40,39,39,38,37,36,36,35,34,34,33,33,32,32,32,31,31,31,30,30,30,29,29,29,29,29,28,28,28,28,28,28,28,27,27,27,27,27,27,27,27,27,27,27,26,26,26,26,26,26];
var graphP26=[0,2,4,5,5,6,5,6,8,1,5,0,6,3,0,9,8,7,8,9,0,2,5,8,1,5,9,4,9,4,9,5,1,7,4,1,8,5,2,9,6,5,3,1,9,7,5,4,2,1,0,8,7,6,5,4,3,3,2,1,0,0,9,9,8,8,7,7];

//Room temperature 28
var graph28=[72,69,66,64,62,60,58,56,54,52,51,50,48,47,46,45,44,43,42,41,40,39,39,38,37,37,36,36,35,35,34,34,33,33,33,32,32,32,32,31,31,31,31,30,30,30,30,30,30,30,29,29,29,29,29,29,29,29,29,29,29,28,28,28,28,28,28,28,28,28,28,28];
var graphP28=[0,3,8,4,2,1,1,3,6,9,4,0,6,4,2,1,0,1,1,3,5,7,0,3,7,1,5,0,5,1,6,2,8,5,2,8,5,3,0,8,5,3,1,9,7,6,4,3,1,0,9,8,7,6,5,4,3,2,1,1,0,9,9,8,8,7,7,6,6,6,5,5];

var xValues =[];
var yValues =[];

	gt = new Gettext({ domain: "messages" });


// $(window).on('load',function(function(){
$(window).on('load', function() {
	// flame animation
	for(i = 0;i<5;i++){
		j=i+1;
		flameAnimationArr[i] = flamePath+"Flame"+j+".png" ;
	}
	ImageInitLoad(flameAnimationArr,"burnerDiv","flame","flameCls");
});
$(document).ready(function(){
	gt = new Gettext({ domain: "messages" });
	document.getElementById("expName").innerHTML = gt.gettext( "To Plot Temperature–Time Graph for a Hot Object as it Cools");
	$("#plotGraph").attr("value",gt.gettext("Plot graph"))


	  $("[data-translate]").html(function (index, originalHtml) {
    return gt.gettext(originalHtml);
  });

	canvasHtml = $("#mainDiv").html();
	helpMsg = ["Select the temperature from the slider","Drag the Calorimeter onto<br> the top of the Tripod stand","Drag the Beaker containing water<br> onto the top of the Calorimeter","Drag the Calorimeter lid onto<br> the top of the Calorimeter","Drag the Thermometer onto the<br> top of the Calorimeter","Click on the Burner knob and<br>note the value in the below worksheet","Observe the time and thermometer reading","Click on the Next button","Click on the Plot graph button","Click on the Next button","Perform the worksheet using these values.<br>Click on the Reset button to <br>do the experiment again "]
	tempArr = graph20;
	common();
	helpMsg = helpMsg.map((msg) => gt.gettext(msg));
});

function common(){
	ImageInitLoad(flameAnimationArr,"burnerDiv","flame","flameCls");
	// xValues =[];
	// yValues =[];
	
	$(".sim-controls").hide();
	$(".sim-controls").css({width:"22%"})
	$(".sim-div").css({"width":"100%"});
///////////////////////////////////////////////////////////////////////////////////////////
	
	
	setInterval(function()
	{
		var topOfBlueLine=$("#animateDiv").height();
		var heightOfinnerDivLine=$("#innerDivLine").height();
		$("#innerDivLine").css({top:(50-(((heightOfinnerDivLine-topOfBlueLine)/heightOfinnerDivLine*100)*8))+"%"});
	})

	$("#sliderRoomTemp").click(function(){
		if(helpcount==0)
			helpcount=1;
		removeTrip()
	})
	$("#sliderRoomTemp").change(function(){
		if(helpcount<2)
		{
			helpcount=1;
		}
		removeTrip()
		temperature = $("#sliderRoomTemp").val()
		$("#tempVal").html(temperature)
		$("#roomTemp").html(temperature)
		if(temperature == 20){

			tempArr = graph20;
		}
		else if(temperature == 22){
			tempArr = graph22;
		}
		else if(temperature == 24){
			tempArr = graph24;
		}
		else if(temperature == 26){
			tempArr = graph26;
		}
		else if(temperature == 28){
			tempArr = graph28;
		}
		
		
	})
	

	dragdrop("#calorimeterDiv","#dropAreaWiregauge")
	$("#burnerOff").click(function(){
		removeTrip();
		helpcount=6;
		$("#burnerOff").css({"pointer-events":'none',"cursor":"default"});
		$("#sliderRoomTemp").prop('disabled', true);
		$(".outerDiv,#temperature").show();
		setTimeout(function(){
			ImageAnimationOneTime("flameCls","flame",flameAnimationArr,10,60);//newspaper animation page2
			for(var i =0;i<=100;i++)
			{
				var yellowImage = $('<div></div>').attr({class:"divcommon",id:"divdiv"+i });
				$("#innerDivLine").append(yellowImage);
			}
			var x=98.9;
			for(var i =0;i<=100;i++)
			{
				$("#divdiv"+i).css({top:x+"%"});
				x=x-.984;
			}
			final="graph"+temperature;
			finalP = "graphP"+temperature;
			j=this[final].length-1;
			var top = setInterval(function(){
				// var te = "Temperature:<span id='tempVal'>"+this[final][j]+"."+this[finalP][j]+"</span>&#8451;";

				var dynamicValue = this[final][j] + "." + this[finalP][j]; // e.g., "20.5"
var translatedLabel = gt.gettext("Temperature:"); // Translate static label
var te = translatedLabel + "<span id='tempVal'>" + dynamicValue + "</span>&#8451;";

				$("#temperature").html(" ");
				$("#temperature").html(te);
				j--;
				if(j<=0){
					clearInterval(top)
				}
		},3000/this[final].length)
			for(var i=0;i<this[final].length;i++)
			{
				$('#animateDiv').animate({height:calculateHeight(this[final][i],this[finalP][i])+'%'},3000,function(){
						$('#stirrer').animate({top:"-45%"});
						$('#stirrer').animate({top:"-15%"});
				});
			}
			var t1 = 0;
			 termomov =	setInterval(function(){
				if(t1<this[final].length){
					// var te = "Temperature:<span id='tempVal'>"+this[final][t1]+"."+this[finalP][t1]+"</span>&#8451;";
					var dynamicValue = this[final][t1] + "." + this[finalP][t1]; // e.g., "20.5"
var translatedLabel = gt.gettext("Temperature:"); // Translate static label
var te = translatedLabel + "<span id='tempVal'>" + dynamicValue + "</span>&#8451;";
					$("#temperature").html(" ");
					$("#temperature").html(te);
					tempVal.push(this[final][t1]+"."+this[finalP][t1])
					$("#minCount").html(t1);
					t1++;
				}
				else{
					clearInterval(termomov);
					$("#nextButton").show();
					helpcount=7;
				
				}
			},3000) 
		},500)
	})


	////////////////////////////////////////////////////////////////////////Chart code///////////////////////////////////////////////////
	

	// const xValues = [0,5,10,15,20,25,30,35,40,45,50,55];
	// const yValues = [72,57.9,47.7,40.2,34.7,30.7,27.8,25.7,24.2,23,22.2,21.8];

	



	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$("#nextButton").click(function(){
		removeTrip();
		helpcount=8;
		$("#page1Div").hide();
		$("#page2Div").show();
		$(".sim-controls").show(); 
		$(".sim-controls").css({width:"27%"})
		$(".sim-div").css({"width":"73%"});
		setTimeout(function(){

		},2000)
		switch(parseInt(temperature)){
			case 20: sliderStatus[0] =1;
				break;
			case 22:sliderStatus[1] =1;
				break;
			case 24: sliderStatus[2] = 1;
				break;
			case 26: sliderStatus[3] = 1;
				break;
			case 28: sliderStatus[4] = 1;
				break;
		}

var j=1;

		///////////////////////////////////////////////////////////////////////////////////////control table creation//////////////////////////////
	for(i=0;i<tempArr.length;i+=5){
		tableRow = $('<tr></tr>').attr({id:"tableRow"+i,class:"tableRow"});
		$("#controlTable").append(tableRow);
		var slN0 = $('<td>'+j+'</td>');
		$("#tableRow"+i).append(slN0);
		var time = $('<td>'+i+'</td>');
		$("#tableRow"+i).append(time);
		var temperatureTable = $('<td>'+tempVal[i]+'</td>');
		$("#tableRow"+i).append(temperatureTable);
		j++;
	}
		// alert("globalstat"+globalstat)
		if(globalstat==0)
		plotgraph();


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	})	

	$("#plotGraph").click(function(){
		$("#plotGraph").prop("disabled",true);
		// alert("one")
		graphSettings()
	});
	$("#ConnextButton").click(function(){
		removeTrip();

		$(".sim-controls").hide();
		$(".sim-controls").css({width:"22%"})
		$(".sim-div").css({"width":"100%"});
		$("#page2Div").hide();
		$("#page3Div").show();
		$('.tableRow').remove();
		

		
	
		if((sliderStatus[0]==1)&&(sliderStatus[1]==1)&&(sliderStatus[2]==1)&&(sliderStatus[3]==1)&&(sliderStatus[4]==1)){
			$("#nextButton2").hide()
			helpcount=11;
		}
		else{
			helpcount=9;
		}
		
		//////////////////////////////////////////////////////canvas table creation//////////////////////////////////////////////////////////////////
var k=1;
		for(i=0;i<tempArr.length;i+=5){
			tableRow1 = $('<tr></tr>').attr({id:"tableRowCanvas"+i});
			$("#canvasTable").append(tableRow1);
			var slN0 = $('<td>'+k+'</td>');
			$("#tableRowCanvas"+i).append(slN0);
			var time = $('<td>'+i+'</td>');
			$("#tableRowCanvas"+i).append(time);
			var roomtemp = $('<td>'+temperature+'</td>');
			$("#tableRowCanvas"+i).append(roomtemp);
			var temperatureTable = $('<td>'+tempVal[i]+'</td>');
			$("#tableRowCanvas"+i).append(temperatureTable);
			var tempDiff = tempVal[i]-temperature

			var temperatureDiff = $('<td>'+tempDiff.toFixed(1)+'</td>');
			$("#tableRowCanvas"+i).append(temperatureDiff);



			// var temperatureDiff = $('<td>'+tempVal[i]-temperature+'</td>');
			// $("#tableRowCanvas"+i).append(temperatureDiff);
			k++;
			//console.log(tempVal[i]-temperature)
		}

		$("#nextButton1").show();

		// alert("one")
	});
	$("#nextButton1").click(function(){
		removeTrip();
	
		$("#ConDiv").show();
		$("#nextButton2").show();
		helpcount=10;


		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	})

	$("#nextButton2").click(function(){
		helpcount=0;
		removeTrip();
		// window.location.reload();	  
		$('#mainDiv').html('')
		$('#mainDiv').html(canvasHtml)
	//	linechart.reset();
		Droped=false;
		tempArr = [];
		tempVal = []
		$('#plotGraph').prop('disabled',false)


		// reset graph values
			xValues =[];
			yValues =[];
			// recall graph function
		plotgraph()
		common();
		globalstat++;
		$( "#sliderRoomTemp" ).val(temperature);
		$("#roomTemp").html(temperature)
		
	});
}
function graphSettings()
	{
		if(globalstat == globalstat){
			// alert("two")
			removeTrip();
			helpcount=12
			$("#plotGraph").prop("disabled",true);
			$("#ConnextButton").show();
			xValues =[];
			yValues =[];
			for(i=0;i<tempArr.length;i+=5){
				xValues.push(i);
				yValues.push(tempVal[i])
			}
			linechart.reset();
			plotgraph();
		}
		return;
	}

function dragdrop(dragElement,dropArea){ //Drag function
	$(dragElement).draggable({containment:".sim-div",revertDuration:300,
		revert:function(){
					if(!Droped){
						if(dragElement=="#calorimeterDiv"){
							$("#calorimeterDiv").css({'left':"45%","top":"62%"})
							return false;
						}
						if(dragElement=="#thermometer"){
							$("#thermometer").css({'left':"71%","top":"83%"})
							return false;
						}
						if(dragElement=="#beakerDiv"){
							$("#beakerDiv").css({'left':"55%","top":"61%"})
							return false;
						}
						return true;
					}
				},
		drag:function(){
			removeTrip()
			$(dropArea).css({"display":"block"})
		//	$(dragElement).css({'z-index':'2'})
		}	 
	});	
	$(dropArea).droppable({accept:dragElement,     
		drop: function() {	
			Droped = true
			$(dropArea).css({"display":"none"})
			$(dragElement).css({"cursor":'default'});
			if(dragElement=="#calorimeterDiv"){
				helpcount=2;
		
				$(dragElement).css({left:"15.5%",top:"40%"});
				$(dragElement).animate({top:"44%"},function(){
					Droped = false;
					$("#beakerDiv").css({"cursor":'pointer'});
				});
				dragdrop("#beakerDiv","#dropAreaWiregauge")
			}
			else if(dragElement=="#beakerDiv"){
				helpcount=3;
				$(dragElement).css({left:"17%",top:"13%"});
				$(dragElement).fadeOut();
				$("#beakerSlant").fadeIn();	
				setTimeout(function()
				{
					$("#waterPour").animate({height:"30%"},500,function(){
						Droped = false;
						$("#waterPour").css({opacity:0})
						$("#beakerSlant").fadeOut();
						$("#beaker").fadeIn();
						$("#beaker").animate({left:"55%",top:"61%"},function(){
							$("#calorimeterLidDiv").css({"cursor":'pointer'});
						 	dragdrop("#calorimeterLidDiv","#dropAreaWiregauge")	
						})
					})
				},500)
			}
			else if(dragElement=="#calorimeterLidDiv"){
				helpcount=4;
				$(dragElement).css({left:"15.5%",top:"32%"});
				$(dragElement).animate({top:"43%"},function(){
					
					$("#calorimeterBack").css({"display":"none"})
					$("#thermometer").css({"cursor":'pointer'});
				})
				setTimeout(function(){
					Droped = false;
				})
				dragdrop("#thermometer","#dropAreaWiregauge")	
			}
			else if(dragElement=="#thermometer"){
				
				helpcount=5;
				$(dragElement).css({left:"11%",top:"25%",transform:"rotate("+270+"deg)"});
				$(dragElement).animate({top:"40%",width:"14%"},function(){	
				})
				$("#burnerOff").css({"pointer-events":'auto',"cursor":"pointer"});
			}
			$(dragElement).draggable("disable")
		}
	})
}
function plotgraph(){
	$("#Page2InnerDiv").html('')
	$("#Page2InnerDiv").append('<canvas id="myChart"></canvas>');
	linechart = new Chart("myChart", {
	  type: "line",
	  data: {
		labels: xValues,
		datasets: [{
		  fill: false,
		  lineTension: 0,
		  backgroundColor: "rgba(0,0,255,1.0)",
		  borderColor: "rgba(0,0,255,0.1)",
		  data: yValues
		}]
	  },
	  options: {
		legend: {display: false},
		scales: {
		  yAxes: [{ticks: {min: 20, max:80}}],
		}
	  }
	});
}
function calculateHeight(top,point)
{
    if(point=="null")
    {
        var m1=$("#divdiv"+top).position().top;
        var m2=$("#innerDivLine").height();
        return(((m2-m1)/m2)*100.0+0.01);
    }
    else
    {
        var m1=$("#divdiv"+top).position().top;
        var m2=$("#innerDivLine").height();
        var m3=$("#divdiv"+(top+1)).position().top;
        var m4=((m1-m3)/10.0)*parseInt(point)
        m1=m1-m4
        return(((m2-m1)/m2)*100.0+0.01);
    }	
}

function ChangeRoomTemperature(){
	var temperature = $("#sliderRoomTemp").val()
	 $("#roomTemp").html(temperature)

}

// Animation function 
function ImageAnimationOneTime(ANIMATIONImageClassName,ANIMATIONImageIdName,ANIMATIONImageArray,ANIMATIONSpeed,ANIMATIONTimes)
{   var GlobalVariable=0;
        var ANIMATIONTimesReached=0;
        var CLEARImageAnimation=setInterval(function() {
            $('#'+ANIMATIONImageIdName+(GlobalVariable-1)).css({'display':'none'});
            $('#'+ANIMATIONImageIdName+GlobalVariable).css({'display':'block'});
            GlobalVariable++;
            if(GlobalVariable==ANIMATIONImageArray.length)
            {
                $('.'+ANIMATIONImageClassName).css({'display':'none'});
                $('#'+ANIMATIONImageIdName+(0)).css({'display':'block'});
                if(ANIMATIONTimesReached>=ANIMATIONTimes)
                {
                    $('.'+ANIMATIONImageClassName).css({'display':'none'});
					if(animCount ==1)
						userDefinedFunctionForAnimate();
					else if(animCount==2)
						userDefinedFunction2ForAnimate();
                    clearInterval(CLEARImageAnimation);	
                }
                else
                {
                    GlobalVariable=0;
                    ANIMATIONTimesReached++;
                }
            }
        },ANIMATIONSpeed);
}

function userDefinedFunctionForAnimate()
{
	$(".naphthalenBallMove,#beakerWater").show();
	$("#bottleCapBaking").css({"pointer-events":"auto"})
	
}

function userDefinedFunction2ForAnimate()
{
	$("#beakerWaterBeetroot").css({'display':"block"});
	
}

function ImageInitLoad(ANIMATIONImageArray,ANIMATIONDivName,ANIMATIONImageIdName,ANIMATIONImageClassName)
{
    for(var ANIMATIONForloop=0;ANIMATIONForloop<ANIMATIONImageArray.length;ANIMATIONForloop++)
    {
        var $tempx2=$("<img src='"+ANIMATIONImageArray[ANIMATIONForloop]+"'/>").attr({id:ANIMATIONImageIdName+ANIMATIONForloop,class:ANIMATIONImageClassName,display:"none"});
         $("#"+ANIMATIONDivName).append($tempx2);
    }
}