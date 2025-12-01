var dropped=false;
var rubbing=false;
function physicalTest(){
	function init_physical(){
		dropped=false;
		rubbing=false
		$("#waterTxt").html(physicalLable[0]); 
		$("#confirmationTxt").hide();
		$("#tooltip").hide();
		$("#phySaltDrag").css({left:'446px',top:'43px'});
		$("#phySaltDrag").attr("src",simPath+"images/salt.png");
		$('#dragItem1_0').draggable({ disabled: false });
		$('#dragItem1_1').draggable({ disabled: false });
		$('#hand').draggable({ disabled: false });
		$("#drop").css({top:'42px'});
		$("#dropperWraper").css({top:'101px'});
	}
	init_physical();
	$('#physicalExam').show();
	$("#drop").hide();
	$("#inference_Div").hide();
	$('#phySaltDrag').draggable({ disabled: false });
	dropPos =$("#dropperDrop").position();
	mainTop=$('#mainDiv').position().top;
	mainLeft=$('#mainDiv').position().left;	
	var srcOfFlame=$("#esterFlame").attr('src');
	path = srcOfFlame.substr(0,srcOfFlame.lastIndexOf("/")+1);
	$('#phySaltDrag').draggable({ revert: "invalid",containment:"#physicalCanvas",
		
	});
	$("#phySaltDrop").droppable({accept:"#phySaltDrag",
		drop:function(){
			$('#phySaltDrag').css({
					left:"163px",
					top:"160px"
			});
			$('#phySaltDrag').draggable({ disabled: true });
			$( "#dropperWraper" ).draggable({ disabled: false });
		}
	});
	
	$( "#dropperWraper" ).draggable({ revert: "invalid",containment:"#canvasBox",
		stop:function(){
			if(!dropped){
				$( "#dropperWraper" ).css({
					"top":"101px",
					"left": "466px"
				});
			}else{
				$("#hand").draggable('enable');
			}
		}
	});
	$( "#dropperWraper" ).draggable({ disabled: true});
	$("#dropperDrop").droppable({accept:"#dropperWraper",
		drop:function(event,ui){
			$("#dropperWraper").animate({
				top:"25px",
				left:"177px"
			},function(){
				$("#drop").show();dropsFall('drop','183px','113px','160px');
				setTimeout(function(){
					$("#phySaltDrag").attr("src",simPath+"images/saltWet.png");
					$( "#dropperWraper" ).animate({
						left:"466px",
						top:"101px"
					});
					$( "#dropperWraper" ).draggable('disable');
				},500);
			});
			dropped=true;
			
		}
	});
	$( "#hand" ).draggable({ revert: true,containment:"#canvasBox",
		start:function(){
			$( "#hand" ).css({
				"width":"185px",
				"height":"121px"
			});
		},
		drag:function(){
			var lft=($("#hand").css("left"));
			lft=lft.substr(0,lft.length-2);
			var top=($("#hand").css("top"));
			top=top.substr(0,top.length-2);	
			var hgt=($("#hand").css("height"));
			hgt=hgt.substr(0,hgt.length-2);	
			handBottom=Math.floor(hgt)+Math.floor(top)
			handLeft=Math.floor(lft);
			if(handLeft<205 && handLeft>160 && handBottom>158 && handBottom<176){
				rubbing=true;
				if(rubFlg){
					$("#phySaltDrag").attr("src",simPath+"images/saltMove1.png");
					rubFlg=false;
				}else{
					$("#phySaltDrag").attr("src",simPath+"images/saltMove2.png");
					rubFlg=true;
				}
			}
		},
		stop:function(){
			$( "#hand" ).css({
				"width":"65px",
				"height":"40px"
			});
			if(rubbing){
				if(sampleSalt[result]=="Acetate"){
					$("#confirmationTxt").text(inferenceMsgs[0]);
					$("#confirmationTxt").show();
					$("#tooltip").show();
					inferenceMsg=inferenceMsgs[4];
					$("#inference_Div").show();
					$("#confirmation").removeAttr("disabled");
				}else if(sampleSalt[result]=="Sulphide"){
					$("#confirmationTxt").text(inferenceMsgs[1]);
					$("#confirmationTxt").show();
					$("#tooltip").show();
					$("#confirmation").removeAttr("disabled");
				}else{
					$("#confirmationTxt").text(inferenceMsgs[2]);
					$("#confirmationTxt").show();
					$("#tooltip").show();
				}
				$( "#hand" ).draggable('disable');
				
			}
		}
	});
	$( "#hand" ).draggable('disable');
		//*--Function to start drag events---------
	function dragItem(sampleid,minTop,maxTop,minLeft,maxLeft,itemTop,itemLeft){
		$('#'+sampleid).draggable({
			drag:function(){
				$('#'+sampleid).css({
					zIndex:"5"
				});
			},
			stop : function(event, ui) {
				if(sampleid=="dragItem1_0"&&($("#"+sampleid).position().left)<-7&&($("#"+sampleid).position().left)>-358){// Watch glass dragging 
						$('#'+sampleid).hide();
						$("#phyWglass_1").show();
						$('#'+sampleid).draggable({ disabled: true });
						$('#phySaltDrag').draggable({ disabled: false });	
					}else if(sampleid=="dragItem1_1"&&($("#"+sampleid).position().left)<5&&($("#"+sampleid).position().left)>-358){
						$('#'+sampleid).hide();
						$("#drop").show();
						$("#dropper").show();
						$("#bottle").show();
						$("#waterTxt").show();
						$('#'+sampleid).draggable({ disabled: true });	
					}
				$('#'+sampleid).animate({display:'none'},function(){
					$('#'+sampleid).show();
					$('#'+sampleid).css({display:'block',top:itemTop+'px',left:itemLeft+'px'})					
				});
				$('#'+sampleid).css({zIndex:"0"});
			}
		})
	}
}
