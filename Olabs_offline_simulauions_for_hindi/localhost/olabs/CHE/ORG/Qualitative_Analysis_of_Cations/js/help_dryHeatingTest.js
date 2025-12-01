	 
function dryHeatingTestfn(){
	var trip = new Trip([
	{
		sel : $('#dryHeat_saltDrag'),
		position : 'w',
		content : HelpMsg_dryHeatingTest[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dryHeat_burnerOff'),
		position : 'e',
		content : HelpMsg_dryHeatingTest[1],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}