// JavaScript Document
var path,frame=0,clrIntvl,clrUp,clrDown,clrTempUp,clrTempDown,clrDrop,clrSteam;
var clrBul,clrSltn,stmFrame=0;
var temperature=27,boilingPt=100,tem=27;
var choice,sample;
var clrOpt,opt=0;
var testCombo;
var impurities;
var pressureValues =['1','2','3','5','10','15'];
var bpImpValue=[100,106,102,108];
var bpPrsrValue=[100,119,131,147,171,186];
var gt,flag=true;
var HelpMsg,headingTxt;


$(document).ready(function(){
	
	HelpMsg=[gt.gettext("Drag the spatula towards the test tube<br>to drop the pumice stones into it."),gt.gettext("Drag the cork over the test tube to close it."),gt.gettext("Drag the thermometer towards the test tube<br>to place it in it."),gt.gettext("Drag the delivery tube towards the test tube<br>to place it in it."),gt.gettext("Click on the knob of the burner<br>to turn it ON or OFF.")];
	testCombo=[gt.gettext('In presence of impurities '),gt.gettext('At different pressures')];
	impurities=[gt.gettext('Pure water'),gt.gettext('Water + 50g NaCl'),gt.gettext('Water + 200g sugar'),gt.gettext('Water + 90g KCl')];
	headingTxt=[gt.gettext('Select the impure sample:'),gt.gettext('Select the pressure:')];
	
	$("#testCaseTxt").text(gt.gettext('Boiling point of water:'));
	$("#samplesTxt").text(headingTxt[0]);
	$("#zoomTxt").html(gt.gettext('Show zoom'));
	$("#tempTxt").html(gt.gettext('Temperature:&nbsp;'));
	$("#reset").val(gt.gettext('Reset'));
	$("#pStone").html(gt.gettext('Pumice Stones'));
	document.getElementById("expName").innerHTML=gt.gettext("Determination of Boiling Point of Water");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	var src=$("#flame").attr('src');
	path = src.substr(0,src.lastIndexOf("/")+1);
	$("#pumicStoneInTube").css({"visibility":"hidden"});
	$("#zoomArea").css({"visibility":"hidden"});
	
});
window.onload = function init(){
	addintoDropDown( $('#testCase'),testCombo);
	addintoDropDown( $('#samples'),impurities);
	choice=$('#testCase option:selected').val();
	sample=$('#samples option:selected').val();
	$('#cork').draggable( "disable" );
	$('#thermometer').unbind('mousedown');
	$('#deliveryTube').draggable( "disable" );
	$("#burnerOff").unbind('click');
	$("#thermoZoom").attr("disabled", "disabled");
}
function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$("#samples option").each(function() {
    	$(this).remove();
		});
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
}
function changeDropDown(){
	choice=$('#testCase option:selected').val();
	if(choice==1){
		
		addintoDropDown( $('#samples'),pressureValues);
		$("#samplesTxt").text(headingTxt[1]);
		
	}else{
		$("#samplesTxt").text(headingTxt[0]);
		addintoDropDown( $('#samples'),impurities);
	}
}
function selectSample(){
	sample=$('#samples option:selected').val();
	
	if(choice==0){//Presence of Impurities
		boilingPt=bpImpValue[sample];
	}else{//Presence of Pressure
		boilingPt=bpPrsrValue[sample];
	}
}
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 570;
BGCanvas.height = 345;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
bgCtx.drawImage(bgImg,0,0,570,345);
};
bgImg.src=simPath+'images/BG.gif';
var stilImageCanvas = document.getElementById("stand");
stilImageCanvas.width = 569;
stilImageCanvas.height = 345;
var stillCtx = stilImageCanvas.getContext('2d');
var stillImg = new Image;
stillImg.onload = function(){ 
stillCtx.drawImage(stillImg,0,0,569,345);
};
stillImg.src=simPath+'images/stand.png';
function flaming(){//flaming of burner
	frame++;
	$("#flame").attr('src',path+"flame"+frame+".png");
	clrIntvl=setTimeout("flaming()",100);
	if(frame==5){
		frame=1;
	}
}
function temperatureUp(topValue){//Temperature increase and zoon reading
		
	topVal=topValue+5;console.log(topVal);	
	if(temperature==65){$("#reading").css({"top" : 137+"px"})}
	else if(temperature==115){$("#reading").css({"top" : 142+"px"})}
	else if(temperature==160){$("#reading").css({"top" : 147+"px"})}
	$("#thermoBig").css({
			"top" : topVal+"px"
	});
	temperature++;
	$("#temperature").html(temperature+"&nbsp;<sup>o</sup>C");
	if(temperature>=boilingPt){
		clearInterval(clrUp);
	}else{
		
		clrUp=setTimeout("temperatureUp("+topVal+")",1000);
	}
	
}
function waterLevel(){// Increament opacity of water  in beaker
	opt=opt+0.1;
	$('#beakerWater').css({
			'opacity':opt
	})
	if(opt<1){
		clrOpt=setTimeout("waterLevel()",5000);
		
	}else{
		clearInterval(clrOpt);
	}
	
}

function thermoSolutionUp(){// Level of soulution on small thermometer increase
	
	var tops=$('#thermoSolution').css('top');
	tops= tops.substr(0,tops.length - 2);
	tops--;
	var heights=$('#thermoSolution').css('height');
	heights=heights.substr(0,heights.length - 2);
	heights++;
	$('#thermoSolution').css({
			'top':tops+"px",
			'height':heights+"px"
	})
	if(temperature>=boilingPt ||temperature>=147){
		clearInterval(clrSltn);
	}else{
		clrSltn=setTimeout("thermoSolutionUp()",1000);
	}
	
}
function thermoSolutionDown(){// Level of soulution on small thermometer decrease
	var tops=$('#thermoSolution').css('top');
	tops= tops.substr(0,tops.length - 2);
	tops++;
	var heights=$('#thermoSolution').css('height');
	heights=heights.substr(0,heights.length - 2);
	heights--;
	$('#thermoSolution').css({
			'top':tops+"px",
			'height':heights+"px"
	})
	if(temperature<=28){
		clearInterval(clrSltn);
	}else{
		clrSltn=setTimeout("thermoSolutionDown()",1000);
	}
}
function temperatureDown(topValue){//Temperature decrease and zoon reading
	topVal=topValue-5;console.log(topVal);
	if(temperature==65){$("#reading").css({"top" : 132+"px"})}
	else if(temperature==115){$("#reading").css({"top" : 137+"px"})}
	else if(temperature==160){$("#reading").css({"top" : 142+"px"})}
	$("#thermoBig").css({
			"top" : topVal+"px"
	});
	temperature--;
	
	$("#temperature").html(temperature+"&nbsp;<sup>o</sup>C");
	if(temperature<28){
		clearInterval(clrDown);
	}else{
		clrDown=setTimeout("temperatureDown("+topVal+")",1000);
	}
}
function setTemperatureValueUp(){//Steam and buble control
	
	clearInterval(clrTempDown);
	if(temperature>=boilingPt){
		clearInterval(clrTempUp);
	}else{
		clrTempUp=setTimeout("setTemperatureValueUp()",1000);
		
	}
	if(temperature==boilingPt){
		waterLevel();
		$("#drops").css('visibility','visible');
		waterDrops();
	}
	if(temperature==boilingPt){
		$("#steam").css('visibility','visible');
		steam();
		buble();
	}
}
function waterDrops(){//Falling of water drops
	$("#drops").animate({
		top:300,
		opacity:0.1
	},function(){
		$("#drops").css({
			top:"78px",
			opacity:0.4
		});
	});
	clrDrop=setTimeout("waterDrops()",1000);
}
function buble(){//Generation of water
	var myArray=[160,163,166,169,172]; 
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	$('#canvasBox').append($('<div id="buble" class="buble"></div>'));
	$("#buble").animate({
		top:175,
		opacity:0.4
	},1500,function(){
		$("#buble").css({
			left:rand+"px"
		});
		$('#buble').remove();
	});
	
	$('#canvasBox').append($('<div id="buble1" class="buble"></div>'));
	rand = myArray[Math.floor(Math.random() * myArray.length)];
		$("#buble1").css({
			left:rand+"px"
		});
	$("#buble1").animate({
		top:175,
		opacity:0.4
	},1200,function(){
		$("#buble1").css({
			left:rand+"px"
		});
		$('#buble1').remove();
	});
	$('#canvasBox').append($('<div id="buble2" class="buble"></div>'));
	rand = myArray[Math.floor(Math.random() * myArray.length)];
		$("#buble2").css({
			left:rand+"px"
		});
	$("#buble2").animate({
		top:175,
		opacity:0.5
	},700,function(){
		$("#buble2").css({
			left:rand+"px"
		});
		$('#buble2').remove();
	});
	$('#canvasBox').append($('<div id="buble3" class="buble" style="width=5px;height=5px;border-radius=4px;"></div>'));
	rand = myArray[Math.floor(Math.random() * myArray.length)];
		$("#buble3").css({
			left:rand+"px"
		});
	$("#buble3").animate({
		top:175,
		opacity:0.6
	},800,function(){
		$("#buble3").css({
			left:rand+"px"
		});
		$('#buble3').remove();
	});
	$('#canvasBox').append($('<div id="buble4" class="buble"></div>'));
	rand = myArray[Math.floor(Math.random() * myArray.length)];
		$("#buble4").css({
			left:rand+"px"
		});
	$("#buble4").animate({
		top:175,
		opacity:0.4
	},900,function(){
		$("#buble4").css({
			left:rand+"px"
		});
		$('#buble4').remove();
	});
	$('#canvasBox').append($('<div id="buble5" class="buble"></div>'));
	rand = myArray[Math.floor(Math.random() * myArray.length)];
		$("#buble5").css({
			left:rand+"px"
		});
	$("#buble5").animate({
		top:175,
		opacity:0.7
	},800,function(){
		$("#buble5").css({
			left:rand+"px"
		});
		$('#buble5').remove();
	});
	$('#canvasBox').append($('<div id="buble6" class="buble"></div>'));
	rand = myArray[Math.floor(Math.random() * myArray.length)];
		$("#buble6").css({
			left:rand+"px"
		});
	$("#buble6").animate({
		top:175,
		opacity:0.7
	},1100,function(){
		$("#buble6").css({
			left:rand+"px"
		});
		$('#buble6').remove();
	});
	clrBul=setTimeout("buble()",900);
}
function steam(){//Generation of steam
stmFrame++;
	$("#steam").attr('src',path+"steam"+stmFrame+".png");
	clrSteam=setTimeout("steam()",200);
	if(stmFrame==7){
		stmFrame=1;
	}
	
}
function setTemperatureValueDown(){//buble controling
	clearInterval(clrTempUp);
	clearInterval(clrBul);

	if(temperature<28){
		clearInterval(clrTempDown);
	}else{
		clrTempDown=setTimeout("setTemperatureValueDown()",1000);
		
	}
}
function flameOn(){//Switch on Burner
	$("#burnerOff").css("visibility","hidden");
	$("#burnerOn").css("visibility","visible");
	$("#flame").css("visibility","visible");
	$('#testCase').prop('disabled', 'disabled');
	$('#samples').prop('disabled', 'disabled');
	$('#thermoSolution').css("visibility","visible");
	if(flag){
		$("#thermoZoom").attr("checked","checked");
		zoomArea_FN();
		flag=false;
	}
	flaming();
	setTemperatureValueUp();
	clearInterval(clrDown);
	var topVal = $("#thermoBig").css("top");
	topVal=parseInt(topVal.substr(0,topVal.length - 2));
	temperatureUp(topVal);
	clearInterval(clrSltn);
	thermoSolutionUp();
	
}
function flameOff(){//Switch off Burner
	$("#burnerOff").css("visibility","visible");
	$("#burnerOn").css("visibility","hidden");
	$("#flame").css("visibility","hidden");
	$("#steam").css("visibility","hidden");
	setTemperatureValueDown();
	clearInterval(clrIntvl);
	clearInterval(clrUp);
	clearInterval(clrDrop);
	clearInterval(clrSteam);
	clearInterval(clrOpt);
	var topVal = $("#thermoBig").css("top");
	topVal=parseInt(topVal.substr(0,topVal.length - 2));
	temperatureDown(topVal);
	clearInterval(clrSltn);
	thermoSolutionDown();
}
$(function() {//Dragging of spatula
    $( "#spatula" ).draggable({ revert: true,
		drag:function( event, ui ) {
			$("#spatula").css({"z-index":"10"});
			$("#pumicStone").attr('src',path+"pumicStoneInWatchGlassLess.png");
			
		}
	});
    $( "#spatulaDrop" ).droppable({accept:"#spatula",
      	drop: function( event, ui ) {
			//$('#thermometer').bind('mousedown');
        	$("#spatula").css({
				"top" : "50px",
				"left":"160px",
				"transform":"rotate(-40deg)",
				"-ms-transform":"rotate(-40deg)", /* IE 9 */
				"-webkit-transform":"rotate(-40deg)"
			});
			$("#spatula").attr('src',path+"spatula.png");
			$("#pumicStoneInTube").css({"visibility":"visible"});
			$("#pumicStoneInTube").animate({
				top:216
			})
			$("#spatula").css({
				"transform":"rotate(0deg)",
				"-ms-transform":"rotate(0deg)", /* IE 9 */
				"-webkit-transform":"rotate(0deg)"
			});
			$("#spatula").css({"z-index":"8"});
			$('#spatula').draggable( "disable" );
			$('#cork').draggable( "enable" );
		}
    });
 });
$(function() {//Dragging of cork
    $( "#cork" ).draggable({revert: "invalid",
		drag:function( event, ui ) {
			$("#corkShdw").css({"visibility":"hidden"});
			
		}
	});
	
    $( "#tubeMouth" ).droppable({accept:"#cork",
      	drop: function( event, ui ) {
        	$("#cork").css({"top" : "100px","left":"160px","z-index":"1"});			
			$("#thermometer" ).mousedown(function(){
			$( "#thermometer" ).css({
				"top" : "109px",
				"left":"252px",
				"transform":"rotate(0deg)",
				"-ms-transform":"rotate(0deg)", /* IE 9 */
				"-webkit-transform":"rotate(0deg)"});
			});
			$(function() {//Dragging of thermometer
				$("#thermometer" ).draggable({revert: "invalid",cursor: "move"});
				$("#tubeMouth1" ).droppable({accept:"#thermometer",
					drop: function( event, ui ) {
						$("#thermometer").css({"top" : "6px","left":"161px","z-index":"0"})
						$('#deliveryTube').draggable( "enable" );
						$("#temperature").html(temperature+"&nbsp;<sup>o</sup>C");
						$("#thermoZoom").removeAttr("disabled");
					}
				});
 			});
		}
    });
 });


 
$(function() {//Dragging of Deliverry Tube
    $( "#deliveryTube" ).draggable({revert: "invalid",
		drag:function( event, ui ) {
			$("#deliveryTube").css({"z-index":"10"});
			$("#deliveryTube").attr('src',path+"deliveryTube.png");
		}
	});
	$("#dTubeDrop" ).droppable({accept:"#deliveryTube",
      	drop: function( event, ui ) {
       		$("#deliveryTube").css({"top" : "75px","left":"173px","z-index":"0"});
			$("#burnerOff").bind('click');
			$("#burnerOff").attr('onclick','flameOn()');
		}
    });
});
function zoomArea_FN(){//Zoom area settings
	if($("#thermoZoom").is(':checked')){
		$("#zoomArea").css({"visibility":"visible"});
		$("#zoomTopHide").css({"visibility":"visible"});
		$("#zoomBottompHide").css({"visibility":"visible"});
		$("#thermoBig").css({"visibility":"visible"});
		$("#reading").css({"visibility":"visible"});
	}else{
		$("#zoomArea").css({"visibility":"hidden"});
		$("#zoomTopHide").css({"visibility":"hidden"});
		$("#zoomBottompHide").css({"visibility":"hidden"});
		$("#thermoBig").css({"visibility":"hidden"});
		$("#reading").css({"visibility":"hidden"});
	}
}

function resetFN(){//reset everything
	window.location.reload();
}