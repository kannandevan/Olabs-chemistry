// JavaScript Document
function MagnesiaMixtureTestHelpfn(){	
trip = new Trip([
	{
		sel : $('#DropperOne_Magnesiamixturetest'),
		position : 'w',
		content : MagnesiaMixtureTest[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperTwo_Magnesiamixturetest'),
		position : 'w',
		content : MagnesiaMixtureTest[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#DropperThree_Magnesiamixturetest'),
		position : 'w',
		content : MagnesiaMixtureTest[2],
		expose : false,
		delay : 4000
	},
	
	
	])					
	trip.start(); 
	window.trip = trip;	

}