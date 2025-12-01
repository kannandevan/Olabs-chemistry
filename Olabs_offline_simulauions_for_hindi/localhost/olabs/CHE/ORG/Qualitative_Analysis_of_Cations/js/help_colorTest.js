	 
function colorTestfn(){
	var trip = new Trip([
	{
		sel : $('#color_salt'),
		position : 'e',
		content : HelpMsg_colorTest[0],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}