<!--<script src="Scripts/swfobject_modified.js" type="text/javascript"></script>-->
<div class="post" align="left">&nbsp; <!--leave this space as such.. som wired issue-->
<?php include('breadcum.php'); ?>

  <blockquote> 
    <span class="title">To study the properties of acids and bases</span>
    
	<p>    <div class="postConentPadding">
	  <?php
		//@include('vlab/'.$sub.'/'.$brch.'/'.$sim.'/menu.php');
		@include('menu.php');
		//echo 'vlab/'.$sub.'/'.$brch.'/'.$sim.'/'.'Main3.html';

?>

  
  <script language="javascript">


function ChangeFile(type){

	if(type=="animation"){
	
		document.getElementById('simulation').src ="<?= 'vlab/'.$sub.'/'.$brch.'/'.$sim.'/'.'main.html'?>";
	
	}else{

		document.getElementById('simulation').src ="<?= 'vlab/'.$sub.'/'.$brch.'/'.$sim.'/'.'PropertiesOfAcidsNbasesSIM.html'?>";
		

	}
}
</script>
  
  </p>
<p align="center"><table border="0" align="center" class="content">
  <tr>
   <td align="center" valign="top"><a  href="?sub=<?php echo $sub; ?>&brch=<?php echo $brch; ?>&sim=<?php echo $sim; ?>&cnt=animation "><img src="images/icons/anim_icon.jpg" /><br />
      Animation</a><a  href="?sub=<?php echo $sub; ?>&brch=<?php echo $brch; ?>&sim=<?php echo $sim; ?>&cnt=simulator"><br />
      <br />
      <img src="images/icons/sim_icon.jpg"  /><br />
Simulator</a></td>
    <td colspan="3" rowspan="2">  <iframe id="simulation" src="<?= 'vlab/'.$sub.'/'.$brch.'/'.$sim.'/'.'main.html'?>" frameborder="0" height="600" width="800" scrolling="no"></iframe></td>
  </tr>
  <tr>
    <td align="center" valign="top">&nbsp;</td>
  </tr>
  </table>


</div>
<?php 
if($_GET['cnt']=='animation')
{
	echo "<script language=\"javascript\">";
	echo "ChangeFile('animation')";
	echo "</script>";	
}
else if($_GET['cnt']=='simulator')
{
	echo "<script language=\"javascript\">";
	echo "ChangeFile('sim')";
	echo "</script>";	
}
?>
  
  
  
  </p>
  

</blockquote>&nbsp;
</div>
