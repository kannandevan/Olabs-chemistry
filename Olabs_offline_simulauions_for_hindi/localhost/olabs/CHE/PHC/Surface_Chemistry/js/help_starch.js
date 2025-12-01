function help_starchFn(){
	if(sceneSection==1){
		trip = new Trip([
		{
			sel : $('#beaker_Container'),
			position : 'n',
			content : help_starch[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerSet'),
			position : 'e',
			content : help_starch[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#watchGlssContainer'),
			position : 'n',
			content : help_starch[2],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#glassRodDiv'),
			position : 'n',
			content : help_starch[3],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#beaker_Container'),
			position : 'n',
			content : help_starch[4],
			expose : false,
			delay : 4000
		}
			
		])	
	
	}else if(sceneSection==2){
		trip = new Trip([
		{
			sel : $('#conicalFlask_Container'),
			position : 'n',
			content : help_starch[5],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_three'),
			position : 'w',
			content : help_starch[6],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_two'),
			position : 'n',
			content : help_starch[7],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_three'),
			position : 'w',
			content : help_starch[8],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_one'),
			position : 'n',
			content : help_starch[9],
			expose : false,
			delay : 4000
		}
		
		])

	}
	else if(sceneSection==3){
		trip = new Trip([
			{
			sel : $('#dropper_three'),
			position : 'w',
			content : help_starch[10],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#dropper_one'),
			position : 'n',
			content : help_starch[11],
			expose : false,
			delay : 4000
		}


			])
	}
	trip.start(); 
	window.trip = trip;	
}