<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.min.js"></script>
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","hi-IN","ml-IN","mr-IN");
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


<script type="text/javascript" src="<?php getSimPath(); ?>js/help_aluminiumHydroxide.js"></script>

<script type="text/javascript" src="<?php getSimPath(); ?>js/help_arseniousSulphide.js"></script>

<script type="text/javascript" src="<?php getSimPath(); ?>js/help_starch.js"></script>

<script type="text/javascript" src="<?php getSimPath(); ?>js/help_ferricHydroxide.js"></script>


<script type="text/javascript" src="<?php getSimPath(); ?>js/help_gum.js"></script>

<script type="text/javascript" src="<?php getSimPath(); ?>js/help_egg.js"></script>

<!--Include main .js files-->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script> 

<!-- Starch -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_starch.js"></script> 

<!-- Gum -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_gum.js"></script> 

<!-- Ferric Hydroxide -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_ferricHydroxide.js"></script>

<!-- Aluminium Hydroxide -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_aluminiumHydroxide.js"></script>

<!-- Arsenious Sulphide -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_arseniousSulphide.js"></script>

<!-- Egg Albumin -->
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_Eggalbumin.js"></script>




<!-- Help -->
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help.js"></script> 

