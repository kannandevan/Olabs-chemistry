<script type="text/javascript" language="javascript">var simPath="<?php getSimPath(); ?>";</script>
<link  href="<?php getSimCss('simstyle.css'); ?>" rel="stylesheet" type="text/css" />
<link  href="./js/trip/trip.css" rel="stylesheet" type="text/css" />
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/help.js"></script>
<script language="javascript" type="text/javascript" src="./js/trip/trip.min.js"></script>
<script type="text/javascript" src="<?php getSimPath(); ?>js/simcontrols.js"></script>
<!-- <script src="js/jquery/ui/1.8.21/jquery-ui.min.js" language="javascript"></script> -->
<script type="text/javascript" src="js/touchconvert.js"></script>
<script language="javascript" type="text/javascript" src="<?php getSimPath()?>js/QuestionExecutePackage.js"></script>

<?php 
	$language=$_GET['elink_lan'];
	$locale = array("en-IN","hi-IN","mr-IN","ml-IN");
	if (!in_array($language, $locale)){
		$language = $locale[0];
	}
?>
<link rel="gettext" type="application/x-po" href='<?php getSimPath(); ?>locale/<?php echo $language ?>/LC_MESSAGES/messages.po' />  
<script type="text/javascript" src="<?php getSimPath(); ?>js/Gettext.js"></script>
