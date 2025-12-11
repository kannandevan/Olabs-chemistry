<ul style="right: -17px;" tabindex="0" class="overthrow content description">
    <li>
        <div class="varBox">         	
         	<!--Loading combo boxes and sliders-->      
        	<p class="varTitle" ><span id="titrateText"></span></p><select class="dropBox" name="titrate" id="titrate"></select>
            
            <br/><br/> 
            <p class="varTitle"><span id="speedText"></span><span id="speedchg">0.1</span></p>			
            <input type="range"  class="rangeSlider speed" min="0.1" max="1" id="speed" name="speed" value="0.1" step="0.1" /> 
            <div class="rangeVals">
                <span class="minrange">0.1</span><span class="maxrange">1</span>
                <div class="clear"></div>
            </div>  <br/>
           
            <p class="varTitle"><span id="molarityText"></span><span id="molaritychg">1</span><span>M</span></p>
			<input type="range"  class="rangeSlider molarity" min="1" max="10" id="molarity" name="molarity" value="1" step="1" /> 
            <div class="rangeVals">
  				<span class="minrange">1</span><span class="maxrange">10</span>
  				<div class="clear"></div>
            </div> <br/> 
  			<p class="varTitle"><span id="volumeText"></span> <span id="volumechg">10</span><span>ml
            </span></p>
			<input type="range"  class="rangeSlider volume" min="10" max="20" id="volume" name="volume" value="10" step="1" />
            <div class="rangeVals">
  				<span class="minrange">10</span><span class="maxrange">20</span>
  				<div class="clear"></div>           
   			</div><br/>
            <p align="center"><input type="button" class="subButton" name="start" id="start" disabled="disabled"/></p><br/><br/>
             
             <p class="varTitle" ><input type="checkbox"  id="displayResult" disabled="disabled" /><span id="showChecked"></span></p><br/>
            <!--Loading result options-->
            <p class="varResult"><U><span id="resultText"></span></U></p>
                <p class="varTitleReaction" id="reaction"></p> <br/>             
              
                 <p class="varTitle" ><span id="titrateMoles"></span></p>
                   <p class="varTitle"><span class="varSpace" style="float:left;">=</span><input type="text" class="wideTxtAreaclass"  id="molesTitrate" name="molesTitrate" disabled="disabled" style="float:left;" /><img id="correct2" /></p>
                 <p class="varTitle" ><span id="titrantMoles"></span></p>
                  <p class="varTitle"><span class="varSpace" style="float:left;">=</span><input type="text" class="wideTxtAreaclass"  id="molesTitrant" name="molesTitrant" disabled="disabled" style="float:left;" /><img id="correct1" /></p>
           
                <p class="varTitle" id="titrntMolarity"></p>
                <p class="varTitle" ><span class="varSpace">=</span><span class="varTitle" id="molLabel"></span></p>
                <p class="varTitle"><span class="varSpace" style="float:left;">=</span><input type="text" class="wideTxtAreaclass"  id="molTitrant" name="molTitrant" disabled="disabled" style="float:left;"/><span id="molUnit" style="float:left;"></span><img id="correct3" /></p> 
         
                <p class="varTitle"><span id="molarMassTitrant"></span></p>
                 <p class="varTitle"><span class="varSpace">=</span><span id="molarMassval"></span></p>
            <br />
            <p class="varTitle"><span id="strngthTitrant"></span></p>
            <p class="varTitle"><span class="varSpace" style="float:left;">=</span><input type="text" class="wideTxtAreaclass"  id="strengthval" name="strengthval" disabled="disabled" /><span id="strngthSym"></span></p>         
             <br />
           <p class="varResult2" id="result"><img id="correct" /><span id="resTxt"></span></p>
            <br /><br/> 
            <!--Loading reset buttons-->

            <p align="center"><input type="button" class="subButton" name="reset" id="reset"/></p>
            <br /> 
        </div>

       
       
</li>
</ul>


