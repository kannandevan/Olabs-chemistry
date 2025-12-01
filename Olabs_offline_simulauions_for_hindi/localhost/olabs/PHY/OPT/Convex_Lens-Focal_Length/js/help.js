// JavaScript Document
var trip;
var tripClickFlag=false;
var qusarr=[0,0,0],qusCnt=1;
$(document).ready(function() {
	$('#inference').bind('click',function(){
		$("#DropboxTest,#lensScreentDis").prop('disabled',true)
		$('#inference').css('pointer-events','none')
		removeTrip();
		helpcount=5;
		trip = new Trip([
			{
				sel : $('#inference'),
				position : 'w',
				content : inferenceMsg[0],
				expose : false,
				delay : 4000
			}
		]);
			trip.start(); 
		window.trip = trip;

		setTimeout(function(){
			// $("#DropboxTest").prop('disabled',true)
		
			qusFunction();
			$("#inference").css({'display':'none'});
		},5000)
	});

	function qusFunction(){
		var rand = Math.floor(Math.random() * 3);
		var nxtQusStatus;
		for(;;){
			if(qusarr[rand]==0){
				helpcount=3
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
					helpcount=0
					$("#DropboxTest,#lensScreentDis").prop('disabled',false)
					return;
				}
			}
		}
		gt = new Gettext({ 'domain' : 'messages' });
		switch(nxtQusStatus){
			case 0:
				QuizCoreExecuter(qusCnt,gt.gettext("When parallel rays incident at convex lens image formed at focal point is ___."),gt.gettext("Real"),gt.gettext("Virtual"),"","",gt.gettext("Real"), 1, 3);
				qusCnt++
				break;
			case 1:
				QuizCoreExecuter(qusCnt,gt.gettext("State the statement true or false.Focal length of the two convex lenses can add up"),gt.gettext("True"),gt.gettext("False"),"","",gt.gettext("False"), 1, 3);
				qusCnt++
				break;
			case 2:
				QuizCoreExecuter(qusCnt,gt.gettext("Convex lens of a focal length of 10 cm is placed near another convex lens of focal length of 20 cm.  What is the resultant focal length a convex lens? "),"30 cm","6.25 cm","","","6.25 cm", 1, 3);
				qusCnt++
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
			}]);
		} 
		else if(helpcount==1)
		{
			trip = new Trip([
			{
				sel : $('#lensScreentDis'),
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
				sel : $('#zoomAreaScale'),
				position : 'e',
				content :helpMsg[2] ,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#zoomAreaScale'),
				position : 'e',
				content :helpMsg[3] ,
				expose : false,
				delay : 4000
			}
		]);
		}
		else if(helpcount==3){
			trip = new Trip([
				{
					sel : $('.questionLayout'),
					position : 'w',
					content :helpMsg[4],
					expose : false,
					delay : 4000
				}]);
		}
		else if(helpcount==4){
			trip = new Trip([
			{
				sel : $('#DropboxTest'),
				position : 'e',
				content :helpMsg[0],
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
