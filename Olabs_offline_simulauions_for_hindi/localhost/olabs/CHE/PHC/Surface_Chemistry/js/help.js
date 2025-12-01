
var helpFunctions=[[help_starchFn,help_gumFn,help_eggFn],[aluminiumHydroxideHelp,help_ferricFn,arseniousSulphideHelp]];

$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".content").scrollTop(0);
		helpclickFlag=true;
		helpFunctions[sole_DropBoxValue][sample_DropBoxValue]();
	});
	$('#inference').bind('click',function(){
		var trip1 = new Trip([
		{
			sel : $('#inference'),
			position : 'e',
			content :inferenceMsg,
			expose : false,
			delay : 6000
		}]);
		trip1.start(); 
		window.trip1 = trip1;
	});
	
});
