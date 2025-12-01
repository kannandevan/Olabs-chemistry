	 
function gOnePotassiumChroomatefn(){
	var trip = new Trip([
	{
		sel : $('#gOne_pChromate_dropper'),
		position : 'w',
		content : HelpMsg_gOnePChromate[0],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}