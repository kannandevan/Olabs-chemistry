<div id="mainDiv">
	<img id="inference" src="<?php getSimPath(); ?>images/inference.png" />
    <!--Loading Background-->
    <img  src="<?php getSimPath(); ?>images/BG1.gif" id="bgCanvas1" />
    <img  src="<?php getSimPath(); ?>images/BG2.gif" id="bgCanvas2" />
     <img  src="<?php getSimPath(); ?>images/BG3.gif" id="bgCanvas3" />
     <!--First Stage-->
	<div id="sampleDiv">
        <canvas id="glassrod" ></canvas>
         <div id="mixture">
           <img  src="<?php getSimPath(); ?>images/mixture1.png" class="mix1" />
           <img  src="<?php getSimPath(); ?>images/mixture2.png" class="mix2" />
           <img  src="<?php getSimPath(); ?>images/mixture3.png" class="mix3" />
           <img  src="<?php getSimPath(); ?>images/mixture4.png" class="mix4" />
           <img  src="<?php getSimPath(); ?>images/mixture5.png" class="mix5" />
        </div>
        <div id="bkrDiv">
           <div id="bkrWaterDivBg"><img  src="<?php getSimPath(); ?>images/beakerwhitebg1.png" id="beakerwhitebg1" /></div>
           <img  src="<?php getSimPath(); ?>images/bluePowderInBeaker.png" id="powderInBeaker"/> 
           <div id="bkrWaterDiv2"><img  src="<?php getSimPath(); ?>images/blueWater.png" id="waterInbeaker2" /></div>
           <div id="bkrWaterDiv"><img  src="<?php getSimPath(); ?>images/waterinbeaker.png" id="waterInbeaker" /></div>
           
           <img  src="<?php getSimPath(); ?>images/beaker.png" id="beaker" /> 
        </div> 
        <canvas id="watchglass" class="unselectable"></canvas>
       <div id="SpatulaDiv"><img id="ImgInSpatula" src="<?php getSimpath(); ?>images/blueSpatula.png"/>
<img id="spatulaImg" src="<?php getSimpath(); ?>images/spatula.png"/></div>
        <img id="splash1" src="<?php getSimPath(); ?>images/splash1.png"/>
<img id="splash2" src="<?php getSimPath(); ?>images/splash2.png"/>
        <img id="drops1" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops2" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops3" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops4" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops5" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops6" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops7" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops8" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops9" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <img id="drops10" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
        <canvas id="crudeCopper" class="unselectable"></canvas>
        <div id="solnPourStart"></div>
        <img id="pourline1" src="<?php getSimPath(); ?>images/pourline1.png"/>
        <img id="pourline2" src="<?php getSimPath(); ?>images/pourline2.png"/>
        <div id="cylinder"><div id="cylinderwaterDivAll"><div id="cylinderwaterDiv" ><div id="cylinderwaterImg"></div></div></div><img id="cylinderimg" src="<?php getSimpath(); ?>images/cylinder.png"/></div>
        <img id="standBg" src="<?php getSimPath(); ?>images/standBg.png"/>
        <canvas id="sampleLabel" class="unselectable"></canvas>
        <canvas id="waterLabel" class="unselectable"></canvas>
        <canvas id="acidLabel" class="unselectable"></canvas>
        <p id="sampleString" class="labelClass unselectable"></p>
        <p id="acidString" class="labelClass unselectable"></p>
        <p id="waterString" class="labelClass unselectable"></p>       
    </div>
      <!--Second stage filtration-->
    <div id="filterDiv">    
        <canvas id="filter"></canvas>
        <img  src="<?php getSimPath(); ?>images/blueInfunnel1.png" id="funnelsoln" />  
        <img  src="<?php getSimPath(); ?>images/dishunder.png" id="dishunder" />  
        <img  src="<?php getSimPath(); ?>images/potcontent.png" id="potcontent" />
        <img  src="<?php getSimPath(); ?>images/beaker5Shadow.png" id="beaker5Shadow" />
        
         <img  src="<?php getSimPath(); ?>images/dishtop.png" id="dishtop" /> 
         <div id="beaker3ContentDivBg">
        	<img  src="<?php getSimPath(); ?>images/beaker3ContentBg.png" id="beaker3ContentBg" />
         </div> 
         <div id="beaker3ContentDiv">
         	<img  src="<?php getSimPath(); ?>images/beaker3Content.png" id="beaker3Content" /> 
         </div> 
        <img  src="<?php getSimPath(); ?>images/beaker3Shadow.png" id="beaker3Shadow" />      
        <img  src="<?php getSimPath(); ?>images/beaker3.png" id="beaker3" /> 
         <div id="beaker2"> <img  src="<?php getSimPath(); ?>images/paticle2.png" id="paticle2" /><div id="beaker2waterDivAll"><div id="beaker2waterDiv" ><div id="beaker2waterImg"></div></div></div><img id="beaker2img" src="<?php getSimpath(); ?>images/beaker5.png"/></div> 
    </div>
     <!--Show Clock-->
    <div id="clockDiv">
        <img id="clock" src="<?php getSimpath(); ?>images/clock.png"/>
        <p id="timeString" class="labelClass unselectable"></p>
        <img id="needle" src="<?php getSimpath(); ?>images/needle.png"/>
         
    </div> 
     <!--Third stage -->       
    <div id="thirdPart1">
    	<img  src="<?php getSimPath(); ?>images/glassbowlShadow3.png" id="glassbowlShadow3" /> 
    	<div id="glassbowlContents">          
          <img  src="<?php getSimPath(); ?>images/glassbowlunder3.png" id="glassbowlunder3" /> 
          <img  src="<?php getSimPath(); ?>images/glassbowl3.png" id="glassbowl3" />
      	</div> 
        <img  src="<?php getSimPath(); ?>images/bowlToDragWaterBlue.png" id="bowlToDrag" /> 
        <img  src="<?php getSimPath(); ?>images/sandunder.png" id="sandunder" />
        <img  src="<?php getSimPath(); ?>images/glassbasinshadow3.png" id="glassbasinshadow3" /> 
   		<img  src="<?php getSimPath(); ?>images/glassbasin.png" id="glassbasin" /> 
       <img  src="<?php getSimPath(); ?>images/dishTodrag.png" id="dishTodrag" />
       <img  src="<?php getSimPath(); ?>images/dishpourblueline1.png" id="dishpourline1" />
       <div id="dishDiv"></div>
       <div id="dishContents">
            <img  src="<?php getSimPath(); ?>images/dishUnder3.png" id="dishUnder3" />      
            <img  src="<?php getSimPath(); ?>images/dishbluewater3.png" id="dishbluewater3" />
            <img  src="<?php getSimPath(); ?>images/stirrer3.png" id="stirrer3" />
            <img  src="<?php getSimPath(); ?>images/dishtop3.png" id="dishtop3" />
       </div>
    	<div id="burnerParts">
            <canvas id="burner" class="unselectable"></canvas>
            <img id="burner_btn" src="<?php getSimPath(); ?>images/burner_off.png" class="unselectable" />
            <div id="burnerOnOff"></div>
            <!--Loading flame and burner -->
            <div id="flame">
                <img  src="<?php getSimPath(); ?>images/flame1.png" class="flame1" />
                <img  src="<?php getSimPath(); ?>images/flame2.png" class="flame2" />
                <img  src="<?php getSimPath(); ?>images/flame3.png" class="flame3" />
                <img  src="<?php getSimPath(); ?>images/flame4.png" class="flame4" />
                <img  src="<?php getSimPath(); ?>images/flame5.png" class="flame5" />
            </div>
   		</div>
    </div>
    <div id="thirdPart2"> 
     	<img  src="<?php getSimPath(); ?>images/steelbasinunder.png" id="steelbasinunder" /> 
        <img  src="<?php getSimPath(); ?>images/steelbasinwater.png" id="steelbasinwater" />              	
        <img  src="<?php getSimPath(); ?>images/steelbasin.png" id="steelbasin" /> 
        <img  src="<?php getSimPath(); ?>images/beakerhotwatershadow.png" id="benoicAcidbeakershadow" />   	
       	<img  src="<?php getSimPath(); ?>images/beakerhotwater.png" id="benoicAcidbeaker" />   
    </div> 
     <!--Fourth stage-->
    <div id="fourthPart">    	
    	<img id="solventpour1" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
         <img id="solventpour2" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour3" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour4" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour5" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour6" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour7" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour8" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour9" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>
        <img id="solventpour10" class="solventpour" src="<?php getSimPath(); ?>images/bluesolventpour.png"/>        
        <img  src="<?php getSimPath(); ?>images/bluesolventinTube.png" id="testtubesolvent" />        
        <img  src="<?php getSimPath(); ?>images/testtube5.png" id="testtube5" />  
        <img  src="<?php getSimPath(); ?>images/testtubestand5.png" id="testtubestand5" />
        <div id="testtube5Div" ></div>  
        <canvas id="glassPlate"></canvas>
   		<img  src="<?php getSimPath(); ?>images/corkshadow.png" id="corkshadow" /> 
        <img  src="<?php getSimPath(); ?>images/cork.png" id="cork" /> 
        <img  src="<?php getSimPath(); ?>images/filterpaper.png" id="filterpaper" />   
    </div>
    <div id="crystalCleaningPart">
    	 <img  src="<?php getSimPath(); ?>images/steelbasinsmall.png" id="steelbasinsmall" />
         <img  src="<?php getSimPath(); ?>images/bowlshadow7.png" id="bowlshadow7" />
         <img  src="<?php getSimPath(); ?>images/waterbottle7.png" id="waterBottle" />
         <img  src="<?php getSimPath(); ?>images/label2.png" id="waterLabel7" /> 
          <p id="acidwithWaterStr" class="labelClass unselectable"></p>
         <img  src="<?php getSimPath(); ?>images/basinpourline1.png" id="basinpourline" /> 
         <img  src="<?php getSimPath(); ?>images/bottlepourwater1.png" id="bottlepourwater" /> 
         <div id="bowl">
             <img  src="<?php getSimPath(); ?>images/bowlParticleBlue.png" id="bowlParticle" />
             <div id="bowlWaterDiv">
                <img  src="<?php getSimPath(); ?>images/bowlWater.png" id="bowlWater" /> 
             </div>        
             <img  src="<?php getSimPath(); ?>images/glassbowl7.png" id="glassbowl7" />   
         </div> 
            
    </div>
    <!--Last stage-->
    <canvas id="testubeZoom"></canvas>
     <!--Next Button-->
    <div id="nextClick"> 
        <canvas id="nextBtn" class="unselectable"></canvas>
        <p id="nextBtnString" class="labelbtnClass unselectable"></p>
    </div>
</div>


