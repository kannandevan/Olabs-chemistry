<ul style="right: -17px;" tabindex="0" class="overthrow content description">
  <li>
    <div class="varBox" style="height:265px;">
    <div id="select_soap" data-translate>Select the soap</div><br>
	<div id="select_soapsoln" data-translate>Select the solution</div>
      <input type="image" id="soap1" src="<?php getSimpath(); ?>images/soap1.svg"/>
      <input type="image" id="soap2" src="<?php getSimpath(); ?>images/soap2.svg"/>
        
          <label id="soap1label" data-translate>Soap A</label>
          <label id="soap2label" data-translate>Soap B</label>  
        
      
      <input type="image" id="soap3" src="<?php getSimpath(); ?>images/soap3.svg"/>
      <input type="image" id="soap4" src="<?php getSimpath(); ?>images/soap4.svg"/>
	  
      <br>
      
          <label id="soap3label" data-translate>Soap C</label>
          <label id="soap4label" data-translate>Soap D</label>
	<table id="table1">
		<tr>
			<td class="tabled" ><input type="image" id="solution1" src="<?php getSimpath(); ?>images/beaker.png"/> </td>
			<td class="tabled" ><input type="image" id="solution2" src="<?php getSimpath(); ?>images/beaker.png"/> </td>
		</tr>
		<tr>
			<td><span id="solution1" class="tabletxt" data-translate>Solution A</span> </td>
			<td><span id="solution2" class="tabletxt" data-translate>Solution B</span> </td>
		</tr>
		<tr>
			<td class="tabled" ><input type="image" id="solution3" src="<?php getSimpath(); ?>images/beaker.png"/> </td>
			<td class="tabled" ><input type="image" id="solution4" src="<?php getSimpath(); ?>images/beaker.png"/> </td>
		</tr>
		<tr>
			<td><span id="solution3" class="tabletxt" data-translate>Solution C</span> </td>
			<td><span id="solution4" class="tabletxt" data-translate>Solution D</span> </td>
		</tr>
		</tr>
		
	</table>
    </div>
	 <p align="center">
        <input type="button" data-translate-value value="Reset" id="reset" class="subButton">
	</p>
  </li>
</ul>