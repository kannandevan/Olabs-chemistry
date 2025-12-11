<!-- Simulation main area-->  
<div id="mainDiv">	
	 <!-- Solubility test area  --> 
	<div id="solubilityTest">
		<!-- Background-->  
	    <img src="<?php getSimpath(); ?>images/BG.gif" style="position: absolute;top: -6px;"/>  
	     <!-- Drops  -->
	    <img class="drop1" src="<?php getSimPath(); ?>images/drop.png"/>
   		<img class="drop2" src="<?php getSimPath(); ?>images/drop.png"/> 
	    <!-- Test tube1  --> 
	    <div id="testtube1_solubility" class="testtubeDivStyle">
	    	
	    	<div id="testtubeSoln1_solubility" class="testtubeSolnDivStyle"> 
				<div class="solnStyle" id="testtubeSolnImg1_solubility"></div>
				<div class="solnLayerStyle" id="solnLayer_testtube1"></div>
				<div style="border:solid #FFF;width:22px;Position:absolute;height:1px;top:-6px"></div>		    	
			</div>	
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
		</div>
		<!-- Test tube2 --> 
		<div id="testtube2_solubility" class="testtubeDivStyle">
			<div id="testtubeSoln2_solubility" class="testtubeSolnDivStyle">
				<div class="solnStyle"  id="testtubeSolnImg2_solubility"></div>	
				<div class="solnLayerStyle" id="solnLayer_testtube2"></div>
				<div style="border:solid #FFF;width:22px;Position:absolute;height:1px;top:-6px"></div>	    	
			</div>			
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
		</div>
		<!-- Test tube3 --> 
		<div id="testtube3_solubility" class="testtubeDivStyle">
			<div id="testtubeSoln3_solubility" class="testtubeSolnDivStyle">
				<div class="solnStyle"  id="testtubeSolnImg3_solubility"></div>
				<div class="solnLayerStyle" id="solnLayer_testtube3"></div>
				<div style="border:solid #FFF;width:22px;Position:absolute;height:1px;top:-6px"></div>		    	
			</div>	
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
		</div>
	    <!-- Stand --> 
	    <img id="stand_solubility" src="<?php getSimpath(); ?>images/stand.png"/> 	   
   		<div id="testtubeDrag1_solubility" class="testtubeDivStyle"></div>
   		<div id="testtubeDrag2_solubility" class="testtubeDivStyle"></div>
   		<div id="testtubeDrag3_solubility" class="testtubeDivStyle"></div>
	    <!-- Dropper --> 
		<div id="dropper_solubility">	    	
	    	<img id="dropperSoln_solubility" src="<?php getSimpath(); ?>images/dropperSoln.png"/>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
		</div>
	    <!-- Bottle --> 
		<div id="bottle_solubility">		   
	    	<div class="bottleSolnStyle"></div>
	    	<img id="bottleImg_solubility" style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
	    	<span class="bottleLabel" id="solventName"></span>
		</div>
	</div>
	 <!-- Transluscent Spot test area  --> 
	<div id="transluscentSpotTest">
		<!-- Background-->  
	    <img src="<?php getSimpath(); ?>images/TransluscentSpotTest/BG.gif" style="position: absolute;top: -6px;"/>	   
	 	<!-- Filter Paper-->	 	 	 
	 	 <div id="filterPaperStill">
		 	 <img id="filterPaperStillImg" src="<?php getSimpath(); ?>images/TransluscentSpotTest/filterPaper.png"/>	 
		   	 <!-- Transluscent spot -->
			 <img id="spotStill_transluscentSpot" src="<?php getSimpath(); ?>images/TransluscentSpotTest/oildropArea.png"/>	 	
		 </div>
	 	 <div id="filterPaperDrag">
		 	 <img src="<?php getSimpath(); ?>images/TransluscentSpotTest/filterPaper.png"/>	 
		   	 <!-- Transluscent spot -->
			 <img id="spot_transluscentSpot" src="<?php getSimpath(); ?>images/TransluscentSpotTest/oildropArea.png"/>	 
		 </div>
		 <img id="candle" src="<?php getSimPath(); ?>images/TransluscentSpotTest/candle.png"/>
		 <!-- Flame --> 
    	<img id="candleFlame" src="<?php getSimpath(); ?>images/TransluscentSpotTest/candleFlames/flame1.png"/>
	   	<img class="drop1" src="<?php getSimPath(); ?>images/TransluscentSpotTest/drop.png"/>
   		<img class="drop2" src="<?php getSimPath(); ?>images/TransluscentSpotTest/drop.png"/> 
	    <!-- Dropper --> 
		<div id="dropper_transluscentSpot">	    	
	    	<img id="dropperSoln_transluscentSpot" src="<?php getSimpath(); ?>images/TransluscentSpotTest/dropperSolution.png"/>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/TransluscentSpotTest/dropper.png"/>
		</div>
	    <!-- Bottle --> 
		<div id="bottle_transluscentSpot">		   
	    	<div class="bottleSoln_transluscentSpot"></div>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/TransluscentSpotTest/bottle.png"/>
			<span class="bottleLabel" id="sampleName_transluscentSpot"></span>
		</div>

	</div>
	<!-- Acrolein test area  --> 
	<div id="acroleinTest">
		<!-- Background-->  
	    <img src="<?php getSimpath(); ?>images/BG.gif" style="position: absolute;top: -6px;"/>		    
	   	
	    <!-- Test tube  --> 
	    <div id="testtube_acroleinTest" class="testtubeDivStyle">
	    	<!-- KHSO4--> 
		   	<div id="powderKHSO4">
		   		<img id="powder" src="<?php getSimpath(); ?>images/AcroleinTest/spatulaPowder.png"/>
		   	</div>
	    	<div id="testtubeSoln1_acroleinTest" class="testtubeSolnDivStyle">
				<div class="solnStyle"></div>		    	
		    	<div style="border:solid #FFF;width:22px;Position:absolute;height:1px;top:-6px"></div>	
			</div>				
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
		</div>		
		<!-- Stand --> 
	    <img id="stand_acroleinTest" src="<?php getSimpath(); ?>images/AcroleinTest/stand.png"/> 
	   <div id="testtubeDrag_acroleinTest" class="testtubeDivStyle"></div>
	    <div id="spatulaDiv">	    	
	    	<img id="spatula" src="<?php getSimpath(); ?>images/AcroleinTest/spatula.png"/>
	    	<img id="spatulaPowder" src="<?php getSimpath(); ?>images/AcroleinTest/spatulaPowder.png"/>
	    </div>
	    <div id="watchGlassDiv">
	    	<img id="watchGlass" src="<?php getSimpath(); ?>images/AcroleinTest/watchglass.png"/>
	    	<img id="watchGlassPowder" src="<?php getSimpath(); ?>images/AcroleinTest/powder.png"/>
	    </div>

	</div>
	<!-- Baudouin test area  --> 
	<div id="baudouinTest">
		<!-- Background-->  
	    <img src="<?php getSimpath(); ?>images/BG.gif" style="position: absolute;top: -6px;"/>  
	    <!-- Drops  -->
	    <img class="drop1" src="<?php getSimPath(); ?>images/drop.png"/>
   		<img class="drop2" src="<?php getSimPath(); ?>images/drop.png"/> 
	    <!-- Test tube1  --> 
	    <div id="testtube1_baudouinTest" class="testtubeDivStyle">
	    	<div id="testtubeSoln1_baudouinTest" class="testtubeSolnDivStyle">
				<div class="solnStyle" id="testtubeSolnImg1_baudouinTest"></div>
				<div style="border:solid #FFF;width:22px;position:absolute;height:1px;top:-6px"></div>	
			</div>	
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
		</div>
		<!-- Test tube2 --> 
		<div id="testtube2_baudouinTest" class="testtubeDivStyle">
			<div id="testtubeSoln2_baudouinTest" class="testtubeSolnDivStyle">
				<div class="solnStyle" id="testtubeSolnImg2_baudouinTest"></div>
				<div style="border:solid #FFF;width:22px;Position:absolute;height:1px;top:-6px"></div>	
			</div>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
		</div>	
	    <!-- Stand --> 
	    <img id="stand_baudouinTest" src="<?php getSimpath(); ?>images/stand4.png"/> 
	    <div id="testtubeDrag1_baudouinTest" class="testtubeDivStyle"></div>
   		<div id="testtubeDrag2_baudouinTest" class="testtubeDivStyle"></div>
	    <!-- Dropper --> 
		<div id="dropper1_baudouinTest">	    	
	    	<img id="dropperSoln1_baudouinTest" src="<?php getSimpath(); ?>images/dropperSoln.png"/>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
		</div>
		<div id="dropper2_baudouinTest">	    	
	    	<img id="dropperSoln2_baudouinTest" src="<?php getSimpath(); ?>images/dropperSolnYellow.png"/>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
		</div>
	    <!-- Bottle --> 
		<div id="bottle1_baudouinTest">		   
	    	<div class="bottleSolnStyle"></div>
	    	<img id="bottleImg_baudouinTest" style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
			<span class="bottleLabel" id="bottle1Label_baudouinTest"></span>
		</div>
		<div id="bottle2_baudouinTest">		   
	    	<div class="bottleSolnStyle" id="bottleSoln2_baudouinTest"></div>
	    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
			<span id="bottle2Label_baudouinTest"></span>
		</div>
		<!-- Labels-->     
    <div id="labelDiv_baudouinTest">
    	<div id="label1Div_baudouinTest" class="labelClass" >
    		<img src="<?php getSimpath(); ?>images/label1.png"/>
    		<span id="labelText1_baudouinTest"></span>
    	</div>
    	<div id="label2Div_baudouinTest"  class="labelClass">
    		<img src="<?php getSimpath(); ?>images/label1.png"/>
    		<span id="labelText2_baudouinTest"></span>
    	</div>    	
    </div> 
	</div>	
 	<!-- Common images area  --> 
    <!-- Inference icon--> 
    <img id="inference" src="<?php getSimpath(); ?>images/Inference.png"/>    
    <div id="burnerhelpDiv"></div>
    <!-- Burner settings --> 
    <div id="burnerContainer">
    	<!-- Burner-->
    	<img id="burner" src="<?php getSimpath(); ?>images/burner.png"/>
    	<!-- Flame --> 
    	<img id="burnerFlame" src="<?php getSimpath(); ?>images/Flames/flame1.png"/>
    	<!-- Knob off icon-->
    	<img id="burnerOff" src="<?php getSimpath(); ?>images/knoboff.png"/>
    	<!-- Knob on icon-->
   		<img id="burnerOn" src="<?php getSimpath(); ?>images/knobon.png"/>   		
    </div>
    <!-- Labels-->     
    <div id="labelDiv">
    	<div id="label1Div" class="labelClass" >
    		<span  id="labelText1"></span>
    		<img src="<?php getSimpath(); ?>images/label.png"/>
    		
    	</div>
    	<div id="label2Div"  class="labelClass">
    		<span  id="labelText2"></span>
    		<img src="<?php getSimpath(); ?>images/label.png"/>    		
    	</div>
    	<div id="label3Div" class="labelClass">
    		<img  style="position:absolute;" src="<?php getSimpath(); ?>images/label.png"/>
    		<span  id="labelText3"></span>
    	</div>
    </div> 
    <div id="labelBoard" class="labelClass">
		<img  style="position:absolute;" src="<?php getSimpath(); ?>images/label2.png"/>
		<span class ="labelTextClass" id="labelBoardText"></span>
	</div>
	<!-- Clock-->  
    <div id="clockDiv">
    	<img id="clock" src="<?php getSimpath(); ?>images/clock.png"/>
    	 <span id="timeLabel" >10 min</span>
    	<img id="needle" src="<?php getSimpath(); ?>images/needle.png"/>
    </div>
</div>





