<ul>
		<li>
		<div class="varBox">
		<p class="varTitle" id="unknownElment" > </p>
				<select style="width:150px; margin-left:25px; " class="dropBox"  id="elementCombo"  onChange="ElementChange()">
				</select>
		<p class="varTitle" id="test" > </p>
				<select style="width:150px; margin-left:25px;" class="dropBox"  id="testCombo"  disabled="disabled"  onChange="testChange()">
				</select>
				<br /><br />
		<p class="varTitle" id="method" > </p>
				<select style="width:150px; margin-left:25px;" class="dropBox"  id="methodCombo"  onChange="propertyChange()">
				</select>
				<br /><br />
				<p class="resltTxtStyle" id="result" > </p><br />

				<p class="varTitle" id="element" > </p>
				<select style="width:100px; margin-left:46px;" class="dropBox"  id="resultCombo" disabled="disabled" onChange="actualElement()">
				</select>
				<input type="button" class="subButton" name="reset" value="Reset" id="reset" onClick="resetFN()" >
				<img id="resultIcon"  src="<?php getSimPath(); ?>images/tickicon.png"/>
				</div>
		</li>
</ul>
