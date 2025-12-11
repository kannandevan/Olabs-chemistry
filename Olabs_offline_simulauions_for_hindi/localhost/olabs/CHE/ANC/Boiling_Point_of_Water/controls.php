
<ul>
	<li>
		<div class="varBox"> <br />
			<p class="varTitle" id="testCaseTxt"></p>
				<select class="dropBox" name="testCase" id="testCase"  onChange="changeDropDown()"  >
				</select>
			<p class="varTitle" id="samplesTxt" ></p>
				<select class="dropBox" name="samples" id="samples"  onChange="selectSample()"  >
                 </select>
			<br/>
				<input type="checkbox" id="thermoZoom" name="showgraph" value="Showgraph" onclick="zoomArea_FN()" style="margin:0px 0px 0px 12px;"/><span class="varTitle" style="padding:0px 0px 3px 2px; margin-bottom:20px;" id="zoomTxt"></span>
                
				<p style="margin-top:27px;"><span class="varTitle" id="tempTxt" style="padding:10px 0px 0px 12px;"></span><span id="temperature" style="font-weight:bold;"> </span></p>
				
				
				<p align="center" style="margin-top:34px;">
						<input type="button" class="subButton" id="reset" name="reset" onclick="resetFN()"/>
				</p>
			
		</div>
		</li>
	
</ul>
