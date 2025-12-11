
<ul>
		<li>
				<div class="varBox">
						<p class="varTitle"><span id="selectSol"></span>
								<select class="form-control" name="soln" id="soln" onchange="solnSelection(this.id);">
								</select>
						</p>
						<br/>
						<p class="varTitle" ><span id="selectTube"></span>
								<select class="form-control" name="tube" id="tube" onchange="controlTubeselection(this.id);">
								</select>
						</p>
						<img  id="eqnImg1"  src="<?php getSimPath(); ?>images/equation1.png"/>
						<img  id="eqnImg2"  src="<?php getSimPath(); ?>images/K3.png"/> <br/>
						<br/>
						<br />
						<p align="center">
								<input type="button" class="form-control" id="reset" name="reset" value="Reset" onclick="window.location.reload()" />
						</p>
				</div>
		</li>
</ul>
