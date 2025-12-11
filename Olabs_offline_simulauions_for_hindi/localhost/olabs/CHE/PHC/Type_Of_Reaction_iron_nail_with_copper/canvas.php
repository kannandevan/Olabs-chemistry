<script type="text/javascript" language="javascript">
var simPath="<?php getSimPath(); ?>";</script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<canvas id="bgCanvas" style="position:absolute;height:440px;z-index:3;top:-8px; width:569px;background-image:url(<?php getSimPath(); ?>images/BG.gif);" class="userSelect"></canvas>



<img id="TesttubeImg" src="<?php getSimPath(); ?>images/Testtube.png" class="userSelect"/> 
<img id="TesttubeRightImg" src="<?php getSimPath(); ?>images/TesttubeRight.png" class="userSelect"/>
<!--<img id="nail1Img" src="<?php getSimPath(); ?>images/nail1.png" onmouseover="dragNail(this.id);"/>-->
<div id="nail1Img" style="background-image:url(../CHE/PHC/Type_Of_Reaction_iron_nail_with_copper/images/nail1.png);" onmousedown="changeImg(this.id);"onmouseover="dragNail(this.id);" class="ui-draggable"></div>
<div id="nail2Img" style="background-image:url(../CHE/PHC/Type_Of_Reaction_iron_nail_with_copper/images/nail1.png);" onmousedown="changeImg(this.id);" onmouseover="dragNail(this.id);"> </div>
<img id="nailInTesttube" src="<?php getSimPath(); ?>images/nailInTesttube.png" class="userSelect"/> 
<img id="TesttubegreenSolnImg" src="<?php getSimPath(); ?>images/TesttubegreenSoln.png" class="userSelect"/>
<img id="TesttubeBlueSolnImg" src="<?php getSimPath(); ?>images/TesttubeBlueSoln.png" class="userSelect"/>
<img id="TesttubeBlueSolnImgRight" src="<?php getSimPath(); ?>images/TesttubeBlueSoln.png" class="userSelect"/>
<img id="clockBody" src="<?php getSimpath(); ?>images/clockBody.png" class="userSelect"/>
<img id="needle" src="<?php getSimpath(); ?>images/needle.png" class="userSelect"/>
<div id="ThreadDiv" onClick="clickThread();"></div>
<div id="TestubeDiv" class="userSelect"></div>
<img id="inferenceImg"  src="<?php getSimPath(); ?>images/inference.png" class="userSelect"/>
<div id="infertooltip" class="userSelect"></div>
<div id="testTube" class="userSelect"></div>
<div id="resultdiv" class="userSelect"></div>
<div id="helpDiv" class="userSelect"></div>
<div id="tooltipLabelforClock" class="userSelect"></div> 