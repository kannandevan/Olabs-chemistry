<?php
$simName="Preparation of (250 mL of 0.1M) Standard Solution of Oxalic Acid";

?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
include('canvas.php');
?>
</div>
</div>
<div class="g198 controlHolder">
<div class="nano has-scrollbar">
<?php
include('controls.php');
?>
</div></div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").style.fontSize="175%";
 document.getElementById("expName").innerHTML=expTitle;
 
</script>