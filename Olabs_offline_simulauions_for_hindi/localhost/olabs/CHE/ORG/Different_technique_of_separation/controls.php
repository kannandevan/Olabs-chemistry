
<ul style="right:-2px;"  tabindex="0" class="overthrow content description">
		<li>
				<div class="varBox">
						<p class="varTitle" id="tech" > </p>
						<select style="width:150px; margin-left:25px;" class="dropBox" name="thelist3" id="theinput"  onChange="propertyChange()">
						</select>
						<br />
						<br />
						<p class="varTitle" id="soln" > </p>
						<select style="width:150px; margin-left:25px;" class="dropBox" name="thelist3" id="mixture"  onChange="mixtureChange()" >
						</select>
						<br />
						<br />
						<!--<p class="varTitle1" id="checkboxId2"  align="center">
						<input type="checkbox" id="showmsg" name="showtooltip" value="Showtooltip"  onchange="showmsg_FN()" />
						<span id="shwtooltxt"></span> </p>
				<br />-->
						<p class="varTitle1" id="checkboxId"  align="center">
								<input type="checkbox" id="show" name="showscale" value="Showscale"  onchange="showscale_FN()" disabled="disabled"/>
								<span id="shwtxt"></span> </p>
						<br />
						<p class="contrlStyle" id="reslt"></p>
						<p class="varTitle1" id="inputbx" style="margin-left:3px;"   ><span id="txt1" style="width:50px;"></span> <span class="varSpace" >=</span>
								<input type="text" id="solvnt_txt" name="firstname"  class="restlStyle"  maxlength="4" disabled="disabled" >
								<img id="resltImg1" /> <br>
								<br />
								<span id="txt2"></span> <span class="varSpace" >=</span>
								<input type="text" id="bInk_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg2" /> <br />
								<br />
								<span id="txt3"></span> <span class="varSpace" >=</span>
								<input type="text" id="rInk_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg3" /> <br />
								<br />
								<span id="txt4"></span> <br />
								<span class="varSpace" >=</span>
								<input type="text" id="b_txt" name="firstname" class="restlStyle"  maxlength="4"  disabled="disabled">
								<img id="resltImg4" /> <br>
								<br />
								<span id="txt5"></span> <br />
								<span class="varSpace" >=</span>
								<input type="text" id="r_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg5" /> </p>
						<p class="varTitle1" id="inputbx1" style="margin-left:3px; display:none; width:184px;"  > <span id="solvnt"></span> <span style=" margin: 3px 0 3px 100px;" >=</span>
								<input type="text" id="solvnt_txt1" name="firstname"  class="restlStyle"  maxlength="4" disabled="disabled" >
								<img id="resltImg14" /> <br>
								<br />
								<span id="txt6"></span> <span style=" margin: 3px 0 3px 20px;" >=</span>
								<input type="text" id="dGrInk_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg6" /> <br />
								<br />
								<span id="txt7"></span> <span style=" margin: 3px 0 3px 21px;" >=</span>
								<input type="text" id="lGrInk_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg7" /> <br />
								<br />
								<span id="txt8"></span> <span style=" margin: 3px 0 3px 54px;" >=</span>
								<input type="text" id="yInk_txt" name="firstname" class="restlStyle"  maxlength="4"  disabled="disabled">
								<img id="resltImg8" /> <br>
								<br />
								<span id="txt9"></span> <span style=" margin: 3px 0 3px 49px;" >=</span>
								<input type="text" id="oInk_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg9" /> <br />
								<br />
								<span id="txt10"></span><br />
								<span style=" margin: 3px 0 3px 100px;" >=</span>
								<input type="text" id="dGr_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg10" /> <br />
								<br />
								<span id="txt11"></span><br />
								<span style=" margin: 3px 0 3px 100px;" >=</span>
								<input type="text" id="lGr_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg11" /> <br />
								<br />
								<span id="txt12"></span> <br />
								<span style=" margin: 3px 0 3px 100px;" >=</span>
								<input type="text" id="y_txt" name="firstname" class="restlStyle"  maxlength="4"  disabled="disabled">
								<img id="resltImg12" /> <br>
								<br />
								<span id="txt13"></span> <br />
								<span style=" margin: 3px 0 3px 100px;" >=</span>
								<input type="text" id="o_txt" name="lastname" class="restlStyle" maxlength="4"  disabled="disabled">
								<img id="resltImg13" /> </p>
						<p class="varTitle1" align="center" id="resltMsg1" style="visibility:hidden;"></p>
						<p class="varTitle1" align="center" id="resltMsg2" style="visibility:hidden;"></p>
						<p align="center">
								<input type="button" class="subButton" id="start"  value="Start"  onclick="buttonClick();"  disabled="disabled" style="  display:none;" />
						</p>
						<br />
						<p align="center">
								<input type="button" class="subButton" id="reset" name="reset" value="Reset" onclick="resetFN()"  />
						</p>
						<br />
				</div>
		</li>
</ul>
