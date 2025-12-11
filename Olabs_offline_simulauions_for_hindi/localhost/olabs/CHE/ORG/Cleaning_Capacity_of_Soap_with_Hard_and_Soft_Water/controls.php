<form name="lister"  method="post">
<ul>
	<li>
    	<div class="varBox">
             <p class="varTitle" ><h1 id="procedureSelect" ></h1><br />
             <select class="dropBox" name="thelist"  disabled="" id="thelist"  style=" height:25px;" onChange="selectProcedure()"></select>
            </p>
            <br/>
            
                <br /><br /><u><h1 id="InstrId"></h1></u><!--Loading instructions-->
                <br/>
                <p class="varTitle"> <span id="msgTxt"></span> </p>
         
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br />
            <!--Loading reset button-->
                <p align="center"><input type="button" class="subButton" id="reset" name="reset" onclick="resetFN();window.location.reload();"  /> </p> 

      </div>
    </li>
</ul>




