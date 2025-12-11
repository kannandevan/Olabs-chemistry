<ul style="right: -17px;" tabindex="0" class="overthrow content description">
    <li>
        <div class="varBox">
            <div id="selectMethod">
                <h5>Select the method</h5>
                <select id="methodselector" name="methodselector">
                    <option value='conc' class="dropdown-item active" href="#" id="conc">Effect of Concentration
                    </option>
                    <option value='temper' class="dropdown-item" href="#" id="temper">Effect of Temperature</option>
                </select>
            </div>
            <br><br>
            <div>
                <table id="tableConc">
                    <tr>
                        <th>Sl.No</th>
                        <th>Vol of HCl added (mL)</th>
                        <th>Time required for the mark ‘X’ to disappear (s)</th>
                    </tr>
                    <tr align="center" id="conc1">
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <p id="resConc1">130</p>
                        </td>
                    </tr>
                    <tr align="center" id="conc2">
                        <td>2</td>
                        <td>2</td>
                        <td>
                            <p id="resConc2">123</p>
                        </td>
                    </tr>
                    <tr align="center" id="conc3">
                        <td>3</td>
                        <td>4</td>
                        <td>
                            <p id="resConc3">110</p>
                        </td>
                    </tr>
                    <tr align="center" id="conc4">
                        <td>4</td>
                        <td>8</td>
                        <td>
                            <p id="resConc4">84</p>
                        </td>
                    </tr>
                    <tr align="center" id="conc5">
                        <td>5</td>
                        <td>16</td>
                        <td>
                            <p id="resConc5">30</p>
                        </td>
                    </tr>
                </table>

                <table id="tableTemp">
                    <tr>
                        <th>Sl.No</th>
                        <th>Temperature of the reaction mixture (&#176;C)</p>
                        </th>
                        <th>Time required for the mark ‘X’ to disappear (s)</th>
                    </tr>
                    <tr align="center" id="temp1">
                        <td>1</td>
                        <td>27</td>
                        <td>
                            <p id="resTemp1">150</p>
                        </td>
                    </tr>
                    <tr align="center" id="temp2">
                        <td>2</td>
                        <td>37</td>
                        <td>
                            <p id="resTemp2">127</p>
                        </td>
                    </tr>
                    <tr align="center" id="temp3">
                        <td>3</td>
                        <td>47</td>
                        <td>
                            <p id="resTemp3">105</p>
                        </td>
                    </tr>
                    <tr align="center" id="temp4">
                        <td>4</td>
                        <td>57</td>
                        <td>
                            <p id="resTemp4">84</p>
                        </td>
                    </tr>
                    <tr align="center" id="temp5">
                        <td>5</td>
                        <td>67</td>
                        <td>
                            <p id="resTemp5">61</p>
                        </td>
                    </tr>
                </table>
            </div>
            <br><br>
            <div id="graphControl">
                <p align="center"><input type="button" class="subButton" name="showGraph" value="Show Graph"
                        id="showGraph" /></p>
                <p align="center"><input type="button" class="subButton" name="plotGraph" value="Plot Graph"
                        id="plotGraph" /></p>
                <p align="center"><input type="button" class="subButton" onclick="window.location.reload();"
                        name="reset" value="Reset" id="reset" /></p>
            </div>
            <div id="graphControlTemp">
                <p align="center"><input type="button" class="subButton" name="showGraphTemp" value="Show Graph"
                        id="showGraphTemp" /></p>
                <p align="center"><input type="button" class="subButton" name="plotGraphTemp" value="Plot Graph"
                        id="plotGraphTemp" /></p>
                <p align="center"><input type="button" class="subButton" onclick="window.location.reload();"
                        name="resetTemp" value="Reset" id="resetTemp" /></p>
                <br>
            </div>
        </div>
    </li>
</ul>