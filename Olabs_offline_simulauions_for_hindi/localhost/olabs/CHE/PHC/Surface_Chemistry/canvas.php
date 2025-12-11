<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="mainDiv">
	<img id="backGroundImg"  src="<?php getSimpath(); ?>images/background.jpg" />
	<img id="drop"  class="possAbsol" src="<?php getSimpath(); ?>images/drop.png" />
	<img id="drop_1" class="possAbsol" src="<?php getSimpath(); ?>images/drop.png" />
    <!-----INCLUDE DIFFERENT CANVAS FILE------>
    <?php
        include('canvas_starch.php'); 
        include('canvas_gum.php');
        include('canvas_ferricHydroxide.php');

        // Second
        include('canvas_aluminiumHydroxide.php');
        include('canvas_arseniousSulphide.php');

		include('canvas_eggalbumin.php'); 
        
    ?>
 <!-- INFERENCE ICON --> 
    <!-- Clock -->
	<div id="clockContainer">
		<img id="clockImg" style="width: 95px;" src="<?php getSimPath(); ?>images/clock.png" />
		<img id="needleImg" src="<?php getSimPath(); ?>images/clock_Needle.png" />
		<p id="clockTimeText"></p>
	</div>
	
		<img id="inference" src="<?php getSimPath(); ?>images/inference.png" />


</div>



