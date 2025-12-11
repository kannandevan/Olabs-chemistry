<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<!--Animation div-->
<div id="animLoad"></div>
<div id="clickObjAnim1" onclick="playAnimation(1)"></div>
<div id="clickObjAnim2" onclick="playAnimation(2)"></div>
<div id="clickObjAnim3" onclick="playAnimation(3)"></div>
<div id="clickObjAnim4" onclick="playAnimation(4)"></div>
<div id="clickObjAnim5" onclick="playAnimation(5)"></div>
<div id="clickObjAnim6" onclick="playAnimation(6)"></div>
<div id="clickObjAnim7" onclick="playAnimation(5)"></div>

<!--Inference button-->
<img id="inference" src="<?php getSimPath(); ?>images/inference.png" onclick="showIcon()" onmouseout="removetooltip();"/>
<!--Inference tooltip-->
<div id="infrmiconClick" ><img id="imgTool"  src="<?php getSimPath(); ?>images/tooltip_box.png"/><p id="tooltpMSG"></p></div>
<!--Background-->
<div id="mainDiv">
<img id="anim3Still" src="<?php getSimPath(); ?>images/Animation3still.png" />
<img id="stillSetUp" src="<?php getSimPath(); ?>images/stillImage.png" />
<!--<canvas id="bgCanvas" style="height:500px; width:600px;background-image:url(<?php getSimPath(); ?>images/BG.png);" ></canvas>-->
<canvas id="bgCanvas"></canvas>
<img id="step2" src="<?php getSimPath(); ?>images/nextbtn.png"  onclick="nextStep()">
<div id="label_one"></div>
<div id="label_two"></div>
<div id="label_three"></div>
 <p id="thread_text"></p>
<p id="sodiumSulpht_Text"></p>
<p id="bariumChlrd_text"></p> 
<p id="next_text" onclick="nextStep()"></p>
<!--<div id="clockLabel"></div>
<p id="timeText"></p>-->
</div>
