<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="mainDiv">
    <img id="bg" src="<?php getSimpath(); ?>images/BG.png"/>
    <img id="Inference" src="<?php getSimpath(); ?>images/Inference.png"/>
	<img id="drop" class="drop" src="<?php getSimPath(); ?>images/drop.png" />  
    <img id="drop_1" class="drop" src="<?php getSimPath(); ?>images/drop.png" />
	<div id="dropAreaTube_1" class="dropAreaTubes"></div>
	<div id="dropAreaTube_2" class="dropAreaTubes"></div>
	<div id="dropAreaTube_3" class="dropAreaTubes"></div>
	<div id="dropAreaTube_4" class="dropAreaTubes"></div>
	
	<div id="Solubility_molischsArea">
		<div id="testTubeDropArea"></div>
		
		<div id="testTube_1" class="testTubes">
			<img id="glucose" class="cabohydrate" src="<?php getSimPath(); ?>images/carbohydrates.png"/>
			<div id="glucoseSolution" class="tubeSolutions"></div>
			<div class="solutionFlow"></div>
			<img id="redVioletRing" class="redVioletRing" src="<?php getSimPath(); ?>images/redVioletRing.png"/>
			<img id="molisch" class="molisch" src="<?php getSimPath(); ?>images/molisch.png"/>
			<div id="triangleMask" class="triangleMask"></div>
			<img class="tTubeImg" src="<?php getSimPath(); ?>images/test tube label.png"/>
			<p class="tLabels">A</p>
		</div>
		
		<div id="testTube_2" class="testTubes">
			<img id="lactose" class="cabohydrate" src="<?php getSimPath(); ?>images/carbohydrates.png"/>
			<div id="lactoseSolution" class="tubeSolutions"></div>
			<div class="solutionFlow"></div>
			<img id="redVioletRing" class="redVioletRing" src="<?php getSimPath(); ?>images/redVioletRing.png"/>
			<img id="molisch" class="molisch" src="<?php getSimPath(); ?>images/molisch.png"/>
			<div id="triangleMask" class="triangleMask"></div>
			<img class="tTubeImg"src="<?php getSimPath(); ?>images/test tube label.png"/>
			<p class="tLabels">B</p>
		</div>
		
		<div id="testTube_3" class="testTubes">
			<img id="sucrose" class="cabohydrate" src="<?php getSimPath(); ?>images/carbohydrates.png"/>
			<div id="sucroseSolution" class="tubeSolutions"></div>
			<div class="solutionFlow"></div>
			<img id="redVioletRing" class="redVioletRing" src="<?php getSimPath(); ?>images/redVioletRing.png"/>
			<img id="molisch" class="molisch" src="<?php getSimPath(); ?>images/molisch.png"/>
			<div id="triangleMask" class="triangleMask"></div>
			<img class="tTubeImg" src="<?php getSimPath(); ?>images/test tube label.png"/>
			<p class="tLabels">C</p>
		</div>
		
		<div id="testTube_4" class="testTubes">
			<img id="starch" class="cabohydrate" src="<?php getSimPath(); ?>images/carbohydrates.png"/>
			<div id="starchSolution" class="tubeSolutions"></div>
			<div class="solutionFlow"></div>
			<img id="redVioletRing" class="redVioletRing" src="<?php getSimPath(); ?>images/redVioletRing.png"/>
			<img id="molisch" class="molisch" src="<?php getSimPath(); ?>images/molisch.png"/>
			<div id="triangleMask" class="triangleMask"></div>
			<img class="tTubeImg" src="<?php getSimPath(); ?>images/test tube label.png"/>
			<p class="tLabels">D</p>
		</div>
		
		<!--Apparatus for Solubility test-->
		<div id="solubilityWrap">
			<div id="dropperWraper">
				<div id="droperSolution"></div>
				<img id="droper" src="<?php getSimPath(); ?>images/dropper.png"/>	
			</div>
			<div id="water"></div>
			<img id="bottleShadow" src="<?php getSimPath(); ?>images/bottleShadow.png"/>
			<img id="bottle" src="<?php getSimPath(); ?>images/bottle.png"/>
			<p id="bottleTxt" class="labelTxt"></p>
		</div>
		<!--Apparatus for Molisch's test-->
		<div id="molischWrap" style="display:none;">
			<div id="molisch_dropperWraper">
				<div id="molisch_droperSolution"></div>
				<img id="molisch_droper" src="<?php getSimPath(); ?>images/dropper.png"/>	
			</div>
			<div id="molischReagent" class="bottleSolution"></div>
			<img id="molisch_bottleShadow" src="<?php getSimPath(); ?>images/bottleShadow.png"/>
			<img id="molisch_bottle" src="<?php getSimPath(); ?>images/bottle.png"/>
			<p id="molisch_bottleTxt" class="labelTxt"></p>
			<div id="molisch_dropperWraper_1">
				<div id="molisch_droperSolution_1"></div>
				<img id="molisch_droper_1" src="<?php getSimPath(); ?>images/dropper.png"/>	
			</div>
			<div id="molischH2SO4" class="bottleSolution"></div>
			<img id="molisch_bottleShadow_1" src="<?php getSimPath(); ?>images/bottleShadow.png"/>
			<img id="molisch_bottle_1" src="<?php getSimPath(); ?>images/bottle.png"/>
			<p id="molisch_bottleTxt_1" class="labelTxt"></p>
			<div id="molischH2SO4Drop"></div>
			<div id="tempBG"></div>
		</div>
	</div>
	<?php
        include('canvas_fehlilngs.php');
		include('canvas_secondScene.php');
		include('canvas_benedicts.php');
		include('canvas_tollens.php');
		include('canvas_iodine.php');
	?>
	<div id="nextButton" onclick="secondScene()">
		<p id="nextBtnLb"></p>
		<img id="nextbtn" src="<?php getSimPath(); ?>images/nextbtn.png" />
	</div>
	<img id="testtubeStand" src="<?php getSimPath(); ?>images/stand.png"/>
	<img id="labelImg_1" src="<?php getSimPath(); ?>images/label.png"/>
	<p id="glucoseTxt" class="labelTxt"></p>
	<img id="labelImg_2" src="<?php getSimPath(); ?>images/label.png"/>
	<p id="lactoseTxt" class="labelTxt"></p>
	<img id="labelImg_3" src="<?php getSimPath(); ?>images/label.png"/>
	<p id="sucroseTxt" class="labelTxt"></p>
	<img id="labelImg_4" src="<?php getSimPath(); ?>images/label.png"/>
	<p id="starchTxt" class="labelTxt"></p>
</div>






