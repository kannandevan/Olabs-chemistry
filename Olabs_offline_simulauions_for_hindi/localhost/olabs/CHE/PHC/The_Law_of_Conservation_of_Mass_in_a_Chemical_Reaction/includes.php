<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<link  href="<?php getSimCss('jquery.qtip.css'); ?>" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/runtime.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/swiffy.js"></script>
<!-- <script src="js/jquery/ui/1.8.21/jquery-ui.min.js" language="javascript"></script> -->
<script type="text/javascript" src="js/touchconvert.js"></script>
<!--<script language="javascript" type="text/javascript" src="js/jquery.qtip-1.0.0.min.js"></script>-->
<script type="text/javascript" language="javascript" src="<?php getSimPath(); ?>js/jquery.qtip.min.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/responsive.js"></script>
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","hi-IN","mr-IN","ml-IN","kn-IN");
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