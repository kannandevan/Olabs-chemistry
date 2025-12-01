//*--Ready function---------
var controlLabel,InsArray,opt1,opt2;
var homoanimals,labeloptions,imgsize,helpoption;
var vals1,vals2,k,j,anoplant;
var optNumber,struct_img,homostructpos,homoplants,anoanimals,homoimgspos,homoplant_coord,homoplant_coord2;
var rnd1,rnd2,num,titleoptions,tooltip_top,tooltip_left,inferencearr,titleopt,anoplant_coord,anoplant_coord2,anoanimal_coord,anoanimal_coord2;
var mainTop,mainLeft;
var scenes_flag=0;
var tooltipos,tooltipdir,directions, dirarray;
var Q=10,Q1=0.01;
var equationarr;
var arrayno=0,arrayno1=0;
var reactions,reactionelements;
var electrode_img,electrolyte_img;
var labelrod_symbols,labeslsol_symbols ,volt_measure;
var temp_val, conc1_val, conc2_val,temp_final;
var E_cellval,Ecell;
var concval,e_val;
var swap_variable;
var char_variable;
var gt=$;
//slider value change 
	function changeRightWeight(id,val){
		if(id=="Temperature"){
			Q=val;
			$("#rightVal").html(Q+' &deg;C');
		}
		else if(id=="Concentration1"){	
			Q1=val;
			$("#sliderspan").html(Q1);	
		}
		else
		{	
			Q1=val;
			$("#sliderspan1").html(Q1);
		}		
	}
	window.onload = function() { 
		
		document.getElementById("expName").innerHTML=gt.gettext("Determination of EMF of a Cell");
		//$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
		controlLabel=[gt.gettext("Reset"),gt.gettext('Ag(s) -->Ag<sup>+</sup>(aq)+e<sup>-</sup>'),gt.gettext('Ag<sup>+</sup>(aq)+e<sup>-</sup>-->Ag(s)'),gt.gettext('Ag<sup>+</sup>'),gt.gettext('Ag(s)')];
		InsArray=[gt.gettext('Select Electrode: '),gt.gettext("Cathode"),gt.gettext("Anode"),gt.gettext("Concentration:"),gt.gettext('Instruction'),gt.gettext('Temperature:'),10,100,0.01,0.1,gt.gettext('Chemical Reaction'),gt.gettext('Overall'),gt.gettext('Calculation of EMF:')];
		equationarr=[gt.gettext('E cell = E&deg;cell-(RT/nF) ln '),gt.gettext('Ba<sup>2+</sup>')];
		opt1=[gt.gettext("Barium"),gt.gettext("Magnesium"),gt.gettext("Zinc"),gt.gettext("Iron"),gt.gettext("Copper"),gt.gettext("Silver")];
		reactions=[[gt.gettext('Ba<sup>2+</sup>(aq)+2e<sup>-</sup>-->Ba(s)'),gt.gettext('Mg<sup>2+</sup>(aq)+2e<sup>-</sup>-->Mg(s)'),gt.gettext('Zn<sup>2+</sup>(aq)+2e<sup>-</sup>-->Zn(s)'),gt.gettext('Fe<sup>2+</sup>(aq)+2e<sup>-</sup>-->Fe(s)'),gt.gettext('Cu<sup>2+</sup>(aq)+2e<sup>-</sup>-->Cu(s)'),gt.gettext('2Ag<sup>+</sup>(aq)+2e<sup>-</sup>-->2Ag(s)')],
		[gt.gettext('Ba(s) -->Ba<sup>2+</sup>(aq)+2e<sup>-</sup>'),gt.gettext('Mg(s) -->Mg<sup>2+</sup>(aq)+2e<sup>-</sup>'),gt.gettext('Zn(s) -->Zn<sup>2+</sup>(aq)+2e<sup>-</sup>'),gt.gettext('Fe(s) -->Fe<sup>2+</sup>(aq)+2e<sup>-</sup>'),gt.gettext('Cu(s) -->Cu<sup>2+</sup>(aq)+2e<sup>-</sup>'),gt.gettext('2Ag(s) -->2Ag<sup>+</sup>(aq)+2e<sup>-</sup>')]];
		equ=gt.gettext('(aq)')
		reactionelements=[[gt.gettext('Ba<sup>2+</sup>'),gt.gettext('Mg<sup>2+</sup>'),gt.gettext('Zn<sup>2+</sup>'),gt.gettext('Fe<sup>2+</sup>'),gt.gettext('Cu<sup>2+</sup>'),gt.gettext('2Ag<sup>+</sup>')],[gt.gettext('Ba(s)'),gt.gettext('Mg(s)'),gt.gettext('Zn(s)'),gt.gettext('Fe(s)'),gt.gettext('Cu(s)'),gt.gettext('2Ag(s)')]];
	
		labelrod_symbols=[gt.gettext('Ba'),gt.gettext('Mg'),gt.gettext('Zn'),gt.gettext('Fe'),gt.gettext('Cu'),gt.gettext('Ag')];
		labeslsol_symbols=[gt.gettext('BaCl<sub>2</sub> (aq)'),gt.gettext('MgCl<sub>2</sub> (aq)'),gt.gettext('ZnSO<sub>4</sub> (aq)'),gt.gettext('FeSO<sub>4</sub> (aq)'),gt.gettext('CuSO<sub>4</sub> (aq)'),gt.gettext('AgNO<sub>3</sub> (aq)')];
		electrode_img=['bariumelectrode.png','magnesium_electrode.png','zinc_electrodes.png','iron_electrodes.png','copper_electrode.png','silver_electrode.png'];
		volt_measure=[gt.gettext('V')];
		//electrolyte_img=['water.png','water.png','water.png','water_green.png','water_blue.png','water.png'];
		electrolyte_img=['#FFF','#FFF','#FFF','#3d9e84','#0070d9','#FFF'];
		E_cellval=[[0,0.53,2.14,2.46,3.24,3.7],[-0.53,0,1.61,1.93,2.71,3.17],[-2.14,-1.61,0,0.32,1.1,1.56],[-2.46,-1.93,-0.32,0,0.78,1.24],[-3.24,-2.71,-1.1,-0.78,0,0.46],[-3.7,-3.17,-1.56,-1.24,-0.46,0]];
			
		$(document).ready(function() {
			mainTop=$('#mainDiv').position().top;
			mainLeft=$('#mainDiv').position().left;	
			$('#mainDiv').mousedown(function(event){event.preventDefault();});	
			addLabel();			
			addintoDropDown( $('#Combo1'),opt1);
			addintoDropDown( $('#Combo2'),opt1);
			calculation();
			//Function for adding label for all controls---	
			function addLabel(){
				$('#reload').attr('value',controlLabel[0]);
				$('#Ins1').html(InsArray[0]);
				$('#Ins2').html(InsArray[0]);
				$('#title1').html(InsArray[1]);
				$('#title2').html(InsArray[2]);
				$('#Ins01').html(InsArray[5]);
				$('#rightminvals').html(InsArray[6]);
				$('#rightmaxvals').html(InsArray[7]);
				$("#rightVal").html(Q+' &deg;C');
				$('#slidertxt').html(InsArray[3]);	
				$('#sliderspan').html(Q1);
				$('#slidertxt1').html(InsArray[3]);	
				$('#sliderspan1').html(Q1);
				$('#rightminvals1,#rightminvals2').html(InsArray[8]);
				$('#rightmaxvals1,#rightmaxvals2').html(InsArray[9]);
				$('#title3').html(InsArray[10]);
				$('#Ins3').html(InsArray[2]+':');
				$('#Ins4').html(InsArray[1]+':');	
				$('#Ins5').html(InsArray[11]+':');
				$('#eq1').html(reactions[1][0]);
				$('#eq2').html(reactions[0][0]);	
				$('#eq3').html(reactionelements[1][arrayno1]+" + "+reactionelements[0][arrayno]+equ+" --> "+reactionelements[0][arrayno1]+equ+" + "+reactionelements[1][arrayno]);
				$('#title4').html(InsArray[12]);
				$('#eq4').html(equationarr[0]+"(["+reactionelements[0][arrayno1]+"]/["+reactionelements[0][arrayno]+"])");	
				$('#cathode_label').html(InsArray[1]);
				$('#anode_label').html(InsArray[2]);
				$('#cathode_sollabel').html(labeslsol_symbols[0]);
				$('#anode_sollabel').html(labeslsol_symbols[0]);
				$('#cathode_rodlabel').html(labelrod_symbols[0]);
				$('#anode_rodlabel').html(labelrod_symbols[0]);		
			}
			//Function for adding option in combo box---	
			function addintoDropDown(getId,valueSet){		
				var selected = getId;
				$.each(valueSet, function(val, text) {
				selected.append($('<option></option>').val(val).html(text));});			
			}
			//on change function of combo box. 	
			$("#Combo1").change(function(){	
				combofunc();
			});
			$("#Combo2").change(function(){
				combofunc();
			});

			//function for displaying voltmeter reading
			function calculation(){
				//kelvin conversion
				temp_val=  parseInt($("#Temperature").val());
				temp_final=temp_val+273;
				Math.log10 = function(n) {//math log base 10 function
				return (Math.log(n)) / (Math.log(10));   
				}		
				conc1_val= $("#Concentration1").val();
				conc2_val= $("#Concentration2").val();
				
				if(arrayno==5 &&arrayno1==5){
					concval=conc2_val/conc1_val
				e_val=1;
				}
				else
				{
				e_val=2;
				if(arrayno==5){
					concval=conc2_val/Math.pow(conc1_val, 2);
					
				}
				else if(arrayno1==5){
					concval=Math.pow(conc2_val,2)/conc1_val
					
				}
				else
				{
					concval=conc2_val/conc1_val
					
				}
				
				}
				//formula for e cell;
				Ecell=(E_cellval[arrayno1][arrayno]-[(2.303*8.314*temp_final)/(96487*e_val)*[Math.log10(concval)]]).toFixed(3);
				//console.log(concval);
				$('#volt_reading').html(Ecell);
				$('#unit').html(volt_measure[0]);
				char_variable=($(volt_reading).html()).charAt(0);
				if(char_variable=='-'){
					$('#volt_reading').css({'left':'45%'});
				}
				else
				{
					$('#volt_reading').css({'left':'45%'});
				}
				
				
			}
			$(".rangeSlider").on('input', function() {
			calculation();
			});
			//function for combo change
			function combofunc(){
				arrayno=$("#Combo1 option:selected").val();	//cathode	
				arrayno1=$("#Combo2 option:selected").val();//anode
				//volt_measure-calculation part 
				calculation();
				//Electrode change 
				$("#cathoderod_img").attr('src',simPath+"images/"+electrode_img[arrayno]);
				$("#anoderod_img").attr('src',simPath+"images/"+electrode_img[arrayno1]);
				//solution change
				$("#solution_water_an").css("background-color", electrolyte_img[arrayno1]);
				$("#solution_water_cd").css("background-color" , electrolyte_img[arrayno]);
				//label change
				$('#cathode_sollabel').html(labeslsol_symbols[arrayno]);
				$('#anode_sollabel').html(labeslsol_symbols[arrayno1]);
				$('#cathode_rodlabel').html(labelrod_symbols[arrayno]);
				$('#anode_rodlabel').html(labelrod_symbols[arrayno1]);	
				//control section equations and reactions 
				if(arrayno==5 &&arrayno1==5){
					
				$('#eq1').html(controlLabel[1]);
				$('#eq2').html(controlLabel[2]);
				$('#eq3').html(controlLabel[4]+" + "+controlLabel[3]+equ+" --> "+controlLabel[3]+equ+" + "+controlLabel[4]);
				$('#eq4').html(equationarr[0]+"(["+controlLabel[3]+"]/["+controlLabel[3]+"])");	
				}
				else
				{
					
				$('#eq1').html(reactions[1][arrayno1]);
				$('#eq2').html(reactions[0][arrayno]);
				swap_variable=reactionelements[0][5];
				if(arrayno==5){
					
				reactionelements[0][5]=controlLabel[3];
				$('#eq4').html(equationarr[0]+"(["+reactionelements[0][arrayno1]+"]/["+reactionelements[0][arrayno]+"]<sup>2</sup>)");	
				}
				else if(arrayno1==5){
					
				reactionelements[0][5]=controlLabel[3];
				$('#eq4').html(equationarr[0]+"(["+reactionelements[0][arrayno1]+"]<sup>2</sup>/["+reactionelements[0][arrayno]+"])");	
				}
				else
				{
				
				$('#eq4').html(equationarr[0]+"(["+reactionelements[0][arrayno1]+"]/["+reactionelements[0][arrayno]+"])");
				}
				reactionelements[0][5]=swap_variable;
				$('#eq3').html(reactionelements[1][arrayno1]+" + "+reactionelements[0][arrayno]+equ+" --> "+reactionelements[0][arrayno1]+equ+" + "+reactionelements[1][arrayno]);
					
				
				}			
			}
			//*--Function to click reload button to reset all events---
			$("#reload").click(function(){
			window.location.reload();	   
			});
		});	 			
	};

	