// JavaScript Document
var trip;
var tripClickFlag=false;
var qusarr=[0,0,0],quscount=1;
$(document).ready(function() {
	
	
	$("#inference").click(function(){
		helpcount=5
		removeTrip()
		$("#DropboxTest,#ObjectLensDis,#LensScreenDis").prop('disabled',true)
		$("#inference").css({'pointer-events':'none'})
		if(infercount==0){
			trip = new Trip([
				{
					sel : $('#inference'),
					position : 'w',
					content : inferenceMsg[0],
					expose : false,
					delay : 7000
				}]); 
		}
		else if(infercount==1){
			trip = new Trip([
				{
					sel : $('#inference'),
					position : 'w',
					content : inferenceMsg[1],
					expose : false,
					delay : 7000
				}]); 
		}
		else if(infercount==2){
			trip = new Trip([
				{
					sel : $('#inference'),
					position : 'w',
					content : inferenceMsg[2],
					expose : false,
					delay : 7000
				}]); 
		}
		else if(infercount==3){
			trip = new Trip([
				{
					sel : $('#inference'),
					position : 'w',
					content : inferenceMsg[3],
					expose : false,
					delay : 7000
				}]); 
		}
		else if(infercount==4){
			trip = new Trip([
				{
					sel : $('#inference'),
					position : 'w',
					content : inferenceMsg[4],
					expose : false,
					delay : 7000
				}]); 
		}
		trip.start(); 
		window.trip = trip;

		setTimeout(function(){
			// $("#DropboxTest").prop('disabled',true)
			// helpcount=3
			qusFunction();
			$("#inference").css({'display':'none'});
		},8000)
	})
	function qusFunction(){
		var rand = Math.floor(Math.random() * 3);
		var nxtQusStatus;
		for(;;){
			if(qusarr[rand]==0){
				helpcount = 4;
				qusarr[rand] = 1;
				nxtQusStatus=rand;
				break;
			}
			else{
				var temp = 0;
				rand = Math.floor(Math.random() * 3);
				for(i=0;i<qusarr.length;i++){
					if(qusarr[i]==0){
						temp=1;
						break;
					}
				}
				if(temp==0){
					helpcount=0;
					$("#DropboxTest,#ObjectLensDis,#LensScreenDis").prop('disabled',false)
					return;
				}
			}
		}
		switch(nxtQusStatus){
			case 0:
				QuizCoreExecuter(quscount,gt.gettext("Using sign convention, focal length of convex lens is ____."),gt.gettext("Positive"),gt.gettext("Negative"),"","",gt.gettext("Positive"), 1, 3);
				quscount++;
				break;
			case 1:
				QuizCoreExecuter(quscount,gt.gettext("If you want to zoom out small letters in a paper, position of the paper will be ____."),gt.gettext("Beyond 2 times of focal length of convex lens"),gt.gettext("Between optical centre and focus of the convex lens"),"","",gt.gettext("Between optical centre and focus of the convex lens"), 1, 3);
				quscount++;
				break;
			case 2:
				QuizCoreExecuter(quscount,gt.gettext("An object is 16cm away from a convex lens and its image is formed 16cm away from the lens. What is focal length of convex lens?"),gt.gettext("9 cm"),gt.gettext("16 cm"),gt.gettext("8 cm"),"",gt.gettext("8 cm"), 1, 3);
				quscount++;
				break;
		}
	}


	$('#olabmenuBar li:first-child').bind('click',function(){
		removeTrip();
		tripClickFlag=true;
		if(helpcount==0)
		{
			trip = new Trip([
			{
				sel : $('#DropboxTest'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#ObjectLensDis'),
				position : 'e',
				content :helpMsg[1] ,
				expose : false,
				delay : 4000
			}]); 
		}
		else if(helpcount==1)
		{
			trip = new Trip([
			{
				sel : $('#ObjectLensDis'),
				position : 'e',
				content :helpMsg[1] ,
				expose : false,
				delay : 4000
			}]); 
		}
		else if(helpcount==2)
		{
			trip = new Trip([
			{
				sel : $('#LensScreenDis'),
				position : 'e',
				content :helpMsg[2] ,
				expose : false,
				delay : 4000
			}]); 
		}	
		else if(helpcount==3)
		{
			trip = new Trip([
			{
				sel : $('#inference'),
				position : 'w',
				content :helpMsg[3] ,
				expose : false,
				delay : 4000
			}]); 
		}	
		else if(helpcount==4)
		{
			trip = new Trip([
				{
					sel : $('.questionLayout'),
					position : 'w',
					content : helpMsg[4],
					expose : false,
					delay : 4000
				}]); 
		}
		else if(helpcount==5){

		}				
		trip.start(); 
		window.trip = trip;
	});
});
