<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<canvas id="bgCanvas"></canvas>
<canvas id="bgCanvas02"></canvas>
<div id="bgCanvas03" ><img id="bgCanvas03Img"  src="<?php getSimPath(); ?>images/BG03.png" /></div>
<canvas id="init_setUpCanvas"></canvas>
<div id="lbl_container"><p id="coconut_lbl"></p></div>
<p id="NaOH_lbl"></p>
<div id="animLoad" style="width:600px; height:500px; position:absolute; top:-50px; left:-24px; visibility:hidden;z-index:999px;"></div>
<!-- <div id="animLoad1" style="width:600px; height:500px; position:absolute; top:-92px; left:-70px; visibility:hidden;z-index:999px;"></div> -->
<div id="labelCoconutoil"></div>
<div id="labelNaoh"></div>
<div id="animLoadFlame" style="width:20px; height:24px; position:absolute;top:194px; left:410px;z-index:999px;"></div>
<div id="animLoadClock" style="width:100px;height:100px; position:absolute;top:30px; left:100px;z-index:999px;"></div>
<div id="BG02BeakerId"><img id="BG02BeakerImg"  src="<?php getSimPath(); ?>images/BG02Beaker.png"   /></div>
<div id="BG03BeakerId"><img id="BG03BeakerImg"  src="<?php getSimPath(); ?>images/BG03Beaker.png"   /></div>
<div id="BG04BeakerId"><img id="BG04BeakerImg"  src="<?php getSimPath(); ?>images/BG04Beaker.png"   /></div>
<img id="on_stateBurnerId"  src="<?php getSimPath(); ?>images/on_stateBurner.png"/>
<div id="offStateId" onClick="OntheBurner()"></div>
<div id="onStateId" onClick="OfftheBurner()"></div>
<img id="soapImageId"  src="<?php getSimPath(); ?>images/soapImage.png"/>
<img id="infertooltpImg"  src="<?php getSimPath(); ?>images/inferrenceToolTip.png"/>
<div id="infertooltpId"></div>
<div id="inferenceDiv01" class="inferenceDiv" onclick="infirmationFN1();" onmouseover="overtoolTip();" onmouseout="removetooltip();" ><img id="imgInfrm"  src="<?php getSimPath(); ?>images/inform.png"   /></div>
<div id="nextbtnId" onClick="next_FN()"><img id="nextbtnImg"  src="<?php getSimPath(); ?>images/nextbtn.png"/></div>


<div id="infrmiconClick" ><img id="imgTool"  src="<?php getSimPath(); ?>images/tooltip_box.png" /><p id="tooltpMSG"></p></div>
<div id="rodDiv" style="visibility:hidden;" onclick="playForStir()"></div>
<div id="BeakerDivMixture" style="visibility:hidden;" onclick="playForHeatBeaker()"></div>

<div id="BeakerDivPlaceback" style="visibility:hidden;" onclick="playForBeakerPlaceback()"></div>
<div id="BeakerDivToFunnel" style="visibility:hidden;" onclick="clickBeakerToFunnel()"></div>

<div id="RedLitmus" style="visibility:hidden;" onclick="playRedLitmus()"></div>
<div id="BlueLitmus" style="visibility:hidden;" onclick="playBlueLitmus()"></div>

<div id="Spatula" style="visibility:hidden;" onclick="clickSpatula()"></div>
<div id="Spoon" style="visibility:hidden;" onclick="clickSpoon()"></div>
<div id="filterDiv" style="visibility:hidden;" onclick="clickFilterPaper()"></div>
<div id="stirClickDiv" style="visibility:hidden;" onclick="stirClick()"></div>

<div id="vegOilDiv" onclick="playVegOilDiv_Fn()"></div>
<div id="NaOHDiv"  style="visibility:hidden;" onclick="playNaOHDiv_Fn();"></div>

<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
