<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript">var simPath="<?php getSimPath(); ?>";</script>
<!-- <script src="js/jquery/ui/1.8.21/jquery-ui.min.js" language="javascript"></script> -->
<script type="text/javascript" src="js/touchconvert.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/jQueryRotate.2.2.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery.qtip-1.0.0.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.min.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","hi-IN","mr-IN","ml-IN");
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
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/LC_MESSAGES/language.js'></script>