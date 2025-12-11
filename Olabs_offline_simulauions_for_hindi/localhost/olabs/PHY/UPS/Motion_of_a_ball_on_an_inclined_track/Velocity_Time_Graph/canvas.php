


<!--Loading Microscopic view div -->

<!--Loading Background-->

<div id="mainDiv">

<img src="<?php getSimPath(); ?>images/graph_final.jpg" id="bgImage">
<canvas id="myCanvas" style="border:1px solid #d3d3d3;" >
</canvas>
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

<img src="<?php getSimpath();?>images/inference.png" id="theInference">

<div id="InferenceMessage">
</div>
<div id="thecoordinateElement">



    <p id="the5-10_coordinate" class="graphPoint" data-id="2">(5,10)</p>
    <p id="the10-20_coordinate" class="graphPoint" data-id="3">(10,20)</p>
    <p id="the15-30_coordinate" class="graphPoint" data-id="4">(15,30)</p>
    <p id="the20-40_coordinate" class="graphPoint" data-id="5">(20,40)</p>
    <p id="the25-50_coordinate" class="graphPoint" data-id="6">(25,50)</p>
    <p id="the30-60_coordinate" class="graphPoint" data-id="7">(30,60)</p>
    <p id="the35-70_coordinate" class="graphPoint" data-id="8">(35,70)</p>
    <p id="the40-80_coordinate" class="graphPoint" data-id="9">(40,80)</p>
    <p id="the45-90_coordinate" class="graphPoint" data-id="10">(45,90)</p>
    <p id="the50-100_coordinate" class="graphPoint" data-id="11">(50,100)</p>

</div>


<div id="thexasixTag">
<p id="axis0_0" class="allaxis">
    0
</p>
<p id="axis0_1" class="allaxis">
    1
</p>
<p id="axis0_2" class="allaxis">
    2
</p>
<p id="axis0_3" class="allaxis">
    3
</p>
<p id="axis0_4" class="allaxis">
    4
</p>
<p id="axis0_5" class="allaxis">
    5
</p>
<p id="axis0_6" class="allaxis">
    6
</p>
<p id="axis0_7" class="allaxis">
    7
</p>
<p id="axis0_8" class="allaxis">
    8
</p>
<p id="axis0_9" class="allaxis">
    9
</p>
<p id="axis0_10" class="allaxis">
    10
</p>

<p id="theXlabel">Time(s)</p>

 
</div>



<div id="theY-axisTag">

<p id="axis1_0" class="allaxis">
    1
</p>
<p id="axis1_2" class="allaxis">
    2
</p>
<p id="axis1_3" class="allaxis">
    3
</p>
<p id="axis1_4" class="allaxis">
    4
</p>
<p id="axis1_5" class="allaxis">
    5
</p>
<p id="axis1_6" class="allaxis">
    6
</p>
<p id="axis1_7" class="allaxis">
    7
</p>
<p id="axis1_8" class="allaxis">
    8
</p>
<p id="axis1_9" class="allaxis">
    9
</p>
<p id="axis1_10" class="allaxis">
    10
</p>

<div id="thexrotatey">
<p id="theYlabel">Velocity(m/s<sup>-1</sup>)</p>
</div>
</div>
<div id="the_joinGraphline">
    <img src="<?php getSimPath();?>images/graphjoin_line.png" id="thecoordinate_join">
</div>
<div id="showScale"> <p class="showscale-label"> Show Scale
</p>
<input type="checkbox" id="showscale"  class="Showscale" name="Show Scale" >
<div id="showScaleDiv">
<img src="<?php getSimPath();?>images/firstScale.png" id="FirstScaleImage">
<img src="<?php getSimPath();?>images/SecondScale.png" id="SecondScaleImage" style="display:none">
<p id="theScaleEquation">
</p>
</div>
<div id="TheFirstEquationOnScreen">
<div id="thefirstEquationPreview">
<img src="<?php getSimPath();?>images/First-Equation.png" id="First-Accelaration-equation">
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

<img src="<?php getSimPath();?>images/Second-staccelaration.png" id="Second-Accelaration-equation">
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

<img src="<?php getSimpath();?>images/TheEquation.jpg" id="theFinal_Equation">
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
