/*--------------DRY HEAT TEST --------------------------*/
var dryHeatLabel,flaming,selectedItemDrag,itemSubdivision,dryHeatHelp,dryHeatSmell,carbonateLabel;
var test1Count=0;
var dragEvent=['dragItem2_0','dragItem2_1','dragItem2_2','dragItem2_3','dragItem2_4','dragItem2_5','dragItem2_6','dragItem2_7','dragItem2_8','dragItem2_9','dragItem2_10'];
var dragLimeEvent=['dragLime_0','dragLime_1','dragLime_2']
var flame1=false,tube1=false,cork1=false,limewater1=false,acetatePaper=false,starchiodidePaper=false,starchPaper=false,amoniumsolnFlag=false,glassFlag=false,tube1_sulphor=false,cork1_sulphor=false,limewater1_sulphor=false;
var imageContent=['rosepaper.png','yellowpaper.png','whitepaper.png','blackrosepaper.png','blueyellowpaper.png','starchpaper.png','milkysolution.png','blacksolution.png','smoke.png','redbrownsmoke.png','greenishyellow.png','darkViolet.png','violetSoln.png','colorlessSoln.png','BlackPpt.png','YellowPpt.png'];
var dryHeatSample=["limewater","leadacetate","sulphur","ammonia","vinegar","ferroussulphate","starchiodidepaper","starchpaper"]; 
var randomDryHeat,selectedLimeDrag;
var tubeLime=false,corkLime=false,limewaterinLime=false;
/*--------CONFIRMATION CARBONATE,SULPHIDE,SULPHATE,NITRATE,NITRITE-----------------*/
var confirmationInfer,carbonateHelp;
var nscommonLabel;
var randomDryHeat=0;//getRandom(0,6);	
// Function for random selection of concentration
function getRandom(low,high)
{
	return Math.floor(Math.random()*(1+high-low))+low;
}
function dryHeatTest(){
	addDryHeatLabel();
	//*--Function toburner on---
	$('#bunorOff').click(function(){
		flame1=true;
		reaction();			
		$('#bunorOff').css({display:'none'});
		$('#bunorOn,#dryHeatflame').css({display:'block'});
		flaming = setInterval(flamesInDryHeat, 50);			
	});
}
function dryHeatOdourColor(){
	$('#preliminaryDryHeat').css({display:'block'});
	$('#observation1').html(dryheatitems[0]);
	$('#subDivisionText,#subDivision').css({display:'block'});
	$('#dryHeatTest,#dryHeatTestDiv').css({display:'block'});
	$('#container2_1').css({display:'block'});
	$('#container2_2,#container2_3').css({display:'none'});	
	dragItem_DryHeat('dragItem2_0',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+204,mainLeft+47);
	dragItem_DryHeat('dragItem2_1',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+130,mainLeft+32);
	dragItem_DryHeat('dragItem2_2',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+97,mainLeft+103);	
}
function dryHeatOdour(){
	$('#observation1').html(dryheatitems[1]);	
	$('#container2_2').css({display:'block'});
	$('#container2_1,#container2_3').css({display:'none'});				
	dragItem_DryHeat('dragItem2_3',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+72,mainLeft+24);
	dragItem_DryHeat('dragItem2_4',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+34,mainLeft+94);			
	dragItem_DryHeat('dragItem2_8',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+147,mainLeft+70);				
}
function dryHeatColor(){
	$('#observation1').html(dryheatitems[2]);
	$('#container2_3').css({display:'block'});
	$('#container2_2,#container2_1').css({display:'none'});	
	dragItem_DryHeat('dragItem2_5',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+22,mainLeft+34);
	dragItem_DryHeat('dragItem2_6',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+44,mainLeft+94);
	dragItem_DryHeat('dragItem2_7',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+136,mainLeft+24);
	dragItem_DryHeat('dragItem2_9',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+211,mainLeft+47);
	dragItem_DryHeat('dragItem2_10',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+135,mainLeft+110);	
	
}
//*--Function to start drag events---------
function dragItem_DryHeat(sampleid,minTop,maxTop,minLeft,maxLeft,itemTop,itemLeft){	
	resetAllEvents();		
	$('#'+sampleid).draggable({
		stop : function(event, ui) {							
			if(this.offsetTop>=minTop &&this.offsetTop<=maxTop&&this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft ){
				$('#'+sampleid).css({top:itemTop+'px',left:itemLeft+'px'});
				if(sampleid==dragEvent[0]){		//Delivery tube			
					$('#tube1_in_dryHeat').css({display:'block'});
					tube1=true;
				}else if(sampleid==dragEvent[1]){//Cork						
					$('#cork1_in_dryHeat').css({display:'block'});
					cork1=true;
				}else if(sampleid==dragEvent[2]){//Lime water					
					$('#limewater1_in_dryHeat').css({display:'block'});
					limewater1=true;
				}else if(sampleid==dragEvent[3]){//	Lead acetate paper
					acetatePaper=true;			
					$('#paper_in_dryHeat').css({display:'block'});
					$("#paper_in_dryHeat").attr('src',simPath+"images/dryHeatTest/"+imageContent[0]);
					$("#paperChange_in_dryHeat").attr('src',simPath+"images/dryHeatTest/"+imageContent[3]);
				}else if(sampleid==dragEvent[4]){//	Ammonium
					amoniumsolnFlag=true;			
					$('#ammoniumAll').css({display:'block'});
				}else if(sampleid==dragEvent[5]){// Ferrus sulphate	
					limewater1_sulphor=true;	
					$('#limewater2_in_dryHeat').css({display:'block'});
				}else if(sampleid==dragEvent[6]){//	Starch iodide paper	
					starchiodidePaper=true;			
					$('#paper_in_dryHeat').css({display:'block'});
					$("#paper_in_dryHeat").attr('src',simPath+"images/dryHeatTest/"+imageContent[1]);
					$("#paperChange_in_dryHeat").attr('src',simPath+"images/dryHeatTest/"+imageContent[4]);
				}else if(sampleid==dragEvent[7]){//	Starch paper	
					starchPaper=true;				
					$('#paper_in_dryHeat').css({display:'block'});
					$("#paper_in_dryHeat").attr('src',simPath+"images/dryHeatTest/"+imageContent[2]);
					$("#paperChange_in_dryHeat").attr('src',simPath+"images/dryHeatTest/"+imageContent[5]);
				}else if(sampleid==dragEvent[8]){//Glass rod	
					glassFlag=true;				
					$('#glass_rod_dryHeat').css({display:'block'});						
				}else if(sampleid==dragEvent[9]){//Delivery tube	
					tube1_sulphor=true;					
					$('#tube2_in_dryHeat').css({display:'block'});
				}else if(sampleid==dragEvent[10]){//Cork
					 cork1_sulphor=true;				
					$('#cork2_in_dryHeat').css({display:'block'});
				}
				selectedItemDrag=sampleid;	
				$('#milkySoln_in_dryHeat').css({display:'none'});
				hideItems();	
				reaction();				
			}else{
				$('#'+sampleid).css({top:itemTop+'px',left:itemLeft+'px'});					
			}
		}
	})
}
//---Function to corresponding preliminary reaction---
function reaction(){
	if(selectedItemDrag==dragEvent[0] || selectedItemDrag==dragEvent[1] || selectedItemDrag==dragEvent[2]){				
		if(dryHeatSample[0]==dryHeatSample[randomDryHeat]){//Carbonate
			if(tube1==true && cork1==true && limewater1==true && flame1==true){
				$("#milkySoln").attr('src',simPath+"images/dryHeatTest/"+imageContent[6]);
				$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[8]);	
				$("#smokeDiv").css({height:107+'px',top:mainTop+108+'px'});	
				$('#milkySoln_in_dryHeat,#smokeDiv').css({display:'block'});
				$('#milkySoln_in_dryHeat').delay(1000).animate({opacity:1},function(){
					$('#inferButton').css({display:'block'});
				});
				$('#confirmation').removeAttr('disabled');		
			}else{			
				$('#milkySoln_in_dryHeat,#inferButton,#smokeDiv').css({display:'none'});
				$('#milkySoln_in_dryHeat').css({opacity:0});
				$('#milkySoln_in_dryHeat').stop(true);
			}
			
		}else{
			if(tube1==true && cork1==true && limewater1==true && flame1==true){	
				$('#inferButton').css({display:'block'});
			}
		}
	}else if(selectedItemDrag==dragEvent[3]){// Acetate paper
		if(dryHeatSample[1]==dryHeatSample[randomDryHeat]){			
			$("#paper_in_dryHeat").css({opacity:1});
			$("#paperChange_in_dryHeat").css({opacity:0});
			if(acetatePaper==true && flame1==true){
				$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[8]);
				$('#smokeDiv').css({display:'block'});	
				$("#smokeDiv").css({height:205+'px',top:mainTop+12+'px'});	
				$("#paper_in_dryHeat").delay(1000).animate({opacity:0});
				$("#paperChange_in_dryHeat").delay(1000).animate({opacity:1},function(){
					$('#inferButton').css({display:'block'});
					$('#paperChange_in_dryHeat,#paper_in_dryHeat').stop(true);
				});
				var acetateTrip = new Trip([
				{
					sel : $('#paper_in_dryHeat'),
					position : 'n',
					content : dryHeatSmell[0],
					expose : false,
					delay : 7000
				}]);
				acetateTrip.start(); 
				window.acetateTrip = acetateTrip;
			}else{
				$("#paper_in_dryHeat").css({opacity:1});
				$("#paperChange_in_dryHeat").css({opacity:0});
				$('#paperChange_in_dryHeat,#paper_in_dryHeat').stop(true);
			}
			$('#confirmation').removeAttr('disabled');
		}else{
			if(acetatePaper==true && flame1==true){	
				$('#inferButton').css({display:'block'});
			}
		}
	}else if(selectedItemDrag==dragEvent[6]){ //Starch iodide paper
		$("#paper_in_dryHeat").css({opacity:1});
		$("#paperChange_in_dryHeat").css({opacity:0});
		if(dryHeatSample[6]==dryHeatSample[randomDryHeat]){
			if(starchiodidePaper==true && flame1==true){
				$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[10]);
				$('#smokeDiv').css({display:'block'});
				$("#smokeDiv").css({height:205+'px',top:mainTop+12+'px'});	
				$("#paper_in_dryHeat").delay(1000).animate({opacity:0});
				$("#paperChange_in_dryHeat").delay(1000).animate({opacity:1},function(){
					$('#inferButton').css({display:'block'});
					$('#paperChange_in_dryHeat,#paper_in_dryHeat').stop(true);
				});
			}else{
				$("#paper_in_dryHeat").css({opacity:1});
				$("#paperChange_in_dryHeat").css({opacity:0});
				$('#paperChange_in_dryHeat,#paper_in_dryHeat').stop(true);
			}
			$('#confirmation').removeAttr('disabled');
		}else{
			if(starchiodidePaper==true && flame1==true){	
				$('#inferButton').css({display:'block'});
			}
		}
	}else if(selectedItemDrag==dragEvent[7]){// Starch paper
		$("#paper_in_dryHeat").css({opacity:1});
		$("#paperChange_in_dryHeat").css({opacity:0});
		if(dryHeatSample[7]==dryHeatSample[randomDryHeat]){
			if(starchPaper==true && flame1==true){
				$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[11]);
				$('#smokeDiv').css({display:'block'});
				$("#smokeDiv").css({height:205+'px',top:mainTop+12+'px'});					
				$("#paper_in_dryHeat").delay(1000).animate({opacity:0});
				$("#paperChange_in_dryHeat").delay(1000).animate({opacity:1},function(){
					$('#inferButton').css({display:'block'});
					$('#paperChange_in_dryHeat,#paper_in_dryHeat').stop(true);
				});
			}else{
				$("#paper_in_dryHeat").css({opacity:1});
				$("#paperChange_in_dryHeat").css({opacity:0});
				$('#paperChange_in_dryHeat,#paper_in_dryHeat').stop(true);
			}
			$('#confirmation').removeAttr('disabled');
		}else{
			if(starchPaper==true && flame1==true){	
				$('#inferButton').css({display:'block'});
			}
		}
	}else if(selectedItemDrag==dragEvent[4] ||selectedItemDrag==dragEvent[8]  ){	//Ammonium		
			if(amoniumsolnFlag==true && flame1==true && glassFlag==true ){					
				$('#glass_rod_dryHeat').draggable({ disabled: false });
				$('#glass_rod_dryHeat').draggable({															
					stop : function(event, ui){															
						//console.log(this.offsetTop+"---hello------"+this.offsetLeft);				
						 if(this.offsetTop>=mainTop-28 &&this.offsetTop<=mainTop+60 && this.offsetLeft>=mainLeft+160 &&this.offsetLeft<=mainLeft+230 ){
							$('#glass_rod_dryHeat').draggable({ disabled: true });
							$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[8]);
							$('#smokeDiv').css({display:'block'});
							$("#smokeDiv").css({height:205+'px',top:mainTop+12+'px'});								
							rotation(document.getElementById("glass_rod_dryHeat"),-90);								
							$('#glass_rod_dryHeat').css({left:mainLeft+203+'px',top:mainTop+39+'px' });								
							if(dryHeatSample[3]==dryHeatSample[randomDryHeat]){
								var amoniumTrip = new Trip([
								{
									sel : $('#glass_rod_dryHeat'),
									position : 'n',
									content : dryHeatSmell[2],
									expose : false,
									delay : 7000
								}]);
									amoniumTrip.start(); 
									window.amoniumTrip = amoniumTrip;
									$('#inferButton').css({display:'block'});
									
									$('#confirmation').removeAttr('disabled');
								}else{
									$('#inferButton').css({display:'block'});
								}
							}else{
								$('#glass_rod_dryHeat').css({left:mainLeft+295+'px',top:mainTop+207+'px' });
							}							
						}
				})
			}
			
	}else if(selectedItemDrag==dragEvent[5] || selectedItemDrag==dragEvent[9] || selectedItemDrag==dragEvent[10]){		
		if(dryHeatSample[5]==dryHeatSample[randomDryHeat]){
			if(tube1_sulphor==true && cork1_sulphor==true && limewater1_sulphor==true && flame1==true){			
				$("#milkySoln").attr('src',simPath+"images/dryHeatTest/"+imageContent[7]);
				$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[9]);
				$("#smokeDiv").css({height:107+'px',top:mainTop+108+'px'});		
				$('#milkySoln_in_dryHeat,#smokeDiv').css({display:'block'});
				$('#milkySoln_in_dryHeat').delay(1000).animate({opacity:1},function(){
					$('#inferButton').css({display:'block'});
				});			
			}else{			
				$('#milkySoln_in_dryHeat,#inferButton,#smokeDiv').css({display:'none'});
				$('#milkySoln_in_dryHeat').css({opacity:0});
				$('#milkySoln_in_dryHeat').stop(true);
			}
			$('#confirmation').removeAttr('disabled');
		}else{
			if(tube1_sulphor==true && cork1_sulphor==true && limewater1_sulphor==true && flame1==true){	
				$('#inferButton').css({display:'block'});
			}
		}	
	}
	if($("#subDivision").find(':selected').val()==1){
		if(amoniumsolnFlag==false && glassFlag==false && acetatePaper==false && flame1==true){			
			smellTest();
		}
	}
	
}
// Function to test smell
function smellTest(){			
	if(dryHeatSample[2]==dryHeatSample[randomDryHeat]){
		$('#inferButton').css({display:'block'});
		$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[8]);
		$('#smokeDiv').css({display:'block'});	
		$("#smokeDiv").css({height:205+'px',top:mainTop+12+'px'});
		var sulphorTrip = new Trip([
		{
			sel : $('#smokeDiv'),
			position : 'n',
			content : dryHeatSmell[1],
			expose : false,
			delay : 7000
		}]);
		sulphorTrip.start(); 
		window.sulphorTrip = sulphorTrip;	
	}else if(dryHeatSample[4]==dryHeatSample[randomDryHeat]){
		$('#inferButton').css({display:'block'});
		$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[8]);
		$('#smokeDiv').css({display:'block'});	
		$("#smokeDiv").css({height:205+'px',top:mainTop+12+'px'});	
		var vinegarTrip = new Trip([
		{
			sel : $('#smokeDiv'),
			position : 'n',
			content : dryHeatSmell[3],
			expose : false,
			delay : 7000
		}]);
		vinegarTrip.start(); 
		window.vinegarTrip = vinegarTrip;	
	}else{
		$('#inferButton').css({display:'block'});
	}
	
}


function flameFn(flameclass1,flameclass2,flameclass3,flameclass4,flameclass5){
	if(flameclass1.css('display') == "block"){
		flameclass1.css({display:'none' });	
		flameclass3.css({display:'none' });	
		flameclass4.css({display:'none' });	
		flameclass5.css({display:'none' });	
		flameclass2.css({display:'block' });	         
	}else if(flameclass2.css('display') == "block"){          
		flameclass1.css({display:'none' });
		flameclass2.css({display:'none' });
		flameclass4.css({display:'none' });
		flameclass5.css({display:'none' });
		flameclass3.css({display:'block' });        
	}else if(flameclass3.css('display') == "block"){          
		flameclass1.css({display:'none' });
		flameclass3.css({display:'none' });
		flameclass2.css({display:'none' });
		flameclass5.css({display:'none' });
		flameclass4.css({display:'block' });       
	}else if(flameclass4.css('display') == "block"){          
		flameclass1.css({display:'none' });
		flameclass3.css({display:'none' });
		flameclass4.css({display:'none' });
		flameclass2.css({display:'none' });
		flameclass5.css({display:'block' });      
	}else{
		flameclass2.css({display:'none' });
		flameclass3.css({display:'none' });
		flameclass4.css({display:'none' });
		flameclass5.css({display:'none' });
		flameclass1.css({display:'block' });
	}
}
//*--Function to hide items on the stage---------
function hideItems(){
	$('#inferButton').css({display:'none'});
	$('#confirmation').attr("disabled","disabled");
	$('#smokeDiv').css({display:'none'});
	rotation(document.getElementById("glass_rod_dryHeat"),0);
	$('#glass_rod_dryHeat').css({left:mainLeft+295+'px',top:mainTop+207+'px' });
	if(selectedItemDrag==dragEvent[0] || selectedItemDrag==dragEvent[1] || selectedItemDrag==dragEvent[2]){	
		$('#paper_in_dryHeat,#glass_rod_dryHeat,#ammoniumAll,#cork2_in_dryHeat,#tube2_in_dryHeat,#limewater2_in_dryHeat').css({display:'none'});
		$("#paperChange_in_dryHeat").css({opacity:0});
		acetatePaper=false,starchiodidePaper=false,starchPaper=false;
		tube1_sulphor=false,cork1_sulphor=false,limewater1_sulphor=false
	}else if(selectedItemDrag==dragEvent[3]){
		$('#cork1_in_dryHeat,#tube1_in_dryHeat,#limewater1_in_dryHeat,#cork2_in_dryHeat,#tube2_in_dryHeat,#limewater2_in_dryHeat,#ammoniumAll,#glass_rod_dryHeat').css({display:'none'});
		tube1=false,cork1=false,limewater1=false;
		tube1_sulphor=false,cork1_sulphor=false,limewater1_sulphor=false
	}else if(selectedItemDrag==dragEvent[4] || selectedItemDrag==dragEvent[8]){
		$('#cork1_in_dryHeat,#tube1_in_dryHeat,#limewater1_in_dryHeat,#cork2_in_dryHeat,#tube2_in_dryHeat,#limewater2_in_dryHeat,#paper_in_dryHeat').css({display:'none'});
		$("#paperChange_in_dryHeat").css({opacity:0});
		tube1=false,cork1=false,limewater1=false;
		acetatePaper=false,starchiodidePaper=false,starchPaper=false;
		tube1_sulphor=false,cork1_sulphor=false,limewater1_sulphor=false
	}else if(selectedItemDrag==dragEvent[5] || selectedItemDrag==dragEvent[9] || selectedItemDrag==dragEvent[10]){	
		$('#paper_in_dryHeat,#glass_rod_dryHeat,#ammoniumAll,#cork1_in_dryHeat,#tube1_in_dryHeat,#limewater1_in_dryHeat,#glass_rod_dryHeat').css({display:'none'});
		$("#paperChange_in_dryHeat").css({opacity:0});
		acetatePaper=false,starchiodidePaper=false,starchPaper=false;
		tube1=false,cork1=false,limewater1=false;
	}else if(selectedItemDrag==dragEvent[6]){
		$('#cork1_in_dryHeat,#tube1_in_dryHeat,#limewater1_in_dryHeat,#cork2_in_dryHeat,#tube2_in_dryHeat,#limewater2_in_dryHeat,#ammoniumAll,#glass_rod_dryHeat').css({display:'none'});
		tube1=false,cork1=false,limewater1=false;
		tube1_sulphor=false,cork1_sulphor=false,limewater1_sulphor=false;
		
	}else if(selectedItemDrag==dragEvent[7]){
		$('#cork1_in_dryHeat,#tube1_in_dryHeat,#limewater1_in_dryHeat,#cork2_in_dryHeat,#tube2_in_dryHeat,#limewater2_in_dryHeat,#ammoniumAll,#glass_rod_dryHeat').css({display:'none'});
	  tube1=false,cork1=false,limewater1=false;
	  tube1_sulphor=false,cork1_sulphor=false,limewater1_sulphor=false;
	}
}
	
//*--Function to start drag events confirmation sulphide,nitrate---------
function dragObjnsTest(sampleid,minTop,maxTop,minLeft,maxLeft,itemTop,itemLeft){	
	resetAllEvents();				
	$('#'+sampleid).draggable({
		stop : function(event, ui) {										
			if(this.offsetTop>=minTop &&this.offsetTop<=maxTop&&this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft ){
				$('#ns_bottleInstage').css({display:'block'});	
				$('#'+sampleid).css({top:itemTop+'px',left:itemLeft+'px'});	
				$('#nsCommondropper').draggable({
					stop : function(event, ui) {
						//alert(this.offsetTop+"---hello------"+this.offsetLeft);	
						if(this.offsetTop>=mainTop-80 &&this.offsetTop<=mainTop+120 && this.offsetLeft>=mainLeft+45 &&this.offsetLeft<=mainLeft+250 ){	
							$('#nsCommondropper').css({top:mainTop+5+'px',left:mainLeft+150+'px'});
							$('#ns_drop').css({display:'block'});
							$('#ns_drop').css({top:mainTop+93+'px'});
							$('#ns_drop').animate({top:mainTop+190+'px'},1000,function(){
								$('#ns_drop').css({display:'none'});
								$('#nsCommondropper').animate({top:mainTop+164+'px',left:mainLeft+258+'px'});									$('#precipitate_nscommon').css({opacity:0});
								$('#precipitate_nscommon').stop(true);
								if($("#confirmation").find(':selected').val()==3){//Sulphide
									if($("#confirmationTests").find(':selected').val()==0){
										
										//$("#saltSoln_ns").attr('src',simPath+"images/SulphideTest/"+imageContent[12]);
										
										$("#saltSoln_ns").fadeOut('slow', function () {
											$("#saltSoln_ns").attr('src',simPath+"images/SulphideTest/"+imageContent[12]);
											$("#saltSoln_ns").fadeIn('slow');
											$('#inferButton').css({display:'block'});
										});
										$('#nsCommondropper').draggable({ disabled: true });
									}else if($("#confirmationTests").find(':selected').val()==1){
										$("#saltSoln_ns").attr('src',simPath+"images/carbonateTest/"+imageContent[13]);
										$('#precipitate_nscommon').css({display:'block'});
										$('#precipitate_nscommon').delay(500).animate({opacity:1},function(){
											$('#inferButton').css({display:'block'});
										});
										$("#precipitate_nscommon").attr('src',simPath+"images/SulphideTest/"+imageContent[14]);
										$('#nsCommondropper').draggable({ disabled: true });
										
									}else if($("#confirmationTests").find(':selected').val()==2){
										$("#saltSoln_ns").attr('src',simPath+"images/carbonateTest/"+imageContent[13]);
										$('#precipitate_nscommon').delay(500).animate({opacity:1},function(){
											$('#inferButton').css({display:'block'});
										});
										$('#precipitate_nscommon').css({display:'block'});
										$("#precipitate_nscommon").attr('src',simPath+"images/SulphideTest/"+imageContent[15]);
										$('#nsCommondropper').draggable({ disabled: true });
										
									}
								}
							});
						}else{
							$('#nsCommondropper').css({top:mainTop+164+'px',left:mainLeft+258+'px'});
						}
					}
				});
			}else{
				$('#'+sampleid).css({top:itemTop+'px',left:itemLeft+'px'});					
			}
		}
	})
}
//Carbonate confirmation test 
function carbonateConfirmation(){
	resetAllEvents();			
	$('#confirm_drag0_0').draggable({
		start: function(event, ui){
			selectedLimeDrag='';
			hideLimeItems();
		},
		stop : function(event, ui){
			$('#confirm_drag0_0').draggable({ disabled: false });			
			if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+180 && this.offsetLeft>=mainLeft+0 &&this.offsetLeft<=mainLeft+370 ){	
				$('#testube_carbonateTest').css({display:'block'});					
				rotation(document.getElementById("testube_carbonateTest"),-90);

				$('#saltSoln_carbonateTest').delay(500).animate({top:mainTop+127+'px',height:78+'px'});
				$('#saltSoln').delay(500).animate({top:mainTop-53+'px'});
				$('#hclSoln').delay(500).animate({opacity:0},function(){
					rotation(document.getElementById("testube_carbonateTest"),0);
					$('#inferButton').css({display:'block'});
					if($("#confirmation").find(':selected').val()==1){
						if($("#confirmationTests").find(':selected').val()==1){							
							$('#precipitate_mgso4').css({display:'block'});								
						}else{
							limewaterTest();
							$("#smokeImg").attr('src',simPath+"images/dryHeatTest/"+imageContent[8]);
							$('#smokeDiv').css({display:'block'});
							$("#smokeDiv").css({height:205+'px',top:mainTop-20+'px',left:mainLeft+143+'px'});								
							
						}
					}
						
				});	
				$('#testube_carbonateTest').delay(1000).animate({left:mainLeft+465+'px',top:mainTop+25+'px' },function(){$('#testube_carbonateTest').css({display:'none'});});
				$('#confirm_drag0_0').draggable({ disabled: true });
				$('#confirm_drag0_0').css({left:mainLeft+465+'px',top:mainTop+25+'px' });
			}else{
				$('#confirm_drag0_0').css({left:mainLeft+465+'px',top:mainTop+25+'px' });
				
			}						
		}
	})
}
//*--Function to show the flame ---------
function flamesInDryHeat(){
	flameFn($(".dryHeatflame1"),$(".dryHeatflame2"),$(".dryHeatflame3"),$(".dryHeatflame4"),$(".dryHeatflame5"));			
}
//function for testing lime water
function limewaterTest(){		
	dragLimeItem('dragLime_0',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+204,mainLeft+47);
	dragLimeItem('dragLime_1',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+130,mainLeft+32);
	dragLimeItem('dragLime_2',mainTop-11,mainTop+303,mainLeft-387,mainLeft-15,mainTop+97,mainLeft+103);
}
//*--Function to start drag events---------
function dragLimeItem(sampleid,minTop,maxTop,minLeft,maxLeft,itemTop,itemLeft){	
	resetAllEvents();		
	$('#'+sampleid).draggable({
		stop : function(event, ui) {							
			if(this.offsetTop>=minTop &&this.offsetTop<=maxTop&&this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft ){
				//alert(this.offsetTop+"---"+this.offsetLeft);
				$('#'+sampleid).css({top:itemTop+'px',left:itemLeft+'px'});
				if(sampleid==dragLimeEvent[0]){		//Delivery tube			
					$('#tube_limeTest').css({display:'block'});
					tubeLime=true;
				}else if(sampleid==dragLimeEvent[1]){//Cork						
					$('#cork_limeTest').css({display:'block'});
					corkLime=true;
					$("#smokeDiv").css({height:107+'px',top:mainTop+63+'px',left:mainLeft+143+'px'})
				}else if(sampleid==dragLimeEvent[2]){//Lime water						
					$('#limewater_limeTest').css({display:'block'});
					limewaterinLime=true;
				}
				$('#'+sampleid).draggable({ disabled: true });				
				selectedLimeDrag=sampleid;
				hideLimeItems();
				limeReaction();			
			}else{
				$('#'+sampleid).css({top:itemTop+'px',left:itemLeft+'px'});					
			}
		}
	})
	
}
//*--Function to hide items on the stage---------
function hideLimeItems(){
	$('#inferButton').css({display:'none'});		
	if(selectedLimeDrag==dragLimeEvent[0] || selectedLimeDrag==dragLimeEvent[1] || selectedLimeDrag==dragLimeEvent[2]){	
		$('#testube_carbonateTest').css({left:mainLeft+200+'px',top:mainTop-10+'px'});
		$('#testube_carbonateTest').stop(true);
		$('#testube_carbonateTest').css({display:'none'});
		rotation(document.getElementById("testube_carbonateTest"),0);		
	}else {
		$('#tube_limeTest,#cork_limeTest,#limewater_limeTest,#milkySoln_Limetest').css({display:'none'});
	}
}
//Function to create lime water reaction
function limeReaction(){			
	if(tubeLime==true && corkLime==true && limewaterinLime==true){
		$('#milkySoln_Limetest').css({display:'block'});
		$('#milkySoln_Limetest').delay(1000).animate({opacity:1},function(){							
			$('#inferButton').css({display:'block'});
		});		
	}
}
//Function to rotate object
function rotation(rotateId,degree){
	rotateId.style.webkitTransformOrigin='50% 50%';
	rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
	rotateId.style.MozTransformOrigin='50% 50%';
	rotateId.style.MozTransform ='rotate('+ degree +'deg)';
}
//Function to reset all events
function resetAllEvents(){
	acetatePaper=false,starchiodidePaper=false,starchPaper=false,flame1=false;
	clearInterval(flaming);
	$('#cork1_in_dryHeat,#tube1_in_dryHeat,#limewater1_in_dryHeat,#paper_in_dryHeat,#glass_rod_dryHeat,#ammoniumAll,#cork2_in_dryHeat,#tube2_in_dryHeat,#limewater2_in_dryHeat,#milkySoln_in_dryHeat,#inferButton,#smokeDiv,#testube_carbonateTest').css({display:'none'});
	$('#milkySoln_in_dryHeat').css({opacity:0});	
	$('#milkySoln_in_dryHeat,#testube_carbonateTest').stop(true);
	$('#paper_in_dryHeat,#paperChange_in_dryHeat').stop(true);
	$("#paper_in_dryHeat").css({opacity:1});
	$("#paperChange_in_dryHeat").css({opacity:0});
	rotation(document.getElementById("glass_rod_dryHeat"),0);
	$('#glass_rod_dryHeat').css({left:mainLeft+295+'px',top:mainTop+207+'px' });
	$('#testube_carbonateTest').css({left:mainLeft+200+'px',top:mainTop-10+'px'});
	amoniumsolnFlag=false,glassFlag=false;	
	$('#bunorOff').css({display:'block'});
	$('#bunorOn,#dryHeatflame').css({display:'none'});
	$('#saltSoln_carbonateTest,#saltSoln').stop(true);
	$("#smokeDiv").css({height:107+'px',top:mainTop+108+'px',left:mainLeft+185+'px'});	
	$('#precipitate_mgso4').css({display:'none'});	
	$('#confirm_drag0_0').css({left:mainLeft+465+'px',top:mainTop+25+'px' });
	tubeLime=false,corkLime=false,limewaterinLime=false;
	$('#tube_limeTest,#cork_limeTest,#limewater_limeTest,#milkySoln_Limetest').css({display:'none'});
	$('#milkySoln_Limetest,#hclSoln').stop(true);
	$('#hclSoln').css({opacity:1});
	$("#saltSoln_ns").attr('src',simPath+"images/carbonateTest/"+imageContent[13]);
	$('#precipitate_nscommon').css({display:'none'});
}
function addDryHeatLabel(){
	$('#text2_0').html(dryHeatLabel[0]);	
	$('#text2_1').html(dryHeatLabel[1]);	
	$('#text2_2').html(dryHeatLabel[2]);
	$('#text2_3').html(dryHeatLabel[3]);
	$('#text2_4').html(dryHeatLabel[4]);
	$('#text2_5').html(dryHeatLabel[5]);
	$('#text2_6').html(dryHeatLabel[6]);
	$('#text2_7').html(dryHeatLabel[7]);
	$('#nh3Label2_1').html(dryHeatLabel[8]);
	$('#text2_8').html(dryHeatLabel[9]);
	$('#text2_9').html(dryHeatLabel[0]);	
	$('#text2_10').html(dryHeatLabel[2]);
	$('#NH3lABEL_in_dryHeat').html(dryHeatLabel[8]);
		
}

