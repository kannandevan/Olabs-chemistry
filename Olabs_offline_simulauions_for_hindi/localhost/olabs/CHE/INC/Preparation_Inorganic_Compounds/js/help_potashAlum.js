var trip;
	function potashAlumHelp(){
		if(pAlum_scene==1){	
			trip = new Trip([
			{
				sel : $('#pAlum_wglass_pSulhate .posAbso'),
				position : 'n',
				content : helpMsg_pAlum_1[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pAlum_wglass_aSulphate .posAbso'),
				position : 'n',
				content : helpMsg_pAlum_1[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pAlum_mcylinder_hcl'),
				position : 'w',
				content : helpMsg_pAlum_1[2],
				expose : false,
				delay : 6000
			},
			
			],
			{
			onTripStart : function() {
				helpclickFlag=true;
			},
			onTripEnd : function() {
				helpclickFlag=false;
			},
			onTripStop : function() {
				helpclickFlag=false;
			},
			backToTopWhenEnded : false,
			delay : 4000
			});
		}else if(pAlum_scene==2){
			trip = new Trip([
			{
				sel : $('#pAlum_scene2_beaker_1'),
				position : 'n',
				content : helpMsg_pAlum_2[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pAlum_scene2_knobon'),
				position : 'e',
				content : helpMsg_pAlum_2[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pAlum_scene2_beaker_1'),
				position : 'n',
				content : helpMsg_pAlum_2[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#pAlum_scene2_beaker_2'),
				position : 'n',
				content : helpMsg_pAlum_2[3],
				expose : false,
				delay : 6000
			},
			],
			{
			onTripStart : function() {
				helpclickFlag=true;
			},
			onTripEnd : function() {
				helpclickFlag=false;
			},
			onTripStop : function() {
				helpclickFlag=false;
			},
			backToTopWhenEnded : false,
			delay : 4000
			});
			
		}
		
		trip.start(); 
		window.trip = trip;
	}
		
	