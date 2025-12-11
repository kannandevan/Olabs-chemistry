<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.min.js"></script>
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","ml-IN","hi-IN","mr-IN");
	if (!in_array($language, $locale)){
		$language = $locale[0];
	}
?>
<script language="javascript"  >
var language_script= '<?php echo $language ;?>';
var language=language_script.toString();
	language=language.slice(0, 2);
	var gt=$;
	gt.gettext.setLocale(language);
</script>
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/language.js'></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_phyExam.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_potassium.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_silverNitrate.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_manganeseDioxide.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_chromylChloride.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_chlorineWater.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_oxalicAcid.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_esterTest.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_ferricChloride.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_concSulphuricAcid.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_calciumChloride.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_oxalate_potassium.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_magnesiaMixture.js"></script> 
 <!--Include main .js files-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_main.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_main.js"></script> 

 <!--Include different tests .js files-->
  <!-- Physical Exam Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_phyExam.js"></script> 

 
 <!-- Dry Heating Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_dryheat.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_dryheat.js"></script> 

 <!-- Potassium Permanganate Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_potassium.js"></script> 
 <!-- Concentrate Sulphuric acid Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_concSulphuricAcid.js"></script> 

  <!--Carbonate Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_carbonate.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_carbonate.js"></script> 

  <!--Sulphite Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_sulphite.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_sulphite.js"></script> 

  <!--Sulphide Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_sulphide.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_sulphide.js"></script>

  <!--Nitrite Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_nitrite.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_nitrite.js"></script>

 <!--Nitrate Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_nitrate.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_nitrate.js"></script>

 <!--Acetate Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_acetate.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_acetate.js"></script>
 <!--Silver Nitrate Test of Chloride -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_chlorideSilvernitrate.js"></script> 
<!--Manganese dioxide Test of Chloride -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_chlorideMaganeseDioxide.js"></script> 
<!--Chromyl chloride Test of Chloride -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_chromylChloride.js"></script> 
<!--Chlorine Water Test of Bromide -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_chlorineWaterTest.js"></script> 
 <!--EsterTest Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_esterTest.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_esterTest.js"></script>

 <!--Ferric Chloride Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_ferricChloride.js"></script> 
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_ferricChloride.js"></script>

 <!--Calcium Chloride Test-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_calciumChlorideTest.js"></script> 
 <!--Potassium permanganate Test for Oxalate -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_oxalatePotassium.js"></script> 
 <!-- Magnesia mixture test -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_magnesiaMixtureTest.js"></script> 