function flamehelpfn(){
	
	trip = new Trip([
	{
		sel : $('#flame_crtl_salt'),
		position : 'w',
		content : flame_help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#flame_dropper'),
		position : 'w',
		content : flame_help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#flame_glassRod'),
		position : 'w',
		content : flame_help[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#flame_burnerOff'),
		position : 'n',
		content : flame_help[3],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#flame_platinumWire'),
		position : 'w',
		content : flame_help[4],
		expose : false,
		delay : 4000
	},
	
	
	
	])					
	trip.start(); 
	window.trip = trip;	
}