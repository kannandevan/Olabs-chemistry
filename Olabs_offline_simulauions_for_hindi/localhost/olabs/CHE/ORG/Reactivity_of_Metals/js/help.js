// JavaScript Document
$(document).ready(function() {

		
	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	var winWidth=$(window).width();	

	//$('#olabmenuBar li:first-child a').html(helpLabel);
	
$('#olabmenuBar li:first-child').bind('click',function(){
	$(".content").scrollTop(0);
	tripClickFlag=1;
	
	if(percent=="0"|| winWidth<768){
		 $("#wrapper").removeClass("toggled");
		 var trip = new Trip([
		   {
				sel : $('#thelist0'),
				position : 'e',
				content : listArray[0],
				expose : false,
				delay : 3000
			},
			 {
				sel : $('#thelist1'),
				position : 'e',
				content : listArray[1],
				expose : false,
				delay : 3000
			}, 
			 {
				sel : $('#thelist2'),
				position : 'e',
				content :listArray[2], 
				expose : false,
				delay : 3000
			}, 
			 {
				sel : $('#thelist3'),
				position : 'e',
				content :listArray[3] ,
				expose : false,
				delay : 3000
			}, 
			{
				sel : $('#forcepsdiv'),
				position : 'w',
				content :listArray[4], 
				expose : false,
				delay : 5000
			},
		], {
			onTripStart : function() {
				console.log("onTripStart");
			},
			onTripEnd : function() {
				console.log("onTripEnd");
			},
			onTripStop : function() {
				console.log("onTripStop");
			},
			backToTopWhenEnded : true,
			delay : 2000
		});
			trip.start(); 
			window.trip = trip;
	}
	
	else{
		var trip = new Trip([
		   {
				sel : $('#thelist0'),
				position : 'e',
				content : listArray[0],
				expose : false,
				delay : 3000
			},
			 {
				sel : $('#thelist1'),
				position : 'e',
				content : listArray[1],
				expose : false,
				delay : 3000
			}, 
			 {
				sel : $('#thelist2'),
				position : 'e',
				content :listArray[2], 
				expose : false,
				delay : 3000
			}, 
			 {
				sel : $('#thelist3'),
				position : 'e',
				content :listArray[3] ,
				expose : false,
				delay : 3000
			}, 
			{
				sel : $('#forcepsdiv'),
				position : 'w',
				content :listArray[4], 
				expose : false,
				delay : 5000
			},
		], {
			onTripStart : function() {
				console.log("onTripStart");
			},
			onTripEnd : function() {
				console.log("onTripEnd");
			},
			onTripStop : function() {
				console.log("onTripStop");
			},
			backToTopWhenEnded : true,
			delay : 2000
		});
			trip.start(); 
			window.trip = trip;
	}	
})

	

//common function to display inference msf for beakerA,B,C 
function common(){
//for Aluminium
if(e.selectedIndex==0){
	for(var i=0;i<beakerSolnAlA.length;i++){
		if(beakerA==beakerSolnAlA[i] ){
			tripContentA=contentArrayAl[i];
		}if(beakerB==beakerSolnAlA[i] ){
			tripContentB=contentArrayAl[i];
		}if(beakerC==beakerSolnAlA[i] ){
			tripContentC=contentArrayAl[i];
		}
	}
}
//for zinc	
if(e.selectedIndex==1){
	for(var p=0;p<beakerSolnZnA.length;p++){
		if(beakerA==beakerSolnZnA[p] ){
			tripContentA=contentArrayZn[p];
		}if(beakerB==beakerSolnZnA[p] ){
			tripContentB=contentArrayZn[p];
		}if(beakerC==beakerSolnZnA[p] ){
			tripContentC=contentArrayZn[p];
		}
	}
}
//for Iron	
if(e.selectedIndex==2){
	for(var a=0;a<beakerSolnFeA.length;a++){
		if(beakerA==beakerSolnFeA[a] ){
			tripContentA=contentArrayFe[a];
		}if(beakerB==beakerSolnFeA[a] ){
			tripContentB=contentArrayFe[a];
		}if(beakerC==beakerSolnFeA[a] ){
			tripContentC=contentArrayFe[a];
		}
	}
}
//for copper	
if(e.selectedIndex==3){
	for(var l=0;l<beakerSolnCuA.length;l++){
		if(beakerA==beakerSolnCuA[l] ){
			tripContentA=contentArrayCu[l];
		}if(beakerB==beakerSolnCuA[l] ){
			tripContentB=contentArrayCu[l];
		}if(beakerC==beakerSolnCuA[l] ){
			tripContentC=contentArrayCu[l];
		}
	}
}
}
	//function - inference msg for beaker A
	function myTripStartA(newContentA){
		var trip1 = new Trip([
       {
            sel : $('#informIconA'),
            content : newContentA,
            expose : false,
            delay : 5000,
        },
	]);
		trip1.start();
		}
	$('#informIconA').bind('click',function(){
			common();
			myTripStartA(tripContentA);								 
	});
	
	//function - inference msg for beaker B
	function myTripStartB(newContentB){
		var trip2 = new Trip([
       {
            sel : $('#informIconB'),
            content : newContentB,
            expose : false,
            delay : 5000,
        },
	]);
		trip2.start();
		}
	$('#informIconB').bind('click',function(){
			common();
			myTripStartB(tripContentB);								 
	});
	
	//function - inference msg for beaker C
	function myTripStartC(newContentC){
		var trip3 = new Trip([
       {
            sel : $('#informIconC'),
            content : newContentC,
            expose : false,
            delay : 5000,
        },
	]);
		trip3.start();
		}
	$('#informIconC').bind('click',function(){
			common();
			myTripStartC(tripContentC);								 
	});
	
});