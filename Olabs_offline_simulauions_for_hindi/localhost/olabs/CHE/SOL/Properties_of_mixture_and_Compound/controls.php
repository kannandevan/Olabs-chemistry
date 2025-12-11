
<ul><li>
<form name="lister"  method="post">
	
    	<div class="varBox">
  
    <p class="varTitle"><span id="label1"></span>
    <select  class="dropBox" name="thelist3" id="theinput" onchange="selectTestChange()"></select>
     </p>
    <br />
    <br />
    <br />
    <br />
    <div id="label_mixMenu"></div>
    <div id="label_compMenu"></div>
	<img id="mixtureSideMenu" src="<?php getSimPath(); ?>images/mixture.png"/><div id="mixtureDivSideMenu" onclick="mixtureFN(this);"></div>
   <img id="compoundSideMenu" src="<?php getSimPath(); ?>images/compound.png"/><div id="compoundDivSideMenu" onclick="mixtureFN(this);"></div>
   
   <div id="labelIcon1"></div>
	<div id="labelIcon2"></div>
    <p align="center"><input type="button" class="subButton" name="reset"  id="reset"  onClick="window.location.reload();"></p>
 </div>
    </li>
</ul>