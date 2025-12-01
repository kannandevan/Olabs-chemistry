// JavaScript Document

$(document).ready(function() {

	//$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
	tripClickFlag=true;
	instruction(); 
});
	function instruction(){
		commonMsg();
	if($("#theinput").find(':selected').val()==0){
		myTripStartMsg0(tripMsg);
	}if($("#theinput").find(':selected').val()==1){
		myTripStartMsg1(tripMsg);
	}if(($("#theinput").find(':selected').val()==2) ){
			myTripStartMsg2(tripMsg,tripMsg1);
	}if($("#theinput").find(':selected').val()==3){
		myTripStartMsg3(tripMsg)
	}if($("#theinput").find(':selected').val()==4){
		myTripStartMsg4(tripMsg,tripMsg3,tripMsg4)
	}
}
	
	function myTripStart(newContent){
		var trip1 = new Trip([
       {
            sel : $('#informIcon'),
            position : 'e',
            content : newContent,
            expose : false,
            delay : 4000,
        },
	]);
		trip1.start();
		}
		
	function myTripStartMsg0(newContentMsg){
		 trip = new Trip([
       {
            sel : $('#theinput'),
            position : 'e',
            content : listArray[0],
            expose : false,
            delay : 3000
        },
		
		{
            sel : $('#compoundSideMenu'),
            position : 'e',
            content : listArray[1],
            expose : false,
            delay : 3000,
        },
       {
		    sel : $('#rodDiv'),
            position : 'w',
            content : newContentMsg,
            expose : false,
            delay : 4000,
			
        },
	  ]);
		trip.start();
		}
	function myTripStartMsg1(newContentMsg){
		trip = new Trip([
       {
            sel : $('#theinput'),
            position : 'e',
            content : listArray[0],
            expose : false,
            delay : 3000
        },
		 
		{
            sel : $('#compoundSideMenu'),
            position : 'e',
            content : listArray[1],
            expose : false,
            delay : 3000,
        },
       {
		    sel : $('#magnetDiv'),
            position : 'e',
            content : newContentMsg,
            expose : false,
            delay : 4000,
        },
		
	]);
		trip.start();
		}
	function myTripStartMsg2(newContentMsg,newContentMsg1){
		 trip = new Trip([
       {
            sel : $('#theinput'),
            position : 'e',
            content : listArray[0],
            expose : false,
            delay : 3000
        },
		
		{
            sel : $('#compoundSideMenu'),
            position : 'e',
            content : listArray[1],
            expose : false,
            delay : 3000,
        },
       {
		    sel : $('#dropperDiv1'),
            position : 'n',
            content : newContentMsg,
            expose : false,
            delay : 4000,
        },
		{
            sel : $('#tubeDiv'),
            position : 'e',
            content : newContentMsg1,
            expose : false,
            delay : 4000
        },
		
	]);
		trip.start();
		}
	
	function myTripStartMsg3(newContentMsg){
		 trip = new Trip([
       {
            sel : $('#theinput'),
            position : 'e',
            content : listArray[0],
            expose : false,
            delay : 3000
        },
		
		{
            sel : $('#compoundSideMenu'),
            position : 'e',
            content : listArray[1],
            expose : false,
            delay : 3000,
        },
		
       {
		    sel : $('#switchOff'),
            position : 's',
            content : newContentMsg,
            expose : false,
            delay : 4000,
        },
	]);
		trip.start();
		}
	
	function myTripStartMsg4(newContentMsg,newContentMsg1,newContentMsg2){
		 trip = new Trip([
       {
            sel : $('#theinput'),
            position : 'e',
            content : listArray[0],
            expose : false,
            delay : 3000
        },
		
		{
            sel : $('#compoundSideMenu'),
            position : 'e',
            content : listArray[01],
            expose : false,
            delay : 4000,
        },
       {
		    sel : $('#flameTooltip'),
            position : 's',
            content : newContentMsg,
            expose : false,
            delay : 4000,
        },
		 {
		    sel : $('#bentTubeDiv1'),
            position : 'w',
            content : newContentMsg1,
            expose : false,
            delay : 4000,
        },
		{
		    sel : $('#matchStickdiv'),
            position : 'w',
            content : newContentMsg2,
            expose : false,
            delay : 4000,
        },
		
	]);
		trip.start();
		}
	
		
var tripContent;
var tripMsg;
function common(){
	if(test==0){
		if(mix=='mixtureDivSideMenu'){
			tripContent=contentArray[0];
		}if(mix=='compoundDivSideMenu'){
			tripContent=contentArray[1];
		}
	}
	if(test==1){
		if(mix=='mixtureDivSideMenu'){
			tripContent=contentArray[2];
		}if(mix=='compoundDivSideMenu'){
			tripContent=contentArray[3];
		}
	}
	if(test==2){
		if(mix=='mixtureDivSideMenu'){
			if(inform1Flag==1){
				tripContent=contentArray[4];
			}else{
				tripContent=contentArray[5];
			}
		}if(mix=='compoundDivSideMenu'){
			tripContent=contentArray[6];
		}
	}
	if(test==3){
		if(mix=='mixtureDivSideMenu'){
			tripContent=contentArray[7];
		}if(mix=='compoundDivSideMenu'){
			tripContent=contentArray[8];
		}
	}
	if(test==4){
		if(mix=='mixtureDivSideMenu'){
			tripContent=contentArray[9];
		}if(mix=='compoundDivSideMenu'){
			tripContent=contentArray[10];
		}
	}
}
function commonMsg(){
	if(test==0){
		if(mix=='mixtureDivSideMenu'){
			tripMsg=instrctnArray[0];
		}if(mix=='compoundDivSideMenu'){
			tripMsg=instrctnArray[1];
		}
	}
	if(test==1){
		if(mix=='mixtureDivSideMenu'){
			tripMsg=instrctnArray[2];
		}if(mix=='compoundDivSideMenu'){
			tripMsg=instrctnArray[3];
		}
	}if(test==2){
		if(mix=='mixtureDivSideMenu'){
			tripMsg=instrctnArray[4];
			tripMsg1=instrctnArray[5];
		}if(mix=='compoundDivSideMenu'){
			tripMsg=instrctnArray[4];
			tripMsg1=instrctnArray[6];
		}
	}if(test==3){
			tripMsg=instrctnArray[7];
	}if(test==4){
		if(mix=='mixtureDivSideMenu'){
			tripMsg=instrctnArray[7];
			tripMsg3=instrctnArray[8];
			tripMsg4=instrctnArray[9];
			tripMsg5=instrctnArray[10];
		}if(mix=='compoundDivSideMenu'){
			tripMsg=instrctnArray[7];
			tripMsg3=[];tripMsg4=[];tripMsg5=[];
		}
	}
}
	$('#informIcon').bind('click',function(){
			common();
			myTripStart(tripContent);								 
	});
	
});