$(document).ready(function() {
	var mixtureFilter,washMixtureContainer,hotMixtureFilter;
	helpFunctions=[acetanilideHelpFn,dibenzalAcetoneHelpFn,pNitroacetanilideHelpFn,naphtholAnilinedyeHelpFn];	
	function acetanilideHelpFn(){		
		if(nextClick==0){
			trip = new Trip([
			{
				sel : $('#cylinder1'),
				position : 'n',
				content :acetanilideHelp[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#rbFlask'),
				position : 'w',
				content : rbFlaskShake,
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cylinder2'),
				position : 'n',
				content : acetanilideHelp[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#rbFlask'),
				position : 'w',
				content : rbFlaskShake,
				expose : false,
				delay : 4000
			}
			])
		}else if(nextClick==1){			
			trip = new Trip([
			{
				sel : $('#burnerhelpDiv'),
				position :'s',
				content :burnerOnHelp,
				expose : false,
				delay : 4000
			}
			])
		}else if(nextClick==2){			
			trip = new Trip([
			{
				sel : $('#rbFlask3'),
				position :'n',
				content :acetanilideHelp[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#rbFlask3'),
				position :'n',
				content :acetanilideHelp[3],
				expose : false,
				delay : 4000
			}
			])
		}else if(nextClick==3){	
			washMixtureContainer="beaker3";
			mixtureFilter=acetanilideHelp[4];
			washMixtureHelp();				
			
		}else if(nextClick==4){				
			firstStepHeat=acetanilideHelp[6];
			heatSolution();
		}else if(nextClick==5){			
			fliterHelp();			
		}else if(nextClick==6){
			hotMixtureFilter=acetanilideHelp[10];
			reFliterHelp();				
		}
		trip.start(); 
		window.trip = trip;	
	}
	function dibenzalAcetoneHelpFn(){				
		if(bigBtnClick==0){
			trip = new Trip([
			{
				sel : $('#cylinder1'),
				position : 'n',
				content :dibenzalAcetoneHelp[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#dropper1'),
				position : 'w',
				content : dibenzalAcetoneHelp[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#conicalFlask'),
				position : 'n',
				content : conicalFlaskShake,
				expose : false,
				delay : 4000
			}
			])
		}else{
			if(nextClick==0){			
				trip = new Trip([
				{
					sel : $('#labelBoard2'),
					position :'n',
					content :dibenzalAcetoneHelp[2],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#conicalFlask'),
					position : 'n',
					content : conicalFlaskShake,
					expose : false,
					delay : 4000
				},
				{
					sel : $('#conicalFlask'),
					position :'n',
					content :dibenzalAcetoneHelp[3],
					expose : false,
					delay : 4000
				}
				])
			}else if(nextClick==1){					
				if(bigBtnClick==1){
					washMixtureContainer="conicalFlask";		
					mixtureFilter=dibenzalAcetoneHelp[4];
					washMixtureHelp();	
				}else{
					trip = new Trip([
					{
						sel : $('#beaker'),
						position :'n',
						content :dibenzalAcetoneHelp[5],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#beaker3'),
						position : 'n',
						content : dibenzalAcetoneHelp[6],
						expose : false,
						delay : 4000
					}
					])
				}
			}
		}
		
		trip.start(); 
		window.trip = trip;	
	}

	function pNitroacetanilideHelpFn(){
		if(bigBtnClick==0){
			if(nextClick==0){			
				trip = new Trip([
				{
					sel : $('#cylinder1'),
					position :'n',
					content :pNitroacetanilideHelp[0],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#conicalFlask'),
					position : 'n',
					content :pNitroacetanilideHelp[1],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#dropper1'),
					position :'n',
					content :pNitroacetanilideHelp[2],
					expose : false,
					delay : 4000
				}
				])
			}else if(nextClick==1){			
				trip = new Trip([
				{
					sel : $('#glassRod3'),
					position :'n',
					content :pNitroacetanilideHelp[3],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#dropperTwo'),
					position : 'n',
					content :pNitroacetanilideHelp[4],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#dropperTwo'),
					position :'n',
					content :pNitroacetanilideHelp[5],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#conicalFlask'),
					position :'n',
					content :pNitroacetanilideHelp[6],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#conicalFlask'),
					position :'n',
					content :pNitroacetanilideHelp[7],
					expose : false,
					delay : 4000
				}
				])
			}else if(nextClick==2){
				washMixtureContainer="beaker3";
				mixtureFilter=pNitroacetanilideHelp[8];
				washMixtureHelp();
				
			}	
		}else if(bigBtnClick==1){
			if(nextClick==2){				
				firstStepHeat=pNitroacetanilideHelp[9];
				heatSolution();
			}else if(nextClick==3){			
				fliterHelp();			
			}else if(nextClick==4){
				hotMixtureFilter=pNitroacetanilideHelp[10];
				reFliterHelp();				
			}
		}		
		trip.start(); 
		window.trip = trip;	
	}
	function naphtholAnilinedyeHelpFn(){
		if(bigBtnClick==0){
			if(nextClick==0){			
				trip = new Trip([
				{
					sel : $('#cylinder1'),
					position :'n',
					content :naphtholAnilinedyeHelp[0],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#cylinder2'),
					position : 'n',
					content :naphtholAnilinedyeHelp[1],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#conicalFlask'),
					position :'n',
					content :naphtholAnilinedyeHelp[2],
					expose : false,
					delay : 4000
				}
				])
			}else if(nextClick==1){			
				trip = new Trip([
				{
					sel : $('#beaker'),
					position :'n',
					content :naphtholAnilinedyeHelp[3],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#beaker3'),
					position : 'n',
					content :naphtholAnilinedyeHelp[4],
					expose : false,
					delay : 4000
				}
				])
			}else if(nextClick==2){
				trip = new Trip([
				{
					sel : $('#beaker3'),
					position :'n',
					content :naphtholAnilinedyeHelp[5],
					expose : false,
					delay : 4000
				}
				])
				
			}else if(nextClick==3){			
				trip = new Trip([
				{
					sel : $('#beaker'),
					position :'n',
					content :naphtholAnilinedyeHelp[6],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#beaker3'),
					position : 'n',
					content :naphtholAnilinedyeHelp[4],
					expose : false,
					delay : 4000
				}
				])
			}else if(nextClick==4){
				trip = new Trip([
				{
					sel : $('#conicalFlask'),
					position :'n',
					content :naphtholAnilinedyeHelp[7],
					expose : false,
					delay : 4000
				}
				])				
			}else if(nextClick==5){			
				trip = new Trip([
				{
					sel : $('#glassRodInBeaker3'),
					position :'n',
					content :naphtholAnilinedyeHelp[8],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#beaker3'),
					position : 'n',
					content :naphtholAnilinedyeHelp[9],
					expose : false,
					delay : 4000
				}
				])
			}	
		}else if(bigBtnClick==1){
			if(nextClick==5){				
				firstStepHeat=naphtholAnilinedyeHelp[10];
				heatSolution();
			}else if(nextClick==6){			
				fliterHelp();			
			}else if(nextClick==7){
				hotMixtureFilter=naphtholAnilinedyeHelp[11];
				reFliterHelp();				
			}
		}		
		trip.start(); 
		window.trip = trip;	
	}
	function washMixtureHelp(){
		trip = new Trip([
		{
			sel : $('#'+washMixtureContainer),
			position :'n',
			content :mixtureFilter,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#waterBottle'),
			position :'n',
			content :acetanilideHelp[5],
			expose : false,
			delay : 4000
		}
		])
	}	
	function heatSolution(){
		trip = new Trip([
		{
			sel : $('#beaker'),
			position :'n',
			content :firstStepHeat,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#beaker3'),
			position :'n',
			content :acetanilideHelp[7],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#burnerhelpDiv'),
			position :'w',
			content :burnerOnHelp,
			expose : false,
			delay : 4000
		}
		])
	}
	function fliterHelp(){
		trip = new Trip([
		{
			sel : $('#beaker3'),
			position :'n',
			content :acetanilideHelp[8],
			expose : false,
			delay : 4000
		},
		{
			sel : $('#conicalFlask'),
			position :'n',
			content :acetanilideHelp[9],
			expose : false,
			delay : 4000
		}
		])
	}
	function reFliterHelp(){
		trip = new Trip([
		{
			sel : $('#conicalFlask'),
			position :'n',
			content :hotMixtureFilter,
			expose : false,
			delay : 4000
		},
		{
			sel : $('#spatulaDiv'),
			position :'n',
			content :acetanilideHelp[11],
			expose : false,
			delay : 4000
		}
		])
	}		
	$('#inference').bind('click',function(){	
		inferenceClickFalg=true;
		trip1 = new Trip([
		{
			sel : $('#inferenceHelp'),
			position : 'e',
			content :inferenceMsg,
			expose : false,
			delay : 7000
		}]);
		trip1.start(); 
		window.trip1 = trip1;
	});
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".content").scrollTop(0);
		helpclickFlag=true;
		helpFunctions[helpIndex]();			
	});
	
	
});