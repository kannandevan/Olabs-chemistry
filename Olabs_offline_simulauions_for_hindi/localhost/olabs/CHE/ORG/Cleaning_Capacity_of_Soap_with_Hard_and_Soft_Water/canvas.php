<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";</script>
    
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<img id="glassplate" src="<?php getSimPath(); ?>images/watchglass.png"/>

<img id="beaker" src="<?php getSimPath(); ?>images/beaker.png"/>
<img id="beaker_under" src="<?php getSimPath(); ?>images/beaker_under.png"/>
<img id="waterMilky" src="<?php getSimPath(); ?>images/waterMilky.png"/>

<div id=beakerDrag style="height:130px; position:absolute;" >
<img id="beaker0" style="position:absolute;" src="<?php getSimPath(); ?>images/beaker.png"/>
<img id="beaker_under0" style="position:absolute; top:-3px;"src="<?php getSimPath(); ?>images/beaker_under.png"/>
<img id="waterMilky0" style="position:absolute;top:102px;left:3px;" src="<?php getSimPath(); ?>images/waterMilky.png"/>
<img id="soap0" style="position:absolute;top:116px;left:38px;" src="<?php getSimPath(); ?>images/soap.png"/>
</div>

<img id="distilledWaterTop" src="<?php getSimPath(); ?>images/distilledWaterTop.png"/>
<img id="distilledWater_under" src="<?php getSimPath(); ?>images/distilledWater_under.png"/>

<img id="zoomTestTubeBubbleImg" src="<?php getSimPath(); ?>images/zoomTestTubeBubbleImg.png"/>

<div id="beakerTotestTubeId" onClick="beakerTotestTube()"></div>
<div id="beakerrodsolnDiv" ></div>
<img id="soap" src="<?php getSimPath(); ?>images/soap.png" draggable="true"/>
<div id="soapDiv" ></div>
<img id="rod" style="padding:2px;" src="<?php getSimPath(); ?>images/rod.png"/>
<img id="burner_on" src="<?php getSimPath(); ?>images/burner_on.png"/>
<div id="rodDiv" style="visibility:hidden;" onClick="Stir_FN()"></div>
<div id="rod1" onClick="Stir_FNHeat()"></div>
<div id="offStateId" onClick="OntheBurner()"></div>
<div id="onStateId" onClick="OfftheBurner()"></div>

<img id="testubeBubbles" src="<?php getSimPath(); ?>images/testubeBubbles.png"/>
<img id="testtubeSolution" src="<?php getSimPath(); ?>images/testtubeSolution.png"/> 
<img id="testubestandunder" src="<?php getSimPath(); ?>images/testubestandunder.png"/>
<img id="testTube" src="<?php getSimPath(); ?>images/testTube.png"/>
<img id="testubestandtop" src="<?php getSimPath(); ?>images/testubestand_Top.png"/>


<div id="nextbtnId" onClick="next_FN()"><img id="nextbtnImg" src="<?php getSimPath(); ?>images/nextbtn.png"/></div>

<div id="testTubeId" onClick="ClickOnTestTube()" ></div>
<div id="testTubediv" onClick="ClickOnTestTubeToZoom()"></div>
<div id="testTubediv1" onClick="ClickOnTestTubeToShake()"></div>
<div id="testTubediv2" onClick="ClickOnTstTubeFoamToZoom()"></div>
<!--<div id="testTubediv3" onClick="ClickOnTstTubeFoamToZoom()"></div>-->
<img id="diswaterShakeTop" src="<?php getSimPath(); ?>images/diswaterShakeTop.png"/>
<img id="diswaterShake_under" src="<?php getSimPath(); ?>images/diswaterShake_under.png"/>
<img id="waterMilky" src="<?php getSimPath(); ?>images/waterMilky.png"/>
<img id="minutLabel" src="<?php getSimPath(); ?>images/minutLabel.png"/>
<img id="needle" src="<?php getSimPath(); ?>images/needle.png"/>
<img id="burner" src="<?php getSimPath(); ?>images/burner.png"/>
<img id="scale" src="<?php getSimPath(); ?>images/scale.png"/>
<img class="flameshake" id="flame" src="<?php getSimPath(); ?>images/flame.png"/>
<img id="cloth" src="<?php getSimPath(); ?>images/cloth.png"  draggable="true"/><div id="clothDiv"></div>

<div id="clothzoomDiv" onClick="clothzoomDiv()" ></div>
<img id="clockBody" src="<?php getSimPath(); ?>images/clockBody.png"/>
<img id="resultzoomPaper" src="<?php getSimPath(); ?>images/resultzoomPaper.png"/>
<img id="resultzoom_1" src="<?php getSimPath(); ?>images/resultzoom1.png"/>
<img id="resultzoom_2" src="<?php getSimPath(); ?>images/resultzoom2.png"/>
<img id="resultzoom_3" src="<?php getSimPath(); ?>images/resultzoom3.png"/>
<div id="testtubeShakediv">
<img id="testtubeSolution0"style="position:absolute;left:26px;top:56px;z-index:999" src="<?php getSimPath(); ?>images/testtubeSolution.png"/> 
<img id="testTubewithHand" style="position:relative;z-index:999;" src="<?php getSimPath(); ?>images/testTubewithHand.png"/>
</div>
<div id="closeBtndiv" onclick="ClickCloseBtn()"><img id="closeBtn" src="<?php getSimPath(); ?>images/closeBtn.png"  /></div>
<canvas id="BG02Img" style="height:440px; width:568px; visibility:hidden;background-image:url(<?php getSimPath(); ?>images/BG2.png);" ></canvas>
<canvas id="BG3Img" style="height:440px; width:568px; visibility:hidden;background-image:url(<?php getSimPath(); ?>images/BG3.png);" ></canvas>
<img id="zoomTestTubeImg" src="<?php getSimPath(); ?>images/zoomTestTubeImg.png"/>
<img id="tooltpImg"  src="<?php getSimPath(); ?>images/tooltip_box.png"/><p id="tooltpMSG"></p>
<img id="inference"  src="<?php getSimPath(); ?>images/inference.png"  onmouseover="overtoolTip();" onmouseout="removetooltip();"onClick="inferClickFn();" />
<img id="infertooltpImg"  src="<?php getSimPath(); ?>images/inferrenceToolTip.png"/>
<div id="infertooltpId" ;></div>
<!--Loading Background-->
<canvas id="bgCanvas" style="height:440px; width:568px;background-image:url(<?php getSimPath(); ?>images/BG.png);" ></canvas>

