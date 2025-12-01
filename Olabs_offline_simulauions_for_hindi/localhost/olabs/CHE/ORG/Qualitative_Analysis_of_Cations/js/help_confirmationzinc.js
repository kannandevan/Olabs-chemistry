	 
function confirmationzincHelpfn(){
	trip = new Trip([
	{
		sel : $('#dropper_potassiumFerrocyanide'),
		position : 'w',
		content : confirmation_fe_help[0],
		expose : false,
		delay : 4000
	},	
	{
		sel : $('#burnerhelpDiv_potassiumFerrocyanide'),
		position : 'n',
		content : confirmation_fe_help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dropper2_potassiumFerrocyanide'),
		position : 'w',
		content : confirmation_fe_help[2],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
}
