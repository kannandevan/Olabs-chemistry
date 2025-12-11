<div id="chlorideSilvernitrate" style="display:none">
	<p class="varResult" id="chlorideSilvernitrateHeading" style="position:absolute;left:384px;top:5px;text-align:center;width:171px;font-weight: 800;"></p>
	<div id="cl_sn_dropperCtrlDrag" style="position:absolute;left:462px;top:26px;width:30px;height:60px;cursor:pointer;z-index:1;">
		<img id="cl_sn_DroperSol"  src="<?php getSimPath(); ?>images/ChlorideSilvernitrate/dropperSolution.png" style="position:absolute;left:11px;top:23px;z-index:-1;width:4px;" />
		<img id="cl_sn_dropperCtrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
	</div>
	<div id="cl_sn_saltSolu" style="position:absolute;left:464px;top:70px;width:24px;height:35px;background-color:#FFFFFF;border-radius:2px 2px 5px 5px;opacity:0.7;"></div>
	<img id="cl_sn_saltBottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:463px;top:47px;"/>
	<p id="cl_sn_saltBottleLbl" class="canBottleTxt" style="left:440px;top:79px;font-size:13px;" ></p>
	<p id="cl_sn_saltBottle_Txt" class="varLabel" style="position:absolute;left:404px;top:107px;width:147px;text-align:center;" ></p>
	<!-- part -->
	<div id="cl_sn_hno3CtrlDrag" style="position:absolute;left:462px;top:126px;width:30px;height:60px;cursor:pointer;z-index:1;">
		<img id="cl_sn_hno3Ctrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
	</div>
	<img id="cl_sn_hno3Bottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:463px;top:147px;"/>
	<p id="cl_sn_hno3BottleLbl" class="canBottleTxt" style="left:440px;top:179px;font-size:11px;" ></p>
	<p id="cl_sn_hno3Bottle_Txt" class="varLabel" style="position:absolute;left:404px;top:207px;width:147px;text-align:center;" ></p>
	<!-- part -->
	<div id="cl_sn_AgNO3CtrlDrag" style="position:absolute;left:422px;top:226px;width:30px;height:60px;cursor:pointer;z-index:1;">
		<img id="cl_sn_AgNO3Ctrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
	</div>
	<img id="cl_sn_AgNO3Bottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:423px;top:247px;"/>
	<p id="cl_sn_AgNO3BottleLbl" class="canBottleTxt" style="left:400px;top:279px;font-size:11px;" ></p>
	<p id="cl_sn_AgNO3Bottle_Txt" class="varLabel" style="position:absolute;left:364px;top:307px;width:147px;text-align:center;" ></p>
	<!-- part -->
	<div id="cl_sn_Nh4ohCtrlDrag" style="position:absolute;left:502px;top:226px;width:30px;height:60px;cursor:pointer;z-index:1;">
		<img id="cl_sn_Nh4ohCtrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
	</div>
	<img id="cl_sn_Nh4ohBottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:503px;top:247px;"/>
	<p id="cl_sn_Nh4ohBottleLbl" class="canBottleTxt" style="left:480px;top:279px;font-size:11px;" ></p>
	<p id="cl_sn_Nh4ohBottle_Txt" class="varLabel" style="position:absolute;left:444px;top:307px;width:147px;text-align:center;" ></p>
	<!-- part -->
<!-- canvas part -->
	<img id="cl_sn_drop" src="<?php getSimPath(); ?>images/drop.png" style="position:absolute;display:none;"/>
	<div id="cl_sn_testtubeSolution" style="position:absolute;left:112px;top:241px;width:25px;height:0px;opacity: 0.9;border-radius:0px 0px 10px 10px;background-color:#FFFFFF;display:none;z-index:1;"></div>
	<img id="cl_sn_stand" class="testtubeStand" src="<?php getSimPath(); ?>images/standBurner1.png" draggable="false" style="z-index:3;"/>
	<div id="cl_sn_boilingArea" style="position:absolute;left:112px;top:211px;height:29px;width:25px;z-index:3;">
		<div id="cl_sn_buble1" class="cl_sn_buble" style="left:1px;"></div>
		<div id="cl_sn_buble2" class="cl_sn_buble"style="left:5px;"></div>
		<div id="cl_sn_buble3" class="cl_sn_buble"style="left:10px;"></div>
	</div>
	<img id="cl_sn_testtube" src="<?php getSimPath(); ?>images/testtube.png" style="position:absolute;left:110px;top:125px;z-index:2;"/>
	<img id="cl_sn_Flame" class="flame" src="<?php getSimPath(); ?>images/flame1.png"/>
	<img id="cl_sn_BurnerOff" class="burnerOff" src="<?php getSimPath(); ?>images/burnerOff.png"/>
	<img id="cl_sn_BurnerOn"  class="burnerOn" src="<?php getSimPath(); ?>images/burnerOn.png"/>
	<div id="cl_sn_SaltDrop" class="dropArea" style="left:110px;top:2px;"></div>
	<div id="cl_sn_Hno3Drop" class="dropArea" style="left:110px;top:2px;"></div>
	<div id="cl_sn_AgNO3Drop" class="dropArea" style="left:110px;top:2px;"></div>
	<img id="cl_sn_whitePpt" src="<?php getSimPath(); ?>images/whitePpt.png" style="position:absolute;left:112px;top:230px;opacity:0;"/>
	<div id="cl_sn_nh4ohDrop" class="dropArea" style="left:110px;top:2px;"></div>
</div>