<script type="text/javascript" language="javascript">
var simPath="<?php getSimPath(); ?>";</script>

<!--Loading Background-->

<canvas id="bgCanvas" ></canvas>
<div id="inferenceDiv" class="inferenceDiv"  > <img id="inferenceImg" src="<?php getSimPath(); ?>images/inform.png"/></div>
<div id="nitogenTest"> <img id="tubeStand1" src="<?php getSimPath(); ?>images/testube_stand2.png"/> <span id="labelTxt6" ></span> <span id="labelTxt7" ></span><span id="labelTxt8" ></span> <span id="labelTxt9" ></span> <img id="labelN1" src="<?php getSimPath(); ?>images/label2.png"/><img id="labelN2" src="<?php getSimPath(); ?>images/label2.png"/>
		<div id="testtubeSolnDivFeSO4"><img id="testtube1" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSolnFeSO4"><img  id="testtubeSolnimgFe" src="<?php getSimPath(); ?>images/feso4soln.png" /></div>
		</div>
		<div id="testtubeSolnDiv"><img id="testtubeextract" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSoln"><img  id="testtubeSolnimg" src="<?php getSimPath(); ?>images/testubeSoln2.png" /></div>
		</div>
		<!--test tube for lassaigne's extract--> 
		<img id="burnerOff" src="<?php getSimPath(); ?>images/burneroff.png"/> <img id="burner" src="<?php getSimPath(); ?>images/Burner1.png"/>
		<div id="bottledil_fecl3"><img  id="bottle1" src="<?php getSimPath(); ?>images/bottle_empty.png"/></div>
		<img  id="bottleSoln" src="<?php getSimPath(); ?>images/FeCl3_soln.png"/>
		<div id="solnDragDiv_fecl3" > <img  id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSolnFeCl" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
		<div id="bottledil_HCl"><img  id="bottle2" src="<?php getSimPath(); ?>images/bottle2.png"/></div>
		<div id="solnDragDiv" > <img  id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln" src="<?php getSimPath(); ?>images/FeCl3solution.png" /></div>
		<div id="N_solnPourStart"></div>
		<div id="N_solnPour"></div>
		<img id="drops1_N" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops2_N" src="<?php getSimPath(); ?>images/drops.png"/>
		<div id="flame"> <img  src="<?php getSimPath(); ?>images/flame1.png" class="flame1" /> <img  src="<?php getSimPath(); ?>images/flame2.png" class="flame2" /> <img  src="<?php getSimPath(); ?>images/flame3.png" class="flame3" /> <img  src="<?php getSimPath(); ?>images/flame4.png" class="flame4" /> <img  src="<?php getSimPath(); ?>images/flame5.png" class="flame5" /> </div>
</div>
<div id="sulphurTest1" style="display:none"> <span id="labelTxt1" ></span> <span id="labelTxt2" ></span> <img id="tubeStand" src="<?php getSimPath(); ?>images/Testubestand1.png"/>
		<div id="testtubeSolnDiv1"><img id="testtube" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSoln1"><img  id="testtubeSolnimg1" src="<?php getSimPath(); ?>images/testtubesoln.png" /></div>
		</div>
		<img  id="Bottle1" src="<?php getSimPath(); ?>images/bottle_empty.png"/><img  id="BottleSoln" src="<?php getSimPath(); ?>images/nitroprussideSoln.png"/>
		<div id="solnDragDiv2" > <img  id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln2" src="<?php getSimPath(); ?>images/nitroprussideDroperSoln.png" /></div>
		<img id="drops1" src="<?php getSimPath(); ?>images/nitrodrop.png"/> <img id="drops2" src="<?php getSimPath(); ?>images/nitrodrop.png"/> </div>
<div id="sulphurTest2" style="display:none"> <span id="labelTxt3" ></span> <span id="labelTxt4" ></span><span id="labelTxt5" ></span> <img id="label1" src="<?php getSimPath(); ?>images/label2.png"/><img id="label2" src="<?php getSimPath(); ?>images/label2.png"/> <img id="tubeStand2" src="<?php getSimPath(); ?>images/testube_stand2.png"/>
		<div id="testtubeSolnDiv2"><img id="testtube2" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSoln2"><img  id="testtubeSolnimg2" src="<?php getSimPath(); ?>images/testubeSoln2.png" /></div>
		</div>
		<div id="testtubeSolnDiv3"><img id="testtube3" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSoln3"><img  id="testtubeSolnimg3" src="<?php getSimPath(); ?>images/testubeSoln2.png" /></div>
		</div>
		<div id="bottleleadAcetate"><img  id="bottle" src="<?php getSimPath(); ?>images/bottle2.png"/></div>
		<div id="solnDragDiv3" > <img  id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln3" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
		<div id="solnPourStart"></div>
		<div id="solnPour"></div>
		<img id="drops3" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops4" src="<?php getSimPath(); ?>images/drops.png"/> </div>
<div id="halogenTest2" style="display:none"> <span id="labelTxt10" ></span> <span id="labelTxt11" ></span><span id="labelTxt12" ></span><span id="labelTxt13" ></span> <img id="labelH1" src="<?php getSimPath(); ?>images/label2.png"/><img id="labelH2" src="<?php getSimPath(); ?>images/label2.png"/> <img id="tubeStand4_Halogen" src="<?php getSimPath(); ?>images/testube_stand2.png"/>
		<div id="testtubeSolnDiv_halogen"><img id="testtube_H" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSoln_halogen"><img  id="testtubeSolnimg_Hal" src="<?php getSimPath(); ?>images/testubeSoln2.png" /></div>
				<div id="CO2Layer"></div>
		</div>
		<div id="testtubeSolnDiv_cl"><img id="testtube_H" src="<?php getSimPath(); ?>images/Testube.png"/>
				<div id="testtubeSoln_cl"><img  id="testtubeSolnimg_cl" src="<?php getSimPath(); ?>images/testubeSoln2.png" /></div>
		</div>
		<div id="bottledil_HCl2"><img  id="bottle3" src="<?php getSimPath(); ?>images/bottle2.png"/></div>
		<div id="solnDragDiv4" > <img  id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln4" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
		<div id="bottledil_CO2"><img  id="bottle3" src="<?php getSimPath(); ?>images/bottle_black.png"/></div>
		<div id="solnDragDiv5" > <img  id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/><img  id="dropperSoln5" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
		<img id="drops1_H" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops2_H" src="<?php getSimPath(); ?>images/drops.png"/>
		<div id="solnPourStart_H"></div>
		<div id="solnPour_H"></div>
</div>
<div id="testtubeSoln_color"></div>
<!--<div id="waterFlow"></div>--> 

<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script> 