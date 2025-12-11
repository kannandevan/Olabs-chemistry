<ul style="right:0px;"  tabindex="0" class="overthrow content description">
	<li>
		<div class="varBox" style="margin-left: 2px;"> 

<form name="lister"  method="post">
<p class="varTitle" ><span  id="selectCompound"></span>
<select style="width:126px; margin-left:34px; "class="dropBox" name="thelist0" id="thelist0" onchange="selectUnknown_FN(this)" >
<option value="select"></option>
</select><!--<span id="selopt">Select345345</span>-->
</p></br>
<p align="center"><input type="button" style="width:126px;margin-left:10px;" class="subButton" name="Start" value="Start" id="start" disabled="disabled" onClick="start_FN()"></p>
</br>
<p class="varTitle" ><span id="temperature1"></span><input class="wideTxtArea" style="margin-left:34px;"type="text" id="temp1" name="temp1" maxlength="3"  onkeyup="avgDisplay()" onkeypress='validate(event)'  disabled="disabled"><span id="degree">&nbsp;&deg;C</span></p>
<br/>
<p class="varTitle"><span id="temperature2"><br/></span><input class="wideTxtArea" type="text" style="margin-left:35px;" id="temp2" name="temp2" maxlength="3"  onkeyup="avgDisplay()" onkeypress='validate(event)'   disabled="disabled"><span id="degree">&nbsp;&deg;C</span></p><br/>
<p class="varTitle" ><span id="bolilngLbl"></span><input class="wideTxtArea"  type="text" style="margin-left:34px;" id="boilptCalc" name="boilptCalc" maxlength="3" onchange="enterT_FN(this)" disabled="disabled"><span id="degree">&nbsp;&deg;C</span></p>

<!--(t<sub>1</sub>+ t<sub>2</sub>)/2=-->
<p class="varTitle"></p><U><h1><span id="resultLbl">Result</span></h1></U>
<p class="varTitle"><span id="compo2Lbl"></span>
<select style="width:126px; margin-left:32px; " class="dropBox" name="thelist1" id="thelist1"  disabled="disabled"onChange="selectKnown_FN(this)">
<option value="select">Select</option>
</select>
</p>
<!--<p align="center"><input type="button" class="subButton" name="submit" value="Submit" id="submit" onClick="submit_FN()"></p>-->
<p class="resltTxtStyle"  id="label" style="margin-left:26px;"></p>
<p class="varTitle" style="margin-left:27px;"><input type="checkbox" name="showORhide" id="showORhide" value="showORhide" onchange="showChart(this.checked)" disabled="disabled"/><span id="showORhideSpan" style="font-size:13px;"></span></p><br/>
<!--Loading reset button-->
<p align="left"><input type="button" style="width:126px; margin-left:32px;" class="subButton" name="reset" value="Reset" id="reset" onClick="window.location.reload()"></p>
</form>



</div>
</li>
</ul>