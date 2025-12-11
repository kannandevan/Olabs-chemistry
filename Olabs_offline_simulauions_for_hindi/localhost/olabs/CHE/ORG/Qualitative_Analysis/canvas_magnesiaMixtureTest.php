<div id="magnesiaMixture" style="display:none">
	<p id="magnesiaMixtureHeading" class="varResult" style="position:absolute;left:384px;top:5px;text-align:center;width:171px;font-weight: 800;"></p>
	<div id="MgMix_dropperCtrlDrag" style="position:absolute;left:462px;top:26px;width:30px;height:60px;cursor:pointer;z-index:1;">
		<img id="MgMix_DroperSol"  src="<?php getSimPath(); ?>images/ChlorideSilvernitrate/dropperSolution.png" style="position:absolute;left:11px;top:23px;z-index:-1;width:4px;" />
		<img id="MgMix_dropperCtrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
	</div>
	<div id="MgMix_saltSolu" style="position:absolute;left:464px;top:70px;width:24px;height:35px;background-color:#FFFFFF;border-radius:2px 2px 5px 5px;opacity:0.7;"></div>
	<img id="MgMix_saltBottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:463px;top:47px;"/>
	<p id="MgMix_saltBottleLbl" class="canBottleTxt" style="left:440px;top:79px;font-size:13px;" ></p>
	<p id="MgMix_saltBottle_Txt" class="varLabel" style="position:absolute;left:404px;top:107px;width:147px;text-align:center;" ></p>
	<!-- part -->
	<div id="MgMix_hclCtrlDrag" style="position:absolute;left:462px;top:176px;width:30px;height:60px;cursor:pointer;z-index:1;">
		<img id="MgMix_hclCtrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
	</div>
	<img id="MgMix_hclBottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:463px;top:197px;"/>
	<p id="MgMix_hclBottleLbl" class="canBottleTxt" style="left:440px;top:229px;font-size:8px;" ></p>
	<p id="MgMix_hclBottle_Txt" class="varLabel" style="position:absolute;left:425px;top:257px;width:102px;text-align:center;" ></p>
	<!-- part -->
	
<!-- canvas part -->
	<img id="MgMix_singleStand" src="<?php getSimPath(); ?>images/singleStand.png" draggable="false" style="position:absolute;left:150px;top:225px;z-index:3;"/>
	<img id="MgMix_clockBody" src="<?php getSimPath(); ?>images/clockBody.png" draggable="false" style="position:absolute;left:280px;top:25px;z-index:3;display:none;"/>
	<img id="MgMix_needle" src="<?php getSimPath(); ?>images/needle.png" draggable="false" style="position:absolute;left:322px;top:41px;z-index:3;display:none;"/>
	<div id="testTubeWrap" style="position:absolute;left:212px;top:185px;z-index:2;cursor:pointer;">
		<img id="MgMix_testtubeFinal" src="<?php getSimPath(); ?>images/ferricTesttube.png" draggable="false" style="position:absolute;left:1px;top:1px;z-index:2;cursor:pointer;"/>
		<img id="MgMix_solution" src="<?php getSimPath(); ?>images/ferricTesttube.png" draggable="false" style="position:absolute;left:3px;top:131px;z-index:2;width:17px;height:0px;background-color:#FFFFFF;opacity:0.7;border-radius:0px 0px 10px 10px;"/>
		<img id="MgMix_cWaterSolution" src="<?php getSimPath(); ?>images/ferricTesttube.png" draggable="false" style="position:absolute;left:3px;top:101px;z-index:2;width:17px;height:0px;background-color:#FFFFFF;opacity:0.4;"/>
	</div>
	<div id="MgMix_saltDrop" class="dropArea" style="left:210px;top:64px;"></div>
	<div id="MgMix_hclDrop" class="dropArea" style="left:210px;top:64px;"></div>	
	<div id="MgMix_cSulphideDrop" class="dropArea" style="left:210px;top:64px;"></div>
	<div id="MgMix_cWaterDrop" class="dropArea" style="left:210px;top:64px;"></div>
	<img id="MgMix_drop" src="<?php getSimPath(); ?>images/drop.png" style="position:absolute;display:none;"/>
</div>