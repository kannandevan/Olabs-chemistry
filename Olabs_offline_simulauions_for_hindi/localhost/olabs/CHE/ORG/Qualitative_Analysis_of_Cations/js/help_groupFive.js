	 
function groupFiveHelpfn(){	
if(sceneFlag==1){	
	trip = new Trip([
	{
		sel : $('#SaltSmall_groupFiveTest'),
		position : 'n',
		content : groupFiveHelpText[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Burner_Swtch'),
		position : 'n',
		content : groupFiveHelpText[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperOne_groupFiveTest'),
		position : 'w',
		content : groupFiveHelpText[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_groupFiveTest'),
		position : 'w',
		content : groupFiveHelpText[3],
		expose : false,
		delay : 4000
	}
	
	])					
	trip.start(); 
	window.trip = trip;	
	}
	else if(sceneFlag==2){
	trip = new Trip([
	{
		sel : $('#DropperOneTwo_groupFiveTest'),
		position : 'w',
		content : groupFiveHelpText[4],
		expose : false,
		delay : 4000
	}
	])	
		trip.start(); 
	window.trip = trip;	
		}
		
}