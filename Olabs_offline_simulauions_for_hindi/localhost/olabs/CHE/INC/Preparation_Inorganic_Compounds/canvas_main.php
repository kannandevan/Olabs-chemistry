<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="mainDiv">
	<img id="BG" src="<?php getSimPath(); ?>/images/BG.gif" />
	<img id="drop" class="drops" src="<?php getSimPath(); ?>images/drop.png" />  
    <img id="drop_1" class="drops" src="<?php getSimPath(); ?>images/drop.png" />
    <!-----INCLUDE DIFFERENT CANVAS FILE------>
	 <?php
	 include('canvas_mohrs_salt.php');
	 include('canvas_potashAlum.php');
	 include('canvas_potassiumFerricOxalate.php');
	 ?>
 	<!-- INFERENCE ICON --> 
	<img id="inference" src="<?php getSimPath(); ?>images/inference.png"/>  
	<img id="clockBody" src="<?php getSimPath(); ?>images/clockBody.png"/>
	<span id="minutLabel"></span>
	<img id="needle" src="<?php getSimPath(); ?>images/needle.png"/>
	<img id="popup" src="<?php getSimPath(); ?>images/popup_1.png"/>
	<span id="popupTxt"></span>
</div>