<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="mainDiv">
    <!-----INCLUDE DIFFERENT CANVAS FILE------>
    <?php
        include('canvas_phyExam.php'); /*Physical Examination Test*/
        include('canvas_dryheat.php'); /*Dry Heating Test*/
        include('canvas_carbonate.php');/*Carbonate Test*/
		include('canvas_potassium.php'); /*Potassium Permanganate Test*/
		include('canvas_concSulphuricAcid.php'); /*Concentrate sulphuric acid Test*/
        include('canvas_sulphite.php');/*Sulphite Test*/
        include('canvas_sulphide.php');/*Sulphide Test*/
        include('canvas_nitrite.php'); /*Nitrite Test*/
        include('canvas_nitrate.php');/*Nitrate Test*/
        include('canvas_acetate.php');/*Acetate Test*/
        include('canvas_esterTest.php');/*EsterTest Test*/
        include('canvas_ferricChloride.php');/*Ferric Chloride Test*/
		include('canvas_chlorideSilvernitrate.php');/*Silver nitrate test for chloride */
		include('canvas_chlorideMaganeseDioxide.php');/*Manganese dioxide test for chloride */
		include('canvas_chromylChloride.php');/*Chromyl chloride test for chloride */
		include('canvas_chlorineWaterTest.php');/*Chlorine Water Test*/
		include('canvas_calciumChlorideTest.php');/*Calcium Chloride Test*/
		include('canvas_OxalatePotassium.php');/*Oxalate potassium permanganate Test*/
		include('canvas_magnesiaMixtureTest.php');/*Magnesia Mixture Test*/
    ?>
    <!--------BAGROUND CANVAS-------->
    <canvas id="bgCanvas"></canvas>
</div>



