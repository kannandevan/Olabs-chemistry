var waterAnim3, waterAnim4
var turnsTemp = 1;
var flagVariable3 = 0, flagVariable4 = 0;

var imageArrayWater3 =
    ["../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10001.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10002.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10003.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10004.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10005.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10006.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10007.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10008.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10009.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10010.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10011.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10012.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10013.png"
    ]

var imageArrayWater4 =
    ["../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10001.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10002.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10003.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10004.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10005.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10006.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10007.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10008.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10009.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10010.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10011.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10012.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10013.png"
    ]

var imageArrayFlame =
    ["../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0001.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0002.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0003.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0004.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0005.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0006.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0007.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0008.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0009.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0010.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0011.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0012.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0013.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0014.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/Flame/flame ani0015.png"
    ]

var imageArrayBubble =
    ["../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0001.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0002.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0003.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0004.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0005.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0006.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0007.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0008.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0009.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0010.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0011.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0012.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0013.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0014.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0015.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0016.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0017.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0018.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0019.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0020.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0021.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0022.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0023.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0024.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0025.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0026.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0027.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0028.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0029.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0030.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0031.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0032.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0033.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0034.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0035.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0036.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0037.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0038.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0039.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0040.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0041.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0042.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0043.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0044.png",
        "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/bubble/RECOVER_Chrysanthemum Stunt0045.png"
    ]

function NaTempDrop() {
    roomTemp();
}

function dragMeasMeth() {
    $("#measCylTemp").draggable({
        containment: "#canvasBox",
        revert: "invalid",
        tolerance: "touch",
        drag: function () {
            removeTrip();
        }
    })
    $("#conFlaskDropTemp").droppable({
        accept: "#measCylTemp",
        drop: function () {
            showArr = 48;
            $("#measCylTemp").css({ left: 69 + "%", top: 11 + "%" })
            setTimeout(function () {
                $('#measCylTemp').animate(
                    { deg: -88 },
                    {
                        duration: 1000,
                        step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' })
                            $("#thermometer").css({ "cursor": "pointer" })
                        }
                    })
            }, 1000)
            setTimeout(function () {
                $("#cylWaterTemp").css({ "display": "none" });
                $("#cylWaterBendTemp").css({ "display": "block" });
                $("#waterpouringTemp").show();
                $("#waterpouringTemp").animate({ 'height': '31%' }, 1000, function () {
                    $('#measCylTemp').animate(
                        { deg: 0 },
                        {
                            duration: 1000,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                $("#thermometer1").css({ "cursor": "pointer" })
                                $("#cylWaterBendTemp").css({ "display": "none" });
                                setTimeout(function () {
                                    $("#measCylTemp").css({ left: 74 + "%", top: 24 + "%" })
                                    $('#measCylTemp').draggable('disable')
                                    $("#measCylTemp").css({ "cursor": "default" })
                                }, 1000)
                                dragThermoMeth();
                            }
                        })
                })
                $("#coniWaterTemp").fadeIn(1000, function () {
                    $("#waterpouringTemp").css({ "display": "none" });
                })
            }, 2000)
        }
    })
}

function dragThermoMeth() {
    $("#thermometer1").draggable({
        containment: "#canvasBox",
        revert: "invalid",
        tolerance: "touch",
        drag: function () {
            removeTrip();
        }
    })
    $("#conFlaskDropTemp").droppable({
        accept: "#thermometer1",
        drop: function () {
            showArr = 41;
            $("#thermometer1").css({ left: -49 + "%", top: 29 + "%" })
            $('#thermometer1').animate(
                { deg: -73 },
                {
                    duration: 1000,
                    step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' })
                        $("#thermometer1").draggable("disable")
                        $("#coniTemp").css({ "cursor": "pointer" })
                        $("#thermometer1").css({ "cursor": "default" })
                        setTimeout(function () {
                        }, 1000)
                        $("#coniTemp").draggable("enable")
                        dragConicalMeth()
                    }
                })
        }
    })
}
function dragConicalMeth() {
    $("#coniTemp").draggable({
        containment: "#canvasBox",
        revert: "invalid",
        tolerance: "touch",
        drag: function () {
            removeTrip();
        }
    })
    $("#burnerDropTemp").droppable({
        accept: "#coniTemp",
        drop: function () {
            showArr = 42;
            $("#coniTemp").css({ left: 35 + "%", top: 9 + "%" })
            $("#coniTemp").draggable("disable")
            $("#coniTemp").css({ "cursor": "default" })
            $("#burnerDropTemp").hide();
            $("#burner").css({ "cursor": "pointer" });
            $("#burner").click(function () {
                showArr = 43;
                removeTrip();
                ImageInitLoad(imageArrayFlame, "fireAnimation", "testFire", "newFireAnimation")
                ImageInitLoad(imageArrayBubble, "bubbleAnimation", "testBub", "newBubbleAnimation")
                $("#burnerOn").css({ "display": "block" });
                fireAnim = ImageAnimationINFinity("newFireAnimation", "testFire", imageArrayFlame, 100)
                $("#alertMsgTemp,#alertTextTempHeat").css({ "display": "block" });
                bubbleAnim = ImageAnimationINFinity("newBubbleAnimation", "testBub", imageArrayBubble, 100)
                $("#burnerOff,#alertTextTemp").css({ "display": "none" });
                $("#burner").click(function () {
                    showArr = 49
                    removeTrip();
                    $("#burnerOff").css({ "display": "block" });
                    $("#burner").css({ "pointer-events": "none" });
                    clearAnimation(bubbleAnim, "bubbleAnimation")
                    $("#thermometer1").css({ "cursor": "pointer" })

                    $("#burnerOn").css({ "display": "none" });
                    clearAnimation(fireAnim, "fireAnimation")
                    $('#thermometer1').click(function () {
                        showArr = 50
                        removeTrip();
                        $("#thermometer1").css({ "cursor": "default" })
                        $('#thermometer1').animate(
                            { deg: 0 },
                            {
                                duration: 1000,
                                step: function (now) {
                                    $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                }
                            })
                        $("#thermometer1").animate({ left: 330 + "%", top: 238 + "%" })
                        $("#coniTemp").css({ "cursor": "pointer" })
                        $("#coniTemp").draggable("enable")
                        dragConical();
                    })
                })
            })
        }
    })
}

function roomTemp() {
    originalState = $("#effectOfTemp").html();
    $("#tempVal").html("27")
    ImageInitLoad(imageArrayWater3, "waterAnimation3", "test3", "newWaterAnimation3")
    $("#initialTempAlert,#alertTextTemp4").css({ display: 'block' });
    $("#glassStopNaTemp").css({ "cursor": "pointer" })
    $("#glassStopNaTemp").click(function () {
        showArr = 24;
        removeTrip();
        $("#methodselector").prop('disabled', true);
        $("#initialTempAlert,#alertTextTemp4").fadeOut();
        $("#glassStopNaTemp").css({ "pointer-events": "none" });
        $("#glassStopNaTemp").animate({ top: 29 + "%" }, function () {
            $("#glassStopNaTemp").animate({ left: 81 + "%" }, function () {
                $("#glassStopNaTemp").animate({ top: 69 + "%" })
            })
            $("#bottleComNaTemp").css({ "cursor": "pointer" })
        })
        $("#bottleComNaTemp").draggable({
            containment: "#canvasBox",
            revert: "invalid",
            tolerance: "touch",
            drag: function () {
                removeTrip();
            }
        })
        $("#measCylDropTemp").droppable({
            accept: "#bottleComNaTemp",
            drop: function () {
                showArr = 25;
                $("#bottleComNaTemp").css({ left: 82 + "%", top: 10 + "%" })
                setTimeout(function () {
                    $('#bottleComNaTemp').animate(
                        { deg: -80 },
                        {
                            duration: 1000,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                $("#bottleBendWaterNaTemp").css({ "display": "block" });
                                $("#bottleWaterNaTemp").css({ "display": "none" });

                                setTimeout(function () {
                                    $("#waterpouringNaTemp").show();
                                    $("#waterpouringNaTemp").animate({ 'height': '40%' }, 1000)
                                    $("#cylWaterTemp").fadeIn(1000, function () {
                                        $("#waterpouringNaTemp").css({ "display": "none" });
                                    });
                                }, 600)
                            }
                        })
                }, 1000)
                setTimeout(function () {
                    $('#bottleComNaTemp').animate(
                        { deg: 0 },
                        {
                            duration: 1000,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                $("#bottleBendWaterNaTemp").css({ "display": "none" });
                                $("#bottleWaterNaTemp").css({ "display": "block" });
                                $("#bottleComNaTemp").animate({ left: 85 + "%", top: 45 + "%" }, function () {
                                    $("#glassStopNaTemp").animate({ left: 87.4 + "%", top: 33.2 + "%" })
                                })
                                $("#bottleComNaTemp").draggable("disable")
                                $("#bottleComNaTemp,#glassStopNaTemp,#bottleWaterNaTemp").css({ "cursor": "default" })
                                $("#glassStopNaTemp").css({ "pointer-events": "none" })
                                $("#measCylTemp").css({ "cursor": "pointer" })
                                dragMeas();
                                $("#measCylDropTemp").hide();
                            }
                        })
                }, 3000)
            }
        })
    })
}

function dragMeas() {
    $("#measCylTemp").draggable({
        containment: "#canvasBox",
        revert: "invalid",
        tolerance: "touch",
        drag: function () {
            removeTrip();
        }
    })

    $("#conFlaskDropTemp").droppable({
        accept: "#measCylTemp",
        drop: function () {
            $("#measCylTemp").css({ left: 69 + "%", top: 11 + "%" })
            setTimeout(function () {
                $('#measCylTemp').animate(
                    { deg: -88 },
                    {
                        duration: 1000,
                        step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' })
                            $("#thermometer").css({ "cursor": "pointer" })
                        }
                    })
            }, 1000)
            setTimeout(function () {
                showArr = 26;

                if (flagVariable3 == 0) {
                    flagVariable3 = 1;
                    QuizCoreExecuter(1, "How many grams of sodium thiosulphate (Na₂S₂O₃) is required to prepare 250 ml of 0.1 M", "3.95g", "0.1g", "3.02g", "6.2g", "3.95g", 1, 2)
                }
                else {
                    showArr = 27;
                }
            }, 5000);
            setTimeout(function () {
                $("#cylWaterTemp").css({ "display": "none" });
                $("#cylWaterBendTemp").css({ "display": "block" });
                $("#waterpouringTemp").show();
                $("#waterpouringTemp").animate({ 'height': '31%' }, 1000, function () {
                    $('#measCylTemp').animate(
                        { deg: 0 },
                        {
                            duration: 1000,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                $("#cylWaterBendTemp").css({ "display": "none" });
                                setTimeout(function () {
                                    $("#measCylTemp").css({ left: 74 + "%", top: 24 + "%" })
                                    $('#measCylTemp').draggable('disable')
                                    $("#measCylTemp").css({ "cursor": "default" })
                                }, 1000)
                                dragThermo();
                                showArr = 27;
                            }
                        })
                })
                $("#coniWaterTemp").fadeIn(1000, function () {
                    $("#waterpouringTemp").css({ "display": "none" });
                })
            }, 2000)
        }
    })
}

function dragThermo() {
    $("#thermometer").draggable({
        containment: "#canvasBox",
        revert: "invalid",
        tolerance: "touch",
        drag: function () {
            removeTrip();
        }
    })
    $("#conFlaskDropTemp").droppable({
        accept: "#thermometer",
        drop: function () {
            showArr = 28;
            removeTrip();
            $("#thermometer").css({ left: 51 + "%", top: 51 + "%" })
            $('#thermometer').animate(
                { deg: -73 },
                {
                    duration: 1000,
                    step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' })
                        $("#thermometer").draggable("disable")
                        setTimeout(function () {
                            $("#alertMsgTemp").css({ "display": "block" });

                        }, 1000)
                        setTimeout(function () {

                            $('#thermometer').click(function () {
                                showArr = 29;
                                removeTrip();
                                $("#alertMsgTemp").css({ "display": "none" });
                                $("#thermometer").css({ "cursor": "default" })

                                $('#thermometer').animate(
                                    { deg: 0 },
                                    {
                                        duration: 1000,
                                        step: function (now) {
                                            $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                        }
                                    })
                                $("#thermometer").animate({ left: 75 + "%", top: 81 + "%" })
                                $("#coniTemp").css({ "cursor": "pointer" })
                                dragConical()
                            })
                        }, 3000)
                    }
                })
        }
    })
}
function dragConical() {
    $("#alertMsgTemp").css({ "display": "none" })

    $("#coniTemp").draggable({
        containment: "#canvasBox",
        revert: "invalid",
        tolerance: "touch",
        drag: function () {
            removeTrip();
            $("#thermometer2").css({ "display": "block" });
            $("#thermometer1").css({ "display": "none" });
        }
    })
    $("#buretteDownDropTemp").droppable({
        accept: "#coniTemp",
        drop: function () {

            $("#coniTemp").css({ "cursor": "default" })
            $("#coniTemp").css({ left: 15.4 + "%", top: 61 + "%", width: + 12 + "%", height: + 26 + "%" })
            $("#coniWaterTemp").css({ left: 6 + "%", height: 40 + "%", top: + 39 + "%", width: + 89 + "%" })
            $("#conicalFlaskTemp").css({ height: 75 + "%", width: 93 + "%" })
            $("#measCylDropTemp,#buretteDropTemp").css({ "display": "none" });
            $("#buretteTapTemp").css({ "pointer-events": "auto" })
            $("#buretteTapTemp").css({ "cursor": "pointer" })
            $("#stopWatchOffTemp").css({ "display": "block" });
            $("#buretteDownDropTemp").css({ "display": "none" });
            $("#coniTemp").draggable("disable")
            $("#alertTextTemp4").css({ display: 'none' });
            $("#alertMsgTemp2,#alertTextTemp2").css({ display: 'block' });
            setTimeout(function () {
                showArr = 30;

                if (flagVariable4 == 0) {
                    flagVariable4 = 1;
                    QuizCoreExecuter(2, "HCl acts as reducing agent because", "It can be oxidised to chlorine by strong reducing agents", "It oxidises strong reducing agents", "It can be oxidised to chlorine by strong oxidising agents", "It oxidises strong oxidizing agents", "It can be oxidised to chlorine by strong reducing agents", 1, 2)
                }
                else {
                    showArr = 31;
                }
            }, 1000);

            $("#buretteTapTemp").click(function () {
                showArr = 32;
                removeTrip();
                waterAnim3 = ImageAnimationINFinity("newWaterAnimation3", "test3", imageArrayWater3, 100)
                $("#alertMsgTemp2,#alertTextTemp2").css({ display: 'none' });
                $("#buretteCloseTemp").css({ "display": "none" });
                $("#buretteTapCloseTemp").css({ "display": "block", "cursor": "pointer" });
                $("#buretteTapCloseTemp").click(function () {
                    showArr = 33;
                    removeTrip();
                    clearAnimation(waterAnim3, "waterAnimation3")
                    $("#buretteCloseTemp").css({ "display": "block" });
                    $("#buretteTapCloseTemp").css({ "cursor": "default" })
                    $("#conFlaskDropTemp").css({ "display": "none" });
                    $("#stopWatchOffTemp").css({ "cursor": "pointer" })

                    stopwatchClick();
                    $("#alertMsgTemp").css({ "display": "none" });
                })
            })
        }
    })
}

function stopwatchClick() {
    $("#stopWatchOffTemp").click(function () {
        showArr = 34;
        removeTrip();
        $("#stopWatchOffTemp").css({ "pointer-events": "none" });
        $(".timerDisplayTemp").css({ "display": "block" });
        var timerRef = document.querySelector('.timerDisplayTemp');
        $("#stopWatchOffTemp").css({ "display": "none" })
        $("#stopWatchOnTemp,.timerDisplayTemp").css({ "display": "block" })
        $("#stopWatchOnTemp").css({ "cursor": "pointer" });
        $("#coniTemp").css({ "cursor": "pointer" })
        $("#stopWatchOnTemp").css({ "cursor": "default" })
        $("#conFlaskDropShakeTemp").css({ "display": "block" });
        $("#coniTemp").draggable("enable")
        $("#conFlaskDropShakeTemp").droppable({
            accept: "#coniTemp",
            drop: function () {
                showArr = 35;
                removeTrip();
                $("#buretteTapCloseTemp").css({ "cursor": "pointer" })
                $("#conFlaskDropShakeTemp").css({ "display": "none" });
                ShakingTemp();
                $("#coniTemp").draggable("disable")
                $("#coniTemp").animate({ left: 15.4 + "%", top: 61 + "%" }, function () {
                    $("#alertMsgTemp2,#alertTextTemp3").css({ display: 'block' });
                    $("#buretteTapCloseTemp").click(function () {
                        showArr = 36;
                        removeTrip();
                        $("#alertMsgTemp2,#alertTextTemp3").css({ display: 'none' });
                        $("#buretteCloseTemp,#alertTextTemp").css({ "display": "none" });
                        $("#buretteTapCloseTemp").css({ "cursor": "pointer" })
                        $("#alertTextTemp2").css({ display: 'block' });
                        ImageInitLoad(imageArrayWater4, "waterAnimation4", "test4", "newWaterAnimation4")
                        waterAnim4 = ImageAnimationINFinity("newWaterAnimation4", "test4", imageArrayWater4, 100)
                        $("#buretteTapCloseTemp").css({ "display": "block" });
                        $("#buretteTapCloseTemp").click(function () {
                            showArr = 37;
                            removeTrip();
                            $("#buretteTapCloseTemp").css({ "pointer-events": "none" });
                            $("#buretteTapTemp").css({ "pointer-events": "none" });
                            clearAnimation(waterAnim4, "waterAnimation4")
                            $("#buretteCloseTemp").css({ "display": "block" });
                            $("#coniTemp").draggable("enable")
                            $("#buretteTapCloseTemp").css({ "cursor": "default" })
                            $("#coniTemp").css({ "cursor": "pointer" })
                            $("#conFlaskDropTemp").css({ "display": "none" });
                            $("#crossTileDropTemp").droppable({
                                accept: "#coniTemp",
                                drop: function () {
                                    showArr = 38;
                                    $("#coniTemp").animate({ left: 56.5 + "%", top: 62 + "%" })
                                    $("#coniWaterTemp").fadeOut(6000)
                                    $("#coniTemp").css({ "cursor": "default" })
                                    $("#alertMsgTemp2").css({ display: 'none' });
                                    $("#coniTemp").draggable("disable")
                                    $("#FadedconiWaterTemp").fadeIn(7000, function () {
                                        $("#stopWatchOnTemp").css({ "cursor": "pointer" })
                                        setTimeout(function () {
                                            $("#stopWatchOnTemp").click(function () {
                                                if (turnsTemp == 5)
                                                    showArr = 40;
                                                else {
                                                    showArr = 39;

                                                }
                                                removeTrip();
                                                $("#timerMsgTemp").css({ "display": "block" })
                                                $("#coniTemp").draggable("disable")
                                                $("#nextTemp").css({ "display": "block" })
                                                $("#nextTemp").css({ "cursor": "pointer" })
                                                $("#stopWatchOffTemp").css({ "display": "block" })
                                                $("#stopWatchOnTemp").css({ "display": "none" })
                                                if (turnsTemp == 1) {
                                                    timerRef.innerHTML = '00 : 02 : 30';
                                                }
                                                else if (turnsTemp == 2) {
                                                    timerRef.innerHTML = '00 : 02 : 07 ';
                                                }
                                                else if (turnsTemp == 3) {
                                                    timerRef.innerHTML = '00 : 01 : 45 ';
                                                }
                                                else if (turnsTemp == 4) {
                                                    timerRef.innerHTML = '00 : 01 : 24 ';
                                                }
                                                else {
                                                    timerRef.innerHTML = '00 : 01 : 01 ';
                                                }
                                                clearInterval(int);
                                            });
                                        })
                                        $("#nextTemp").click(function () {
                                            showArr = 23;

                                            removeTrip();
                                            if (turnsTemp == 1) {

                                                $("#resTemp1").css({ "display": "block" })
                                            }
                                            else if (turnsTemp == 2) {

                                                $("#resTemp2").css({ "display": "block" })
                                            }
                                            else if (turnsTemp == 3) {

                                                $("#resTemp3").css({ "display": "block" })
                                            }
                                            else if (turnsTemp == 4) {
                                                $("#resTemp4").css({ "display": "block" })
                                            }
                                            else {
                                                $("#resTemp5").css({ "display": "block" })
                                                $("#nextTemp").css({ "display": "none" })
                                            }
                                            $("#nextTemp").css({ "pointer-events": "none" });
                                            $("#coniTemp").draggable("disable")
                                            $("#effectOfTemp").html("");
                                            $("#effectOfTemp").html(originalState);
                                            $("#glassStopNaTemp").css({ "pointer-events": "" });
                                            turnsTemp++;
                                            repeatTemp()
                                        })
                                    })
                                }
                            })
                        })
                    })

                })
            }
        })
    })
}

function normTemp() {
    if (turnsTemp == 1) {
        $("#tempVal").html("27")
    }
    ImageInitLoad(imageArrayWater3, "waterAnimation3", "test3", "newWaterAnimation3")
    $("#glassStopNaTemp").css({ "cursor": "pointer" })
    $("#glassStopNaTemp").click(function () {
        $("#alertMsgClean").fadeOut()

        $("#methodselector").prop('disabled', true);
        showArr = 24;
        removeTrip();
        $("#glassStopNaTemp").css({ "pointer-events": "none" });
        $("#glassStopNaTemp").animate({ top: 29 + "%" }, function () {
            $("#glassStopNaTemp").animate({ left: 81 + "%" }, function () {
                $("#glassStopNaTemp").animate({ top: 69 + "%" })
            })
            $("#bottleComNaTemp").css({ "cursor": "pointer" })
        })
        $("#bottleComNaTemp").draggable({
            containment: "#canvasBox",
            revert: "invalid",
            tolerance: "touch",
            drag: function () {
                removeTrip();
            }
        })
        $("#measCylDropTemp").droppable({
            accept: "#bottleComNaTemp",
            drop: function () {
                showArr = 25;
                $("#bottleComNaTemp").css({ left: 82 + "%", top: 10 + "%" })
                setTimeout(function () {
                    $('#bottleComNaTemp').animate(
                        { deg: -80 },
                        {
                            duration: 1000,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                $("#bottleBendWaterNaTemp").css({ "display": "block" });
                                $("#bottleWaterNaTemp").css({ "display": "none" });

                                setTimeout(function () {
                                    $("#waterpouringNaTemp").show();
                                    $("#waterpouringNaTemp").animate({ 'height': '40%' }, 1000)
                                    $("#cylWaterTemp").fadeIn(1000, function () {
                                        $("#waterpouringNaTemp").css({ "display": "none" });
                                    });
                                }, 600)
                            }
                        })
                }, 1000)
                setTimeout(function () {
                    $('#bottleComNaTemp').animate(
                        { deg: 0 },
                        {
                            duration: 1000,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' })
                                $("#bottleBendWaterNaTemp").css({ "display": "none" });
                                $("#bottleWaterNaTemp").css({ "display": "block" });
                                $("#bottleComNaTemp").animate({ left: 85 + "%", top: 45 + "%" }, function () {
                                    $("#glassStopNaTemp").animate({ left: 87.4 + "%", top: 33.2 + "%" })

                                })
                                $("#bottleComNaTemp").draggable("disable")
                                $("#bottleComNaTemp,#glassStopNaTemp,#bottleWaterNaTemp").css({ "cursor": "default" })
                                $("#glassStopNaTemp").css({ "pointer-events": "none" })
                                $("#measCylTemp").css({ "cursor": "pointer" })
                                dragMeasMeth();
                                $("#measCylDropTemp").hide();
                            }
                        })
                }, 3000)
            }
        })
    })
}

function ShakingTemp() {
    for (var i = 0; i <= 6; i++) {

        $('#coniTemp').animate(
            { deg: -10 },
            {
                duration: 100,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            });
        $('#coniTemp').animate(
            { deg: 10 },
            {
                duration: 100,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            });
    }
    $('#coniTemp').animate(
        { deg: 0 },
        {
            duration: 100,
            step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        });
    $("#coniTemp").css({ left: 34 + "%", top: 6 + "%", width: + 12 + "%", height: + 26 + "%" })
    $("#coniTemp").css({ "cursor": "default" })
    $("#initialTempAlert").css({ display: 'none' });

}

function repeatTemp() {
    $("#alertMsgClean").css({ "display": "block" })
    if (turnsTemp == 2) {
        $("#tempNormVal").html("37")
        $("#thermometer1").css({ "display": "block" })
        $("#thermometer").css({ "display": "none" })
        normTemp()
    }
    else if (turnsTemp == 3) {
        $("#tempNormVal").html("47")
        normTemp()
        $("#thermometer1").css({ "display": "block" })
        $("#thermometer").css({ "display": "none" })
    }
    else if (turnsTemp == 4) {
        $("#tempNormVal").html("57")
        $("#thermometer1").css({ "display": "block" })
        $("#thermometer").css({ "display": "none" })
        normTemp()
    }
    else if (turnsTemp == 5) {
        $("#nextTemp").css({ "display": "none" })
        core()
        $("#tempNormVal").html("67")
        $("#thermometer1").css({ "display": "block" })
        $("#thermometer").css({ "display": "none" })
        normTemp()
    }
    else {
        $("#alertMsgClean").css({ "display": "none" })


        $("#alertMsgTemp").css({ "display": "none" });
        $("#showGraphTemp,#plotGraphTemp").prop('disabled', false);
        $("#glassStopNaTemp").css({ "pointer-events": "none" });
        showArr = 44;

        $("#showGraphTemp").click(function () {
            showArr = 45;

            removeTrip();
            $("#graphPaperTemp").css({ "display": "block" })
            $("#showGraphTemp").prop('disabled', true);

            $("#plotGraphTemp").click(function () {
                showArr = 46;

                $("#GraphLineTemp").css({ "display": "block" })
                $("#plotGraphTemp").prop('disabled', true);
                $("#inferenceImg1").css({ "display": "block" })
                $("#inferenceImg1").css({ "cursor": "pointer" })
                removeTrip();
                $("#inferenceImg1").click(function () {
                    showArr = 47;

                })
            })
        })
    }
}

function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
    for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length - 1; ANIMATIONForloop++) {
        var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
        $("#" + ANIMATIONDivName).append($tempx2);
    }
}

function ImageAnimationINFinity(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed) {
    var GlobalVariable = 0;
    var ANIMATIONTimesReached = 0;
    var CLEARImageAnimation = setInterval(function () {
        $('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
        $('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
        GlobalVariable++;
        if (GlobalVariable == ANIMATIONImageArray.length - 1) {
            $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
            $('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
            GlobalVariable = 0;
            ANIMATIONTimesReached++;
        }
    }, ANIMATIONSpeed);
    return (CLEARImageAnimation);
}