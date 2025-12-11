<ul style="right: -17px;" tabindex="0" class="overthrow content description">    
    <li> 
        <div class="varBox"> 
        	<!---Temperature slider---->
            <span class="varTitle" id="Ins01" style="padding-bottom:10px;"></span>
            <span id="rightVal" class="varTitle"></span> 
            <input  style="margin: 4px 0px 0px 10px;" type="range" class="rangeSlider" min="10" max="100" id="Temperature" name="Temperature" value="10" step="5" onmousemove="changeRightWeight('Temperature',this.value)" oninput="changeRightWeight('Temperature',this.value)" /><br />
            <span id="rightminvals" class="varTitle"></span>
            <span id="rightmaxvals" class="varTitle"></span><br /><br />            
            <!---anode---->
            <p class="varTitle" id="title2" style="padding:0px 0px 3px 11px; font-weight:bold;" ></p>
            <p class="varTitle" id="Ins2" style="padding:4px 0px 8px 16px;"></p>
             <!---dropdown box2---->
            <select class="form-control" id="Combo2" style="width:150px; margin:0px 0px 3px 17px;"></select><br /><br />
              <!---concentration slider2---->
            <span class="varTitle" id="slidertxt1" style="padding:0px 0px 0px 16px;"></span>
            <span id="sliderspan1" class="varTitle"></span><br />
            <input style="margin:6px 0px 0px 10px;" type="range" class="rangeSlider" min="0.01" max="0.1" id="Concentration2" name="Concentration1" value="0.01" step="0.01" onmousemove="changeRightWeight('Concentration2',this.value)" oninput="changeRightWeight('Concentration2',this.value)" /><br />
            <span id="rightminvals2" class="varTitle" style="padding-left: 15px;"></span>
            <span id="rightmaxvals2" class="varTitle" style="padding-right: 27px;"></span><br /><br />
            <!---cathode---->
            <p class="varTitle" id="title1" style="padding-top:0px; font-weight:bold;"></p>
            <p class="varTitle" id="Ins1" style="padding: 6px 0px 2px 16px;"></p> 
            <!---dropdown box1---->
            <select class="form-control" id="Combo1" style="width:150px; margin:5px 0px 11px 16px;"></select>
            <br /> 
            <!---concentration slider---->
            <span class="varTitle" id="slidertxt" style="padding:0px 0px 0px 16px;"></span>
            <span id="sliderspan" class="varTitle"></span><br />
            <input style="margin:6px 0px 0px 10px;" type="range" class="rangeSlider" min="0.01" max="0.1" id="Concentration1" name="Concentration1" value="0.01" step="0.01" onmousemove="changeRightWeight('Concentration1',this.value)" oninput="changeRightWeight('Concentration1',this.value)"/><br />
            <span id="rightminvals1" class="varTitle" style="padding-left: 15px;"></span>
            <span id="rightmaxvals1" class="varTitle" style="padding-right: 27px;"></span><br /><br />
            
            
            
            
              <!---Reaction and equations---->
            <p class="varTitle" id="title3" style="padding-top:0px; font-weight:bold;"></p>
             <!---cathode---->
            <p class="varTitle" id="Ins3" style="padding: 6px 0px 3px 16px;"></p>
            <p class="varTitle" id="eq1" style="padding: 0px 0px 2px 19px; font-size:13px;"></p>
            <!---anode---->
            <p class="varTitle" id="Ins4" style="padding: 6px 0px 3px 16px;"></p>
            <p class="varTitle" id="eq2" style="padding: 0px 0px 2px 19px; font-size:13px;"></p>
              <!---overall---->
            <p class="varTitle" id="Ins5" style="padding: 6px 0px 3px 16px;"></p>
            <p class="varTitle" id="eq3" style="padding: 0px 0px 2px 19px; font-size:13px;"></p><br />
            <!---Emf calculation---->
            <p class="varTitle" id="title4" style="padding-top:0px; font-weight:bold;"></p>
            <p class="varTitle" id="eq4" style="padding: 5px 0px 2px 19px; font-size:13px;"></p><br />
             <!---Reset---->
            <br /><p align="center"><input type="button" class="subButton" id="reload"/></p>
        </div>
    </li>
</ul>


