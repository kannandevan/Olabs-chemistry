<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<!-- CHROMATOGRAPHY -->

<div id="inferenceDiv" class="inferenceDiv" style="visibility:hidden;" > <img id="inferenceImg" src="<?php getSimPath(); ?>images/inform.png"/></div>
<canvas id="bgCanvas"></canvas>
<img id="inkBottle"  src="<?php getSimPath(); ?>images/beaker_soln.png"   />
<img  id="bottleLabel1" src="<?php getSimPath(); ?>images/solLabel.png" /> 
<span id="bottletxt"></span> 
<img id="chamber"  src="<?php getSimPath(); ?>images/chamber.png"   />
<img id="champerDoor"  src="<?php getSimPath(); ?>images/champerDoor.png"   />
<img  id="bottleLabel2" src="<?php getSimPath(); ?>images/solLabel.png" /> 
<span id="chambertxt"></span>
<div id="filterPaper"> 
	<img id="filterPaperImg"  src="<?php getSimPath(); ?>images/on_table.png"  />
	<img id="paperColor2"  src="<?php getSimPath(); ?>images/paperColor2.png"  />
	<img id="paperColor3"  src="<?php getSimPath(); ?>images/paperColor3.png"  />
	<img id="paperColor"   src="<?php getSimPath(); ?>images/paperColor.png"   />
	<img id="paperColorO"  src="<?php getSimPath(); ?>images/paperColor7.png"  /> 
	<img id="paperColorY"  src="<?php getSimPath(); ?>images/paperColor6.png"  />
	<img id="paperColorLGr"  src="<?php getSimPath(); ?>images/paperColor5.png" />
	<img id="paperColorDGr"  src="<?php getSimPath(); ?>images/paperColor4.png" />
</div>
<img id="arrow1"  src="<?php getSimPath(); ?>images/arrow.png"  />
<img id="arrow2"   src="<?php getSimPath(); ?>images/arrow.png"   />
<img id="arrow3"  src="<?php getSimPath(); ?>images/arrow.png"  /> 
<img id="arrow4"  src="<?php getSimPath(); ?>images/arrow.png"  />
<img id="arrow5"  src="<?php getSimPath(); ?>images/arrow.png" />
<img id="arrow6"  src="<?php getSimPath(); ?>images/arrow.png" />

<div id="filterPaperOuter"></div>
<div id="capTube" >
		<div id="capTubeinkIN" >
				<div id="inkDIV"></div>
		</div>
		<img id="capTubeImg"  src="<?php getSimPath(); ?>images/hand_tube.png"   /> </div>
<img id="scale"  src="<?php getSimPath(); ?>images/scale.png"   />
<div id="OuterwaterDIV">
		<div id="waterDIV"></div>
</div>
<img id="clockBody" src="<?php getSimPath(); ?>images/clockBody.png"/> <img id="needle" src="<?php getSimPath(); ?>images/needle.png"/>
<div id="simpledistDiv1" ></div>
<div id="simpledistDiv2" ></div>
<div id="simpledistDiv3" ></div>
<div id="simpledistDiv4" ></div>
<div id="simpledistDiv5" ></div>
<div id="simpledistDiv6" ></div>
<div id="simpledistDiv7" ></div>
<div id="simpledistDiv8" ></div>
<div id="simpledistDiv9" ></div>
<div id="simpledistDiv10" ></div>
<img id="simpledistDiv" src="<?php getSimPath(); ?>images/simpleDistEquip.png"/>
<div id="dist_button" onclick="buttonClick();"></div>
<div class="zoomclass" id="zoomThermo" style="display:none;"   ><img id="imgZoom" name="Thermo" src="<?php getSimPath(); ?>images/thermo_zoom.png" style="background-position:center; position:absolute; left:30px; top:-480px; "  />
		<div id="zoomLine" style=" background-color:#990000; position:absolute; opacity:0.3; left: 39px; top: 42px; height: 100px; width: 20px; z-index:1;" > </div>
</div>
<div id="bubbles">
		<div class="bubble x1"></div>
		<div class="bubble x2"></div>
		<div class="bubble x3"></div>
		<div class="bubble x4"></div>
		<div class="bubble x5"></div>
		<div class="bubble x6"></div>
		<div class="bubble x7"></div>
		<div class="bubble x8"></div>
</div>
<img id="dropImg" src="<?php getSimPath(); ?>images/drop.png"/>
<div id="vapoursDiv" >
		<div id="whiteDiv" ></div>
</div>
<div id="vapoursSideDiv" >
		<div id="whiteSideDiv" ></div>
</div>
<div id="circleDiv" >
		<div id="circleInFlask" ></div>
</div>
<div id="circleRightFlask" >
		<div id="circleInRFlask" ></div>
</div>
<!--/*fractionalll */--> 
<img id="dist_flask1" src="<?php getSimPath(); ?>images/roundFlask.png"/>
<div id="flsk2Div" ></div>
<img id="dist_flask2" src="<?php getSimPath(); ?>images/roundFlask.png"/> <img id="fractDist" src="<?php getSimPath(); ?>images/fractDist.png"/>
<div class="zoomclass2" id="zoomThermo2" style="display:none;"   ><img id="imgZoom2" name="Thermo2" src="<?php getSimPath(); ?>images/thermo_zoom.png" style="background-position:center; position:absolute; left:30px; top:-480px; "  />
		<div id="zoomLine2" style=" background-color:#990000; position:absolute; opacity:0.3; left: 39px; top: 42px; height: 100px; width: 20px; z-index:1;" > </div>
</div>
<img id="icebox" src="<?php getSimPath(); ?>images/icebox.png"/> <img id="clipunder" src="<?php getSimPath(); ?>images/clipunder.png"/> <img id="clipup" src="<?php getSimPath(); ?>images/clipup.png"/>
<div id="dist_button2" onclick="buttonClick();"></div>
<div id="vapoursFractDiv" >
		<div id="whiteFractDiv" ></div>
</div>
<div id="vapoursSideFractDiv" >
		<div id="whiteSideFractDiv" ></div>
</div>
<div id="circleFractDiv" >
		<div id="circleInFlaskFract" ></div>
</div>
<div id="circleRightFlaskFract" >
		<div id="circleInRFlaskFract" ></div>
</div>
<div id="outlayer_Water" >
		<div id="waterInFlask" ></div>
</div>
<div id="bubbles_fract">
		<div class="bubble_fract x2"></div>
		<div class="bubble_fract x3"></div>
		<div class="bubble_fract x4"></div>
		<div class="bubble_fract x5"></div>
		<div class="bubble_fract x6"></div>
		<div class="bubble_fract x7"></div>
		<div class="bubble_fract x8"></div>
</div>
<img id="dropImg_fract" src="<?php getSimPath(); ?>images/drop.png"/> 

<!------  Centrifugation  -----> 

<img id="tubeA" src="" /> <img id="tubeB" src="" /> <img id="machine" src="<?php getSimPath(); ?>images/machine.png"/> <span id="readingTxt1"></span> <span id="readingTxt2"></span> <span id="readingTxt3"></span> <img id="center_rotate" src="<?php getSimPath(); ?>images/center_rotate.png"/> <img id="closed_top" src="<?php getSimPath(); ?>images/closed_top.png"/>
<div id="doorClick" onclick="centrifugOpenFN();"></div>

<!--<div id="door"></div>--> 
<img  src="<?php getSimPath(); ?>images/topopen1.png" class="door"  id="door1"/> <img  src="<?php getSimPath(); ?>images/topopen2.png" class="door" id="door2"/>
<div id="start_centrifug" onclick="start_centrifugFN();"></div>
<div id="toolTip"> <img id="tooltipImg" src="<?php getSimPath(); ?>images/tooltip_box.png"/> <span id="tipTxt"></span> </div>
<div id="popup"> <img id="popupImg" src="<?php getSimPath(); ?>images/popup.png"/> <span id="popupTxt"></span> </div>
<div id="popup2"> <img id="popupImg2" src="<?php getSimPath(); ?>images/popup.png"/> <span id="popupTxtmilk"></span> </div>

<img id="zoomedImg" src=""/>
<div id="tube_zoomDiv1"><img id="popupImg1" src="<?php getSimPath(); ?>images/popup2.png"/><span id="popupTxt1"></span></div>
<div id="tube_zoomDiv2"><img id="popupImg2" src="<?php getSimPath(); ?>images/popup2.png"/><span id="popupTxt2"></span></div>

<!--  separating funelllll  -->

<div id="bottle1"><img id="bottle1Img" src="<?php getSimPath(); ?>images/beaker.png" />
		<div id="BeakerSoln1"><img  id="BeakerSolnimg1" src="<?php getSimPath(); ?>images/soln_oil.png"/></div>
</div>
<img id="bottle1Shadow" src="<?php getSimPath(); ?>images/beaker_shadow.png" />
<div id="bottle2"><img id="bottle2Img" src="<?php getSimPath(); ?>images/beaker.png" />
		<div id="BeakerSoln"><img  id="BeakerSolnimg" src="<?php getSimPath(); ?>images/soln_water.png"/></div>
</div>
<img id="bottle2Shadow" src="<?php getSimPath(); ?>images/beaker_shadow.png" /> <img id="bottle3" src="<?php getSimPath(); ?>images/solution_drag.png"/> <img id="bottle3Shadow" src="<?php getSimPath(); ?>images/beaker_shadow.png" /> <img id="funnelwithStand" src="<?php getSimPath(); ?>images/stand_sepFunel.png"/> <img id="stirrer" src="<?php getSimPath(); ?>images/stirrer.png"/> <img id="funnel" src="<?php getSimPath(); ?>images/funnel.png"/> <img id="glass_tube" src="<?php getSimPath(); ?>images/glass_tube.png"/> <img id="glass_tube2" src="<?php getSimPath(); ?>images/glass_tube2.png"/> <img id="soln_inFunnel" src="<?php getSimPath(); ?>images/soln_inFunnel.png"/> <img id="soln_forRotation" src="<?php getSimPath(); ?>images/soln_inFunnel.png"/> <img id="lidDiv" src="<?php getSimPath(); ?>images/cap.png"/> <img id="stand_top" src="<?php getSimPath(); ?>images/stand_top.png"/> <img id="tap_close" src="<?php getSimPath(); ?>images/tap_close.png"/>
<div id="outer_objectDiv" ></div>
<div id="pouring_objectDiv" ></div>
<div id="funnel_objectDiv" ></div>
<div id="waterpouring_objectDiv" ></div>
<div id="oilpouring_objectDiv" ></div>
<div id="waterFlow" ></div>
<img id="oilSepStill" src=""/>
<div id="disableEvntDiv" ></div>
<div id="infersampleDiv"></div>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script> 