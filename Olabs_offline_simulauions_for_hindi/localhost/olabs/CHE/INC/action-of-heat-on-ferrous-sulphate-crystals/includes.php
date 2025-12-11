<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<script type="text/javascript" language="javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="./js/jquery.i18n.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.min.js"></script>

<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>
<style>

@font-face {

	font-family:MRKGPEN;

	src: url(<?php getSimPath(); ?>css/MRKGPEN.TTF);

}

</style>
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
	var gt=$;
	gt.gettext.setLocale(language);
</script>
<script type='text/javascript'  src='<?php getSimPath()?>./locale/<?php echo $language ?>/LC_MESSAGES/language.js'></script>