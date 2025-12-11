<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="mainDiv">
    <img id="bg" src="<?php getSimpath(); ?>images/BG.gif"/>
    <?php
        include('canvas_charcoalcavity.php'); /*Charcoal Cavity Test*/
		include('canvas_cobaltNitrate.php'); /*Cobalt Nitrate Test*/
		include('canvas_boraxBead.php'); /*Borax Bead Test*/
		include('canvas_potassiumFerrocyanide.php'); /*Potassium ferrocyanide Test*/
		include('canvas_laketest.php'); /*Lake test*/	
		include('canvas_potassiumnitrite.php'); /*Potassium nitrite test*/	
		include('canvas_ammoniumthiocyanate.php'); /* Ammonium thiocyanate ether test*/
		include('canvas_ammoniumMolybdateTest.php');/*Ammonium molybdate test*/
		include('canvas_magnesiaMixtureTest.php');/*Magnesia Mixture Test*/
		include('canvas_groupFive.php'); /*Group Five Test*/
		include('canvas_potassiumChromateTest.php');/*Potassium Chromate Test*/
		include('canvas_ammoniumSulphateTest.php');/*Ammonium Sulphate Test*/
		include('canvas_ammoniumOxalateTest.php');/*Ammonium Oxalate Test*/
		include('canvas_groupTwo.php');/*Group Two Test*/
		include('canvas_three.php');/*Group Three Test*/
		include('canvas_ammoniumPhosphatetest.php');/*Ammonium Phosphate test -Group VI*/
		include('canvas_colourTest.php'); /*---------------Colour Test*/
		include('canvas_smellTest.php'); /*----------------Smell Test*/
		include('canvas_dryHeatingTest.php'); /*-----------Dry Heating Test*/
		include('canvas_flameTest.php'); /*----------------Flame Test--------*/
		include('canvas_groupZero.php'); /*----------------Group Zero Test------*/
		include('canvas_groupOne.php'); /*-----------------Group One Test------*/
		include('canvas_sodiumHydroxide.php'); /*----------Sodium Hydroxide Test------*/
		include('canvas_nesslersReagentTest.php'); /*------Nessler's Reagent Test------*/
		include('canvas_groupOne_coolSolution.php'); /*----Group one cool the solution Test------*/
		include('canvas_groupOne_potassiumIodide.php'); /*-Group one potassium iodide Test------*/
		include('canvas_groupOne_potassiumChromate.php'); /*-------Group one potassium chromate Test------*/
		include('canvas_groupTwo_potassiumIodide.php'); /*---------Group two potassium iodide Test------*/
		include('canvas_groupTwo_potassiumIodideNextScene.php');/*-Group two potassium iodide Next Scene Test------*/
		include('canvas_groupTwo_pChromateNextScene.php'); /*------Group two potassium chromate Next Scene Test------*/
		include('canvas_groupTwo_Cu_pFerrocyanideNext.php'); /*--- Group two potassium ferrocyanide(in Copper) Next Scene Test------*/
		include('canvas_groupTwo_Cu_pIodideNext.php'); /*----------Group two potassium Iodide(in Copper) Next Scene Test------*/
		include('canvas_sodiumhydroxideBr2.php'); /*Sodium hydroxide-Br2 test--Manganese*/
	?>
    <img id="Inference" src="<?php getSimpath(); ?>images/Inference.png"/>
    <p id="expHeading"></p>
    <img id="salt" />
    <div id="saltsolution"></div>
     <div id="boardlabel_saltsoln">
 		<img id="boardlabelImg_saltsoln" src="<?php getSimPath(); ?>images/label.png"/>
   		<p id="saltsolutionlabel_saltsoln"></p> 
    </div>
</div>






