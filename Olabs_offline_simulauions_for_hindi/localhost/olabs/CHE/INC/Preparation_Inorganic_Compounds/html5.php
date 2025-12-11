<?php	$simName="Preparation of Inorganic Compounds"; ?>
<div class="g594 canvasHolder"> 
    <div id="canvasBox">
		<?php include('canvas_main.php'); ?>
    </div>
</div>
<div class="g198 controlHolder">
<div class="nano has-scrollbar">
<?php
include('controls.php');
?>
</div>
</div>
<script type="text/javascript">
	 var expTitle="<?php echo $simName; ?>";
	 document.getElementById("expName").style.size="11px";
	 document.getElementById("expName").innerHTML=expTitle; 
	 
	 //get test variable from the url.
	function getTypeOfTest( name ) {	   
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( window.location.href );
	  if( results != null )
		return results[1];
	  else
		return false;
	  }
	  
	var testType=getTypeOfTest("type");		
	if(!testType){
		testType="sugar"; 
	}
</script>