var trip;
var tripClickFlag=false;
$(document).ready(function() {					   
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#simHelp').bind('click',function(){
       $('.flex-container').css('overflow', 'hidden');
       tripClickFlag=true;
       if(help==0)
        {
	        trip = new Trip([
                {
                    sel : $('.subButton'),
                    position : 'w',
                    content : helpMsg[0],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==1)
        {
            trip = new Trip([
                {
                    sel : $('#dropdown'),
                    position : 'e',
                    content : helpMsg[1],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==2)
        {
            trip = new Trip([
                {
                    sel : $('#syDiv1'),
                    position : 'n',
                    content : helpMsg[2],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==3)
        {
            trip = new Trip([
                {
                    sel : $('#piston1'),
                    position : 'w',
                    content : helpMsg[3],
                    expose : false,
                    delay :7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==4)
        {
            trip = new Trip([
                {
                    sel : $('#helpDiv1'),
                    position : 'n',
                    content : helpMsg[4],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==5)
        {
            trip = new Trip([
                {
                    sel : $('#syDiv2'),
                    position : 'n',
                    content : helpMsg[5],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==6)
        {
            trip = new Trip([
                {
                    sel : $('#piston2'),
                    position : 'w',
                    content : helpMsg[3],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==7)
        {
            trip = new Trip([
                {
                    sel : $('#helpDiv2'),
                    position : 'n',
                    content : helpMsg[4],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==8)
        {
            trip = new Trip([
                {
                    sel : $('#syDiv3'),
                    position : 'n',
                    content : helpMsg[6],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==9)
        {
            trip = new Trip([
                {
                    sel : $('#piston3'),
                    position : 'w',
                    content : helpMsg[3],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==10)
        {
            trip = new Trip([
                {
                    sel : $('#helpDiv3'),
                    position : 'e',
                    content : helpMsg[4],
                    expose : false,
                    delay : 7000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==11)
        {
            trip = new Trip([
                {
                    sel : $('#info'),
                    position : 'e',
                    content : helpMsg[7],
                    expose : false,
                    delay : 3000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
        else if(help==12)
        {
            trip = new Trip([
                {
                    sel : $('#simReset'),
                    position : 's',
                    content : helpMsg[8],
                    expose : false,
                    delay : 3000
                    
                }]);
            trip.start(); 
            window.trip = trip;
        }
    });
    $('#info').click(function(){
        $(".trip-block").css("textAlign", "left");
    });
    $('#info').bind('click',function(){
        help = 12;
        $(".trip-block").css("textAlign", "left");
        $('.flex-container').css('overflow', 'hidden');
		tripFlag = true;    
            var trip = new Trip([
                {
                    sel : $('#info'),
                    position : 'e',
                    content : Inference_msg[0],
                    expose : false,
                    delay : 15000
                }
			])
			trip.start(); 
			window.trip = trip;
	});
});