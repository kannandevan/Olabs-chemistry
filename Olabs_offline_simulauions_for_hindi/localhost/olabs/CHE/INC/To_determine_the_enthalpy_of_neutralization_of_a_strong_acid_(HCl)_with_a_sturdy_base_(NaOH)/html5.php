<?php
$simName="To Determine the Enthalpy of Neutralization of a Strong Acid(HCl) with a Strong Base (NaOH)";

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
 document.getElementById("expName").style.fontSize="130%";
 document.getElementById("expName").innerHTML=expTitle;
 
</script>