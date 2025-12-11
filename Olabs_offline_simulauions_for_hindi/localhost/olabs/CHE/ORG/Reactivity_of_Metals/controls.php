<ul style="right: -17px;" tabindex="0" class="overthrow content description"><li>
<form name="lister"  method="post">
	
    	<div class="varBox">
        
        	 <p class="varTitle"><span id='label1'></span>
             <select class="form-control" name="thelist"  id="thelist0" onChange="metalChange()"></select>
            </p>
            <br/>
             <p class="varTitle"><span id='label2'></span>
             <select class="form-control" name="thelist"  id="thelist1" onChange="beakerChange()"></select>
            </p>
            <br/>
            <p class="varTitle"><span id='label3'></span>
             <select class="form-control" name="thelist"  id="thelist2" onChange="beakerChange()"></select>
            </p></br>
            <p class="varTitle"><span id='label4'></span>
             <select class="form-control" name="thelist"  id="thelist3" onChange="beakerChange()"></select>
            </p></br>
       
             <p class="varTitle" id="result"><u><h1></h1></u></p></br>
             
             <p class="varTitle"><span id='label5'></span>
             <select class="form-control ctrl" name="thelist"  id="thelist4Result" onChange="mostReactiveFN(this)"></select><img class="resltIcon" id="reslticon4" src="<?php getSimPath(); ?>images/correct.png" /></p></br>
             <p class="varTitle"><span id='label6'></span>
             <select class="form-control ctrl" name="thelist"  id="thelist5Result" onChange="leastReactiveFN(this)"></select><img class="resltIcon" id="reslticon5" src="<?php getSimPath(); ?>images/correct.png" /></p></br>
         	 <p class="varTitle"><span id='label7'></span>
             <select class="form-control ctrl" name="thelist"  id="thelist6Result" onChange="orderOfReactivityFN(this)"></select><img class="resltIcon" id="reslticon6" src="<?php getSimPath(); ?>images/correct.png" /></p></br>
            <br />
           
            <!--Loading reset button-->
            <p align="center"><input type="button" class="form-control" name="reset" \ id="reset"  onClick="window.location.reload();"></p> 
      </div>
    </li>
</ul>
