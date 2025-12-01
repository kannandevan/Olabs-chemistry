	 
function sodiumhydroxideBr2Helpfn(){		
	trip = new Trip([
	{
		sel : $('#dropper_sodiumhydroxideBr2'),
		position : 'w',
		content : laketest_help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#burnerhelpDiv_sodiumhydroxideBr2'),
		position : 'n',
		content : confirmation_mn_help1[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dropper3_sodiumhydroxideBr2'),
		position : 'w',
		content : laketest_help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#dropper2_sodiumhydroxideBr2'),
		position : 'w',
		content : laketest_help[2],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
}
