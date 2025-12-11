<div id="mainDiv">
	<img  id="BG1" src="<?php getSimPath(); ?>images/BG1.gif"/>
    <img  id="BG2" src="<?php getSimPath(); ?>images/BG2.gif"/>
    <img  id="BG3" src="<?php getSimPath(); ?>images/BG3.gif"/>   
	 <!--  ---- Inference------>
	<img id="inference" src="<?php getSimPath(); ?>images/inference.png" />
    <div id="solnStable">    
        <img id="solnStable1" src="<?php getSimPath(); ?>images/solnTransparent.png"/>
        <img id="solnStable2" src="<?php getSimPath(); ?>images/solnTransparent.png"/>
        <img id="solnStable3" src="<?php getSimPath(); ?>images/solnTransparent.png"/>   
        <div id="solnDarkBrown">    
            <img id="solnDarkBrownImg" src="<?php getSimPath(); ?>images/solnDarkBrown.png"/>       
        </div>
        <div id="solnWhite">    
            <img id="solnWhiteImg" src="<?php getSimPath(); ?>images/solnWhite.png"/>       
        </div>
        <div id="solnBrown">    
            <img id="solnBrownImg" src="<?php getSimPath(); ?>images/solnBrown.png"/>       
        </div>
 	</div>
       <!--  ---- Tyndall effect  ------>
   <div id="tyndalleffectArea">
   	  <div id="powerBlock"></div>
      <div id="power">      
          <img src="<?php getSimPath(); ?>images/powerSource.png" id="powerSource"/>
          <img src="<?php getSimPath(); ?>images/whiteLight.png" id="darkwhite"/>
      </div> 
   	  <img src="<?php getSimPath(); ?>images/stand.png" id="stand"/>
         
   </div>
     <!--  ----Transparency ------>
   <div id="transparencyArea">
   		<div id="handContainer">
      	  <img  src="<?php getSimPath(); ?>images/handWithPaper.png" id="handWithPaper" /> 
        </div>   
        <div id="handDrag"></div>
   </div>
    <div id="commonArea">  
    	<div class="testtubeDrag" id="tubeWithSolution0" >
        	<img class="soln" id="solnA1" src="<?php getSimPath(); ?>images/solnTransparent.png"/>
            <img class="testtube1" id="testubeA1" src="<?php getSimPath(); ?>images/testtube1.png"/>
            <p class="solnLabel" id="solnA1Label">A</p> 
        </div>	
        <div  class="testtubeDrag" id="tubeWithSolution1">
        	<img class="soln" id="solnB1" src="<?php getSimPath(); ?>images/solnTransparent.png"/>
            <img class="testtube1" id="testubeB1" src="<?php getSimPath(); ?>images/testtube1.png"/>
            <p class="solnLabel" id="solnB1Label">B</p>
        </div>	   
        <div  class="testtubeDrag" id="tubeWithSolution2">
        	<img class="soln" id="solnC1" src="<?php getSimPath(); ?>images/solnTransparent.png"/>
            <img class="testtube1" id="testubeC1" src="<?php getSimPath(); ?>images/testtube1.png"/>
            <p class="solnLabel" id="solnC1Label">C</p>
        </div>
        <img  src="<?php getSimPath(); ?>images/testtubeStand1.png" id="testtubeStand1" />
        <div class="testtubeDrag" id="testtubeDrag0"></div>
        <div class="testtubeDrag" id="testtubeDrag1"></div>
        <div class="testtubeDrag" id="testtubeDrag2"></div>        
        <p class="varTitleCanvas" id="allsolnLabel" ></p>
    </div>  
    <!--  ---- Filtrations ------>
   <div id="filtrationsArea">   
  		 <div id="solnPour"></div>
         <div id="filteredTubeSolnDiv">
         	<img  src="<?php getSimPath(); ?>images/solnTransparent2.png" id="filteredTubeSoln" />
         </div>
         <img  src="<?php getSimPath(); ?>images/standfilter2.png" id="standfilter2" />
         <div id="funnelDiv"></div>
         <img  src="<?php getSimPath(); ?>images/zoompaper2.png" id="zoompaper2" />
        <img  src="<?php getSimPath(); ?>images/powderwhite2.png" id="powder" /> 
        <div id="filterBlock0"></div>
        <div id="filterBlock1"></div>
        <div id="filterBlock2"></div>
        <div id="helpFunnel"></div>
         <div id="helpTesttube"></div>
   </div>
    <!--  ---- Stability  ------>
   <div id="stabilityArea">
   <!--Loading stopWatch image-->
   		 <div id="stopwatch"><img src="<?php getSimPath(); ?>images/stopwatch.png"/></div>    
     	<div  id="startTxt"></div>
         <div class="timeLabel" id="start" ></div>
         <p class="timeLabel" id="min" ></p>
         <p class="timeLabel" id="sec" ></p>
         <p class="timeLabel" id="msec" ></p>
         <p class="timeLabel" id='tickmin'>00</p>
		 <p class="timeLabel" id='ticksec'>00</p>
		 <p class="timeLabel" id='tickmsec'>000</p>
      </div> 
 	 <div id="dragBlockDiv"></div>  
  	<div id="tooltip" class="fontcntrl" style="background:url(<?php getSimPath(); ?>images/tooltip.png) top left no-repeat;"></div>
</div>
