function help_eggFn(){
		trip = new Trip([
		{
			sel : $('#watchGlssContainer_albumin'),
			position : 'e',
			content : help_egg[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#glassRodDiv_alb'),
			position : 'n',
			content : help_egg[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $("#beaker_Containeralb"),
			position : 'n',
			content : help_egg[2],
			expose : false,
			delay : 4000
		}
		
		])	
	
	trip.start(); 
	window.trip = trip;	
}