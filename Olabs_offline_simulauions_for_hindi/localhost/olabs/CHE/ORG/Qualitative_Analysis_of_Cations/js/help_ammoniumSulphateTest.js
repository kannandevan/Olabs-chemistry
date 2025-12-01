// JavaScript Document
function ammoniumSulphateTestHelpfn(){	
trip = new Trip([
	{
		sel : $('#DropperOne_AmmoniumSulphateTest'),
		position : 'w',
		content : ammoniumSulphateTestHelpText[0],
		expose : false,
		delay : 4000
	}
	
	])					
	trip.start(); 
	window.trip = trip;	

}