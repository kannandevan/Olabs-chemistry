<ul style="right:-17px;" tabindex="0" class="overthrow content description">
	<li>	
       	<div class="varBox">   
          <p class="varTitle" id="Chr_one" style="margin-top: 10px;"></p>
        <p id="springLbl" class="varTitle"></p>
  			<select class="dropBox"  id="Spring_ID" >
			</select>
            <p  class="varTitle" id="Chr_two" style="margin-top: 10px;"></p>
        <p id="envmntLbl" class="varTitle"></p>
  			<select class="dropBox"  id="Environment_ID">
			</select>
            <p id="massLbl" class="varTitle" style="margin-top: 10px;"></p>
            <p id="massVal" class="varTitle">50 g</p> 
            <input type="range" style="margin-top:3px;" class="rangeSlider" min="1" max="6" id="massslider"  value="0" oninput="changeMass(this.value)" />
            <span class="varTitle" id="minval">50</span>
            <span class="varTitle" id="maxval">300</span> 
            <input type="checkbox" style="margin-top: 14px; margin-left: 32px;" id="Chkbox" /> 
			<p class="varTitle" id="Chr_three"  style="margin-top: -20px; margin-left: 38px;"></p>
	<p  id="AnswerPara" class="varTitle" style="margin-top: 14px; margin-left: 7px;"><span id="answr_para"> </span> <span id="Result_Span">30</span> N/m</p>
					 <p align="center" >	
            	 <input type="button" style="margin-top: 41px;" class="subButton" id="ResetBtn" value="Reset" name="ResetBtn" onclick="window.location.reload();"  />     	       
            </p>
        </div>
	</li>
</ul>

