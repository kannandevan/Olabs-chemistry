<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","tl-IN","hi-IN","mr-IN","fr-FR","ml-IN","kn-IN");
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
<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript" language="javascript" src="./js/jquery.qtip-1.0.0.min.js"></script>
<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/Gettext.js"></script>
<style>
@font-face {
	font-family:MRKGPEN;
	src: url(<?php getSimPath(); ?>css/MRKGPEN.TTF);
}
</style>