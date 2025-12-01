	 
function coolSolutionfn(){
	var trip = new Trip([
	{
		sel : $('#coolSolu_dropper'),
		position : 'w',
		content : HelpMsg_gOneCoolSolu[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#coolSolu_burnerOff'),
		position : 'e',
		content : HelpMsg_gOneCoolSolu[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#coolSolu_testTube'),
		position : 'e',
		content : HelpMsg_gOneCoolSolu[2],
		expose : false,
		delay : 4000
	}
	])		
			
	trip.start(); 
	window.trip = trip;	
}