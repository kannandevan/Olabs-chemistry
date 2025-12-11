<ul style="right: -17px;" tabindex="0" class="overthrow content description">
	<li>	
        <div class="varBox">
            <p class="varTitle" id="selectTestCombo">
                 <!-- Test dropbox label -->
                <span id="selectTestLbl"></span>
                 <!-- Test select dropbox -->
                <select class="dropBox" id="selectTest" ></select>
            </p>  
            <p class="varTitle" id="selectSampleCombo" style="display:none">
                 <!-- Sample dropbox label -->
                <span id="selectSampleLbl"></span>
                 <!-- Sample select dropbox -->
                <select class="dropBox" id="selectSample" ></select>
            </p> 
            <p class="varTitle" ><input type="checkbox" id="croSection" /><span id="croSectionLabel"></span></p>
             <br>
             <!--Loading result options-->
            <p class="varResult"><U><span id="resultLbl"></span></U></p>
            <div id="waterEqlandDiv" style="display:block">
                <p class="varTitle" id="eqnWaterEqland"></p>
                <p class="varTitle" ><span id="mass1"></span></p>
                <p class="varTitle" ><span id="mass2"></span></p>
                <br>
                <p class="varTitle" ><span id="resultWqLbl"></span></p>            
                <p class="varTitle"><span class="varSpace" style="float:left;">=</span><input type="text" class="wideTxtAreaclass"  id="ansWaterEqlndTextbox" name="ansWaterEqlndTextbox"  style="float:left;" /><span class="varSpace2" style="float:left;">g</span><img id="correct1" /></p>
                <br><br>
            </div>
            <div id="enthalpyDiv" style="display:none">
                <p class="varTitle" id="eqnEnthalpy"></p>
                <p class="varTitle" ><span id="mass"></span></p>  
                <p class="varTitle" ><span id="waterEqLabel"></span></p>    
                <p class="varTitle" ><span id="molarmass"></span></p> 
                <p class="varTitle" ><span id="molarmass2"></span></p>   
                <p class="varTitle" ><span id="weight"></span></p>           
                <br>
                <p class="varTitle" ><span id="resultEdLbl"></span></p>            
                <p class="varTitle"><span class="varSpace" style="float:left;">=</span><input type="text" class="wideTxtAreaclass"  id="ansEnthalpyTextbox" name="ansEnthalpyTextbox"  style="float:left;" /><span class="varSpace2" style="float:left;">kJ/mol</span><img id="correct2" /></p>
                <br>
            </div>         
            <!-- Reset  button-->  
            <p align="center" ><!-- top:10px -->
                <input type="button" class="subButton scale" id="ResetBtn" name="ResetBtn"  onclick="window.location.reload();"  /> 
            </p>           
        </div>
	</li>
</ul>  

