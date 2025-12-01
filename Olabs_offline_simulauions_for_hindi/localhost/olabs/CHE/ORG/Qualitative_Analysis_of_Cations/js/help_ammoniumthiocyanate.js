	 
function ammoniumthiocyanateHelpfn(){		
	trip = new Trip([
	{
		sel : $('#dropper_ammoniumthiocyanate'),
		position : 'w',
		content : ammoniumthiocyanate_help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#spatulaDiv_ammoniumthiocyanate'),
		position : 'w',
		content : ammoniumthiocyanate_help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#testube_ammoniumthiocyanate'),
		position : 's',
		content : ammoniumthiocyanate_help[2],
		expose : false,
		delay : 4000
	}
	])					
	 trip.start(); 
	window.trip = trip;	
}
