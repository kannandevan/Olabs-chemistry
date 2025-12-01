	 
function sodiumHydroxidefn(){
	var trip = new Trip([
	{
		sel : $('#NaOH_saltWrap'),
		position : 'w',
		content : HelpMsg_sodiumHydroxide[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#NaOH_dropper'),
		position : 'w',
		content : HelpMsg_sodiumHydroxide[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#NaOH_burnerOff'),
		position : 'e',
		content : HelpMsg_sodiumHydroxide[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#NaOH_glassRodWrap'),
		position : 'w',
		content : HelpMsg_sodiumHydroxide[3],
		expose : false,
		delay : 4000
	},
	])		
			
	trip.start(); 
	window.trip = trip;	
}