<!--Loading Background-->

<div id="mainDiv">
  

    <img src="<?php getSimPath(); ?>images/graph_final.png" id="bgImage">
    <canvas id="myCanvas" style="border:1px solid #d3d3d3;">
    </canvas>
    <p class="cordinateX">X</p>
    <p class="cordinateY">Y</p>
    <div id="GraphLine">
        <img src="<?php getSimPath(); ?>images/horizontal.png" id="GraphHorizontal">
        <img src="<?php getSimPath(); ?>images/verticalline.png" id="Graphverticalline">
        <img src="<?php getSimPath(); ?>images/graph_arrow.png" id="graphArrowTop">
        <img src="<?php getSimPath(); ?>images/graph_arrow.png" id="graphArrowright">


    </div>

    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint" data-id="1">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint2" data-id="2">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint3" data-id="3">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint4" data-id="4">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint5" data-id="5">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint6" data-id="6">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint7" data-id="7">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint8" data-id="8">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint9" data-id="9">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint10" data-id="10">
    <img src="<?php getSimPath(); ?>images/pointGraph.png" class="graphPoint" id="firstDivPoint11" data-id="11">

</div>

<img src="<?php getSimpath(); ?>images/inference.png" id="theInference">

<div id="InferenceMessage">
</div>
<div id="thecoordinateElement">



    <p id="the5-10_coordinate" class="graphPoint" data-id="2"><b>(5,10)</b></p>
    <p id="the10-20_coordinate" class="graphPoint" data-id="3"><b>(10,20)</b></p>
    <p id="the15-30_coordinate" class="graphPoint" data-id="4"><b>(15,30)</b></p>
    <p id="the20-40_coordinate" class="graphPoint" data-id="5"><b>(20,40)</b></p>
    <p id="the25-50_coordinate" class="graphPoint" data-id="6"><b>(25,50)</b></p>
    <p id="the30-60_coordinate" class="graphPoint" data-id="7"><b>(30,60)</b></p>
    <p id="the35-70_coordinate" class="graphPoint" data-id="8"><b>(35,70)</b></p>
    <p id="the40-80_coordinate" class="graphPoint" data-id="9"><b>(40,80)</b></p>
    <p id="the45-90_coordinate" class="graphPoint" data-id="10"><b>(45,90)</b></p>
    <p id="the50-100_coordinate" class="graphPoint" data-id="11"><b>(50,100)</b></p>

</div>


<div id="thexasixTag">
    <p id="axis0_0" class="allaxis xCoordinates">
        0
    </p>
    <p id="axis0_1" class="allaxis xCoordinates">
        1
    </p>
    <p id="axis0_2" class="allaxis xCoordinates">
        2
    </p>
    <p id="axis0_3" class="allaxis xCoordinates">
        3
    </p>
    <p id="axis0_4" class="allaxis xCoordinates">
        4
    </p>
    <p id="axis0_5" class="allaxis xCoordinates">
        5
    </p>
    <p id="axis0_6" class="allaxis xCoordinates">
        6
    </p>
    <p id="axis0_7" class="allaxis xCoordinates">
        7
    </p>
    <p id="axis0_8" class="allaxis xCoordinates">
        8
    </p>
    <p id="axis0_9" class="allaxis xCoordinates">
        9
    </p>
    <p id="axis0_10" class="allaxis xCoordinates">
        10
    </p>

    <p id="theXlabel"></p>


</div>



<div id="theY-axisTag">

    <p id="axis1_0" class="allaxis Ycoordinates">
        1
    </p>
    <p id="axis1_2" class="allaxis Ycoordinates">
        2
    </p>
    <p id="axis1_3" class="allaxis Ycoordinates">
        3
    </p>
    <p id="axis1_4" class="allaxis Ycoordinates">
        4
    </p>
    <p id="axis1_5" class="allaxis Ycoordinates">
        5
    </p>
    <p id="axis1_6" class="allaxis Ycoordinates">
        6
    </p>
    <p id="axis1_7" class="allaxis Ycoordinates">
        7
    </p>
    <p id="axis1_8" class="allaxis Ycoordinates">
        8
    </p>
    <p id="axis1_9" class="allaxis Ycoordinates">
        9
    </p>
    <p id="axis1_10" class="allaxis Ycoordinates">
        10
    </p>

    <div id="thexrotatey">
        <p id="theYlabel"></p>
    </div>
</div>
<div id="the_joinGraphline">
    <img src="<?php getSimPath(); ?>images/graphjoin_line.png" id="thecoordinate_join">
</div>
<div id="showScale">
    <div class="newDesignClick">
        <p class="showscale-label">
           
        </p>
        <input type="checkbox" id="showscale" class="Showscale" name="Show Scale">
    </div>
    
    <div id="showScaleDiv">
        <img src="<?php getSimPath(); ?>images/firstScale.png" id="FirstScaleImage">
        <img src="<?php getSimPath(); ?>images/SecondScale.png" id="SecondScaleImage" style="display:none">
        <p id="theScaleEquation">
        </p>
    </div>
    <div id="TheFirstEquationOnScreen">
        <div id="thefirstEquationPreview">
            <img src="<?php getSimPath(); ?>images/First-Equation.png" id="First-Accelaration-equation">
            <p id="The_V2Value">
                V2
            </p>
            <p id="The_V1Value">
                V1
            </p>
            <p id="The_T2Value">
                T2
            </p>
            <p id="The_T1Value">
                T1
            </p>
        </div>

        <div id="theSecondEquationPreview">

            <img src="<?php getSimPath(); ?>images/Second-staccelaration.png" id="Second-Accelaration-equation">
            <p id="TheSecond_V2Value">
                V2
            </p>
            <p id="TheSecond_V1Value">
                V1

            </p>
            <p id="TheSecond_T2Value">
                T2
            </p>
            <p id="TheSecond_T1Value">
                T1
            </p>

        </div>
    </div>


    <div id="showdistanceEquation">

        <img src="<?php getSimpath(); ?>images/TheEquation.jpg" id="theFinal_Equation">
        <p id="ThelastequationV2">
            V2
        </p>
        <p id="ThelastequationV1">
            V1

        </p>
        <p id="ThelastequationV1" class="secondV1">
            V1

        </p>
        <p id="ThelastequationT2">
            T2
        </p>
        <p id="ThelastequationT1">
            T1
        </p>
        <p id="ThelastequationT2" class="secondT2">
            T2
        </p>
        <p id="ThelastequationT1" class="secondT1">
            T1
        </p>


        <p id="The_resultOfthe_Distance">
            m
        </p>
    </div>



</div>
<!--Loading lense power text-->