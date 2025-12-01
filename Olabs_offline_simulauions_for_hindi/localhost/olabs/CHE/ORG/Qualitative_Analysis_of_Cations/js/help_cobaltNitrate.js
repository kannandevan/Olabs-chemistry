	 
function cobaltNitrateHelpfn(){		
	trip = new Trip([
	{
		sel : $('#dropper_cobaltNitrate'),
		position : 'w',
		content : cobaltNitrateHelp,
		expose : false,
		delay : 4000
	},
	{
		sel : $('#forcep_cobaltNitrate'),
		position : 'w',
		content : charcoalcavityHelp[8],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#burnerhelpDiv_cobaltNitrate'),
		position : 'n',
		content : charcoalcavityHelp[6],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#forcep_cobaltNitrate'),
		position : 'w',
		content : charcoalcavityHelp[9],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#blowpipe_cobaltNitrate'),
		position : 'w',
		content : charcoalcavityHelp[10],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#forcep_cobaltNitrate'),
		position : 'w',
		content : charcoalcavityHelp[11],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	
}
