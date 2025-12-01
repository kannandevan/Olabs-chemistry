// JavaScript Document
function ammoniumOxalateTestHelpfn(){	
trip = new Trip([
	{
		sel : $('#DropperOne_AmmoniumOxalateTest'),
		position : 'w',
		content : ammoniumSulphateTestText[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_AmmoniumOxalateTest'),
		position : 'w',
		content : ammoniumSulphateTestText[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#glassrod_AmmoniumOxalateTest'),
		position : 'w',
		content : ammoniumSulphateTestText[2],
		expose : false,
		delay : 4000
	},
	
	
	])					
	trip.start(); 
	window.trip = trip;	

}