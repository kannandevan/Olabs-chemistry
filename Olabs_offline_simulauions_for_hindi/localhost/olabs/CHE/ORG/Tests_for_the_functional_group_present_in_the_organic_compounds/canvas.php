<!-- Simulation main area-->  
<div id="mainDiv">	
	<!-- Background-->  
	<img src="<?php getSimpath(); ?>images/BG.gif" style="position: absolute;top: -6px;"/> 	
	 <!--Spatula powder sample-->
     <img id="powderSample" src="<?php getSimPath(); ?>images/powder.png"/>  
    <!--Drops-->  
    <div id="drop1" class="drop"></div>
    <div id="drop2" class="drop"> </div>
     <!--Glass rod-->  
     <img id="glassRod" src="<?php getSimpath(); ?>images/glassrod.png"/>
     <!--Cork--> 
     <img id="cork" src="<?php getSimpath(); ?>images/cork.png"/>
     <!--Funnel--> 
    <img id="funnel" src="<?php getSimPath(); ?>images/filterFunnel.png"/>
     <!-- Smoke --> 
    <div id="smokeDiv"><img src="<?php getSimPath(); ?>images/smoke.png" id="smokeImg" class="smoke"/></div>
    <div id="smokeDivstill"> <img src="<?php getSimPath(); ?>images/smoke.png" id="smokeDivstillImg"/></div>
      <!-- Forceps -->
     <img id="forceps" src="<?php getSimpath(); ?>images/forceps.png"/>
     <!-- Filter Paper-->             
     <div id="filterPaperStill">
         <img src="<?php getSimpath(); ?>images/filterPaper.png"/>  
         <!-- Transluscent spot -->
         <div id="spotStill">  </div>
     </div>
     <img id="sodium" src="<?php getSimpath(); ?>images/sodium.png"/>
     <!-- Ice bath bottom --> 
    <img id="icebathBottom" src="<?php getSimpath(); ?>images/icebathBottom.png"/> 
     
    <!-- Test tube A --> 
    <div id="testtubeA" class="testtubeDivStyle"> 
        <div id="solnApourImg"></div>        
        <div id="bubbles">
            <div class="bubble" id="x1bubble"></div>
            <div class="bubble" id="x2bubble"></div>
            <div class="bubble" id="x3bubble"></div>
            <div class="bubble" id="x4bubble"></div>
            <div class="bubble" id="x5bubble"></div>
            <div class="bubble" id="x6bubble"></div>
        </div>      
    	<img id="corkOntesttube" src="<?php getSimpath(); ?>images/cork.png"/>
        <img id="testtubePowder" src="<?php getSimpath(); ?>images/whitePowderTesttube.png"/>
        <img id="silverMirror" style="position:absolute;" src="<?php getSimpath(); ?>images/silverMirror.png"/>
        <div id="yellowOilLayer"></div>
    	<div id="testtubeASoln" class="testtubeSolnDivStyle">
			<div class="solnStyle" id="testtubeASolnImg"></div>
			<div class="solnBorderStyle" ></div>	
		</div>        
        <img id="crystImg" style="position:absolute;" src="<?php getSimpath(); ?>images/crystPpt.png"/>
    	<img id="testtubeAImg" style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
    	<div class="testtubeLabelStyle" id="testtubeALabel">A</div>
	</div>
	<!-- Test tube B  --> 
    <div id="testtubeB" class="testtubeDivStyle">  
         <div id="solnpourImg"></div>  	
    	<div id="testtubeBSoln" class="testtubeSolnDivStyle">
			<div class="solnStyle" id="testtubeBSolnImg"></div>
			<div class="solnBorderStyle" ></div>	
		</div>
         <img id="testtubeBPowder" src="<?php getSimpath(); ?>images/powder.png"/>	
    	<img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
    	<div class="testtubeLabelStyle">B</div>
	</div>
    <!-- Test tube C  --> 
    <div id="testtubeC" class="testtubeDivStyle"> 
         <div id="solnCpourImg"></div>       
        <div id="testtubeCSoln" class="testtubeSolnDivStyle">
            <div class="solnStyle" id="testtubeCSolnImg"></div>
            <div class="solnBorderStyle" ></div>    
        </div>  
        <img id="testtubeCPowder" src="<?php getSimpath(); ?>images/naphthol.png"/>
        <img style="position:absolute;" src="<?php getSimpath(); ?>images/testtube.png"/>
        <div class="testtubeLabelStyle">C</div>
    </div>
    <!-- Ice bath top --> 
     <img id="icebathTop" src="<?php getSimpath(); ?>images/icebathTop.png"/> 
	<!-- Test tube stand -->  
	<img id="stand1" src="<?php getSimpath(); ?>images/stand1.png" /> 
    <img id="stand2" src="<?php getSimpath(); ?>images/stand2.png" />   
    <img id="stand3" src="<?php getSimpath(); ?>images/stand3.png" /> 
    <div id="testtubeADrag" class="testtubeDivStyle"></div>
    <div id="testtubeBDrag" class="testtubeDivStyle"></div>
    <div id="testtubeCDrag" class="testtubeDivStyle"></div>
	<!-- Dropper --> 
    <div id="dropper1">          
        <img id="dropperSoln1" src="<?php getSimpath(); ?>images/dropperSoln.png"/>
        <img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
    </div>
    <div id="dropper2">          
        <img id="dropperSoln2" src="<?php getSimpath(); ?>images/dropperSoln.png"/>
        <img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
    </div>
    <div id="dropper3">          
        <img id="dropperSoln3" src="<?php getSimpath(); ?>images/dropperSoln.png"/>
        <img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
    </div>
    <div id="dropper4">          
        <img id="dropperSoln4" src="<?php getSimpath(); ?>images/dropperSoln.png"/>
        <img style="position:absolute;" src="<?php getSimpath(); ?>images/dropper.png"/>
    </div>
    <!-- Bottle --> 
	<div id="bottle1">		   
    	<div class="bottleSolnStyle" id="bottle1SolnStyle" ></div>
    	<img id="bottle1Img" style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
    	<div id="bottle1WhiteLabel"></div>
        <span class="bottleLabel" id="bottle1SolnName"></span>
	</div>
    <div id="bottle2">          
        <div class="bottleSolnStyle" id="bottle2SolnStyle"></div>
        <img id="bottle2Img" style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
        <div id="bottle2WhiteLabel"></div>
        <span class="bottleLabel" id="bottle2SolnName"></span>
    </div>
      <div id="bottle3">          
        <div class="bottleSolnStyle" id="bottle3SolnStyle"></div>
        <img id="bottle3Img" style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
        <div id="bottle3WhiteLabel"></div>
        <span class="bottleLabel" id="bottle3SolnName"></span>
    </div>
    <div id="bottle4">          
        <img id="bottle4Img" style="position:absolute;" src="<?php getSimpath(); ?>images/brownBottle.png"/>
        <div id="bottle4WhiteLabel"></div>
        <span class="bottleLabel" id="bottle4SolnName"></span>
    </div>
     <!-- Litmus paper -->
    <div id="litmusTestDiv">
        <div id="litmuspaperTile"></div>
        <div id="litmuspaper"></div>       
    </div>
	<!-- Labels-->  
	<div id="labelDiv">
    	<div id="label1Div" class="labelClass" >
    		<img style="position:absolute;" src="<?php getSimpath(); ?>images/label.png"/>
    		<span class ="labelTextClass" id="labelText1"></span>
    	</div>
    	<div id="label2Div"  class="labelClass">
    		<img style="position:absolute;"  src="<?php getSimpath(); ?>images/label.png"/>
    		<span class ="labelTextClass" id="labelText2"></span>
    	</div> 
        <div id="label3Div"  class="labelClass">
            <img style="position:absolute;"  src="<?php getSimpath(); ?>images/label.png"/>
            <span class ="labelTextClass" id="labelText3"></span>
        </div>      	
    </div> 
    <!-- Inference icon-->
    <div id="inference">
        <img src="<?php getSimpath(); ?>images/Inference.png"/>
        <div id="inferenceHelp"></div> 
    </div> 
    

    <div id="burnerhelpDiv" style="position:absolute;"></div>
    <!-- Burner settings --> 
    <div id="burnerContainer">
        <!-- Burner-->
        <img id="burner" src="<?php getSimpath(); ?>images/burner.png"/>
        <!-- Flame --> 
        <img id="burnerFlame" src="<?php getSimpath(); ?>images/flame1.png"/>
        <!-- Knob off icon-->
        <img id="burnerOff" src="<?php getSimpath(); ?>images/knoboff.png"/>
        <!-- Knob on icon-->
        <img id="burnerOn" src="<?php getSimpath(); ?>images/knobon.png"/>          
    </div>
    <!-- Watch glass-->
    <div id="watchGlassDiv">  
        <img id="watchGlass" src="<?php getSimpath(); ?>images/watchglass.png"/>      
         <div id="spatulaDiv">           
            <img id="spatula" src="<?php getSimpath(); ?>images/spatula.png"/>
            <img id="spatulaPowder" src="<?php getSimpath(); ?>images/spatulaPowder.png"/>
        </div>
        <img id="watchGlassPowder" src="<?php getSimpath(); ?>images/powder.png"/>
    </div>
    <!-- Bubbles-->
     <div id="bubblesBeaker">
        <div class="bubbleBeakr" id="x1"></div>
        <div class="bubbleBeakr" id="x2"></div>
        <div class="bubbleBeakr" id="x3"></div>
        <div class="bubbleBeakr" id="x4"></div>
        <div class="bubbleBeakr" id="x5"></div>
        <div class="bubbleBeakr" id="x6"></div>
        <div class="bubbleBeakr" id="x7"></div>
        <div class="bubbleBeakr" id="x8"></div>
        <div class="bubbleBeakr" id="x9"></div>
        <div class="bubbleBeakr" id="x10"></div>
    </div>

    <!-- Hot machine-->
    <div id="hot_machine"> 
        <img id="hot_machineImg" src="<?php getSimpath(); ?>images/hot_machine.png"/>
        <img id="lightOn" src="<?php getSimpath(); ?>images/light_on.png">
        <img id="lightOff" src="<?php getSimpath(); ?>images/light_off.png">
        <img id="switchOn" src="<?php getSimpath(); ?>images/switch_on.png">
        <img id="switchOff" src="<?php getSimpath(); ?>images/switch_off.png">
        <div id="beakerSolnDiv">
            <div id="beakerSolnBorder"> </div>
             <img id="beakerSoln" src="<?php getSimpath(); ?>images/beakerSolution.png"/>
        </div>
        <img id="beaker" src="<?php getSimpath(); ?>images/beaker.png"/>
    </div>
      <div id="hotMachineHelpDiv"></div>
     <div id="nextBtnHelp"></div>
    <div id="nextBtnDiv">
      <img id="nextBtn" src="<?php getSimpath(); ?>images/nextbtn.png"/>
      <span id="nextLabel" class="labelTextClass"></span>
    </div>
    <div id="solutionPour"></div>
    <div id="beakerSmallDiv">
        <div id="beakerSmallSolnDiv">
            <div id="beakerSmallSolnBorder"> </div>
            <div id="beakerSmallSoln"></div>
        </div>
        <img id="beakerSmall" src="<?php getSimpath(); ?>images/beakerSmall.png"/>
    </div>
    <!-- Clock-->  
    <div id="clockDiv">
        <img id="clock" src="<?php getSimpath(); ?>images/clock.png"/>
        <span id="timeLabel" class="labelTextClass"></span>
        <img id="needle" src="<?php getSimpath(); ?>images/needle.png"/>
    </div>
     <div id="labelBoard" >
        <img  style="position:absolute;height: 50px;width: 124px;" src="<?php getSimpath(); ?>images/label2.png"/>
        <span class ="labelTextClass" id="labelBoardText"></span>
    </div>
    <!-- Filter paper-->
     <div id="filterPaperDrag">
         <img src="<?php getSimpath(); ?>images/filterPaper.png"/>  
         <!-- Transluscent spot -->
         <div id="spot">   </div>
     </div>
     <!-- Sodium bottle-->
    <div id="sodiumBottleDiv">
        <img id="sodiumBottle" src="<?php getSimpath(); ?>images/sodiumBottle.png"/>
        <img id="sodiumBottleTop" src="<?php getSimpath(); ?>images/sodiumBottleTop.png"/>
        <span class="bottleLabel" id="sodiumbottleName"></span>
    </div>
    <!-- Ammonium bottle-->
    <div id="nh3bottle">        
        <div class="bottleSolnStyle" id="nh3bottleSolnStyle" ></div>
        <img style="position:absolute;" src="<?php getSimpath(); ?>images/bottle.png"/>
        <div id="nh3bottleWhiteLabel"></div>
        <span class="bottleLabel" id="nh3bottleSolnName"></span>
    </div>
</div>
