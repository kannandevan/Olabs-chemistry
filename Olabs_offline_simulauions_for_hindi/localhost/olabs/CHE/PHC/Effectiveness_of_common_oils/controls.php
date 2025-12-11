
<ul style="right:-2px;"  tabindex="0" class="overthrow content description">
  <li>
    <div class="varBox">
      <p class="varTitle" id="oil" > </p>
      <select style="width:150px; margin-left:25px;" class="dropBox" name="thelist3" id="mixture"  onChange="oilChange();" >
      </select>
      <br />
      <br />
  
      <p class="varTitle" id="agent" > </p>
      <select style="width:150px; margin-left:25px;" class="dropBox" name="thelist3" id="agentinput"  onChange="emulsification();">
      </select>
      <br />
      <br />
      <p class="varTitle" id="oiltxt" > </p>
      <input type="range" class="rangeSlider" min="5" max="20" id="oilLevel" step="5"  value="5" data-initmass="5" onchange="oilLevelChange();">
      <div class="rangeVals"> <span class="minrange" id="minOil">5</span><span class="maxrange" id="maxOil" style="padding-left:10px; ">20</span>
        <div class="clear"></div>
      </div><br />
      <p class="varTitle" id="watertxt" > </p>
      <input type="range" class="rangeSlider" min="50" max="90" id="waterLevel"  step="20" value="50" data-initmass="50" onchange="waterLevelChange();">
      <div class="rangeVals"> <span class="minrange" id="minW">50</span><span class="maxrange" id="maxW" style="padding-left:10px; ">90</span>
        <div class="clear"></div>
      </div><br />

      <p class="varTitle" id="drops" > </p>
      <input type="range" class="rangeSlider" min="10" max="20" id="noDrops" step="5" value="5" data-initmass="10" onchange="noOfdrops();">
      <div class="rangeVals"> <span class="minrange" id="minDrps">10</span><span class="maxrange" id="maxDrps" style="padding-left:10px; ">20</span>
        <div class="clear"></div>
      </div>
      
     <br />
    
      <p align="center">
        <input type="button" class="subButton" id="reset" name="reset" value="Reset" onclick="window.location.reload();"  />
      </p>
      <br />
    </div>
  </li>
</ul>
