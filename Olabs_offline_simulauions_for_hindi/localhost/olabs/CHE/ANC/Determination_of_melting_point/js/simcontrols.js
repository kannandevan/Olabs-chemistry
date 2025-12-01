// JavaScript Document
                       
var compoundArray=['com1','com2','com3','com4','com5','com6','com7','com8','com9','com10','com11'];	
/*var msgs=['Click here to turn on the burner.','Burner','Tripod stand','Thermometer','Capillary tube','Stirrer','Beaker','Paraffin liquid'];
*/
var initial_temp=[94,120,99,79,120,130,129,100,143,184,75];
var final_temp=[98,126,103,85,124,136,135,106,149,188,85];
var thermoScaleVal=[7,7.03,6.98,6.93,7.03,7.05,7.04,7.01,7.07,7.08,6.93];//for moving thermo img ...
var arrowmov=[862,678,830,970,677,606,614,818,510,220,997];//for moving arrow img ...

var randomVar=Math.floor((Math.random()*11));
var resltCompound=Math.floor((Math.random()*11));
var compoundVal=compoundArray[randomVar];
var interval;
var temp_interval;
var t1Val=0;
var t2Val=0;
var tempVal;
var imgTop;
var msgs=[];
var lblArray=[];
var compoundOptions=[];
var actualCmpndOptions=[];

//////tooltipss....

$(document).ready(function() 
{
	document.getElementById("expName").innerHTML=gt.gettext("Melting Point of an Organic Compound");
var msgs=[gt.gettext('Click here to turn on the burner.'),gt.gettext('Burner'),gt.gettext('Tripod stand'),gt.gettext('Thermometer'),gt.gettext('Capillary tube'),gt.gettext('Stirrer'),gt.gettext('Beaker'),gt.gettext('Paraffin liquid')];
	lblArray=[gt.gettext("Select the compound: "),gt.gettext("The temperature at which the compound starts melting, t<sub>1</sub> :"),gt.gettext("The temperature at which the compound completly melted, t<sub>2</sub> :"),gt.gettext("Melting point, (t<sub>1</sub>+ t<sub>2</sub>) / 2 ="),gt.gettext("Identify the compound "),gt.gettext("Select the actual compound: "),gt.gettext("Show chart")];
	compoundOptions=[gt.gettext("Select"),gt.gettext("Compound 1"),gt.gettext("Compound 2"),gt.gettext("Compound 3"),gt.gettext("Compound 4"),gt.gettext("Compound 5"),gt.gettext("Compound 6"),gt.gettext("Compound 7"),gt.gettext("Compound 8"),gt.gettext("Compound 9"),gt.gettext("Compound 10"),gt.gettext("Compound 11")]
		actualCmpndOptions=[ gt.gettext("Select"),gt.gettext("&alpha; - naphthol"),gt.gettext("&beta; - naphthol"),gt.gettext("Oxalic acid dihydrate"),gt.gettext("Acetamide"),gt.gettext("Benzoic acid"),gt.gettext("Cinnamic acid"),gt.gettext("Urea"),gt.gettext("Fructose"),gt.gettext("Glucose"),gt.gettext("Sucrose"),gt.gettext("Naphthalene")];
	addintoDropDown( $('#theinput'),compoundOptions);
	addintoDropDown( $('#actualCom'),actualCmpndOptions);
	document.getElementById("selCmpndLbl").innerHTML=gt.gettext(lblArray[0]);
	document.getElementById("temperature1").innerHTML=gt.gettext(lblArray[1]);
	document.getElementById("temperature2").innerHTML=gt.gettext(lblArray[2]);
	document.getElementById("meltLabl").innerHTML=gt.gettext(lblArray[3]);
	document.getElementById("cmpndLbl").innerHTML=gt.gettext(lblArray[4]);
	document.getElementById("selectLbl").innerHTML=gt.gettext(lblArray[5]);
	document.getElementById("chartLbl").innerHTML=gt.gettext(lblArray[6]);
	$('#start').attr('value',gt.gettext('Start'));
	$('#reset').attr('value',gt.gettext('Reset'));
	

		$('#burnerMsg').qtip({	 
				 content:msgs[0] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 150,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 show: false,hide:false,
				 position: {adjust: { x: 13, y: 2 } ,corner: {target: 'topLeft',tooltip: 'bottomRight'}, },
		 });
		 $('#burnerMsgOver').qtip({	 
				 content:msgs[1] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		  $('#msgDiv_tripod').qtip({	 
				 content:msgs[2] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		  $('#thermoMsgOver').qtip({	 
				 content:msgs[3] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		  $('#capMsgOver').qtip({	 
				 content:msgs[4] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		  $('#stirMsgOver').qtip({	 
				 content:msgs[5] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		 $('#beakerTop').qtip({	 
				 content:msgs[6] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		  $('#parafinLiqd').qtip({	 
				 content:msgs[7] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		
		$('body').on('change', '#theinput', function(){			
			document.getElementById('actualCom').selectedIndex=0;
			var onChangeVal=document.getElementById('theinput').value;
			randomVar=Math.floor((Math.random()*11));
			compoundVal=compoundArray[randomVar]; /// for dispalying compounds randomly....
			document.getElementById('theinput').value=onChangeVal;
			document.getElementById('start').disabled=false;
			compoundload();
		});
	
});


	//*--Function to add values into the drop down---					   
	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {			
			selected.append(
				$('<option></option>').val("com"+val).html(text)
			);
		});
	}


/// canvas for bg image
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 569;
BGCanvas.height = 440;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
bgCtx.drawImage(bgImg,0,0,570,450);
};
bgImg.src=simPath+'images/BG.png';
/*
///drop down event.....
function compoundChange(){
	
	document.getElementById('actualCom').selectedIndex=0;
	var onChangeVal=document.getElementById('theinput').value;
	randomVar=Math.floor((Math.random()*11));
	compoundVal=compoundArray[randomVar]; /// for dispalying compounds randomly....
	document.getElementById('theinput').value=onChangeVal;
	compoundload();
}
*/
//selecting actualCompound...
function actualCompound(){
	if(document.getElementById('actualCom').value==compoundVal){
		document.getElementById('msgTxt').innerHTML=gt.gettext("Correct!");
	}else{
		document.getElementById('msgTxt').innerHTML=gt.gettext("Wrong, Try again!");	
	}
}

///loading unknown compound.....
function compoundload(){
	document.getElementById('start').disabled=false;
	$('#capTube_compound').css({
		display:'block'			
	});	
}

///starting exp......
function start_Exp(){

	document.getElementById("burnerMsg").style.display="block";
	$('#burnerMsg').qtip('show');
	$('.zoomclass').css({
		display:'block'	,
	});
	$('.Tubezoom').css({
		display:'block'	,
	});	
	document.getElementById("zoomOuterDiv").style.display="block";
	document.getElementById("zoomOuterTube").style.display="block";
	document.getElementById("imgcmpTub").style.visibility=document.getElementById("capTube_compound").style.visibility="visible";
	document.getElementById("arrow").style.visibility='hidden';
	document.getElementById("arrowT2").style.visibility='hidden';
	document.getElementById('show').disabled=document.getElementById('actualCom').disabled=true;
	document.getElementById('t1_txt').disabled=document.getElementById('t2_txt').disabled=true;
}

///validate input entriess..
function validate(evt) {
  
  var theEvent = evt;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]/;
  if( !regex.test(key) ) {
	  if((theEvent.keyCode == 8) || (theEvent.keyCode == 46)){
		   theEvent.returnValue = true;
	  }else{
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
		}
   }
}

function avgDisplay(){ ///// (t1+t2)/2

   t1Val=document.getElementById('t1_txt').value;
   t2Val=document.getElementById('t2_txt').value;
   if((t1Val!='')&&(t2Val!='')){
	 var avgTemp=(parseInt(t1Val)+parseInt(t2Val))/2;
	 document.getElementById('total_txt').value=avgTemp;
   }
}

////showing temperature chart...
function showchart_FN(){
	
	if(document.getElementById("show").checked==true){
		document.getElementById("show").innerHTML=gt.gettext("Hide chart");
		document.getElementById("chartImg").style.display="block";
		$("#contentDiv").delay(300).animate({left:'160px'});
		$("#chartImg").show( "slide",{direction: "left" }, 1000 );
	
	}else{
		document.getElementById("show").innerHTML=gt.gettext("Show chart");
		document.getElementById("chartImg").style.display="none";
		$("#chartImg").hide( "slide",  {direction: "left" }, 1000 );
		$("#contentDiv").animate({left:'0px'});
	}
}

///burner On....
function burnerON_FN(){
	
	$('#burnerMsg').qtip('hide');
	$('.flameshake').css({
			'animation-name': 'flameshake',
			'animation-duration': '80ms',
			'animation-iteration-count': 'infinite',
			'animation-timing-function': 'linear',
			
			'-moz-animation-name': 'flameshake',
			'-moz-animation-duration': '80ms',
			'-moz-animation-iteration-count':'infinite',
			'-moz-animation-timing-function': 'linear',
			
			'-webkit-animation-name': 'flameshake',
			'-webkit-animation-duration': '80ms',
			'-webkit-animation-iteration-count': 'infinite',
			'-webkit-animation-timing-function': 'linear',	
		});
	document.getElementById('start').disabled=true;
	document.getElementById('theinput').disabled=true;
	document.getElementById("burnerMsg").style.display="none";
	document.getElementById("flame").style.display="block";
	interval=setInterval("Stirring()",30);
	tempVal=27;
	imgTop=-1374;
	temp_interval=setInterval("tempincreasing()",650);
}

////stirringg.....
var count=0;
var posFlag=0;
var stirTop=95;
function Stirring(){
	
	if(posFlag==0&&stirTop==85){
			posFlag=1;
			stirTop++;
			count++;
		}
		else if(posFlag==1){
			stirTop++;
			if(stirTop==95){
				posFlag=0;
				stirTop--;
				count++;
			}
		}
		else{
			stirTop--;
		}
		/////for the water animation.....
		$('.shake').css({
			'animation-name': 'shake',
			'animation-duration': '350ms',
			'animation-iteration-count': 'infinite',
			'animation-timing-function': 'linear',
			
			'-moz-animation-name': 'shake',
			'-moz-animation-duration': '350ms',
			'-moz-animation-iteration-count':'infinite',
			'-moz-animation-timing-function': 'linear',
			
			'-webkit-animation-name': 'shake',
			'-webkit-animation-duration': '350ms',
			'-webkit-animation-iteration-count': 'infinite',
			'-webkit-animation-timing-function': 'linear',	
		});
		
	document.getElementById("stirrer").style.top=stirTop+'px';
}

///temperature increasing...randomVar
var arrowTop=document.getElementById("arrow").style.top;
var arrowscale=(thermoScaleVal[randomVar]);

function tempincreasing(){
	
	if(tempVal<(final_temp[randomVar])){
		tempVal++;
		if(tempVal==initial_temp[randomVar]){
			$('#imgcmpTub').animate({
				top:'35px',
				width:'42px',
				left:'1px',
				height:'104px',
				opacity:'0.8',
			});
			document.getElementById("arrow").style.visibility=document.getElementById("imgZoomWater").style.visibility='visible';
           	   $('#imgZoomWater').animate({
				top:'40px',height:'95px',width:'45px',
			   });
		       $('#arrow').css({
			    top:-(parseFloat(imgTop)+arrowmov[randomVar])+"px",
         	   });
			
		     arrowTop=document.getElementById("arrow").style.top;
		}
		else{
			if((tempVal>final_temp[randomVar]-2)){
				$('#imgZoomWater').animate({
				top:'30px',height:'107px',width:'45px',	
			   });
				$('#imgcmpTub').delay(100).animate({
					opacity:'0.5',
					top:'56px',
					/*width:'25px',
					left:'2px',*/
					height:'80px'
				});
				  
			}
			
			if(document.getElementById("arrow").style.visibility=='visible'){
			   arrowTop=parseFloat(arrowTop)+parseFloat(arrowscale);
			   document.getElementById("arrow").style.top=arrowTop+"px";
			}
			imgTop=(imgTop)+(thermoScaleVal[randomVar]);
		}
	}
	else{
		     $('#imgZoomWater').animate({
				top:'15px',height:'125px'	
			   });
		     $('#imgcmpTub').animate({
					opacity:'0.0',
					top:'86px',
					height:'50px'
				});
		document.getElementById("arrowT2").style.visibility='visible';
		$('#arrowT2').css({
			 top:"49px",
         });
		stirTop=95;
		document.getElementById("stirrer").style.top=stirTop+'px';
		clearInterval(temp_interval);
		clearInterval(interval);
		///stoping animation...
		$('.shake').css({
			'animation-name': 'none',
			'-moz-animation-name': 'none',
			'-webkit-animation-name': 'none',
		});
		$('.flameshake').css({
			'animation-name': 'none',
			'-moz-animation-name': 'none',
			'-webkit-animation-name': 'none',
		});
		document.getElementById('show').disabled=document.getElementById('actualCom').disabled=false;
		document.getElementById('t1_txt').disabled=document.getElementById('t2_txt').disabled=false;
		document.getElementById("flame").style.display="none";
	}
	document.getElementById("imgZoom").style.top=(imgTop)+"px";
}

