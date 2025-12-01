function help_ferricFn(){
	if(sceneSection_Ferric==1){
		trip = new Trip([
		{
			sel : $('#conicalFlask_ContainerFerric'),
			position : 'n',
			content : help_ferric[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerSet_ferric'),
			position : 'e',
			content : help_ferric[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_Ferric'),
			position : 'w',
			content : help_ferric[2],
			expose : false,
			delay : 4000
		}
		
		])	
	
	}
	else if(sceneSection_Ferric==2){
		trip = new Trip([
			{
			sel : $('#conicalFlask_ContainerFerricTwo'),
			position : 'n',
			content : help_ferric[3],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_threeFerric'),
			position : 'w',
			content : help_ferric[4],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_oneFerric'),
			position : 'w',
			content : help_ferric[5],
			expose : false,
			delay : 4000
		}
		
		
		])
	}
	else if(sceneSection_Ferric==3){
		trip = new Trip([

			{
			sel : $('#dropper_threeFerric'),
			position : 'w',
			content : help_ferric[6],
			expose : false,
			delay : 4000
			},
			{
			sel : $('#dropper_oneFerric'),
			position : 'w',
			content : help_ferric[5],
			expose : false,
			delay : 4000
		}
			])
	}
	
	trip.start(); 
	window.trip = trip;	
}