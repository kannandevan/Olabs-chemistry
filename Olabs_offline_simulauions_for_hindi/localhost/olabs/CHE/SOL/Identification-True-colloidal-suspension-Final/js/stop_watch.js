/*
Developed under a Research grant from NMEICT, MHRD
by
Amrita CREATE (Center for Research in Advanced Technologies for Education),
VALUE (Virtual Amrita Laboratories Universalizing Education)
Amrita University, India 2009 - 2013
http://www.amrita.edu/create
*/
///////////// Initialising variables and arrays/////////////////////
var mup,secup,hup;
var op='start';
var timr;
var timrstatus=true;
var count=0,h=00,m=00,s=00,ms=00;
var topCountImg=0;
var topCount=106;
var solnDivHeight=70;
// Function for start time
function start(){
	if(timrstatus==true){		
		timr=setInterval("ticking()",1);
		timrstatus=false;		
	}
}
// Function for pause time
function pause(){clearInterval(timr);timrstatus=true;}
// Function for reset time
function stop(){clearInterval(timr);h=00;m=00;s=00;ms=00;document.getElementById('tickmin').innerHTML=h;document.getElementById('ticksec').innerHTML=m;document.getElementById('tickmsec').innerHTML=s;timrstatus=true;document.getElementById("startTxt").value=startArr[0]}
// Function for start time in the stop watch and correspnoding 
//changes in temperature in thermometer.
function ticking()
{
	if(s<60){
		s=s+01;
		mup=false;
		hup=false;
	}
	else if(s==60){
		s=00;
		mup=true;
	}
	if(mup==true && m<59){
		m=m+01;
	}
	if(m<20){
		topCount=topCount+.04;
		topCountImg=topCountImg+.04;
		solnDivHeight=solnDivHeight-0.04;
		$('#solnDarkBrown,#solnWhite,#solnBrown').css({top:bgTop+topCount+'px',height:solnDivHeight+'px'});
		$('#solnDarkBrownImg,#solnWhiteImg,#solnBrownImg').css({top:bgTop-topCountImg+'px'});		
	}
	if(m==20){
		pause();
		$("#inference").css({display:displayArray[0]});
		document.getElementById("startTxt").value=startArr[0];
		stopFlag=true;
		$('#bubblesBeaker1,#bubblesBeaker2,#bubblesBeaker3').fadeOut(4000);
	}
	document.getElementById('tickmin').innerHTML=h;
	document.getElementById('ticksec').innerHTML=m;
	document.getElementById('tickmsec').innerHTML=s;
	
}


///////////////////////////////////////////////////////////////////////










