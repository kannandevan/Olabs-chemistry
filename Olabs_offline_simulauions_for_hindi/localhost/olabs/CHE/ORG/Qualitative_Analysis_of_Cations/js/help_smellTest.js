	 
function smellTestfn(){
	var trip = new Trip([
	{
		sel : $('#smell_saltDrag'),
		position : 'w',
		content : HelpMsg_smellTest[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#smell_dropper'),
		position : 'w',
		content : HelpMsg_smellTest[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#smell_hand'),
		position : 'w',
		content : HelpMsg_smellTest[2],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}