	 
function boraxBeadHelpfn(){		
	trip = new Trip([
	{
		sel : $('#boraxDiv_boraxBead'),
		position : 'w',
		content : boraxBeadHelp[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#platinumwire_boraxBead'),
		position : 'w',
		content : boraxBeadHelp[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#burnerhelpDiv_boraxBead'),
		position : 'n',
		content : charcoalcavityHelp[6],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#platinumwire_boraxBead'),
		position : 'w',
		content : boraxBeadHelp[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#platinumwire_boraxBead'),
		position : 'w',
		content : boraxBeadHelp[3],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#burnerhelpDiv_boraxBead'),
		position : 'n',
		content : boraxBeadHelp[4],
		expose : false,
		delay : 6000
	},
	{
		sel : $('#platinumwire_boraxBead'),
		position : 'w',
		content : boraxBeadHelp[5],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
}