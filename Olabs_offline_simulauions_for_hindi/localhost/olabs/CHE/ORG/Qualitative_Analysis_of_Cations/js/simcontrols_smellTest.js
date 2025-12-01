//----------------SMELL  TEST--------------------
function dropsFall(id,dLeft,dTop,animTo){
	$("#"+id).css({
		left:dLeft,
		top:dTop
	})
	$("#"+id).css({display:"block"});
	$("#"+id).animate({
		top:animTo
	},function(){
		$("#"+id).css({display:"none"});
	});
}
function smellTest(){
	var droped=false,dropperDroped=false;
	var rubFlg=true,rubbed=false;
	$('#smellTestWrap').show();
	$('#expHeading').html(Preliminary_Array[1]);
	$('#smell_salt_lbl').html(smell_label[0]);
	$('#smell_bottle_lbl').html(smell_label[1]);
	$('#smell_hand_lbl').html(smell_label[2]);
//----------Reset function--------------------
	function smellTestReset(){
		$("#Inference").hide();
		$("#smell_toolTip").hide();
		$("#smell_toolTipTxt").hide();
		droped=false;
		$("#smell_saltWrap").css({
			left:"446px",
			top:"31px",
		});
		$("#smell_saltWrap").draggable('enable');
		$("#smell_saltDrag").css({opacity:'1',height:'14px'});
	}	
	$("#smell_crtl_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#smell_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
//----------Salt drag and drop--------------------
	$("#smell_saltWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#smell_saltWrap").animate({left:'446px',top:'31px'});
			}
			
		}
	});
	droped=false;
	$("#smell_saltWrapDrop").droppable({accept:"#smell_saltWrap",
		drop:function(){
			droped=true;
			$("#smell_saltWrap").css({
				left:"164px",
				top:"211px"
			});
			$("#smell_saltWrap").draggable('disable');
			$("#smell_dropper").draggable('enable');
		}
	});
//----------Dropper drag and drop--------------------
	$("#smell_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#smell_dropper").animate({left:'468px',top:'103px'});
		}
	}
	});
	$("#smell_dropper").draggable('disable');
	$("#smell_dropperDrop").droppable({accept:"#smell_dropper",
		drop:function(){
			dropperDroped=true;
			$("#smell_dropper").animate({
				left:"187px",
				top:"65px"
			},100,function(){
				dropsFall('smell_drops','193px','150px','211px');
				setTimeout(function(){
					$("#smell_saltDrag").css({opacity:'.6'});
				},500);
				setTimeout(function(){
					dropsFall('smell_drops','193px','150px','211px');
				},500);
				setTimeout(function(){
					$("#smell_dropper").animate({left:'468px',top:'103px'},function(){
						$("#smell_dropper").draggable('disable');
						$("#smell_hand").draggable('enable');
					});
				},1000);
				
			});
		}
	});
	//------------ Hand drag --------------------
	$("#smell_hand").draggable({ containment:"#canvasBox",
		revert: function(){
			$("#smell_hand").animate({left:'433px',top:'260px'});
			$("#smell_hand").css({width:'80px',height:'50px'});
		},
		drag:function(){
			$("#smell_hand").css({width:'185px',height:'121px'});
			var lft=($("#smell_hand").css("left"));
			lft=lft.substr(0,lft.length-2);
			var top=($("#smell_hand").css("top"));
			top=top.substr(0,top.length-2);	
			var hgt=($("#smell_hand").css("height"));
			hgt=hgt.substr(0,hgt.length-2);	
			handBottom=Math.floor(hgt)+Math.floor(top)
			handLeft=Math.floor(lft);
			if(handLeft<210&& handLeft>170 && handBottom>217 && handBottom<235){
				rubbed=true;
				if(rubFlg){
					$("#smell_saltWrap").css({
						'-moz-transform':'scaleX(-1)',
						'-o-transform':'scaleX(-1)',
						'-webkit-transform':'scaleX(-1)',
						transform:'scaleX(-1)',
						filter:'FlipH',
						'-ms-filter':'FlipH'
					});
					rubFlg=false;
				}else{
					$("#smell_saltWrap").css({
						'-moz-transform':'scaleX(1)',
						'-o-transform':'scaleX(1)',
						'-webkit-transform':'scaleX(1)',
						transform:'scaleX(1)',
						filter:'FlipH',
						'-ms-filter':'FlipH'
					});
					rubFlg=true;
				}
			}
		},
		stop:function(){
			if(rubbed){
				if(sampleSalt[result]==sampleSalt[1]){
					$("#smell_toolTipTxt").html(smell_infMsg[0]);
					setTimeout(function(){
						$("#smell_toolTip").show();
						$("#smell_toolTipTxt").show();
					},500);
					inferenceMsg=infMsgPrefix+smell_infMsg[2]+infMsgSufix;
					setTimeout(function(){
						$("#Inference").show();
						document.getElementById("Dropbox_group_test_ID").disabled=false;
					},2000);
				}else{
					$("#smell_toolTipTxt").html(smell_infMsg[1]);
					setTimeout(function(){
						$("#smell_toolTip").show();
						$("#smell_toolTipTxt").show();
					},500);
				}
				$("#smell_hand").draggable('disable');
			}
		}
	});
	$("#smell_hand").draggable('disable');
	smellTestReset();
}