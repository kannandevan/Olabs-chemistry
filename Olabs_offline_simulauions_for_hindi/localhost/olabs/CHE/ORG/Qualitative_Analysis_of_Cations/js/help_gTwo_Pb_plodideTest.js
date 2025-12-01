	 
function pb_pIodideTestfn(){
if(!nextSceen){
	var trip = new Trip([
	{
		sel : $('#gTwo_hno3_dropper'),
		position : 'w',
		content : HelpMsg_gTwoPIodide[0],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#gTwo_burnerOff'),
		position : 'e',
		content : HelpMsg_gTwoPIodide[1],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#gTwo_h2so4_dropper'),
		position : 'w',
		content : HelpMsg_gTwoPIodide[2],
		expose : false,
		delay : 4000
	},
	{
		sel : $('#gTwo_c2h5oh_dropper'),
		position : 'w',
		content : HelpMsg_gTwoPIodide[3],
		expose : false,
		delay : 4000
	}
	])
}else{
	if(groupTestIndex==3&&confirmationIndex==1&&confirmationSubIndex==0){
		var trip = new Trip([
		{
			sel : $('#gTwo_C2H3O2NH4_dropper'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[4],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_kl_dropper'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[5],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_burnerOffNxt'),
			position : 'e',
			content : HelpMsg_gTwoPIodide[1],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_pIodideNxt_testTube'),
			position : 'e',
			content : HelpMsg_gTwoPIodide[6],
			expose : false,
			delay : 4000
		}
		])
	}else if(groupTestIndex==3&&confirmationIndex==1&&confirmationSubIndex==1){
		var trip = new Trip([
		{
			sel : $('#gTwo_aAcetaeNxt_dropper'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[7],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_pChromate_dropper'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[8],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_sHydro_dropper'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[9],
			expose : false,
			delay : 4000
		}
		])
	}else if(groupTestIndex==3&&confirmationIndex==2&&confirmationSubIndex==0){
		var trip = new Trip([
		{
			sel : $('#gTwo_CuFCyanide_NH4OH'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[10],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_CuFCyanide_Acetic'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[11],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_CuFCyanide_fCyanide'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[12],
			expose : false,
			delay : 4000
		}
		])
	}else if(groupTestIndex==3&&confirmationIndex==2&&confirmationSubIndex==1){
		var trip = new Trip([
		{
			sel : $('#gTwo_CuIodide_NH4OH'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[10],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_CuIodide_Acetic'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[11],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#gTwo_CuIodide_pIodide'),
			position : 'w',
			content : HelpMsg_gTwoPIodide[5],
			expose : false,
			delay : 4000
		}
		])
	}
}
			
	trip.start(); 
	window.trip = trip;	
}