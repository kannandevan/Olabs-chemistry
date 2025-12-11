<ul style="right: -17px;" tabindex="0" class="overthrow content description" id="controlDiv">
  <li>
    <div id="dropdown1">
      <h5 >Select BPM</h5>
        <select id="bpm" name="bpm" onchange="startStatus()"> 
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" class="FourValues" data-bs-toggle="dropdown" aria-expanded="false"></a>
          <option value='30' class="dropdown-item active" href="#" id="first">30</option>
          <option value='40' class="dropdown-item" href="#" id="second">40</option>
          <option value='50' class="dropdown-item" href="#" id="third">50</option>
          <option value='60' class="dropdown-item" href="#" id="fourth">60</option>
        </select>
    </div>
    
    <div id="dropdown2">
      <h4 >Select the time interval</h4>
        <select id="time" name="time" onchange="lightStatus()"> 
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" class="TimeValues" data-bs-toggle="dropdown" aria-expanded="false"></a>
          <option value='30' class="dropdown-item active" href="#" id="time1">30</option>
          <option value='40' class="dropdown-item" href="#" id="time2">40</option>
          <option value='50' class="dropdown-item" href="#" id="time3">50</option>
          <option value='60' class="dropdown-item" href="#" id="time4">60</option>
        </select>
    </div>

    <p align="center"><input type="button" class="subButton" id="start" value="Start"/></p>
    <p align="center"><input type="button" class="subButton" id="scale" value="Show Scale"/></p>
    <p align="center"><input type="button" class="subButton" id="start2" value="Start"/></p>
    <p align="center"><input type="button" class="subButton" id="scale2" value="Show Scale"/></p>
    <p align="center"><input type="button" class="subButton" id="reset" value="Reset"/></p>  
  </li>	
</ul>
