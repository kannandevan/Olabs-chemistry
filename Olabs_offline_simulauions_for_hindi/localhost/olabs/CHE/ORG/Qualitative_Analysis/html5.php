<?php
$simName="Identification of Anions";
?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
include('canvas_main.php');
?>
</div>
</div>
<div class="g198 controlHolder">
<?php
include('controls.php');
?>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").innerHTML=expTitle;
</script>