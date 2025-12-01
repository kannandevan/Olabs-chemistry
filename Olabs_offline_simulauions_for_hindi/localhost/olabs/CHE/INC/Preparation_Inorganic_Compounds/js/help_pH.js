
	function mohrsHelp(){
		if(mohr_scene==1){	
			trip = new Trip([
			{
				sel : $('#mohr_salt_ferrous'),
				position : 'n',
				content : helpMsg_mohrs_1[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_salt_ammonium'),
				position : 'n',
				content : helpMsg_mohrs_1[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_mcylinder_hcl'),
				position : 'w',
				content : helpMsg_mohrs_1[2],
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
		}else if(mohr_scene==2){
			trip = new Trip([
			{
				sel : $('#mohr_scene2_beaker_water'),
				position : 'e',
				content : helpMsg_mohrs_2[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_scene2_gRod'),
				position : 'n',
				content : helpMsg_mohrs_2[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_scene2_beaker_mix'),
				position : 'e',
				content : helpMsg_mohrs_2[2],
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
			
		}else if(mohr_scene==3){
			trip = new Trip([
			{
				sel : $('#mohr_scene3_knobon'),
				position : 'e',
				content : helpMsg_mohrs_3[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_scene3_gRod'),
				position : 'n',
				content : helpMsg_mohrs_3[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#concSolu'),
				position : 'e',
				content : helpMsg_mohrs_3[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#mohr_scene3_wGlass'),
				position : 'n',
				content : helpMsg_mohrs_3[3],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#mohr_scene3_pDish'),
				position : 'n',
				content : helpMsg_mohrs_3[4],
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
		}else if(mohr_scene==4){
			trip = new Trip([
			{
				sel : $('#mohr_scene4_pDish'),
				position : 'n',
				content : helpMsg_mohrs_4[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_scene4_dropper'),
				position : 'n',
				content : helpMsg_mohrs_4[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#mohr_scene4_pDish'),
				position : 'n',
				content : helpMsg_mohrs_4[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#mohr_scene4_fPaper_2'),
				position : 'n',
				content : helpMsg_mohrs_4[3],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#mohr_scene4_fPaper_1'),
				position : 'n',
				content : helpMsg_mohrs_4[4],
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
		
	