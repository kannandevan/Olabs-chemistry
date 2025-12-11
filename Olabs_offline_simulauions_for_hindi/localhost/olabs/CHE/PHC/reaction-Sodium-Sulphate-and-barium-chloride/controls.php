
<ul><li>
		
    <div class="varBox">   
    	<p class="varTitle_1" id="instrTxt"></p><br/>
        
		<ol class="instructions" id="instrList">
		

        </ol>
      	<br/>


      
     	<p align="center"><input type="button" class="subButton" id="reset" name="reset" value="Reset" onclick="window.location.reload()" /></p>
      
       
	</div>

</li></ul>

<script type="text/javascript">
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
	  
    if(inputs[i].type == 'range') {
		inputs[i].addEventListener('click', function() {
        this.focus(); 
      });
    }
  }
</script>

