function arseniousSulphideHelp(){
	if(arsenious_scene_1){
		trip = new Trip([
		{
			sel : $('#arsenious_watchglass'),
			position : 'n',
			content : arsenious_help_scene_1[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#arsenious_flask'),
			position : 'n',
			content : arsenious_help_scene_1[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#arsenious_burnerOn'),
			position : 'e',
			content : arsenious_help_scene_1[2],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#arsenious_flask'),
			position : 'n',
			content : arsenious_help_scene_1[3],
			expose : false,
			delay : 4000
		}
		])	
	}else if(arsenious_scene_2){
		trip = new Trip([
		{
			sel : $('#arsenious_tapOff_help'),
			position : 'e',
			content : arsenious_help_scene_2[0],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#arsenious_beakerSmall'),
			position : 'n',
			content : arsenious_help_scene_2[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#arsenious_burnerOn_2'),
			position : 'w',
			content : arsenious_help_scene_2[2],
			expose : false,
			delay : 4000
		}	
		])
	}else{
		trip = new Trip([
		{
			sel : $('#arsenious_beaker_3'),
			position : 'n',
			content : arsenious_help_scene_2[4],
			expose : false,
			delay : 4000
		}	
		])
	}
	trip.start(); 
	window.trip = trip;	
}