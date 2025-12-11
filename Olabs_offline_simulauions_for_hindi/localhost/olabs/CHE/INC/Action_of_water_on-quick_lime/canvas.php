<div id="mainDiv">
<!--<div id="animLoad" style=" border:1px solid;width:916px; height:347px; position:absolute; top: -17px; left: -179px; visibility:hidden;"></div>-->
<div id="animLoad" style=" border:1px solid;width:100%; height:100%; position:absolute; top: 0px; left: 0px; visibility:hidden;"></div>
<canvas id="stillCanvas" style="position:absolute;"></canvas>

<div id="redmarkDiv"></div>

<canvas id="bgCanvas">
	<!--<img id="firstBG" src="<?php getSimpath(); ?>images/BG.jpg"/>-->
</canvas>

<div id="limeDiv"></div>

<div id="dropperDiv" style="display:none;"></div>

<div id="tubeDiv" style="visibility:hidden;"></div>

<div id="tooltipDiv" style="display:none;"></div>

<span id="displayQuicklimeDiv"></span>
<span id="displaywaterDiv"></span>
<span id="displayNextDiv"></span>
<div id="NextDiv" onclick="NextScene()"></div>
<div id="BlowDiv" onclick="blowAir()"></div>
<div id="inferenceDiv" class="inferenceDiv" style="display:none;"> <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png"/></div>

<div id="inferenceDiv02" class="inferenceDiv" style="display:none;"> <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png"/></div>
<img id="clockBody" src="<?php getSimpath(); ?>images/clockBody.png"/>
<img id="needle" src="<?php getSimpath(); ?>images/needle.png"/>
<img id="quicklimeImg" src="<?php getSimpath(); ?>images/powderinthermobeaker.png"/>
<img id="watchglassImg" src="<?php getSimpath(); ?>images/QuicklimeBg.png"/>
<div id="SpatullaDiv"><img id="ImgInSpatulla" src="<?php getSimpath(); ?>images/spatulapowder.png"/>
<img id="spatulaImg" src="<?php getSimpath(); ?>images/spatula.png"/></div>
<div id="testtubeImgDiv">
	<img id="testtubeImg" src="<?php getSimpath(); ?>images/testtube.png"/>
	<div id="testtubeSoln"><img  id="testtubeSolnimg" src="<?php getSimPath(); ?>images/testtubesoln.png" /></div>
</div>
<img id="thermometerbeakerImg" src="<?php getSimpath(); ?>images/thermometerbeaker.png" />
<div id="readingMask"><img id="thermometerReadingImg" src="<?php getSimpath(); ?>images/thermoredcolor.png" /></div>
<div id="thermometerLabel" style="position:absolute; background:url(<?php getSimPath(); ?>images/thermometerlabel.png) no-repeat;"></div>

<div id="maskDiv" onmouseover="corkup();"></div>

<img id="corkTube" src="<?php getSimpath(); ?>images/corktube.png" onmouseout="corkdown()"/>
<img id="dropperstandImg" src="<?php getSimpath(); ?>images/dropperstand.png" />
<img id="testtubestandImg" src="<?php getSimpath(); ?>images/testtubestand.png" />

<img id="drops1" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/> <img id="drops2" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops3" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops4" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops5" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops6" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops7" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops8" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops9" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<img id="drops10" class="Drops" src="<?php getSimPath(); ?>images/drops.png"/>
<div id="DropperDiv"><img id="dropperImg" src="<?php getSimpath(); ?>images/dropper.png" />
<img  id="dropperSoln1" src="<?php getSimPath(); ?>images/soln_dropper.png" /></div>
<div id="BeakerSlaked"><img id="waterstillImg" src="<?php getSimpath(); ?>images/waterbeakerstill.png" />
<img id="watershadow" src="<?php getSimpath(); ?>images/waterbeakershadow.png" /></div>

<img id="SlakedlimestillImg" src="<?php getSimpath(); ?>images/slakedlime.png" />
<img id="BlowbtnImg" src="<?php getSimpath(); ?>images/Blowbtn.png"/>
<img id="nextbtnImg" src="<?php getSimpath(); ?>images/nextbtn.png"/>
<img id="boyblowingSln" src="<?php getSimpath(); ?>images/blowsolution.png" />
<img id="mouthstillImg" src="<?php getSimpath(); ?>images/mouthstill.png" />
<img id="mouthblowImg" src="<?php getSimpath(); ?>images/mouthblow.png" />
<img id="waterlabel" src="<?php getSimpath(); ?>images/waterlabel.png" />
<!--<div id="BeakerSoln"><img  id="BeakerSolnimg" src="<?php getSimPath(); ?>images/waterinthermobeaker.png"/></div>-->
<div id="bubbles">
                <div class="bubble x17"></div>
                <div class="bubble x18"></div>
                <div class="bubble x19"></div>
                <div class="bubble x20"></div>
                <div class="bubble x21"></div>
                <div class="bubble x22"></div>
                <div class="bubble x23"></div>
                <div class="bubble x24"></div>
</div>
<div id="bubbles2">
                <div class="bubble2 x1"></div>
                <div class="bubble2 x2"></div>
                <div class="bubble2 x3"></div>
                <div class="bubble2 x4"></div>
                <div class="bubble2 x5"></div>
                <div class="bubble2 x6"></div>
                <div class="bubble2 x7"></div>
                <div class="bubble2 x8"></div>
                <div class="bubble2 x9"></div>
                <div class="bubble2 x10"></div>
                <div class="bubble2 x11"></div>
</div>

</div>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/responsive.js"></script>
