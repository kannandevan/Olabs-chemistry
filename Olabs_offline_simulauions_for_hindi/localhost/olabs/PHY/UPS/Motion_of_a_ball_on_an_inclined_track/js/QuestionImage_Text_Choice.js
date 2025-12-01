var scoreVariable = 0;
// Question display status
var QuestionDisplayStatus = false;
//  Question sequence status
var QuestionCompletedStatus = false;
class Questions{
    scoreVariable = 0;
    attempt_status = 0;
    constructor(QuestionDetials)
    {
        this.QuestionNo = QuestionDetials[0];
        this.Question = QuestionDetials[1];
        this.QuestionOptions = QuestionDetials[2];
        this.QuestionCorrectAnswer = QuestionDetials[3];
        this.QuestionsTotalCount = QuestionDetials[4];
        this.QuestionLayout = QuestionDetials[5];
        this.QuestionHelpVariable = QuestionDetials[6];
        this.QuestionImage =  QuestionDetials[7];
    }
}
function QuestionContinues_Call(SequanceOfData)
{
    if(SequanceOfData.length == 0)
    {
        if(ttttt==0)
        {
            helpMsgCount = 17
            $("#next_btn").show();
            ttttt=1;
        }
        else if((ttttt == 1)&&(ttttt2 == 0))
        {
            // alert("Hi")
            ttttt2=1
        }
        
        return;
    }
    var n = [SequanceOfData[0]]
    QuestionCompletedStatus = false;
    QuizCoreExecuter2_1_1(n);
    var clear = setInterval(function()
    {
        if(QuestionCompletedStatus)
        {
            clearInterval(clear)
            setTimeout(function(){
                QuestionContinues_Call(SequanceOfData.slice(1, SequanceOfData.length));
            },500)
        }
    })
}
function QuizCoreExecuter2_1_1(questionArray)
{
    removeTrip()
    QuestionDisplayStatus = true;
    // if(questionArray.length == 1)
    // {
        switch(questionArray[0].QuestionLayout)
        {
            case 1:
                // alert("match TT");
                var text = [];
                for(var lengthOfQuestion = 0;lengthOfQuestion<questionArray[0].QuestionOptions.length;lengthOfQuestion++)
                {
                    text.push(  '<tr>'+
                                '<td class="borderRadius white fontAndBackground borderTopBottom rowpaddingleft" id="'+(lengthOfQuestion+1)+'">'+
                                    ''+questionArray[0].QuestionOptions[lengthOfQuestion]+''+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>');
                }
                text.sort(function (){    //random function of solution
                    return 0.5 - Math.random();
                });
                var templateTemp = 
                    '<div class="QuestionDisplayMainDiv">'+
                        '<table style="width: 100%;">'+
                            '<tr>'+
                                '<td class="borderRadiustwo QuestionHeading">'+
                                    '<empty class="QuestionNumber">Question: '+questionArray[0].QuestionNo+'/'+questionArray[0].QuestionsTotalCount+'</empty><empty class="QuestionScore">Score: <empty id="score_live">'+scoreVariable+'</empty>/'+questionArray[0].QuestionsTotalCount+'</empty>'+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr class="borderTop">'+
                                '<td class="borderRadius white fontAndBackground1 borderTop">'+
                                    'Q'+questionArray[0].QuestionNo+'. '+questionArray[0].Question+''+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            text.join("")+
                        '</table>'+
                    '</div>';
                $("#mainDiv").append(templateTemp);
                break;
            case 2:
                // alert("match TI");
                var text = [];
                for(var lengthOfQuestion = 0;lengthOfQuestion<questionArray[0].QuestionOptions.length;lengthOfQuestion++)
                {
                    text.push(  '<tr>'+
                                '<td class="borderRadius white fontAndBackground borderTopBottom rowpaddingleft" id="'+(lengthOfQuestion+1)+'">'+
                                    ''+questionArray[0].QuestionOptions[lengthOfQuestion]+''+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>');
                }
                text.sort(function (){    //random function of solution
                    return 0.5 - Math.random();
                });
                var templateTemp = 
                    '<div class="QuestionDisplayMainDiv">'+
                        '<table style="width: 100%;">'+
                            '<tr>'+
                                '<td class="borderRadiustwo QuestionHeading">'+
                                    '<empty class="QuestionNumber">Question: '+questionArray[0].QuestionNo+'/'+questionArray[0].QuestionsTotalCount+'</empty><empty class="QuestionScore">Score: <empty id="score_live">'+scoreVariable+'</empty>/'+questionArray[0].QuestionsTotalCount+'</empty>'+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr class="borderTop">'+
                                '<td class="borderRadius white fontAndBackground1 borderTop">'+
                                    '<table style="width: 100%;">'+
                                        '<tr>'+
                                            '<td style="width: 70%;">Q'+questionArray[0].QuestionNo+'. '+questionArray[0].Question+'</td>'+
                                            '<td style="border: solid 1px white; border-radius: 4px;">'+
                                                '<center><img style="width: '+questionArray[0].QuestionImage[0][1]+'%;" src="'+simPath+questionArray[0].QuestionImage[0][0]+'"/></center>'+
                                            '</td>'+
                                        '</tr>'+
                                    '</table>'+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            text.join("")+
                        '</table>'+
                    '</div>';
                $("#mainDiv").append(templateTemp);
                break;
            case 3:
                // alert("match IT");
                var text = [];
                var textFinal = [];
                var intermediate = "";
                for(var lengthOfQuestion = 0;lengthOfQuestion<questionArray[0].QuestionOptions.length;lengthOfQuestion++)
                {

                    text.push(  '<td class="borderRadius white fontAndBackground borderTopBottom rowpaddingleft centerClass" id="'+(lengthOfQuestion+1)+'">'+
                                    '<img id="" style="width:'+questionArray[0].QuestionImage[lengthOfQuestion+1]+'%;" src="'+simPath+(questionArray[0].QuestionOptions[lengthOfQuestion])+'"/>'+
                                '</td>');
                }
                text.sort(function (){    //random function of solution
                    return 0.5 - Math.random();
                });
                if(questionArray[0].QuestionOptions.length%2 == 0)
                {
                    for(var lengthOfQuestion = 0;lengthOfQuestion<text.length;)
                    {
                        textFinal.push(
                            '<table style="table-layout: fixed;width: 100%;">'+
                                '<tr>'+
                                    text[lengthOfQuestion]+text[lengthOfQuestion+1]+
                                '</tr>'+ 
                            '</table>'
                        );
                        lengthOfQuestion++;
                        lengthOfQuestion++;
                    }
                }
                else
                {
                    for(var lengthOfQuestion = 0;lengthOfQuestion<text.length-1;(lengthOfQuestion++))
                    {
                        textFinal.push(
                            '<table style="width: 100%;">'+
                                '<tr>'+
                                    text[lengthOfQuestion]+text[lengthOfQuestion+1]+
                                '</tr>'+ 
                            '</table>'
                        );
                        lengthOfQuestion++
                    }
                    textFinal.push(
                        '<table style="width: 100%;">'+
                            '<tr>'+
                                text[text.length-1]+'<td></td>'+
                            '</tr>'+ 
                        '</table>'
                    );
                }
                var templateTemp = 
                    '<div class="QuestionDisplayMainDiv">'+
                        '<table style="width: 100%;">'+
                            '<tr>'+
                                '<td class="borderRadiustwo QuestionHeading">'+
                                    '<empty class="QuestionNumber">Question: '+questionArray[0].QuestionNo+'/'+questionArray[0].QuestionsTotalCount+'</empty><empty class="QuestionScore">Score: <empty id="score_live">'+scoreVariable+'</empty>/'+questionArray[0].QuestionsTotalCount+'</empty>'+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr class="borderTop">'+
                                '<td class="borderRadius white fontAndBackground1 borderTop">'+
                                    '<table style="width: 100%;">'+
                                        '<tr>'+
                                            '<td style="width: 70%;">Q'+questionArray[0].QuestionNo+'. '+questionArray[0].Question+'</td>'+
                                            '<td style="border: solid 1px white; border-radius: 4px;">'+
                                                '<center><img style="width: '+questionArray[0].QuestionImage[0][1]+'%;" src="'+simPath+questionArray[0].QuestionImage[0][0]+'"/></center>'+
                                            '</td>'+
                                        '</tr>'+
                                    '</table>'+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            textFinal.join("")+
                        '</table>'+
                    '</div>';
                $("#mainDiv").append(templateTemp);
                break;
            case 4:
                // alert("match II");
                var text = [];
                var textFinal = [];
                var intermediate = "";
                for(var lengthOfQuestion = 0;lengthOfQuestion<questionArray[0].QuestionOptions.length;lengthOfQuestion++)
                {

                    text.push(  '<td class="borderRadius white fontAndBackground borderTopBottom rowpaddingleft centerClass" id="'+(lengthOfQuestion+1)+'">'+
                                    '<img id="" style="width:'+questionArray[0].QuestionImage[lengthOfQuestion+1]+'%;" src="'+simPath+(questionArray[0].QuestionOptions[lengthOfQuestion])+'"/>'+
                                '</td>');
                }
                text.sort(function (){    //random function of solution
                    return 0.5 - Math.random();
                });
                if(questionArray[0].QuestionOptions.length%2 == 0)
                {
                    for(var lengthOfQuestion = 0;lengthOfQuestion<text.length;(lengthOfQuestion++))
                    {
                        textFinal.push(
                            '<table style="table-layout: fixed;width: 100%;">'+
                                '<tr>'+
                                    text[lengthOfQuestion]+text[lengthOfQuestion+1]+
                                '</tr>'+ 
                            '</table>'
                        );
                        lengthOfQuestion++
                    }
                }
                else
                {
                    for(var lengthOfQuestion = 0;lengthOfQuestion<text.length-1;(lengthOfQuestion++))
                    {
                        textFinal.push(
                            '<table style="width: 100%;">'+
                                '<tr>'+
                                    text[lengthOfQuestion]+text[lengthOfQuestion+1]+
                                '</tr>'+ 
                            '</table>'
                        );
                        lengthOfQuestion++
                    }
                    textFinal.push(
                        '<table style="width: 100%;">'+
                            '<tr>'+
                                text[text.length-1]+'<td></td>'+
                            '</tr>'+ 
                        '</table>'
                    );
                }
                var templateTemp = 
                    '<div class="QuestionDisplayMainDiv">'+
                        '<table style="width: 100%;">'+
                            '<tr>'+
                                '<td class="borderRadiustwo QuestionHeading">'+
                                    '<empty class="QuestionNumber">Question: '+questionArray[0].QuestionNo+'/'+questionArray[0].QuestionsTotalCount+'</empty><empty class="QuestionScore">Score: <empty id="score_live">'+scoreVariable+'</empty>/'+questionArray[0].QuestionsTotalCount+'</empty>'+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            '<tr class="borderTop">'+
                                '<td class="borderRadius white fontAndBackground1 borderTop">'+
                                    'Q'+questionArray[0].QuestionNo+'. '+questionArray[0].Question+''+
                                '</td>'+
                            '</tr>'+
                            '<tr><td></td></tr>'+
                            '<tr><td></td></tr>'+
                            textFinal.join("")+
                        '</table>'+
                    '</div>';
                $("#mainDiv").append(templateTemp);
                break;
            default:
                // alert("no match")
        }
    // }
    $('.QuestionDisplayMainDiv').on('click', function (event) {
        removeTrip();
        if (event.target != this) {
          console.log(event.target.id);
          if(event.target.id)
          {
            // alert(!Number.isNaN(event.target.id))
            if(questionArray[0].QuestionCorrectAnswer == event.target.id)
            {
                if(questionArray[0].attempt_status == 0)
                {
                    questionArray[0].attempt_status = 1;
                    questionArray[0].scoreVariable++;
                    $("#score_live").html(scoreVariable+questionArray[0].scoreVariable)
                    scoreVariable++;
                }
                event.target.style.backgroundColor = "rgb(76 175 80 / 66%)";
                $('.QuestionDisplayMainDiv').off('click');
                setTimeout(function(){
                    $(".QuestionDisplayMainDiv").remove();
                    QuestionDisplayStatus = false;
                    QuestionCompletedStatus = true;
                },2000);
            }
            else
            {
                if(questionArray[0].attempt_status == 0)
                {
                    questionArray[0].attempt_status = -1;
                }
                var time_value = 1;
                var time_intervel = setInterval(function(){
                    event.target.style.backgroundColor = "rgb(175 76 76 / "+time_value+"%)";
                    if((time_value) == 66)
                    {
                        clearInterval(time_intervel);
                        setTimeout(function(){
                            event.target.style.backgroundColor = "";
                        },1500);
                    }
                    else
                    {
                        time_value++;
                    }
                },2)
                
            }
          }
        } else {
        //   alert(event.target);
        }
    });
}