// JavaScript Document


/// canvas for back ground image
var canvas = document.getElementById('bgCanvas');
canvas.width = 570;
canvas.height = 440;
var ctx = canvas.getContext('2d');

var img = new Image;

img.onload = function(){ ctx.drawImage(img,0,0);
  

 };
 
 
img.src=simPath+'images/bg.png';



var environments,select;
var massBlockTxt,roughTableTxt;
window.onload=function(){
document.getElementById("expName").innerHTML=gt.gettext("Force Required to Move a Wooden Block");
environments=[gt.gettext("Earth (g=9.8 m/s&#178;)"),gt.gettext('Moon (g=1.63 m/s&#178;)'),gt.gettext('Mars (g=3.69 m/s&#178;)')];
document.getElementById('varHead').innerHTML=gt.gettext("Variables");
document.getElementById('varTitle').innerHTML=gt.gettext("Select the Environment:");
select = document.getElementById("environmentcombo");
for(var i = 0; i <= environments.length-1; i++) {		
        var option = document.createElement('option');
        option.innerHTML = environments[i];
		option.value = i;
        select.add(option, i);
 }
massBlockTxt=gt.gettext("Mass of the block (Kg): ");
roughTableTxt=gt.gettext("Roughness of the table: ");
document.getElementById('midval1').innerHTML=massBlockTxt + 0.1;
document.getElementById('midval2').innerHTML=roughTableTxt+0.20;
document.getElementById('instructionVar').innerHTML=gt.gettext("Press on Applied force button to pull the wooden block");
document.getElementById('forceslider').value=gt.gettext("Applied force");
document.getElementById('reset').value=gt.gettext("Reset");
};

/// canvas for table image
var tableCanvas = document.getElementById('tableCanvas');
tableCanvas.width = 480;
tableCanvas.height = 400;
var tableCtx = tableCanvas.getContext('2d');

var tableImg = new Image;

tableImg.onload = function(){ tableCtx.drawImage(tableImg,0,0);
 };
tableImg.src=simPath+'images/table.png';

var blockCanvas = document.getElementById('blockCanvas');
blockCanvas.width = 120;
blockCanvas.height = 65;

var blockCtx = blockCanvas.getContext('2d');

var blockImg = new Image;

blockImg.onload = function(){ blockCtx.drawImage(blockImg,0,0);
 };
blockImg.src=simPath+'images/block.png';

/// canvas for springBal01 image
var springBal01Canvas = document.getElementById('springBal01Canvas');
springBal01Canvas.width = 480;
springBal01Canvas.height = 400;
var springBal01Ctx = springBal01Canvas.getContext('2d');

var springBal01Img = new Image;

springBal01Img.onload = function(){ springBal01Ctx.drawImage(springBal01Img,0,0);
 };
springBal01Img.src=simPath+'images/springBal01.png';

/// canvas for springBal02 image
var springBal02Canvas = document.getElementById('springBal02Canvas');
springBal02Canvas.width = 480;
springBal02Canvas.height = 400;
var springBal02Ctx = springBal02Canvas.getContext('2d');

var springBal02Img = new Image;

springBal02Img.onload = function(){ springBal02Ctx.drawImage(springBal02Img,0,0);
 };
//springBal02Img.src=simPath+'images/springBal02.png';

/// canvas for spring02 image
var spring02Canvas = document.getElementById('spring02Canvas');
//spring02Canvas.width = 480;
spring02Canvas.height = 400;
var spring02Ctx = spring02Canvas.getContext('2d');

var spring02Img = new Image;

spring02Img.onload = function(){ spring02Ctx.drawImage(spring02Img,0,0);
 };
spring02Img.src=simPath+'images/spring02.png';



var bal_posX=document.getElementById("springBal02Canvas").offsetLeft;
var spring_posX=document.getElementById("spring02Canvas").offsetLeft;
var poin1_posX=document.getElementById("pointer01").offsetLeft-8;
//var poin2_posX=document.getElementById("pointer02").offsetLeft;
var scale1_posX=document.getElementById("scaleImg01").offsetLeft+28;
//var scale2_posX=document.getElementById("scaleImg02").offsetLeft;
var mark1_posX=document.getElementById("mark01").offsetLeft-8;
//var mark2_posX=document.getElementById("mark02").offsetLeft;

var forceArray=new Array("0.1","0.2","0.3","0.4","0.5","0.6","0.7","0.8","0.9","1.0",
"1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2.0",
"2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","3.0",
"3.1","3.2","3.3","3.4","3.5","3.6","3.7","3.8","3.9","4.0",
"4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","4.9","5.0");

var pixArray=new Array("-246","-252","-258","-264","-269", "-274", "-280",
"-285", "-290", "-296", "-302","307", "-312", "-318", "-324", "-330", "-335", "-340", 
"-346", "-352","-357", "-363", "-368", "-373", "-379", "-384", "-389", "-396", "-401",
 "-406", "-412", "-418","-423", "-428", "-435", "-440","-445", "-451", "-456", "-463", 
 "-468", "-474", "-480", "-489", "-495", "-500", "-506", "-512","-519");

var envirnflag=1;
var g=9.8;
var force=0;
var val1=1;
var currVal=1;
var prevVal=1;
var springval1=0;
var springval2=0;
var reduced=0;
var pix,newScale1,newScale2,balNew,newMark1;
var scaleImg01Left;
var forceInitial=1;
var markVal=0;
var int1;
function showforce()
{
	int1=setInterval(function(){showforce1()},100);
}
function pullStill(){
	clearInterval(int1)
}
function showforce1()
{   
	forceInitial=forceInitial+0.1;
	val=forceInitial.toFixed(1);
	prevVal=currVal;
	currVal=val;
		
	if(val>10)
	{	
	
		document.getElementById("forceslider").disabled=true;
		//val1=1;
	/*		if ( $.browser.mozilla == true){
					$('.forceslider').slider({ 
						disabled:true
			});
		}*/

	}
	else{
		
		if(currVal>prevVal)
		{	
	
			var balNew=bal_posX+4*Number(val);
			var springNew=spring_posX+8*Number(val);
			var newPoint1=poin1_posX+13*Number(val/2);
			newScale1=scale1_posX-61.5*Number(val/2);
			newScale2=scale1_posX-61.5*Number(val1/2);
			newMark1=mark1_posX+13*Number(val/2);
			
			//document.getElementById("spring02Canvas").style.left=springNew+"px";
			//document.getElementById("scaleImg01").style.left=Number(newScale1).toFixed(1)+"px";
			//document.getElementById("mark01").style.left=newMark1+"px";
			findforce();
		var roundedforce=Number(force).toFixed(1);
	
		for(var i=0;i<forceArray.length;i++)
		{
			if(forceArray[i]==roundedforce)
			{
				pix=pixArray[i];
			}
		}
		//document.getElementById("fforce").innerHTML=roundedforce+"    "+pix+"  "+document.getElementById("scaleImg01").style.left;
			
		if(newScale1<=pix)
		{
			document.getElementById("massslider").disabled=true;
			document.getElementById("roughslider").disabled=true;
	/*		if ( $.browser.mozilla == true){
				
				 $('.massslider').slider({ 
					disabled:true
					
				 });
				 $('.roughslider').slider({ 
					disabled:true
					
				 });
			
			}	*/			
			springval2=springval1;			
			var prvPos=$('#blockCanvas').position().left;
			document.getElementById("blockCanvas").style.left=-newScale2/1.3-160+"px";			
			var  curPos=$('#blockCanvas').position().left;
			document.getElementById("springBal01Canvas").style.left=-newScale2/1.3-75+"px";				
			var diff=curPos-prvPos;
			var k= $('#mark01').position().left + diff;
			var s=$('#spring02Canvas').position().left+ diff ;
			document.getElementById("mark01").style.left=+k+"px";
			document.getElementById("spring02Canvas").style.left=+s+"px";
			document.getElementById("scaleImg01").style.left=scaleImg01Left+"px";			
 			val1=val1+0.1;
			if((-newScale2/1.3-75)>500){
				document.getElementById("forceslider").disabled=true;
				alert('Please reset and try again ');				
			}
			
			
		}else{
			document.getElementById("spring02Canvas").style.left=-newScale2/1.3+springNew-190+"px";			
			document.getElementById("scaleImg01").style.left=Number(newScale1).toFixed(1)+"px";
		    document.getElementById("mark01").style.left=-newScale2/1.3+newMark1-185+"px";	
			var pos = $('#scaleImg01');
			var position=pos.position();
			scaleImg01Left=position.left+5;
			
		}
	}
}

}


function selectenvirn(val)
{
	
	if(val=="earth")
	{
		envirnflag=1;
		g=9.8;
	}
	else if(val=="moon")
	{
		envirnflag=2;
		g=1.6;
	}
	else if(val=="mars")
	{
		envirnflag=3;
		g=3.8
	}

	
	
}
function roughValue(val)
{
	
	document.getElementById("midval2").innerHTML=roughTableTxt+Number(val).toFixed(2);
	 // $("#midval2").text(val.toFixed(2));
	
}
function massValue(val)
{   
	document.getElementById("midval1").innerHTML=massBlockTxt+Number(val).toFixed(1);

}
 
function findforce()
{
	 var massSlider=document.getElementById("massslider");
	 var frictionSlider=document.getElementById("roughslider");
	 //console.log(massSlider.value+"qwer"+frictionSlider.value);
	 force=massSlider.value*frictionSlider.value*g;
	 force=Number(force).toFixed(2);
	}

function resetFn()
{
/*			envirnflag=1;
			g=9.8;
			force=0;
			val1=1;
			currVal=1;
			prevVal=1;
			if ( $.browser.mozilla == true){
			$('.forceslider').slider({ 
				disabled:false,
				value:1
				
			 });
			 $('.massslider').slider({ 
			 disabled:false,
				value:0.1
				
			 });
			 $('.roughslider').slider({
				 disabled:false, 
				value:0.2
				
			 });
		
	}		
			document.getElementById("massslider").disabled=false;
			document.getElementById("roughslider").disabled=false;
			document.getElementById("forceslider").disabled=false;
			document.getElementById("massslider").value=0.1;
			document.getElementById("roughslider").value=0.2;
			//document.getElementById("forceslider").value=1;
			document.getElementById("environmentcombo").selectedIndex=0;
			
			document.getElementById("springBal01Canvas").style.left=64+"px";
			document.getElementById("spring02Canvas").style.left=160+"px";
			document.getElementById("scaleImg01").style.left=-240+"px";
			document.getElementById("mark01").style.left=195+"px"; 
			
			document.getElementById("blockCanvas").style.left=26+"px";
			document.getElementById("springBal01Canvas").style.left=110+"px";
			forceInitial=1;
			clearInterval(int1);*/
window.location.reload();
}
//};