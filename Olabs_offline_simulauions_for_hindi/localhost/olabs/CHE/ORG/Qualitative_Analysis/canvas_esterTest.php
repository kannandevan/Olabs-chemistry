<div id="esterTest" style="display:none;">
	<div id="esterControls">
		<p class="varResult" id="esterHeading" style="position:absolute;left:388px;top:5px;text-align:center;width:169px;font-weight: 800;"></p>
		<img id="esterWatchglass" src="<?php getSimPath(); ?>images/watchglass.png"/>
		<img id="esterSalt" src="<?php getSimPath(); ?>images/salt.png"/>
		<img id="esterSaltDrag" src="<?php getSimPath(); ?>images/salt.png"/>
		<p class="varLabel" id="esterSaltTxt"></p> 
		<div id="ester_h2so4">
			<img id="ester_h2so4_dropperCtrl"  src="<?php getSimPath(); ?>images/dropper.png"/>
			<img id="ester_h2so4_bottleCtrl"  src="<?php getSimPath(); ?>images/bottle.png"/>
			<p class="ctlrBottleLabel" id="ester_h2so4_lbl"></p> 
		</div>
		<p class="varLabel" id="esterH2so4"></p> 
		<div id="ester_dragItem1_1">
			<img id="ester_dropperCtrl"  src="<?php getSimPath(); ?>images/dropper.png"/>
			<img id="ester_bottleCtrl"  src="<?php getSimPath(); ?>images/bottle.png"/>                    	
			<p class="ctlrBottleLabel" id="ester_ethyl_lbl"> </p> 
		</div>
		<p class="varLabel" id="esterEthylTxt"></p> 
		<div id="esterBeakerWrap">
		<img id="esterBeakerCtrl" src="<?php getSimPath(); ?>images/beaker.png"/>
		<div id="esterBeakerWater" ></div>
		</div>
		<p class="varLabel" id="esterBeakerTxt" style="left:443px;"></p> 
	</div>
	<div id="esterCanvas">
		<img id="estr_stand" src="<?php getSimPath(); ?>images/standBurner1.png" draggable="false"/>
		<div id="esterTesttubeWrap">
			<img id="estr_testtube" src="<?php getSimPath(); ?>images/testtube.png"/>
			<div id="estr_testtubeSolution" style="display:none;"></div>
		</div>
		<img id="esterFlame" src="<?php getSimPath(); ?>images/flame1.png"/>
		<img id="esterBurnerOff" src="<?php getSimPath(); ?>images/burnerOff.png"/>
		<img id="esterBurnerOn" src="<?php getSimPath(); ?>images/burnerOn.png"/>
		<div id="esterDropperWraper" class="dropperWrapers" style="top:20px;">
			<img id="esterDrop" class="drops" src="<?php getSimPath(); ?>images/drop.png" style="left:7px;top:43px;"/>
			<img id="esterDropper" class="droppers" src="<?php getSimPath(); ?>images/dropper.png"/>
		</div>
		<img id="esterBottle" class="bottles" src="<?php getSimPath(); ?>images/bottle.png"/>
		<p id="ester_h2so4Txt" class="canBottleTxt"></p>
		<div id="esterDropperWraper1" class="dropperWrapers" style="left:310px;top:20px;">
			<img id="esterDrop1" class="drops" src="<?php getSimPath(); ?>images/drop.png" style="left:7px;top:43px;"/>
			<img id="esterDropper1" class="droppers" src="<?php getSimPath(); ?>images/dropper.png"/>
		</div>
		<img id="esterBottle1" class="bottles" style="left:295px;" src="<?php getSimPath(); ?>images/bottle.png"/>
		<p id="ester_ethylTxt" class="canBottleTxt" style="left:283px;font-size:11px;"></p>
		<div id="esterBeakerWrapCan">
			<img id="esterBeakerCan" src="<?php getSimPath(); ?>images/beaker.png"/>
			<div id="esterBeakerWaterCan" ></div>
		</div>
		<div id="esterSaltDrop" class="esterDropArea"></div>
		<div id="esterH2so4Drop" class="esterDropArea"></div>
		<div id="esterEthylDrop" class="esterDropArea"></div>
		<div id="esterTesttubeCopy" class="esterDropArea" style="top:119px;cursor:pointer; z-index:2;"></div>
		<div id="esterFinalSol"></div>
		<div id="esterInferenceWrap" style="display:none;" >
			<img id="ester_tooltip" src="<?php getSimPath(); ?>images/tooltip.png" style="position:relative;" />
			<p id="esterConfTxt" style="position:relative;"></p>
		</div>
	</div>
</div>