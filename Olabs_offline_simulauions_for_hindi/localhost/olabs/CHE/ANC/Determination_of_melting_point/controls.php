
<ul>
		<div class="varBox">
				<p class="varTitle" id="selCmpndLbl" ></p>
				<select style="width:126px; margin-left:29px; " class="dropBox" name="thelist3" id="theinput"   >
		</select>
				<br />
				<br />
				<p align="center">
						<input type="button" style="width:126px"  class="subButton" id="start"  value="Start "  disabled="disabled"  onclick="start_Exp()" />
				</p>
				<br />
				<P class="varTitle"><span id="temperature1"></span>
						<input align="right" class="inptTxtArea"  type="text"   id="t1_txt" name="firstname"  disabled="disabled" maxlength="3"  onkeyup="avgDisplay()" onkeypress='validate(event)' />
						&deg;C</P>
				<P class="varTitle"><span id="temperature2"></span>
						<input align="right" class="inptTxtArea"  type="text" id="t2_txt" name="firstname"  maxlength="3" disabled="disabled" onkeyup="avgDisplay()"  onkeypress='validate(event)' />
						&deg;C</P>
				<P class="varTitle"><span id="meltLabl"></span>
						<input align="right" class="inptTxtArea"  type="text" id="total_txt" name="firstname"  maxlength="3" disabled="disabled" onkeypress='validate(event)' />
						&deg;C</P>
				<p class="resltStyle" id="cmpndLbl"></p>
				<br />
				<p class="varTitle" id="selectLbl" style="padding-top:10px;" ></p>
				<select style="width:126px; margin-left:29px; " class="dropBox" name="thelist3" id="actualCom" disabled="disabled"  onchange="actualCompound()"  >
				</select>
				<br />
				<p  class="resltTxtStyle" id="msgTxt" style="text-align:center"></p>
				<p class="varTitle" style="margin-left:22px; padding-bottom:5px; padding-top:10px;" >
						<input type="checkbox" id="show" name="showgraph"  disabled="disabled" onchange="showchart_FN()"/>
						<span id="chartLbl">Show chart</span></p>
				<p align="center">
						<input type="button"  style="width:126px" class="subButton" id="reset"  value="Reset "    onclick="window.location.reload();" />
				</p>
		</div>
		</li>
</ul>
