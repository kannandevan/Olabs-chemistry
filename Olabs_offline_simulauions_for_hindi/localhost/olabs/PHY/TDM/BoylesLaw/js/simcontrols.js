var helpMessage,scaleLabel;
/* Document ready function */
$(document).ready(function(){
	/* Variable declaration */
	var rotateSca=0;
	/* Prevent the selection */
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	/* Language translating object*/
	/* Template labels */
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	/* Experiment heading */
	$('#expName').html(gt.gettext("Boyle's Law"));
	/* Show scale button values */
	scaleLabel = [gt.gettext('Show scale'),gt.gettext('Hide scale')];
	/* Help message of rotate scale */
	var help_Rotate=gt.gettext('Click on the rotate icon to rotate the scale.');	
	/* Help messages  */
	helpMessage=[gt.gettext('Drag to rotate the quill tube.'),gt.gettext('Drag the scale to measure the length.'),gt.gettext('Click on the rotate icon to rotate the scale.'),gt.gettext('Click on the show scale button to show the scale.')];
	/*Add labels */
	$("#mercuryLengthLbl").html(gt.gettext("Mercury column length(cm):"));
	$("#airLengthLbl").html(gt.gettext("Air column length(cm):"));
	$("#scaleBtn").attr('value',scaleLabel[0]);
	$("#ResetBtn").attr('value',gt.gettext('Reset'));
	$("#atmosphericPressure").html(gt.gettext('Atmospheric pressure(H) = 76 cm of mercury'));
	$("#aircolumnLengthLabel").html(gt.gettext('Air column length: '));
	$("#h1_LineLabel").html(gt.gettext('Height from the table to the bottom of the mercury, h1: '));
	$("#h2_LineLabel").html(gt.gettext('Height from the table to the top of the mercury, h2: '));
	var s_xprev,s_yprev,target,o_x, o_y, h_x, h_y, last_angle=0,startFlag=false, degree=0,angle=0;
	var target_hanger,o_x2, o_y2, last_angle2=0, degree2=0;
	var y=5,l=5,l2=192,count1=0,count2=0,mercuryLineLeft=192,mercuryLineWidth=27,mercuryLength=[5],airLength=[5];
	/* Quill tube drag to rotate */
	$('#quillTubeDiv').draggable({	
		opacity: 0.01,
		helper: 'clone',
		drag: function (event, ui) {
			$('#h1_Line,#h2_Line').css({display:'none'});			
			$('#airLengthslider').attr("disabled", "disabled");
			$('#mercuryLengthslider').attr("disabled", "disabled");  
			if(startFlag==false)
			{
				h_x =event.pageX,
				h_y = event.pageY;// clicked point
				startFlag=true;
			}	   
			var s_x =event.pageX,
			s_y = event.pageY;//client point.
			target = $(event.target).closest('#quillTubeDiv');
			if (!target.data("origin")) target.data("origin", {
				left: target.offset().left,
				top: target.offset().top
			});
			o_x = target.data("origin").left+ target.width()/2;
			o_y = target.data("origin").top+target.height()/2; // origin point			
			last_angle = target.data("last_angle") || 0;		//angle for rotation
			var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
			s_rad -= Math.atan2((h_y - o_y), h_x - o_x); // handle to origin
			s_rad += last_angle; // relative to the last one		
			degree = s_rad * (360 / (2 * Math.PI));
			if(degree>360){
				degree=degree-360;
			}
			if(degree >= -180){
				angle=degree+360;
			}else{
				angle=degree;
			}
			if(angle>=360){
				angle=angle-360;
			}
			angle=angle.toFixed(0);
			var rotateCSS1 = 'rotate(' +degree + 'deg)';			
			$('#quillTubeDiv,#hanger').css({
				'-moz-transform-origin':'50% 50%',
				'-webkit-transform-origin': '50% 50%',
				'transform-origin':'50% 50%',
				'-ms-transform-origin':'50% 50%',
				'-o-transform-origin':'50% 50%',
				'transform': rotateCSS1,
				'-moz-transform': rotateCSS1,
				'-webkit-transform':rotateCSS1,	
				'-ms-transform': rotateCSS1,
				'-o-transform':rotateCSS1
			});			
			s_xprev=s_x;
			s_yprev=s_y;
			setCalculation();

		},//end if
		stop:function(event,ui)
		{
			var s_x = s_xprev,
			s_y =s_yprev;
			var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
			s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
			s_rad += last_angle;
			target.data("last_angle", s_rad);//store the angle for future rotation
			startFlag=false;
		}
	})//end drag
	function setCalculation(){
		var H=76; 
		var K=H*l;
		var sinAngle = Math.sin(angle*(Math.PI/180));
		var l1=K/(H+(y*sinAngle));
		var h=sinAngle*y;
		var h11=sinAngle*(25-l);
		var h1=30-h11;
		var h2=h1+h;
		var K1=((H+h)*l1).toFixed(0);
		l2=mercuryLineLeft-(l1-l);
		$('#mercuryLine').css({left:l2+'px' });
		$('#h1_Value').html(h2.toFixed(2)+" cm");
		$('#h2_Value').html(h1.toFixed(2)+" cm");
		$('#aircolumnLength').css({display:'block'});
		$('#l_Value').html(l1.toFixed(2)+" cm");
	}
	//Drag the scale 
	$('#scaleDiv').draggable({
		start:function(event,ui){
			$('#scaleDiv').css({zIndex:1});
		},
		stop:function(event,ui){
			if(this.offsetTop >=-230 && this.offsetTop <= 280 && this.offsetLeft>=-30 &&this.offsetLeft<=548){	
				if(this.offsetTop >=25 && this.offsetTop <= 280 && this.offsetLeft>=80 &&this.offsetLeft<=369){	
					$('#displayMeasurements').css({display:'block'});
				}else{
					$('#displayMeasurements').css({display:'none'});	
				}
			}else{
				$('#scaleDiv').css({top:'-8px',left:'404px'});
			}
			
		}
	});
	//function for changing mercury length slider
	var $mercuryLengthVal = $('#mercuryLengthVal'),
    $mercuryLengthslider = $('#mercuryLengthslider').on('change', function() {
    	y=$mercuryLengthslider.val();
        $mercuryLengthVal.html(y);
		y=parseInt(y);
		mercuryLineWidth=(y*5)+2;
		mercuryLength.push(y);
		var diff=mercuryLength[mercuryLength.length-1]-mercuryLength[mercuryLength.length-2]
        mercuryLineLeft= mercuryLineLeft-(5*diff);
		$('#mercuryLine').css({left:mercuryLineLeft+'px',width:mercuryLineWidth+'px' });        
    });
    //function for changing air length slider
    var $airLengthVal = $('#airLengthVal'),
    $airLengthslider = $('#airLengthslider').on('change', function() {
    	l=$airLengthslider.val();
        $airLengthVal.html(l); 
		l=parseInt(l);		
		airLength.push(l);
		var diff=airLength[airLength.length-1]-airLength[airLength.length-2];
        mercuryLineLeft= mercuryLineLeft-(5*diff);
		$('#mercuryLine').css({left:mercuryLineLeft+'px' });
    });
    //Function for rotating scale closewise direction
    $('#clockWisearrow').click(function(){
    	rotateSca=rotateSca+2;
		rotateScalefn();
    })
    //Function for rotating scale anticlosewise direction
    $('#antiClockWisearrow').click(function(){
    	rotateSca=rotateSca-2;
		rotateScalefn();
    })
    // function for rotating the scale 
	function rotateScalefn(){	
		var rotateScaleVar = 'rotate('+rotateSca+'deg)';
		$("#scaleInside").css({'-webkit-backface-visibility':' hidden','-webkit-transform':' translateZ(0)'+rotateScaleVar,'-moz-transform-origin':'50% 50%','-webkit-transform-origin': '50% 50%','-webkit-transform': 'perspective(1px) '+rotateScaleVar,'-moz-transform': 'perspective(1px)' +rotateScaleVar,'-ms-transform': rotateScaleVar,'-o-transform': rotateScaleVar,'transform': 'perspective(1px) '+rotateScaleVar,'outline': '1px solid transparent'	});
	}
	//Function for showing/hiding the scale
    $('#scaleBtn').click(function(){ 
		if($(this).val()==scaleLabel[0]){//show scale
			$('#scaleBtn').attr('value',scaleLabel[1]);		
			$('#scaleDiv').css({display:'block'});
		}
		else{//hide scale
			$('#scaleBtn').attr('value',scaleLabel[0]);		
			$('#scaleDiv').css({display:'none'});
		}
    })
});