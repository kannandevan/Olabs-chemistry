<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="tct"></div>
<canvas id="bgCanvas" style="height:440px; width:568px;background-image:url(<?php getSimPath(); ?>images/BG.gif);" class="userSelect" ></canvas>
<div id="animLoad"></div>


<img id="watchGlass" src="<?php getSimPath(); ?>images/watchGlass.png" class="userSelect"/>
<img id="watchGlass2" src="<?php getSimPath(); ?>images/watchGlass2.png" class="userSelect"/>
<img id="mixtureA" src="<?php getSimPath(); ?>images/mixtureA.gif" class="userSelect"/>
<img id="compoundB" src="<?php getSimPath(); ?>images/compoundB.gif" class="userSelect"/>

<div id="magnetDiv" class="userSelect">
    <img class="magnet" src="<?php getSimPath(); ?>images/magnet.png" />
    <img class="Magnet_mix" src="<?php getSimPath(); ?>images/Magnet_mix.png"/>
</div>
<img id="mixtureafterStick" src="<?php getSimPath(); ?>images/mixtureafterStick.png" class="userSelect"/>
<div id="mixturestir" class="userSelect">
    <img class="mixtureA1" src="<?php getSimPath(); ?>images/mixtureA1.gif"/>
    <img class="mixtureA2" src="<?php getSimPath(); ?>images/mixtureA2.gif"/>
    <img class="mixtureA3" src="<?php getSimPath(); ?>images/mixtureA3.gif"/>
    <img class="mixtureA4" src="<?php getSimPath(); ?>images/mixtureA4.png"/>
</div>
<div id="compoundstir" class="userSelect">
    <img class="compoundB1" src="<?php getSimPath(); ?>images/blackmass1.gif"/>
    <img class="compoundB2" src="<?php getSimPath(); ?>images/blackmass2.png"/>
    <img class="compoundB3" src="<?php getSimPath(); ?>images/blackmass3.png"/>
    <img class="compoundB4" src="<?php getSimPath(); ?>images/blackmass4.png"/>
</div>

<img id="carbondisulphidebotl" src="<?php getSimPath(); ?>images/carbondisulphidebotl.png" class="userSelect"/>
<img id="carbondisulphidesoln" src="<?php getSimPath(); ?>images/carbondisulphidesoln.png" class="userSelect"/>

<div id="dropperDiv" class="userSelect">
    <img id="dropper" src="<?php getSimPath(); ?>images/dropper.png"/>
    <div id="dropperSolnDiv"><img id="dropperSoln" src="<?php getSimPath(); ?>images/dropperSoln.png"/></div>
</div>
<div id="dropperDiv1" class="userSelect"></div>
<div id="sulphur" class="userSelect"></div>


<div id="tubeDiv" class="userSelect">
	<img id="testTube" src="<?php getSimPath(); ?>images/testTube.png"/>
	<img id="testtubeShadow" src="<?php getSimPath(); ?>images/testtubeShadow.png"/>
    <img id="mixtureinTesttube" src="<?php getSimPath(); ?>images/mixtureinTesttube.png"/>
    <div id="testTubeSolnDiv">
    <img id="testTubeSoln" src="<?php getSimPath(); ?>images/testTubeSoln.png"/></div>
    <img id="solutionAftershake" src="<?php getSimPath(); ?>images/solutionAftershake.png"/>
</div>


<img id="testubeAfterPour" src="<?php getSimPath(); ?>images/testubeAfterPour.png" class="userSelect"/>
<img id="labelboard" src="<?php getSimPath(); ?>images/labelboard.png" class="userSelect"/>
<img id="labelCuSO4" src="<?php getSimPath(); ?>images/labelCuSO4.png" class="userSelect"/>

<div id="testTubeDiv" onClick="testTubeclick()"></div>
<div id="testTubeDivPour" ></div>

<div id="chinaDish">
<img id="petridishTop" src="<?php getSimPath(); ?>images/petridishTop.png" class="userSelect"/>
<img id="petridishUnder" src="<?php getSimPath(); ?>images/petridishUnder.png" class="userSelect"/>
</div>

<img id="solutionStill" src="<?php getSimPath(); ?>images/solutionStill.png" class="userSelect"/>
<img id="particle" src="<?php getSimPath(); ?>images/particle.png" class="userSelect"/>

<img id="clockBody" src="<?php getSimpath(); ?>images/clockBody.png" class="userSelect"/>
<img id="needle" src="<?php getSimpath(); ?>images/needle.png" class="userSelect"/>
<div id="mins"></div>


<img id="burner" src="<?php getSimPath(); ?>images/burner.png" class="userSelect"/>

<div id="switchOff"></div><img id="offbtn"class="userSelect" src="<?php getSimPath(); ?>images/switchOff.png" onclick="switchOnFn()"/>
<img id="onbtn" src="<?php getSimPath(); ?>images/switchOn.png" class="userSelect"/>

<div id="flames" class="userSelect">
    <img class="flame1" src="<?php getSimPath(); ?>images/flame1.png"/>
    <img class="flame2" src="<?php getSimPath(); ?>images/flame2.png"/>
    <img class="flame3" src="<?php getSimPath(); ?>images/flame3.png"/>
    <img class="flame4" src="<?php getSimPath(); ?>images/flame4.png"/>
</div>

<div id="dish" class="userSelect">
    <img id="dishTop" src="<?php getSimPath(); ?>images/dishTop.png"/>
    <img id="dishUnder" src="<?php getSimPath(); ?>images/dishUnder.png"/>
    <img id="mixtureIndish" src="<?php getSimPath(); ?>images/mixtureIndish.gif"/>
   	<img id="mixtureAfterheat" src="<?php getSimPath(); ?>images/mixtureAfterheat.png"/> 
    <img id="mixtureAfterheat1" src="<?php getSimPath(); ?>images/mixtureAfterheat.png"/> 
</div>


<img id="dilHclStill" src="<?php getSimPath(); ?>images/dilHclStill.png" class="userSelect"/>
<img id="standUnder" src="<?php getSimPath(); ?>images/standUnder.png" class="userSelect"/>
<img id="testubeScene5" src="<?php getSimPath(); ?>images/testubeScene5.png" class="userSelect"/>

<img id="bentTube" src="<?php getSimPath(); ?>images/bentTube.png" class="userSelect" />
<div id="bentTubeDiv" onClick="bentTubeClick()"></div>
<div id="bentTubeDiv1" onClick="bentTubeClick()"></div>
<img id="mixParticleforHcl" src="<?php getSimPath(); ?>images/mixParticleforHcl.png" class="userSelect"/>
<img id="blackSoln" src="<?php getSimPath(); ?>images/blackSoln.png" class="userSelect"/>
<img id="bluesoln" src="<?php getSimPath(); ?>images/bluesoln.png" class="userSelect"/>



<div class="rot" id="rodid"><img id="rod" src="<?php getSimPath(); ?>images/rod.png" class="userSelect"/></div>
<div id="rodDiv" onClick="rodClick()"></div>


<div id="flameTooltip"></div>

<div id="flameOffDiv" class="userSelect"><img id="switchOffscene5"  src="<?php getSimPath(); ?>images/switchOffscene5.png"/></div>
<div id="flameOnDiv" class="userSelect" onClick="flameOnFn()"><img id="switchOnscene5" src="<?php getSimPath(); ?>images/switchOn.png"/></div>


<img id="drops1" src="<?php getSimPath(); ?>images/drops.png" class="userSelect"/>
<img id="drops2" src="<?php getSimPath(); ?>images/drops.png" class="userSelect"/>


<div id="bubbles" >
                <div class="bubble x1"></div>
                <div class="bubble x2"></div>
                <div class="bubble x3"></div>
                <div class="bubble x4"></div>
</div>

<div id="bubblesInTestTube">
                <div class="bubbles x5"></div>
                <div class="bubbles x6"></div>
                <div class="bubbles x7"></div>
                <div class="bubbles x8"></div>
</div>
<div id="matchStickdiv" class="userSelect">
    <img id="matchStick" src="<?php getSimPath(); ?>images/matchStick.png" />
    <img id="matchStickFlameBurst" src="<?php getSimPath(); ?>images/matchStickFlame.png"/>
    <img id="flameblastDark" src="<?php getSimPath(); ?>images/flameblastDark.png"/>

    <div id="matchStickFlame" class="userSelect">
        <img class="stickflame1" src="<?php getSimPath(); ?>images/stickflame1.png"/>
        <img class="stickflame2" src="<?php getSimPath(); ?>images/stickflame2.png"/>
        <img class="stickflame3" src="<?php getSimPath(); ?>images/stickflame3.png"/>
    </div>
</div>

<div id="smokeDiv"><img src="<?php getSimPath(); ?>images/smoke12.png" class="smoke2 userSelect"/></div>

<canvas width="184" height="260" class="smokeCanvas"></canvas>

<div id="label_mix"class="userSelect" ></div>
<div id="label_soln" class="userSelect"></div>

<img id="informIcon" src="<?php getSimPath(); ?>images/inform.png" class="userSelect"/>

<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
