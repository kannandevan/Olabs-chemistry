<?php
$simName="Cleaning Capacity of Soap with Hard and Soft Water";
?>

<div class="g594 canvasHolder"> 
    <div id="canvasBox">
<?php
include('canvas.php');
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
 document.getElementById("expName").style.size="11px";
 document.getElementById("expName").innerHTML=expTitle;
 
</script>