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
						sel : $("#dragHclDrop"),
						position : 'n',
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
				trip = new Trip([
					{
						sel : $("#dragClyDrop"),
						position : 'n',
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
						sel : $("#dragAniDrop"),
						position : 'n',
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
						sel : $("#dragAniClyDrop"),
						position : 'n',
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
						sel : $("#dragRodDrop"),
						position : 'n',
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
				trip = new Trip([
					{
						sel : $("#dragBeakDrop"),
						position : 'n',
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
						sel : $("#dragTermoDrop"),
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
				trip = new Trip([
					{
						sel : $("#info"),
						position : 'e',
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
						sel : $("#clickNext"),
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
		else if(help==9)
		{
			{		
				trip = new Trip([
					{
						sel : $("#dropSodiPap"),
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
		else if(help==10)
		{
			{		
				trip = new Trip([
					{
						sel : $("#rodDrop"),
						position : 'n',
						content : helpMsg[10],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }
		else if(help==11)
		{
			{		
				trip = new Trip([
					{
						sel : $("#bekDrop"),
						position : 'n',
						content : helpMsg[11],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==12)
		{
			{		
				trip = new Trip([
					{
						sel : $("#solBekDrop"),
						position : 'n',
						content : helpMsg[12],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==13)
		{
			{		
				trip = new Trip([
					{
						sel : $("#solBekDropIce"),
						position : 'n',
						content : helpMsg[13],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }  
		else if(help==14)
		{
			{		
				trip = new Trip([
					{
						sel : $("#aniDropBeak"),
						position : 'n',
						content : helpMsg[14],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }   
		else if(help==15)
		{
			{		
				trip = new Trip([
					{
						sel : $("#aniClyDropBeak"),
						position : 'n',
						content : helpMsg[15],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==16)
		{
			{		
				trip = new Trip([
					{
						sel : $("#hclDropBeak"),
						position : 'n',
						content : helpMsg[16],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }    
		else if(help==17)
		{
			{		
				trip = new Trip([
					{
						sel : $("#hclClyDropBeak"),
						position : 'n',
						content : helpMsg[17],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==18)
		{
			{		
				trip = new Trip([
					{
						sel : $("#benDropBeak"),
						position : 'n',
						content : helpMsg[18],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }               
		else if(help==19)
		{
			{		
				trip = new Trip([
					{
						sel : $("#glasRodBek"),
						position : 'n',
						content : helpMsg[19],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    }  
		else if(help==20)
		{
			{		
				trip = new Trip([
					{
						sel : $("#benIceBath"),
						position : 'n',
						content : helpMsg[20],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==21)
		{
			{		
				trip = new Trip([
					{
						sel : $("#inforFig2"),
						position : 'e',
						content : helpMsg[21],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==22)
		{
			{		
				trip = new Trip([
					{
						sel : $("#clickNext2"),
						position : 'w',
						content : helpMsg[22],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==23)
		{
			{		
				trip = new Trip([
					{
						sel : $("#foldPaper"),
						position : 's',
						content : helpMsg[23],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==24)
		{
			{		
				trip = new Trip([
					{
						sel : $("#beakDropSamp"),
						position : 'n',
						content : helpMsg[24],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==25)
		{
			{		
				trip = new Trip([
					{
						sel : $("#drySamOnBeak"),
						position : 's',
						content : helpMsg[25],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==26)
		{
			{		
				trip = new Trip([
					{
						sel : $("#cclDrop"),
						position : 'e',
						content : helpMsg[26],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==27)
		{
			{		
				trip = new Trip([
					{
						sel : $("#oneSideTube"),
						position : 'n',
						content : helpMsg[27],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==28)
		{
			{		
				trip = new Trip([
					{
						sel : $("#onSwitch"),
						position : 's',
						content : helpMsg[28],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==29)
		{
			{		
				trip = new Trip([
					{
						sel : $("#rapOnSwitch"),
						position : 's',
						content : helpMsg[29],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==30)
		{
			{		
				trip = new Trip([
					{
						sel : $("#tubeDrop"),
						position : 'n',
						content : helpMsg[30],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==31)
		{
			{		
				trip = new Trip([
					{
						sel : $("#termoDropMel"),
						position : 's',
						content : helpMsg[31],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==32)
		{
			{		
				trip = new Trip([
					{
						sel : $("#rotateHeat"),
						position : 'w',
						content : helpMsg[32],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
	    } 
		else if(help==33)
		{
			{		
				trip = new Trip([
					{
						sel : $("#yelllowLight"),
						position : 'w',
						content : helpMsg[33],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
		}
		else if(help==34)
		{
			{		
				trip = new Trip([
					{
						sel : $("#inforFig3"),
						position : 'e',
						content : helpMsg[34],
						expose : false,
						delay : 5000
					}
                ]);
				trip.start(); 
				window.trip = trip;
		    }
		}
		else if(help==35){
			{		
				$(".content").animate({ 'scrollTop': '500px' },function(){
					trip = new Trip([
						{
							sel : $("#resetfig3"),
							position : 'e',
							content : helpMsg[35],
							expose : false,
							delay : 5000
						}
					]);
					trip.start(); 
					window.trip = trip;
				})	
		    }
	    }
    })   
	$('#inference').bind('click',function(){
		trip = new Trip([
		{
		sel : $('#inference'),
		position : 'e',
		content : theInference[0],
		expose : false,
		delay : 10000
		}]);
		trip.start();
		window.trip = trip;
	});
	$('#inferencefig2').bind('click',function(){
		trip = new Trip([
		{
		sel : $('#inferencefig2'),
		position : 'e',
		content : theInference[1],
		expose : false,
		delay : 10000

		}]);
		trip.start();
		window.trip = trip;
	});
	$('#inferencefig3').bind('click',function(){
		trip = new Trip([
		{
		sel : $('#inferencefig3'),
		position : 'e',
		content : theInference[2],
		expose : false,
		delay : 10000
		}]);
		trip.start();
		window.trip = trip;
	});
});
