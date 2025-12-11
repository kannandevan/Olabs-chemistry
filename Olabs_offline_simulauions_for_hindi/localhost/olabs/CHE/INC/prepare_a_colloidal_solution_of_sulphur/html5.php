<?php
$simName="Prepare a Colloidal Solution of Sulphur";

?>
<div class="flex-container sim-interactive-area">
    <div class="sim-controls">
        <div class="control-div">
            <div class="control-scroll-area">
                <?php
                include('controls.php');
                ?>
            </div>
        </div>
    </div>
    <div class="sim-div">
        <div class="sim-canvas">
            <?php
            include('canvas.php');
            ?>
        </div>
    </div>
</div>
<script type="text/javascript">
 var expTitle="<?php echo $simName; ?>";
 document.getElementById("expName").style.size="11px";
 document.getElementById("expName").innerHTML=expTitle;
 
</script>