<div id="experimentCanvas">
	<!--Simulation Background -->
	<img id="backGroundImg"  src="<?php getSimpath(); ?>images/background.png" />
	<!--Burner set -->
	<div id="burnerSet">
		<img id="burner"  src="<?php getSimpath(); ?>images/burner.png" />
		<img id="burnerSwitch"  src="<?php getSimpath(); ?>images/burnerOff.png" />
		<img id="burnerSwitchON"  src="<?php getSimpath(); ?>images/burnerOn.png" />
		<div id="burnerSwitchOne"></div>

		<div id="flame">
			<img class="flame1" src="<?php getSimPath(); ?>images/flame1.png" />
			<img class="flame2" src="<?php getSimPath(); ?>images/flame2.png" />
			<img class="flame3" src="<?php getSimPath(); ?>images/flame3.png" />
			<img class="flame4" src="<?php getSimPath(); ?>images/flame4.png" />
			<img class="flame5" src="<?php getSimPath(); ?>images/flame5.png" />
		</div>
	</div>
	<!--Experiment set -->
	<div id="experimentSet">
		<!--First Test tubes -->
		<div id="testTubeOne">
			<img style="position:absolute;z-index:1"  src="<?php getSimPath(); ?>images/testTube.png" />
			<div id="testTubeOneSolution"></div>
			<!-- precipitate   -->
			<div id="testTubeOnePrcptt"></div>
			<div id="TubeOnelabel_A" class="labels" style="left:2px; top:21px;">A</div>
		</div>
		<!--Second Test tubes -->
		<div id="testTubeTwo" >
			<img style="position:absolute;z-index:1" src="<?php getSimPath(); ?>images/testTube.png" />
			<div id="testTubeTwoSolution"></div>
			<div id="testTubeTwoPrcptt"></div> 
			<div id="TubeOnelabel_A" class="labels" style="left:2px; top:21px;">B</div>
		</div>
		<!--Test tube Stand -->
		<img id="testTubeStand" src="<?php getSimPath(); ?>images/stand.png" />
		<!--Test tube label -->
		<p id="eggAlbuminLabelText"></p>
		<img id="testTubeLabelOne" src="<?php getSimPath(); ?>images/label.png" />
		<p id="gelatinDisnLabelText"></p>
		<img id="testTubeLabelTwo" src="<?php getSimPath(); ?>images/label.png" />
		
		<!--Bottle -->
		<div id="bottleContainer">
			<!--First Bottle -->
				<div id="firstBottleConatiner">
					<img id="firstBottle" src="<?php getSimPath(); ?>images/bottle.png" />
					<img id="firstBottleBrwn" src="<?php getSimPath(); ?>images/brownBottle.png" />
					<img id="firstBottleShadow" src="<?php getSimPath(); ?>images/bottleShadow.png" />
					<div id="firstBottleSolution"></div>
					<div id="firstBottleSticker"></div>
					<!--Text on the first bottle  -->
					<p id="frstStickerTextOne"></p>
					<p id="frstStickerTextTwo"></p>
					<!--Label text on the first bottle Label  -->
					
					
				</div>
			<!--Brown Bottle -->	
				<div id="scondBottleConatiner">
				
					<img id="scondBottle"  src="<?php getSimPath(); ?>images/bottle.png" />
					<img id="scondBottleShadow" src="<?php getSimPath(); ?>images/bottleShadow.png" />
					
					<div id="secondBottleSolution"></div>
					<div id="secondBottleSticker"></div>
					<!--Text on the second bottle  -->
					<p id="scndStickerTextOne"></p>
					<p id="scndStickerTextTwo"></p>
					<!--Label text on the second bottle Label -->
					
					
					
				</div>
		</div>
		<!--dropper set -->	
		<div id="dropperOne">
			<img id="dropperOneImg"  src="<?php getSimPath(); ?>images/dropper.png" />
			<div id="dropperOneSolnImg">
				<img id="dropperSolnOne"src="<?php getSimPath(); ?>images/dropperSolnImg.png" />
			</div>
		</div>
		
		<div id="dropperTwo">
			<img id="dropperTwoImg"  src="<?php getSimPath(); ?>images/dropper.png" />
			<div id="dropperTwoSolnImg">
				<img id="dropperSolnTwo"src="<?php getSimPath(); ?>images/dropperSolnImgTwo.png" />
			</div>
		</div>
		
	</div>
	
	<!-- Clock -->
	<div id="clockContainer">
		<img id="clockImg" style="width: 95px;" src="<?php getSimPath(); ?>images/clock.png" />
		<img id="needleImg" src="<?php getSimPath(); ?>images/clock_Needle.png" />
		<p id="clockTimeText"></p>
	</div>
	<!--Inference -->
	<div id="inference">
		<img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png" />
	</div>
	<!--Drop area  -->
	<div id="dropAreaOne"></div>
	 <div id="dropAreaBrnr"></div> 
	 <div id="dropAreaBrnrTwo"></div> 
	
	<!--Drops One -->
	
	<img class="dropsOne" id="DropsImgOne" src="<?php getSimPath(); ?>images/drop.png" />
	<img class="dropsOne" id="DropsImgTwo" src="<?php getSimPath(); ?>images/drop.png" />
	<img class="dropsOne" id="DropsImgThree" src="<?php getSimPath(); ?>images/drop.png" />
	
	<!--Drops Two -->
	
	<img class="dropsTwo" id="DropsImgOne_two" src="<?php getSimPath(); ?>images/drop.png" />
	<img class="dropsTwo" id="DropsImgTwo_two" src="<?php getSimPath(); ?>images/drop.png" />
	<img class="dropsTwo" id="DropsImgThree_two" src="<?php getSimPath(); ?>images/drop.png" />
	
	<!-- Test tube help -->
	<div id="helpTesttubeA"></div>
	<div id="helpTesttubeB"></div>
</div>