var trip;
var tripClickFlag=false;
$(document).ready(function() {	
//$('#olabmenuBar li:first-child a').html("HELP");
$('#simHelp').bind('click',function(){
    tripClickFlag=true;	
        if(help==0){
			{	
                //alert();	
				trip = new Trip([
					{
						sel : $("#text"),
						position : 's',
						content : helpMsg[0],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
        else if(help==1){
			{	
                //alert();	
				trip = new Trip([
					{
						sel : $("#check"),
						position : 's',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#voltmeterPostiv"),
						position : 'w',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#voltmeterNagativ"),
						position : 'e',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#cellPostiv"),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
        else if(help==5){
			{	
                //alert();	
				trip = new Trip([
					{
						sel : $("#cellNagativ"),
						position : 'e',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#keyRight"),
						position : 'n',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#key"),
						position : 's',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#Next2"),
						position : 'w',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#key1"),
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#DropnVoltCel"),
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
						sel : $("#Next3"),
						position : 'w',
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
						sel : $("#Next4"),
						position : 'w',
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
                //alert();	
				trip = new Trip([
					{
						sel : $("#key2"),
						position : 's',
						content : helpMsg[13],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
        else if(help==14){
			{	
                //alert();	
				trip = new Trip([
					{
						sel : $("#DropnVoltCel1"),
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
						sel : $("#Next5"),
						position : 'w',
						content : helpMsg[15],
						expose : false,
						delay : 5000
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
						sel : $("#Next6"),
						position : 'w',
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
						sel : $("#key3"),
						position : 's',
						content : helpMsg[17],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
        else if(help==18){
			{	
                //alert();	
				trip = new Trip([
					{
						sel : $("#DropnVoltCel2"),
						position : 's',
						content : helpMsg[18],
						expose : false,
						delay : 5000
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
						sel : $("#Next7"),
						position : 'w',
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
						sel : $("#simReset"),
						position : 's',
						content : helpMsg[20],
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


