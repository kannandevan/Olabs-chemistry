	 
function laketestHelpfn(){		
	trip = new Trip([
	{
		sel : $('#dropper_Laketest'),
		position : 'w',
		content : laketest_help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dropper3_Laketest'),
		position : 'w',
		content : laketest_help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dropper2_Laketest'),
		position : 'w',
		content : laketest_help[2],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
}
