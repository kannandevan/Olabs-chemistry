<div id="potassium" style="display:none;">
	<div id="potassiumCtrl">
		<p class="varResult" id="potassiumHeading" style="position:absolute;left:384px;top:5px;text-align:center;width:171px;font-weight: 800;"></p>
		<img id="potassiumWatchglass" src="<?php getSimPath(); ?>images/watchglass.png" style="position:absolute;left:414px;top:51px;"/>
		<img id="potassiumSalt" src="<?php getSimPath(); ?>images/salt.png" style="position:absolute;left:453px;top:56px;cursor:pointer;"/>
		<div id="potassiumSaltDrag" style="position:absolute;z-index:3;left:454px;top:51px;width:40px;height:13px;cursor:pointer;padding:5px 0px 0px 5px;">
			<img id="potassiumSaltDragImg" src="<?php getSimPath(); ?>images/salt.png" style="position:relative;width:20px;height:9px;cursor:pointer;"/>
		</div>
		<p id="potassium_SaltTxt" class="ctlrBottleLabel" style="left:390px;top:89px;font-size:10px;font-weight:800;width: 163px;text-align: center;"></p>
		<div id="potassium_h2so4_dropperCtrlDrag" style="position:absolute;left:463px;top:119px;width:30px;height:60px;cursor:pointer;z-index:1">
			<img id="potassium_h2so4_dropperCtrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="padding-left:9px;" />
		</div>
		<img id="potassiumH2so4Bottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:463px;top:140px;"/>
		<p id="potassiumH2so4BottleLbl" class="canBottleTxt" style="left:440px;top:172px;font-size:11px;" ></p>
		<p id="potassium_h2so4Txt" class="varLabel" style="position:absolute;left:448px;top:200px;" ></p>
		<div id="potassium_dropperCtrlDrag" style="position:absolute;left:462px;top:226px;width:30px;height:60px;cursor:pointer;z-index:1;">
			<img id="potassiumDroperSol"  src="<?php getSimPath(); ?>images/potassiumPermanganateTest/dropperSolution1.png" style="position:absolute;left:11px;top:23px;z-index:-1;width:4px;" />
			<img id="potassium_dropperCtrl"  src="<?php getSimPath(); ?>images/dropper.png" class="ctrlDroper" style="position:absolute;padding-left:9px;" />
		</div>
		<div id="potassiumPermanganate" style="position:absolute;left:464px;top:270px;width:24px;height:35px;background-color:#cd00b7;border-radius:2px 2px 5px 5px;"></div>
		<img id="potassiumBottle" class="bottleCtrl" src="<?php getSimPath(); ?>images/bottle.png" style="position:absolute;left:463px;top:247px;"/>
		<p id="potassiumBottleLbl" class="canBottleTxt" style="left:440px;top:279px;font-size:10px;" ></p>
		<p id="potassium_Txt" class="varLabel" style="position:absolute;left:404px;top:307px;width:147px;text-align:center;" ></p>
	</div>
	<div id="potassiumCan">
		<img id="potassium_drop" src="<?php getSimPath(); ?>images/drop.png" style="position:absolute;display:none;"/>
		<img id="potassium_stand" class="testtubeStand" src="<?php getSimPath(); ?>images/standBurner1.png" draggable="false" style="z-index:3;"/>
		<div id="gasEvolveArea" style="position:absolute;width:31px;height:217px;left:113px;top:2px;overflow:hidden;">
			<img id="potassium_gass" src="<?php getSimPath(); ?>images/potassiumPermanganateTest/smokeColorless.png" style="position:absolute;left:-20px;top:159px;opacity:0.0;display:none;"/>
		</div>
		<div id="cl_sn_boilingArea" style="position:absolute;left:112px;top:211px;height:29px;width:25px;z-index:2;">
		<div id="kmno4_buble1" class="cl_sn_buble" style="left:1px;"></div>
		<div id="kmno4_buble2" class="cl_sn_buble"style="left:5px;"></div>
		<div id="kmno4_buble3" class="cl_sn_buble"style="left:10px;"></div>
		</div>
		<img id="potassium_testtube" src="<?php getSimPath(); ?>images/testtube.png" style="position:absolute;left:110px;top:125px;z-index:2;"/>
		<div id="potassium_testtubeSolution" style="position:absolute;left:112px;top:238px;width:25px;height:0px;opacity: 0.9;border-radius:0px 0px 10px 10px;background-color:#FFFFFF;display:none;"></div>
		<img id="potassiumFlame" class="flame" src="<?php getSimPath(); ?>images/flame1.png"/>
		<img id="potassiumBurnerOff" class="burnerOff" src="<?php getSimPath(); ?>images/burnerOff.png"/>
		<img id="potassiumBurnerOn"  class="burnerOn" src="<?php getSimPath(); ?>images/burnerOn.png"/>
		<div id="potassiumSaltDrop" class="dropArea" style="left:110px;top:2px;"></div>
		<div id="potassiumH2so4Drop" class="dropArea" style="left:110px;top:2px;"></div>
		<div id="potassiumDrop" class="dropArea" style="left:110px;top:2px;"></div>
		<img id="potassiumTooltip" class="inference" src="<?php getSimPath(); ?>images/tooltip.png"style="display:none;position:absolute;left:122px;top:50px;z-index:5;"/>
		<p id="potassiumInferenceTxt" style="display:none;position:absolute;left:125px;top:55px;z-index:6;font-size:12px;font-family:Arial,Helvetica,sans-serif;width:156px;text-align:center;"></p>
		<img id="potassiumInferenceBtn" src="<?php getSimPath(); ?>images/Inference.png" style="display:none;position:absolute;left:10px;top:10px;cursor:pointer;z-index:10;"/>
	</div> 
</div> 