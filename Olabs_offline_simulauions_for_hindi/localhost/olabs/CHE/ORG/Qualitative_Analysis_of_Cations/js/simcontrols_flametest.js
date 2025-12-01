//----------------SMELL  TEST--------------------
var flame_Frame=0,flame_Frames=0,noFlame=false,flameEnd=false;
var flameClrIntvl,flameClrIntvl_2,flameColor="brick_red";
function flame_color(){//output flaming of burner
	flame_Frames++;
	$("#flame_color").attr('src',simPath+"images/flames/"+flameColor+flame_Frames+".png");
	flameClrIntvl_2=setTimeout("flame_color()",100);
	if(flame_Frames==5){
		flame_Frames=1;
	}
}
function flame_Flaming(){//flaming of burner
	flame_Frame++;
	$("#flame_flame").attr('src',simPath+"images/flame"+flame_Frame+".png");
	flameClrIntvl=setTimeout("flame_Flaming()",100);
	if(flame_Frame==5){
		flame_Frame=1;
	}
}
function flame_FlameOn(){
	$("#flame_burnerOff").hide();
	$("#flame_burnerOn").show();
	$("#flame_flame").show();
	flame_Flaming();
	$("#flame_toolTip").css({left:'93px',top:'130px'});
	$("#flame_toolTipTxt").css({left:'115px',top:'142px'});
	$("#flame_toolTipTxt").html(flame_label[4]);
	$("#flame_toolTip").show();
	$("#flame_toolTipTxt").show();
	$("#pWireWrap").draggable('enable');
	
}
function flameTest(){
	var droped=false,dropperDroped=false;
	var rubFlg=true,rubbed=false,dipped=false;
	$('#flameTestWrap').show();
	$('#expHeading').html(Preliminary_Array[5]);
	$('#flame_salt_lbl').html(flame_label[0]);
	$('#flame_bottle_lbl').html(flame_label[1]);
	$('#flame_glassRod_lbl').html(flame_label[2]);
	$('#flame_platinumWire_lbl').html(flame_label[3]);
	$("#saltInWire").css({"background-color" : random_solution[result]});
	if(sampleSalt[result]==sampleSalt[13]){
		flameColor="brick_red";
		inferenceMsg=infMsgPrefix+flame_infMsg[0]+infMsgSufix;
	}else if(sampleSalt[result]==sampleSalt[12]){
		flameColor="crimpson_red";
		inferenceMsg=infMsgPrefix+flame_infMsg[1]+infMsgSufix;
	}else if(sampleSalt[result]==sampleSalt[11]){
		flameColor="grassy_green";
		inferenceMsg=infMsgPrefix+flame_infMsg[2]+infMsgSufix;
	}else if(sampleSalt[result]==sampleSalt[3]){
		flameColor="bright_blueish_green";
		inferenceMsg=infMsgPrefix+flame_infMsg[3]+infMsgSufix;
	}else if(sampleSalt[result]==sampleSalt[10]){
		flameColor="grassy_green";
		inferenceMsg=infMsgPrefix+flame_infMsg[4]+infMsgSufix;
	}else if(sampleSalt[result]==sampleSalt[2] ||sampleSalt[result]==sampleSalt[15]){
		flameColor="dull_bluish_white";
		inferenceMsg=infMsgPrefix+flame_infMsg[5]+infMsgSufix;
	}else{
		noFlame=true;
		inferenceMsg=flame_infMsg[6];
	}
//----------Reset function--------------------
	function flameTestReset(){
		clearInterval(flameClrIntvl);
		$("#flame_burnerOn").hide();
		$("#flame_burnerOff").show();
		$("#flame_flame").hide();
		$("#flame_burnerOff").removeAttr("onclick");
		$("#Inference").hide();
		$("#flame_toolTip").hide();
		$("#flame_toolTipTxt").hide();
		droped=false;
		$("#flame_saltWrap").css({
			left:"446px",
			top:"31px",
		});
		$("#flame_saltWrap").draggable('enable');
		$("#flame_saltDrag").css({opacity:'1',height:'14px'});
		flameEnd=false;
		$("#saltInWire").hide();
	}	
	$("#flame_crtl_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#flame_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
//----------Salt drag and drop--------------------
	$("#flame_saltWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#flame_saltWrap").animate({left:'446px',top:'31px'});
			}
			
		}
	});
	droped=false;
	$("#flame_saltWrapDrop").droppable({accept:"#flame_saltWrap",
		drop:function(){
			droped=true;
			$("#flame_saltWrap").css({
				left:"225px",
				top:"288px"
			});
			$("#flame_saltWrap").draggable('disable');
			$("#flame_dropper").draggable('enable');
		}
	});
//----------Dropper drag and drop--------------------
	$("#flame_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#flame_dropper").animate({left:'468px',top:'103px'});
		}
	}
	});
	$("#flame_dropper").draggable('disable');
	$("#flame_dropperDrop").droppable({accept:"#flame_dropper",
		drop:function(){
			dropperDroped=true;
			$("#flame_dropper").animate({
				left:"245px",
				top:"150px"
			},100,function(){
				dropsFall('flame_drops','251px','237px','281px');
				setTimeout(function(){
					$("#flame_saltDrag").css({opacity:'.6'});
				},500);
				setTimeout(function(){
					dropsFall('flame_drops','251px','237px','281px');
				},500);
				setTimeout(function(){
					$("#flame_dropper").animate({left:'468px',top:'103px'},function(){
						$("#flame_dropper").draggable('disable');
						$("#flame_glassRodWrap").draggable('enable');
					});
				},1000);
			
			});
		}
	});
//------------ Glass rod drag --------------------
	$("#flame_glassRodWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			$("#flame_glassRodWrap").animate({left:'397px',top:'246px'});
		},
		drag:function(){
			var lft=($("#flame_glassRodWrap").css("left"));
			lft=lft.substr(0,lft.length-2);
			var top=($("#flame_glassRodWrap").css("top"));
			top=top.substr(0,top.length-2);	
			var hgt=($("#flame_glassRodWrap").css("height"));
			hgt=hgt.substr(0,hgt.length-2);	
			handBottom=Math.floor(hgt)+Math.floor(top)
			handLeft=Math.floor(lft);
			if(handLeft<270&& handLeft>220 && handBottom>290 && handBottom<306){
				rubbed=true;
				if(rubFlg){
					$("#flame_saltWrap").css({
						'-moz-transform':'scaleX(-1)',
						'-o-transform':'scaleX(-1)',
						'-webkit-transform':'scaleX(-1)',
						transform:'scaleX(-1)',
						filter:'FlipH',
						'-ms-filter':'FlipH'
					});
					rubFlg=false;
				}else{
					$("#flame_saltWrap").css({
						'-moz-transform':'scaleX(1)',
						'-o-transform':'scaleX(1)',
						'-webkit-transform':'scaleX(1)',
						transform:'scaleX(1)',
						filter:'FlipH',
						'-ms-filter':'FlipH'
					});
					rubFlg=true;
				}
				$("#flame_burnerOff").attr("onclick","flame_FlameOn()");
			}
		},
		stop:function(){
			if(rubbed){
				$("#flame_glassRodWrap").draggable('disable');
			}
		}
	});
	$("#flame_glassRodWrap").draggable('disable');
//------------Platinum wire drag --------------------
	$("#pWireWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			$("#pWireWrap").animate({left:'452px',top:'278px'});
		},
		start:function(){
			$("#flame_toolTip").hide();
			$("#flame_toolTipTxt").hide();
			$("#flame_toolTip").css({left:'193px',top:'150px'});
			$("#flame_toolTipTxt").css({left:'223px',top:'160px'});
		},
		drag:function(){
			var lft=($("#pWireWrap").css("left"));
			lft=lft.substr(0,lft.length-2);
			var top=($("#pWireWrap").css("top"));
			top=top.substr(0,top.length-2);	
			var hgt=($("#pWireWrap").css("height"));
			hgt=hgt.substr(0,hgt.length-2);	
			handBottom=Math.floor(hgt)+Math.floor(top)
			handLeft=Math.floor(lft);
			if(handLeft<258&& handLeft>235 && handBottom<313 && handBottom>300){
				dipped=true;
				$("#saltInWire").show();
				if(rubFlg){
					$("#flame_saltWrap").css({
						'-moz-transform':'scaleX(-1)',
						'-o-transform':'scaleX(-1)',
						'-webkit-transform':'scaleX(-1)',
						transform:'scaleX(-1)',
						filter:'FlipH',
						'-ms-filter':'FlipH'
					});
					rubFlg=false;
				}else{
					$("#flame_saltWrap").css({
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
			if(dipped && $("#pWireWrap").position().left<80 && $("#pWireWrap").position().left>54 &&$("#pWireWrap").position().top>145 && $("#pWireWrap").position().top<173){
				$("#flame_color_wrap").css({top:($("#pWireWrap").position().top)-23+"px"});
				flame_color();
				if(!noFlame){$("#flame_color_wrap").show();}
				flameEnd=true;
			}else{
				clearInterval(flameClrIntvl_2);
				$("#flame_color_wrap").hide();
			}
			
		},
		stop:function(){
			$("#flame_color_wrap").hide();
			if(flameEnd){
				$("#pWireWrap").draggable('disable');
				clearInterval(flameClrIntvl);
				$("#flame_burnerOn").hide();
				$("#flame_burnerOff").show();
				$("#flame_flame").hide();
				$("#flame_burnerOff").removeAttr("onclick");
				setTimeout(function(){
					$("#Inference").show();
					document.getElementById("Dropbox_group_test_ID").disabled=false;
				},1000);
			}
		}
	});
	$("#pWireWrap").draggable('disable');
	flameTestReset();
}