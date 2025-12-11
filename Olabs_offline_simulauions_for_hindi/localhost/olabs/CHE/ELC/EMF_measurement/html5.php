<?php
$simName="EMF measurement";

?>

<div id="sidebar-wrapper" class="controlHolder" style="overflow-y:scroll">
	<div class="nano has-scrollbar">
		<?php
		include('controls.php');
		?>
	</div>
</div>
	
	
<div id="page-content-wrapper" class="canvasHolder">
	<?php
	include('canvas.php');
	?>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").style.size="11px";
 document.getElementById("expName").innerHTML=expTitle;
 
</script>