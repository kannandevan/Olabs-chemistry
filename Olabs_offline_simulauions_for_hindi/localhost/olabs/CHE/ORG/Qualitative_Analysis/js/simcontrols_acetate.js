//Confirmation of acetate(Oxalic acid test)

var rubFlg=true;

function confirmationOfAcetate(){ 
	$('#acetate').show();	
	function init_confirmationOfAcetate(){
		rubbing=false;
		$("#actDrop").show();
		$("#actDrop").css({top:'42px'});
		$("#dropperWraper").css({top:'176px'});
		$("#inference_Div").hide();
		$("#actConfTxt").hide();
		$("#actDropperWraper").hide();
		$("#actDropperWraper").css({top:'176px'});
		$("#actBottle").hide();
		$('#act_waterTxt').hide();
		$("#actWglass_1").hide();
		$("#act_tooltip").hide();
		$( "#act_Wglass" ).draggable({ disabled: false });
		$( "#act_dragItem1_1" ).draggable({ disabled: false });
		$("#acetateSaltDrag").show();
		$( "#acetateSaltDrag" ).draggable({ disabled: false });
		$( "#actOxalicAcidDrag" ).draggable({ disabled: true });
		$( "#actDropperWraper" ).draggable({disabled: true });
		$('#actOxalicAcidDrag').draggable({disabled: true });
		$("#actOxalicAcidDrag").attr("src",simPath+"images/salt.png");
		$("#acetateSaltDrag").attr("src",simPath+"images/salt.png");
		$("#actOxalicAcidDrag").css({top:'183px',left:'97px',width:'30px',height:'9px'});
		$("#acetateSaltDrag").css({top:'290px',left:'65px'});
	}
	init_confirmationOfAcetate();
	addLabel();
	//*--Function for adding label for all controls---	
	function addLabel(){
		$('#acetateHeading').html(labelArray[0]);	
		$('#actWGlass').html(labelArray[1]);	
		$('#actSodium').html(labelArray[2]);	
		$('#actSodiumBottle').html(labelArray[3]);	
		$('#actOxalicTxt').html(labelArray[5]);
		$('#act_waterTxt').html(labelArray[2]);
		$("#act_text1_2").text(labelArray[4]);
		$("#actSampleSaltTxt").text(labelArray[6]);
	}
	dragItem('act_Wglass',$("#act_Wglass").css("left"),$("#act_Wglass").css("top"));
	dragItem('act_dragItem1_1',$("#act_dragItem1_1").css("left"),$("#act_dragItem1_1").css("top"));
	//*--Function to start drag events---------
	function dragItem(sampleid,itemLeft,itemTop){
		$('#'+sampleid).draggable({
			drag:function(){
				$('#'+sampleid).css({
					zIndex:"5"
				});
			},
			stop : function(event, ui) {
				
				if(sampleid=="act_Wglass"&&($("#"+sampleid).position().left)<-7&&($("#"+sampleid).position().left)>-358){
						$('#'+sampleid).hide();
						$("#actWglass_1").show();
						$('#'+sampleid).draggable({ disabled: true });
						$( "#acetateSaltDrag" ).draggable({ disabled: false });
					}else if(sampleid=="act_dragItem1_1"&&($("#"+sampleid).position().left)<5&&($("#"+sampleid).position().left)>-358){
						$('#'+sampleid).hide();
						$("#actDropperWraper").show();
						$("#actBottle").show();
						$("#act_waterTxt").show();
						$('#'+sampleid).draggable({ disabled: true });	
					}
				$('#'+sampleid).animate({display:'none'},function(){
					$('#'+sampleid).show();
					$('#'+sampleid).css({display:'block',left:itemLeft,top:itemTop });
					
					
				});
				$('#'+sampleid).css({zIndex:"0"});
			}
		})
	}
	$('#acetateSaltDrag').draggable({//containment:"#canvasBox",
		stop:function(){
			$('#acetateSaltDrag').css({
				left:"163px",
				top:"166px"
			});
			$('#acetateSaltDrag').draggable({disabled: true });
			$('#actOxalicAcidDrag').draggable({disabled: false });
		}
	});
	$('#acetateSaltDrag').draggable({disabled: true });
	$('#actOxalicAcidDrag').draggable({
				stop:function(){
					$('#actOxalicAcidDrag').css({
						left:"-182px",
						top:"152px"
					});
					$('#actOxalicAcidDrag').draggable({disabled: true });
					$( "#actDropperWraper" ).draggable({disabled: false });
				}
			});
	$( "#actDropperWraper" ).draggable({ revert: "invalid",containment:"#canvasBox",
	});
	$("#act_dropperDrop").droppable({accept:"#actDropperWraper",
	drop:function(event,ui){
		$("#actDropperWraper").css({
			top:"35px"
		});
		//dropped=true;
		$("#actDrop").animate({
				top:"130px",
			},function(){
				
				$("#actDrop").hide();
				$("#acetateSaltDrag").attr("src",simPath+"images/saltWet.png");
				$("#actOxalicAcidDrag").attr("src",simPath+"images/saltWet.png");
				$( "#actDropperWraper" ).animate({
					left:"267px",
					top:"187px"
				});
				$( "#actDropperWraper" ).draggable('disable');
				
				$( "#act_hand" ).draggable({ revert: true,containment:"#canvasBox",
					start:function(){
						$( "#act_hand" ).css({
							"width":"185px",
							"height":"121px"
						});
					},
					drag:function(){
						var lft=($("#act_hand").css("left"));
						lft=lft.substr(0,lft.length-2);
						var top=($("#act_hand").css("top"));
						top=top.substr(0,top.length-2);	
						var hgt=($("#act_hand").css("height"));
						hgt=hgt.substr(0,hgt.length-2);	
						handBottom=Math.floor(hgt)+Math.floor(top)
						handLeft=Math.floor(lft);
						if(handLeft<-160 && handLeft>-197 && handBottom>155 && handBottom<168){
							$("#actOxalicAcidDrag").css({width:"56px",height:"12px",left:"-200px",top:"154px" });
							$("#acetateSaltDrag").hide()
							rubbing=true;
							if(rubFlg){
								$("#actOxalicAcidDrag").attr("src",simPath+"images/saltMove1.png");
								rubFlg=false;
							}else{
								$("#actOxalicAcidDrag").attr("src",simPath+"images/saltMove2.png");
								rubFlg=true;
							}
						}
					},
					stop:function(){
						$( "#act_hand" ).css({
							"width":"65px",
							"height":"40px"
						});
						if(rubbing){
							$( "#act_hand" ).draggable('disable');
							if(sampleSalt[result]==sampleSalt[9]){
								inferenceMsg=inferenceMsgs[3];
								$("#actConfTxt").text(inferenceMsgs[0]);
							}else{
								inferenceMsg=inferenceMsgs[5];
								$("#actConfTxt").text(inferenceMsgs[2]);
							}
							$(".inference").show();
							$("#inference_Div").show();
							
							
						}
					}
				});
				$( "#act_hand" ).draggable('enable');
			}
		);
	}
});
}