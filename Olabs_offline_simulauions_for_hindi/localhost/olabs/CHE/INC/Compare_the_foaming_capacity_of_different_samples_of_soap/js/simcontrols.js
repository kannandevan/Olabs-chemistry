// added by sibin
// also used for help and re-create the click functions : prevent variable
var tempForDragAndDrop = 0;
var tempForDragAndDropHelp = 0;
var newTaskVariable = 0;
var Inference_flag = 0;
// end
var s1 = 0, s2 = 0, s3 = 0, s4 = 0;
var soap2, soap3, soap4;
var temp, temp2, temp3, temp4;//for filter paper drag
var tempforsecondturn, tempforsecondturn2, tempforsecondturn3, tempforsecondturn4;
var temp2forfilter_paperdrag;
var tempforroad;
var task1 = 0, task2 = 0, task3 = 0, task4 = 0;
var animatecor = 0;

var displayArray = ["block", "none"];
var f1 = 0, f2 = 0, f3 = 0, f4 = 0;
var sol1, sol2, sol3, sol4;
var tempforsolution1 = 0, tempforsolution2 = 0, tempforsolution3 = 0, tempforsolution4 = 0;
var tube1, tube2, tube3, tube4;
var infovariable = 0;//for help
var helpMsg, inferenceMsg, helpCount = 0, helpCount1 = 0, helpCount2 = 0;
$(document).ready(function () {

    gt = new Gettext({ 'domain': 'messages' });

   $("#expName").html(gt.gettext("Compare the foaming capacity of different samples of soap"))

    $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));

    inferenceMsg = [gt.gettext("The different samples have different foaming <br>capacity and the soap with highest foaming <br>capacity have high cleansing capacity.")]
    
    helpMsg = [gt.gettext("Click on the soap to select"),
    
        gt.gettext("Drag and drop the filter paper to the weighing balance"),
    gt.gettext("Click on the tare button"),
    gt.gettext("Drag and drop the soap to the weighing balance"),
    gt.gettext("Drag and drop the soap into the beaker"),
    gt.gettext("Click on the rod for mixing soap into the water"),
    gt.gettext("Click on the soap solution to select"),
    gt.gettext("Drag and drop the filler into the beaker"),
    gt.gettext("Drag and drop the dropper into the test tube"),
    gt.gettext("Drag the testube and drop it into the visible area"),
    gt.gettext("Click the testube and<br> measure the height of the foam"),
    gt.gettext("Click on the Reset button to <br> do the experiment again"),
    gt.gettext("Click on the Next button to <br> go to next screen"

    )];
    // gt.gettext("Drag and drop each testube towards the right"),
   
     $('[data-translate]').html(function (index, originalHtml) {
        console.log(originalHtml);
        return gt.gettext(originalHtml);
  });

	$('[data-translate-value]').val(function (index, originalHtml) {
		console.log(originalHtml)
		return gt.gettext(originalHtml);
	});
   
   
    $("#soap1incan").hide();
    $("#soap2incan").hide();
    $("#soap3incan").hide();
    $("#soap4incan").hide();

    $('#sdis1').html('Soap A');
    $('#sdis2').html('Soap B');
    $('#sdis3').html('Soap C');
    $('#sdis4').html('Soap D');

    $("#controls2").hide();
    infovariable = 1;
    $("#testtubeStandTop,#testtubeStandUnder,#testtubeADiv,#testtubeB").hide();
    $("#testtubeC,#testtubeD,#beaker2,#waterInBeaker").hide();
    $("#bottle,#dropperWrapper,#bottleWater,#dropperStandUnder").hide();
    $("#dropperStandTop,#dropAreaBeakerA,#dropAreaBeakerB,#dropAreaBeakerC").hide();
    $("#dropAreaBeakerD,#dropperDiv,#drop,#drop5ml").hide();
    $("#dropAreaTesttube1,#dropAreafillertube1").hide();


    $('#Measuring_Jar_reading').html('0.0');
    $("#waterAnimDiv").hide();
    $("#filter_paper_drop_area_for_soap1").hide();
    $("#filter_paper_drop_area_for_soap2").hide();
    $("#filter_paper_drop_area_for_soap3").hide();
    $("#filter_paper_drop_area_for_soap4").hide();
    $('#reset').click(function () {
        location.reload();
    });
    $("#soap1").click(function () {
        helpCount = 1
        removeTrip();
        animatecor = 1;
        $("#Measuring_Jar_icon1").show();
        $("#filter_paper").draggable({ disabled: false, cursor: "pointer" });


        $("#filter_paper_drop_area_for_soap1").show();
        $("#soap1incan").show();
        $("#soap1").css({ 'pointer-events': "none" });
        $("#soap2").css({ 'pointer-events': "none" });
        $("#soap3").css({ 'pointer-events': "none" });
        $("#soap4").css({ 'pointer-events': "none" });
        $("#soap2,#soap3,#soap4").css({
            opacity: 0.6
        }, 1000);
        $(function () {
            $("#filter_paper").draggable({

                revert: function () {
                    if (!temp) { return true }
                },
                drag: function () {
                    removeTrip();
                }
            });
            $("#filter_paper_drop_area_for_soap1").droppable({
                accept: "#filter_paper",
                drop: function () {
                    temp = true;
                    helpCount = 2
                    $("#filter_paper").animate({
                        top: 57 + "%", left: 76 + "%", width: 11 + "%"
                    }, 100);
                    //Measuring_Jar_reading-------------------- 0.0 ---------- to 0.6 ------------
                    $("#Measuring_Jar_reading").empty()
                    $('#Measuring_Jar_reading').html('0.6g');
                    //----------------------------------------------------------------------------
                    //soap 1 draggable code---------------------------------------
                    $("#Measuring_Jar_icon1").css({ 'pointer-events': "unset" });
                    $("#Measuring_Jar_icon1").click(function () {
                        helpCount = 3
                        removeTrip();
                        //Measuring_Jar_reading-------------------- 0.0
                        $("#Measuring_Jar_reading").empty();
                        $("#Measuring_Jar_icon1").css({ 'pointer-events': "none" });
                        $('#Measuring_Jar_reading').html('0.0');
                        $("#soap1incan").draggable({
                            revert: function () {
                                if (!temp2forfilter_paperdrag) { return true }
                            },
                            drag: function () {
                                removeTrip();
                            }
                        });
                        $("#filter_paper_drop_area_for_soap1").droppable({
                            accept: "#soap1incan",
                            drop: function () {
                                helpCount = 4;
                                temp2forfilter_paperdrag = true;
                                $("#soap1incan").css({
                                    top: 52 + "%", left: 78 + "%"
                                }, 100);
                                //Measuring_Jar_reading-------------------- 0.0 -------- placing soap
                                $("#Measuring_Jar_reading").empty()
                                $('#Measuring_Jar_reading').html('1.0g');
                                $("#filter_paper_drop_area_for_soap1").hide();
                                $("#soap1incan").draggable({
                                    revert: function () {
                                        if (!tempforsecondturn) {
                                            $("#soap1incan").animate({
                                                top: 52 + "%", left: 78 + "%"
                                            }, 100); $('#Measuring_Jar_reading').html('1.0g');
                                        }
                                    },

                                    drag: function () {
                                        removeTrip();
                                    }
                                });

                                $("#soap1incan").on("drag", function () { $('#Measuring_Jar_reading').html('0.0'); });
                                $("#div_for_soap1_beaker_drop").show();
                                $("#div_for_soap1_beaker_drop").droppable({
                                    accept: "#soap1incan",
                                    drop: function () {
                                        $("#soap1incan").css({ 'z-index': '1' });
                                        helpCount = 5;
                                        tempforsecondturn = true;
                                        $("#filter_paper").animate({
                                            top: 83 + "%", left: 8 + "%"
                                        }, 1000);
                                        $("#Measuring_Jar_reading").empty();
                                        $('#Measuring_Jar_reading').html('0.0');
                                        $("#soap1incan").css({
                                            top: 40 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#div_for_soap1_beaker_drop").hide();
                                        $("#soap1incan").animate({
                                            top: 72 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#soap1incan").draggable({ disabled: true });
                                        $("#rod").css({ 'pointer-events': "unset" })
                                        //road rotate-----------------
                                        $("#rod").click(function () {
                                            helpCount = 6;
                                            removeTrip();
                                            $("#rod").css({ 'pointer-events': "none" })
                                            console.log("rod-1");
                                            $("#soap1incan").fadeOut(12000);
                                            $("#first_water").hide();
                                            $("#waterAnimDiv").show();
                                            //===============================================================================================================
                                            if (animatecor == 1) {
                                                animatecor = 0;
                                                $('#rod').animate(
                                                    { deg: 0 },
                                                    {
                                                        duration: 1200,
                                                        step: function (now) {
                                                            $(this).css({ transform: 'rotate(' + now + 'deg)', top: 38 + "%", left: 44 + "%" });
                                                        }
                                                    });
                                                var setin = setInterval(wateranimate, 100);
                                                var setinterGlassrod = setInterval(roadanimate, 1000);
                                                setTimeout(function () {
                                                    clearInterval(setinterGlassrod);
                                                }, 4000);
                                                setTimeout(function () {
                                                    clearInterval(setin);
                                                    $("#waterAnimDiv").hide();
                                                    $("#first_water").show();
                                                    //final_step to release the control from task 1
                                                    task1 = 1;
                                                    f1 = 1;
                                                    if (task1 == 1) { $("#soap1").css({ 'pointer-events': "none" }); $("#soap1").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap1").css({ 'pointer-events': "unset" }); $("#soap1").css({ opacity: 1 }, 1000); }
                                                    if (task2 == 1) { $("#soap2").css({ 'pointer-events': "none" }); $("#soap2").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap2").css({ 'pointer-events': "unset" }); $("#soap2").css({ opacity: 1 }, 1000); }
                                                    if (task3 == 1) { $("#soap3").css({ 'pointer-events': "none" }); $("#soap3").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap3").css({ 'pointer-events': "unset" }); $("#soap3").css({ opacity: 1 }, 1000); }
                                                    if (task4 == 1) { $("#soap4").css({ 'pointer-events': "none" }); $("#soap4").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap4").css({ 'pointer-events': "unset" }); $("#soap4").css({ opacity: 1 }, 1000); }
                                                }, 9000);
                                                setTimeout(rodrev, 5000);
                                                

                                            }
                                        });
                                    }
                                });
                                $("#filter_paper").draggable({ disabled: true });
                            }
                        });
                    })
                }
            });
        });
    });
    //22222222222222222222222222222222222222222222222222222222222222222222222222222
    $("#soap2").click(function () {
        helpCount = 1
        removeTrip();
        animatecor = 2;
        $("#filter_paper").draggable({ disabled: false });
        $("#soap2incan").show();
        $("#Measuring_Jar_icon1").show();
        $("#rod").show();
        $("#filter_paper_drop_area_for_soap2").show();
        $("#soap1").css({ 'pointer-events': "none" });
        $("#soap2").css({ 'pointer-events': "none" });
        $("#soap3").css({ 'pointer-events': "none" });
        $("#soap4").css({ 'pointer-events': "none" });
        $("#soap1,#soap3,#soap4").css({
            opacity: 0.6
        }, 1000);
        $(function () {
            $("#filter_paper").draggable({
                revert: function () {
                    if (!temp2) { return true }
                },
                drag: function () {
                    removeTrip();
                }
            });
            $("#filter_paper_drop_area_for_soap2").droppable({
                accept: "#filter_paper",
                drop: function () {
                    temp2 = true;
                    helpCount = 2
                    $("#filter_paper").animate({
                        top: 57 + "%", left: 76 + "%", width: 11 + "%"
                    }, 100);
                    //Measuring_Jar_reading-------------------- 0.0 ---------- to 0.6 ------------
                    $("#Measuring_Jar_reading").empty()
                    $('#Measuring_Jar_reading').html('0.6g');
                    //----------------------------------------------------------------------------
                    //soap 1 draggable code---------------------------------------
                    $("#Measuring_Jar_icon1").css({ 'pointer-events': "unset" });
                    $("#Measuring_Jar_icon1").click(function () {
                        helpCount = 3
                        removeTrip();
                        //Measuring_Jar_reading-------------------- 0.0
                        $("#Measuring_Jar_reading").empty();
                        $("#Measuring_Jar_icon1").css({ 'pointer-events': "none" });
                        $('#Measuring_Jar_reading').html('0.0');
                        $("#soap2incan").draggable({
                            revert: function () {
                                if (!soap2) { return true }
                            },
                            drag: function () {
                                removeTrip();
                            }
                        });
                        $("#filter_paper_drop_area_for_soap2").droppable({
                            accept: "#soap2incan",
                            drop: function () {

                                helpCount = 4
                                soap2 = true;
                                $("#soap2incan").animate({
                                    top: 52 + "%", left: 78 + "%"
                                }, 100);
                                //Measuring_Jar_reading-------------------- 0.0 -------- placing soap
                                $("#Measuring_Jar_reading").empty()
                                $('#Measuring_Jar_reading').html('1.0g');
                                $("#filter_paper_drop_area_for_soap2").hide();

                                $("#soap2incan").draggable({
                                    revert: function () {
                                        if (!tempforsecondturn2) {
                                            $("#soap2incan").animate({
                                                top: 52 + "%", left: 78 + "%"
                                            }, 100); $('#Measuring_Jar_reading').html('1.0g');
                                        }
                                    },
                                    drag: function () {
                                        removeTrip();
                                    }
                                });
                                $("#soap2incan").on("drag", function () { $('#Measuring_Jar_reading').html('0.0'); });
                                $("#div_for_soap1_beaker_drop").show();
                                $("#div_for_soap1_beaker_drop").droppable({
                                    accept: "#soap2incan",
                                    drop: function () {
                                        $("#soap2incan").css({ 'z-index': '1' });
                                        helpCount = 5
                                        tempforsecondturn2 = true;

                                        $("#filter_paper").animate({
                                            top: 83 + "%", left: 8 + "%"
                                        }, 1000);
                                        $("#Measuring_Jar_reading").empty();
                                        $('#Measuring_Jar_reading').html('0.0');
                                        $("#soap2incan").css({
                                            top: 40 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#div_for_soap2_beaker_drop").hide();
                                        $("#soap2incan").animate({
                                            top: 72 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#soap2incan").draggable({ disabled: true });
                                        $("#rod").css({ 'pointer-events': "unset" })
                                        //road rotate-----------------
                                        $("#rod").click(function () {
                                            helpCount = 6;
                                            removeTrip();
                                            $("#rod").css({ 'pointer-events': "none" })
                                            console.log("rod-2");
                                            $("#soap2incan").fadeOut(12000);
                                            $("#first_water").hide();
                                            $("#waterAnimDiv").show();
                                            //==========================================
                                            //===============================================================================================================
                                            if (animatecor == 2) {
                                                animatecor = 0;
                                                $('#rod').animate(
                                                    { deg: 0 },
                                                    {
                                                        duration: 1200,
                                                        step: function (now) {
                                                            $(this).css({ transform: 'rotate(' + now + 'deg)', top: 38 + "%", left: 44 + "%" });
                                                        }
                                                    });
                                                var setin2 = setInterval(wateranimate, 100);
                                                var setinterGlassrod2 = setInterval(roadanimate, 1000);
                                                setTimeout(function () {
                                                    clearInterval(setinterGlassrod2);
                                                }, 4000);
                                                setTimeout(function () {
                                                    clearInterval(setin2);
                                                    $("#waterAnimDiv").hide();
                                                    $("#first_water").show();
                                                    //final_step to release the control from task 1
                                                    task2 = 1;
                                                    f2 = 1;
                                                    if (task1 == 1) { $("#soap1").css({ 'pointer-events': "none" }); $("#soap1").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap1").css({ 'pointer-events': "unset" }); $("#soap1").css({ opacity: 1 }, 1000); }
                                                    if (task2 == 1) { $("#soap2").css({ 'pointer-events': "none" }); $("#soap2").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap2").css({ 'pointer-events': "unset" }); $("#soap2").css({ opacity: 1 }, 1000); }
                                                    if (task3 == 1) { $("#soap3").css({ 'pointer-events': "none" }); $("#soap3").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap3").css({ 'pointer-events': "unset" }); $("#soap3").css({ opacity: 1 }, 1000); }
                                                    if (task4 == 1) { $("#soap4").css({ 'pointer-events': "none" }); $("#soap4").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap4").css({ 'pointer-events': "unset" }); $("#soap4").css({ opacity: 1 }, 1000); }
                                                }, 9000);
                                                setTimeout(rodrev, 5000);
                                                

                                            }
                                        });
                                    }
                                });
                                $("#filter_paper").draggable({ disabled: true });
                            }
                        });
                    });
                }
            });
        });
    });
    //333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    $("#soap3").click(function () {
        helpCount = 1
        removeTrip();
        animatecor = 3;
        $("#filter_paper").draggable({ disabled: false });
        $("#soap3incan").show();
        $("#Measuring_Jar_icon1").show();
        $("#rod").show();
        $("#filter_paper_drop_area_for_soap3").show();
        $("#soap1").css({ 'pointer-events': "none" });
        $("#soap2").css({ 'pointer-events': "none" });
        $("#soap3").css({ 'pointer-events': "none" });
        $("#soap4").css({ 'pointer-events': "none" });
        $("#soap1,#soap2,#soap4").css({
            opacity: 0.6
        }, 1000);
        $(function () {
            $("#filter_paper").draggable({
                revert: function () {
                    if (!temp3) { return true }
                },
                drag: function () {
                    removeTrip();
                }
            });
            $("#filter_paper_drop_area_for_soap3").droppable({
                accept: "#filter_paper",
                drop: function () {
                    helpCount = 2;
                    temp3 = true;
                    $("#filter_paper").animate({
                        top: 57 + "%", left: 76 + "%", width: 11 + "%"
                    }, 100);
                    //Measuring_Jar_reading-------------------- 0.0 ---------- to 0.6 ------------
                    $("#Measuring_Jar_reading").empty()
                    $('#Measuring_Jar_reading').html('0.6g');
                    //----------------------------------------------------------------------------
                    //soap 1 draggable code---------------------------------------
                    $("#Measuring_Jar_icon1").css({ 'pointer-events': "unset" });
                    $("#Measuring_Jar_icon1").click(function () {
                        helpCount = 3
                        removeTrip();
                        //Measuring_Jar_reading-------------------- 0.0

                        $("#Measuring_Jar_reading").empty();
                        $("#Measuring_Jar_icon1").css({ 'pointer-events': "none" });
                        $('#Measuring_Jar_reading').html('0.0');
                        $("#soap3incan").draggable({
                            revert: function () {
                                if (!soap3) { return true }
                            },
                            drag: function () {
                                removeTrip();
                            }
                        });
                        $("#filter_paper_drop_area_for_soap3").droppable({
                            accept: "#soap3incan",
                            drop: function () {

                                helpCount = 4
                                soap3 = true;
                                $("#soap3incan").animate({
                                    top: 52 + "%", left: 78 + "%"
                                }, 100);
                                //Measuring_Jar_reading-------------------- 0.0 -------- placing soap
                                $("#Measuring_Jar_reading").empty()
                                $('#Measuring_Jar_reading').html('1.0g');
                                $("#filter_paper_drop_area_for_soap3").hide();

                                $("#soap3incan").draggable({
                                    revert: function () {
                                        if (!tempforsecondturn3) {
                                            $("#soap3incan").animate({
                                                top: 52 + "%", left: 78 + "%"
                                            }, 100); $('#Measuring_Jar_reading').html('1.0g');
                                        }
                                    },
                                    drag: function () {
                                        removeTrip();
                                    }
                                });
                                $("#soap3incan").on("drag", function () { $('#Measuring_Jar_reading').html('0.0'); });
                                $("#div_for_soap1_beaker_drop").show();
                                $("#div_for_soap1_beaker_drop").droppable({
                                    accept: "#soap3incan",
                                    drop: function () {
                                        $("#soap3incan").css({ 'z-index': '1' });
                                        helpCount = 5
                                        tempforsecondturn3 = true;

                                        $("#filter_paper").animate({
                                            top: 83 + "%", left: 8 + "%"
                                        }, 1000);
                                        $("#Measuring_Jar_reading").empty();
                                        $('#Measuring_Jar_reading').html('0.0');
                                        $("#soap3incan").css({
                                            top: 40 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#div_for_soap2_beaker_drop").hide();
                                        $("#soap3incan").animate({
                                            top: 72 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#soap3incan").draggable({ disabled: true });
                                        //road rotate-----------------
                                        $("#rod").css({ 'pointer-events': "unset" })
                                        $("#rod").click(function () {
                                            $("#rod").css({ 'pointer-events': "none" })
                                            helpCount = 6;
                                            removeTrip();

                                            $("#soap3incan").fadeOut(12000);
                                            $("#first_water").hide();
                                            $("#waterAnimDiv").show();
                                            //==========================================
                                            //===============================================================================================================
                                            if (animatecor == 3) {
                                                animatecor = 0;
                                                $('#rod').animate(
                                                    { deg: 0 },
                                                    {
                                                        duration: 1200,
                                                        step: function (now) {
                                                            $(this).css({ transform: 'rotate(' + now + 'deg)', top: 38 + "%", left: 44 + "%" });
                                                        }
                                                    });
                                                var setin3 = setInterval(wateranimate, 100);
                                                var setinterGlassrod3 = setInterval(roadanimate, 1000);
                                                setTimeout(function () {
                                                    clearInterval(setinterGlassrod3);
                                                }, 4000);
                                                setTimeout(function () {
                                                    clearInterval(setin3);
                                                    $("#waterAnimDiv").hide();
                                                    $("#first_water").show();
                                                    //final_step to release the control from task 1
                                                    task3 = 1;
                                                    f3 = 1;
                                                    if (task1 == 1) { $("#soap1").css({ 'pointer-events': "none" }); $("#soap1").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap1").css({ 'pointer-events': "unset" }); $("#soap1").css({ opacity: 1 }, 1000); }
                                                    if (task2 == 1) { $("#soap2").css({ 'pointer-events': "none" }); $("#soap2").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap2").css({ 'pointer-events': "unset" }); $("#soap2").css({ opacity: 1 }, 1000); }
                                                    if (task3 == 1) { $("#soap3").css({ 'pointer-events': "none" }); $("#soap3").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap3").css({ 'pointer-events': "unset" }); $("#soap3").css({ opacity: 1 }, 1000); }
                                                    if (task4 == 1) { $("#soap4").css({ 'pointer-events': "none" }); $("#soap4").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap4").css({ 'pointer-events': "unset" }); $("#soap4").css({ opacity: 1 }, 1000); }
                                                }, 9000);
                                                setTimeout(rodrev, 5000);
                                                

                                            }
                                        });
                                    }
                                });
                                $("#filter_paper").draggable({ disabled: true });
                            }
                        });
                    });
                }
            });
        });
    });
    //444444444444444444444444444444444444444444444444444444444444444444444444444444444
    $("#soap4").click(function () {
        helpCount = 1
        removeTrip();
        animatecor = 4;
        $("#filter_paper").draggable({ disabled: false });
        $("#soap4incan").show();
        $("#Measuring_Jar_icon1").show();
        $("#rod").show();
        $("#filter_paper_drop_area_for_soap4").show();
        $("#soap1").css({ 'pointer-events': "none" });
        $("#soap2").css({ 'pointer-events': "none" });
        $("#soap3").css({ 'pointer-events': "none" });
        $("#soap4").css({ 'pointer-events': "none" });
        $("#soap1,#soap2,#soap3").css({
            opacity: 0.6
        }, 1000);
        $(function () {
            $("#filter_paper").draggable({
                revert: function () {
                    if (!temp4) { return true }
                },
                drag: function () {
                    removeTrip();
                }
            });
            $("#filter_paper_drop_area_for_soap4").droppable({
                accept: "#filter_paper",
                drop: function () {
                    temp4 = true;
                    helpCount = 2;
                    $("#filter_paper").animate({
                        top: 57 + "%", left: 76 + "%", width: 11 + "%"
                    }, 100);
                    //Measuring_Jar_reading-------------------- 0.0 ---------- to 0.6 ------------
                    $("#Measuring_Jar_reading").empty()
                    $('#Measuring_Jar_reading').html('0.6g');
                    //----------------------------------------------------------------------------
                    //soap 1 draggable code---------------------------------------
                    $("#Measuring_Jar_icon1").css({ 'pointer-events': "unset" });
                    $("#Measuring_Jar_icon1").click(function () {
                        helpCount = 3
                        removeTrip();
                        //Measuring_Jar_reading-------------------- 0.0
                        $("#Measuring_Jar_reading").empty();
                        $("#Measuring_Jar_icon1").css({ 'pointer-events': "none" });
                        $('#Measuring_Jar_reading').html('0.0');
                        $("#soap4incan").draggable({
                            revert: function () {
                                if (!soap4) { return true }
                            },
                            drag: function () {
                                removeTrip();
                            }
                        });
                        $("#filter_paper_drop_area_for_soap4").droppable({
                            accept: "#soap4incan",
                            drop: function () {

                                helpCount = 4
                                soap4 = true;
                                $("#soap4incan").animate({
                                    top: 52 + "%", left: 78 + "%"
                                }, 100);
                                //Measuring_Jar_reading-------------------- 0.0 -------- placing soap
                                $("#Measuring_Jar_reading").empty()
                                $('#Measuring_Jar_reading').html('1.0g');
                                $("#filter_paper_drop_area_for_soap4").hide();


                                $("#soap4incan").draggable({
                                    revert: function () {
                                        if (!tempforsecondturn4) {
                                            $("#soap4incan").animate({
                                                top: 52 + "%", left: 78 + "%"
                                            }, 100); $('#Measuring_Jar_reading').html('1.0g');
                                        }
                                    },
                                    drag: function () {
                                        removeTrip();
                                    }
                                });
                                $("#soap4incan").on("drag", function () { $('#Measuring_Jar_reading').html('0.0'); });
                                $("#div_for_soap1_beaker_drop").show();
                                $("#div_for_soap1_beaker_drop").droppable({
                                    accept: "#soap4incan",
                                    drop: function () {
                                        $("#soap4incan").css({ 'z-index': '1' });
                                        helpCount = 5;
                                        tempforsecondturn4 = true;

                                        $("#filter_paper").animate({
                                            top: 83 + "%", left: 8 + "%"
                                        }, 1000);
                                        $("#Measuring_Jar_reading").empty();
                                        $('#Measuring_Jar_reading').html('0.0');
                                        $("#soap4incan").css({
                                            top: 40 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#div_for_soap1_beaker_drop").hide();
                                        $("#soap4incan").animate({
                                            top: 72 + "%", left: 36 + "%"
                                        }, 1000);
                                        $("#soap4incan").draggable({ disabled: true });
                                        $("#rod").css({ 'pointer-events': "unset" })
                                        //road rotate-----------------
                                        $("#rod").click(function () {
                                            $("#rod").css({ 'pointer-events': "none" })
                                            helpCount = 6;
                                            removeTrip();
                                            $("#soap4incan").fadeOut(12000);

                                            $("#first_water").hide();
                                            $("#waterAnimDiv").show();
                                            //==========================================
                                            //===============================================================================================================
                                            if (animatecor == 4) {
                                                animatecor = 0;
                                                $('#rod').animate(
                                                    { deg: 0 },
                                                    {
                                                        duration: 1200,
                                                        step: function (now) {
                                                            $(this).css({ transform: 'rotate(' + now + 'deg)', top: 38 + "%", left: 44 + "%" });
                                                        }
                                                    });
                                                var setin4 = setInterval(wateranimate, 100);
                                                console.log(1);
                                                var setinterGlassrod4 = setInterval(roadanimate, 1000);
                                                setTimeout(function () {
                                                    clearInterval(setinterGlassrod4);
                                                }, 4000);
                                                setTimeout(function () {
                                                    clearInterval(setin4);
                                                    $("#waterAnimDiv").hide();
                                                    $("#first_water").show();
                                                    //final_step to release the control from task 1
                                                    task4 = 1;
                                                    f4 = 1;
                                                    if (task1 == 1) { $("#soap1").css({ 'pointer-events': "none" }); $("#soap1").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap1").css({ 'pointer-events': "unset" }); $("#soap1").css({ opacity: 1 }, 1000); }
                                                    if (task2 == 1) { $("#soap2").css({ 'pointer-events': "none" }); $("#soap2").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap2").css({ 'pointer-events': "unset" }); $("#soap2").css({ opacity: 1 }, 1000); }
                                                    if (task3 == 1) { $("#soap3").css({ 'pointer-events': "none" }); $("#soap3").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap3").css({ 'pointer-events': "unset" }); $("#soap3").css({ opacity: 1 }, 1000); }
                                                    if (task4 == 1) { $("#soap4").css({ 'pointer-events': "none" }); $("#soap4").css({ opacity: 0.6 }, 1000); }
                                                    else { $("#soap4").css({ 'pointer-events': "unset" }); $("#soap4").css({ opacity: 1 }, 1000); }
                                                }, 9000);
                                                setTimeout(rodrev, 5000);
                                                console.log(12);
                                               

                                            }

                                        });
                                        $("#rod").prop('disabled', true);
                                    }

                                });
                                $("#filter_paper").draggable({ disabled: true });
                            }
                        });
                    });
                }
            });
        });
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#NextFrameButton").click(function () {
        //$("#solution_next_button").show();
        removeTrip();
        infovariable = 2;
        $("#dropAreafillertube1").hide();
        $("#dropAreafillertube2").hide();
        $("#dropAreafillertube3").hide();
        $("#dropAreafillertube4").hide();
        $("#mainDiv").hide();
        $("#mainDiv1").show();
        $("#select_soap").hide();
        $("#select_soapsoln").show();
        //frame 2 show
        $("#solution1,#solution2,#solution3,#solution4").show();
        $("#testtubeStandTop,#testtubeStandUnder,#testtubeADiv,#testtubeB").show();
        $("#testtubeC,#testtubeD,#beaker2,#waterInBeaker").show();
        $("#bottle,#dropperWrapper,#bottleWater,#dropperStandUnder").show();
        $("#dropperStandTop").show();
        $("#dropperDiv,#drop,#drop5ml").show();
        $("#solution1label,#solution2label,#solution3label,#solution4label").show();
        //frame 1 hide
        $("#soap1label,#soap2label,#soap3label,#soap4label").hide();
        $("#soap1,#soap2,#soap3,#soap4").hide();
        $("#testtubeStandTop,#testtubeStandUnder,#testtubeADiv,#testtubeB").show();
        $("#testtubeC,#testtubeD,#beaker2,#waterInBeaker").show();
        $("#bottle,#dropperWrapper,#bottleWater,#dropperStandUnder").show();
        $("#dropperStandTop").show();
        $("#dropperDiv,#drop,#drop5ml").show();
        // $("#dropAreaTesttube1,#dropAreafillertube1").show();

        //	hideFirstPage();
        // helpCount1=0
        $("#solution1").click(function () {
            helpCount1 = 1;
            removeTrip();
            if (s1 == 0) {
                s1 == 1;
                $("#dropAreaBeakerA").show();
                $("#dropAreaBeakerB").hide();
                $("#dropAreaBeakerC").hide();
                $("#dropAreaBeakerD").hide();

                $("#solution1").css({ 'pointer-events': "none" });
                $("#solution2").css({ 'pointer-events': "none" });
                $("#solution3").css({ 'pointer-events': "none" });
                $("#solution4").css({ 'pointer-events': "none" });

                $("#solution2,#solution3,#solution4").css({ opacity: 0.6 });
                //$("#solution1").css({opacity:1});
                $("#dropAreafillertube1").show();
                $("#dropperDiv").draggable({ disabled: false });
                $("#dropperDiv").draggable({
                    revert: function () {
                        if (!sol1) {
                            return true
                        }
                    },
                    drag: function () {
                        removeTrip();
                    }
                });
                $("#dropAreaBeakerA").droppable({
                    accept: "#dropperDiv",
                    drop: function () {
                        helpCount1 = 2;
                        sol1 = true;
                        $("#dropperDiv").css({ top: 114 + "px", left: 308 + "px" });
                        $("#dropperDiv").draggable({ disabled: true });
                        $("#dropperDiv").animate({ top: 216 + "px", left: 308 + "px" }, 1000, function () {
                            $("#dropperSolution").fadeIn(100, function () {
                                $("#dropAreaBeakerA").hide();
                                sol1 = false
                                $("#dropperDiv").animate({ top: 101 + "px", left: 303 + "px" }, 2000, function () {
                                    $("#dropperDiv").animate({ top: 101 + "px", left: 66 + "px" }, 2000, function () {
                                        $("#dropperSolution").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                        $(function () {
                                            for (i = 0; i < 1; i++) {
                                                $("#drop").animate({ top: 295 + "px", opacity: "1" }, 500, 'linear', function () {
                                                    $("#drop").css({ opacity: '0' });
                                                });
                                                $('#tubeSolution').animate({ 'top': parseInt($(tubeSolution).css('top')) - 15 + "px", 'height': parseInt($(tubeSolution).css('height')) + 15 + "px" }, 1000, function () {
                                                    $("#dropperDiv").animate({ top: 101 + "px", left: 404 + "px" }, 600, function () {
                                                        $("#dropperDiv").animate({ top: 230 + "px", left: 404 + "px" }, 400, function () {
                                                            $("#dropperWrapper").draggable({ disabled: false });
                                                            $("#dropperWrapper").draggable({
                                                                revert: function () {
                                                                    if (!sol1) {
                                                                        return true
                                                                    }
                                                                },
                                                                drag: function () {
                                                                    removeTrip();
                                                                }
                                                            });

                                                            $("#dropAreafillertube1").droppable({
                                                                accept: "#dropperWrapper",
                                                                drop: function () {
                                                                    helpCount1 = 3;
                                                                    sol1 = true;
                                                                    $("#dropperWrapper").animate({ top: 14 + "%", left: 11 + "%" }, 100, function () {
                                                                        $("#dropperSolution1").animate({ 'top': '78px', 'border-top-width': '0px' }, 200);
                                                                        $(function () {
                                                                            for (i = 0; i < 1; i++) {
                                                                                helpCount1 = 0

                                                                                $("#drop5ml").animate({ top: 79 + "%", opacity: "1" }, 300, 'linear');
                                                                                $("#drop5ml").animate({ top: 79 + "%", opacity: "0" }, 300, 'linear');
                                                                                $("#drop5ml").animate({ top: 42 + "%" }, 200, 'linear');
                                                                                $('#tubeSolution').animate({ 'top': parseInt($(tubeSolution).css('top')) - 45 + "px", 'height': parseInt($(tubeSolution).css('height')) + 45 + "px" }, function () {
                                                                                    $("#dropperWrapper").animate({ top: 12 + "%", left: 88 + "%" }, 1000, function () {
                                                                                        $("#dropperWrapper").animate({ top: 38 + "%", left: 88 + "%" }, 1000);
                                                                                        $("#dropperSolution1").animate({ 'top': '66px', 'border-top-width': '67px' }, 150);
                                                                                        $("#dropperWrapper").draggable({ disabled: true });
                                                                                        $("#dropAreafillertube1").hide();
                                                                                        tempforsolution1 = 1;

                                                                                        if (tempforsolution1 == 1) { $("#solution1").css({ 'pointer-events': "none" }); $("#solution1").css({ opacity: 0.6 }); } else { $("#solution1").css({ 'pointer-events': "unset" }); $("#solution1").css({ opacity: 1 }); }
                                                                                        if (tempforsolution2 == 1) { $("#solution2").css({ 'pointer-events': "none" }); $("#solution2").css({ opacity: 0.6 }); } else { $("#solution2").css({ 'pointer-events': "unset" }); $("#solution2").css({ opacity: 1 }); }
                                                                                        if (tempforsolution3 == 1) { $("#solution3").css({ 'pointer-events': "none" }); $("#solution3").css({ opacity: 0.6 }); } else { $("#solution3").css({ 'pointer-events': "unset" }); $("#solution3").css({ opacity: 1 }); }
                                                                                        if (tempforsolution4 == 1) { $("#solution4").css({ 'pointer-events': "none" }); $("#solution4").css({ opacity: 0.6 }); } else { $("#solution4").css({ 'pointer-events': "unset" }); $("#solution4").css({ opacity: 1 }); }
                                                                                        if ((tempforsolution1 == 1) && (tempforsolution2 == 1) && (tempforsolution3 == 1) && (tempforsolution4 == 1)) {
                                                                                            helpCount1 = 4

                                                                                            $("#solution_next_button").show();
                                                                                            //$("#solution1,#solution2,#solution3,#solution4").css({opacity:0.6});
                                                                                        }
                                                                                    });
                                                                                });
                                                                            }
                                                                        });
                                                                    });
                                                                }
                                                            });
                                                        });
                                                    })
                                                });
                                            }
                                        });
                                    })
                                })
                            })
                        })
                    }
                });
            }
        });
        $("#solution2").click(function () {
            helpCount1 = 1;
            removeTrip();
            $("#dropAreaBeakerA").hide();
            $("#dropAreaBeakerB").show();
            $("#dropAreaBeakerC").hide();
            $("#dropAreaBeakerD").hide();
            $("#solution1").css({ 'pointer-events': "none" });
            $("#solution2").css({ 'pointer-events': "none" });
            $("#solution3").css({ 'pointer-events': "none" });
            $("#solution4").css({ 'pointer-events': "none" });

            $("#solution1,#solution3,#solution4").css({ opacity: 0.6 });
            //	$("#solution2").css({opacity:1});

            $("#dropAreafillertube2").show();

            $("#dropperDiv").draggable({ disabled: false });
            $("#dropperDiv").draggable({
                revert: function () {

                    if (!sol2) {
                        return true
                    }
                },
                drag: function () {
                    removeTrip();
                }
            });

            $("#dropAreaBeakerB").droppable({
                accept: "#dropperDiv",
                drop: function () {
                    helpCount1 = 2;

                    sol2 = true;
                    $("#dropperDiv").css({ top: 114 + "px", left: 308 + "px" });
                    $("#dropperDiv").draggable({ disabled: false });
                    $("#dropperDiv").animate({ top: 216 + "px", left: 308 + "px" }, 1000, function () {
                        $("#dropperSolution2").fadeIn(100, function () {
                            $("#dropAreaBeakerB").hide();
                            sol1 = false
                            $("#dropperDiv").draggable({ disabled: true });
                            $("#dropperDiv").animate({ top: 98 + "px", left: 308 + "px" }, 2000, function () {
                                $("#dropperDiv").animate({ top: 98 + "px", left: 112 + "px" }, 2000, function () {
                                    // $("#dropperSolution").fadeOut(top,2000);
                                    $("#dropperSolution2").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                    $("#drop").css({ top: 42 + "%", left: 20.8 + "%" });
                                    $(function () {
                                        for (i = 0; i < 1; i++) {
                                            $("#drop").animate({ top: 295 + "px", opacity: "1" }, 500, 'linear', function () {
                                                $("#drop").css({ opacity: '0' });
                                            });
                                            $('#tubeSolution2').animate({ 'top': parseInt($(tubeSolution2).css('top')) - 15 + "px", 'height': parseInt($(tubeSolution2).css('height')) + 15 + "px" }, 1000, function () {
                                                $("#dropperDiv").animate({ top: 104 + "px", left: 404 + "px" }, 600, function () {
                                                    $("#dropperDiv").animate({ top: 230 + "px", left: 404 + "px" }, 400, function () {
                                                        $("#dropperWrapper").draggable({ disabled: false });
                                                        $("#drop5ml").css({ left: 116 + "px", top: 138 + "px" });
                                                        $("#dropperWrapper").draggable({
                                                            revert: function () {
                                                                if (!sol1) {
                                                                    return true
                                                                }
                                                            },
                                                            drag: function () {
                                                                removeTrip();
                                                            }
                                                        });

                                                        $("#dropAreafillertube2").droppable({
                                                            accept: "#dropperWrapper",
                                                            drop: function () {
                                                                helpCount1 = 3;
                                                                sol1 = true;

                                                                $("#dropperWrapper").animate({ top: 14 + "%", left: 19 + "%" }, 200, function () {
                                                                    $("#dropperSolution1").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                                                    $(function () {

                                                                        for (i = 0; i < 1; i++) {
                                                                            $("#drop5ml").animate({ top: 266 + "px", opacity: "1" }, 200, 'linear', function () {
                                                                                $("#drop5ml").css({ opacity: '0' });
                                                                            });

                                                                            $('#tubeSolution2').animate({ 'top': parseInt($(tubeSolution2).css('top')) - 45 + "px", 'height': parseInt($(tubeSolution2).css('height')) + 45 + "px" }, function () {
                                                                                $("#dropperWrapper").animate({ top: 12 + "%", left: 88 + "%" }, 1000, function () {
                                                                                    $("#dropperWrapper").animate({ top: 38 + "%", left: 88 + "%" }, 1000);
                                                                                    $("#dropperSolution1").animate({ 'top': '66px', 'border-top-width': '67px' }, 150);
                                                                                    $("#dropperWrapper").draggable({ disabled: true });
                                                                                    $("#dropAreafillertube2").hide();
                                                                                    tempforsolution2 = 1;
                                                                                    // helpCount1=0;

                                                                                    if (tempforsolution1 == 1) { $("#solution1").css({ 'pointer-events': "none" }); $("#solution1").css({ opacity: 0.6 }); } else { $("#solution1").css({ 'pointer-events': "unset" }); $("#solution1").css({ opacity: 1 }); }
                                                                                    if (tempforsolution2 == 1) { $("#solution2").css({ 'pointer-events': "none" }); $("#solution2").css({ opacity: 0.6 }); } else { $("#solution2").css({ 'pointer-events': "unset" }); $("#solution2").css({ opacity: 1 }); }
                                                                                    if (tempforsolution3 == 1) { $("#solution3").css({ 'pointer-events': "none" }); $("#solution3").css({ opacity: 0.6 }); } else { $("#solution3").css({ 'pointer-events': "unset" }); $("#solution3").css({ opacity: 1 }); }
                                                                                    if (tempforsolution4 == 1) { $("#solution4").css({ 'pointer-events': "none" }); $("#solution4").css({ opacity: 0.6 }); } else { $("#solution4").css({ 'pointer-events': "unset" }); $("#solution4").css({ opacity: 1 }); }
                                                                                    if ((tempforsolution1 == 1) && (tempforsolution2 == 1) && (tempforsolution3 == 1) && (tempforsolution4 == 1)) {
                                                                                        helpCount1 = 4

                                                                                        $("#solution_next_button").show();
                                                                                        //$("#solution1,#solution2,#solution3,#solution4").css({opacity:0.6});
                                                                                    }
                                                                                });
                                                                            });
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        });
                                                    });
                                                })
                                            });
                                        }
                                    });
                                })
                            })
                        })
                    })
                }
            });
        });
        $("#solution4").click(function () {
            helpCount1 = 1;
            removeTrip();
            $("#dropAreaBeakerA").hide();
            $("#dropAreaBeakerB").hide();
            $("#dropAreaBeakerC").hide();
            $("#dropAreaBeakerD").show();

            $("#solution1").css({ 'pointer-events': "none" });
            $("#solution2").css({ 'pointer-events': "none" });
            $("#solution3").css({ 'pointer-events': "none" });
            $("#solution4").css({ 'pointer-events': "none" });
            $("#solution1,#solution2,#solution3").css({ opacity: 0.6 });
            //	$("#solution4").css({opacity:1});

            $("#dropAreafillertube4").show();
            $("#dropperDiv").draggable({ disabled: false });
            $("#dropperDiv").draggable({
                revert: function () {

                    if (!sol4) {
                        return true
                    }
                },
                drag: function () {
                    removeTrip();
                }
            });

            $("#dropAreaBeakerD").droppable({
                accept: "#dropperDiv",
                drop: function () {
                    helpCount1 = 2;
                    sol4 = true;
                    $("#dropperDiv").css({ top: 114 + "px", left: 308 + "px" });
                    $("#dropperDiv").draggable({ disabled: false });
                    $("#dropperDiv").animate({ top: 215 + "px", left: 308 + "px" }, 1000, function () {
                        $("#dropperSolution4").fadeIn(100, function () {
                            $("#dropAreaBeakerC").hide();
                            sol1 = false
                            $("#dropperDiv").draggable({ disabled: true });
                            $("#dropperDiv").animate({ top: 98 + "px", left: 308 + "px" }, 2000, function () {
                                $("#dropperDiv").animate({ top: 98 + "px", left: 194 + "px" }, 2000, function () {
                                    // $("#dropperSolution").fadeOut(top,2000);
                                    $("#dropperSolution4").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                    $("#drop").css({ top: 42 + "%", left: 200 + "px" });
                                    $(function () {
                                        for (i = 0; i < 1; i++) {
                                            $("#drop").animate({ top: 295 + "px", opacity: "1" }, 500, 'linear', function () {
                                                $("#drop").css({ opacity: '0' });
                                            });
                                            $('#tubeSolution4').animate({ 'top': parseInt($(tubeSolution4).css('top')) - 15 + "px", 'height': parseInt($(tubeSolution4).css('height')) + 15 + "px" }, 1000, function () {
                                                $("#dropperDiv").animate({ top: 101 + "px", left: 402 + "px" }, 600, function () {
                                                    $("#dropperDiv").animate({ top: 230 + "px", left: 402 + "px" }, 400, function () {
                                                        $("#dropperWrapper").draggable({ disabled: false });
                                                        $("#drop5ml").css({ left: 201 + "px", top: 168 + "px" });
                                                        $("#dropperWrapper").draggable({
                                                            revert: function () {
                                                                if (!sol1) {
                                                                    return true
                                                                }
                                                            },
                                                            drag: function () {
                                                                removeTrip();
                                                            }
                                                        });
                                                        $("#dropAreafillertube4").droppable({
                                                            accept: "#dropperWrapper",
                                                            drop: function () {
                                                                helpCount1 = 3;
                                                                sol1 = true;
                                                                $("#dropperWrapper").animate({ top: 14 + "%", left: 34 + "%" }, 200, function () {
                                                                    //======================================
                                                                    $("#dropperSolution").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                                                    $(function () {
                                                                        for (i = 0; i < 1; i++) {
                                                                            $("#drop5ml").animate({ top: 266 + "px", opacity: "1" }, 200, 'linear', function () {
                                                                                $("#drop5ml").css({ opacity: '0' });
                                                                            });
                                                                            $('#tubeSolution4').animate({ 'top': parseInt($(tubeSolution4).css('top')) - 45 + "px", 'height': parseInt($(tubeSolution4).css('height')) + 45 + "px" }, function () {
                                                                                $("#dropperWrapper").animate({ top: 14 + "%", left: 88 + "%" }, 1000, function () {
                                                                                    $("#dropperWrapper").animate({ top: 38 + "%", left: 88 + "%" }, 1000);
                                                                                    $("#dropperSolution1").animate({ 'top': '66px', 'border-top-width': '67px' }, 150);
                                                                                    $("#dropperWrapper").draggable({ disabled: true });
                                                                                    $("#dropAreafillertube4").hide();
                                                                                    tempforsolution4 = 1;
                                                                                    // helpCount1=0

                                                                                    if (tempforsolution1 == 1) { $("#solution1").css({ 'pointer-events': "none" }); $("#solution1").css({ opacity: 0.6 }); } else { $("#solution1").css({ 'pointer-events': "unset" }); $("#solution1").css({ opacity: 1 }); }
                                                                                    if (tempforsolution2 == 1) { $("#solution2").css({ 'pointer-events': "none" }); $("#solution2").css({ opacity: 0.6 }); } else { $("#solution2").css({ 'pointer-events': "unset" }); $("#solution2").css({ opacity: 1 }); }
                                                                                    if (tempforsolution3 == 1) { $("#solution3").css({ 'pointer-events': "none" }); $("#solution3").css({ opacity: 0.6 }); } else { $("#solution3").css({ 'pointer-events': "unset" }); $("#solution3").css({ opacity: 1 }); }
                                                                                    if (tempforsolution4 == 1) { $("#solution4").css({ 'pointer-events': "none" }); $("#solution4").css({ opacity: 0.6 }); } else { $("#solution4").css({ 'pointer-events': "unset" }); $("#solution4").css({ opacity: 1 }); }
                                                                                    if ((tempforsolution1 == 1) && (tempforsolution2 == 1) && (tempforsolution3 == 1) && (tempforsolution4 == 1)) {
                                                                                        helpCount1 = 4

                                                                                        //$("#solution1,#solution2,#solution3,#solution4").css({opacity:0.6});
                                                                                        $("#solution_next_button").show();
                                                                                    }
                                                                                });
                                                                            });
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        });
                                                    });
                                                })
                                            });
                                        }
                                    });
                                })
                            })
                        })
                    })
                }
            });
        });
        $("#solution3").click(function () {
            helpCount1 = 1;
            removeTrip();
            $("#dropAreaBeakerA").hide();
            $("#dropAreaBeakerB").hide();
            $("#dropAreaBeakerC").show();
            $("#dropAreaBeakerD").hide();

            $("#solution1").css({ 'pointer-events': "none" });
            $("#solution2").css({ 'pointer-events': "none" });
            $("#solution3").css({ 'pointer-events': "none" });
            $("#solution4").css({ 'pointer-events': "none" });

            $("#solution1,#solution2,#solution4").css({ opacity: 0.6 });
            //	$("#solution3").css({opacity:1});

            $("#dropAreafillertube3").show();

            $("#dropperDiv").draggable({ disabled: false });
            $("#dropperDiv").draggable({
                revert: function () {
                    if (!sol3) {
                        return true
                    }
                },
                drag: function () {
                    removeTrip();
                }
            });

            $("#dropAreaBeakerC").droppable({
                accept: "#dropperDiv",
                drop: function () {
                    helpCount1 = 2;
                    sol3 = true;
                    $("#dropperDiv").css({ top: 114 + "px", left: 308 + "px" });
                    $("#dropperDiv").draggable({ disabled: false });
                    $("#dropperDiv").animate({ top: 216 + "px", left: 308 + "px" }, 1000, function () {
                        $("#dropperSolution3").fadeIn(100, function () {
                            $("#dropAreaBeakerC").hide();
                            sol1 = false
                            $("#dropperDiv").draggable({ disabled: true });
                            $("#dropperDiv").animate({ top: 98 + "px", left: 308 + "px" }, 2000, function () {
                                $("#dropperDiv").animate({ top: 98 + "px", left: 150 + "px" }, 2000, function () {
                                    // $("#dropperSolution").fadeOut(top,2000);
                                    $("#dropperSolution3").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                    $("#drop").css({ top: 42 + "%", left: 156 + "px" });
                                    $(function () {
                                        for (i = 0; i < 1; i++) {
                                            $("#drop").animate({ top: 295 + "px", opacity: "1" }, 500, 'linear', function () {
                                                $("#drop").css({ opacity: '0' });
                                            });
                                            $('#tubeSolution3').animate({ 'top': parseInt($(tubeSolution3).css('top')) - 15 + "px", 'height': parseInt($(tubeSolution3).css('height')) + 15 + "px" }, 1000, function () {
                                                $("#dropperDiv").animate({ top: 101 + "px", left: 402 + "px" }, 600, function () {
                                                    $("#dropperDiv").animate({ top: 230 + "px", left: 402 + "px" }, 400, function () {
                                                        $("#dropperWrapper").draggable({ disabled: false });
                                                        $("#drop5ml").css({ left: 156 + "px", top: 168 + "px" });
                                                        $("#dropperWrapper").draggable({
                                                            revert: function () {
                                                                if (!sol1) {
                                                                    return true
                                                                }
                                                            },
                                                            drag: function () {
                                                                removeTrip();
                                                            }
                                                        });

                                                        $("#dropAreafillertube3").droppable({
                                                            accept: "#dropperWrapper",
                                                            drop: function () {
                                                                sol1 = true;
                                                                $("#dropperWrapper").animate({ top: 14 + "%", left: 26 + "%" }, 200, function () {
                                                                    //======================================
                                                                    $("#dropperSolution1").animate({ 'top': '78px', 'border-top-width': '0px' }, 150);
                                                                    $(function () {
                                                                        for (i = 0; i < 1; i++) {
                                                                            $("#drop5ml").animate({ top: 266 + "px", opacity: "1" }, 200, 'linear', function () {
                                                                                $("#drop5ml").css({ opacity: '0' });
                                                                            });
                                                                            $('#tubeSolution3').animate({ 'top': parseInt($(tubeSolution3).css('top')) - 45 + "px", 'height': parseInt($(tubeSolution3).css('height')) + 45 + "px" }, function () {
                                                                                $("#dropperWrapper").animate({ top: 14 + "%", left: 88 + "%" }, 1000, function () {
                                                                                    $("#dropperWrapper").animate({ top: 38 + "%", left: 88 + "%" }, 1000);
                                                                                    $("#dropperSolution1").animate({ 'top': '66px', 'border-top-width': '67px' }, 150);
                                                                                    $("#dropperWrapper").draggable({ disabled: true });
                                                                                    $("#dropAreafillertube3").hide();
                                                                                    tempforsolution3 = 1;
                                                                                    helpCount1 = 0

                                                                                    if (tempforsolution1 == 1) { $("#solution1").css({ 'pointer-events': "none" }); $("#solution1").css({ opacity: 0.6 }); } else { $("#solution1").css({ 'pointer-events': "unset" }); $("#solution1").css({ opacity: 1 }); }
                                                                                    if (tempforsolution2 == 1) { $("#solution2").css({ 'pointer-events': "none" }); $("#solution2").css({ opacity: 0.6 }); } else { $("#solution2").css({ 'pointer-events': "unset" }); $("#solution2").css({ opacity: 1 }); }
                                                                                    if (tempforsolution3 == 1) { $("#solution3").css({ 'pointer-events': "none" }); $("#solution3").css({ opacity: 0.6 }); } else { $("#solution3").css({ 'pointer-events': "unset" }); $("#solution3").css({ opacity: 1 }); }
                                                                                    if (tempforsolution4 == 1) { $("#solution4").css({ 'pointer-events': "none" }); $("#solution4").css({ opacity: 0.6 }); } else { $("#solution4").css({ 'pointer-events': "unset" }); $("#solution4").css({ opacity: 1 }); }
                                                                                    if ((tempforsolution1 == 1) && (tempforsolution2 == 1) && (tempforsolution3 == 1) && (tempforsolution4 == 1)) {
                                                                                        helpCount1 = 4

                                                                                        $("#solution_next_button").show();
                                                                                        //$("#solution1,#solution2,#solution3,#solution4").css({opacity:0.6});
                                                                                    }
                                                                                });
                                                                            });
                                                                        }
                                                                    });
                                                                });
                                                            }
                                                        });
                                                    });
                                                })
                                            });
                                        }
                                    });
                                })
                            })
                        })
                    })
                }
            });
        });
    })
    $("#solution_next_button").click(function () {
        infovariable = 3;
        removeTrip();
        SolutionNextButtonhide();
        $("#solution_next_button").hide();
        $("#scale").show();
        //hideSecondPage();
        
        $("#testtubeADiv").draggable({
            containment: "#canvasBox", cursor: "pointer",
            revert: function () {
                if (!tube1) {
                    $("#dropAreaTesttube1").css({ "border": "none" });
                    $("#dropAreaTesttube1").html("");
                    return true
                }
            },
            drag: function () {
                $("#dropAreaTesttube1").css({ "border": "solid 1px white" });
                $("#dropAreaTesttube1").html("<center><div class='newStyleAdded'>Drop the testube here</div></center>");
                $("#dropAreaTesttube1").show();
                removeTrip();
            }
        });
        let x1 = Math.floor((Math.random() * 3) + 1);
        let x2 = Math.floor((Math.random() * 3) + 1);
        let x3 = Math.floor((Math.random() * 3) + 1);
        let x4 = Math.floor((Math.random() * 3) + 1);
        $("#dropAreaTesttube1").droppable({
            accept: "#testtubeADiv",
            drop: function () {
                removeTrip()
                newTaskVariable = 1;
                $("#testtubeADiv").draggable({ disabled: true });
                $("#dropAreaTesttube1").css({ "border": "none" });
                $("#dropAreaTesttube1").html("");
                helpCount2 = 1;
                tube1 = true;
                $("#hand").show();
                $("#testtubeADiv").hide();
                for (var i = 0; i < 8; i++) {
                    $("#hand").animate({ left: 59 + "%", top: 14 + '%' }, 200);
                    $("#hand").animate({ left: 55 + "%", top: 24 + '%' }, 200);
                }
                $("#form").animate({ 'top': parseInt($(form).css('top')) - ((x1 * 10) - 20) + "px", 'height': parseInt($(form).css('height')) + (x1 * 10) + "px" });
                setTimeout(function () {
                    $("#hand").hide();
                    $("#testtubeADiv,#form").show();
                    $("#testtubeADiv").animate({ left: 11.3 + "%", top: 54 + '%' }, 1000, function () {
                        
                        $("#testtubeADiv").click(function()
                        {
                            removeTrip()
                            if(tempForDragAndDrop == 0)
                            {
                                newTaskVariable =0;
                                tempForDragAndDropHelp = 1;
                                $("#testtubeADiv").css({ 'pointer-events': "none" });
                                $("#testtubeADiv").animate({ left: 81.3 + "%", top: 61 + '%' }, 1000);
                            }
                        })
                        $("#dropAreaTesttube1").remove();
                        $("#testtubeBDiv").draggable({
                            containment: "#canvasBox", cursor: "pointer",
                            revert: function () {
                                if (!tube2) { 
                                    $("#dropAreaTesttube2").css({ "border": "none" });
                                    $("#dropAreaTesttube2").html("");
                                    return true 
                                }
                            },
                            drag: function () {
                                tempForDragAndDropHelp = 1;
                                tempForDragAndDrop = 1;
                                $("#dropAreaTesttube2").css({ "border": "solid 1px white" });
                                $("#dropAreaTesttube2").html("<center><div class='newStyleAdded'>Drop the testube here</div></center>");
                                $("#testtubeADiv").css({ left: 11.3 + "%", top: 54 + '%' });
                                $("#testtubeADiv").draggable({ disabled: true });
                                //$("#testtubeADiv").draggable();
                                $("#dropAreaTesttube2").show();
                                removeTrip()
                            }
                        });

                        $("#dropAreaTesttube2").droppable({
                            accept: "#testtubeBDiv",
                            drop: function () {
                                newTaskVariable =1;
                                $("#testtubeBDiv").draggable({ disabled: true });
                                $("#dropAreaTesttube2").css({ "border": "none" });
                                $("#dropAreaTesttube2").html("");
                                tube2 = true;
                                $("#testtubeADiv").stop();
                                $("#hand").show();
                                $("#testtubeBDiv").hide();
                                for (var i = 0; i < 8; i++) {
                                    $("#hand").animate({ left: 59 + "%", top: 14 + '%' }, 200);
                                    $("#hand").animate({ left: 55 + "%", top: 24 + '%' }, 200);

                                }
                                $("#formB").animate({ 'top': parseInt($(formB).css('top')) - ((x2 * 10) - 20) + "px", 'height': parseInt($(formB).css('height')) + (x2 * 10) + "px" });
                                setTimeout(function () {
                                    $("#hand").hide();
                                    $("#testtubeBDiv,#formB").show();
                                    $("#testtubeBDiv").animate({ left: 19 + "%", top: 54 + '%' }, 200, function () {
                                        $("#testtubeBDiv").click(function()
                                        {
                                            removeTrip()
                                            if(tempForDragAndDrop == 1)
                                            {
                                                newTaskVariable =0;
                                                tempForDragAndDropHelp = 2;
                                                $("#testtubeBDiv").css({ 'pointer-events': "none" });
                                                $("#testtubeBDiv").animate({ left: 81.3 + "%", top: 61 + '%' }, 1000);
                                            }
                                            
                                        })
                                        $("#dropAreaTesttube2").remove();
                                        $("#testtubeCDiv").draggable({
                                            containment: "#canvasBox", cursor: "pointer",
                                            revert: function () {
                                                $("#dropAreaTesttube3").css({ "border": "none" });
                                                $("#dropAreaTesttube3").html("");
                                                if (!tube3) { return true }
                                            },
                                            drag: function () {
                                                removeTrip()
                                                tempForDragAndDrop = 2;
                                                $("#dropAreaTesttube3").css({ "border": "solid 1px white" });
                                                $("#dropAreaTesttube3").html("<center><div class='newStyleAdded'>Drop the testube here</div></center>");
                                                $("#testtubeBDiv").css({ left: 19 + "%", top: 54 + '%' });
                                                $("#testtubeBDiv").draggable({ disabled: true });
                                                //$("#testtubeBDiv").draggable()
                                                $("#dropAreaTesttube3").show();
                                            }
                                        });
                                        $("#dropAreaTesttube3").droppable({
                                            accept: "#testtubeCDiv",
                                            drop: function () {
                                                newTaskVariable =1;
                                                $("#testtubeCDiv").draggable({ disabled: true });
                                                $("#dropAreaTesttube3").css({ "border": "none" });
                                                $("#dropAreaTesttube3").html("");
                                                tube3 = true;
                                                $("#testtubeBDiv").stop();
                                                $("#hand").show();
                                                $("#testtubeCDiv").hide();
                                                for (var i = 0; i < 8; i++) {
                                                    $("#hand").animate({ left: 59 + "%", top: 14 + '%' }, 200);
                                                    $("#hand").animate({ left: 55 + "%", top: 24 + '%' }, 200);
                                                }
                                                $("#formC").animate({ 'top': parseInt($(formC).css('top')) - ((x3 * 10) - 18) + "px", 'height': parseInt($(formC).css('height')) + (x3 * 10) + "px" });
                                                setTimeout(function () {
                                                    $("#hand").hide();
                                                    $("#testtubeCDiv,#formC").show();
                                                    $("#testtubeCDiv").animate({ left: 26 + "%", top: 54 + '%' }, 200, function () {
                                                        $("#testtubeCDiv").click(function()
                                                        {
                                                            removeTrip()
                                                            if(tempForDragAndDrop == 2)
                                                            {
                                                                newTaskVariable =0;
                                                                tempForDragAndDropHelp = 3;
                                                                $("#testtubeCDiv").css({ 'pointer-events': "none" });
                                                                $("#testtubeCDiv").animate({ left: 81.3 + "%", top: 61.5 + '%' }, 1000);
                                                            }
                                                        })
                                                        $("#dropAreaTesttube3").remove();
                                                        $("#testtubeDDiv").draggable({
                                                            containment: "#canvasBox", cursor: "pointer",
                                                            revert: function () {
                                                                if (!tube4) { 
                                                                    $("#dropAreaTesttube4").css({ "border": "none" });
                                                                    $("#dropAreaTesttube4").html("");
                                                                    return true 
                                                                }
                                                            },
                                                            drag: function () {
                                                                removeTrip()
                                                                tempForDragAndDrop = 3;
                                                                $("#dropAreaTesttube4").css({ "border": "solid 1px white" });
                                                                $("#dropAreaTesttube4").html("<center><div class='newStyleAdded'>Drop the testube here</div></center>");
                                                                $("#testtubeCDiv").css({ left: 26 + "%", top: 54 + '%' });
                                                                $("#testtubeCDiv").draggable({ disabled: true });
                                                                $("#dropAreaTesttube4").show();
                                                            }
                                                        });
                                                        $("#dropAreaTesttube4").droppable({
                                                            accept: "#testtubeDDiv",
                                                            drop: function () {
                                                                newTaskVariable =1;
                                                                tube4 = true;
                                                                $("#testtubeCDiv").stop();
                                                                $("#hand").show();
                                                                $("#testtubeDDiv").hide();
                                                                for (var i = 0; i < 8; i++) {
                                                                    $("#hand").animate({ left: 59 + "%", top: 14 + '%' }, 200);
                                                                    $("#hand").animate({ left: 55 + "%", top: 24 + '%' }, 200);
                                                                }
                                                                $("#formD").animate({ 'top': parseInt($(formD).css('top')) - ((x4 * 10) - 15) + "px", 'height': parseInt($(formD).css('height')) + (x4 * 10) + "px" });
                                                                $("#dropAreaTesttube4").remove();
                                                                setTimeout(function () {
                                                                    $("#hand").hide();
                                                                    $("#testtubeDDiv,#formD").show();
                                                                    $("#testtubeDDiv").animate({ left: 33.7 + "%", top: 54 + '%' }, 200, function () {
                                                                        $("#testtubeDDiv").click(function()
                                                                        {
                                                                            removeTrip()
                                                                            if(tempForDragAndDrop == 3)
                                                                            {
                                                                                newTaskVariable =0;
                                                                                tempForDragAndDropHelp = 4;
                                                                                $("#testtubeDDiv").css({ 'pointer-events': "none" });
                                                                                $("#testtubeDDiv").animate({ left: 81.3 + "%", top: 62 + '%' }, 1000);
                                                                                setTimeout(function () {
                                                                                    $("#testtubeDDiv").animate({ left: 34 + "%", top: 54 + '%' }, 1000,function()
                                                                                    {
                                                                                        tempForDragAndDropHelp = 5;
                                                                                        $("#Inference").show();
                                                                                    });
                                                                                },4000)
                                                                            }
                                                                        })
                                                                        $("#testtubeDDiv").stop();
                                                                        
                                                                        $("#testtubeDDiv").css({ left: 33.7 + "%", top: 54 + '%' })
                                                                    });

                                                                }, 4000);
                                                            }
                                                        });
                                                    });
                                                }, 4000);
                                            }
                                        });
                                    });
                                }, 4000);
                            }
                        });
                    });
                }, 4000);
            }
        });
    });
});
function wateranimate() {
    if ($('#f1').css('display') == displayArray[0]) {
        $('#f1,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f2').show();
    } else if ($('#f2').css('display') == displayArray[0]) {
        $('#f1,#f2,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f3').show();
    } else if ($('#f3').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f4').show();
    } else if ($('#f4').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f5').show();
    } else if ($('#f5').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f6').show();
    } else if ($('#f6').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f7').show();
    } else if ($('#f7').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f8').show();
    } else if ($('#f8').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f9').show();
    } else if ($('#f9').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f10').show();
    } else if ($('#f10').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f12,#f13,#f14,#f15').hide();
        $('#f11').show();
    } else if ($('#f11').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f13,#f14,#f15').hide();
        $('#f12').show();
    } else if ($('#f12').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f14,#f15').hide();
        $('#f13').show();
    } else if ($('#f13').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f15').hide();
        $('#f14').show();
    } else if ($('#f14').css('display') == displayArray[0]) {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14').hide();
        $('#f15').show();
    } else {
        $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15').hide();
        $('#f1').show();
    }
}

function roadanimate() {
    $("#rod").animate({
        top: 38 + "%", left: 34 + "%"
    }, 1000);
    $("#rod").animate({
        top: 38 + "%", left: 45 + "%"
    }, 1000);

}
function rodrev() {
    $("#rod").animate(
        { deg: 23 },
        {
            duration: 500,
            step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        }
    );
    $("#rod").animate({ top: 40 + "%", left: 44 + "%" }, 500,
        function () {
            if ((f1 == 1) && (f2 == 1) && (f3 == 1) && (f4 == 1)) {

                console.log("next");
                helpCount = 7;
                $("#NextFrameButton").show();
            }
        });
}
function SolutionNextButtonhide() {
    $("#soapSolutionLabel,#bottleLabel").hide();
    $("#beaker2,#waterInBeaker").hide();
    $("#bottle,#dropperWrapper,#bottleWater,#dropperStandUnder").hide();
    $("#dropperStandTop").hide();
    $("#dropperDiv,#drop,#drop5ml").hide();
    $("#controls2").hide();
}
//*--Function to remove help tooltip---
// function removeTrip() {
//     if (tripClickFlag == true) {
//         $('.trip-block').hide();
//         trip.stop();
//         tripClickFlag = false;
//     }
// }
