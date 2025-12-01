	 
function potassiumnitrateHelpfn(){		
	trip = new Trip([
	{
		sel : $('#dropper_potassiumnitrate'),
		position : 'w',
		content : potassiumnitrate_help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dropper2_potassiumnitrate'),
		position : 'w',
		content : potassiumnitrate_help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#spatulaKNO3Div_potassiumnitrate'),
		position : 'w',
		content : potassiumnitrate_help[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#burnerhelpDiv_potassiumnitrate'),
		position : 'n',
		content : confirmation_fe_help[1],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
}
