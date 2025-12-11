<script type="text/javascript" language="javascript">var simPath="<?php getSimPath(); ?>";</script>
<canvas id="bgCanvas" style="background-image:url();" ></canvas>
<img id="BG_Img"  class="BG-img" src="<?php getSimPath(); ?>images/BG.jpg">
<div id="FirstPage" style="display: block;">
        <div id="Beaker-1Img">

            <img src="<?php getSimpath(); ?>images/Beaker.svg" class="beaker-1" id="beaker-1">
            <img src="<?php getSimpath(); ?>images/powderonspatula.svg" class="thebeaker_Powder">
            <img src="<?php getSimpath(); ?>images/WATERINBEAKER.svg" class="beaker1_water">
            <img src="<?php getSimpath(); ?>images/Beakershadow.svg" class="beaker-1Shadow">
            <img src="<?php getSimpath(); ?>images/WATERFALLING/water falling 1.svg" class="waterfallto_beaker1">
        </div>
        <div id="Beaker-2Img">
            <img src="<?php getSimpath(); ?>images/Beaker.svg" class="beaker-2">
            <img src="<?php getSimpath(); ?>images/Beakershadow.svg" class="beaker-2Shadow">
            <img src="<?php getSimpath(); ?>images/WATERINBEAKER.svg" class="beaker2_water">
            <img src="<?php getSimpath(); ?>images/powderonspatula.svg" class="thebeaker_Powder2">
            <img src="<?php getSimpath(); ?>images/WATERFALLING/water falling 1.svg" class="waterfallto_beaker2">
        </div>
        <div id="Beaker-3Img">
            <img src="<?php getSimpath(); ?>images/Beaker.svg" class="beaker-3">
            <img src="<?php getSimpath(); ?>images/Beakershadow.svg" class="beaker-3Shadow">
            <img src="<?php getSimpath(); ?>images/WATERINBEAKER.svg" class="beaker3_water">
            <img src="<?php getSimpath(); ?>images/powderonspatula.svg" class="thebeaker_Powder3">
            <img src="<?php getSimpath(); ?>images/WATERFALLING/water falling 1.svg" class="waterfallto_beaker3">
        </div>

        <div id="Beaker-4Img">
            <img src="<?php getSimpath(); ?>images/Beaker.svg" class="beaker-4">
            <img src="<?php getSimpath(); ?>images/WATERINBEAKER.svg" class="beaker4_water">
            <img src="<?php getSimpath(); ?>images/Beakershadow.svg" class="beaker-4Shadow">
            <!-- Water FAlling To the Beakers -->
            <div id="water_falling_down">
                <img src="<?php getSimpath(); ?>images/WATERPOUR/water pour2.svg" class="waterfallingto_Beaker2" id="Waterto_beaker_2"
                    style="display:block">
                <img src="<?php getSimpath(); ?>images/WATERPOUR/water pour3.svg" class="waterfallingto_Beaker3" id="Waterto_beaker_3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WATERPOUR/water pour4.svg" class="waterfallingto_Beaker4" id="Waterto_beaker_4"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WATERPOUR/water pour5.svg" class="waterfallingto_Beaker5" id="Waterto_beaker_5"
                    style="display:none">
            </div>
        </div>
        <!-- Display Bottle-->
        <div id="bottle">
            <img src="<?php getSimpath(); ?>images/Bottle.svg" class="first-Bottle">
            <img src="<?php getSimpath(); ?>images/Cap.svg" class="bottle-cap" id="bottle_cap">
            <img src="<?php getSimpath(); ?>images/BottleShadow.svg" class="bottle_Shadow">

            <div id="nametag_3">
                <img src="<?php getSimpath(); ?>images/nameboard.svg" class="bottle_nameboard">
                <center>
                    <p class="bottle_Text"> Ammonium Chloride</p>
                </center>
            </div>
            <!-- Bottle Name-->
        </div>

        <div id="spatula">
            <div id="spatilawiht_powder" class="here">
                <img src="<?php getSimpath(); ?>images/Spatula.svg" class="spatula-1">
                <img src="<?php getSimpath(); ?>images/powderonspatula.svg" class="spatula-powder">
            </div>

            <img src="<?php getSimpath(); ?>images/Spatulashadow.svg" class="spatula-shadow1">
        </div>
        <div id="weightingmachine">
            <img src="<?php getSimpath(); ?>images/WeighingMachine.svg" class="weight_machine">
        </div>
        <div>
            <img src="<?php getSimpath(); ?>images/arrowdown.svg" class="Weight_Arrowdown">
            <img src="<?php getSimpath(); ?>images/arrowup.svg" class="Weight_Arrowup">
            <img src="<?php getSimpath(); ?>images/tarebutton.svg" class="tare_Button">
        </div>
        <div id="nametag_1">
            <img src="<?php getSimpath(); ?>images/nameboard.svg" class="Nameboard_1">
            <center>
                <p class="first_nameTag">Sodium hydroxide</p>
            </center>
        </div>
        <div id="nametag_2">
            <img src="<?php getSimpath(); ?>images/nameboard.svg" class="Nameboard_2">
            <p class="second_nameTag">Ammonium chloride</p>

        </div>
        <div id="nametag_3">
            <img src="<?php getSimpath(); ?>images/nameboard.svg" class="Nameboard_3">
            <p class="third_nameTag">Barium hydroxide</p>

        </div>
        <div id="nametag_4">
            <img src="<?php getSimpath(); ?>images/nameboard.svg" class="Nameboard_4">
            <p class="fourth_nameTag">Water</p>

        </div>
        
        <div>
            <img src="<?php getSimpath(); ?>images/powderfalling.svg" class="powder_Drop">
            <img src="<?php getSimpath(); ?>images/Glassrod.svg" class="glass_rod" id="glass_Rod">
            <img src="<?php getSimpath(); ?>images/Glassrodshadow.svg" class="glassrod_shadow" id="glasrod_shadow">
            <div id="tare_value">
                <p class="tare_value"> 0.0</p>
            </div>
            <!--  Drop Function -->
            <div id="FirstDrop" class="Beaker1_Drop">
            </div>
            <div id="SecondDrop" class="Beaker2_Drop">
            </div>
            <div id="powder-DropArea" class="powder-DropArea">
            </div>
            <div id="beaker1_Droparea" style="display: none;"></div>
            <div id="beaker2_Droparea" style="display: none;"></div>
            <div id="beaker3_Droparea" style="display: none;"></div>
            <!--Drop Area End-->

            <div id="water_animation_Bottle1">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani1.svg" id="wateranim_1" class="waterAnimation"
                    style="display:block">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani2.svg" id="wateranim_2" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani3.svg" id="wateranim_3" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani4.svg" id="wateranim_4" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani5.svg" id="wateranim_5" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani6.svg" id="wateranim_6" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani7.svg" id="wateranim_7" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani8.svg" id="wateranim_8" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani9.svg" id="wateranim_9" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani10.svg" id="wateranim_10" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani11.svg" id="wateranim_11" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani12.svg" id="wateranim_12" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani13.svg" id="wateranim_13" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani14.svg" id="wateranim_14" class="waterAnimation"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani15.svg" id="wateranim_15" class="waterAnimation"
                    style="display:none">
            </div>
            <div id="water_animation_Bottle2">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani1.svg" id="wateranim2_1" class="waterAnimation2"
                    style="display:block">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani2.svg" id="wateranim2_2" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani3.svg" id="wateranim2_3" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani4.svg" id="wateranim2_4" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani5.svg" id="wateranim2_5" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani6.svg" id="wateranim2_6" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani7.svg" id="wateranim2_7" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani8.svg" id="wateranim2_8" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani9.svg" id="wateranim2_9" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani10.svg" id="wateranim2_10" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani11.svg" id="wateranim2_11" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani12.svg" id="wateranim2_12" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani13.svg" id="wateranim2_13" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani14.svg" id="wateranim2_14" class="waterAnimation2"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani15.svg" id="wateranim2_15" class="waterAnimation2"
                    style="display:none">
            </div>

            <div id="water_animation_Bottle3">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani1.svg" id="wateranim3_1" class="waterAnimation3"
                    style="display:block">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani2.svg" id="wateranim3_2" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani3.svg" id="wateranim3_3" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani4.svg" id="wateranim3_4" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani5.svg" id="wateranim3_5" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani6.svg" id="wateranim3_6" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani7.svg" id="wateranim3_7" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani8.svg" id="wateranim3_8" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani9.svg" id="wateranim3_9" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani10.svg" id="wateranim3_10" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani11.svg" id="wateranim3_11" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani12.svg" id="wateranim3_12" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani13.svg" id="wateranim3_13" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani14.svg" id="wateranim3_14" class="waterAnimation3"
                    style="display:none">
                <img src="<?php getSimpath(); ?>images/WaterAnimation/Waterstirani15.svg" id="wateranim3_15" class="waterAnimation3"
                    style="display:none">
            </div>

           

        </div>
</div>
<!-- second page starts here -->
<div id="Second_page" >

      

        <div id="SecondPage_Beaker1">

            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="SecondPagebeaker-1" id="beaker-1">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="SecondPagebeaker1_water">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="SecondPagebeaker-1Shadow">
            <img src="<?php getSimPath(); ?>images/WATERFALLING/water falling 1.svg" class="SecondPagewaterfallto_beaker1">
        </div>
        <div id="SecondPage_Beaker2">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="SecondPagebeaker-2">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="SecondPagebeaker-2Shadow">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="SecondPagebeaker2_water">

            <img src="<?php getSimPath(); ?>images/WATERFALLING/water falling 1.svg" class="SecondPagewaterfallto_beaker2">
        </div>
        <div id="SecondPage_Beaker3">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="beaker-3">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="SecondPagebeaker-3Shadow">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="SecondPagebeaker3_water">

            <img src="<?php getSimPath(); ?>images/WATERFALLING/water falling 1.svg" class="SecondPagewaterfallto_beaker3">
        </div>

        <div id="SecondPage_Beaker4">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="SecondPagebeaker-4">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="SecondPagebeaker4_water">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="SecondPagebeaker-4Shadow">
            <img src="<?php getSimPath(); ?>images/WATERFALLING/water falling 1.svg" class="SecondPagewaterfallto_beaker4">
        </div>
        <div id="SecondPage_Beaker5">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="SecondPagebeaker-5">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="SecondPagebeaker5_water">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="SecondPagebeaker5_80mlwater">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="SecondPagebeaker-5Shadow">

            <div id="water_falling_down2">
                <img src="<?php getSimPath(); ?>images/WATERPOUR/water pour2.svg" class="SecondpageWaterto_beaker_2"
                    id="SecondpageWaterto_beaker_2" style="display:block">
                <img src="<?php getSimPath(); ?>images/WATERPOUR/water pour3.svg" class="SecondpageWaterto_beaker_3"
                    id="SecondpageWaterto_beaker_3" style="display:none">
                <img src="<?php getSimPath(); ?>images/WATERPOUR/water pour4.svg" class="SecondpageWaterto_beaker_4"
                    id="SecondpageWaterto_beaker_4" style="display:none">
                <img src="<?php getSimPath(); ?>images/WATERPOUR/water pour5.svg" class="SecondpageWaterto_beaker_5"
                    id="SecondpageWaterto_beaker_5" style="display:none">
            </div>


        </div>
        <div id="SecondpageGlass_Bottle">
            <img src="<?php getSimPath(); ?>images/Glassbottle.svg" class="glassBottle_1">
            <img src="<?php getSimPath(); ?>images/WaterinBottle.svg" class="WaterInglassBottle">
        </div>
        <img src="<?php getSimPath(); ?>images/Glassbottlecap.svg" class="glassBottleCap" id="glassBottleCap">

        <div id="TheSecondPage_Names">

            <img src="<?php getSimPath(); ?>images/nameboard.svg" class="SecondpageNameboard_1">
            <center>
                <p class="Secondpagefirst_nameTag1">Sodium hydroxide</p>
            </center>

            <img src="<?php getSimPath(); ?>images/nameboard.svg" class="SecondpageNameboard_2">
            <center>
                <p class="Secondpagefirst_nameTag2">Ammonium chloride</p>
            </center>

            <img src="<?php getSimPath(); ?>images/nameboard.svg" class="SecondpageNameboard_3">
            <center>
                <p class="Secondpagefirst_nameTag3">Barium hydroxide</p>
            </center>

            <img src="<?php getSimPath(); ?>images/nameboard.svg" class="SecondpageNameboard_4">
            <center>
                <p class="Secondpagefirst_nameTag4">Hydrochloric acid</p>
            </center>

            <img src="<?php getSimPath(); ?>images/nameboard.svg" class="SecondpageNameboard_5">
            <center>
                <p class="Secondpagefirst_nameTag5"></p>
            </center>
        </div>

        <div id="SecondpagedropArea1">

        </div>
        <div id="SecondpagedropArea2">

        </div>
        <div id="SecondpagedropArea3">

        </div>
        <div id="SecondpagedropArea4">

        </div>

    </div>
<!-- Second page ends here -->

<!-- third page starts here -->

<div id="thirdPage" style="display: none;">


        <div id="ThirdpageFirstBeaker">

            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="ThirdPagebeaker-1" id="ThirdPageBeaker-1">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="ThirdPagebeaker-1Shadow">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="ThirdPagebeaker_1water">
            <img src="<?php getSimPath(); ?>images/WATERPOUR/water pour5.svg" class="WaterInFirstBeakerThirdPage">

        </div>
        <div id="ThirdpageSecondBeaker">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="ThirdPagebeaker-2">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="ThirdPagebeaker-2Shadow">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="ThirdPagebeaker_2water">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="ThirdPagebeaker_4mlwater">
            <img src="<?php getSimPath(); ?>images/WATERFALLING/water falling 1.svg" class="ThirdPagewaterfallto_beaker2">

        </div>
        <div id="ThirdpageThirdBeaker">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="ThirdPagebeaker-3">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="ThirdPagebeaker-3Shadow">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="ThirdPagebeaker_3water">
            <img src="<?php getSimPath(); ?>images/WATERPOUR/water pour5.svg" class="WaterInThirdBeakerThirdPage">

        </div>

        <div id="ThirdpageFourthBeaker">
            <img src="<?php getSimPath(); ?>images/Beaker100ml.svg" class="ThirdPagebeaker-4">
            <img src="<?php getSimPath(); ?>images/Beakershadow.svg" class="ThirdPagebeaker-4Shadow">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="ThirdPagebeaker_4water">
            <img src="<?php getSimPath(); ?>images/WATERINBEAKER.svg" class="ThirdPagebeaker_4mlwater2">
            <img src="<?php getSimPath(); ?>images/WATERFALLING/water falling 1.svg" class="ThirdPagewaterfallto_beaker4">

        </div>

        <div id="temperatureVal">
      <table id="valueTab" border="1">
         <tr>
            <th id="one">The temperature is <span id="temperValue"></span>&deg;C</th>
         </tr>
      </table>
   </div>
        <div id="thirdpage_nametags">

            <div id="Thirdpagenametag_1">
                <img src="<?php getSimPath(); ?>images/nameboard.svg" class="thirdpage_Nameboard_1">

            </div>
            <center>
                <p class="thirdpagefirst_nameTag">Sodium hydroxide</p>
            </center>

            <div id="Thirdpagenametag_2">
                <img src="<?php getSimPath(); ?>images/nameboard.svg" class="thirdpage_Nameboard_2">
            </div>
            <center>
                <p class="thirdpagesecond_nameTag">Hydrochloric acid</p>
            </center>


            <div id="Thirdpagenametag_3">
                <img src="<?php getSimPath(); ?>images/nameboard.svg" class="thirdpage_Nameboard_3">
            </div>
            <center>
                <p class="thirdpagethird_nameTag">Ammonium hydroxide</p>
            </center>

            <div id="Thirdpagenametag_4">
                <img src="<?php getSimPath(); ?>images/nameboard.svg" class="thirdpage_Nameboard_4">
            </div>
            <center>
                <p class="thirdpagefourth_nameTag">Barium hydroxide</p>
            </center>

        </div>

        <div id="theThermometerdiv">
        <img src="<?php getSimPath(); ?>images/Thermometer full.svg" class="FullThermo_meter">
        </div>
        
        <img src="<?php getSimPath(); ?>images/Glassrod.svg" class="ThirdpageGlassrod">

        <div id="ThermoDrop_area1"></div>
        <div id="ThermoDrop_area2"></div>
        <div id="ThermoDrop_area3"></div>
        <div id="ThermoDrop_area4"></div>
        <div id="zoomthermometer_view">
           
            <img src="<?php getSimPath(); ?>images/THERMOMETER UNDER.svg" class="thermometerBackView">
            <img src="<?php getSimPath(); ?>images/THERMOMETER RED LINE.svg" class="thermometerRedmark">
            <img src="<?php getSimPath(); ?>images/THERMOMETER READING.svg" class="meterReading" id="ThermometerReading">

        </div>

        <div id="water_animation_ThirdpageBottle2">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani1.svg" id="WaterAnimThirdpage_1"
                class="waterAnimationThirdpage1" style="display:block">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani2.svg" id="WaterAnimThirdpage_2"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani3.svg" id="WaterAnimThirdpage_3"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani4.svg" id="WaterAnimThirdpage_4"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani5.svg" id="WaterAnimThirdpage_5"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani6.svg" id="WaterAnimThirdpage_6"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani7.svg" id="WaterAnimThirdpage_7"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani8.svg" id="WaterAnimThirdpage_8"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani9.svg" id="WaterAnimThirdpage_9"
                class="waterAnimationThirdpage1" style="display:none ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani10.svg" id="WaterAnimThirdpage_10"
                class="waterAnimationThirdpage1" style="display:none   ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani11.svg" id="WaterAnimThirdpage_11"
                class="waterAnimationThirdpage1" style="display:none   ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani12.svg" id="WaterAnimThirdpage_12"
                class="waterAnimationThirdpage1" style="display:none   ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani13.svg" id="WaterAnimThirdpage_13"
                class="waterAnimationThirdpage1" style="display:none   ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani14.svg" id="WaterAnimThirdpage_14"
                class="waterAnimationThirdpage1" style="display:none   ">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani15.svg" id="WaterAnimThirdpage_15"
                class="waterAnimationThirdpage1" style="display:none   ">
        </div>


        <div id="water_animation_ThirdpageBottle3">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani1.svg" id="WaterAnimThirdpage2_1"
                class="waterAnimationThirdpage1" style="display:block">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani2.svg" id="WaterAnimThirdpage2_2"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani3.svg" id="WaterAnimThirdpage2_3"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani4.svg" id="WaterAnimThirdpage2_4"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani5.svg" id="WaterAnimThirdpage2_5"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani6.svg" id="WaterAnimThirdpage2_6"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani7.svg" id="WaterAnimThirdpage2_7"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani8.svg" id="WaterAnimThirdpage2_8"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani9.svg" id="WaterAnimThirdpage2_9"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani10.svg" id="WaterAnimThirdpage2_10"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani11.svg" id="WaterAnimThirdpage2_11"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani12.svg" id="WaterAnimThirdpage2_12"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani13.svg" id="WaterAnimThirdpage2_13"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani14.svg" id="WaterAnimThirdpage2_14"
                class="waterAnimationThirdpage1" style="display:none">
            <img src="<?php getSimPath(); ?>images/WaterAnimation/Waterstirani15.svg" id="WaterAnimThirdpage2_15"
                class="waterAnimationThirdpage1" style="display:none">
        </div>
        <div id="Inference_message">
            <center>
                <p id="TheReactionMessage" class="TheMessages"> </p>
            </center>

        </div>

        <img src="<?php getSimPath(); ?>images/inference.png" class="thirdpage-inference" id="the_inferenceButton">
        <img src="<?php getSimPath(); ?>images/alert.png" class="thirdpage-Warning" id="the_WarningButton">



        
    </div>

    <div id="helpdiv">
            
            </div>



<!-- third page ends here -->

<input type="button" id="btn_Nxt"  value="NEXT">
<input type="button" id="btn_Nxt2" value="NEXT">