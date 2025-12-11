<?php 
/*?>author:anishasl
Date started:30/12/2013 ended:
file name:canvas.php<?php */
?>
<ul style="right:-17px;" tabindex="0" class="overthrow content description">
    <li>		
        <div class="varBox">   
          <p  id="headngP" class="varTitle"></p></br>
          <select class="dropBox" name="SampleCombo" id="SampleCombo" onchange="SampleComboselection(this.id);"></select></br>
           <p  id="headngP1" class="varTitle"></p></br>
            <img id="litmusiconImg" src="<?php getSimpath(); ?>images/litmusicon.png" onclick="litmusTestSelect()"/>
            <img id="zincmetalImg" src="<?php getSimpath(); ?>images/zincmetalicon.png" onclick="zincTestSelect()"/>
            <img id="solidsodiumImg" src="<?php getSimpath(); ?>images/solidsodiumIcon.png" onclick="sodiumTestSelect()"/>
                                          
          <div id="litmusDiv" class="varTitle"></div>
          <div id="ZincDiv" class="varTitle"></div>
          <div id="Na2co3Div" class="varTitle"></div>
          <p  id="headngResult" class="varTitleResult"></p>
          <img id="acidDiv" src="<?php getSimpath(); ?>images/acid.png" onclick="ClickAcidBase(this.id)"/>
          <img id="baseDiv" src="<?php getSimpath(); ?>images/base.png" onclick="ClickAcidBase(this.id)"/>
          <span id="acidLabel"  class="varTitle"></span>
          <span id="baseLabel"  class="varTitle"></span></br>                      
          <input type="button" class="subButton" id="reset" name="reset"  onclick="window.location.reload()" />
          <img id="acidCorrectImg" src="<?php getSimpath(); ?>images/right.png" />
          <img id="acidWrongImg" src="<?php getSimpath(); ?>images/wrong.png" />
          <img id="baseCorrectImg" src="<?php getSimpath(); ?>images/right.png" />
          <img id="baseWrongImg" src="<?php getSimpath(); ?>images/wrong.png" />        </div>
    </li>
</ul>

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

