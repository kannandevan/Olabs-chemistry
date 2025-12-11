<ul style="right:-17px;" tabindex="0" class="overthrow content description"><li>
		
    <div class="varBox">   
     <p  id="headngP" class="varTitle"></p>
        </br>
        <select class="dropBox" name="reactionCombo" id="reactionCombo" onchange="reactionComboselection(this.id);"></select>
                                 </br>
                                  <p  id="headngP1" class="varTitle"></p>
                                  </br>
        <select class="dropBox" name="mixtureCombo" id="mixtureCombo" onchange="mixtureComboselection(this.id);" >
								</select>
      
                          <div class="divwrap2">
<p  id="headngP2" class="varTitle"></p>
</div>
                                  <input type="range"  id="powerSlider" class=" rangeSlider power" name="rangeInput" min="40" max="100" step="10"  value="40" onchange="ChangePower(this.value);" />                                    


<div class="divwrap2">
<p  id="headngP3" class="varTitle"></p>
</div>
                                  <input type="range"  id="distanceSlider" class="rangeSlider distance" name="rangeInput" min="50" max="100" step="10"  value="50"  onchange="Changedistance(this.value);" />   
                                  
                                 <div class="divWrap"> <p id="headngP4" class="varTitle"></p><span id="rheoVal"></span></div>
                                  <input type="range"  id="rheoSlider"  class="rangeSlider rheo" name="rangeInput" min="0" max="600" step="10"  value="1"  onchange="Changerheoval(this.value);" /> 
                                   <input type="button" class="subButton" id="Start" name="Start"  onclick="startExperiment();"  />
                                 
                          <p id="heatLabel" class="varTitleEqn1"></p>
                          <p id="tempLabel" class="varTitleEqn1"></p>
                          
                         <p id="maineqn" class="varTitleEqn"></p>
                         
                                 <p  id="ReactionEnq1" class="varTitle"></p>
                                 <p  id="ReactionEnq2" class="varTitle"></p>
                                 <p  id="ReactionEnq3" class="varTitle"></p>
                                 
              <p id="anode" class="varTitleEqn"></p>
              <p id="eq1" class="varTitleEqn"></p>
              
              <p id="cathode" class="varTitleEqn"></p>
              <p id="eq2" class="varTitleEqn"></p>
              
              <p id="overall" class="varTitleEqn"></p>
              <p id="eq3" class="varTitleEqn"></p>
              
              
                                      

              <br/>
              
              <p id="eqnDiv" class="varTitleEqn"></p>
              <p id="eqnDiv1" class="varTitleEqn"></p>
              
           
     	<p align="center"><input type="button" class="subButton" id="reset" name="reset"  onclick="window.location.reload()" /><br/></p>
                    <br/>
              <br/>
	</div>

</li></ul>

<script type="text/javascript">
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
	  
    if(inputs[i].type == 'range') {
		inputs[i].addEventListener('click', function() {
        this.focus(); 
      });
    }
  }
  
</script>

