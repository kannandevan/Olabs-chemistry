<script type="text/javascript" language="javascript">
var simPath="<?php getSimPath(); ?>";</script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/jQueryRotate.2.2.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery.qtip-1.0.0.min.js"></script>
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
	gt.gettext.setLocale(language);
</script>
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/language.js'></script>




<style>
@font-face {
	font-family:MRKGPEN;
	src: url(<?php getSimPath(); ?>css/MRKGPEN.TTF);
}
</style>
<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />