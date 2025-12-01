function groupAmmonium_Help(){
	
	
	 trip = new Trip([
	{
		sel : $('#SaltOne_AmmoniumTest'),
		position : 'w',
		content : NH4_Help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Nh4dropper_PhosphateTest'),
		position : 'w',
		content : NH4_Help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_NH4Test'),
		position : 'w',
		content : NH4_Help[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#glassrod_NH4'),
		position : 'w',
		content : NH4_Help[3],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
	
}