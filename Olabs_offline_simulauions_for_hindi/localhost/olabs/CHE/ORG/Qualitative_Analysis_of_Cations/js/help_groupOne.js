	 
function groupOnefn(){
	var trip = new Trip([
	{
		sel : $('#droperWrap'),
		position : 'w',
		content : HelpMsg_groupOne[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#gOne_dropper_hcl'),
		position : 'w',
		content : HelpMsg_groupOne[1],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}