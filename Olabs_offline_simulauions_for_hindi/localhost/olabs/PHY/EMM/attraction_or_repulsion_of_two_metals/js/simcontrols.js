var testing=[]

var connectionCounter = 0;
var thumb = 0;
var thumbItem = ''
var ctx, c;

var mainHeight, mainWidth;
var iA, iB, m, wireLength, d;
var repulsion = false;
d = .0015;
m = 0.000001256;
pi = 3.14;
wireLength = 0.18;
iA = 0.551;
iB = 2.448;
var tab;
var option1, option2, option3;
option1 = option2 = option3 = false;
var att = true;


// var table1 = [{ pos: 13.6, i1: 0.551, i2: 2.448 },
// { pos: 17, i1: 0.44, i2: 1.959 },
// { pos: 22, i1: 0.29, i2: 1.306 },
// { pos: 27, i1: 0.238, i2: 1.061 },
// { pos: 32, i1: 0.9165, i2: 0.734 },
// { pos: 37, i1: 0.154, i2: 0.684 },
// { pos: 42, i1: 0.128, i2: 0.568 },
// { pos: 47, i1: 0.119, i2: 0.528 },
// { pos: 52, i1: 0.095, i2: 0.422 },
// { pos: 57, i1: 0.077, i2: 0.342 },
// { pos: 62, i1: 0.056, i2: 0.253 },
// { pos: 69.8, i1: 0.045, i2: 0.202 }]
// var table2 = [
//     { pos: 13.6, i1: 0.6, i2: 2.4 },
//     { pos: 17, i1: 0.48, i2: 1.92 },
//     { pos: 22, i1: 0.32, i2: 1.28 },
//     { pos: 27, i1: 0.26, i2: 1.04 },
//     { pos: 32, i1: 0.18, i2: 0.27 },
//     { pos: 37, i1: 0.168, i2: 0.678 },
//     { pos: 42, i1: 0.144, i2: 0.576 },
//     { pos: 47, i1: 0.13, i2: 0.52 },
//     { pos: 52, i1: 0.104, i2: 0.416 },
//     { pos: 57, i1: 0.086, i2: 0.344 },
//     { pos: 62, i1: 0.062, i2: 0.248 },
//     { pos: 69.8, i1: 0.028, i2: 0.192 },
// ]

// var table3 = [
//     { pos: 13.6, i1: 0.692, i2: 2.306 },
//     { pos: 17, i1: 0.553, i2: 1.846 },
//     { pos: 22, i1: 0.369, i2: 1.23 },
//     { pos: 27, i1: 0.3, i2: 1 },
//     { pos: 32, i1: 0.207, i2: 0.69 },
//     { pos: 37, i1: 0.193, i2: 0.646 },
//     { pos: 42, i1: 0.166, i2: 0.553 },
//     { pos: 47, i1: 0.15, i2: 0.5 },
//     { pos: 52, i1: 0.12, i2: 0.43 },
//     { pos: 57, i1: 0.099, i2: 0.33 },
//     { pos: 62, i1: 0.071, i2: 0.238 },
//     { pos: 69.8, i1: 0.057, i2: 0.19 },

// ]
var table1 = [{ pos: 12, i1: 0.551, i2: 2.448 },
    { pos: 17, i1: 0.44, i2: 1.959 },
    { pos: 22, i1: 0.29, i2: 1.306 },
    { pos: 27, i1: 0.238, i2: 1.061 },
    { pos: 32, i1: 0.9165, i2: 0.734 },
    { pos: 37, i1: 0.154, i2: 0.684 },
    { pos: 42, i1: 0.128, i2: 0.568 },
    { pos: 47, i1: 0.119, i2: 0.528 },
    { pos: 52, i1: 0.095, i2: 0.422 },
    { pos: 57, i1: 0.077, i2: 0.342 },
    { pos: 62, i1: 0.056, i2: 0.253 },
    { pos: 70, i1: 0.045, i2: 0.202 }]
    var table2 = [
        { pos: 8.3, i1: 0.6, i2: 2.4 },
        { pos: 16.6, i1: 0.48, i2: 1.92 },
        { pos: 24.9, i1: 0.32, i2: 1.28 },
        { pos: 33.2, i1: 0.26, i2: 1.04 },
        { pos: 41.5, i1: 0.18, i2: 0.27 },
        { pos: 49.8, i1: 0.168, i2: 0.678 },
        { pos: 58.1, i1: 0.144, i2: 0.576 },
        { pos: 59.4, i1: 0.13, i2: 0.52 },
        { pos: 61.7, i1: 0.104, i2: 0.416 },
        { pos: 63, i1: 0.086, i2: 0.344 },
        { pos: 65.3, i1: 0.062, i2: 0.248 },
        { pos: 70, i1: 0.028, i2: 0.192 },
    ]
    
    var table3 = [
        { pos: 8.3, i1: 0.692, i2: 2.306 },
        { pos: 16.6, i1: 0.553, i2: 1.846 },
        { pos: 24.9, i1: 0.369, i2: 1.23 },
        { pos: 33.2, i1: 0.3, i2: 1 },
        { pos: 41.5, i1: 0.207, i2: 0.69 },
        { pos: 49.8, i1: 0.193, i2: 0.646 },
        { pos: 58.1, i1: 0.166, i2: 0.553 },
        { pos: 66.4, i1: 0.15, i2: 0.5 },
        { pos: 64.7, i1: 0.12, i2: 0.43 },
        { pos: 65, i1: 0.099, i2: 0.33 },
        { pos: 68.3, i1: 0.071, i2: 0.238 },
        { pos: 70, i1: 0.057, i2: 0.19 },
    
    ]

$(window).resize(function () {
    setTimeout(function () {
        mainWidth = $("#mainDiv").width();
        mainHeight = $("#mainDiv").height();

        $("#canvas1").css({ width: mainWidth, height: mainHeight });
        oL = $("#mainDiv").offset().left;
        pL = $("#mainDiv").position().left;
        oT = $("#mainDiv").offset().top;
        pT = $("#mainDiv").position().top;

        // console.log({ oL: oL, pL: pL, oT: oT, pT: pT });

        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
    }, 1000);

})

$(document).ready(function () {
    gt = new Gettext({ 'domain': 'messages' });
    const expName = $("#expName").html();
    console.log(expName);
    $("#expName").html(gt.gettext(expName));

    $('[data-translate]').html(function (index, originalHtml) {
        // console.log(originalHtml);
        return gt.gettext(originalHtml);
    });
    $('#dropBox').prop('disabled', true);
    c = document.getElementById("canvas1");
    ctx = c.getContext("2d");

    helpPos = "e";
    helpText = "Click on the Wooden Board from controls";
    console.log(helpText);
    helpText = gt.gettext(helpText);
    helpSelector = ".woden-board"
    // $(".control-div").animate({ 'scrollTop': '600px' })

    mainWidth = $("#mainDiv").width();
    mainHeight = $("#mainDiv").height();

    $("#canvas1").css({ width: mainWidth, height: mainHeight });
    oL = $("#mainDiv").offset().left;
    pL = $("#mainDiv").position().left;
    oT = $("#mainDiv").offset().top;
    pT = $("#mainDiv").position().top;

    // console.log({ oL: oL, pL: pL, oT: oT, pT: pT });

    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight;



    // $(window).resize(function () {
    //     var canvas = document.getElementById("canvas1");
    //     setTimeout(function () {


    //         mainWidth = $("#mainDiv").width(); mainHeight = $("#mainDiv").height();

    //         canvas.attr('width', $(window).width());
    //         canvas.attr('height', $(window).height());

    //         ctx.canvas.width = ctx.canvas.clientWidth;
    //         ctx.canvas.height = ctx.canvas.clientHeight;

    //         oL = $("#mainDiv").offset().left;
    //         pL = $("#mainDiv").position().left;
    //         oT = $("#mainDiv").offset().top;
    //         pT = $("#mainDiv").position().top;
    //     }, 200)
    // });
    $("#canvas1").hide();

    var bigA = 'images/bigAtt/';
    var smallA = 'images/smallAtt/';
    var bigR = 'images/bigRep/';
    var smallR = 'images/smallRep/';
    for (i = 1; i <= 12; i++) {
        $("#bigAttDiv").append('<img src="' + simPath + bigA + i + '.png" class="bigAtt" >')
        $("#smallAttDiv").append('<img src="' + simPath + smallA + i + '.png" class="smallAtt" >')
        $("#bigRepDiv").append('<img src="' + simPath + bigR + i + '.png" class="bigRep" >')
        $("#smallRepDiv").append('<img src="' + simPath + smallR + i + '.png" class="smallRep" >')
    }

    $('.thumb').pointerDisable();
    $('.thumb1').pointerEnable();
    $('.thumb1').click(function () {

        $(this).fadeOut();
        setTimeout(function () {
            $("#thumbContainer").children().eq(1).pointerEnable();

        }, 1000)

        $(".wooden-board").fadeIn();
        helpPos = "e";
        helpText = "Click on the 1st Wooden Block in controls";
        console.log(helpText);
        helpText = gt.gettext(helpText);
        helpSelector = ".block-l"
    })
    $(".thumb").click(function () {
        thumb++;
        // if (thumb != 4 && thumb != 6 && thumb != 7 && thumb != 8) {
        $(this).hide();
        removeTrip();
        // }
        if (thumb == 2) {
            thumbItem = ".wooden-block-l"
            helpPos = "e";
            helpText = "Drag and drop 1st Wooden Block from canvas to<br>top of the Wooden Board";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;
        } else if (thumb == 3) {
            thumbItem = ".wooden-block-r"
            helpPos = "e";
            helpText = "Drag and drop 2nd Wooden Block from canvas to<br>top of the Wooden Board";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;
        }
        else if (thumb == 4) {
            thumbItem = ".metal-l1"
            helpPos = "e";
            helpText = "Drag and drop Metal Strip from the canvas to<br>top of 1st Wooden Block";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;

        }
        else if (thumb == 5) {
            thumbItem = ".metal-r1"
            helpPos = "e";
            helpText = "Drag and drop Metal Strip from the canvas to<br>top of 2nd Wooden Block";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;
        }
        else if (thumb == 6) {
            thumbItem = ".nail"
            helpPos = "e";
            helpText = "Drag and drop the Nail beside the Wooden Block1";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;

        }
        else if (thumb == 7) {
            thumbItem = ".nail"
            helpPos = "e";
            helpText = "Drag and drop the Nail beside the Wooden Block2";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;


        }
        else if (thumb == 8) {
            thumbItem = ".nail"
            helpPos = "e";
            helpText = "Drag and drop the Nail beside the Wooden Block1";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;


        }
        else if (thumb == 9) {
            thumbItem = ".nail"
            helpPos = "e";
            helpText = "Drag and drop the Nail beside the Wooden Block2";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = thumbItem;


        }
        else if (thumb == 10) {
            $("#canvas1").show();
            thumbItem = ".rh-div"
            $(".rh-top").fadeIn();
            $('.thumb').pointerEnable()
            $(".drop-area").hide();
            helpPos = "e";
            helpText = "Click on Battery";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = '.battery-thumb';
        }
        else if (thumb == 11) {
            thumbItem = ".battery"
            helpPos = "e";
            helpText = "Click on Key";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = '.key-thumb';

        } else if (thumb == 12) {
            thumbItem = ".key-base"
            $(".key").fadeIn();
            helpPos = "e";
            helpText = "Click on Ammeter";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = '.ammeter-thumb';

        } else if (thumb == 13) {
            $("#showCircuit,.round-lg,.round-md").fadeIn();
            $(".round2").hide();
            thumbItem = ".ammeter-div,.ammeter-img";
            helpPos = "e";
            helpText = "Click on the Show Circuit button to see the circuit diagram<br> and connect the apparatus";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = '#showCircuit';
            $("#canvas1").show();
        }
        $(thumbItem).fadeIn().pointerEnable();

    });

    $(".wooden-block-l").draggable({
        contanment: "#mainDiv",
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '10%',
                    top: '12%'
                })
            }
        },
        start: function () {
            removeTrip();
        }
    });
    $(".wooden-block-r").draggable({
        contanment: "#mainDiv",
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '10%',
                    top: '12%'
                })
            }
        },
        start: function () {
            removeTrip();
        }
    });
    $(".metal-l1").draggable({
        contanment: "#mainDiv",
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '10%',
                    top: '12%'
                })
            }
        },
        start: function () {
            removeTrip();
        }
    });

    $(".metal-r1").draggable({
        contanment: "#mainDiv",
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '10%',
                    top: '12%'
                })
            }
        },
        start: function () {
            removeTrip();
        }
    });
    $(".nail").draggable({
        containment: "#mainDiv",
        revert: function (valid) {
            if (!valid) {
                $(this).animate({
                    left: '10%',
                    top: '40%'
                })
            }
        },
        start: function () {
            removeTrip();
        }
    })
    $(".drop-area").droppable({
        accept: ".wooden-block-l,.wooden-block-r,.metal-r1,.metal-l1,.nail",
        drop: function () {
            if (thumbItem == ".wooden-block-l") {
                $("#thumbContainer").children().eq(thumb).pointerEnable();
                $(thumbItem).animate({
                    left: "33%",
                    top: '12%'
                }, function () {
                    helpPos = "e";
                    helpText = "Click on the 2nd Wooden Block from controls";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '.block-r';
                    setTimeout(function () {

                        $("#simHelp").pointerEnable();

                    }, 500)

                })
            } else if (thumbItem == ".wooden-block-r") {
                $("#thumbContainer").children().eq(thumb).pointerEnable();
                $(thumbItem).animate({
                    left: "63%",
                    top: '12%'
                }, function () {
                    helpPos = "e";
                    helpText = "Click on the 1st Metal Strip in controls";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '.metal';
                    setTimeout(function () {

                        $("#simHelp").pointerEnable();


                    }, 500)

                })
            } else if (thumbItem == ".metal-l1") {
                $("#thumbContainer").children().eq(thumb).pointerEnable();
                $(thumbItem).animate({
                    left: "32%",
                    top: '9.5%'
                }, function () {
                    helpPos = "e";
                    helpText = "Click on the 2nd Metal Strip in controls";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '.metal2';
                    setTimeout(function () {

                        $("#simHelp").pointerEnable();

                    }, 500)

                })
            } else if (thumbItem == ".metal-r1") {
                $("#thumbContainer").children().eq(thumb).pointerEnable();
                $(thumbItem).animate({
                    left: "63.5%",
                    top: '9.5%'
                }, function () {
                    helpPos = "e";
                    helpText = "Click on the Nail";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '.screw-thumb';
                    setTimeout(function () {

                        $("#simHelp").pointerEnable();

                    }, 500)

                })
            } else if (thumbItem == ".nail") {

                if (thumb == 8) {
                    // $("#thumbContainer").children().eq(thumb).pointerEnable();
                    $(thumbItem).animate({
                        left: "37%",
                        top: '39%'
                    }).rotateIt(90);
                    setTimeout(function () {
                        $(".block-with-nail-l").show();
                        $(".wooden-block-l").hide();
                        $(thumbItem).hide();
                        setTimeout(function () {

                            $(thumbItem).css({
                                left: '10%',
                                top: '40%'
                            }).rotateIt(0);
                            $("#simHelp").pointerEnable();
                            $("#thumbContainer").children().eq(thumb).pointerEnable();

                            helpPos = "e";
                            helpText = "Click on the Nail";
                            console.log(helpText);
                            helpText = gt.gettext(helpText);
                            helpSelector = '.screw-thumb4';
                        }, 500)
                    }, 1000)

                } else if (thumb == 9) {

                    // $("#thumbContainer").children().eq(thumb).pointerEnable();
                    $(thumbItem).animate({
                        left: "64%",
                        top: '39%'
                    }).rotateIt(-90);
                    helpPos = "e";
                    helpText = "Click on Rheostat in controls";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);

                    helpSelector = '.rh';
                    setTimeout(function () {
                        $(".block-with-nail-r").show();
                        $(".wooden-block-r").hide();
                        $(thumbItem).hide();
                        setTimeout(function () {
                            $(thumbItem).css({
                                left: '10%',
                                top: '40%'
                            }).rotateIt(0);
                            $("#simHelp").pointerEnable();
                            $("#thumbContainer").children().eq(thumb).pointerEnable();
                        }, 500)
                    }, 1000)
                }
                else if (thumb == 7) {
                    // $("#thumbContainer").children().eq(thumb).pointerEnable();
                    helpPos = "e";
                    helpText = "Click on the Nail";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '.screw-thumb3';

                    $(thumbItem).animate({
                        left: "66%",
                        top: '6%'
                    });
                    setTimeout(function () {
                        $(".metal-r2").show();
                        $(".metal-r1").hide();
                        $(thumbItem).hide();
                        setTimeout(function () {
                            $(thumbItem).css({
                                left: '10%',
                                top: '40%'
                            }).rotateIt(0);
                            $("#simHelp").pointerEnable();
                            $("#thumbContainer").children().eq(thumb).pointerEnable();
                        }, 500)
                    }, 1000)
                } else if (thumb == 6) {

                    // $("#thumbContainer").children().eq(thumb).pointerEnable();
                    $(thumbItem).animate({
                        left: "35%",
                        top: '6%'
                    });
                    helpPos = "e";
                    helpText = "Click on the Nail";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '.screw-thumb2';
                    setTimeout(function () {
                        $(".metal-l2").show();
                        $(".metal-l1").hide();
                        $(thumbItem).hide();
                        setTimeout(function () {
                            $(thumbItem).css({
                                left: '10%',
                                top: '40%'
                            }).rotateIt(0);
                            $("#simHelp").pointerEnable();
                            $("#thumbContainer").children().eq(thumb).pointerEnable();
                        }, 500)
                    }, 1000)
                }

            }

        }
    })
    $('.round-md,.round-lg').draggable();




    $('.rh-top').draggable({
        axis: "x",
        containment: ".rh-container",
        start: function () {
            // $("#smallRepDiv").children().eq(0).hide();
            // $("#bigRepDiv").children().eq(0).hide();
            // $("#smallAttDiv").children().eq(0).hide();
            // $("#bigAttDiv").children().eq(0).hide();
            removeTrip();

            if (wireLength == 0.18) {
                option1 = true;
                rhDragCount = 1;
                tab = table1
            } else if (wireLength == 0.20) {
                alert
                option2 = true;
                rhDragCount = 2;

                tab = table2
            } else {
                option3 = true;
                rhDragCount = 3;

                tab = table3;
            }

        },
        stop: function () {
            $("#dropBox").find(':selected').addClass("optionColour");
            if (repulsion) {
                console.log(option1, option2, option3)
                if (option1 && option2 && option3) {
                    $("#inference").fadeIn();
                    helpPos = "e";
                    helpText = "Click on the Inference icon to see the observation";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '#inference';
                } else {
                    helpPos = "e";
                    helpText = "Click here to change the wire length";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '#dropBox';
                    $("#simHelp").click(function () {
                        $('#thumbContainer').scrollTop(0);  // Immediately sets scroll to top
                    });
                }
            } else {
                if (option1 && option2 && option3) {

                    $("#testRepulsion").fadeIn().pointerEnable();
                    helpPos = "e";
                    helpText = "Click here to Test Repulsion";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '#testRepulsion';

                } else {
                    helpPos = "e";
                    helpText = "Click here to change the wire length";
                    console.log(helpText);
                    helpText = gt.gettext(helpText);
                    helpSelector = '#dropBox';
                    $("#simHelp").click(function () {
                        $('#thumbContainer').scrollTop(0);  // Immediately sets scroll to top
                    });

                    var xtrip = new Trip([
                        {
                            sel: $('.variables'),
                            content: "You can see the results here",
                            expose: false,
                            position: 'e',
                            delay: 2000,
                        },

                    ]);
                    xtrip.start();
                    window.trip = xtrip;
                }
            }
            var w = $(this).parent().width();
            var l = $(this).position().left;
            var leftPer = getPercentageWRT(l, w);
            $(this).css('left', leftPer + '%');
            for (i = 0; i < tab.length; i++) {

                let { pos, i1, i2 } = tab[i];



                if (i < 11) {
                    
                    if (leftPer < tab[i + 1].pos && leftPer > tab[i].pos) {
                        if (repulsion) {
                         
                           
                            $("#smallRepDiv").children().hide();
                            $("#bigRepDiv").children().hide();
                            
                            // Show the child at index i for smallRepDiv and bigRepDiv
                            $("#smallRepDiv").children().eq(i).show();
                            $("#bigRepDiv").children().eq(i).show();
                        }
                        else {
                            
                           // Hide all children of smallAttDiv and bigAttDiv
                            $("#smallAttDiv").children().hide();
                            $("#bigAttDiv").children().hide();

                            // Show the child at index i for smallAttDiv and bigAttDiv
                            $("#smallAttDiv").children().eq(i).show();
                            $("#bigAttDiv").children().eq(i).show();
                        }

                        $("#iA").text(i1);
                        $("#iB").text(i2);

                        if((i1==0.551 && i2==2.448)||(i1== 0.6 && i2== 2.4)||(i1== 0.692 && i2== 2.306)){
                            $(".ammeterNeedleIa").css({
                                "transform": `rotate(296deg)`,
                                "transform-origin": "bottom"
                              });
                            
                              // Apply rotation to ammeterNeedleIb
                              $(".ammeterNeedleIb").css({
                                "transform": `rotate(357deg)`,
                                "transform-origin": "bottom"
                              });
                    }else if((i1==0.44 && i2==1.959)||(i1==0.48 && i2== 1.92)||(i1== 0.553 && i2==1.846 )){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(295deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(329deg)`,
                            "transform-origin": "bottom"
                          });
                        }
                          else if((i1==0.29 && i2==1.306)||(i1==0.32 && i2== 1.28)||(i1== 0.369 && i2==1.23 )){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(293deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(318deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.238 && i2==1.061)||(i1==0.26 && i2== 1.04)||(i1== 0.3 && i2== 1)){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(290deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(311deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.9165 && i2==0.734)||(i1== 0.18 && i2== 0.27)||(i1== 0.207 && i2== 0.69 )){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(302deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(299deg)`,
                            "transform-origin": "bottom"
                          });
                   }else if((i1==0.154 && i2==0.684)||(i1== 0.168 && i2==0.678)||(i1==0.193 && i2== 0.646)){
                    $(".ammeterNeedleIa").css({
                        "transform": `rotate(290deg)`,
                        "transform-origin": "bottom"
                      });
                    
                      // Apply rotation to ammeterNeedleIb
                      $(".ammeterNeedleIb").css({
                        "transform": `rotate(298deg)`,
                        "transform-origin": "bottom"
                      });
                    }else if((i1==0.128 && i2==0.568)||(i1==0.144 && i2== 0.576)||(i1== 0.166 && i2==0.553)){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(292deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(297deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.119 && i2==0.528)||(i1== 0.13 && i2== 0.52)||(i1== 0.15 && i2== 0.5 )){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(292deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(296deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.095 && i2==0.422)||(i1==0.104 && i2== 0.416)||(i1== 0.12 && i2==0.43)){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(291deg)`,

                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(294deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.077 && i2==0.342)||(i1== 0.086 && i2== 0.344)||(i1== 0.099 && i2== 0.33)){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(290deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(291deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.056 && i2==0.253)||(i1== 0.062 && i2== 0.248)||(i1== 0.071 && i2==0.238)){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(289deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(290deg)`,
                            "transform-origin": "bottom"
                          });
                    }else if((i1==0.045 && i2==0.202)||(i1==0.028 && i2== 0.192)||(i1== 0.057 && i2== 0.19)){
                        $(".ammeterNeedleIa").css({
                            "transform": `rotate(288deg)`,
                            "transform-origin": "bottom"
                          });
                        
                          // Apply rotation to ammeterNeedleIb
                          $(".ammeterNeedleIb").css({
                            "transform": `rotate(289deg)`,
                            "transform-origin": "bottom"
                          });
                    }
                        const ans = (m * i1 * i2 * wireLength) / (2 * pi * d);
                        var answer = ans.toExponential(1).replace('e-', 'x10^');

                        var numb = answer.slice(0, answer.indexOf("^"));
                        var exp = answer.slice(answer.indexOf("^") + 1);

                        $("#answer").html('= ' + numb + '<sup>' + -exp + '</sup>');



                    }
                }

            }
        }

    });
    $(".rh-top").pointerDisable();
    var optionChangeCount = 1, rhDragCount = 1;

    // $("#dropBox").on("click", function () {
    //     helpPos = "n";
    //     helpText = "Drag here to change the Resistance.";
    console.log(helpText);
    helpText = gt.gettext(helpText);
    //     helpSelector = '.rh-top';
    // })

    $("#dropBox").on("change", function () {

        removeTrip();
        wireLength = $(this).val();
        $("#wireLength").text(wireLength);
        console.log(wireLength);
        if (wireLength != 0) {
            $(".ammeterNeedleIa").css({
                "transform": `rotate(296deg)`,
                "transform-origin": "bottom"
              });
            
              // Apply rotation to ammeterNeedleIb
              $(".ammeterNeedleIb").css({
                "transform": `rotate(357deg)`,
                "transform-origin": "bottom"
              });
            $(".rh-top").css("left", "16%").pointerEnable();
            console.log(wireLength);
            helpPos = "n";
            helpText = "Drag here to change the Resistance";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = '.rh-top';
            console.log('optionChangeCount', optionChangeCount);
            console.log('rhDragCount', rhDragCount);
            $(".rh-top").css("left", "16%")
            if (repulsion) {
              
               
                
                // $("#smallRepDiv,#bigRepDiv").hide();
                $("#smallRepDiv").children().hide();
                $("#bigRepDiv").children().hide();
                $("#smallRepDiv").children().eq(0).show();
                $("#bigRepDiv").children().eq(0).show();
            }
            else {
               
                  $("#smallAttDiv").children().hide();
                  $("#bigAttDiv").children().hide();
                  $("#smallAttDiv").children().eq(0).show();
                  $("#bigAttDiv").children().eq(0).show();
            }
        
        } else {
            $(".rh-top").css("left", "16%").pointerDisable();
        }


    });
    $("#testRepulsion").pointerEnable();
    $("#testRepulsion").click(function () {
        $('#dropBox').prop('disabled', true);
        $(this).hide();
        $("#smallAttDiv").children().hide();
        $("#bigAttDiv").children().hide();
        $("#bigRepDiv").children().eq(10).show();
        $("#smallRepDiv").children().eq(10).show();
        
        // Show specific children (index 0 in this case)
       

        $(".ammeterNeedleIa").css({
            "transform": `rotate(287deg)`,
            "transform-origin": "bottom"
          });
        
          // Apply rotation to ammeterNeedleIb
          $(".ammeterNeedleIb").css({
            "transform": `rotate(289deg)`,
            "transform-origin": "bottom"
          });
        $("#canvas1").show();
        $("#dropBox").children().removeClass("optionColour");
        $("#iA").html("");
        $("#iB").html("");
        $("#answer").html('');
        // ('select').first().focus();
        $(".rh-top").css("left", "16%").pointerEnable();
        removeTrip();
        repulsion = true;
// alert("repul click")
        option1 = option2 = option3 = false;
        $(this).hide();
    
        $("#showCircuit").fadeIn();

        helpPos = "e";
        helpText = "Click on the Show Circuit button to see the circuit diagram<br> and connect the apparatus";
        console.log(helpText);
        helpText = gt.gettext(helpText);
        helpSelector = '#showCircuit';


        // $("#bigAttDiv,#smallAttDiv").hide();
        // $("#bigRepDiv,#smallRepDiv").hide();
        // $("#bigRepDiv").children().eq(0).show()
        // $("#smallRepDiv").children().eq(0).show()

        $('.rh-nail1,.ammeter2-nail2,.round').fadeOut(2000);
        $('.round2').fadeIn(2500);
        // Initialize a counter variable
      
    
        // Reset the connection counter
      

        connector('.rh-left-div2', '.nail2-div2', '.rh-nail2', "black");
        connector('.nail2-div2', '.rh-left-div2', '.rh-nail2', "black");
        connector('.nail1-div2', '.ammeter2-positive-div2', '.nail1-ammeter2', "black");
        connector('.ammeter2-positive-div2', '.nail1-div2', '.nail1-ammeter2', "black");
       
       
      
          
        
    });
    var circuitFlag = false;
    $("#showCircuit").click(function () {

        circuitFlag = !circuitFlag;
        if (circuitFlag) {
            helpText = "Click on the Hide Circuit button to hide the circuit diagram";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            $(this).html(gt.gettext("Hide Circuit"));
            if (repulsion) {
              
                $(".circuit").hide();
                $("#circuit2").show();
            } else {
                $(".circuit").hide();
                $("#circuit1").show();
            }
        }
        else {
            helpText = "Click on the Show Circuit button to see the circuit diagram<br> and connect the apparatus";
            console.log(helpText);
            helpText = gt.gettext(helpText);

            $(this).html(gt.gettext("Show Circuit"));
            $("#circuit1").hide();
            $("#circuit2").hide();


        }

    })
    connector('.ammeter2-negative-div', '.battery-negative-div', '.battery-ammeter2', "black");
    connector('.battery-negative-div', '.ammeter2-negative-div', '.battery-ammeter2', "black");

    connector('.nail1-div', '.rh-left-div', '.rh-nail1', "black");

    connector('.nail1-div', '.nail2-div', '.cu-nail-to-nail', "black");
    connector('.nail2-div', '.nail1-div', '.cu-nail-to-nail', "black");

    connector('.key-left-div', '.rh-right-div', '.rh-key', "black");
    connector('.rh-right-div', '.key-left-div', '.rh-key', "black");


    connector('.battery-positive-div', '.key-right-div', '.key-battery', "black");
    connector('.key-right-div', '.battery-positive-div', '.key-battery', "black");



    connector('.ammeter1-negative-div', '.battery-negative-div', '.battery-ammeter1', "black");
    connector('.battery-negative-div', '.ammeter1-negative-div', '.battery-ammeter1', "black");


    connector('.metal2-div', '.ammeter1-positive-div', '.ammeter1-metal2', "black");
    connector('.ammeter1-positive-div', '.metal2-div', '.ammeter1-metal2', "black");

    connector('.nail2-div', '.ammeter2-positive-div', '.ammeter2-nail2', "black");
    connector('.ammeter2-positive-div', '.nail2-div', '.ammeter2-nail2', "black");


    connector('.metal1-div', '.rh-left-div', '.wire-rh-to-metal1', "black");
    connector('.rh-left-div', '.metal1-div', '.wire-rh-to-metal1', "black");

    connector('.metal2-div', '.metal1-div', '.cu-metal-to-metal', "black");
    connector('.metal1-div', '.metal2-div', '.cu-metal-to-metal', "black");

    connector('.nail2-div', '.nail1-div', '.cu-nail-to-nail', "black");
    connector('.nail1-div', '.nail2-div', '.cu-nail-to-nail', "black");

    connector('.rh-left-div', '.nail1-div', '.rh-nail1', "black");



    $(".key-drop-area").droppable({
        accept: ".key",
        drop: function () {
            // alert(90)
            $('#dropBox').prop('disabled', false);
            $(".ammeterNeedleIa").css({
                "transform": `rotate(296deg)`,
                "transform-origin": "bottom"
              });
            
              // Apply rotation to ammeterNeedleIb
              $(".ammeterNeedleIb").css({
                "transform": `rotate(357deg)`,
                "transform-origin": "bottom"
              });
            $("#showCircuit").hide();
            helpPos = "e";
            helpText = "Click here to change the wire length";
            console.log(helpText);
            helpText = gt.gettext(helpText);
            helpSelector = '#dropBox';
            $("#simHelp").click(function () {
                $('#thumbContainer').scrollTop(0);  // Immediately sets scroll to top
            });

            $(".key").animate({
                width: '2%',
                left: '53%',
                top: '69%'
            }, function () {
                // alert(91)
                $("#smallAttDiv,#bigAttDiv").show();
                    $("#smallAttDiv").children().hide();
                    $("#bigAttDiv").children().hide();
                    $("#smallAttDiv").children().eq(0).show();
                    $("#bigAttDiv").children().eq(0).show();
                $(".rh-top").css("left", "16%");

                $(".cu-nail-to-nail,.cu-metal-to-metal").hide()
                if (repulsion) {
                    alert("key")
                    // alert(92)
                    $("#smallRepDiv,#bigRepDiv").show();
                    $("#smallRepDiv").children().hide();
                    $("#bigRepDiv").children().hide();

                    $("#smallRepDiv").children().eq(0).show();
                    $("#bigRepDiv").children().eq(0).show();
                }
                else {
                    $("#smallAttDiv,#bigAttDiv").show();
                    $("#smallAttDiv").children().hide();
                    $("#bigAttDiv").children().hide();
                    $("#smallAttDiv").children().eq(0).show();
                    $("#bigAttDiv").children().eq(0).show();
                }
            });


        }
    })


})


function roundRevert() {
    removeTrip();
    $('.metal1-div').animate({
        'left': '33%',
        'top': '8%'
    });

    $('.rh-left-div,.rh-left-div2').animate({
        'left': '19%',
        'top': '73%'
    });

    $('.rh-right-div').animate({
        'left': '42%',
        'top': '62%'
    });

    $('.metal2-div').animate({
        'left': '64%',
        'top': '7%'
    });

    $('.ammeter1-negative-div').animate({
        'left': '82%',
        'top': '30%'
    });

    $('.ammeter1-positive-div').animate({
        'left': '77%',
        'top': '30%'
    });

    $('.ammeter2-negative-div').animate({
        'left': '81%',
        'top': '49%'
    });

    $('.ammeter2-positive-div,.ammeter2-positive-div2').animate({
        'left': '77%',
        'top': '49%'
    });

    $('.battery-negative-div').animate({
        'left': '72%',
        'top': '58%'
    });

    $('.battery-positive-div').animate({
        'left': '65%',
        'top': '58%'
    });

    $('.key-right-div').animate({
        'left': '54.5%',
        'top': '68%'
    });

    $('.key-left-div').animate({
        'left': '48.7%',
        'top': '68%'
    });

    $('.nail2-div,.nail2-div2').animate({
        'left': '61.7%',
        'top': '38%'
    });

    $('.nail1-div,.nail1-div2').animate({
        'left': '37.7%',
        'top': '38%'
    });

}




var dropCount = 0;
function connector(startPoint, endPoint, connector) {
    var wireColor = "#000000"
    var elemX, elemY
    $(startPoint).draggable({
        containment: "#mainDiv",
        revert: function (droped) {

            ctx.clearRect(0, 0, mainWidth, mainHeight);
            roundRevert();
            removeTrip();
            $(endPoint).css({ opacity: 0.5 });



        },
        start: function () {
            console.log("endPoint",endPoint);
            elemX = $(startPoint).position().left;
            elemY = $(startPoint).position().top;
            var elemWidth = $(startPoint).width() / 2;
            var elemHeight = $(startPoint).height() / 2;
            startX = elemX + elemWidth;
            startY = elemY + elemHeight;
            droperInitPos = $(startPoint).css("left");
            $(endPoint).css({ opacity: 1 });

        },

        drag: function (e, ui) {
            removeTrip();
            elemXX = $(startPoint).position().left;
            elemYY = $(startPoint).position().top;
            var x = e.clientX - oL - pL;
            var y = e.clientY - oT - pT;
            mouseX = e.pageX - $(e.target).offset().left;
            mouseY = e.pageY - $(e.target).offset().top;;

            ctx.clearRect(0, 0, mainWidth, mainHeight);
            ctx.strokeStyle = wireColor;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(x, y);
            ctx.stroke();

        }

    });


    $(endPoint).droppable({
        
        accept: startPoint.toString(),
        tolerance: "touch",

        drop: function () {

            // new code for connection checking (Avoid valid connections again)
            var sss=1;
            var newString = endPoint+startPoint;
            for(var i=0;i<testing.length;i++)
            {
                if(testing[i]==newString)
                {
                    sss=0
                    break
                }
            }
            testing.push(endPoint+startPoint)
            if(sss!=0)
                dropCount++;
            else
                testing.push(newString)






            console.log(dropCount);
            removeTrip();
            droped = true;
            ctx.clearRect(0, 0, mainWidth, mainHeight);

            $(connector).show();
            roundRevert();
            if (dropCount == 10) {
                $(".thumb_drop").show();
                $(".round-lg,.round-md").hide();
                $("#canvas1").hide();
                helpPos = "w";
                helpText = "Drag and drop the key towards the key holder";
                console.log(helpText);
                helpText = gt.gettext(helpText);
                helpSelector = '.key';


                $(".key").css('cursor', 'pointer');
                $(".key").draggable({
                    containment: "#mainDiv",
                    revert: function (valid) {
                        if (!valid) {
                            $(this).animate({
                                left: '88%',
                                top: '75%'
                            })
                        }
                    }
                })
            } else if (dropCount == 12) {
                $(".ammeterNeedleIa").css({
                    "transform": `rotate(296deg)`,
                    "transform-origin": "bottom"
                  });
                
                  // Apply rotation to ammeterNeedleIb
                  $(".ammeterNeedleIb").css({
                    "transform": `rotate(357deg)`,
                    "transform-origin": "bottom"
                  });
                $("#canvas1").hide();
                $("#showCircuit").fadeOut();
                $('#dropBox').prop('disabled', false);
                $("#bigRepDiv").children().eq(10).hide();
                $("#smallRepDiv").children().eq(10).hide();
                $("#bigRepDiv").children().eq(0).show();
                $("#smallRepDiv").children().eq(0).show();
              
                // alert('Code executed successfully!');
                helpPos = "e";
                helpText = "Click here to change the wire length";
                console.log(helpText);
                helpText = gt.gettext(helpText);
                helpSelector = '#dropBox';
                $("#simHelp").click(function () {
                    $('#thumbContainer').scrollTop(0);  // Immediately sets scroll to top
                });
            }

        }
    });


}



// function removeTrip() {
//     if (tripFlag == true) {
//         $('.trip-block').hide();
//         trip.stop();
//         tripFlag == false;
//     }
// }

