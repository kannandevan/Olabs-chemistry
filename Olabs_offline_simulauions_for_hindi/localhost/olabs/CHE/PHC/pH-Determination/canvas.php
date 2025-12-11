<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>

<canvas id="bgCanvas"></canvas>
<img id="imgInfrm"  src="<?php getSimPath(); ?>images/inform.png"     />
<span id="stripslabelTxt1" ></span>
<span id="stripslabelTxt2" ></span>
<span id="stripslabelTxt3" ></span>
<span id="labelTxt" ></span>



<div id="stripsDiv" >
		
		<img class="Strips_BG"  src="<?php getSimPath(); ?>images/ph_Bg.png" />
		<img class="Strips"  id="strip1" src="<?php getSimPath(); ?>images/1.png"  onmouseover="stripClick(this.id);" style="left:10px; top:22px"  /> <img class="Strips" src="<?php getSimPath(); ?>images/2.png" alt="" id="strip2"   onmouseover="stripClick(this.id);" style="left:41px; top:22px"  /> <img class="Strips" src="<?php getSimPath(); ?>images/3.png" alt="" id="strip3"    onmouseover="stripClick(this.id);" style="left:72px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/4.png" alt="" id="strip4"   onmouseover="stripClick(this.id);" style="left:103px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/5.png" alt="" id="strip5"   onmouseover="stripClick(this.id);" style="left:134px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/6.png" alt="" id="strip6"  onmouseover="stripClick(this.id);"  style="left:165px; top:22px" />
		<img class="Strips" src="<?php getSimPath(); ?>images/8.png" alt="" id="strip8"  onmouseover="stripClick(this.id);"   style="left:227px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/9.png" alt="" id="strip9"   onmouseover="stripClick(this.id);" style="left:258px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/10.png" alt="" id="strip10"  onmouseover="stripClick(this.id);"  style="left:289px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/11.png" alt="" id="strip11"  onmouseover="stripClick(this.id);"  style="left:320px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/12.png" alt="" id="strip12"  onmouseover="stripClick(this.id);" style="left:351px; top:22px"  /> <img class="Strips" src="<?php getSimPath(); ?>images/13.png" alt="" id="strip13"  onmouseover="stripClick(this.id);"  style="left:382px; top:22px" />
		<img class="Strips" src="<?php getSimPath(); ?>images/7.png" alt="" id="strip7"  onmouseover="stripClick(this.id);"  style="left:196px; top:22px" /> <img class="Strips" src="<?php getSimPath(); ?>images/14.png" alt="" id="strip14"   onmouseover="stripClick(this.id);" style="left:413px; top:22px" /> </div>
<div id="beaker_selection" style="display:none;">
		<p id="lablTxt" >Lemon juice</p>
		<img  id="beaker" src="<?php getSimPath(); ?>images/beaker.png"    /></div>
<div id="dropper1"><img  id="solnIndropper" src="<?php getSimPath(); ?>images/Lemon_dropper.png"    /> </div>
<div id="dropper2"><img  id="drprinBottle" src="<?php getSimPath(); ?>images/dropper.png"    /><img  id="solnIndropper2" src="<?php getSimPath(); ?>images/soln_dropper.png"    /> </div>
<div id="beakerTop"></div>
<div id="juiceTop" ></div>
<div id="juiceNbeaker" style="display:none;"><img  id="juice" src="<?php getSimPath(); ?>images/Lemon_juice.png"    /> </div>
<img  id="indicatorBottle" src="<?php getSimPath(); ?>images/indicator_bottle.png"    /> <img  id="tubeStandUnder" src="<?php getSimPath(); ?>images/tubestand_under.png"    /> <img  id="tubeStand" src="<?php getSimPath(); ?>images/tubestand.png"    /> <img  id="whiteBoard" src="<?php getSimPath(); ?>images/white_board.png"    /> <img id="drops" src="<?php getSimPath(); ?>images/black_drop.png"/> <img id="drops2" src="<?php getSimPath(); ?>images/black_drop.png"/> <img id="indicatordrop" src="<?php getSimPath(); ?>images/black_drop.png"/> <img id="indicatordrop2" src="<?php getSimPath(); ?>images/black_drop.png"/> <img id="stripInCanvas" src="<?php getSimPath(); ?>images/14.png" /> <img id="resultImg" src="<?php getSimPath(); ?>images/result1.png" /> 
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script> 