<?php 
/*?>author:anishasl
Date started:30/12/2013 ended:
file name:canvas.php<?php */
?>
<div id="mainDiv">
<canvas id="bgCanvas" style="border:1px solid #FFF; "></canvas>
</div>
<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<canvas id="bgCanvas" style="border:1px solid #FFF; "></canvas>
<div id="DropperDiv" onmouseout="dropperdown();"><img id="dropperImg" src="<?php getSimpath(); ?>images/dropper1.png" />
<img  id="dropperSoln1" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
<div id="maskDiv" onmouseover="dropperup();"></div>
<div id="sampleSolutionDiv">
<img id="sampleSolution" src="<?php getSimpath(); ?>images/hcl.png" />
<img id="beakerWater" src="<?php getSimpath(); ?>images/beakerwater1.png" />
</div>
<img id="beakerShadow" src="<?php getSimpath(); ?>images/beakershdw.png" />
<img id="labelImg" src="<?php getSimpath(); ?>images/label.png" />
<img id="pourwaterImg" src="<?php getSimpath(); ?>images/pourline2.png" />
<img id="pourwaterImg1" src="<?php getSimpath(); ?>images/pourline1.png" />
<span id="displaySample"></span>
<span id="displaySoln"></span>
<span id="displayPhenolph"></span>
<img id="testTubestand" src="<?php getSimpath(); ?>images/stands1.png" />
<div id="redLitmusDiv">
<img id="testTube1" src="<?php getSimpath(); ?>images/testtube.png" />
<img id="RedlitmusTube" src="<?php getSimpath(); ?>images/testtubesoln1.png" />
<img id="redlitmus" src="<?php getSimpath(); ?>images/testtubesoln2.png" />
</div>
<div id="blueLitmusDiv">
<img id="testTube2" src="<?php getSimpath(); ?>images/testtube.png" />
<img id="blueLitmusTube" src="<?php getSimpath(); ?>images/testtubesoln2.png" />
<img id="bluelitmus" src="<?php getSimpath(); ?>images/testtubesoln1.png" />
</div>
<img id="drops1" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/> 
<img id="drops2" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops3" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops4" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops5" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops6" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops7" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops8" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops9" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops10" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops11" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/> 
<img id="drops21" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops31" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops41" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops51" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops61" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops71" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops81" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops91" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops0" class="Drops1" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="testtube_stand" src="<?php getSimPath(); ?>images/testtubewithstand.png"/>
<img id="testtube_standClamp" src="<?php getSimPath(); ?>images/standunder.png"/>
<img id="ZincmetalImg" src="<?php getSimPath(); ?>images/zincmetal.png"/>
<div id="testTubeWater">
<img id="testTubeWaterImg" src="<?php getSimPath(); ?>images/zinctestsoln.png"/>
</div>
<div id="testTubeWaterborder"></div>
<div id="burnerDiv" onclick="burnerON();">
</div>
<img id="burnerOffImg" src="<?php getSimPath(); ?>images/burneroff.png"/>
<img id="burnerOnImg" src="<?php getSimPath(); ?>images/burneron.png"/>
<img id="standBottom" src="<?php getSimPath(); ?>images/standbottom.png"/>
<img id="conicalBeaker" src="<?php getSimPath(); ?>images/conicalbeaker.png"/>
<img id="limewater" src="<?php getSimPath(); ?>images/limewater.png"/>
<img id="milkywater" src="<?php getSimPath(); ?>images/milkywater.png"/>
<div id="conicalsolnDiv"><img id="conicalSolution" src="<?php getSimPath(); ?>images/roundflasksolution.png"/></div>
<div id="conicalBorder"></div>
<img id="labelConical" src="<?php getSimPath(); ?>images/label3.png"/>
<img id="corkStandImg" src="<?php getSimPath(); ?>images/corkstand.png"/>
<div id="maskDivcork" onmouseover="corkup();" onmouseout="corkdown();"></div>
<img id="corktubeImg" src="<?php getSimPath(); ?>images/corktube.png" onmouseout="corkdown();"/>
<div id="matchstickFull">
<img id="matchsticImg" src="<?php getSimPath(); ?>images/matchstick.png"/>
 <img id="matchStickFlameBurst" src="<?php getSimPath(); ?>images/matchStickFlame.png"/>
    <img id="flameblastDark" src="<?php getSimPath(); ?>images/flameblastDark.png"/>
  <div id="matchStickFlame" class="userSelect">
     <img class="stickflame1" src="<?php getSimPath(); ?>images/stickflame1.png"/>
     <img class="stickflame2" src="<?php getSimPath(); ?>images/stickflame2.png"/>
     <img class="stickflame3" src="<?php getSimPath(); ?>images/stickflame3.png"/>
    </div>
    
<div id="matchsticFlameDiv">
<img id="matchsticFlameImg" src="<?php getSimPath(); ?>images/side_L.png" class="vSmokeC1"/>
</div>
<div class="container">
  <div class="red flame"></div>
  <div class="orange flame"></div>
  <div class="yellow flame"></div>
  <div class="white flame"></div>
  <div class="blue circle"></div>
  <div class="black circle"></div>
</div>
</div>
<div id="flameDiv">
    <img  src="<?php getSimPath(); ?>images/flame1.png" class="flame1" />
    <img  src="<?php getSimPath(); ?>images/flame2.png" class="flame2" />
    <img  src="<?php getSimPath(); ?>images/flame3.png" class="flame3" />
    <img  src="<?php getSimPath(); ?>images/flame4.png" class="flame4" />

</div>
<div id="bubbles" style="display: none;">
                <div class="bubble x17"></div>
                <div class="bubble x18"></div>
                <div class="bubble x19"></div>
                <div class="bubble x20"></div>
                <div class="bubble x21"></div>
                <div class="bubble x22"></div>
                <div class="bubble x23"></div>
                <div class="bubble x24"></div>
                <div class="bubble x25"></div>
                <div class="bubble x26"></div>
                <div class="bubble x27"></div>
</div>
<div id="bubblesConical" style="display: none;">
                <div class="bubbleConical y1"></div>
                <div class="bubbleConical y2"></div>
                <div class="bubbleConical y3"></div>
                <div class="bubbleConical y4"></div>
                <div class="bubbleConical y5"></div>
                <div class="bubbleConical y6"></div>
                <div class="bubbleConical y7"></div>
                <div class="bubbleConical y8"></div>
                <div class="bubbleConical y9"></div>
                <div class="bubbleConical y10"></div>
                <div class="bubbleConical y11"></div>
</div>
<div id="bubblesBeaker" style="display: none;">
                <div class="bubbleBeaker y11"></div>
                <div class="bubbleBeaker y21"></div>
                <div class="bubbleBeaker y31"></div>
                <div class="bubbleBeaker y41"></div>
                <div class="bubbleBeaker y51"></div>
                <div class="bubbleBeaker y61"></div>
                <div class="bubbleBeaker y71"></div>
                <div class="bubbleBeaker y81"></div>
                <div class="bubbleBeaker y91"></div>
                <div class="bubbleBeaker y101"></div>
                <div class="bubbleBeaker y111"></div>
</div>
<img id="testtubeStandscene4" src="<?php getSimPath(); ?>images/standtesttube.png"/>
<div id="phenophthaleinDiv">
<img id="phenophthaleinImg" src="<?php getSimpath(); ?>images/hcl.png" />
<img id="phenoph" src="<?php getSimpath(); ?>images/beakerwater1.png" />
</div>
<img id="phenophthaleinLbl" src="<?php getSimPath(); ?>images/label4.png"/>
<img id="sodiumcarbnteImg" src="<?php getSimPath(); ?>images/sodiumcarbonate.png"/>
<div id="testtubeNa2co3">
<img id="testtubewaterImg" src="<?php getSimPath(); ?>images/testtubeslnscene4.png"/>
<img id="testtubeIndicator" src="<?php getSimPath(); ?>images/pinksolution.png"/>
</div>
<img id="limewaterlbl" src="<?php getSimPath(); ?>images/label.png"/>
<span id="displaylime"></span>
<div id="inferenceDiv" class="inferenceDiv" style="display:none;"> <img id="inferenceImg" src="<?php getSimPath(); ?>images/inferenceImg.png"/></div>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>

