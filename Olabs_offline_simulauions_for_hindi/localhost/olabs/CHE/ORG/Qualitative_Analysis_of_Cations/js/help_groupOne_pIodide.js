	 
function gOnePotassiumIodidfn(){
	var trip = new Trip([
	{
		sel : $('#gOne_pIodide_dropper'),
		position : 'w',
		content : HelpMsg_gOnePIodid[0],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}