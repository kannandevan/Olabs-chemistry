<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>

<div id="dropper1" style="border:1px solid;"><!--<img  id="dropper1"width:600px; height:500px; position:absolute; left:-50px; top:-40px; src="<?php getSimPath(); ?>images/dropper.png"/><img  id="solnIndropper2" src="<?php getSimPath(); ?>images/soln_dropper.png"/>--> </div>


<div id="animLoad4" style=" width:280px; height:280px;  left: 13px; top: 40px; position:absolute; visibility:hidden; display:inline;"></div>
<span id="labelTxt1" ></span>
<span id="labelTxt2" ></span>
<span id="labelTxt3" ></span>

<!--<img  id="testtube" class="zoomTarget" data-debug="true" src="<?php getSimPath(); ?>images/testtube.png" />-->

<img  id="testtube"  src="<?php getSimPath(); ?>images/testtube.png" />
<img  id="testtubeZoom"  src="<?php getSimPath(); ?>images/pptzoom.gif" />
<img  id="zoommilky"  src="<?php getSimPath(); ?>images/zoommilky.png" />
<img  id="zoomhcl"  src="<?php getSimPath(); ?>images/zoomhcl.gif" />

<div id="testtubeSoln"><img  id="testtubeSolnimg" src="<?php getSimPath(); ?>images/testtubesoln.png" /><img  id="solnmilky" src="<?php getSimPath(); ?>images/solnmilky.png" /></div>
<img  id="testtubeppt" src="<?php getSimPath(); ?>images/precipitate.png"/>
<!--<img  id="testtubepptStill" src="<?php getSimPath(); ?>images/precipitate.png"/>-->
<div id="bottleBaCl2"><img  id="bottle1" src="<?php getSimPath(); ?>images/bottleBaCl2.png"/>
<img  id="shadow1" src="<?php getSimPath(); ?>images/bottleshadow.png"/></div>
<img  id="bottleSoln1" src="<?php getSimPath(); ?>images/bottlesoln.png"/>
<div id="bottleNa2SO4"><img  id="bottle2" src="<?php getSimPath(); ?>images/bottleNa2SO4.png"/>
<img  id="shadow2" src="<?php getSimPath(); ?>images/bottleshadow.png"/></div>
<img  id="bottleSoln2" src="<?php getSimPath(); ?>images/bottlesoln.png"/>
<div id="bottledil_HCl"><img  id="bottle3" src="<?php getSimPath(); ?>images/bottledil_HCl.png"/>
<img  id="shadow3" src="<?php getSimPath(); ?>images/bottleshadow.png"/></div>
<img  id="bottleSoln3" src="<?php getSimPath(); ?>images/bottlesoln.png"/>

<canvas id="bgCanvas"></canvas>
<div id="stage2" style="display:none"></div>
<div id="ConicalFlaskDiv" ></div>
<div id="fadeDiv" ></div>
<!--<div id="bariumDiv" onclick="playAnim01()"></div>-->
<div id="bariumDiv" onmouseover="dragSolution(this.id);">
<img  id="dropper1" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln1" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
<img id="drops1" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops2" src="<?php getSimPath(); ?>images/drops.png"/><!--<img id="drops3" src="<?php getSimPath(); ?>images/black_drop.png"/>-->

<div id="sodiumDiv" onmouseover="dragSolution(this.id);"  >
<img  id="dropper2" src="<?php getSimPath(); ?>images/dropper.png"/>
<img  id="dropperSoln2" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>

<div id="hclDiv" onmouseover=" dragSolution(this.id);"  >
<img  id="dropper3" src="<?php getSimPath(); ?>images/dropper.png" />
<img  id="dropperSoln3" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>

<img  id="Beaker" src="<?php getSimPath(); ?>images/Beaker.png"/>
<img  id="Beakershadow" src="<?php getSimPath(); ?>images/Beakershadow.png"/>
<div id="BeakerSoln"><img  id="BeakerSolnimg" src="<?php getSimPath(); ?>images/BeakerSoln.png"/></div>


<div id="flaskDiv02" class="flaskDiv" style="visibility:hidden;" ></div>


<div id="inferenceDiv" class="inferenceDiv" style="visibility:hidden;" > <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png"/></div>

<div id="inferenceDiv02" class="inferenceDiv" style="visibility:hidden;" > <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png"/></div>


<img  id="back" src="<?php getSimPath(); ?>images/backbtn.png" style="display:none;" onclick="backFN();"/>
<p id="backButtonText" style="display:none;" onclick="backFN();">Back</p>

<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

