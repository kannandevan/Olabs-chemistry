<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="./js/jquery/ui/1.10.2/jquery-ui-1.10.2.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.js"></script>
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php getSimPath(); ?>js/Gettext.js"></script>
<script type="text/javascript" language="javascript" src="./js/touchconvert.js"></script>
<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","ml-IN","hi-IN","mr-IN");
	if (!in_array($language, $locale)){
		$language = $locale[0];
	}
?>
<link rel="gettext" type="application/x-po" href='<?php getSimPath(); ?>locale/<?php echo $language ?>/LC_MESSAGES/messages.po' />  
