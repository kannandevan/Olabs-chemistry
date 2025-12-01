
	function potassiumFerricOxalateHelp(){
		if(pFerricOxa_scene==1){	
			trip = new Trip([
			{
				sel : $('#pFerricOxa_wglass_fChloride .posAbso'),
				position : 'e',
				content : helpMsg_pFerricOxa_1[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_wglass_pHydrox .posAbso'),
				position : 'n',
				content : helpMsg_pFerricOxa_1[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_gRod'),
				position : 'w',
				content : helpMsg_pFerricOxa_1[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#pFerricOxa_beaker_2'),
				position : 'w',
				content : helpMsg_pFerricOxa_1[3],
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
		}else if(pFerricOxa_scene==2){
			trip = new Trip([
			{
				sel : $('#pFerricOxa_scene2_fPaper_fix'),
				position : 'n',
				content : helpMsg_pFerricOxa_2[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene2_beaker .posAbso'),
				position : 'n',
				content : helpMsg_pFerricOxa_2[1],
				expose : false,
				delay : 6000
			}
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
			
		}else if(pFerricOxa_scene==3){
			trip = new Trip([
			{
				sel : $('#pFerricOxa_scene3_wglass_oxalic .posAbso'),
				position : 'e',
				content : helpMsg_pFerricOxa_3[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene3_wglass_pOxal .posAbso'),
				position : 'n',
				content : helpMsg_pFerricOxa_3[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene3_wglass_pHydroPpt .posAbso'),
				position : 'w',
				content : helpMsg_pFerricOxa_3[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#pFerricOxa_scene3_beaker .posAbso'),
				position : 'n',
				content : helpMsg_pFerricOxa_3[3],
				expose : false,
				delay : 6000
			}
			
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
		}else if(pFerricOxa_scene==4){
			trip = new Trip([
			{
				sel : $('#pFerricOxa_scene4_knobon'),
				position : 'e',
				content : helpMsg_pFerricOxa_4[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene4_gRod'),
				position : 'n',
				content : helpMsg_pFerricOxa_4[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene4_cDishT'),
				position : 'n',
				content : helpMsg_pFerricOxa_4[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#pFerricOxa_scene4_paper'),
				position : 'n',
				content : helpMsg_pFerricOxa_4[3],
				expose : false,
				delay : 6000
			}
			
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
		}else if(pFerricOxa_scene==5){
			trip = new Trip([
			{
				sel : $('#pFerricOxa_scene5_dropper'),
				position : 'e',
				content : helpMsg_pFerricOxa_5[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene5_cDish'),
				position : 'n',
				content : helpMsg_pFerricOxa_5[1],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#pFerricOxa_scene5_fPaper_2'),
				position : 'n',
				content : helpMsg_pFerricOxa_5[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#pFerricOxa_scene5_fPaper_1'),
				position : 'n',
				content : helpMsg_pFerricOxa_5[3],
				expose : false,
				delay : 6000
			}
			
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
		
	