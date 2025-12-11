<div id="mainDiv">
    <div id="zoomout">
        <img src="<?php getSimPath(); ?>images/bg.png" id="bgCanvas1" />
        <!-- ///////////////////////////////////Effect of Concentration////////////////////////////////////////// -->
        <img id="inferenceImg" src="<?php getSimPath(); ?>images/inference.png">
        <img id="inferenceImg1" src="<?php getSimPath(); ?>images/inference.png">

        <div id="effectOfConc">

            <div id="buretteDrop"></div>
            <div id="buretteDownDrop"></div>
            <div id="stopStart"></div>
            <button type="button" id="next">NEXT </button>
            <div class="waterAnimation" id="waterAnimation"></div>
            <div class="waterAnimation2" id="waterAnimation2"></div>
            <div id="measCylDrop"></div>
            <div id="conFlaskDrop"></div>
            <div id="buretteTap"></div>
            <div id="conFlaskDropShake"></div>


            <img id="waterpouring" src="<?php getSimPath(); ?>images/pourline1.png">
            <img id="waterpouringNa" src="<?php getSimPath(); ?>images/pourline1.png">
            <img id="waterpouringBur" src="<?php getSimPath(); ?>images/pourline1.png">
            <img src="<?php getSimPath(); ?>images/DIGITAL CLOCK - START.png" id="stopWatchOff" />
            <img src="<?php getSimPath(); ?>images/DIGITAL CLOCK - STOP.png" id="stopWatchOn" />

            <button id="pauseTimer">PAUSE</button>
            <button id="startTimer">START</button>
            <button id="resetTimer">RESET</button>


            <div class="timerDisplay">Timer starts</div>
            <div id="timerMsg">
                <img id="alertImgTimer" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertTextTimer">For real time, the ideal time for 'X' to<br>disappear is displayed on the
                    stopwatch</p>
            </div>
            <div id="resultTimeTemp"></div>

            <img src="<?php getSimPath(); ?>images/BURETTE STOPPER.png" id="buretteClose" />
            <img src="<?php getSimPath(); ?>images/BURETTE SOLUTION CLOSED.png" id="buretteWatClose" />
            <img src="<?php getSimPath(); ?>images/BURETTE SOLUTION OPENED.png" id="buretteWatOpen" />
            <img src="<?php getSimPath(); ?>images/BURETTEANDSTAND.png" id="stand" />

            <div id="buretteTapClose"></div>
            <img src="<?php getSimPath(); ?>images/Tile.png" id="crossPaper" />
            <div id="crossTileDrop"></div>


            <div id="alertMsg">
                <img id="alertImg" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertText">Transfer <span id="concVal">0</span> mL of <span class="concValTot">0</span>mL HCl
                    from the burette</p>
                <p id="alertText2">Transfer rest <span id="concVal2">0</span> mL of <span class="concValTot">0</span>mL
                    HCl from the burette</p>
            </div>

            <div id="alertMsg2">
                <img id="alertImg2" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertText3">Clean the conical flask and redo the experiment with next concentration of HCl</p>
            </div>

            <div id="coniConc">
                <img id="waterpouringCon" src="<?php getSimPath(); ?>images/pourline1.png">
                <img src="<?php getSimPath(); ?>images/CONICAL FLASK.png" id="conicalFlaskConc" />
                <img src="<?php getSimPath(); ?>images/CONICAL FLASK-Solution.png" id="coniWaterConc" />
                <img src="<?php getSimPath(); ?>images/CONICAL FLASK-Fade Solution.png" id="FadedconiWaterConc" />
            </div>

            <div id="measCylConc">
                <img src="<?php getSimPath(); ?>images/MEASURING JAR 50ML.png" id="measCylNa" />
                <img src="<?php getSimPath(); ?>images/MEASURING JAR 50ML-Solution.png" id="cylWaterConc" />
                <img src="<?php getSimPath(); ?>images/MEASURING JAR 50ML-Solution Pouring.png" id="cylWaterBendConc" />
            </div>

            <img src="<?php getSimPath(); ?>images/GLASSSTOPPER.png" id="glassStopHcl" />

            <div id="bottleComHcl">
                <img src="<?php getSimPath(); ?>images/bottle.png" id="bottleHcl" />
                <img src="<?php getSimPath(); ?>images/Water.png" id="bottleWaterHcl" />
                <img src="<?php getSimPath(); ?>images/GLASS BOTTLE-Solution Pouring.png" id="bottleBendWaterHcl" />
                <p id="bottleTextHCl">HCl</p>
            </div>

            <img src="<?php getSimPath(); ?>images/GLASSSTOPPER.png" id="glassStopNa" />

            <div id="bottleComNa">
                <img src="<?php getSimPath(); ?>images/bottle.png" id="bottleNa" />
                <img src="<?php getSimPath(); ?>images/Water.png" id="bottleWaterNa" />
                <img src="<?php getSimPath(); ?>images/GLASS BOTTLE-Solution Pouring.png" id="bottleBendWaterNa" />
                <p id="bottleTextNa">Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub></p>
            </div>

            <img src="<?php getSimPath(); ?>images/Graph1.png" id="graphPaper" />

            <div id="GraphLine">
                <img src="<?php getSimPath(); ?>images/horizontal.png" id="graphHorizontal">
                <img src="<?php getSimPath(); ?>images/verticalline.png" id="graphVerticalLine">
                <img src="<?php getSimPath(); ?>images/graph_arrow.png" id="graphArrowTop">
                <img src="<?php getSimPath(); ?>images/graph_arrow.png" id="graphArrowright">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint1">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint2">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint3">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint4">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint5">

                <div id="thexasixTag">
                    <p id="axis0_0" class="allaxis">
                        20
                    </p>
                    <p id="axis0_1" class="allaxis">
                        40
                    </p>
                    <p id="axis0_2" class="allaxis">
                        60
                    </p>
                    <p id="axis0_3" class="allaxis">
                        80
                    </p>
                    <p id="axis0_4" class="allaxis">
                        100
                    </p>
                    <p id="axis0_5" class="allaxis">
                        120
                    </p>
                    <p id="axis0_6" class="allaxis">
                        140
                    </p>
                    <p id="axis0_7" class="allaxis">
                        160
                    </p>
                    <p id="axis0_8" class="allaxis">
                        180
                    </p>
                    <p id="axis0_9" class="allaxis">
                        200
                    </p>
                    <p id="axis0_10" class="allaxis">
                        220
                    </p>
                    <p id="axis0_11" class="allaxis">
                        240
                    </p>
                    <p id="axis0_12" class="allaxis">
                        260
                    </p>

                    <p id="theXlabel">Time Taken(s)</p>
                </div>
                <div id="theY-axisTag">
                    <p id="axis1_0" class="allaxis">
                        2
                    </p>
                    <p id="axis1_2" class="allaxis">
                        4
                    </p>
                    <p id="axis1_3" class="allaxis">
                        6
                    </p>
                    <p id="axis1_4" class="allaxis">
                        8
                    </p>
                    <p id="axis1_5" class="allaxis">
                        10
                    </p>
                    <p id="axis1_6" class="allaxis">
                        12
                    </p>
                    <p id="axis1_7" class="allaxis">
                        14
                    </p>
                    <p id="axis1_8" class="allaxis">
                        16
                    </p>
                </div>
                <div id="thexrotatey">
                    <p id="theYlabel">Concentration(mL)</p>
                </div>

                <div id="the_joinGraphline">
                    <img src="<?php getSimPath(); ?>images/graphjoin_line.png" id="thecoordinate_join">
                </div>


            </div>

            <!-- /////effectofconclose -->
        </div>


        <!-- /////////////////effectoftemp -->
        <div id="effectOfTemp">

            <button type="button" id="nextTemp">NEXT </button>
            <div class="fireAnimation" id="fireAnimation"></div>
            <div id="measCylDropTemp"></div>
            <div id="conFlaskDropTemp"></div>
            <div id="buretteTapTemp"></div>
            <div id="burnerDropTemp"></div>
            <div class="waterAnimation3" id="waterAnimation3"></div>
            <div class="waterAnimation4" id="waterAnimation4"></div>
            <div class="bubbleAnimation" id="bubbleAnimation"></div>

            <div id="buretteDownDropTemp"></div>
            <img id="waterpouringTemp" src="<?php getSimPath(); ?>images/pourline1.png">
            <img id="waterpouringNaTemp" src="<?php getSimPath(); ?>images/pourline1.png">
            <img src="<?php getSimPath(); ?>images/Burner.png" id="burner" />
            <img src="<?php getSimPath(); ?>images/Switch on.png" id="burnerOn" />
            <img src="<?php getSimPath(); ?>images/Switch off.png" id="burnerOff" />
            <img src="<?php getSimPath(); ?>images/BURETTEANDSTAND.png" id="standTemp" />

            <div id="buretteTapCloseTemp"></div>
            <div id="conFlaskDropShakeTemp"></div>

            <img src="<?php getSimPath(); ?>images/BURETTE STOPPER.png" id="buretteCloseTemp" />
            <img src="<?php getSimPath(); ?>images/BURETTE SOLUTION CLOSED.png" id="buretteWatCloseTemp" />
            <img src="<?php getSimPath(); ?>images/BURETTE SOLUTION OPENED.png" id="buretteWatOpenTemp" />
            <img src="<?php getSimPath(); ?>images/THERMOMETER.png" id="thermometer" />
            <img src="<?php getSimPath(); ?>images/Tile.png" id="crossPaperTemp" />

            <div id="crossTileDropTemp"></div>

            <img src="<?php getSimPath(); ?>images/THERMOMETER.png" id="thermometer2" />

            <div id="alertMsgClean">
                <img id="alertImgClean" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertTextClean">Clean the conical flask and redo the experiment with next temperature</p>
            </div>

            <div id="coniTemp">
                <img src="<?php getSimPath(); ?>images/THERMOMETER.png" id="thermometer1" />
                <img id="waterpouringTemp" src="<?php getSimPath(); ?>images/pourline1.png">
                <img src="<?php getSimPath(); ?>images/CONICAL FLASK.png" id="conicalFlaskTemp" />
                <img src="<?php getSimPath(); ?>images/CONICAL FLASK-Solution.png" id="coniWaterTemp" />
                <img src="<?php getSimPath(); ?>images/CONICAL FLASK-Fade Solution.png" id="FadedconiWaterTemp" />
            </div>

            <div id="measCylTemp">
                <img src="<?php getSimPath(); ?>images/MEASURING JAR 50ML.png" id="measCylNaTemp" />
                <img src="<?php getSimPath(); ?>images/MEASURING JAR 50ML-Solution.png" id="cylWaterTemp" />
                <img src="<?php getSimPath(); ?>images/MEASURING JAR 50ML-Solution Pouring.png" id="cylWaterBendTemp" />
            </div>

            <div id="alertMsgTemp">
                <img id="alertImgTemp" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertTextTemp">Initial room temperature of the liquid is <span id="tempVal"> </span>°C </p>
                <p id="alertTextTempHeat">Temperature up to which solution is heated <span id="tempNormVal"> </span> °C
                </p>
            </div>

            <div id="initialTempAlert">
                <img id="initialAlertImgTemp2" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertTextTemp4">The burette is filled with HCl solution</p>
            </div>

            <div id="alertMsgTemp2">
                <img id="alertImgTemp2" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertTextTemp2">Transfer 2.5mL of 5mL HCl from the burette</p>
                <p id="alertTextTemp3">Transfer rest of the 2.5mL of 5mL HCl from the burette</p>
            </div>

            <img src="<?php getSimPath(); ?>images/DIGITAL CLOCK - START.png" id="stopWatchOffTemp" />
            <img src="<?php getSimPath(); ?>images/DIGITAL CLOCK - STOP.png" id="stopWatchOnTemp" />

            <div class="timerDisplayTemp">
                Timer starts </div>

            <div id="timerMsgTemp">
                <img id="alertImgTempTimer" src="<?php getSimpath(); ?>images/alert.png" />
                <p id="alertTextTempTimer">For real time, the ideal time for 'X' to<br>disappear is displayed on the
                    stopwatch</p>
            </div>

            <div id="resultTimeTemp"></div>

            <img src="<?php getSimPath(); ?>images/GLASSSTOPPER.png" id="glassStopNaTemp" />

            <div id="bottleComNaTemp">
                <img src="<?php getSimPath(); ?>images/bottle.png" id="bottleNaTemp" />
                <img src="<?php getSimPath(); ?>images/Water.png" id="bottleWaterNaTemp" />
                <img src="<?php getSimPath(); ?>images/GLASS BOTTLE-Solution Pouring.png" id="bottleBendWaterNaTemp" />
                <p id="bottleTextNaTemp">Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub></p>
            </div>


            <img src="<?php getSimPath(); ?>images/Graph1.png" id="graphPaperTemp" />

            <div id="GraphLineTemp">
                <img src="<?php getSimPath(); ?>images/horizontal.png" id="graphHorizontalTemp">
                <img src="<?php getSimPath(); ?>images/verticalline.png" id="graphVerticalLineTemp">
                <img src="<?php getSimPath(); ?>images/graph_arrow.png" id="graphArrowTopTemp">
                <img src="<?php getSimPath(); ?>images/graph_arrow.png" id="graphArrowrightTemp">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint1Temp">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint2Temp">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint3Temp">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint4Temp">
                <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint5Temp">

                <div id="thexasixTagTemp">
                    <p id="axis0_0Temp" class="allaxisTemp">
                        20
                    </p>
                    <p id="axis0_1Temp" class="allaxisTemp">
                        40
                    </p>
                    <p id="axis0_2Temp" class="allaxisTemp">
                        60
                    </p>
                    <p id="axis0_3Temp" class="allaxisTemp">
                        80
                    </p>
                    <p id="axis0_4Temp" class="allaxisTemp">
                        100
                    </p>
                    <p id="axis0_5Temp" class="allaxisTemp">
                        120
                    </p>
                    <p id="axis0_6Temp" class="allaxisTemp">
                        140
                    </p>
                    <p id="axis0_7Temp" class="allaxisTemp">
                        160
                    </p>
                    <p id="axis0_8Temp" class="allaxisTemp">
                        180
                    </p>
                    <p id="axis0_9Temp" class="allaxisTemp">
                        200
                    </p>
                    <p id="axis0_10Temp" class="allaxisTemp">
                        220
                    </p>
                    <p id="axis0_11Temp" class="allaxisTemp">
                        240
                    </p>
                    <p id="axis0_12Temp" class="allaxisTemp">
                        260
                    </p>
                    <p id="theXlabelTemp">Time Taken(s)</p>
                </div>

                <div id="theY-axisTagTemp">
                    <p id="axis1_0Temp" class="allaxisTemp">
                        10
                    </p>
                    <p id="axis1_2Temp" class="allaxisTemp">
                        20
                    </p>
                    <p id="axis1_3Temp" class="allaxisTemp">
                        30
                    </p>
                    <p id="axis1_4Temp" class="allaxisTemp">
                        40
                    </p>
                    <p id="axis1_5Temp" class="allaxisTemp">
                        50
                    </p>
                    <p id="axis1_6Temp" class="allaxisTemp">
                        60
                    </p>
                    <p id="axis1_7Temp" class="allaxisTemp">
                        70
                    </p>
                    <p id="axis1_8Temp" class="allaxisTemp">
                        80
                    </p>
                </div>

                <div id="thexrotateyTemp">
                    <p id="theYlabelTemp">Temperature &deg; C</p>
                </div>
                <div id="the_joinGraphlineTemp">
                    <img src="<?php getSimPath(); ?>images/graphjoin_line.png" id="thecoordinate_joinTemp">
                </div>
            </div>

        </div>

        <!-- ///////////////effectoftemp -->

    </div>
</div>