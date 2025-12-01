var tripFlag=false;
var trip
$(document).ready(function() {
	$('#simHelp').bind('click',function(){
		removeTrip();
		tripFlag=true;
		
		if(helpcount ==0)
		{
			trip = new Trip([
			{
				sel : $('#calorimeterCapDiv'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			}]);
				
			
		}
		else if(helpcount ==1)
		{
			trip = new Trip([
				{
					sel : $('#thermometer'),
					position : 's',
					content :helpMsg[1] ,
					expose : false,
					delay : 6000
				}
			]);
					
		}
		else if(helpcount ==2)
		{
			trip = new Trip([
				{
					sel : $('#helpArea'),
					position : 'e',
					content :helpMsg[2] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==3)
		{
			trip = new Trip([
			{
				sel : $('#beakerDiv'),
				position : 'e',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			}
			]);		
		}
		else if(helpcount ==4)
		{
			trip = new Trip([
			{
					sel : $('#calorimeterCapDiv'),
					position : 'n',
					content :helpMsg[4] ,
					expose : false,
					delay : 6000
			}]);		
		}
		else if(helpcount ==5)
		{
			trip = new Trip([
			{
				sel : $('#stirrer'),
				position : 'e',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			]);		
		}
		else if(helpcount ==6)
		{
			trip = new Trip([
			{
				sel : $('#nextButton'),
				position : 'w',
				content :helpMsg[6] ,
				expose : false,
				delay : 6000
			}
			]);		
		}
		else if(helpcount ==7)
		{
			trip = new Trip([
			{
				sel : $('#calorimeterCapDiv1'),
				position : 'w',
				content :helpMsg1[0] ,
				expose : false,
				delay : 6000
			}
			]);		
		}
		else if(helpcount ==8)
		{
			trip = new Trip([
			{
				sel : $('#chloroformBottleCap'),
				position : 'n',
				content :helpMsg1[1] ,
				expose : false,
				delay : 6000
			}
			]);		
		}
		if(helpcount==9){
			trip = new Trip([
				{
					sel : $('#chloroformBottleDiv'),
					position : 'n',
					content :helpMsg1[2] ,
					expose : false,
					delay : 3000
				}
				]);	
		}
		if(helpcount==10){
			trip = new Trip([
				{
					sel : $('#acetoneBottleCap'),
					position : 'n',
					content :helpMsg1[3] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==11){
			trip = new Trip([
				{
					sel : $('#acetoneBottleDiv'),
					position : 'n',
					content :helpMsg1[4] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==12){
			trip = new Trip([
				{
					sel : $('#thermometerPage2'),
					position : 's',
					content :helpMsg1[5] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==13){
			trip = new Trip([
				{
					sel : $('#readingLabelDiv2'),
					position : 'n',
					content :helpMsg1[6] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==14){
			trip = new Trip([
				{
					sel : $('#thermometerPage2'),
					position : 'n',
					content :helpMsg1[7] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==15){
			trip = new Trip([
				{
					sel : $('#readingLabelDiv2'),
					position : 'n',
					content :helpMsg1[8] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==16){
			trip = new Trip([
				{
					sel : $('#beakerDivChloroform'),
					position : 'n',
					content :helpMsg1[9] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==17){
			trip = new Trip([
				{
					sel : $('#measuringCylinderDiv'),
					position : 'n',
					content :helpMsg1[10] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==18){
			trip = new Trip([
				{
					sel : $('#beakerDivAcetone'),
					position : 'n',
					content :helpMsg1[11] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==19){
			trip = new Trip([
				{
					sel : $('#measuringCylinderDiv'),
					position : 'n',
					content :helpMsg1[12] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==20){
			trip = new Trip([
				{
					sel : $('#calorimeterCapDiv1'),
					position : 'n',
					content :helpMsg1[13] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==21){
			trip = new Trip([
				{
					sel : $('#stirrer1'),
					position : 'e',
					content :helpMsg1[14] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==22){
			trip = new Trip([
				{
					sel : $('#readingLabelDiv2Right'),
					position : 'n',
					content :helpMsg1[15] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		if(helpcount==23){
			// trip = new Trip([
			// 	{
			// 		sel : $('#simReset'),
			// 		position : 's',
			// 		content :helpMsg3[0] ,
			// 		expose : false,
			// 		delay : 6000
			// 	}
			// 	]);	
				ResponsiveHelpMessage('#simReset',"null",'s',helpMsg3[0] ,false,6000)
		}
		if(helpcount==30){
			trip = new Trip([
				{
					sel : $('#nextButton1'),
					position : 'n',
					content :helpMsg[6] ,
					expose : false,
					delay : 6000
				}
				]);	
		}
		trip.start(); 
		window.trip = trip;	
});			
	});

	function tripRemoveFunction()
{
    var trip = new Trip([
        {
            sel : $('#mainDiv'),
            position : 'n',
            content : "",
            expose : true,
            delay : 0
        }
    ]);
    trip.start();
    $(".trip-block ").css({display:"none"})
    trip.stop(); 
}
function ResponsiveHelpMessage(elementId,elementClass,positionParam,message,exposeFlag,delayValue)
{
    var finalElementName;
    if(elementId=="null")
        finalElementName=elementClass
    else
        finalElementName=elementId;
    setTimeout(function()
    {    
        tripRemoveFunction() 
        setTimeout(function()
        {
            var trip = new Trip([
                {
                    sel : $(finalElementName),
                    position : positionParam,
                    content : message,
                    expose : exposeFlag,
                    delay : delayValue
                }
            ]);
            $(".trip-block ").css({display:"block"})
            trip.start(); 
            window.trip = trip;	
        })
    })
}