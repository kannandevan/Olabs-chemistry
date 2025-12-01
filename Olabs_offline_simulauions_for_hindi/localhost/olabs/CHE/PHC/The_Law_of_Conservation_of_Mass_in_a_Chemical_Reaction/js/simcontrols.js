
var gt=$;

// window.onload=function(){
var inferenceMsg;


// Array declaration



// }
var n=0;
var cnt=0;

//Onloading function..
$(document).ready(function() {
						 
inferenceMsg=[gt.gettext("Click on the measuring cylinder containing sodium sulphate solution to pour it into the conical flask."),gt.gettext("Click on the measuring cylinder containing barium chloride solution to pour it into the 10 ml test tube."),gt.gettext("Click on the thread to tie the test tube with it."),gt.gettext("Click on the test tube to hang it in the conical flask."),gt.gettext("Click on the conical flask to place it on the balance and weigh it with all the contents and note the reading."),gt.gettext("Click on the information icon to view the  inference."),gt.gettext("Sodium sulphate solution reacts with barium chloride solution to form a white precipitate of barium sulphate and an aqueous solution of sodium chloride."),gt.gettext("Since the mass of the total apparatus remains the same before and after the reaction, the total mass of the reactants = the total mass of the products. Hence the law of conservation of mass is verified."),gt.gettext("Click on the 'NEXT STEP' button to redirect the next step"),gt.gettext("Click on the conical flask to tilt and swirl it to mix both the solutions."),gt.gettext("Click on the conical flask to weigh it again an note the reading."),gt.gettext("Wait for ten minutes to complete the reaction.")];

	$("#thread_text").html(gt.gettext("Thread"));
	$("#sodiumSulpht_Text").html(gt.gettext("Sodium Sulphate 5ml"));
	$("#bariumChlrd_text").html(gt.gettext("Barium Chloride 5ml"));
	$("#next_text").html(gt.gettext("NEXT STEP"));
	$("#timeText").html(gt.gettext("10 min"));
	$("#expName").html(gt.gettext("The Law of Conservation of Mass in a Chemical Reaction"));
	$('#reset').attr('value',gt.gettext("Reset"));	
	$("#changeMSG").html(inferenceMsg[0]);
	$("#cntrlHead").html(gt.gettext("Instructions"));

	$("#clickObjAnim1").qtip({
					content:inferenceMsg[0],
					position: { 
							
								my: 'bottom left',
								at: 'top center'
							},
					// style: {
							// width: 180,
							// padding: 2,
							// background: '#FFFF99',
							// color: 'black',
							// textAlign: 'center','font-size':14,
							// border: {width: 1,radius: 5,color: '#FFFFCC'},
							// ///*tip: 'bottomMiddle'*/
							// }
							style: {classes: 'qtip-bootstrap'}
							});
	$("#clickObjAnim1").trigger("mouseover");
	
});

// Function defines to play corresponding animations 
function playAnimation(){
	n++;cnt++;
		//document.getElementById("reset").style.height=24+"px";
	document.getElementById("animLoad").innerHTML = "";		
	var stage;
	if(n==1){//play animation to pouring sodium sulphate solution into conical flask.
		$('#clickObjAnim1').qtip('hide');
		  var stage = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject1);
	}else if(n==2){//play animation to pouring barium chloridee solution into the test tube.
		$('#clickObjAnim2').qtip('hide');
		  var stage = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject2);
	}else if(n==3){//play animation to tie the test tube using thread.
		$('#clickObjAnim3').qtip('hide');
		 var stage = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject3);
	}else if(n==4){//play animation to hang the test tube in the conical flask and put a cork on the mouth of the flask.

		$('#clickObjAnim4').qtip('hide');
		document.getElementById("label_one").style.visibility = "hidden";
		document.getElementById("label_two").style.visibility = "hidden";
		document.getElementById("label_three").style.visibility = "hidden";
		document.getElementById("thread_text").style.visibility = "hidden";
		document.getElementById("sodiumSulpht_Text").style.visibility = "hidden";
		document.getElementById("bariumChlrd_text").style.visibility = "hidden";

		 var stage = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject4);
	}else if(n==5){//play animation to weigh the contents of the conical flask.
		$('#clickObjAnim5').qtip('hide');
	  var stage = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject5);
	}else if(n==6){//play animation to tilt and swirl the conical flask and  weigh the contents.
		$('#clickObjAnim6').qtip('hide');
		  var stage= new swiffy.Stage(document.getElementById('animLoad'),swiffyobject6);
		  setTimeout(function(){ 

					document.getElementById("timeText").style.visibility = "visible";
					document.getElementById("clockLabel").style.visibility = "visible";
		   },6450);

		  setTimeout(function(){ 

			document.getElementById("timeText").style.visibility = "hidden";
		 document.getElementById("clockLabel").style.visibility = "hidden";
		   },11200);


	}else if(n==7){//play animation to white precipitate settles down in the conical flask.
		// document.getElementById("timeText").style.visibility = "hidden";
		// document.getElementById("clockLabel").style.visibility = "hidden";
		$('#clickObjAnim7').qtip('hide');
		  var stage= new swiffy.Stage(document.getElementById('animLoad'),swiffyobject7);

	}
	
	stage.start();	
	if(n==1){
		document.getElementById("clickObjAnim1").style.visibility = "hidden";
	}
	if(n==2){
		document.getElementById("clickObjAnim2").style.visibility = "hidden";
	}
	if(n==3){
		document.getElementById("clickObjAnim3").style.visibility = "hidden";
	}if(n==4){
		document.getElementById("clickObjAnim4").style.visibility = "hidden";
	}
	if(n==5){
		document.getElementById("clickObjAnim5").style.visibility = "hidden";
	}
	if(n==6){
		document.getElementById("clickObjAnim6").style.visibility = "hidden";
	}if(n==7){
		document.getElementById("clickObjAnim7").style.visibility = "hidden";
	}
	document.getElementById("animLoad").style.visibility = "visible";
	document.getElementById('inference').style.visibility='hidden';
	document.getElementById("stillSetUp").style.visibility = "hidden";
	document.getElementById("anim3Still").style.visibility = "hidden";
}
//Function called on completion of  animations..
function completeAnimation(num){
	
	if(num==1){// After completed the animation pouring sodium sulphate solution into conical flask
		document.getElementById("changeMSG").innerHTML=inferenceMsg[1];	
		document.getElementById('clickObjAnim2').style.visibility='visible';
		$("#clickObjAnim2").qtip({content: inferenceMsg[1],	position: { my: 'bottom center',at: 'top center'},style: {classes: 'qtip-bootstrap'}});
		$("#clickObjAnim2").trigger("mouseover");

	}else if(num==2){// After completed the animation pouring barium chloride solution into conical flask
		document.getElementById('clickObjAnim3').style.visibility='visible';
		document.getElementById("changeMSG").innerHTML=inferenceMsg[2];	
		$("#clickObjAnim3").qtip({content: inferenceMsg[2],position: { my: 'bottom left',at: 'top center'},style: {classes: 'qtip-bootstrap'}});
		$("#clickObjAnim3").trigger("mouseover");
	}else if(num==3){// After completed the animation to tie the test tube using thread.
		
		document.getElementById("step2").style.visibility='visible';
		document.getElementById("next_text").style.visibility='visible';
		document.getElementById("changeMSG").innerHTML=inferenceMsg[8];	

				
	}else if(num==4){// After completed the animation to hang the test tube in the conical flask and put a cork on the mouth of the flask.
		document.getElementById('clickObjAnim5').style.visibility='visible';
		document.getElementById("changeMSG").innerHTML=inferenceMsg[4];
		$("#clickObjAnim5").qtip({content: inferenceMsg[4],position: { my: 'bottom left',at: 'top right'},style: {classes: 'qtip-bootstrap'}});
		$("#clickObjAnim5").trigger("mouseover");
		
	}else if(num==5){// After completed the animation to weigh the contents of the conical flask.
		document.getElementById('clickObjAnim6').style.visibility='visible';
		document.getElementById("changeMSG").innerHTML=inferenceMsg[9];
		$("#clickObjAnim6").qtip({content: inferenceMsg[9],position: { my: 'bottom center',at: 'top center'},style: {classes: 'qtip-bootstrap'}});
		$("#clickObjAnim6").trigger("mouseover");
		$('#inference').qtip({content: inferenceMsg[5],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomLeft',tooltip: 'topLeft'} }});		

	}else if(num==6){// After completed the animation to tilt and swirl the conical flask and  weigh the contents.
		
		document.getElementById("changeMSG").innerHTML=inferenceMsg[5];
		document.getElementById('inference').style.visibility='visible';
		
	}else if(num==7){// After completed the animation to tilt and swirl the conical flask and  weigh the contents.
	$('#inference').qtip({content: inferenceMsg[5],style: {classes: 'qtip-bootstrap'},position: { my: 'bottom left',at: 'center right'}});
		document.getElementById("changeMSG").innerHTML=inferenceMsg[5];
		document.getElementById('inference').style.visibility='visible';
		
	}
	
}
//function defines to show inference 
function showIcon(){console.log("called");
	$('#inference').qtip('hide');
	$('#inference').qtip("destroy");
	document.getElementById("infrmiconClick").style.visibility="visible";
	if(cnt==6){ //show inference 'white precipitate of barium sulphate (BaSO4) and an aqueous solution of sodium chloride (NaCl)formed'.
		document.getElementById("tooltpMSG").innerHTML=inferenceMsg[6];	
		document.getElementById("changeMSG").innerHTML=inferenceMsg[10];
		document.getElementById('clickObjAnim7').style.visibility='visible';
		$("#clickObjAnim7").qtip({content: inferenceMsg[10],position: { my: 'bottom left',at: 'center right'},style: {classes: 'qtip-bootstrap'}});
		$("#clickObjAnim7").trigger("mouseover");
	}else if(cnt==7){//show inference 'The Law of Conservation of Mass is verified'.
	
		document.getElementById("imgTool").style.height=30+"%";
		document.getElementById("tooltpMSG").innerHTML=inferenceMsg[7];
		
	}
}
function clockMsg(){
	document.getElementById("changeMSG").innerHTML=inferenceMsg[11];
}
// Function defines to hide tooltip
function removetooltip(){	
	document.getElementById("infrmiconClick").style.visibility="hidden";
}
// Function defines to next step
function nextStep(){
	document.getElementById("animLoad").style.visibility = "hidden";
	document.getElementById("clickObjAnim4").style.visibility = "visible";
	document.getElementById("step2").style.visibility='hidden';
	document.getElementById("next_text").style.visibility='hidden';
	document.getElementById("anim3Still").style.visibility = "visible";
	document.getElementById("changeMSG").innerHTML=inferenceMsg[3];	
	$("#clickObjAnim4").qtip({content: inferenceMsg[3],position: { my: 'bottom right',at: 'top left'},style: {classes: 'qtip-bootstrap'}});
	$("#clickObjAnim4").trigger("mouseover");
}
