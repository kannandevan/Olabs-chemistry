<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />

<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<script type="text/javascript" language="javascript" src="./js/jquery/ui/1.8.21/jquery-ui.min.js"></script>

<script type="text/javascript" language="javascript" src="./js/jquery.qtip-1.0.0.min.js"></script>
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
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/language.json'></script>  


<!--<script type="text/javascript" language="javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript" language="javascript" src="./js/jquery.qtip-1.0.0.min.js"></script><script type="text/javascript" language="javascript" src="<?php getSimPath(); ?>js/jquery.qtip-1.0.0-rc3.min.js"></script>-->