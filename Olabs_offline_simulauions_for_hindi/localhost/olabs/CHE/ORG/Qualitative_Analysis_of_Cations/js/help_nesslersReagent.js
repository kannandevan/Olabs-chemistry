	 
function nesslersReagentfn(){
	var trip = new Trip([
	{
		sel : $('#Nessler_saltWrap'),
		position : 'w',
		content : HelpMsg_sodiumHydroxide[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Nessler_dropper'),
		position : 'w',
		content : HelpMsg_sodiumHydroxide[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Nessler_burnerOff'),
		position : 'e',
		content : HelpMsg_sodiumHydroxide[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Nessler_glassRodWrap'),
		position : 'w',
		content : HelpMsg_sodiumHydroxide[3],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Nessler_cork_1'),
		position : 'w',
		content : HelpMsg_nesslersReagent[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Nessler_deliveryTube'),
		position : 'w',
		content : HelpMsg_nesslersReagent[1],
		expose : false,
		delay : 4000
	},
	])		
			
	trip.start(); 
	window.trip = trip;	
}