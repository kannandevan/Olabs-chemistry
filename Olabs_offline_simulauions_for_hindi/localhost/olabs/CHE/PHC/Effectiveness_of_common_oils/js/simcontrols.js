// JavaScript Document
var degree1=60;
var dropsnum=10;
var calc_var,d;
var rotateAmt=5;
var clipPrevH=$("#bottleSoln").height();//without soap
var OilOutSoap0=[[5,6,9,13],[10,9,12,16],[15,13,16,20],[20,18,21,26]];   ///caster oil
var OilOutSoap1=[[5,9,13,16],[10,12,17,21],[15,15,21,26],[20,20,26,31]];   ///cottonSeed
var OilOutSoap2=[[5,12,17,22],[10,16,21,26],[15,21,26,31],[20,27,32,37]];   ///coconut oil
var OilOutSoap3=[[5,4,7,11],[10,7,10,14],[15,10,13,17],[20,13,16,20]];   /// kerosene oil
var OilOutSoap4=[[5,14,20,26],[10,19,25,31],[15,24,30,36],[20,31,37,43]];   /// mustard oil
//with soap
var OilSoap0=[[5,10,10,13,17],[10,10,13,16,21],[15,10,17,21,26],[20,10,22,26,32],[5,15,14,18,23],[10,15,17,22,27],[15,15,21,26,32],[20,15,26,31,37],[5,20,19,24,30],[10,20,23,29,35],[15,20,27,34,41],[20,20,33,40,47]];   ///caster oil
var OilSoap1=[[5,10,12,16,21],[10,10,15,20,26],[15,10,19,25,31],[20,10,24,31,37],[5,15,16,21,25],[10,15,20,25,30],[15,15,24,30,35],[20,15,30,36,41],[5,20,21,27,33],[10,20,26,32,38],[15,20,31,37,43],[20,20,37,43,49]];  ///cottonSeed
var OilSoap2=[[5,10,15,20,26],[10,10,20,25,31],[15,10,25,31,36],[20,10,31,37,42],[5,15,19,25,31],[10,15,24,30,36],[15,15,29,35,41],[20,15,35,41,47],[5,20,26,30,36],[10,20,29,35,41],[15,20,34,40,46],[20,20,41,47,53]] ;  ///coconut oil
var OilSoap3=[[5,10,6,10,14],[10,10,9,13,17],[15,10,12,16,20],[20,10,15,19,23],[5,15,9,13,17],[10,15,12,16,20],[15,15,15,19,23],[20,15,18,22,26],[5,20,12,16,20],[10,20,15,19,23],[15,20,18,22,26],[20,20,21,25,29]] ;  /// kerosene oil
var OilSoap4=[[5,10,20,26,32],[10,10,25,31,37],[15,10,30,37,42],[20,10,37,44,49],[5,15,25,31,37],[10,15,30,36,42],[15,15,35,41,47],[20,15,42,48,52],[5,20,30,36,42],[10,20,35,41,47],[15,20,40,46,52],[20,20,47,53,59]] ;  /// mustard oil
//with detergent 
var OilDetergent0=[[5,10,55,67,73],[10,10,60,72,78],[15,10,66,78,84],[20,10,73,85,91],[5,15,65,71,77],[10,15,70,76,82],[15,15,76,82,88],[20,15,83,89,95],[5,20,75,81,87],[10,20,80,86,92],[15,20,86,92,98],[20,20,93,99,105]];   ///caster oil
var OilDetergent1=[[5,10,37,43,49],[10,10,42,48,54],[15,10,47,53,59],[20,10,53,59,65],[5,15,45,51,57],[10,15,50,56,62],[15,15,55,61,67],[20,15,61,67,73],[5,20,53,59,65],[10,20,58,64,70],[15,20,63,39,75],[20,20,69,75,81]];  ///cottonSeed
var OilDetergent2=[[5,10,46,65,71],[10,10,51,70,76],[15,10,57,76,82],[20,10,64,83,89],[5,15,56,62,68],[10,15,61,67,73],[15,15,67,73,79],[20,15,74,80,86],[5,20,66,72,78],[10,20,71,77,83],[15,20,77,83,89],[20,20,84,90,96]] ;  ///coconut oil
var OilDetergent3=[[5,10,10,15,20],[10,10,14,19,24],[15,10,18,23,28],[20,10,23,28,33],[5,15,16,21,26],[10,15,20,25,30],[15,15,24,29,34],[20,15,29,33,39],[5,20,22,27,32],[10,20,26,31,36],[15,20,30,35,40],[20,20,35,40,45]] ;  /// kerosene oil
var OilDetergent4=[[5,10,35,41,47],[10,10,40,46,52],[15,10,45,51,57],[20,10,51,57,63],[5,15,43,49,55],[10,15,48,54,60],[15,15,53,59,65],[20,15,59,65,71],[5,20,51,57,63],[10,20,56,62,68],[15,20,61,67,73],[20,20,67,73,79]] ;  /// mustard oil

var delay_val;
var selected,oilIndexVal,Hlp_msg;
var seconds = 0, minutes = 0, hours = 0,t,S,M,H;
var dropFlag=0,dropPlayed=0;
var clockinterval,degree=0,rotationCount=1,sepTime;
var initialheight,clipHInit,clipTInit,index;// bottle shaking feel...
var angle=0,turningRight=true,clrTimeOutTube,d;
var water_lHgt,water_letop,oil_lHgt,oil_letop;
var anim_topval,c_val,anim_hgtval,c_val1;
var oil_type;
window.onload = function init(){
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	var clipH=$("#bottleSoln2").height(), clipT=$("#bottleSoln2").position().top;
	gt = new Gettext({ 'domain' : 'messages' });
	document.getElementById("expName").innerHTML=gt.gettext("Effectiveness of Different Common Oils in Forming Emulsions");
	textArray=[gt.gettext("Select the oil:"),gt.gettext("Select the emulsifying agent:"),gt.gettext("Volume of oil: "),
	gt.gettext("Volume of water: "),gt.gettext("1% Soap solution"),gt.gettext("Detergent"),
	gt.gettext("Start"),gt.gettext("No of drops of the emulsifying agent: "),gt.gettext("Stop "),
	gt.gettext("1 min")];
	oilOption=[gt.gettext("Castor oil"),gt.gettext("Cotton seed oil"),gt.gettext("Coconut oil"),gt.gettext("Kerosene oil"),gt.gettext("Mustard oil")];
	agentOpt=[gt.gettext("1% Soap solution"),gt.gettext("1% Detergent solution")];
	Hlp_msg=[gt.gettext("Drag the measuring jar to the bottle to add the water."),gt.gettext("Drag the bottle to shake it well."),gt.gettext("Note down the time for the oil to get separated from water."),gt.gettext("Drag the dropper to the beaker to take emulsifying agent."),gt.gettext("Drag it back to the bottle to drop the emulsifying agent.")];
	oil_type=['Castoroil','Castoroil','Castoroil','Keroseneoil','Mustardoil'];
	document.getElementById("oil").innerHTML=textArray[0];
	document.getElementById("agent").innerHTML=textArray[1];
	document.getElementById("oiltxt").innerHTML=textArray[2]+" 5 ml";
	document.getElementById("watertxt").innerHTML=textArray[3]+"50 ml";
	document.getElementById("bottletxt").innerHTML=textArray[4];
	document.getElementById("bottletxt2").innerHTML=oilOption[0];
	document.getElementById("stopStart").innerHTML=textArray[6];
	document.getElementById("stopTxt").innerHTML='00:00:00';
	document.getElementById("drops").innerHTML=textArray[7]+"10";
	document.getElementById("clockTxt").innerHTML=textArray[9];
	addintoDropDown( $('#agentinput'),agentOpt);	//*--Loading option values in drop down----
	addintoDropDown( $('#mixture'),oilOption);
	}
	function addintoDropDown(getId,valueSet){//*--Function to add values into the drop down---				
		selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append($('<option></option>').val(val).html(text));
		});
	}
	function oilChange(){
		document.getElementById("bottletxt2").innerHTML="";
		$('#bottleSoln_img').attr('src',simPath+"images/"+oil_type[document.getElementById("mixture").selectedIndex]+".png");
		document.getElementById("bottletxt2").innerHTML=oilOption[document.getElementById("mixture").selectedIndex];
		oilIndexVal=document.getElementById("mixture").selectedIndex;
	}
	function oilLevelChange(){	
		oil_lHgt=parseFloat(11.67+(0.466*parseFloat($('#oilLevel').val())));
		oil_letop=parseFloat(168.7-parseFloat(0.54*($('#oilLevel').val())));
		$('#bottleSoln').animate({height:oil_lHgt+'px',top:oil_letop+'px',});

		document.getElementById("oiltxt").innerHTML=textArray[2]+" "+$('#oilLevel').val()+" ml";
	}
	function waterLevelChange(){
		
		water_lHgt=parseFloat(80)+parseFloat((($('#waterLevel').val()-50)/10)*15);
		water_letop=parseFloat(94)-parseFloat((($('#waterLevel').val()-50)/10)*15);
		$('#jarsoln').animate({height:water_lHgt+'px',top:water_letop+'px'});
		$('#jarLIne').animate({top:water_letop-1+'px'});
		document.getElementById("watertxt").innerHTML=textArray[3]+$('#waterLevel').val()+" ml";
	}
	function emulsification(){
		if (document.getElementById("agentinput").selectedIndex==0){ 
			$('#SolnBottle').attr('src',simPath+"images/detergentinbeaker.png");
			$('#bottleLabel1').css({'width': '128px','left': '420px'});
			$('#bottletxt').css({'width': '130px','left': '421px'});
			
		}else{
			$('#SolnBottle').attr('src',simPath+"images/detergentinbeaker.png");
			$('#bottleLabel1').css({'width': '148px','left': '410px'});
			 $('#bottletxt').css({'width': '166px','left': '401px'});

		}
		document.getElementById("bottletxt").innerHTML=agentOpt[document.getElementById("agentinput").selectedIndex];
	}
	function noOfdrops(){
		dropsnum=$('#noDrops').val();
		document.getElementById("drops").innerHTML=textArray[7]+$('#noDrops').val();
	}
	function add() {///stop watch
		seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
			if (minutes >= 60) {
				minutes = 0;
				hours++;
			}
		}
		document.getElementById("stopTxt").innerHTML= (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
		//S=(seconds > 9 ? seconds : "0" + seconds); 
		S=(minutes*60)+seconds;
		if(Number(S)>=sepTime){
			clearTimeout(t);
			document.getElementById("stopStart").innerHTML=textArray[6];
			dragdropper();
		}else{

			timer();
			oilSeparation();
		}
	}
	function dragdropper(){
		$("#dropr").draggable({
			drag:function(event,ui){
					if(dropFlag==0){
					if(($("#dropr").position().top>=80)&&($("#dropr").position().top<130)&&(($("#dropr").position().left>441)&&($("#dropr").position().left<500))){
					$('#dropr').draggable({disabled:true});
						$('#dropr').css({left:'472px',top:"87px"}); 
					$('#droprSoln_div').animate({height:'89px',top:"64px",width:"14px",left:"5px"}); 
					dropFlag=1;
					}
					else{
				
					$('#dropr').css({left:'334px',top:"138px"}); 
					$('#dropr').draggable({disabled:false});
					}
				}
				else{
					$('#dropr').draggable({disabled:false});
					if(($("#dropr").position().top>-50)&&($("#dropr").position().top<150)&&(($("#dropr").position().left>50)&&($("#dropr").position().left<350))){
						$('#dropr').draggable({disabled:true});
						$('#dropr').css({left:'195px',top:"9px"}); 
						

					}else{
						$('#dropr').css({left:'334px',top:"138px"}); 
						$('#drop').css({display:'none'}); 
						$('#dropr').draggable({disabled:false});
					}
				}	
			},

			stop:function(event,ui){
				if(dropFlag==0){
					if(($("#dropr").position().top>=80)&&($("#dropr").position().top<130)&&(($("#dropr").position().left>441)&&($("#dropr").position().left<500))){
					$('#dropr').css({left:'472px',top:"87px"}); 
					dropFlag=1;
				}
				else{
				$('#dropr').css({left:'334px',top:"138px"}); 
				}
				}
				else{
				if(($("#dropr").position().top>-50)&&($("#dropr").position().top<150)&&(($("#dropr").position().left>50)&&($("#dropr").position().left<350))){
					$('#dropr').css({left:'195px',top:"9px"}); 
					$("#cork").animate({'-ms-transform': 'rotate('+degree1+'deg)','-webkit-transform': 'rotate('+degree1+'deg)','transform': 'rotate('+degree1+'deg)',top:'-35px',left:'57px'}); 
						$('#dropr').animate({left:'195px',top:"18px"},500,
						function(){							
						$('#drop').css({display:'block'});
						dropPlay();
						});
				}
				else{
					$('#dropr').css({left:'472px',top:"87px"}); 
				}

				}
				}
		});
	}
	function dropPlay(){
		if(dropPlayed!=dropsnum){
			dropPlayed++;

			$('#droprSoln_div').animate({height:73+'px',top:"142px",width:'13px',left:'5px'},dropsnum*500);
			$('#droprSoln').animate({top:"-97px",left:"1px"},dropsnum*500);
			if(document.getElementById("drop").style.top==c_val+91+'px'){
			$('#drop').css({top:'147px'});
			}
			$('#drop').animate({top:c_val+91+'px'});
			//clearTimeout(d);
			d = setTimeout(dropPlay, 500);

		}else{
		$('#drop,#droprSoln,#droprSoln_div').stop(true);
			$('#droprSoln_div').css({top:"152px"}); 
			$('#dropr').animate({left:'334px',top:"138px"},500);
			clearTimeout(d);
			$('#drop').css({display:'none'}); 
			$("#cork").animate({'-ms-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)','transform': 'rotate(0deg)',top:'6px',left:'24px'});
			$('#bottle').draggable({disabled:false});
			shake();
		}
	}
	function timer() {
		document.getElementById("stopStart").innerHTML=textArray[8];
		t = setTimeout(add, 1000);
	}
	DragjarFirst();
	function DragjarFirst(){//drag measuring jar
		$("#jar").draggable({
		start:function(){	$('#jar_shadow').css({'display':'none'});},
		drag:function(){	$('#jar_shadow').css({'display':'none'});},
			stop:function(event,ui){
				if(($("#jar").position().top>=3)&&($("#jar").position().top<180)&&(($("#jar").position().left>35)&&($("#jar").position().left<150))){
					//	$('#jar').css({left:'61px',top:'92px'});
					$("#cork").animate({'-ms-transform': 'rotate('+degree1+'deg)','-webkit-transform': 'rotate('+degree1+'deg)','transform': 'rotate('+degree1+'deg)',top:'-12px',left:'62px'},750,function(){
					
						$('#jar').css({left:'69px',top:'2px'});
						$('#jarLIne').css({'display':'none'});
						$('#jarsoln').css({top:'7px',left:'23px',width:'24px',height:'173px'});

						$('#jar').rotate(90);
						$('#waterFlw').animate({height:'146px'},750,function(){
						$('#jarsoln').css({opacity:0});
						$('#jar').rotate(0);
						$('#waterFlw').css({display:'none'});
						$('#jar').css({left:'34px',top:'109px'});
							$('#jar_shadow').css({'display':'block'});
						$("#cork").animate({'-ms-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)','transform': 'rotate(0deg)',top:'6px',left:'24px'});
					});	
						anim_topval=parseFloat(160+(-1.6*parseFloat($('#oilLevel').val())));
						c_val=parseFloat(anim_topval)-parseFloat((($('#waterLevel').val()-50)/20)*3);
						anim_hgtval=parseFloat(18+(1.6*parseFloat($('#oilLevel').val())));
						c_val1=parseFloat(anim_hgtval)+parseFloat((($('#waterLevel').val()-50)/20)*3);
						Botsol1_hgt=parseFloat($('#bottleSoln').height())-(3+(parseFloat($('#oilLevel').val()/5)));
						console.log(Botsol1_hgt)
						$('#bottleSoln2').animate({height:parseFloat(c_val1),top:c_val+3},750);
						$('#bottleSoln2_img').css({height:parseFloat(c_val1),'width': '88px'});
						$('#bottleSoln').animate({height:Botsol1_hgt+'px',top:parseFloat(c_val),'border-bottom-left-radius':'0px','border-bottom-right-radius':'0px'},750);	
						shake();
					});
					$('#jar').draggable({disabled:true});
					document.getElementById("agentinput").disabled=document.getElementById("waterLevel").disabled=document.getElementById("oilLevel").disabled=document.getElementById("mixture").disabled=true;
				}else{
					$('#jar').css({left:'34px',top:"109px"});  
					$('#jar_shadow').css({'display':'block'});
				}
			}
		});
	}
	// clock rotating time..
	function clockRotation(){	//function for rotate needle of clock...
		degree++;
		if(degree>=(360*rotationCount)){
			rotationCount=1;
			clearInterval(clockinterval);
			degree=angle=0;//
				$('#bottleSoln,#bottleSoln2').stop(true);	
			clearInterval(clrTimeOutTube);
			$('#needle,#clockBody,#clockTxt').css({ display:'none'})
			seconds = 0, minutes = 0, hours = 0;
			timer();
				
			$('#bottle').css({left:'165px',top:"110px"}); 
			$("#bottle").css({'-ms-transform': 'rotate('+degree+'deg)','-webkit-transform': 'rotate('+degree+'deg)','transform': 'rotate('+degree+'deg)'});
			//$('#bottleSoln').css({'opacity':'1'})
			$('#bottleShadow').css({'display':'block'});
		}
		$("#needle").css({'transform' : 'rotate('+ degree +'deg)','transform-origin':'3px 26px','-moz-transform' : 'rotate('+ degree +'deg)','-moz-transform-origin':'3px 26px','-webkit-transform' : 'rotate('+ degree +'deg)','-webkit-transform-origin':'3px 26px'});
	}
	function oilSeparation(){///FN to separate oil n water

		for(var j=50;j<=90;j+=20){
			if($('#waterLevel').val()==j){
				for(var i=5;i<=20;i+=5){
					if($('#oilLevel').val()==i){
						calc_var=parseInt((i/5)-1)+parseInt(((dropsnum/5)-2)*4);//for accessing the OilSoap array values
						if(document.getElementById("mixture").selectedIndex==0){
							if(dropFlag==0){
								sepTime=OilOutSoap0[(i/5)-1][((j/10)-3)/2];
							}else{
								if(OilSoap0[calc_var][1]==dropsnum){
									sepTime=($('#agentinput').val()==0)?OilSoap0[calc_var][(((j/10)-3)/2)+1]:OilDetergent0[calc_var][(((j/10)-3)/2)+1];
								}
							}
			
						}else if(document.getElementById("mixture").selectedIndex==1){
							if(dropFlag==0){
								sepTime=OilOutSoap1[(i/5)-1][((j/10)-3)/2];
							}
							else{
								if(OilSoap1[calc_var][1]==dropsnum){

									sepTime=($('#agentinput').val()==0)?OilSoap1[calc_var][(((j/10)-3)/2)+1]:OilDetergent1[calc_var][(((j/10)-3)/2)+1];
								}
							}

						}else if(document.getElementById("mixture").selectedIndex==2){
							if(dropFlag==0){
								sepTime=OilOutSoap2[(i/5)-1][((j/10)-3)/2];}
							else{
								if(OilSoap2[calc_var][1]==dropsnum){
									sepTime=($('#agentinput').val()==0)?OilSoap2[calc_var][(((j/10)-3)/2)+1]:OilDetergent2[calc_var][(((j/10)-3)/2)+1];
								}
							}
						}else if(document.getElementById("mixture").selectedIndex==3){
							if(dropFlag==0){
								sepTime=OilOutSoap3[(i/5)-1][((j/10)-3)/2];
							}
							else{
								if(OilSoap3[calc_var][1]==dropsnum){
									sepTime=($('#agentinput').val()==0)?OilSoap3[calc_var][(((j/10)-3)/2)+1]:OilDetergent3[calc_var][(((j/10)-3)/2)+1];
								}
							}

						}else if(document.getElementById("mixture").selectedIndex==4){
							if(dropFlag==0){
								sepTime=OilOutSoap4[(i/5)-1][((j/10)-3)/2];}
							else{
								if(OilSoap4[calc_var][1]==dropsnum){
									sepTime=($('#agentinput').val()==0)?OilSoap4[calc_var][(((j/10)-3)/2)+1]:OilDetergent4[calc_var][(((j/10)-3)/2)+1];
								}
							}
						}
						index=document.getElementById("mixture").selectedIndex;

					}
				}
			}			
		}

		delay_val=(sepTime)*1000;
		$('#bottleSoln').animate({height:Botsol1_hgt+'px','border-bottom-left-radius':'0px','border-bottom-right-radius':'0px'},delay_val);
	}
	function shake(){///FN to drag bottle
					
						initialheight=(Botsol1_hgt+(c_val1-Botsol1_hgt))+3;
						
					
		$("#bottle").draggable({
			start:function(event,ui){	
				$('#bottleSoln,#bottleSoln2').stop(true);	
				
				$('#bottleShadow').css({'display':'none'});	
		},
			stop:function(event,ui){
				if(($("#bottle").position().top>=10)&&($("#bottle").position().top<140)&&(($("#bottle").position().left>80)&&($("#bottle").position().left<220))){
			
					clockinterval=setInterval("clockRotation()",10);

					clrTimeOutTube=setInterval(function(){
						testTubeShaking("#bottle")

						$('#bottleSoln').animate({height:parseFloat(initialheight)+'px','border-bottom-left-radius':'12px','border-bottom-right-radius': '12px'},4000);

					},10);
					
					$('#needle,#clockBody,#clockTxt').css({ display:'block',})
					$('#bottle').css({left:'165px',top:"90px"});

					$('#bottle').draggable({disabled:true});
							//
				}else{
					$('#bottle').css({left:'165px',top:"110px"}); 
				}
			}
		});
	}
	function testTubeShaking(ID){//console.log(counter);
		$(ID).css({'-ms-transform': 'rotate('+angle+'deg)','-webkit-transform': 'rotate('+angle+'deg)','transform': 'rotate('+angle+'deg)','-moz-transform': 'rotate('+angle+'deg)','-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden','-moz-backface-visibility': 'hidden'});
	
		if(turningRight){
			angle++;}
		else{
		angle--;
		}
		if(angle==10){
			turningRight=false;
		}
		if(angle==-10){
			turningRight=true;
		}
		
		if(dropFlag==1){
			//$('#bottleSoln,#bottleSoln2').stop(true);
			//$('#bottleSoln').css({height:initialheight+'px'},500);
			//$('#bottleSoln2').css({height:clipHInit+'px',top:clipTInit+'px'});	
		}
		

	}




