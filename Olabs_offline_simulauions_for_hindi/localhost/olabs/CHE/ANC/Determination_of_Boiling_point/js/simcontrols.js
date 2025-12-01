//window.onload=initialFunction;"initEvent";
/*var unKnownArray=["select","Benzyl alcohol","Glycerol","Ethylene glycol","Phenol","Benzaldehyde","Acetophenone","Nitrobenzene","Aniline","Phenyl acetate","Chlorobenzene","Methyl salicylate","o-Cresol","Ethyl benzoate","o-Toluidine","Bromobenzene"]//without shuffling
*/
/*var knownArray=["Benzyl alcohol","Glycerol","Ethylene glycol","Phenol","Benzaldehyde","Acetophenone","Nitrobenzene","Aniline","Phenyl acetate","Chlorobenzene","Methyl salicylate","o-Cresol","Ethyl benzoate","o-Toluidine","Bromobenzene"]//its for shuffle the array elements in dropdown
*//*var msgs=['Click here to turn off the burner.','Burner','Tripod stand','Thermometer','Capillary tube','Stirrer','Beaker','Conc.sulphuric acid'];
*/var t1_Array=[207,292,199,184,180,205,213,186,199,134,225,193,215,203,158];//rising boilinpoint
var t2_Array=[203,288,195,180,176,199,209,182,193,130,221,189,211,197,154];//reducing boiling point
var t_Array=[205,290,197,182,178,202,211,184,196,132,223,191,213,200,156];//avg of t1 & t2
var incArray=[3.218,3.218,3.218,3.224,3.215,3.215,3.215,3.215,3.215,3.21,3.21,3.215,3.218,3.218,3.21];
var decArray=[2.2,2.2,2.3,2.4,2.1,2.2,2.15,2.15,2.25,2.1,2.0,2.2,2.15,2.3,2.2];
var gt;
var standImgLeft=100;
var stirrerImgLeft=310;
var beakerTopImgLeft=290;
var beakerUnderImgLeft=291;
var waterTopImgLeft=293;
var waterUnderImgLeft=293;
var zoomOuterDivLeft=320;
var zoomLineSmallLeft=332;
var burnerMsgOverLeft=315;
var thermoMsgOverLeft=326;
var msgDiv_tripodLeft=270;
var capMsgOverLeft=338;
var stirMsgOverLeft=355;
var sulphuricAcidLeft=290;
var arrowLeft=500;
var arrowT2Left=500;
var Int;
var T1;
var T2;
var T;
var tempSlot;
var tempVal=27;
var temp_inc;
var temp_dec;
var shuffleArray;
var	selectKnown=0
var cloud;
var selectUnknown=0;
var selectUnkownValue=0;
var selectT1=0;
var selectT2=0;
var imgTop=-1443;
var count=0;
var posFlag=0;
var stirTop=192;
var arrowTop=75;
var msgs=[];
var unKnownArray=[];
var knownArray=[];
var variableArray=[];
var gt=$;

/*window.onload = function init(){
	
	document.getElementById("expName").innerHTML=gt.gettext("Boiling Point of an Organic Compound");	

 }
*/
//ready function
$(document).ready(function() {	
	variableArray=[gt.gettext('Select the unknown compound:'),gt.gettext('Start'),gt.gettext('The temperature at which continuous stream of air bubbles appears, (t<sub>1</sub>):'),gt.gettext('The temperature at which bubbles completely disappears, (t<sub>2</sub>):'),gt.gettext('Boiling point, (t<sub>1</sub>+ t<sub>2</sub>)/2 ='),gt.gettext('Result'),gt.gettext('Select the actual compound:'),gt.gettext(' Show chart')];
	document.getElementById("expName").innerHTML=gt.gettext("Boiling Point of an Organic Compound");
	msgs=[gt.gettext('Click here to turn off the burner.'),gt.gettext('Burner'),gt.gettext('Tripod stand'),gt.gettext('Thermometer'),gt.gettext('Capillary tube'),gt.gettext('Stirrer'),gt.gettext('Beaker'),gt.gettext('Conc.sulphuric acid')];
	unKnownArray=[gt.gettext("select"),gt.gettext("Benzyl alcohol"),gt.gettext("Glycerol"),gt.gettext("Ethylene glycol"),gt.gettext("Phenol"),gt.gettext("Benzaldehyde"),gt.gettext("Acetophenone"),gt.gettext("Nitrobenzene"),gt.gettext("Aniline"),gt.gettext("Phenyl acetate"),gt.gettext("Chlorobenzene"),gt.gettext("Methyl salicylate"),gt.gettext("o-Cresol"),gt.gettext("Ethyl benzoate"),gt.gettext("o-Toluidine"),gt.gettext("Bromobenzene")]//without shuffling
var knownArray=[gt.gettext("select"),gt.gettext("Benzyl alcohol"),gt.gettext("Glycerol"),gt.gettext("Ethylene glycol"),gt.gettext("Phenol"),gt.gettext("Benzaldehyde"),gt.gettext("Acetophenone"),gt.gettext("Nitrobenzene"),gt.gettext("Aniline"),gt.gettext("Phenyl acetate"),gt.gettext("Chlorobenzene"),gt.gettext("Methyl salicylate"),gt.gettext("o-Cresol"),gt.gettext("Ethyl benzoate"),gt.gettext("o-Toluidine"),gt.gettext("Bromobenzene")]//its for shuffle the array elements in dropdown
		document.getElementById("selectCompound").innerHTML=gt.gettext(variableArray[0]);
		$('#start').attr('value',gt.gettext('Start'));
		$('#reset').attr('value',gt.gettext('Reset'));
		document.getElementById("temperature1").innerHTML=gt.gettext(variableArray[2]);
		document.getElementById("temperature2").innerHTML=gt.gettext(variableArray[3]);
		document.getElementById("bolilngLbl").innerHTML=gt.gettext(variableArray[4]);
		document.getElementById("resultLbl").innerHTML=gt.gettext(variableArray[5]);
		document.getElementById("compo2Lbl").innerHTML=gt.gettext(variableArray[6]);
		document.getElementById("showORhideSpan").innerHTML=gt.gettext(variableArray[7]);
		//document.getElementById("selopt").innerHTML=gt.gettext(unKnownArray[0]);
		//document.getElementById("selopt").textContent="newtext";
		//$("#selopt").html(gt.gettext('select'));
		//alert($("#selopt").html(gt.gettext('select')))

		//document.getElementById("selopt").innerHTML=gt.gettext("Select");
		document.lister.thelist0.options[0] = new Option(gt.gettext("select"));
		for(var i=1; i<16; i++){
			document.lister.thelist0.options[i] = new Option(gt.gettext("Compound")+(i), i);
		}	
		shuffleArray=shuffle(knownArray);
		document.lister.thelist1.options[0] = new Option(gt.gettext("select"));
		for (var k=0; k <knownArray.length;++k)  
		{  
			addOption(document.getElementById('thelist1'), shuffleArray[k], shuffleArray[k]);  
		} 
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
				 color:'#593E1A',width: 100,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		 $('#beakerTopImg').qtip({	 
				 content:msgs[6] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		  $('#sulphuricAcid').qtip({	 
				 content:msgs[7] ,style: { textAlign: 'center','font-size': 13,
				 color:'#593E1A',width: 125,border: {width: 1,radius: 3 }, tip: true,name: 'cream', },
				 position: {corner: {target: 'topRight',tooltip: 'bottomLeft'},target: 'mouse' },
		 });
		 
		
	
 });

//for shuffle the array fo knowncompound dropdown
function shuffle(array) {
    for (var k = array.length - 1; k > 0; k--) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = array[k];
        array[k] = array[j];
        array[j] = temp;
    }
    return array;
}
//add options in dropdown
function addOption(selectbox,text,value)  
{  
	var optn = document.createElement("OPTION");  
	optn.text = text;  
	optn.value = value;  
	selectbox.options.add(optn);  
}
//function to start experiment
function start_FN(){
	document.getElementById("start").disabled=true;
	document.getElementById("thelist0").disabled=true;
	$('#flameImg').css({"visibility":"visible"});
	$('.flameshake').css({
			'animation-name': 'flameshake',
			'animation-duration': '100ms',
			'animation-iteration-count': 'infinite',
			'animation-timing-function': 'linear',
			
			'-moz-animation-name': 'flameshake',
			'-moz-animation-duration': '100ms',
			'-moz-animation-iteration-count':'infinite',
			'-moz-animation-timing-function': 'linear',
			
			'-webkit-animation-name': 'flameshake',
			'-webkit-animation-duration': '100ms',
			'-webkit-animation-iteration-count': 'infinite',
			'-webkit-animation-timing-function': 'linear',	
		});
	if(selectUnkownValue>=1){
		
		cloud=setInterval(draw1,4000);
		Int=setInterval(stir,30);
		temp_inc=setInterval("tempincreasing()",400);
	}
}
//function for stirr rod
function stir(){
	if(posFlag==0&&stirTop==182){
			posFlag=1;                         
			stirTop++;
			count++;
		}
		else if(posFlag==1){
			stirTop++;
			if(stirTop==192){
				posFlag=0;
				stirTop=192;
				count++;
			}
		}
		else {
			stirTop--;
		}
	document.getElementById("stirrerImg").style.top=stirTop+'px';
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
}
function draw1(){
	$('#bubblesBeaker').css({"visibility":"visible"});	
}
//to off the burner
function burnerON_FN(){
	clearInterval(cloud);
	clearInterval(temp_inc);
	$('#burnerMsg').css({"visibility":"hidden"});
	$('#burnerMsg').qtip('hide');
	$('#flameImg').css({"visibility":"hidden"});
	//$('#arrow').css({"visibility":"hidden"});
	temp_dec=setInterval("tempdecreasing()",400);
	$('#bubbles').fadeOut(4000);
	$('#bubblesBeaker').fadeOut(4000);
}	
var bubbleTestube
///temperature increasing...
function tempincreasing(){
		if(tempVal<=(t1_Array[selectUnkownValue-1])){
			
				tempVal=tempVal+.66;
				console.log("imgtop"+imgTop);
				console.log("topInc"+topInc);
				//var tempVal1=tempVal.toFixed(1)
				imgTop=((imgTop)+topInc);//3.225
				
				document.getElementById("imgZoom").style.top=(imgTop)+"px";
			if(tempVal>=(t1_Array[selectUnkownValue-1])-5){
				$('#bubbles').css({"visibility":"visible"});
			}
		}
			//alert(tempVal1)
			//alert(t1_Array[selectUnkownValue-1])
		
		//if((tempVal1<(t1_Array[selectUnkownValue-1])-.5)&&(tempVal1>(t1_Array[selectUnkownValue-1])+.1)){
			if((tempVal>=(t1_Array[selectUnkownValue-1]))){
			//alert(tempVal)
			$('#burnerMsg').css({"visibility":"visible"});
			$('#arrow').css({"visibility":"visible"});
			$('#burnerMsg').qtip('show');
		}
}
//temperature decreasing while bubbles completely disappears.
function tempdecreasing(){
		imgTop=((imgTop)-topDec);
		if(selectUnkownValue==6 || selectUnkownValue==9 || selectUnkownValue==14){
			if(arrowTop>=35){
				arrowTop=arrowTop-2.3
			}
		}else{
			if(arrowTop>=55){
				arrowTop=arrowTop-3;
		    }
		}
		if((tempVal>=t2_Array[selectUnkownValue-1])){
			document.getElementById("imgZoom").style.top=(imgTop)+"px";
	  		tempVal=tempVal-.5;
			document.getElementById("arrow").style.top=arrowTop+"px"
		}
		if(tempVal<=(t2_Array[selectUnkownValue-1])){
			$('#arrowT2').css({"visibility":"visible"});
			$('.canvasTitle').css({visibility:'visible'});
			arrowTop=75+"px";
			document.getElementById("arrowT2").style.top=arrowTop+"px";
			document.getElementById("temp1").disabled=false;
			document.getElementById("temp2").disabled=false;
			document.getElementById("showORhide").disabled=false;
			document.getElementById("thelist1").disabled=false;
			clearInterval(Int);
			$('.shake').css({
			'animation-name': 'none',
			'-moz-animation-name': 'none',
			'-webkit-animation-name': 'none',
		});
			document.getElementById("stirrerImg").style.top=192+'px';
		}
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
//function for boiling point calc
function avgDisplay(){ ///// (t1+t2)/2
   T1=document.getElementById('temp1').value;
   T2=document.getElementById('temp2').value;
   if((T1!='')&&(T2!='')){
	 var avgTemp=(parseInt(T1)+parseInt(T2))/2;
	 document.getElementById('boilptCalc').value=avgTemp;
   }
}
//show/hide chart
function showChart(e){
	if(e==true){
		document.getElementById("chartImg").style.display="block";
		$("#contentDiv").delay(300).animate({left:'160px'});
		//$("#chartImg").show( "slide",  {direction: "left" }, 1000 );
		$("#chartImg").delay(300).animate({left:'-160px'});
                     
/*		
if ( $.browser.mozilla == true){
document.getElementById("standImg").style.left=standImgLeft+90+"px";
		document.getElementById("stirrerImg").style.left=stirrerImgLeft+90+"px";
		document.getElementById("beakerTopImg").style.left=beakerTopImgLeft+90+"px";
		document.getElementById("beakerUnderImg").style.left=beakerUnderImgLeft+90+"px";
		document.getElementById("waterTopImg").style.left=waterTopImgLeft+90+"px";
		document.getElementById("waterUnderImg").style.left=waterUnderImgLeft+90+"px";
		document.getElementById("zoomOuterDiv").style.left=zoomOuterDivLeft+90+"px";
		document.getElementById("arrow").style.left=arrowLeft+90+"px";
		document.getElementById("arrowT2").style.left=arrowT2Left+90+"px";
		document.getElementById("zoomLineSmall").style.left=zoomLineSmallLeft+90+"px";
		document.getElementById("burnerMsgOver").style.left=burnerMsgOverLeft+90+"px";
		document.getElementById("thermoMsgOver").style.left=thermoMsgOverLeft+90+"px";
		document.getElementById("msgDiv_tripod").style.left=msgDiv_tripodLeft+90+"px";
		document.getElementById("capMsgOver").style.left=capMsgOverLeft+90+"px";
		document.getElementById("stirMsgOver").style.left=stirMsgOverLeft+90+"px";
		document.getElementById("sulphuricAcid").style.left=sulphuricAcidLeft+90+"px";

		$('.zoomclass').css({
			left:'415px'	
		});
		$('.canvasTitle').css({
			visibility:'hidden',
		});*/
	}else{
		$("#contentDiv").animate({left:'0px'});
		//$("#chartImg").hide( "slide",{direction: "left" }, 1000 ); 
         $("#chartImg").delay(300).animate({left:'-240px'});             
		//$("#chartImg").animate({left:'-50px'});
		//document.getElementById("chartImg").style.display="none";
		/*document.getElementById("standImg").style.left=standImgLeft+"px";
		document.getElementById("stirrerImg").style.left=stirrerImgLeft+"px";
		document.getElementById("beakerTopImg").style.left=beakerTopImgLeft+"px";
		document.getElementById("beakerUnderImg").style.left=beakerUnderImgLeft+"px";
		document.getElementById("waterTopImg").style.left=waterTopImgLeft+"px";
		document.getElementById("waterUnderImg").style.left=waterUnderImgLeft+"px";
		document.getElementById("zoomOuterDiv").style.left=zoomOuterDivLeft+"px";
		document.getElementById("arrow").style.left=arrowLeft+"px";
		document.getElementById("arrowT2").style.left=arrowT2Left+"px";
		document.getElementById("zoomLineSmall").style.left=zoomLineSmallLeft+"px";
		document.getElementById("burnerMsgOver").style.left=burnerMsgOverLeft+"px";
		document.getElementById("thermoMsgOver").style.left=thermoMsgOverLeft+"px";
		document.getElementById("msgDiv_tripod").style.left=msgDiv_tripodLeft+"px";
		document.getElementById("capMsgOver").style.left=capMsgOverLeft+"px";
		document.getElementById("stirMsgOver").style.left=stirMsgOverLeft+"px";
		document.getElementById("sulphuricAcid").style.left=sulphuricAcidLeft+"px";

		$('.zoomclass').css({
			left:'325px'	
		});
		$('.canvasTitle').css({
			visibility:'visible',
		});
*/	}
}
var topInc;
var topDec;

//function for select unknown compound dropdown
function selectUnknown_FN(evt){
	selectUnknown=evt.selectedIndex;
	if(evt.selectedIndex==7){
		document.getElementById("testtubeZoomId").src=simPath+'images/testtubeZoomYellow.png';
	}else{
		document.getElementById("testtubeZoomId").src=simPath+'images/testtubeZoom.png';
	}
	document.getElementById("start").disabled=false;
	selectUnkownValue=document.getElementById("thelist0").value
	selectT1=document.getElementsByName("temp1").value
	selectT2=document.getElementsByName("temp2").value
	for(var p=1;p<unKnownArray.length;p++){
		if(selectUnknown==p){
			selectUnknown=unKnownArray[p];
			selectT1=t1_Array[p-1];
			selectT2=t2_Array[p-1];
			topInc=incArray[p-1];
			topDec=decArray[p-1];
		}
 }
 		//alert("unknownCompoun---"+selectUnknown);
		//alert("bp of unknowncompoun----"+selectUnkownValue);
		//alert("T1---"+selectT1);
		//alert("T2---"+selectT2);
}
//function for select known compound dropdown
function selectKnown_FN(evt){
	var x=evt.selectedIndex;
	var p=evt.options
	selectKnown=p[x].text;
	//alert(selectKnown)
	if(selectUnknown==selectKnown && T1==selectT1 && T2==selectT2){
			document.getElementById("label").innerHTML=gt.gettext("Correct!");
		}else{
			document.getElementById("label").innerHTML=gt.gettext("Wrong, Try again!");
	}
}

	
	
	
	
	
	
	
	