var trip;
var tripClickFlag=false;
$(document).ready(function() {	
$('#olabmenuBar li:first-child a').html("HELP");
$('#olabmenuBar li:first-child').bind('click',function(){
    tripClickFlag=true;	
        if(help==0){
			{		
				trip = new Trip([
					{
						sel : $("#questionNumber1"),
						position : 'w',
						content : helpMsg[0],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
        else if(help==1){
			{		
				trip = new Trip([
					{
						sel : $("#hclDrop"),
						position : 'w',
						content : helpMsg[1],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==2){
			{		
				trip = new Trip([
					{
						sel : $("#sodiHyDrop"),
						position : 's',
						content : helpMsg[2],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==3){
			{		
				trip = new Trip([
					{
						sel : $("#sodiClDrop"),
						position : 's',
						content : helpMsg[3],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==4){
			{		
				trip = new Trip([
					{
						sel : $("#NextClick1"),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==5){
			{		
				trip = new Trip([
					{
						sel : $("#checkDrop"),
						position : 's',
						content : helpMsg[5],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==6){
			{		
				trip = new Trip([
					{
						sel : $("#twoNailDrop"),
						position : 's',
						content : helpMsg[6],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==7){
			{		
				trip = new Trip([
					{
						sel : $("#nailDraw"),
						position : 'w',
						content : helpMsg[7],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==8){
			{		
				trip = new Trip([
					{
						sel : $("#uncheckDrop"),
						position : 's',
						content : helpMsg[8],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==9){
			{		
				trip = new Trip([
					{
						sel : $("#batteryEnd"),
						position : 's',
						content : helpMsg[9],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==10){
			{		
				trip = new Trip([
					{
						sel : $("#bulbLeft"),
						position : 's',
						content : helpMsg[10],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==11){
			{		
				trip = new Trip([
					{
						sel : $("#Nail"),
						position : 'e',
						content : helpMsg[11],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==12){
			{		
				trip = new Trip([
					{
						sel : $("#keybulGlow"),
						position : 's',
						content : helpMsg[12],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==13){
			{		
				trip = new Trip([
					{
						sel : $("#NextClick2"),
						position : 'w',
						content : helpMsg[13],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==14){
			{		
				trip = new Trip([
					{
						sel : $("#keybulGlowA"),
						position : 's',
						content : helpMsg[14],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==15){
			{		
				trip = new Trip([
					{
						sel : $("#NextClick3"),
						position : 'w',
						content : helpMsg[15],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==16){
			{		
				trip = new Trip([
					{
						sel : $("#keybulGlowB"),
						position : 's',
						content : helpMsg[16],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==17){
			{		
				trip = new Trip([
					{
						sel : $("#NextClick4"),
						position : 'w',
						content : helpMsg[17],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==18){
			{		
				trip = new Trip([
					{
						sel : $("#questionNumber2"),
						position : 'w',
						content : helpMsg[18],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==19){
			{		
				trip = new Trip([
					{
						sel : $("#keybulGlowC"),
						position : 's',
						content : helpMsg[19],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==20){
			{		
				trip = new Trip([
					{
						sel : $("#NextClick5"),
						position : 'w',
						content : helpMsg[20],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==21){
			{		
				trip = new Trip([
					{
						sel : $("#keybulGlowD"),
						position : 's',
						content : helpMsg[21],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==22){
			{		
				trip = new Trip([
					{
						sel : $("#NextClick6"),
						position : 'w',
						content : helpMsg[22],
						expose : false,
						delay : 3000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==23){
			{		
				trip = new Trip([
					{
						sel : $("#resetfig3"),
						position : 'e',
						content : helpMsg[23],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
    });
});
