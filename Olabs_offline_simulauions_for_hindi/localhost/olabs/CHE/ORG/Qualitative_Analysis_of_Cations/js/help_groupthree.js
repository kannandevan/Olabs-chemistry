function groupthree_Help(){
	 if(help_grp3Flag==0)
	{
	 trip = new Trip([
	{
		sel : $('#hno3dropper_groupTest3'),
		position : 'w',
		content : groupThree_Help[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#BurnerSwtchon_group3'),
		position : 'e',
		content : groupThree_Help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#SaltOne_groupThreeTest'),
		position : 'w',
		content : groupThree_Help[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#BurnerSwtchon_group3'),
		position : 'e',
		content : groupThree_Help[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#holderdiv_group3'),
		position : 'w',
		content : groupThree_Help[3],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#holderdiv_group3'),
		position : 'w',
		content : groupThree_Help[4],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#holderdiv_group3'),
		position : 'w',
		content : groupThree_Help[5],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_groupTest3'),
		position : 'w',
		content : groupThree_Help[6],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#testTube_groupThreeTest'),
		position : 'e',
		content : groupThree_Help[7],
		expose : false,
		delay : 4000
	},


	])					
	trip.start(); 
	window.trip = trip;	
}
	
	else if(help_grp3Flag==1){
	trip = new Trip([	
	{
		sel : $('#holderimg2_grp3'),
		position : 'e',
		content : groupThree_Help[3],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#holderimg2_grp3'),
		position : 'e',
		content : groupThree_Help[4],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#holderimg2_grp3'),
		position : 'e',
		content : groupThree_Help[5],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_groupTest3'),
		position : 'w',
		content : groupThree_Help[6],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#testTube2_grp3'),
		position : 'e',
		content : groupThree_Help[7],
		expose : false,
		delay : 4000
	},
	])	
	trip.start(); 
	window.trip = trip;	}

else if(help_grp3Flag==2){
	trip = new Trip([
	{
		sel : $('#testTubeTwo_groupTwoTest'),
		position : 'n',
		content : groupTwoHelpText[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#kippsclose_groupTwoTest'),
		position : 'n',
		content : groupTwoHelpText[3],
		expose : false,
		delay : 4000
	}
	])	
		trip.start(); 
	window.trip = trip;	
		}
	
}