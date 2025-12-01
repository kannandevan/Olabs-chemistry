	 
function groupZerofn(){
	var trip = new Trip([
	{
		sel : $('#gZero_saltWrap'),
		position : 'w',
		content : HelpMsg_groupZero[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#gZero_dropper'),
		position : 'w',
		content : HelpMsg_groupZero[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#gZero_burnerOff'),
		position : 'e',
		content : HelpMsg_groupZero[2],
		expose : false,
		delay : 4000
	},
	])		
			
	trip.start(); 
	window.trip = trip;	
}