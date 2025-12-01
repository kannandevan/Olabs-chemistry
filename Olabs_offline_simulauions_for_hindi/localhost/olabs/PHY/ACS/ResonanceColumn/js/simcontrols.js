var zoomFlag=false,helpMessage,helpFlag=false;
//---------------Onloading events--------------
window.onload = function init(){
	/* Document ready function */
	$(document).ready(function(){
		/* Variable declaration */
		var surroundings,surroundingVal,diameter=5,surroundTemp=2,tubeFreq=300,height=13.5,hgtSlider,drag_Limit;
		var resonanceTubeTop=160,resonanceSliderChange=13.5,surroundingMolarMass=[],endCorrection=1.5,l1=0,l2=0;
		var mainTop=$('#mainDiv').position().top;
		var mainLeft=$('#mainDiv').position().left;	
		var gamma,SarroundingsGamma,tubeWidth,tubeLeft,waveWidth,waveLeft,waveDivTop,waveTop,scaleLength,maxVol=1,tfVolume=0;
		var waveOriginalHeight=$('#wave').height();
		var scaleZoomTop=-40,count=0,waveLength,audioFlag=false;
		var audio;
		var soundWavePos=5,topVal=waveTopVal=160,vibrateCount=0,waterTop=-1;
		var hitBtnOn = false;
        		
		/* Language translating object */
		/* Template labels */
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	    /* Experiment heading */
		$('#expName').html(gt.gettext("Resonance Column"));
		/* Prevent the selection */
		$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
		surroundings=[gt.gettext("Air"),gt.gettext("Carbon dioxide"),gt.gettext("Nitrogen"),gt.gettext("Oxygen"),gt.gettext("Argon"),gt.gettext("Chlorine")];
		helpMessage=[gt.gettext("Drag the inner tube to adjust the air column."),gt.gettext("Drag the apparatus to move it down."),gt.gettext("Click on the zoom in icon to view the zoomed area."),gt.gettext("Click on the zoom out icon to view the zoomed out area.")]
		surroundingMolarMass=[0.02897,0.0440095,0.02802,0.0319994,0.039948,0.070906];
		molarMass=surroundingMolarMass[0];
		var surroundingVariation=[11,13,11,11,13,14];
		var surroundingVariate=surroundingVariation[0];
		var soundLabels=[gt.gettext("Sound On"),gt.gettext("Sound Off")];
		var hitLabels=[gt.gettext("Hit tuning fork"),gt.gettext("Stop vibration")];
		var soundOnLabel=soundLabels[0];
		var soundOffLabel=soundLabels[1];
		var hitOnLabel=hitLabels[0];
		var hitOffLabel=hitLabels[1];
		var velocityLabel=gt.gettext("Velocity of the sound:");
		soundBtnLabel=soundLabels[1];
		hitBtnLabel=hitLabels[1];
		SarroundingsGamma=[1.4,1.3,1.4,1.4,1.67,1.4];
		gamma=SarroundingsGamma[0];
		addintoDropDown($('#surroundingDropbox'),surroundings);
		/* Add labels */
		$('#surroundingLbl').html(gt.gettext("Select the surrounding:"));
		$('#surroundingTempLbl').html(gt.gettext("Surrounding temp (&#176C):"));
		$('#tubeDiameterLbl').html(gt.gettext("Tube diameter (cm):"));
		$('#tuningForkFreqLbl').html(gt.gettext("Tuning fork frequency (Hz):"));
		$('#heightLbl').html(gt.gettext("Change height (cm):"));
		$('#endCorrectionLabel').html(gt.gettext("End correction:"));
		$('#hitBtn').attr('value',hitOnLabel);
		$('#soundBtn').attr('value',soundOnLabel);
		$("#resultLabel").html(gt.gettext("Show result"));
		$('#resetBtn').attr('value',gt.gettext("Reset"));		
		wavePositionChange();		
		calcultion();	
		//Surrounding dropbox change--------	
		$surroundingChange=$('#surroundingDropbox').on('change', function() {	    	
			surroundingVal=$surroundingChange.val();
			molarMass=surroundingMolarMass[surroundingVal];
			gamma=SarroundingsGamma[surroundingVal];
			surroundingVariate=surroundingVariation[surroundingVal];
			hideAnswer();
			calcultion();	
			wavePositionChange();		
		});
		//Function for changing surrounding slider		
	    $surroundSlider = $('#tempSlider').on('input', function() {
	        surroundTemp=$surroundSlider.val();
	        surroundTemp=parseInt(surroundTemp); 
	        $('#surroundingTempVal').html(surroundTemp);
	        hideAnswer();
	        calcultion();
	        wavePositionChange();	   
		});
		//Function for changing tube diameter slider		
	    $tubeFreqSlider = $('#tuningForkFreqSlider').on('input', function() {
	    	tubeFreq=$tubeFreqSlider.val();
	        $('#tuningForkFreqVal').html(tubeFreq);
	        hideAnswer();	      
	        calcultion();
	        wavePositionChange();
		});
		//Function for changing tube frequency slider		
	    $diamSlider = $('#tubeDiameterSlider').on('input', function() {
	    	diameter=$diamSlider.val();
	        $('#tubeDiameterVal').html(diameter);
	        tubeWidth=2*diameter+13; 
			tubeLeft=2.5-diameter;
			waveWidth=2.2*diameter+8; 
			waveLeft=16-1.2*diameter;
	        $('#glassToMove').css({width:tubeWidth+'px',left:tubeLeft+'px'});
	        $('#wave').css({width:waveWidth+'px',left:waveLeft+'px'});
	        $('#wave2').css({width:waveWidth+'px',left:waveLeft+'px'});
	        hideAnswer();
	        calcultion();
		});
		//Function for changing height slider		
	    $hgtSlider = $('#heightSlider').on('input', function() {	    	
	    	height=$hgtSlider.val();
	    	$('#heightVal').html(height);
			height=parseFloat(height);	
			soundWavePos=height;	
			resonanceTubeTop=(-1.598*height)+173.99;
        	resonanceTubeTop=resonanceTubeTop.toFixed(0);	
	    	waveTopVal=resonanceTubeTop;   	
	    	$('#tuningFork').css({top:resonanceTubeTop-149+'px'});
	    	$('#forkVibration').css({top:waveTopVal-160+'px'});
	    	$('#scaleToMove').css({top:resonanceTubeTop+'px'});
			$('#glassToMove').css({top:resonanceTubeTop+'px'});
	    	$('#resonanceTube').css({top:resonanceTubeTop+"px"});
	    	zoomScaleMove(soundWavePos);	    	
	    	checkSound();	    	
		});
		//Function to click zoom in icon to display zoom view
		$('#zoomInClick').click(function() {
			zoomFlag=true;
			$('#zoomInArea').css({display:'block'});
			$('#zoomOutArea').css({display:'none'});
		})
		//Function to click zoom out icon to display zoom out view
		$('#zoomOutClick').click(function() {
			zoomFlag=false;	
			$('#zoomInArea').css({display:'none'});
			$('#zoomOutArea').css({display:'block'});
		})
		//Function for dragging resonance tube 
		$('#resonanceTube').draggable({axis: "y",
			drag:function(event, ui) {					
	    		topVal=this.offsetTop;
				if(topVal>=-39 && topVal<=166){					    		
					resonanceSliderChange=(173.99-topVal)/1.598;
					resonanceSliderChange=resonanceSliderChange.toFixed(1);
					if(resonanceSliderChange>=5 && resonanceSliderChange<=100){	
						waveTopVal=this.offsetTop;
						soundWavePos=resonanceSliderChange;
						$('#heightSlider').val(resonanceSliderChange);
						$('#heightVal').html(resonanceSliderChange);
						$('#tuningFork').css({top:waveTopVal-149+'px'});
						$('#forkVibration').css({top:waveTopVal-160+'px'});
						$('#scaleToMove').css({top:waveTopVal+'px'});
						$('#glassToMove').css({top:waveTopVal+'px'});
						zoomScaleMove(soundWavePos);
						checkSound();
					}				
				}				
			},
			stop:function(event, ui){				
				$('#resonanceTube').css({top:$('#scaleToMove').position().top+'px'});
			}
		});	
		//Function for dragging whole tube		
		$('#dragTube').draggable({axis: "y",
			drag:function(event, ui) {				
				if(helpFlag==true){
					 helpFlag=false;
					 trip.stop(); 
				}
				if ((this.offsetTop>=mainTop+60)&&(this.offsetTop<=mainTop+250))
					$('#zoomOutArea').css({top:this.offsetTop-60+'px'});				
			},
			stop:function(event, ui) {				
				if ((this.offsetTop<=mainTop+60) || (this.offsetTop>=mainTop+250)){
					var zoomOutAreaTop=$('#zoomOutArea').position().top;
					$('#dragTube').css({top:zoomOutAreaTop+60+'px'});
				}				
			}
		});
		//Function for calculating velocity,l1,l2		
		function calcultion(){								
			velocity=Math.sqrt((gamma*8.314*(surroundTemp+273))/molarMass);
			endCorrection=(0.3*parseFloat(diameter))/100;
			endCorrection=parseFloat(endCorrection.toFixed(4))
			$('#endCorrectionVal').html(" "+(endCorrection*100).toFixed(2)+" cm");
			l1=velocity/(4*parseInt(tubeFreq));
			l2=l1*3;
			l1Cm=((l1-endCorrection)*100).toFixed(1);
			l2Vol=((l2-endCorrection)*100).toFixed(1);
			l2Cm=((l2-(3*endCorrection))*100).toFixed(1);
			waveLength=(parseFloat(l1Cm)*4)*surroundingVariate;
			$('#wave').css({height:waveLength+'px'});
			$('#wave2').css({height:waveLength+'px'});	
		}		
  		//Function to hide answer
  		function hideAnswer(){
  			$('#showAns').attr('checked', false);
			$("#answerLabel,#endCorrection").css({display:'none'});
  		}
  		//Function for moving zoom scale	
		function zoomScaleMove(zoomHeight){	
			scaleZoomTop=160-(40*zoomHeight);	
			$('#scaleZoom').css({top:mainTop+scaleZoomTop+'px'});
			calcultion();
			wavePositionChange();			
		}
		//Function for moving wave
		function wavePositionChange(){
			waveDivTop=parseFloat(waveTopVal)-4;
		    $('#waveDiv').css({top:waveDivTop+'px'});
 		    waveTop=waveDivTop+48-(0.53*soundWavePos); 		  
 		    waterTop=(0.53*soundWavePos);
 		    $('#waveDiv').rotate(180);
			$('#wave').css({top:waveTop+'px'});
			$('#wave2').css({top:waveTop+'px'});
			$('#water').css({top:waterTop+'px'});
		}
		//Function for showing answer of velocity of sound 
		$("#showAns").click(function () {		
	 		$("#answerLabel").html(velocityLabel+'<b> '+velocity.toFixed(2)+'</b>' +" m/s").toggle(this.checked);
			$("#endCorrection").toggle(this.checked);
		});
		//Function  to hit tunning fork  		
	    $('#hitBtn').click(function(){ 	
	   		var vibrate,waveVibrate; 
	   		if(!hitBtnOn){
	   			hitBtnOn = true;
	   		}else{
	   			hitBtnOn = false;
	   		}	
			hitBtnLabel=$(this).val();console.log(hitBtnLabel,hitLabels[0])
			if(hitBtnLabel==hitLabels[0]){//Hit on
				$('#hitBtn').attr('value',hitOffLabel);	
				$('#waveDiv,#forkVibration').css({display:'block'});
				waveVibrate=setInterval(showWaveVibration, 10);
				vibrate=setInterval(vibrateFn,150);										
			}else{//Sound off
				$('#hitBtn').attr('value',hitOnLabel);	
				$('#waveDiv,#forkVibration').css({display:'none'});								
				$('#soundBtn').attr('value',soundOnLabel);	
				soundBtnLabel=soundOnLabel;				
				audio.pause();	
				clearInterval(vibrate);	
				clearInterval(waveVibrate);		
			}
			checkSound();
	    })	
	    //Function to show wave vibration
	    function showWaveVibration(){	    	
	    	$('#wave').toggle();		
	    }
	    //Function to show tuning fork vibration
	    function vibrateFn(){			
			vibrateCount++;	
			$("#forkVibration").attr('src',simPath+"images/vibration"+vibrateCount+".png");			
			if(vibrateCount==5){
				vibrateCount=0;
			}					
		}	
		//Function  on/off  sound 
	    $('#soundBtn').click(function(){				   	
			soundBtnLabel=$(this).val();
			if(soundBtnLabel==soundLabels[0]){//Sound on
				$('#soundBtn').attr('value',soundOffLabel);								
			}else{//Sound off
				audio.pause();			
				$('#soundBtn').attr('value',soundOnLabel);				
			}
			checkSound();
	    })
	    //Function for appling sound
	    function checkSound(){	    	 
	    	if(soundBtnLabel==soundLabels[0] && hitBtnLabel==hitLabels[0]){//Sound on  
	    		audio=document.getElementById("sinewave");
	    		audio.loop=true;
	    		volumeControll();			   
		    }
	    }	  	
		//-------Function to add values into combobox------
		function addintoDropDown(getId,valueSet){
			$.each(valueSet, function(val, text) {
				getId.append(
					$('<option ></option>').val(val).html(text) 
				);
			});
		}		
		//Function for control sound
		function volumeControll(){		
			scaleLength=l1Cm;	
			var volumeDis=l2Vol-l1Cm;			 
			if(soundWavePos>(volumeDis/2)+1){
				scaleLength= l2Cm; 				 
			}		
			if(l1Cm==soundWavePos || l2Cm==soundWavePos ){
				tfVolume=1;
			}			
			if(soundWavePos<scaleLength){			 
				tfVolume= maxVol-((scaleLength-soundWavePos)/2);
			}else{						
				tfVolume =(maxVol-((scaleLength-soundWavePos)/2)*-1);					
			}							
			tfVolume=tfVolume.toFixed(1);
			if(tfVolume< 0 || tfVolume> 1){	
				audio.volume = 0;
				audio.pause();	
			}else{
				audio.volume = tfVolume; 
				audio.play();	
			}
   		}		 		
	});
}