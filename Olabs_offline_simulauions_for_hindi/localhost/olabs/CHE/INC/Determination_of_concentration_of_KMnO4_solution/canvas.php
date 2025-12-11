<div id="mainDiv">
<!--Loading Background-->
<canvas id="bgCanvas" style="background-image:url(<?php getSimPath(); ?>images/BG.gif);" ></canvas>
<!--Loading Zoom area-->
<div id="buretteZoom">    
    <img id="buretteZoomWater" src="<?php getSimPath(); ?>images/burette_solution_zoom.png"/>
    <img id="buretteZoomScale" src="<?php getSimPath(); ?>images/burette_zoom.png"/>
</div>
<img id="zoomArea" src="<?php getSimPath(); ?>images/zoom_area.png"  />
<!--Loading testube animation-->
<div id="animLoad"></div>

<div id="label_board"><img src="<?php getSimPath(); ?>images/label_board.png" /><p id="label_txt">Dil. H<sub>2</sub>SO<sub>4</sub></p></div>

<!--Loading conical flask and solution -->
<div id="violetDiv"><img id="vImg" src="<?php getSimPath(); ?>images/violetDisolve.png" /></div>
<div id="conicalflaskArea">	
	<div id="solutionBgDiv"><img id="solnBG" src="<?php getSimPath(); ?>images/solution_bg.png" /></div>
    <div id="solutionDiv"><img  id="soln" src="<?php getSimPath(); ?>images/conical_flask_solution.png"/>
    </div>
    <div id="solutionBgDiv2"><img id="solnBG2" src="<?php getSimPath(); ?>images/solution_bg.png" /></div>
    <div id="solutionDiv2"><img  id="soln2" src="<?php getSimPath(); ?>images/conical_flask_solution.png"/>
    </div>
    <img src="<?php getSimPath(); ?>images/conical_flask.png" id="flask"/>
    <img id="drops" src="<?php getSimPath(); ?>images/drop.png"/>
    
</div>
<!--Loading burette and solution -->
<div id="buretteWaterDiv">
	<img id="buretteWater" src="<?php getSimPath(); ?>images/burette_solution_top.png"/>
</div>
<img id="buretteWaterBottom" src="<?php getSimPath(); ?>images/burette_solution_bottom.png"/>
<img class="buretteOffOn" id="buretteOff" src="<?php getSimPath(); ?>images/burette_off.png"/>
<img class="buretteOffOn" id="buretteOn" src="<?php getSimPath(); ?>images/burette_on.png"/>
<div id="onoffCommon"></div>
<img id="burette" src="<?php getSimPath(); ?>images/burette_stand.png"/>
<div id="buretteDiv" ></div>
<div id="stand"></div>
<!--Loading flame and burner -->
<div id="flame">
    <img  src="<?php getSimPath(); ?>images/flame1.png" class="flame1" />
    <img  src="<?php getSimPath(); ?>images/flame2.png" class="flame2" />
    <img  src="<?php getSimPath(); ?>images/flame3.png" class="flame3" />
    <img  src="<?php getSimPath(); ?>images/flame4.png" class="flame4" />

</div>

<img id="burner" src="<?php getSimPath(); ?>images/burner.png"  />
<img id="burner_btn" src="<?php getSimPath(); ?>images/burner_off.png"  />
<div id="burnerOnOff" ></div>
<!--Loading label and tooltips -->
<p class="varTitleCanvas" id="temperature"><span id="temperatureLabel"></span><span id="tempValue"></span></p>
<p class="varTitleCanvas" id="volTitrant" ></p>


<div id="solnPourStart"></div>
<div id="solnPour"></div>
<!--Loading testube stand and testtube -->
<div id="testtube">
<img src="<?php getSimPath(); ?>images/testtube_with_solution.png" id="testtubeImg"/>
</div>
<img src="<?php getSimPath(); ?>images/testtube_stand.png" id="testtubeStand"/>
<div id="popup" ><img id="tooltipImg" src="<?php getSimPath(); ?>images/popup.png"/><p id="tooltp"></p></div>
</div>


