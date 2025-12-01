// JavaScript Document
function AmmoniumMolybdateTestHelpfn(){	
	trip = new Trip([
	{
		sel : $('#DropperOne_ammoniumMolybdatetest'),
		position : 'w',
		content : AmmoniumMolybdatehelp[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_ammoniumMolybdatetest'),
		position : 'w',
		content : AmmoniumMolybdatehelp[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#Burner_Swtch_ammoniumMolybdatetest'),
		position : 'w',
		content : AmmoniumMolybdatehelp[2],
		expose : false,
		delay : 4000
	}
	])					
	trip.start(); 
	window.trip = trip;	

}