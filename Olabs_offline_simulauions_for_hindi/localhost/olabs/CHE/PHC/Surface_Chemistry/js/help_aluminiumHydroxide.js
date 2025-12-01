function aluminiumHydroxideHelp(){
	if(!scene2	){
		trip = new Trip([
		{
			sel : $('#aluHydro_burnerOn'),
			position : 'e',
			content : aluHydro_help_scene_1[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#aluHydro_flask'),
			position : 'n',
			content : aluHydro_help_scene_1[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#aluHydro_dropper'),
			position : 'w',
			content : aluHydro_help_scene_1[2],
			expose : false,
			delay : 4000
		}	
		])	
	}else{
		if(!waterReplaced){
			trip = new Trip([
			{
				sel : $('#aluHydro_flask_2'),
				position : 'n',
				content : aluHydro_help_scene_2[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#aluHydro_dyalisis_dropper_2'),
				position : 'n',
				content : aluHydro_help_scene_2[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#aluHydro_dyalisis_dropper_1'),
				position : 'w',
				content : aluHydro_help_scene_2[2],
				expose : false,
				delay : 4000
			}	
			])
		}else{
			trip = new Trip([
			{
				sel : $('#aluHydro_dyalisis_dropper_2'),
				position : 'n',
				content : aluHydro_help_scene_2[3],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#aluHydro_dyalisis_dropper_1'),
				position : 'w',
				content : aluHydro_help_scene_2[4],
				expose : false,
				delay : 4000
			}	
			])
		}
	}
	trip.start(); 
	window.trip = trip;	
}