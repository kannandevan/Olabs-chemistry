<ul>
  <div class="varBox"> 
   	<p class="varTitle"></p>
    
    <select class="dropBox" name="thelist" id="theinput" onChange="combo(this.value)">
         <option id="pressure" > </option>
         <!--<option id="impurities" ></option>-->
    </select>
    
    <p class="varTitle"></p>
    
    <select class="dropBox" name="thelist" id="theinput1" onChange="combo1()">
                      <option >1 </option>
                      <option >10</option>
                      <option >25</option>
                      <option >50</option>
                      <option >65</option>
                      <option >78</option>
                      <option >89</option>
                      <option >100</option>                 
    </select>
    <p class="varTitle"></p>
    <p class="varTitle"><span id="text1"></span>
    	<input id="t1" type="text" style="border:1px solid #999; width:40px;" class="inptTxtArea"  disabled="disabled" />
    </p>
    <p class="varTitle"><span id="text2"></span>
    	<input id="t2" type="text" class="inptTxtArea"  disabled="disabled" style="border:1px solid #999; width:39px;"/>
    </p>
  
    <p class="resltStyle"><b></b></p>
    
    <p class="varTitle"><span id="text3"></span>
    	<p align="center">
    		<input id="result" type="text" class="inptTxtArea" size="4" style="margin-top: 8px;"  />
    		<img id="right" class="resultImg" src="<?php getSimPath(); ?>images/correct_icon.png"/>
    		<img id="wrong" class="resultImg" src="<?php getSimPath(); ?>images/wrong_icon.png"/>
        </p>
    </p>
    
    <br/>  	
    <p align="center">
    	<input type="button" class="subButton" id="reset" name="reset" onclick="resetFN()"/>
    </p>
    
  </div>
</ul>