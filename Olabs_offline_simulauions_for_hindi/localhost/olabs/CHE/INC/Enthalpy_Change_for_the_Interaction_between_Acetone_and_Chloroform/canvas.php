<script type="text/javascript" language="javascript">
	var simPath="<?php getSimPath(); ?>";
</script>
<div id="mainDiv" class="userSelect">
	<div id = "page1Div">
		<img id="bg" class="bg"  src="<?php getSimpath(); ?>images/bg1.png"/>
		<div id="polytheneBottleDiv">
		 	<img id="polytheneBottle" src="<?php getSimpath(); ?>images/Calorimeter.png"/>
			<img id="bottleWater" src="<?php getSimpath(); ?>images/GlassboxWater.png"/>
			<img id="bottleWaterLabel" src="<?php getSimpath(); ?>images/BottleLabel.png"/>
		</div>
		<div id ="calorimeterCapDiv">
		 	<img id="polytheneCapBack1" src="<?php getSimpath(); ?>images/CaloriCaptopBack.png"/>
			<img id="polytheneCapFront1" src="<?php getSimpath(); ?>images/CaloriCaptopFront.png"/>
			<img id="thermometerInCalori" src="<?php getSimpath(); ?>images/Thermometer.png"/>
			<img id="stirrer" src="<?php getSimpath(); ?>images/calorimeterStirrer.png"/>
		</div>
		<div id="beakerDiv">
		 	<img id="beaker" src="<?php getSimpath(); ?>images/Beaker.png"/>
			<img id="beakerWater" src="<?php getSimpath(); ?>images/waterInBeaker.png"/>
			<img id="waterTilt" src="<?php getSimpath(); ?>images/watertilted.png"/>
		</div>
		<img id="beakerLabelPage1" src="<?php getSimpath(); ?>images/Page1Label.png"/>
		<img id="thermometer" src="<?php getSimpath(); ?>images/Thermometer.png"/>
		<div id="readingLabelDivRight" class="readingLabelDivRight">
			<div id= "readingLabelRight" class="readingLabelRight"><p class="pclass">t1 27.7&#8451</p></div>
			<div id="line1Right" class="line1Right"></div>
			<div id="line2Right" class="line2Right"></div>
		</div>
		<div id="readingLabelDivLeft" class="readingLabelDivLeft">
			<div id= "readingLabelLeft" class="readingLabelLeft"><p class="pclass"></p></div>
			<div id="line1Left" class="line1Left"></div>
			<div id="line2Left" class="line2Left"></div>
		</div>
		<div id="thermometerDroparea" class="droparea"></div>
		<div id="helpArea"></div>
		<span id="noteDiv" class="noteDiv">
			<table>
				<tr>
					<td><img id="warningIcon" src="<?php getSimpath(); ?>images/AlertIcon.png"/></td>
					<td>Add hot water without loss of time</td>
				</tr>
			</table>
		</span>
		<div id="beakerDroparea" class="droparea"></div>
		<img id="pourWater" src="<?php getSimpath(); ?>images/pourline1.png"/>
		<button id="nextButton" class="nextButton" >NEXT</button>  
	</div>	
	<div id = "page2Div">
		<div class="beakerMainDiv">
			<div class="beakerMainDiv2">
				<div class="beakerMainDiv3">
					<div class="beakerMainDiv4">
					<table class="tableClassCommon">
						<tr>
							<td class="headStyle"></td>
							<td><button id="nextButton1" class="equationToNextPage" >NEXT</button></td>
						</tr>
						<tr>
							<td class="headStyle2">&emsp;&emsp;Temperature of normal water (t1)</td>
							<td class="headStyle2">= 27.7&#8451</td>
						</tr>
						<tr>
							<td class="headStyle2">&emsp;&emsp;Temperature of 100ml hot water (t2)</td>
							<td class="headStyle2">= 48.6&#8451</td>
						</tr>
						<tr>
							<td class="headStyle2">&emsp;&emsp;Temperature after mixing (t3)</td>
							<td class="headStyle2">= 36.4&#8451</td>
						</tr>
						<tr>
							<td class="headStyle2">&emsp;&emsp;Calorimeter constant W</td>
							<td class="headStyle2"><img src="<?php getSimpath(); ?>images/equationW.png" class="imgEqu"></td>
						</tr>
						<tr>
							<td class="headStyle3"></td>
							<td class="headStyle3">= 40g</td>
						</tr>
					</table>
					</div>
				</div>
			</div>
   		</div>
	</div>
	<div id = "page3Div">
		<img id="bg1" class="bg" src="<?php getSimpath(); ?>images/bg.png"/>
		<div id="polytheneBottleDiv1">
		 	 <img id="polytheneBottle1" src="<?php getSimpath(); ?>images/Calorimeter.png"/>
			<img id="bottleWater1" src="<?php getSimpath(); ?>images/GlassboxWater.png"/>
		</div>
		<div id ="calorimeterCapDiv1">
		 	<img id="polytheneCapBack" src="<?php getSimpath(); ?>images/CaloriCaptopBack.png"/>
			 <img id="polytheneCapFront" src="<?php getSimpath(); ?>images/CaloriCaptopFront.png"/>
			 <img id="thermometerInCalori1" src="<?php getSimpath(); ?>images/Thermometer.png"/>
			<img id="stirrer1" src="<?php getSimpath(); ?>images/calorimeterStirrer.png"/> 
		 </div>
		<div id="beakerDivChloroform">
		 	<img id="beakerChloroform" src="<?php getSimpath(); ?>images/Beaker.png"/>
			<img id="beakerWaterChloroform" src="<?php getSimpath(); ?>images/waterInBeaker.png"/>
			<img id="beakerWaterChloroformtilt" src="<?php getSimpath(); ?>images/watertilted.png"/>
		</div>
		<img id="beakerChloroformLabel"  src="<?php getSimpath(); ?>images/Beaker1Label.png"/>
		<div id="beakerDivAcetone">
		 	<img id="beakerAcetone" src="<?php getSimpath(); ?>images/Beaker.png"/>
			<img id="beakerWaterAcetone" src="<?php getSimpath(); ?>images/waterInBeaker.png"/>	
			<img id="beakerWaterAcetonetilt" src="<?php getSimpath(); ?>images/watertilted.png"/>
		</div>
		<img id="beakerAcetoneLabel" src="<?php getSimpath(); ?>images/Beaker2Label.png"/>
		<div id="chloroformBottleDiv">
		 	<img id="chloroformBottle" class="chloroformBottle" src="<?php getSimpath(); ?>images/Chloroform.png"/>
			 <img id="chloroformBottleTop" class="chloroformBottleTop" src="<?php getSimpath(); ?>images/BottleTop.png"/>
		</div>
		<img id="chloroformBottleCap" class="chloroformBottleCap" src="<?php getSimpath(); ?>images/BottleCap.png"/>	
		<img id="chloroformPour"  src="<?php getSimpath(); ?>images/pourline1.png"/>

		<div id="acetoneBottleDiv">
		 	<img id="acetoneBottle" class="chloroformBottle" src="<?php getSimpath(); ?>images/Acetone.png"/>
			 <img id="acetonBottleTop" class="chloroformBottleTop" src="<?php getSimpath(); ?>images/BottleTop.png"/>
		</div>
		<img id="acetoneBottleCap"  src="<?php getSimpath(); ?>images/BottleCap.png"/>	
		<img id="acetonPour"  src="<?php getSimpath(); ?>images/pourline1.png"/>	
		<div id="measuringCylinderDiv">
		 	<img id="measuringCylinder" src="<?php getSimpath(); ?>images/measuring_cylinder.png"/>
			<img id="cylinderWater"  src="<?php getSimpath(); ?>images/cylinderWater.png"/>		
			<img id="measuringSlide" src="<?php getSimpath(); ?>images/measuringWaterSlant.png"/>
		</div>
		<img id="thermometerPage2"  src="<?php getSimpath(); ?>images/Thermometer.png"/>		
		<div id="dropAreaChloroform"></div>
		<div id="readingLabelDiv2" class="readingLabelDivLeft">
			<div id= "readingLabel2" class="readingLabelLeft"><center><p class="pclass">t1 24&#8451</p></center></div>
			<div id="page2line1" class="line1Left"></div>
			<div id="page2line2" class="line2Left"></div>
		</div>
		<div id="readingLabelDiv2Right" class="readingLabelDivRight">
			<div id= "readingLabel2Right" class="readingLabelRight"><p class="pclass"></p></div>
			<div id="line1Right2" class="line1Right"></div>
			<div id="line2Right2" class="line2Right"></div>
		</div>
		<div id="measuringDroparea" ></div>
		<img id="cylinderPour"  src="<?php getSimpath(); ?>images/pourline1.png"/>
		<div id="polytheneDroparea" ></div>
		<img id="measurePour"  src="<?php getSimpath(); ?>images/pourline1.png"/>	
		<div id="labelDiv">
			<div id="line1Label"></div>
			<div id="line2Label"></div>
			<div id="measureLabel"><span>8.1ml</span></div>
		</div>
		<span id="noteDiv1" class="noteDiv">
			<table>
				<tr>
					<td><img id="warningIcon1" src="<?php getSimpath(); ?>images/AlertIcon.png"/></td>
					<td>Wash the measuring cylinder</td>
				</tr>
			</table>
		</span>
		<button id="nextButton2" class="nextButton" >NEXT</button>  
	</div>
	<div id = "page4Div">
	<div class="beakerMainDiv">
			<div class="beakerMainDiv2">
				<div id="beakerMainDiv3">
					<div class="beakerMainDiv4">
					<table class="tableClassCommon1">
						<tr>
							<td class="head1Style2">&emsp;&emsp;Calorimeter constant calculated from previous page W</td>
							<td class="head1Style2">= 40g</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Room temperature (t)</td>
							<td class="head1Style2">= 23&#8451</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Specific heat of chloroform (q1)</td>
							<td class="head1Style2">= 1.05 kj/kg.k</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Specific heat of acetone (q2)</td>
							<td class="head1Style2">= 2.15 kj/kg.K</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Initial temperature of Chloroform (t1)</td>
							<td class="head1Style2">= 24&#8451</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Initial temperature of Acetone (t2)</td>
							<td class="head1Style2">= 25&#8451</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Temperature of mixture of Chloroform & Acetone (t3)</td>
							<td class="head1Style2">= 32&#8451</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Mass of Chloroform (m1)</td>
							<td class="head1Style2">= 12g</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Mass of Acetone (m2)</td>
							<td class="head1Style2">= 5.8g</td>
						</tr>
						<tr>
							<td class="head1Style2">&emsp;&emsp;Enthalpy change</td>
							<td class="head1Style2">= -[W*(t3-t)]+[m1*q1*(t3-t1)]+[m2*q2*(t3-t2)]</td>
						</tr>
					</table>
					</div>
				</div>
			</div>
   		</div>
	</div>	
</div>