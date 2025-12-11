<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<!--<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help_benedict.js"></script> 
-->

<script type="text/javascript" src="<?php getSimPath(); ?>js/help_solubility.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_molischs.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_fehlings.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_benedicts.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_tollens.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_iodine.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_secondScene.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/help_main.js"></script>

<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_main.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_solubility.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_molisch.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_fehlings.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_secondScene.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_benedicts.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_tollens.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols_iodine.js"></script>

<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.min.js"></script>

<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
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
	gt.gettext.setLocale(language);
</script>
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/language.js'></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/Gettext.js"></script>
