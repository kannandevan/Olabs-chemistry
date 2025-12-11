<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";</script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<!--Loading Background-->
<canvas id="bgCanvas" style="position:absolute;height:440px;z-index:99; width:565px;background-image:url(<?php getSimPath(); ?>images/BG.png);" ></canvas>
<!--<p class="canvasTitle">t<sub>1</sub> - The point at which the unknown compound starts boiling.<br />
t<sub>2</sub> - The point at which the bubbles completly disappears.</p>-->
<div id="contentDiv" >
<img id="standImg" src="<?php getSimPath(); ?>images/stand.png"/> 
<img id="stirrerImg" src="<?php getSimPath(); ?>images/stirrer.png"/>
<img id="beakerTopImg" src="<?php getSimPath(); ?>images/beakerTop.png"/>
<img id="beakerUnderImg" src="<?php getSimPath(); ?>images/beakerUnder.png"/> 
<img id="waterTopImg" src="<?php getSimPath(); ?>images/waterTop.png"/>
<img class="shake" id="waterUnderImg" src="<?php getSimPath(); ?>images/waterUnder.png"/> 

<img id="chartImg" src="<?php getSimPath(); ?>images/chart.png"/>
<img class="flameshake" id="flameImg" src="<?php getSimPath(); ?>images/flame.png"/>
<div id="burnerMsg" onclick="burnerON_FN()"></div>
<div id="burnerMsgOver"></div>
<div id="msgDiv_tripod"></div>
<div id="thermoMsgOver"></div>
<div id="capMsgOver"></div>
<div id="stirMsgOver"></div>
<div id="sulphuricAcid"></div>
<div id="bubblesBeaker">
                <div class="bubbleBeakr x1"></div>
                <div class="bubbleBeakr x2"></div>
                <div class="bubbleBeakr x3"></div>
                <div class="bubbleBeakr x4"></div>
                <div class="bubbleBeakr x5"></div>
                <div class="bubbleBeakr x6"></div>
                <div class="bubbleBeakr x7"></div>
                <div class="bubbleBeakr x8"></div>
                <div class="bubbleBeakr x9"></div>
                <div class="bubbleBeakr x10"></div>
				<div class="bubbleBeakr x11"></div>
                <div class="bubbleBeakr x12"></div>
                <div class="bubbleBeakr x13"></div>
                <div class="bubbleBeakr x14"></div>
                <div class="bubbleBeakr x15"></div>
                <div class="bubbleBeakr x16"></div>
            </div>
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


<div id="zoomareaTesttubeDiv"><img id="zoomareaTesttubeImg" name="zoom" src="<?php getSimPath(); ?>images/zoomareaTesttube.png" /></div> 

<div class="testtubeZoomclass" ><img id="testtubeZoomId"  src="../CHE/ANC/Determination_of_Boiling_point/images/testtubeZoom.png" style="position:absolute;left: 45px; top:-568px;"></div>

<div id="zoomLineSmall" style=" background-color:#990000; z-index:99; position:absolute; opacity:0.2; left: 322px; top: 270px; height: 40px; width: 3px;"> </div>
<div id="zoomOuterDiv"><img id="zoomAreaImg" name="Thermo" src="<?php getSimPath(); ?>images/zoomArea.png" /></div> 
<div class="zoomclass" id="zoomThermo"><img id="imgZoom" name="Thermo1" src="../CHE/ANC/Determination_of_Boiling_point/images/thermo.png" style="position: absolute; left: -26px; top: -1443px;">
<div id="zoomLine" style=" background-color:#990000; z-index:0; position:absolute; opacity:0.2; left: 22px; top: 81px; height: 100px; width: 70px;"> </div></div>
 
 
<div id="arrow" class="contrlStyle" ><img id="arrowIndicatorImg" src="<?php getSimPath(); ?>images/arrow.png"   /><p id="text" style=" display:inline; padding-top:5px; margin-left:5px; position:absolute" >t<sub>1</sub></p></div>
<div id="arrowT2" class="contrlStyle" ><img id="arrowImg2" src="<?php getSimPath(); ?>images/arrow.png"   /><p id="text" style=" display:inline; padding-top:5px; margin-left:5px; position:absolute" >t<sub>2</sub> </p></div>

 </div>





