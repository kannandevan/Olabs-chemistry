// Created date : 26-09-2022.
// Office       : CREATE OLabs.
// Created At   : OLabs Research Center.
// ===========================
//    DO NOT EDIT THE CODE
// ===========================
// Have any error/issue while usnig this file Pls contact OLabs team.


var totalScore=0;
function QuizCoreExecuter(questionNo,question,op1,op2,op3,op4,answer,score,totalQuestion)
{
	// alert();
	// showArr += 1;
	// console.log(help,"MEENU")
	removeTrip();
	var questionStatus=0;
    //============ CREATING THE LAYOUT ==========
	$('.questionLayout').css({'display':'block'});
	var $divOne = $('<div></div>').attr({class:"questionLayout", id:"questionNumber"+questionNo });
	$("#mainDiv").append($divOne);
	var $divTwo = $('<div></div>').attr({class:"questionNumber" });
	$("#questionNumber"+questionNo).append($divTwo);
	var $divThree = $('<span></span>').attr({class:"questionNumberTestDesign"});
	$(".questionNumber").append($divThree);
	$(".questionNumberTestDesign").text(gt.gettext("Level ")+questionNo+"/"+totalQuestion);
	//span 2 of question number
	var $divFour = $('<span></span>').attr({class:"questionNumberScoreDesign"});
	$(".questionNumber").append($divFour);
	$(".questionNumberScoreDesign").text(gt.gettext("Score ")+totalScore+"/"+totalQuestion);
	//display question
	var $divFive = $('<div></div>').attr({class:"questionText" });
	$("#questionNumber"+questionNo).append($divFive);
	var $divsix = $('<span></span>').attr({class:"questionTextAlignment"});
	$(".questionText").append($divsix);
	$(".questionTextAlignment").html(question);
	var random=[];
    //============ ARRAY PUSHING ~> QUESTION 1 ==========
	if(op1!="null"){random.push(op1);}
    //============ ARRAY PUSHING ~> QUESTION 2 ==========
	if(op2!="null"){random.push(op2);}
    //============ ARRAY PUSHING ~> QUESTION 3 ==========
	if(op3!="null"){random.push(op3);}
    //============ ARRAY PUSHING ~> QUESTION 4 ==========
	if(op4!="null"){random.push(op4);}
	// console.log(random);
    //============ QUESTION RANDOM CREATER ==========
	// random.sort(function (){
	// 	return 0.5 - Math.random();
	// });
	var temp="";
    //============ QUESTION 1 OPTION CREATER ==========
	if(random[0])
	{
		var $divSeven = $('<div></div>').attr({class:"OptionOne", id:"choice"+questionNo+"1" });
		$("#questionNumber"+questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({class:'optionTestDesign', id:questionNo+"choice1" });
		$("#choice"+questionNo+"1").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({class:'optionNo'});
		$("#"+questionNo+"choice1").append($t2);
		$("#"+questionNo+"choice1").text("1. ");
		// inner 3
		var $t3 = $('<span></span>').attr({class:questionNo+"quesOption1"});
		$("#"+questionNo+"choice1").append($t3);
		$("."+questionNo+"quesOption1").text(random[0]);
	}
    //============ QUESTION 2 OPTION CREATER ==========
	if(random[1])
	{
		var $divSeven = $('<div></div>').attr({class:"OptionTwo", id:"choice"+questionNo+"2" });
		$("#questionNumber"+questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({class:'optionTestDesign', id:questionNo+"choice2" });
		$("#choice"+questionNo+"2").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({class:'optionNo'});
		$("#"+questionNo+"choice2").append($t2);
		$("#"+questionNo+"choice2").text("2. ");
		// inner 3
		var $t3 = $('<span></span>').attr({class:questionNo+"quesOption2"});
		$("#"+questionNo+"choice2").append($t3);
		$("."+questionNo+"quesOption2").text(random[1]);
	}
    //============ QUESTION 3 OPTION CREATER ==========
	if(random[2])
	{
		var $divSeven = $('<div></div>').attr({class:"OptionThree", id:"choice"+questionNo+"3" });
		$("#questionNumber"+questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({class:'optionTestDesign', id:questionNo+"choice3" });
		$("#choice"+questionNo+"3").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({class:'optionNo'});
		$("#"+questionNo+"choice3").append($t2);
		$("#"+questionNo+"choice3").text("3. ");
		// inner 3
		var $t3 = $('<span></span>').attr({class:questionNo+"quesOption3"});
		$("#"+questionNo+"choice3").append($t3);
		$("."+questionNo+"quesOption3").text(random[2]);
	}
    //============ QUESTION 4 OPTION CREATER ==========
	if(random[3])
	{
		var $divSeven = $('<div></div>').attr({class:"OptionFour", id:"choice"+questionNo+"4" });
		$("#questionNumber"+questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({class:'optionTestDesign', id:questionNo+"choice4" });
		$("#choice"+questionNo+"4").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({class:'optionNo'});
		$("#"+questionNo+"choice4").append($t2);
		$("#"+questionNo+"choice4").text("4. ");
		// inner 3
		var $t3 = $('<span></span>').attr({class:questionNo+"quesOption4"});
		$("#"+questionNo+"choice4").append($t3);
		$("."+questionNo+"quesOption4").text(random[3]);
	}
    //============ QUESTION 1 HANDLER ==========
	$("#choice"+questionNo+"1").click(function(){
		removeTrip();

		var answerData=$("."+questionNo+"quesOption1").html();
        //============ QUESTION 1 MATCH WITH ANSWER ==========
		if(answerData==answer)
		{
			if(questionStatus==0)
			{
				totalScore++;
				$(".questionNumberScoreDesign").text(gt.gettext("Score ")+totalScore+"/"+totalQuestion);
			}
			$("#choice"+questionNo+"2").css({'pointer-events':'none'});
			$("#choice"+questionNo+"3").css({'pointer-events':'none'});
			$("#choice"+questionNo+"4").css({'pointer-events':'none'});
				$("#choice"+questionNo+"1").css({'background-color':'rgb(2 248 2 / 35%)'})
				$("#choice"+questionNo+"2").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"3").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"4").css({'background-color':'rgba(0,0,0,0)'})
				// showArr += 1;

					setTimeout(function(){
						$("#questionNumber"+questionNo).remove();
						$("#DropboxTest,#ObjectLensDis,#LensScreenDis").prop('disabled',false)
						removeTrip();
						helpcount=0;
						$("#DropboxTest").prop('disabled',false)
						$(".sim-controls").css("display","block")
          				$(".sim-div").css({"width":"73%"})
					}, 1000);
		}
        //============ QUESTION 1 NOT MATCH WITH ANSWER ==========
		else
		{
			$("#choice"+questionNo+"1").css({'background-color':'rgb(244 67 54 / 49%)'});
			$("#choice"+questionNo+"2").css({'background-color':'rgba(0,0,0,0)'})
			$("#choice"+questionNo+"3").css({'background-color':'rgba(0,0,0,0)'})
			$("#choice"+questionNo+"4").css({'background-color':'rgba(0,0,0,0)'})
			questionStatus=1;
		}
	});
    //============ QUESTION 2 HANDLER ==========
	$("#choice"+questionNo+"2").click(function(){
		removeTrip();

		var answerData=$("."+questionNo+"quesOption2").html();
        //============ QUESTION 2 MATCH WITH ANSWER ==========
		if(answerData==answer)
		{
			if(questionStatus==0)
			{
				totalScore++;
				$(".questionNumberScoreDesign").text(gt.gettext("Score ")+totalScore+"/"+totalQuestion);
			}
			$("#choice"+questionNo+"1").css({'pointer-events':'none'});
			$("#choice"+questionNo+"3").css({'pointer-events':'none'});
			$("#choice"+questionNo+"4").css({'pointer-events':'none'});
				$("#choice"+questionNo+"2").css({'background-color':'rgb(2 248 2 / 35%)'})
				$("#choice"+questionNo+"1").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"3").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"4").css({'background-color':'rgba(0,0,0,0)'})
				// showArr += 1;

					setTimeout(function(){
						$("#DropboxTest,#ObjectLensDis,#LensScreenDis").prop('disabled',false)
						$("#questionNumber"+questionNo).remove();
						helpcount=0;
						$("#DropboxTest").prop('disabled',false)
						$(".sim-controls").css("display","block")
          				$(".sim-div").css({"width":"73%"})
					}, 1000);
				
		}
        //============ QUESTION 2 NOT MATCH WITH ANSWER ==========
		else
		{
			$("#choice"+questionNo+"2").css({'background-color':'rgb(244 67 54 / 49%)'});
			$("#choice"+questionNo+"1").css({'background-color':'rgba(0,0,0,0)'});
			$("#choice"+questionNo+"3").css({'background-color':'rgba(0,0,0,0)'});
			$("#choice"+questionNo+"4").css({'background-color':'rgba(0,0,0,0)'});
			questionStatus=1;
		}
	});
    //============ QUESTION 3 HANDLER ==========
	$("#choice"+questionNo+"3").click(function(){
		removeTrip();

		var answerData=$("."+questionNo+"quesOption3").html();
        //============ QUESTION 3 MATCH WITH ANSWER ==========
		if(answerData==answer)
		{
			if(questionStatus==0)
			{
				totalScore++;
				$(".questionNumberScoreDesign").text(gt.gettext("Score ")+totalScore+"/"+totalQuestion);
			}
			$("#choice"+questionNo+"1").css({'pointer-events':'none'});
			$("#choice"+questionNo+"2").css({'pointer-events':'none'});
			$("#choice"+questionNo+"4").css({'pointer-events':'none'});
				$("#choice"+questionNo+"3").css({'background-color':'rgb(2 248 2 / 35%)'})
				$("#choice"+questionNo+"1").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"2").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"4").css({'background-color':'rgba(0,0,0,0)'})
				// showArr += 1;

					setTimeout(function(){
						$("#DropboxTest,#ObjectLensDis,#LensScreenDis").prop('disabled',false)
						helpcount=0;
						$("#DropboxTest").prop('disabled',false)
						$("#questionNumber"+questionNo).remove();
						$(".sim-controls").css("display","block")
          				$(".sim-div").css({"width":"73%"})
					}, 1000);
			
		}
        //============ QUESTION 3 NOT MATCH WITH ANSWER ==========
		else
		{
			$("#choice"+questionNo+"3").css({'background-color':'rgb(244 67 54 / 49%)'});
			$("#choice"+questionNo+"1").css({'background-color':'rgba(0,0,0,0)'})
			$("#choice"+questionNo+"2").css({'background-color':'rgba(0,0,0,0)'})
			$("#choice"+questionNo+"4").css({'background-color':'rgba(0,0,0,0)'})
			questionStatus=1;
		}
	});
    //============ QUESTION 4 HANDLER ==========
	$("#choice"+questionNo+"4").click(function(){
		removeTrip();

		var answerData=$("."+questionNo+"quesOption4").html();
        //============ QUESTION 4 MATCH WITH ANSWER ==========
		if(answerData==answer)
		{
			if(questionStatus==0)
			{
				totalScore++;
				$(".questionNumberScoreDesign").text(gt.gettext("Score ")+totalScore+"/"+totalQuestion);
			}
			$("#choice"+questionNo+"1").css({'pointer-events':'none'});
			$("#choice"+questionNo+"2").css({'pointer-events':'none'});
			$("#choice"+questionNo+"3").css({'pointer-events':'none'});
				$("#choice"+questionNo+"4").css({'background-color':'rgb(2 248 2 / 35%)'})
				$("#choice"+questionNo+"1").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"2").css({'background-color':'rgba(0,0,0,0)'})
				$("#choice"+questionNo+"3").css({'background-color':'rgba(0,0,0,0)'})
				// showArr += 1;

					setTimeout(function(){
						$("#DropboxTest,#ObjectLensDis,#LensScreenDis").prop('disabled',false)
						helpcount=0;
						$("#DropboxTest").prop('disabled',false)
						$("#questionNumber"+questionNo).remove();
						$(".sim-controls").css("display","block")
          				$(".sim-div").css({"width":"73%"})
					}, 1000);
		}
        //============ QUESTION 4 NOT MATCH WITH ANSWER ==========
		else
		{
			$("#choice"+questionNo+"4").css({'background-color':'rgb(244 67 54 / 49%)'});
			$("#choice"+questionNo+"1").css({'background-color':'rgba(0,0,0,0)'})
			$("#choice"+questionNo+"2").css({'background-color':'rgba(0,0,0,0)'})
			$("#choice"+questionNo+"3").css({'background-color':'rgba(0,0,0,0)'})
			questionStatus=1;
		}
	});
}
