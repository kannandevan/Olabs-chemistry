function help_gumFn(){
	
		trip = new Trip([
		{
			sel : $('#beaker_ContainerGum'),
			position : 'n',
			content : help_gum[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerSet_gum'),
			position : 'e',
			content : help_gum[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#watchGlssContainerGum'),
			position : 'n',
			content : help_gum[2],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#glassRodDiv_Gum'),
			position : 'n',
			content : help_gum[3],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#beaker_ContainerGum'),
			position : 'n',
			content : help_gum[4],
			expose : false,
			delay : 4000
		}	
		])	
	
	trip.start(); 
	window.trip = trip;	
}