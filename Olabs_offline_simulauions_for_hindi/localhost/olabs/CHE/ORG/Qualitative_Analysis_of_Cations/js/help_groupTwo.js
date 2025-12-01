// JavaScript Document
	 
function groupTwoHelpfn(){	
if(sceneFlag==1){	
	trip = new Trip([
	{
		sel : $('#DropperOne_groupTwoTest'),
		position : 'w',
		content : groupTwoHelpText[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Burner_SwtchgroupTwoTest'),
		position : 'n',
		content : groupTwoHelpText[1],
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