<ul style="right:-2px;"  tabindex="0" class="overthrow content description">
	<li>
		<div class="varBox">
			<p class="varTitle" id="soln"> </p>
	<select class="dropBox" name="thelist3" id="mixture"  onChange="mixtureChange()" style="  width: 175px;
  margin-left: 6px;" ></select>
			<p class="varTitle" id="solvntSelect" > </p>
			<select class="dropBox" name="thelist3" id="theinput"  onChange="propertyChange()" style="  width: 175px; margin-left: 6px;"></select>
			<p class="varTitle1" id="checkboxId"  align="center" style="  margin-top: 9px;">
				<input type="checkbox" id="show" name="showscale" value="Showscale"  onchange="showscale_FN()" disabled="disabled"/>
				<span id="shwtxt"></span> 
			</p>
			<p class="contrlStyle" id="reslt" style="margin-top: 12px;"></p>

			<div  id="inputbx" style="margin-top: 3px; margin-left: 6px;  "> 

				<div id="section_One" style="  width: 176px;">
					<p id="txt1" class="varTitle1"></p> 
					<p  style="  margin-left: 66px;  margin-top: 7px;  margin-bottom: -11px; padding-top: 4px;" >=</p>
					<input type="text" id="solvnt_txt" name="firstname"  style="width: 27px;margin-top: -17px; margin-left: 87px;"  maxlength="4" disabled="disabled" />
					<img id="resltImg1" style="  margin-top: -4px;" />
				</div>	

				<div id="section_Two" style="  width: 176px;">

					<p id="txt2" class="varTitle1" style="line-height: 21px;"></p> 
					<p style="  margin-left: 66px;  margin-top: 6px;  margin-bottom: -11px;" >=</p>
					<input type="text" id="bInk_txt" name="lastname"  maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;"  />
					<img id="resltImg2" /> 
				</div>	

				<div id="section_Three" style="  width: 176px;">
						<p id="txt3" class="varTitle1"  style="line-height: 21px;"></p> 
						<p class="varSpace"  style=" margin-left: 66px;  margin-top: 6px;  margin-bottom: -11px;" >=</p>
						<input type="text" id="rInk_txt" name="lastname"  maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;"  />
						<img id="resltImg3" />
				</div>		

				<div id="section_Four" style="  width: 176px;">
						<p id="txt4" class="varTitle1"  style="line-height: 21px;"></p>	
						<p class="varSpace" class="varSpace"  style=" margin-left: 66px;  margin-top: 6px;  margin-bottom: -11px;"  >=</p>
						<input type="text" id="b_txt" name="firstname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;"  />
						<img id="resltImg4" />
				</div>	

				<div id="section_Five" style="  width: 176px;">
						<p id="txt5" class="varTitle1"  style="line-height: 21px;"></p>
						<p class="varSpace" style=" margin-left: 66px;  margin-top: 6px;  margin-bottom: -11px;"  >=</p>

						<input type="text" id="r_txt" name="lastname"  maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;" />
						<img id="resltImg5" /> 
				</div>


			</div>


			<!-- second -->

			<div class="varTitle1" id="inputbx1" style=" margin-top: 3px; margin-left: 6px; display:none;">

				<div id="section_Six" style="  width: 176px; ">
					<p id="solvnt" class="varTitle1" style="line-height: 21px;"></p>	
					<p style="  margin-left: 66px;  margin-top: -16px;  margin-bottom: -11px;" >=</p>
					<input type="text" id="solvnt_txt1" name="firstname" maxlength="4" disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;" />
					<img id="resltImg14" /> 
				</div>

				<div id="section_Seven" style="  width: 176px; ">
					<p id="txt6" class="varTitle1" style="line-height: 21px;"></p>
					<p style="  margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 
					<input type="text" id="dGrInk_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg6" /> 
				</div>

				<div id="section_Eight" style="  width: 176px; ">
					<p id="txt7" class="varTitle1" style="line-height: 21px;"></p>
					<p style="margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 

					<input type="text" id="lGrInk_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg7" /> 
				</div>

				<div id="section_Nine" style="  width: 176px; ">
					<p id="txt8" class="varTitle1" style="line-height: 21px;"></p>
					<p style="margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 
					
					<input type="text" id="yInk_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg8" /> 
				</div>

				<div id="section_Ten" style="  width: 176px; ">
					<p id="txt9" class="varTitle1" style="line-height: 21px;"></p>
					<p style="  margin-left: 66px;  margin-top: -14px;  margin-bottom: -11px;">=</p> 
					
					<input type="text" id="oInk_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg9" /> 
				</div>

				<div id="section_Eleven" style="  width: 176px; ">
					<p id="txt10" class="varTitle1" style="line-height: 21px;"></p>
					<p style="margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 
					
					<input type="text" id="dGr_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg10" /> 
				</div>

				<div id="section_Twelve" style="  width: 176px; ">
					<p id="txt11" class="varTitle1" style="line-height: 21px;"></p>
					<p style="margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 
					
					<input type="text" id="lGr_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg11" /> 
				</div>

				<div id="section_Thirteen" style="  width: 176px; ">
					<p id="txt12" class="varTitle1" style="line-height: 21px;"></p>
					<p style="margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 
					
					<input type="text" id="y_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg12" /> 
				</div>

				<div id="section_Fourteen" style="  width: 176px; ">
					<p id="txt13" class="varTitle1" style="line-height: 21px;"></p>
					<p style="margin-left: 66px;  margin-top: 5px;  margin-bottom: -11px;">=</p> 
					
					<input type="text" id="o_txt" name="lastname" maxlength="4"  disabled="disabled" style="width: 27px;margin-top: -17px; margin-left: 87px;">
					<img id="resltImg13" /> 
				</div>
				

			</div>
			
			<!-- Reset -->
			<div align="center" style="margin-top:13px ">
				<input type="button" class="subButton" id="reset" name="reset" value="Reset" onclick="window.location.reload();"  />
			</div>
						
				</div>
		</li>
</ul>
