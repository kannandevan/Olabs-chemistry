<script language="javascript" type="text/javascript"  src="<?php getSimPath(); ?>js/jquery-ui-1.8.21.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","ml-IN","hi-IN","mr-IN","kn-IN");
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

<script language="javascript" type="text/javascript" src="<?php getSimPath(); ?>js/touchconvert.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/jquery.qtip-1.0.0-rc3.min.js"></script>
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/language.js'></script>

<style>
@font-face {
	font-family:MRKGPEN;
	src: url(<?php getSimPath(); ?>css/MRKGPEN.TTF);
}
</style>

