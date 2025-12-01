// JavaScript Document
var test=0;//mass
var solid=0;//earth
var imageClicked;
var density;
var volumeincm3;
var volumeinm3;
var massinkg;
var massing;
var enviEarth=9.8;
var enviMoon=1.6;
var enviMercury=3.7;
var massinSpring=0;
var massohObj=0;
var initVol=50;
var finalVol;
var densityResult;
var canvas = document.getElementById('myCanvas');
canvas.width = 565;
canvas.height = 480;
var ctx = canvas.getContext('2d');
var img = new Image;
img.onload = function(){ ctx.drawImage(img,0,0);
 };
img.src=simPath+'images/BG.png';
var labelArraybuttonArray;
var environment,testType;
window.onload = function init(){
	labelArray=[gt.gettext('Solution Controls'),gt.gettext('Select Environment'),gt.gettext('Select type of test'),gt.gettext('Enter the readings:'),gt.gettext('Gravitational Mass (in g):'),gt.gettext('Mass of Object, m(g):'),gt.gettext('Volume (in ml):'),gt.gettext('Density (g/cc):'),gt.gettext('1cubic centimetre=1ml')];
	buttonArray=[gt.gettext('Check'),gt.gettext('Reset')];
	environment=[gt.gettext('Earth (9.8m/s&#178;)'),gt.gettext('Moon (1.6m/s&#178;)'),gt.gettext('Mercury (3.7m/s&#178;)')];
	testType=[gt.gettext('Find Mass'),gt.gettext('Find Volume')];
	document.getElementById("h1").innerHTML=labelArray[0];
	document.getElementById("lbl_1").innerHTML=labelArray[1];
	document.getElementById("lbl_2").innerHTML=labelArray[2];
	document.getElementById("lbl_3").innerHTML=labelArray[3];
	document.getElementById("lbl_4").innerHTML=labelArray[4];
	document.getElementById("lbl_5").innerHTML=labelArray[5];
	document.getElementById("lbl_6").innerHTML=labelArray[6];
	document.getElementById("lbl_7").innerHTML=labelArray[7];
	document.getElementById("lbl_8").innerHTML=labelArray[8];
	document.getElementById("submit").value=buttonArray[0];
	document.getElementById("reset").value=buttonArray[1];
	document.getElementById("expName").innerHTML=gt.gettext("Determination of Density of Solid");
	addintoDropDown( $('#theinput'),environment);
	addintoDropDown( $('#theinput2'),testType);
	/*	$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
		$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
		$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));*/
	
}
function init(){
	document.getElementById("answer1").disabled=true;
	document.getElementById("answer2").disabled=true;
	document.getElementById("answer3").disabled=true;
	document.getElementById("answer4").disabled=true;
	document.getElementById("submit").disabled=true;
	document.getElementById('Mainimage').style.visibility='visible';
	document.getElementById('Mainimage2').style.visibility='hidden';
	document.getElementById('copperimage').style.visibility='hidden';
	document.getElementById('woodimage').style.visibility='hidden';
	document.getElementById('stoneimage').style.visibility='hidden';
	document.getElementById('lockimage').style.visibility='hidden';
	document.getElementById('woodinbeaker').style.visibility='hidden';
	document.getElementById('stoneinbeaker').style.visibility='hidden';
	document.getElementById('copperinbeaker').style.visibility='hidden';
	document.getElementById('bobinbeaker').style.visibility='hidden';
	document.getElementById('lockinbeaker').style.visibility='hidden';
	document.getElementById('bobimage').style.visibility='hidden';
	document.getElementById('img1').style.visibility='visible';
	document.getElementById('img2').style.visibility='visible';
	document.getElementById('img3').style.visibility='visible';
	document.getElementById('img4').style.visibility='visible';
	document.getElementById('img5').style.visibility='visible';
	document.getElementById('arrowimage').style.top="127px";
	document.getElementById('arrowimage').style.visibility='visible';
	document.getElementById('water').style.visibility='hidden';
	document.getElementById('water11').style.visibility='hidden';
	document.getElementById('water22').style.visibility='hidden';
	document.getElementById('water33').style.visibility='hidden';
	document.getElementById('water44').style.visibility='hidden';
	document.getElementById('result').style.visibility='hidden';
	document.getElementById('arrowimage1').style.visibility='hidden';
	document.getElementById('zoomimage').style.visibility='hidden';
	document.getElementById("springimage").style.visibility='visible';
	document.getElementById('zoomimage50').style.visibility='hidden';
	document.getElementById('zoomimage65').style.visibility='hidden';
	document.getElementById('zoomimage70').style.visibility='hidden';
	document.getElementById('zoomimage75').style.visibility='hidden';
	document.getElementById('zoomimage100').style.visibility='hidden';
	
	

}
function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
}

function showMsg(e){
	var topPosmsg;	
	document.getElementById('imgtool').style.display="block";
	if(e=="answer1"){
		topPosmsg=80+"%";	
		document.getElementById("imgtool").style.top=topPosmsg;
		document.getElementById("imgtool").innerHTML=gt.gettext("The mass of the object due to gravity that displayed in the spring balance");
	}else if(e=="answer2"){
		topPosmsg=110+"%";	
		document.getElementById("imgtool").style.top=topPosmsg;
		document.getElementById("imgtool").innerHTML=gt.gettext("The actual mass of the body calculated using the equation, m = gravitational mass(w) x 9.8 / g(environment)");
	}else if(e=="answer3"){
		topPosmsg=145+"%";	
		document.getElementById("imgtool").style.top=topPosmsg;
		document.getElementById("imgtool").innerHTML=gt.gettext("Final level of water (with block immersed) - Initial level of water (without block immersed)");
	}else if(e=="answer4"){
		topPosmsg=180+"%";	
		document.getElementById("imgtool").style.top=topPosmsg;
		document.getElementById("imgtool").innerHTML=gt.gettext("Density, D(g/cc) = m/v = mass divided by volume");
	}
	
}
function hideMsg(){
	document.getElementById('imgtool').style.display="none";
}

// Image clicked function and calculations
function imageClick1(e){
	imageClicked=e.id;
	document.getElementById("answer1").disabled=false;
	document.getElementById("answer2").disabled=false;
	document.getElementById("answer3").disabled=false;
	document.getElementById("answer4").disabled=false;
	document.getElementById("submit").disabled=false;
	if(test==1){
		if(imageClicked=="image"){
			document.getElementById('zoomimage50').style.visibility='hidden';
			document.getElementById('zoomimage65').style.visibility='hidden';
			document.getElementById('zoomimage70').style.visibility='visible';
			document.getElementById('zoomimage75').style.visibility='hidden';
			document.getElementById('zoomimage100').style.visibility='hidden';
			document.getElementById('img1').style.visibility='hidden';
			document.getElementById('img2').style.visibility='visible';
			document.getElementById('img3').style.visibility='visible';
			document.getElementById('img4').style.visibility='visible';
			document.getElementById('img5').style.visibility='visible';
			document.getElementById('copperinbeaker').style.visibility='visible';
			document.getElementById('woodinbeaker').style.visibility='hidden';
			document.getElementById('stoneinbeaker').style.visibility='hidden';
			document.getElementById('lockinbeaker').style.visibility='hidden';
			document.getElementById('bobinbeaker').style.visibility='hidden';
			
			if(solid==0){//"earth"
				volumeincm3=20;
				finalVol=initVol+volumeincm3;
				if(finalVol=="70"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='visible';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
				
			}else if(solid==1){//"moon"
				volumeincm3=20;
				finalVol=initVol+volumeincm3;
				if(finalVol=="70"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='visible';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
			}else if(solid==2){//"mercury"
				volumeincm3=20;
				finalVol=initVol+volumeincm3;
				if(finalVol=="70"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='visible';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
			}
		
		}else if(imageClicked=="image1"){
			document.getElementById('zoomimage50').style.visibility='hidden';
			document.getElementById('zoomimage65').style.visibility='hidden';
			document.getElementById('zoomimage70').style.visibility='hidden';
			document.getElementById('zoomimage75').style.visibility='visible';
			document.getElementById('zoomimage100').style.visibility='hidden';
			document.getElementById("img2").style.visibility='hidden';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperinbeaker').style.visibility='hidden';
			document.getElementById('woodinbeaker').style.visibility='hidden';
			document.getElementById('stoneinbeaker').style.visibility='hidden';
			document.getElementById('lockinbeaker').style.visibility='visible';
			document.getElementById('bobinbeaker').style.visibility='hidden';
			if(solid==0){//"earth"
				volumeincm3=25;
				finalVol=initVol+volumeincm3;
				if(finalVol=="75"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='visible';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}		
				
			}else if(solid==1){//"moon"
				volumeincm3=25;
				finalVol=initVol+volumeincm3;
				if(finalVol=="75"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='visible';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
			}else if(solid==2){//"mercury"
				volumeincm3=25;
				finalVol=initVol+volumeincm3;
				if(finalVol=="75"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='visible';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
			}
		
		}else if(imageClicked=="image2"){
			document.getElementById('zoomimage50').style.visibility='hidden';
			document.getElementById('zoomimage65').style.visibility='hidden';
			document.getElementById('zoomimage70').style.visibility='hidden';
			document.getElementById('zoomimage75').style.visibility='hidden';
			document.getElementById('zoomimage100').style.visibility='visible';
			document.getElementById("img3").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperinbeaker').style.visibility='hidden';
			document.getElementById('woodinbeaker').style.visibility='visible';
			document.getElementById('stoneinbeaker').style.visibility='hidden';
			document.getElementById('lockinbeaker').style.visibility='hidden';
			document.getElementById('bobinbeaker').style.visibility='hidden';
			if(solid==0){
				volumeincm3=50;
				finalVol=initVol+volumeincm3;
				if(finalVol=="100"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='visible';
					document.getElementById('water44').style.visibility='hidden';
				}
				
			}else if(solid=="moon"){
				volumeincm3=50;
				finalVol=initVol+volumeincm3;
				if(finalVol=="100"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='visible';
					document.getElementById('water44').style.visibility='hidden';
				}
			}else if(solid=="mercury"){
				volumeincm3=50;
				finalVol=initVol+volumeincm3;
				if(finalVol=="100"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='visible';
					document.getElementById('water44').style.visibility='hidden';
				}
			}
		
		}else if(imageClicked=="image3"){
			document.getElementById('zoomimage50').style.visibility='hidden';
			document.getElementById('zoomimage65').style.visibility='hidden';
			document.getElementById('zoomimage70').style.visibility='hidden';
			document.getElementById('zoomimage75').style.visibility='visible';
			document.getElementById('zoomimage100').style.visibility='hidden';
			document.getElementById("img4").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperinbeaker').style.visibility='hidden';
			document.getElementById('woodinbeaker').style.visibility='hidden';
			document.getElementById('stoneinbeaker').style.visibility='visible';
			document.getElementById('lockinbeaker').style.visibility='hidden';
			document.getElementById('bobinbeaker').style.visibility='hidden';
			if(solid==0){//"earth"
				volumeincm3=25;
				finalVol=initVol+volumeincm3;
				if(finalVol=="75"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='visible';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
				
			}else if(solid==1){//"moon"
				volumeincm3=25;
				finalVol=initVol+volumeincm3;
				if(finalVol=="75"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='visible';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
			}else if(solid==2){//"mercury"
				volumeincm3=25;
				finalVol=initVol+volumeincm3;
				if(finalVol=="75"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='visible';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='hidden';
				}
			}
		
		}else if(imageClicked=="image4"){
			document.getElementById('zoomimage50').style.visibility='hidden';
			document.getElementById('zoomimage65').style.visibility='visible';
			document.getElementById('zoomimage70').style.visibility='hidden';
			document.getElementById('zoomimage75').style.visibility='hidden';
			document.getElementById('zoomimage100').style.visibility='hidden';
			document.getElementById("img5").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById('copperinbeaker').style.visibility='hidden';
			document.getElementById('woodinbeaker').style.visibility='hidden';
			document.getElementById('stoneinbeaker').style.visibility='hidden';
			document.getElementById('lockinbeaker').style.visibility='hidden';
			document.getElementById('bobinbeaker').style.visibility='visible';
		

			if(solid==0){//"earth"
				volumeincm3=15;
				finalVol=initVol+volumeincm3;
				if(finalVol=="65"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='visible';
				}			
			}else if(solid==1){//"moon"
				volumeincm3=15;
				finalVol=initVol+volumeincm3;
				if(finalVol=="65"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='visible';
				}
			}else if(solid==2){//"mercury"
				volumeincm3=15;
				finalVol=initVol+volumeincm3;
				if(finalVol=="65"){
					document.getElementById('water').style.visibility='hidden';
					document.getElementById('water22').style.visibility='hidden';
					document.getElementById('water11').style.visibility='hidden';
					document.getElementById('water33').style.visibility='hidden';
					document.getElementById('water44').style.visibility='visible';
				}
			}
	
		}
	}else{
		document.getElementById('arrowimage1').style.visibility='visible';
		document.getElementById('zoomimage').style.visibility='visible';
		massCalculation();
	}
		
}
// first combobox selected function 
function combo(thelist, theinput)
{
	
	solid=document.getElementsByName('thelist').item(0).value;
	document.getElementById("answer1").value="";
  	document.getElementById("answer2").value="";
  	document.getElementById("answer3").value="";
  	document.getElementById("answer4").value="";
	if(test==0){
		massCalculation();
	}
	
	
}
// calculation of mass
	var springPos=document.getElementById("springimage").offsetTop;

function massCalculation(){
	
	document.getElementById("springimage").style.top=springPos;
		
	if(imageClicked=="image"){
			//var pos1=springPos-132+"%";
			var pos1=44+"%";
			document.getElementById("springimage").style.top=pos1;
			document.getElementsByName('thelist').disabled=true;
			document.getElementById("img1").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperimage').style.visibility='visible';
			document.getElementById('woodimage').style.visibility='hidden';
			document.getElementById('stoneimage').style.visibility='hidden';
			document.getElementById('lockimage').style.visibility='hidden';
			document.getElementById('bobimage').style.visibility='hidden';
			density=8500;
			volumeincm3=20;
			volumeinm3=volumeincm3/1000000;
			massinkg=density*volumeinm3;
			massing=massinkg*1000;
			
			if(solid==0){//"earth"
				massinSpring=Math.round((enviEarth*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviEarth;
				massohObj=(Math.round(massohObj)*100)/100;
				densityResult=massohObj/volumeincm3;
				
				if(massinSpring=="170"){
					document.getElementById('arrowimage').style.top=38+"%";
					document.getElementById('arrowimage1').style.top=56+"%";
				}
				
			}else if(solid==1){//"moon"
				massinSpring=Math.round((enviMoon*massing)/9.8);
				if(massinSpring=="28"){
					massinSpring=30;
				}
				massohObj=(massinSpring*9.8)/enviMoon;
				densityResult=massohObj/volumeincm3;
				
				
				if(massinSpring=="30"){
					document.getElementById('arrowimage').style.top=29+"%";
					document.getElementById('arrowimage1').style.top=37+"%";
				}
				
			}else if(solid==2){//"mercury"
				massinSpring=Math.round((enviMercury*massing)/9.8);
				if(massinSpring=="64"){
					massinSpring=65;
				}
				massohObj=(massinSpring*9.8)/enviMercury;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="65"){
					document.getElementById('arrowimage').style.top=32+"%";
					document.getElementById('arrowimage1').style.top=41.5+"%";
				}
				
				
			}
			
		}else if(imageClicked=="image1"){
			//var pos2=springPos+3+"px";
			var pos2=43+"%";
			document.getElementById("springimage").style.top=pos2;
			document.getElementById("img2").style.visibility='hidden';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperimage').style.visibility='hidden';
			document.getElementById('woodimage').style.visibility='hidden';
			document.getElementById('stoneimage').style.visibility='hidden';
			document.getElementById('lockimage').style.visibility='visible';
			document.getElementById('bobimage').style.visibility='hidden';

			density=8954;
			volumeincm3=25;
			volumeinm3=volumeincm3/1000000;
			massinkg=density*volumeinm3;
			massing=massinkg*1000;
			
			if(solid==0){//"earth"
				massinSpring=Math.round((enviEarth*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviEarth;
				massohObj=(Math.round(massohObj)*100)/100;
				if(massinSpring=="224"){
					massinSpring=225;
				}
				if(massohObj=="224"){
					massohObj=225;
				}
				densityResult=massohObj/volumeincm3;
				
				if(massinSpring=="225"){
					document.getElementById('arrowimage').style.top=41.5+"%";
					document.getElementById('arrowimage1').style.top=63+"%";
				}
				
				
			}else if(solid==1){//"moon"
				massinSpring=Math.round((enviMoon*massing)/9.8);
				if(massinSpring=="37"){
					massinSpring=35;
				}
				massohObj=(massinSpring*9.8)/enviMoon;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="35"){
					document.getElementById('arrowimage').style.top=29.5+"px";
					document.getElementById('arrowimage1').style.top=37.5+"%";
				}
				
			}else if(solid==2){//"mercury"
				massinSpring=Math.round((enviMercury*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviMercury;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="85"){
					document.getElementById('arrowimage').style.top=32.5+"%";
					document.getElementById('arrowimage1').style.top=44+"%";
				}
				
			}
			
		}else if(imageClicked=="image2"){
			//var pos3=springPos+1+"px";
			var pos3=45+"%";
			document.getElementById("springimage").style.top=pos3;
			document.getElementById("img3").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperimage').style.visibility='hidden';
			document.getElementById('woodimage').style.visibility='visible';
			document.getElementById('stoneimage').style.visibility='hidden';
			document.getElementById('lockimage').style.visibility='hidden';
			document.getElementById('bobimage').style.visibility='hidden';
			density=700;
			volumeincm3=50;
			volumeinm3=volumeincm3/1000000;
			massinkg=density*volumeinm3;
			massing=massinkg*1000;
		
			if(solid==0){//"earth"
				massinSpring=Math.round((enviEarth*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviEarth;
				massohObj=(Math.round(massohObj)*100)/100;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="35"){
					document.getElementById('arrowimage').style.top=30+"%";
					document.getElementById('arrowimage1').style.top=38+"%";
				}
			
			}else if(solid==1){//"moon"
				massinSpring=Math.round((enviMoon*massing)/9.8);
				if(massinSpring=="6"){
					massinSpring=5;
				}
				massohObj=(massinSpring*9.8)/enviMoon;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="5"){
					document.getElementById('arrowimage').style.top=130+"px";
					document.getElementById('arrowimage1').style.top=157+"px";
				}
				
			}else if(solid==3){//"mercury"
				massinSpring=Math.round((enviMercury*massing)/9.8);
				if(massinSpring=="13"){
					massinSpring=15;
				}
				massohObj=(massinSpring*9.8)/enviMercury;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="15"){
					document.getElementById('arrowimage').style.top=131+"px";
					document.getElementById('arrowimage1').style.top=162+"px";
				}
				
			}
			
		}else if(imageClicked=="image3"){
			//var pos4=springPos+2+"px";
			var pos4=45+"%";
			document.getElementById("springimage").style.top=pos4;
			document.getElementById("img4").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById("img5").style.visibility='visible';
			document.getElementById('copperimage').style.visibility='hidden';
			document.getElementById('woodimage').style.visibility='hidden';
			document.getElementById('stoneimage').style.visibility='visible';
			document.getElementById('lockimage').style.visibility='hidden';
			document.getElementById('bobimage').style.visibility='hidden';
			density=2600;
			volumeincm3=25;
			volumeinm3=volumeincm3/1000000;
			massinkg=density*volumeinm3;
			massing=massinkg*1000;

			if(solid==0){//"earth"
				massinSpring=Math.round((enviEarth*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviEarth;
				massohObj=(Math.round(massohObj)*100)/100;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="65"){
					document.getElementById('arrowimage').style.top=31.5+"%";
					document.getElementById('arrowimage1').style.top=42+"%";
				}
				
			}else if(solid==1){//"moon"
				massinSpring=Math.round((enviMoon*massing)/9.8);
				if(massinSpring=="11"){
					massinSpring=10;
				}
				massohObj=(massinSpring*9.8)/enviMoon;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="10"){
					document.getElementById('arrowimage').style.top=130+"px";
					document.getElementById('arrowimage1').style.top=160+"px";
				}
				
			}else if(solid==2){//"mercury"
				massinSpring=Math.round((enviMercury*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviMercury;
				densityResult=massohObj/volumeincm3;
				if(massinSpring=="25"){
					document.getElementById('arrowimage').style.top=134+"px";
					document.getElementById('arrowimage1').style.top=169+"px";
				}
				
			}
			
		}else if(imageClicked=="image4"){
			//var pos5=springPos+4+"px";
			var pos5=43+"%";
			document.getElementById("springimage").style.top=pos5;
			document.getElementById("img5").style.visibility='hidden';
			document.getElementById("img2").style.visibility='visible';
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img4").style.visibility='visible';
			document.getElementById("img1").style.visibility='visible';
			document.getElementById('copperimage').style.visibility='hidden';
			document.getElementById('woodimage').style.visibility='hidden';
			document.getElementById('stoneimage').style.visibility='hidden';
			document.getElementById('lockimage').style.visibility='hidden';
			document.getElementById('bobimage').style.visibility='visible';
			density=7753;
			volumeincm3=15;
			volumeinm3=volumeincm3/1000000;
			massinkg=density*volumeinm3;
			massing=massinkg*1000;
			
			if(solid==0){//"earth"
				massinSpring=Math.round((enviEarth*massing)/9.8);
				massohObj=(massinSpring*9.8)/enviEarth;
				massohObj=(Math.round(massohObj)*100)/100;
				
				if(massinSpring=="116"){
					massinSpring=115;
				}
				if(massohObj=="116"){
					massohObj=115;
				}
				densityResult=massohObj/volumeincm3;
				densityResult=roundNumber(densityResult,9);
				if(massinSpring=="115"){
					document.getElementById('arrowimage').style.top=34.5+"%";
					document.getElementById('arrowimage1').style.top=48.5+"%";
				}
				
			}else if(solid==1){//"moon"
				massinSpring=Math.round((enviMoon*massing)/9.8);
				if(massinSpring=="19"){
					massinSpring=20;
				}
				massohObj=(massinSpring*9.8)/enviMoon;
				densityResult=massohObj/volumeincm3;
				densityResult=roundNumber(densityResult,9);
				if(massinSpring=="20"){
					document.getElementById('arrowimage').style.top=133+"px";
					document.getElementById('arrowimage1').style.top=166+"px";
				}
				
			}else if(solid==2){//"mercury"
				massinSpring=Math.round((enviMercury*massing)/9.8);
				if(massinSpring=="44"){
					massinSpring=45;
				}
				massohObj=(massinSpring*9.8)/enviMercury;
				densityResult=massohObj/volumeincm3;
				densityResult=roundNumber(densityResult,9);
				if(massinSpring=="45"){
					document.getElementById('arrowimage').style.top=139.5+"px";
					document.getElementById('arrowimage1').style.top=181+"px";
				}
				
			}
			
		}
	
}
// function for second combobox selected 
function combo1(thelist1, theinput1)
{
  test=document.getElementsByName('thelist2').item(0).value;
  if(thelist1.options[thelist1.selectedIndex].value==0){
	  init();
	  	 			        
  }
  else{
	 init();
	 document.getElementById('zoomimage50').style.visibility='visible';
	 document.getElementById('water').style.visibility='visible';
	 document.getElementById('arrowimage').style.visibility='hidden';
	 document.getElementById("springimage").style.visibility='hidden';
	 document.getElementById('Mainimage').style.visibility='hidden';
	 document.getElementById('Mainimage2').style.visibility='visible';
			
  }
  document.getElementById("answer1").value="";
  document.getElementById("answer2").value="";
  document.getElementById("answer3").value="";
  document.getElementById("answer4").value="";
}
//function to check answer is correct or not 
function checkAnswer(){
		document.getElementById('result').style.visibility='visible';
		if(document.getElementById("answer1").value==""||
		document.getElementById("answer2").value==""||
		document.getElementById("answer3").value==""||
		document.getElementById("answer4").value==""){
			document.getElementById('result').innerHTML = gt.gettext('Please enter the values');
		}else if((Math.round((document.getElementById("answer1").value)*100)/100)==massinSpring&&
		(Math.round((document.getElementById("answer2").value)*100)/100)==massohObj&&
		(Math.round((document.getElementById("answer3").value)*100)/100)==volumeincm3&&
		roundNumber((Math.round((document.getElementById("answer4").value)*100)/100),2)==roundNumber(densityResult,2)){
			
			document.getElementById('result').innerHTML = gt.gettext('Good! Answer is correct');
		}else{
			
			document.getElementById('result').innerHTML = gt.gettext('Try Again!');
		}
		
	
	
}
//function to Show Tooltip 
function  showTooltip(e){
		document.getElementById("tooltip2").style.display="";		
		var leftPos=e.offsetLeft+4+"%";
		//var topPos=e.offsetTop+75+"%";	
		document.getElementById("tooltip2").style.left=leftPos;
		//document.getElementById("tooltip2").style.top=topPos;
		if (e.id=="img1"){	
			leftPos=e.offsetLeft+4+"%";
			//topPos=e.offsetTop+75+"%";	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;	
			document.getElementById("tooltip2").innerHTML=gt.gettext("Cylinder");
		}else if(e.id=="img2"){
			leftPos=e.offsetLeft+22+"%";
			//topPos=e.offsetTop+75+"%";	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;	
			document.getElementById("tooltip2").innerHTML=gt.gettext("Lock");
		}else if(e.id=="img3"){
			leftPos=e.offsetLeft+40+"%";
			//topPos=e.offsetTop+75+"%";	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;	
			document.getElementById("tooltip2").innerHTML=gt.gettext("Wood");
		}else if(e.id=="img4"){
			leftPos=e.offsetLeft+60+"%";
			//topPos=e.offsetTop+75+"%";	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;
			document.getElementById("tooltip2").innerHTML=gt.gettext("Stone");
		}else if(e.id=="img5"){
			leftPos=e.offsetLeft+76+"%";
			//topPos=e.offsetTop+72+"%";	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;
			document.getElementById("tooltip2").innerHTML=gt.gettext("Bob");
		}else if(e.id=="copperTagImg"){
			leftPos=e.offsetLeft+30+"px";
			//topPos=e.offsetTop+250+"px"	;	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;	
			document.getElementById("tooltip2").innerHTML=gt.gettext("Cylinder");
		}else if(e.id=="woodTagImg"){
			leftPos=e.offsetLeft+35+"%";
			//topPos=e.offsetTop+250+"px"	;	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;
			document.getElementById("tooltip2").innerHTML=gt.gettext("Wood");
		}else if(e.id=="steelBallImg"){
			leftPos=e.offsetLeft+40+"%";
			//topPos=e.offsetTop+250+"px"	;	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;
			document.getElementById("tooltip2").innerHTML=gt.gettext("Bob");
		}else if(e.id=="lockImg"){
			leftPos=e.offsetLeft+45+"%";
			//topPos=e.offsetTop+250+"px"	;
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;
			document.getElementById("tooltip2").innerHTML=gt.gettext("Lock");
		}else if(e.id=="stoneTagImg"){
			leftPos=e.offsetLeft+50+"%";
			//topPos=e.offsetTop+250+"px"	;	
			document.getElementById("tooltip2").style.left=leftPos;
			//document.getElementById("tooltip2").style.top=topPos;
			document.getElementById("tooltip2").innerHTML=gt.gettext("Stone");
		}
		document.getElementById("tooltip2").style.fontWeight = "bold";
		
			
}
//Hide tool tip of cuvettes
function  hideTooltip(){	
	document.getElementById("tooltip2").style.display="none";
}

//To change the cursor type
function changeCursor(){
	
	document.body.style.cursor='pointer';
}
function defaultCursor(){
	document.body.style.cursor='default';
}
function validate(evt) {
	
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //alert(key);
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;	
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function dotRestrict(e){
	var count=0;
	var str=e.value;
	var a1 = new Array();
	a1=str.split("");
	var len=a1.length;
	for(var i=0;i<len;i++){
		if(a1[i]=="."){
			count++;
		}
	}
	if(a1[len-1]=="."){
		e.value="";
		
	}
	if(count>1){
		e.value="";
	}
}
