<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>

<!--<div id="dropper1" style="border:1px solid;"><img  id="dropper1"width:600px; height:500px; position:absolute; left:-50px; top:-40px; src="<?php getSimPath(); ?>images/dropper.png"/><img  id="solnIndropper2" src="<?php getSimPath(); ?>images/soln_dropper.png"/> </div>-->


<div id="animLoad4" style="height: 250px; width: 180px; left: 75px; top: 40px; position:absolute; visibility:hidden; display:inline;"></div>


<!--<img  id="testtube" class="zoomTarget" data-debug="true" src="<?php getSimPath(); ?>images/testtube.png" />-->

<img  id="testtubeA"  src="<?php getSimPath(); ?>images/testtube.png" />
<p id="tubeATxt" class="lablinstructions">A</p>
<img  id="testtubeASolnimg"  src="<?php getSimPath(); ?>images/testsolution1.png" />
<img  id="testtubeASolnChangeimg1"  src="<?php getSimPath(); ?>images/Fe+FeCl3.png" />
<img  id="testtubeB"  src="<?php getSimPath(); ?>images/testtube.png" />
<p id="tubeBTxt" class="lablinstructions">B</p>
<img  id="testtubeBSolnimg"  src="<?php getSimPath(); ?>images/testsolution1.png" />
<img  id="testtubeASolnChangeimg2"  src="<?php getSimPath(); ?>images/Fe+FeCl3.png" />

<img  id="testtubeC"  src="<?php getSimPath(); ?>images/testtube.png" />
<p id="tubeCTxt" class="lablinstructions">C</p>
<img  id="testtubeCSolnimg"  src="<?php getSimPath(); ?>images/testsolution1.png" />
<img  id="testtubeASolnChangeimg3"  src="<?php getSimPath(); ?>images/Fe+FeCl3.png" />

<img  id="testtubeD"  src="<?php getSimPath(); ?>images/testtube.png" />
<p id="tubeDTxt" class="lablinstructions">D</p>
<img  id="testtubeDSolnimg"  src="<?php getSimPath(); ?>images/testsolution1.png" />
<img  id="testtubeASolnChangeimg4"  src="<?php getSimPath(); ?>images/Fe+FeCl3.png" />

<img  id="controllabelImg"  src="<?php getSimPath(); ?>images/controllabel.png" />
<span id="cntrllabelTxt"></span>


<div id="bottleDiv1"><img  id="bottle1" src="<?php getSimPath(); ?>images/bottle.png"/>

<p id="bottle1txt" class="txtFormat1">FeCl<sub>3</sub></p></div>
<img  id="bottleSoln1" src="<?php getSimPath(); ?>images/bottleFeSoln.png"/>
<div id="bottleDiv2"><img  id="bottle2" src="<?php getSimPath(); ?>images/bottle.png"/>
<p id="bottle2txt" class="txtFormat">KCNS</p>
</div>
<img  id="bottleSoln2" src="<?php getSimPath(); ?>images/bottlesoln.png"/>
<div id="bottleDiv3"><img  id="bottle3" src="<?php getSimPath(); ?>images/bottle.png"/>
<p id="bottle3txt" class="txtFormat">KCl</p>
</div>
<img  id="bottleSoln3" src="<?php getSimPath(); ?>images/bottlesoln.png"/>

<canvas id="bgCanvas"></canvas>
<div id="stage2" style="display:none"></div>
<div id="ConicalFlaskDiv" ></div>
<div id="fadeDiv" ></div>

<div id="dropperDiv1" onmouseover="dragSolution(this.id);">
<img  id="dropper1" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln1" src="<?php getSimPath(); ?>images/dropper_red.png" /></div>
<img id="drops1" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops2" src="<?php getSimPath(); ?>images/drops.png"/>

<div id="dropperDiv2" onmouseover="dragSolution(this.id);"  >
<img  id="dropper2" src="<?php getSimPath(); ?>images/dropper.png"/>
<img  id="dropperSoln2" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>

<div id="dropperDiv3" onmouseover=" dragSolution(this.id);"  >
<img  id="dropper3" src="<?php getSimPath(); ?>images/dropper.png" />
<img  id="dropperSoln3" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>

<div id="dropperDivDUP"></div>
<img  id="testtubeLabel" src="<?php getSimPath(); ?>images/solLabel.png" />

<span id="labelTxt"></span>

<div id="inferenceDiv" class="inferenceDiv" style="visibility:hidden;" > <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png"/></div>


<!--<div id="inferenceDiv02" class="inferenceDiv" style="visibility:hidden;" > <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png"/></div>-->



<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/responsive.js"></script>

