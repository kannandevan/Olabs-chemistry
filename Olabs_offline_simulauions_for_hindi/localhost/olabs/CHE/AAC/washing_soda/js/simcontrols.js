var spatulaDragFlag = true;
var interativeItem =
    ".boiling-tube-div," +
    ".cylinder-solution-div," +
    ".spatula-salt-div," +
    ".wash-bottle," +
    ".bottle-thumb";
var thumbActive; var glassRodDropCount = 1;
var inference = 0;
var glassRodOnTable = true;
var glassRodClickCount = 0;
var hclBottleDragFlag = false;
var cylinderForHCLTest = false;
var hclCount = 1;
var hclTest = false;
var bottleCount = 0;
var tubeNo;
var tubeFlag = true;
$(document).ready(function () {
    // $("#btnNext3").show();
	gt = new Gettext({ 'domain': 'messages' });

    $("#expName").html(gt.gettext("To Identify Washing soda or Baking soda among given Samples of Chemicals"))
    $("#simReset").html(gt.gettext("RESET"))
    $("#simHelp").html(gt.gettext("HELP"))
    // $(".flex-align-center").html(gt.gettext("HELP"))

    $("#changeScreenBtn").html(gt.gettext("MAXIMIZE"))
    // $(".sim-alert-heading").html(gt.gettext("Alert"))
    // $(".sim-alert-body").html(gt.gettext("Do you want to reset the simulation"))
    // $(".reset").html(gt.gettext("Yes"))
    // $("#simResetCancel").html(gt.gettext("No"))

    		  $('[data-translate]').html(function (index, originalHtml) {
        console.log(originalHtml);
        return gt.gettext(originalHtml);
  });

	$('[data-translate-value]').val(function (index, originalHtml) {
		console.log(originalHtml)
		return gt.gettext(originalHtml);
	});

    helpMsg = gt.gettext("Click on the sodium carbonate decahydrate bottle");
    selector = "#bottle1";
    helpPos = "e"

    for (i = 1; i < 11; i++) {
        var path =  "images/waterDrop/" + i + ".png";
        var img = "<img src='" + path + "' class='drop-animation-img' id='dropAnimationImg" + i + "'>"
        $(".water-drop-animation-div").append(img);
    }
    for (i = 1; i < 25; i++) {
        var path =  "images/redToBlue/" + i + ".png";
        var img = "<img src='" + path + "' class='litmus-red-to-blue-animation-img' id='litmusRedToBlueImg" + i + "'>"
        $(".litmus-red-to-blue-animation-div").append(img);
    }
    for (i = 1; i < 104; i++) {
        var path =  "images/brisk/" + i + ".png";
        var img = "<img src='" + path + "' class='brisk-img' id='brisk" + i + "'>"
        $(".brisk-div").append(img);
    }
    removePointerEvents();
    $("#thumb1").pointerEnable();


    $(".bottle-thumb").click(function () {
        removeTrip();
        helpMsg = gt.gettext("Click on the cap to open the bottle");
        selector = ".salt-bottle-cap";
        helpPos = "w"
        removePointerEvents();
        $(this).pointerDisable();
        bottleCount++;
        $(".bottle-thumb").removeClass("thumb-active");
        $(this).addClass("thumb-active");
        thumbActive = $(this).data('thumb');
        $(".salt-bottle-cap").pointerEnable().fadeIn();
        if (thumbActive == "sodium-carbonate") {
            $("#saltBottle1").fadeIn();
        } else if (thumbActive == "ammonium-chloride") {
            $("#saltBottle2").fadeIn();
        }
        else {
            $("#saltBottle3").fadeIn();
        }

    });
    $(".salt-bottle-cap").click(function () {
        removeTrip();
        $(".spatula-bottle-drop-area").show();
        $(".salt-bottle-cap").animate({
            left: 82 + "%",
            top: 82 + "%",

        });
        $(".salt-bottle-cap").pointerDisable();

        $(".spatula-salt-div").pointerEnable();
        helpMsg = gt.gettext("Drag and drop the Spatula towards the bottle");
        selector = ".spatula-salt-div";
        helpPos = "n"
    });



    $(".spatula-salt-div").draggable({
        tolerance: "touch",
        containment: "#mainDiv",
        start: function () {
            removeTrip();
            $(this).rotateIt(-30, 500);
        },
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                if (spatulaDragFlag) {
                    $(this).rotateIt(0, 500);
                    $(this).animate({
                        left: "67%",
                        top: "76%",

                    }, function () {
                        $("#simHelp").pointerEnable();

                    });
                } else {
                    $(this).rotateIt(-31, 500);
                    $(this).animate({
                        left: "84%",
                        top: "22%",

                    }, function () {
                        $("#simHelp").pointerEnable();

                    });
                }

            }
        },
        drag: function () {
            $("#simHelp").pointerDisable();

            removeTrip();
        },

    });

    $(".spatula-bottle-drop-area").droppable({
        tolerance: "touch",
        accept: ".spatula-salt-div",
        drop: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

            spatulaDragFlag = false;
            $(".spatula-bottle-drop-area").hide();
            $('.spatula-salt-div').animate({
                left: "84%",
                top: "52%",

            });
            setTimeout(function () {
                $(".salt-spatula").show()

                $('.spatula-salt-div').animate({
                    top: "22%",
                });

                removePointerEvents();
                $(".spatula-salt-div").css({ "pointer-events": "" })

                if (thumbActive == "sodium-carbonate") {
                    helpMsg = gt.gettext("Drag and drop the Spatula towards the Boiling tube A");
                    selector = ".spatula-salt-div";
                    helpPos = "w"
                    $(".spatula-tube-drop-area-1").show();
                } else if (thumbActive == "ammonium-chloride") {
                    helpMsg = gt.gettext("Drag and drop the Spatula towards the Boiling tube B");
                    selector = ".spatula-salt-div";
                    helpPos = "w"
                    $(".spatula-tube-drop-area-2").show();

                } else {
                    helpMsg = gt.gettext("Drag and drop the Spatula towards the Boiling tube C");
                    selector = ".spatula-salt-div";
                    helpPos = "w"
                    $(".spatula-tube-drop-area-3").show();

                }
                $("#simHelp").pointerEnable();

            }, 500)
        }
    });

    $(".spatula-tube-drop-area-1").droppable({
        tolerance: "touch",
        accept: ".spatula-salt-div,.cylinder-solution-div,.glass-rod",
        drop: function (e, ui) {
            $(".drop-area").hide();
            var draggableId = ui.draggable.attr("id");
            var droppableId = $(this).attr("id");
            if (hclTest) {
                boilingDropAreaFunctions(draggableId, this, 1);

            } else {
                spatulaDragFlag = true;
                helpMsg = gt.gettext("Click here to shake.");
                selector = "#boilingTubeDiv1";
                helpPos = "w"
                boilingDropAreaFunctions(draggableId, this, 1);
                $(".spatula-salt-div").pointerDisable();
            }
        }
    });

    $(".spatula-tube-drop-area-2").droppable({

        tolerance: "touch",
        accept: ".spatula-salt-div,.cylinder-solution-div,.glass-rod",
        drop: function (e, ui) {
            var draggableId = ui.draggable.attr("id");
            var droppableId = $(this).attr("id");
            if (hclTest) {
                boilingDropAreaFunctions(draggableId, this, 2);

            } else {

                spatulaDragFlag = true;
                helpMsg = gt.gettext("Click here to shake.");
                selector = "#boilingTubeDiv2";
                helpPos = "w"
                boilingDropAreaFunctions(draggableId, this, 2);
                $(".spatula-salt-div").pointerDisable();

            }

        }
    });

    $(".spatula-tube-drop-area-3").droppable({
        tolerance: "touch",
        accept: ".spatula-salt-div,.cylinder-solution-div,.glass-rod",
        drop: function (e, ui) {
            var draggableId = ui.draggable.attr("id");
            var droppableId = $(this).attr("id");
            if (hclTest) {
                boilingDropAreaFunctions(draggableId, this, 3);

            } else {

                helpMsg = gt.gettext("Click here to shake.");
                selector = "#boilingTubeDiv3";
                helpPos = "w";

                boilingDropAreaFunctions(draggableId, this, 3);
                $(".spatula-salt-div").pointerDisable();

            }

        }
    });

    $("#washBottle").draggable({
        containment: "#mainDiv",
        start: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

            $(this).rotateIt(-50, 500);
        },
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                washBottleRevert(this);
            }
        },
    });



    $(".washbottle-cylinder-drop-area").droppable({
        tolerance: "touch",
        accept: "#washBottle,.hcl-bottle-div",
        drop: function () {
            removeTrip();
            $(this).hide();

            if (cylinderForHCLTest) {
                removeTrip();
                $("#simHelp").pointerDisable();
                $(".hcl-bottle-div").pointerDisable();
                $(".hcl-bottle-div").animate({
                    left: '51%',
                    top: '21%'
                }).rotateIt(-100, 500);

                setTimeout(function () {
                    $(".poring-animation-img-1").show();
                    $(".poring-animation-img-1").animate({
                        height: '46%'
                    }, 1000);
                    $('.solution-div-1ml').toggle("blind", { "direction": "down" }, 1700, function () {
                        $(".poring-animation-img-1").hide(function () {
                            $(this).css({ height: '50%' });
                        });
                        $(".hcl-bottle-div").rotateIt(0);

                        $(".hcl-bottle-div").animate({
                            left: "66%",
                            top: "54%"
                        }, function () {
                            $(".hcl-bottle-cap").animate({
                                left: "68%",
                                top: "44%"
                            });
                            $("#simHelp").pointerEnable();

                            selector = ".cylinder-solution-div";
                            helpPos = "n"
                        });
                        if (hclCount == 1) {
                            $(".spatula-tube-drop-area-1").show();
                            helpMsg = gt.gettext("Drag and drop the Measuring Cylinder towards the Boiling tube A.");
                            hclCount = 2;
                        } else if (hclCount == 2) {
                            $(".spatula-tube-drop-area-2").show();
                            helpMsg = gt.gettext("Drag and drop the Measuring Cylinder towards the Boiling tube B.");
                            hclCount = 3

                        } else {
                            helpMsg = gt.gettext("Drag and drop the Measuring Cylinder towards the Boiling tube C.");
                            $(".spatula-tube-drop-area-3").show();
                        }
                        $(".cylinder-solution-div").pointerEnable();
                    });
                }, 600)

            } else {
                $("#washBottle").pointerDisable();
                $("#washBottle").animate({
                    left: "52.5%",
                    top: "14%"
                });
                $("#washBottle").rotateIt(-85, 500, function () {

                });

                setTimeout(function () {
                    $(".poring-animation-img-1").show();
                    $(".poring-animation-img-1").animate({
                        height: '32%'
                    }, 1700);
                    $('.solution-div').toggle("blind", { "direction": "down" }, 1700, function () {
                        $(".poring-animation-img-1").hide(function () {
                            $(this).css({ height: '50%' });
                        });
                        $("#washBottle").rotateIt(0);

                        $("#washBottle").animate({
                            left: "55%",
                            top: "46%"
                        }, function () {
                            $("#simHelp").pointerEnable();

                        });
                        if (bottleCount == 1) {
                            helpMsg = gt.gettext("Drag and drop the Measuring Cylinder towards the Boiling tube A.");
                            selector = ".measuring-cylinder";
                            helpPos = "w"
                            $(".spatula-tube-drop-area-1").show();
                        } else if (bottleCount == 2) {
                            helpMsg = gt.gettext("Drag and drop the Measuring Cylinder towards the Boiling tube B.");
                            selector = ".measuring-cylinder";
                            helpPos = "w"
                            $(".spatula-tube-drop-area-2").show();

                        } else {
                            helpMsg = gt.gettext("Drag and drop the Measuring Cylinder towards the Boiling tube C.");
                            selector = ".measuring-cylinder";
                            helpPos = "w"
                            $(".spatula-tube-drop-area-3").show();
                            hclCount = 1
                        }
                        $(".cylinder-solution-div").pointerEnable();
                    });
                }, 1000)

            }


        }
    });

    $(".cylinder-solution-div").draggable({
        containment: "#mainDiv",
        tolerance: "touch",
        start: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

            $(this).rotateIt(-50, 500);
            $("#measuringCylinderSolution1").show();
            $(".solution-div").hide();
        },
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                cylinderSolutionRevert(this, is_valid_drop);

            }
        },
    });


    $("#boilingClick1").click(function () {
        removePointerEvents();
        removeTrip();
        $("#boilingTubeDiv1").animate({ top: "-170%" }).css({ "transform-origin": "top center" }).shakeArc(10, 100, 2, function () {
            $("#simHelp").pointerDisable();
            $("#boilingTubeDiv1").animate({ top: "-36%" }, function () {
                helpMsg = gt.gettext("Click on the ammonium chloride bottle.");
                selector = "#bottle2";
                helpPos = "e"
                $("#thumb2").pointerEnable();
                $("#simHelp").pointerEnable();

            });
        });
        $("#saltTube1").fadeOut(2000);
        $(".salt-bottle").fadeOut();
        $(".salt-bottle-cap").fadeOut(function () {
            $(this).css({
                left: '82.5%',
                top: '47%',
            });
        })

    });

    $("#boilingClick2").click(function () {
        removePointerEvents();
        removeTrip();
        $("#simHelp").pointerDisable();

        $("#boilingTubeDiv2").animate({ top: "-170%" }).css({ "transform-origin": "top center" }).shakeArc(10, 100, 2, function () {

            $("#boilingTubeDiv2").animate({ top: "-36%" }, function () {
                helpMsg = gt.gettext("Click on the sodium chloride bottle.");
                selector = "#bottle3";
                helpPos = "e"
                $("#thumb3").pointerEnable();
                $("#simHelp").pointerEnable();

            });
        });
        $("#saltTube2").fadeOut(2000);
        $(".salt-bottle").fadeOut()
        $(".salt-bottle-cap").fadeOut(function () {
            $(this).css({
                left: '82.5%',
                top: '47%',
            });
        })
    });

    $("#boilingClick3").click(function () {
        removePointerEvents();
        removeTrip();
        $("#simHelp").pointerDisable();

        $("#boilingTubeDiv3").animate({ top: "-170%" }).css({ "transform-origin": "top center" }).shakeArc(10, 100, 2, function () {
            $("#boilingTubeDiv3").animate({ top: "-36%" }, function () {
                if (bottleCount == 3) {
                    helpMsg = gt.gettext("Click on the Next button.");
                    selector = "#btnNext1";
                    helpPos = "w"
                    $("#btnNext1").fadeIn();
                    $("#simHelp").pointerEnable();

                }
            });
        });
        $("#saltTube3").fadeOut(2000);
        $(".salt-bottle").fadeOut()
        $(".salt-bottle-cap").fadeOut(function () {
            $(this).css({
                left: '82.5%',
                top: '47%',
            });
        });
        $(".salt-bottle-cap").fadeOut()
    });

    // $(".glass-rod").rotateIt(90, 0);


    // Nex button click (1)
    $("#btnNext1").click(function () {
        removeTrip();
        $(".label-page1").fadeOut();
        $(".label-page2").fadeIn();

        $("#glassRod").pointerEnable();
        helpMsg = gt.gettext("Drag and drop Glass rod towards Boiling tube A.");
        selector = ".glass-rod";
        helpPos = "w"
        $(".salt-bottle,.salt-bottle-cap,.spatula-salt-div,.wash-bottle,.cylinder-solution-div").fadeOut(function () {
            $("#btnNext1").fadeOut();
        });
        $(".red-litmus,.glass-rod ,.spatula-tube-drop-area-1").fadeIn(500);
    });


    $("#glassRod").draggable({
        containment: "#mainDiv",
        revert: function (valid) {
            if (!valid) {
                if (glassRodOnTable) {
                    $(this).animate({
                        left: "64%",
                        top: "52%"
                    }, function () {
                        $("#simHelp").pointerEnable();
                    });
                } else {
                    if (tubeNo == 1) {
                        $(this).animate({
                            left: "9%",
                            top: "32%"
                        }, function () {
                            $("#simHelp").pointerEnable();
                        });
                    } else if (tubeNo == 2) {
                        $(this).animate({
                            left: "19.5%",
                            top: "32%"
                        }, function () {
                            $("#simHelp").pointerEnable();
                        });
                    } else {
                        $(this).animate({
                            left: "30%",
                            top: "32%"
                        }, function () {
                            $("#simHelp").pointerEnable();
                        });
                    }
                }



            }
        },
        start: function () {
            $("#simHelp").pointerDisable();

            removeTrip();
        }
    });

    $(".red-litmus-drop-area1").droppable({
        accept: "#glassRod",
        tolerance: "touch",
        drop: function () {
            $("#simHelp").pointerDisable();
            removeTrip();
            $(this).hide();
            $("#glassRod").css({ "transform-origin": "bottom center" }).rotateIt(63, 500).animate({
                top: "12%",
                left: "56%"
            });
            setTimeout(function () {

                $(".water-drop-animation-div").frameAnimate(100, 1, function () {
                    if (tubeNo == 1) {
                        $("#glassRod").pointerDisable();
                        inference = 1;
                        helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                        selector = "#inference";
                        helpPos = "e";
                        $(".litmus-red-to-blue-animation-div").frameAnimate(200, 1, function () {
                            $("#litmusRedToBlueImg24").show();
                            $('.inference').fadeIn(1000, function () {
                                glassRodBackToTable();
                                $(".spatula-tube-drop-area-2").show()
                                // $("#simHelp").pointerEnable();
                                $("#note0").fadeIn(function () {
                                    setTimeout(function () {
                                        $("#note0").fadeOut();
                                        $("#simHelp").pointerEnable();
                                    }, 5000)
                                });

                            });

                        });

                    } else if (tubeNo == 2) {
                        inference = 2;
                        helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                        selector = "#inference";
                        helpPos = "e"

                        $("#glassRod").pointerDisable();
                        setTimeout(function () {
                            $('.inference').fadeIn(2000, function () {
                                setTimeout(function () {
                                    glassRodBackToTable()
                                    $(".spatula-tube-drop-area-3").show()
                                    $("#note0").fadeIn(function () {
                                        setTimeout(function () {
                                            $("#note0").fadeOut();
                                            $("#simHelp").pointerEnable();
                                        }, 5000)
                                    });

                                }, 1000)
                            });
                        }, 1000);

                    } else if (tubeNo == 3) {
                        inference = 3;
                        helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                        selector = "#inference";
                        helpPos = "e"
                        $("#glassRod").pointerDisable();
                        setTimeout(function () {
                            $('.inference').fadeIn(2000, function () {
                                setTimeout(function () {
                                    glassRodBackToTable();
                                    $("#simHelp").pointerEnable();

                                }, 1000)
                            });
                        }, 1000);
                    }

                });



            }, 700)
        }
    });


    $("#inference").click(function () {
        if (tubeFlag) {


            if (tubeNo == 1) {
                $(".litmus-red-to-blue-animation-div").children().hide();
                $("#litmusRedToBlueImg1").show();
                inferenceFlag = false;
                helpMsg = gt.gettext("Drag and drop Glass rod towards the Boiling tube B.");
                selector = ".glass-rod";
                helpPos = "w"
            } else if (tubeNo == 2) {
                inferenceFlag = false;
                helpMsg = gt.gettext("Drag and drop Glass rod towards the Boiling tube C.");
                selector = ".glass-rod";
                helpPos = "w"
            }
        }

    })
    $("#bottleCap").click(function () {
        removeTrip();
        $(".litmus-red-to-blue-animation-div").children().hide();
        $("#litmusRedToBlueImg1").show();
        $("#inference").fadeOut();
        cylinderForHCLTest = true;
        hclTest = true;
        $(".washbottle-cylinder-drop-area").fadeIn();
        $(this).animate({
            left: '76%',
        })
        $(this).animate({
            top: '68%'

        }).pointerDisable();
        $(".hcl-bottle-div").pointerEnable();
        helpMsg = gt.gettext("Drag and drop the dil. HCL bottle towards the <br>Measuring Cylinder.");
        selector = ".hcl-bottle-div";
        helpPos = "n"

        hclBottleDragFlag = true;
        $(".hcl-bottle-div").draggable({
            containment: "#mainDiv",
            revert: function (is_valid_drop) {
                if (!is_valid_drop) {
                    hclBottleRevert('.hcl-bottle-div')
                }
            },
            start: function () {
                removeTrip();
                $("#simHelp").pointerDisable();

            }
        });

    });

    $("#btnNext2").click(function () {
        $(".label-page2").fadeOut();
        $(".label-page3,.label-measuring-cylinder").fadeIn();
        removeTrip();
        hclTest = true;
        tubeFlag = false;
        $(this).fadeOut();
        $(".litmus-red-to-blue-animation-div ,#glassRod,.red-litmus,.wash-bottle,#inference").fadeOut();

        $(".cylinder-solution-div,#boilingTubeDiv2,#boilingTubeDiv3,#bottleCap ").fadeIn();

        $(".hcl-bottle-div,.cylinder-solution-div").fadeIn();

        helpMsg = gt.gettext("Click here to open the dil. HCL Bottle cap.");
        selector = ".hcl-bottle-cap";
        helpPos = "n"

        $('.hcl-bottle-cap').pointerEnable();


    });
    var lastVar = 0;
    $(".cork,.thistle-funnel,.glass-tube,.dropper,.test-tube-div").pointerDisable()
    $("#btnNext3").click(function () {
        $(".label-page3,.label-test-tube,.label-measuring-cylinder").fadeOut();
        $(".label-page4,.label-hcl-bottle").fadeIn();
        $(".label-page3,.label-test-tube,.label-measuring-cylinder").hide();

        $("#inference").hide();
        removeTrip();
        helpMsg = gt.gettext("Drag and drop the Cork towards the Boiling tube A.");
        selector = ".cork";
        helpPos = "w"

        $(".last-drop-area").show();
        $(".cork").pointerEnable()
        $("#boilingTubeDiv1").hide().css({ "left": '64%' });
        $(".litmus-red-to-blue-animation-div ,#glassRod,.wash-bottle,.red-litmus,.cylinder-solution-div,#boilingTubeDiv2,#boilingTubeDiv3,#bottleCap ").fadeOut();
        $(".thistle-funnel,.dropper,.glass-tube,.cork,#boilingTubeDiv1").fadeIn();
        lastVar = 1;
        $(this).hide();
    })
    $(".cork").draggable({
        containment: "#mainDiv",

        revert: function (valid) {
            if (!valid) {
                $('.cork').animate({
                    left: '84%',
                    top: '66%'
                })
            }
        },
        start: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

        }
    });

    $(".thistle-funnel").draggable({
        containment: "#mainDiv",
        start: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

            // $(this).rotateIt(50);
        },
        revert: function (valid) {
            if (!valid) {
                // $(this).rotateIt(78);

                $(this).animate({
                    left: '92%',
                    top: '41%'
                }, function () {
                    $("#simHelp").pointerEnable();

                })
            }
        }
    });



    $(".glass-tube").draggable({
        containment: "#mainDiv",
        start: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

        },
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    top: '72%',
                    left: '45%'
                }, function () {
                    $("#simHelp").pointerEnable();

                });
            }
        }
    });
    $(".dropper").draggable({
        containment: "#mainDiv",
        start: function () {
            removeTrip()
            $("#simHelp").pointerDisable();

        },
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '69%',
                    top: '40.5%'
                }, function () {
                    $("#simHelp").pointerEnable();

                })
            }
        }
    });


    $(".test-tube-div").draggable({
        containment: "#mainDiv",
        start: function () {
            removeTrip();
            $("#simHelp").pointerDisable();

        },
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '39%',
                    top: '-34%'
                }, function () {
                    $("#simHelp").pointerEnable();

                })
            }
        }
    })

    $(".testTube-drop-area").droppable({
        accept: ".test-tube-div",
        drop: function () {
            $(".test-tube-div").animate({
                left: '-159%',
                top: '20%'
            })
            setTimeout(function () {
                $(".test-solution-div").animate({
                    'background-color': 'rgba(255, 255, 255,.85)'
                }, 5000, function () {
                    $("#note1").fadeIn(function () {
                        setTimeout(function () {
                            $("#note1").fadeOut();
                            $("#simHelp").pointerEnable();
                            inference = 7;
                            $("#inference").fadeIn();
                            $("#simHelp").pointerEnable();

                            helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                            selector = "#inference";
                            helpPos = "e"
                        }, 5000)
                    });

                });

            }, 2000)
        }
    })
    $(".last-drop-area").droppable({
        accept: ".cork,.glass-tube,.dropper,.thistle-funnel",
        drop: function () {
            if (lastVar == 1) {
                helpMsg = "Drag and drop the Thistle funnel towards the<br> Boiling tube A.";
                selector = ".thistle-funnel";
                helpPos = "w"
                $(".label-cork").fadeOut();

                $(".cork").animate({
                    left: '28.5%',
                    top: '44%'
                }, function () {
                    $("#simHelp").pointerEnable();
                });
                lastVar = 2;
                $(".cork,.thistle-funnel,.glass-tube,.dropper").pointerDisable()
                $(".thistle-funnel").pointerEnable()
            } else if (lastVar == 2) {
                lastVar = 3
                helpMsg = gt.gettext("Drag and drop the Delivery tube towards the Boiling tube A.");
                selector = ".glass-tube";
                helpPos = "n"
                $(".label-thistle-funnel").fadeOut();
                $(".thistle-funnel").animate({
                    left: '26.3%',
                    top: '28%'
                }, function () {
                    $("#simHelp").pointerEnable();
                });
                $(".cork,.thistle-funnel,.glass-tube,.dropper").pointerDisable()
                $(".glass-tube").pointerEnable()
            } else if (lastVar == 3) {
                $(".label-delivery-tube").fadeOut();

                $(".glass-tube").animate({
                    left: '31.5%',
                    top: '44%'
                }, function () {
                    helpMsg = gt.gettext("Drag and drop the Dropper towards the Boiling tube A.");
                    selector = ".dropper";
                    helpPos = "n"
                    $("#simHelp").pointerEnable();
                });
                lastVar = 4;
                $(".cork,.thistle-funnel,.glass-tube,.dropper").pointerDisable()
                $(".dropper").pointerEnable()
            } else if (lastVar == 4) {
                $(".dropper").pointerDisable()
                $(".dropper").animate({
                    left: '28.5%',
                    top: '1%'
                }, function () {
                    $(".hcl-drop").show().animate({
                        top: '43%'
                    }).fadeOut();
                    setTimeout(function () {
                        $(".dropper").animate({
                            left: '69%',
                            top: '40.5%',
                        }, function () {
                            setTimeout(() => {
                                $("#simHelp").pointerEnable();
                                helpMsg = gt.gettext("Drag and drop the Test tube containing Lime water<br>towards the other end of the Delivery tube.");
                                selector = ".last-help-div";
                                helpPos = "w"
                                $(".test-tube-div").pointerEnable();
                            })
                        });
                        lastVar = 5;
                        $(".stand-div,.testTube-drop-area,#limewaterLabel").show();
                        // $(".label-test-tube").css("visibility","visible");

                    }, 1000)
                });
            } else if (lastVar == 5) {

            }
        }
    })


    $("#changeScreenBtn").click(function () {
        removeTrip();
    })

});

function pourAnimate() {
    var pourCount = 1
    $("#poringAnimationImg1").show();

    var pourInterval = setInterval(function () {
        $("#poringAnimationImg" + pourCount).hide();
        pourCount++
        if (pourCount > 20) {
            pourCount = 1;
        }
        $("#poringAnimationImg" + pourCount).show();
    }, 25);
    setTimeout(function () {
        clearInterval(pourInterval);
    }, 25 * 20 * 2);
}

function pourAnimate(id, duration, imgCount, times) {
    if (times == 0 || times == "undefined") {
        times = 1;
    }
    var pourCount = 1
    $(id + pourCount).show();

    var pourInterval = setInterval(function () {
        $(id + pourCount).hide();
        pourCount++
        if (pourCount > 20) {
            pourCount = 1;
        }
        $(id + pourCount).show();
    }, duration);
    setTimeout(function () {
        clearInterval(pourInterval);
    }, duration * imgCount * times);
}

function washBottleRevert(washBottle) {
    $(washBottle).rotateIt(0, 500);
    $(washBottle).animate({
        left: "55%",
        top: "46%",

    }, function () {
        $("#simHelp").pointerEnable();
    });
}
function hclBottleRevert(id) {
    $(id).rotateIt(0, 500);
    $(id).animate({
        left: "66%",
        top: "54%",

    }, function () {
        $("#simHelp").pointerEnable();
    });
}
function glassRodBackToTable() {
    glassRodOnTable = true;

    // $('#glassRod').rotateIt(90, 500).css({ "transform-origin": "50% 50%", "-ms-transform-origin": "50% 50%" }).animate({
    //     "top": "67%",
    //     "left": "64%"
    // }, { queue: false });

    $('#glassRod').rotateIt(0, 500).animate({
        "top": "52%",
        "left": "64%"
    }, function () {
        $("simHelp").pointerEnable();
    });
}

function cylinderSolutionRevert(selector, valid) {
    console.log(selector, valid)
    $("#measuringCylinderSolution1").hide();
    if (valid) {
        if (cylinderForHCLTest) {
            $(".solution-div-1ml").fadeOut();
        } else {
            $(".solution-div").fadeOut();

        }
        $(".measuring-cylinder-solution").hide();
    } else {
        if (cylinderForHCLTest) {
            $(".solution-div-1ml").fadeIn();

        } else {
            $(".solution-div").fadeIn();
        }
    }
    $(selector).rotateIt(0, 500);
    $(selector).animate({
        left: "42%",
        top: "42%",

    }, function () {
        if (valid) {

        } else {
            $("#simHelp").pointerEnable();
        }
    });

}
function boilingDropAreaFunctions(dragId, dropId, tube) {
    tubeNo = tube;
    var saltId, spatulaSaltDivLeft, spatulaSaltDivTop, cylinderSolutionDivLeft;
    var cylinderSolutionId, poringAnimationId, boilingTubeSolutionId;
    var tubeId, glassRodLeft;

    $(dropId).hide();

    if (tube == 1) {
        saltId = "#saltTube1";
        spatulaSaltDivLeft = "8.5%";
        spatulaSaltDivTop = "33%"
        cylinderSolutionDivLeft = '16%';
        cylinderSolutionId = "#measuringCylinderSolution1";
        poringAnimationId = "#poringAnimationImg2";
        tubeId = "#boilingTubeDiv1";
        glassRodLeft = '9%';
        if (hclTest) {
            boilingTubeSolutionId = "#boilingTubeSolutin11";
        } else {

            boilingTubeSolutionId = "#boilingTubeSolutin1";
            helpMsg = gt.gettext("Drag and drop the Wash Bottle towards the Measuring Cylinder.");
            selector = "#washBottle";
            helpPos = "w"
            if (dragId == "cylinderSolutionDiv") {
                helpMsg = gt.gettext("Click on the Boiling tube A to shake it.");
                selector = "#boilingTubeDiv1";
                helpPos = "n"
            }
        }
    } else if (tube == 2) {
        saltId = "#saltTube2";
        spatulaSaltDivLeft = "18.5%";
        spatulaSaltDivTop = "33%"
        cylinderSolutionDivLeft = '26.5%';
        cylinderSolutionId = "#measuringCylinderSolution2";
        poringAnimationId = "#poringAnimationImg3";
        tubeId = "#boilingTubeDiv2";
        glassRodLeft = '19%';
        if (hclTest) {
            boilingTubeSolutionId = "#boilingTubeSolutin22";

        } else {
            boilingTubeSolutionId = "#boilingTubeSolutin2";
            helpMsg = gt.gettext("Drag and drop the Wash Bottle towards the Measuring Cylinder.");
            selector = "#washBottle";
            helpPos = "w"
            if (dragId == "cylinderSolutionDiv") {
                helpMsg = gt.gettext("Click on the Boiling tube B to shake it.");
                selector = "#boilingTubeDiv2";
                helpPos = "n"
            }

        }


    } else if (tube == 3) {
        saltId = "#saltTube3";
        spatulaSaltDivLeft = "28.5%";
        spatulaSaltDivTop = "33%"
        cylinderSolutionDivLeft = '37.5%';
        cylinderSolutionId = "#measuringCylinderSolution3";
        poringAnimationId = "#poringAnimationImg4";
        tubeId = "#boilingTubeDiv3";
        glassRodLeft = '29.5%';

        if (hclTest) {
            boilingTubeSolutionId = "#boilingTubeSolutin33";
        } else {
            helpMsg = gt.gettext("Drag and drop the Wash Bottle towards the Measuring Cylinder.");
            selector = "#washBottle";
            helpPos = "w"
            boilingTubeSolutionId = "#boilingTubeSolutin3";
            if (dragId == "cylinderSolutionDiv") {
                helpMsg = gt.gettext("Click on the Boiling tube C to shake it.");
                selector = "#boilingTubeDiv3";
                helpPos = "n"
            }
        }
    }
    var poringAnimationHeight;
    if (hclTest) {
        poringAnimationHeight = "24%"
    } else {
        poringAnimationHeight = "33%"
    }

    if (dragId == "spatulaSaltDiv") {  //spatula dropped
        spatulaFlag = false;
        cylinderFlag = true;
        $("#simHelp").pointerDisable();

        $('.spatula-salt-div').animate({
            left: spatulaSaltDivLeft,
            top: spatulaSaltDivTop,

        });
        $(".spatula-salt-div").rotateIt(0, 500);

        setTimeout(function () {
            $("#saltSpatula").animate({
                top: "312%"
            }, 500, function () {
                $("#saltSpatula").hide().css({
                    top: "36%"
                });
                $(saltId).fadeIn();
                $(".spatula-salt-div").animate({
                    left: '67%',
                    top: '76%'
                }, 1000);
                $(".washbottle-cylinder-drop-area").show();
                $("#simHelp").pointerEnable();
                $("#washBottle").pointerEnable();
            });

        }, 900)
    } else if (dragId == "cylinderSolutionDiv") {// cylinder Dropped
        $("#simHelp").pointerDisable();

        $(".cylinder-solution-div").animate({
            left: cylinderSolutionDivLeft,
            top: "15%",
        });


        $(".cylinder-solution-div").rotateIt(-92, 100);
        $(cylinderSolutionId).hide();
        $("#measuringCylinderSolution").show();



        setTimeout(function () {
            $("#simHelp").pointerDisable();
            $(poringAnimationId).show().animate({ height: poringAnimationHeight }, 1600, function () {
                $(poringAnimationId).hide();
                cylinderSolutionRevert(".cylinder-solution-div", true);
                $("#simHelp").pointerDisable();
                removePointerEvents();
                if (!hclTest) {
                    $("#simHelp").pointerEnable();

                    $(tubeId).pointerEnable();
                } else {
                    $("#simHelp").pointerDisable();
                    if (tube == 1) {
                        $("#simHelp").pointerDisable();
                        setTimeout(function () {
                            $("#simHelp").pointerDisable();
                            $(".brisk-div").frameAnimate(100, 1, function () {
                                inference = 4;
                                $("#inference").fadeIn();
                                $("#simHelp").pointerEnable();
                                helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                                selector = "#inference";
                                helpPos = "e"

                            })
                        }, 500)
                    } else {
                        $(saltId).css({
                            width: '36%',
                            left: '35%',
                            top: '92%',
                        });
                        setTimeout(function () {
                            $(saltId).fadeIn(2000)
                            if (tube == 2) {
                                inference = 5;
                                $("#inference").fadeIn();
                                helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                                selector = "#inference";
                                helpPos = "e"
                                $("#simHelp").pointerEnable();

                            } else {
                                $("#simHelp").pointerEnable();
                                inference = 6;
                                helpMsg = gt.gettext("Click on the Inference button to see the observation.");
                                selector = "#inference";
                                helpPos = "e"
                                $("#inference").fadeIn();

                            }
                        }, 500)
                    }

                }
            });
            $(boilingTubeSolutionId).toggle("blind", { "direction": "down" }, 2500);


        }, 1300);

    } else if (dragId == "glassRod") {//Glass rod dropped
        $("#inference").hide();
        removeTrip();
        glassRodOnTable = false;
        glassRodClickCount++;
        $("#" + dragId).animate({
            left: glassRodLeft,
            top: "32%"
        }, function () {
            $("#simHelp").pointerEnable();
        });
        glassRodDropCount++;
        $(".red-litmus-drop-area1").show();

        inference = 1;
        helpMsg = gt.gettext("Drag and drop the Glass rod towards the red litmus.");
        selector = "#glassRod";
        helpPos = "e"

    }



}
function removePointerEvents() {
    $(interativeItem).css("pointer-events", "none");
}

function removeTrip() {
    if (tripFlag == true) {
        $('.trip-block').hide();
        trip.stop();
        tripFlag == false;
    }
}