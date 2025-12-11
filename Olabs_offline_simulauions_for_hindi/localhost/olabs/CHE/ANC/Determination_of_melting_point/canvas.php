<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>

<canvas id="bgCanvas"></canvas>
<div id="contentDiv">
<img id="standThermo" src="<?php getSimPath(); ?>images/stand&thermosmall.png"   />
<img id="beakerUnder" src="<?php getSimPath(); ?>images/beaker_under.png"   />
<img class="shake" id="waterUnder" src="<?php getSimPath(); ?>images/water_under.png"   />
<img id="waterTop" src="<?php getSimPath(); ?>images/water_top.png"   />
<img id="beakerTop" src="<?php getSimPath(); ?>images/beaker_top.png"   />
<img id="burner" src="<?php getSimPath(); ?>images/burner.png"   />
<img class="flameshake" id="flame" src="<?php getSimPath(); ?>images/flame.png"   />
<div  id="burnerMsg" onclick="burnerON_FN()"></div>
<div id="burnerMsgOver"></div>
<div id="thermoMsgOver"></div>
<div id="capMsgOver"></div>
<div id="stirMsgOver"></div>
<div id="parafinLiqd"></div>
<div id="msgDiv_tripod" >
  <div id="insideRod" ></div>
</div> 
<div id="zoomLineSmall" style=" background-color:#990000; z-index:2; position:absolute; opacity:0.2; left: 306px; top: 270px; height: 40px; width: 3px;"> </div>

<div id="stirrer"  ><img id="stirrer" src="<?php getSimPath(); ?>images/stirrer.png"   /></div>

<div id="zoomOuterDiv"><img id="imgZoom1" name="Thermo" src="<?php getSimPath(); ?>images/zoom_area.png" /></div> 
<div class="zoomclass" id="zoomThermo"  ><img id="imgZoom" name="Thermo" src="../CHE/ANC/Determination_of_melting_point/images/thermo.png" style="position: absolute; left: -28px; top: -1394px;">
<div id="arrow" class="contrlStyle" ><img id="arrowIndicatorImg" src="<?php getSimPath(); ?>images/arrow.png"   /><p id="text" style=" display:inline; padding-top:5px; margin-left:5px; position:absolute" >t<sub>1</sub></p></div>
<div id="arrowT2" class="contrlStyle" ><img id="arrowImg2" src="<?php getSimPath(); ?>images/arrow.png"   /><p id="text" style=" display:inline; padding-top:5px; margin-left:5px; position:absolute" >t<sub>2</sub> </p></div>
<div id="zoomLine" style=" background-color:#990000; z-index:0; position:absolute; opacity:0.15; left: 18px; top: 60px; height: 100px; width: 69px;"> </div>
</div>

<div id="capTube_compound"><img id="imgcomp" src="<?php getSimPath(); ?>images/powder&tube.png" /></div>

<div id="zoomOuterTube"><img id="imgZoomTub" src="<?php getSimPath(); ?>images/zoomarea_Cap.png" /></div> 

<div class="Tubezoom"  ><img id="imgZoomCap"  src="../CHE/ANC/Determination_of_melting_point/images/capillary_tube.png" style="position: absolute; left: 28px; top: -752px;">
</div>
<div class="zoom_mask" ><img id="imgcmpTub"   src="<?php getSimPath(); ?>images/powder_capillary.png" style="position: absolute; left: 0px; top: 21px;" /></div>
<div class="zoom_mask" id="zoom_water"><img id="imgZoomWater" src="<?php getSimPath(); ?>images/water_testtube.png" style="position: absolute; left: -2px; top: 142px; height:0px"/></div>
</div>
<img id="chartImg" src="<?php getSimPath(); ?>images/Chart.png"   />


<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
